(function attachIntakeBridge(root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  root.BKFLIntakeBridge = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function createIntakeBridge() {
  'use strict'

  const HANDOFF_STORAGE_KEY = 'bkfl_intake_handoffs_v2'
  const ORGANIZATION_EVENT = 'bkfl:organization-change'
  const ORGANIZATION_STORAGE_KEY = 'bkfl_lite_org_v1'
  const PACKAGE_SCHEMA_VERSION = 2
  const SIMULATED_CADENCE_POLICY = Object.freeze({
    deliveryMode: 'simulation',
    firmFollowUpDays: 10,
    maximumReminders: 2,
    reminder2BusinessDays: 5,
    stopOn: ['completion', 'client_response', 'reviewer_pause', 'unavailable_resolution', 'maximum_cadence'],
  })
  const DEFAULT_ORGANIZATION = Object.freeze({
    city: 'Boulder',
    country: 'United States',
    logo: null,
    name: 'McCune Legal',
    phone: '(303) 759-0728',
    state: 'CO',
    street: '2101 Pearl St.',
    website: '',
    zip: '80302',
  })

  const clean = (value) => (typeof value === 'string' ? value.trim() : '')
  const asArray = (value) => (Array.isArray(value) ? value : [])
  const dateOnly = (value) => clean(value).slice(0, 10)
  const numberValue = (value) => {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : 0
  }

  const dueDateAfter = (value, days, businessDays = false) => {
    const date = new Date(`${clean(value).slice(0, 10)}T12:00:00Z`)
    if (Number.isNaN(date.getTime())) return ''
    let remaining = days
    while (remaining > 0) {
      date.setUTCDate(date.getUTCDate() + 1)
      if (!businessDays || ![0, 6].includes(date.getUTCDay())) remaining -= 1
    }
    return date.toISOString().slice(0, 10)
  }

  const hashText = (value) => {
    let hash = 2166136261
    const input = String(value ?? '')
    for (let index = 0; index < input.length; index += 1) {
      hash ^= input.charCodeAt(index)
      hash = Math.imul(hash, 16777619)
    }
    return `fnv1a-${(hash >>> 0).toString(16).padStart(8, '0')}`
  }

  const reminderSignaturePayload = ({
    body,
    matterRevision,
    missingItems,
    recipient,
    resumeUrl,
    subject,
  }) => ({
    body: clean(body),
    matterRevision: numberValue(matterRevision),
    missingItemInstructions: asArray(missingItems)
      .map((item) => `${clean(item?.id)}:${clean(item?.clientInstruction)}`)
      .sort(),
    recipient: clean(recipient).toLowerCase(),
    resumeUrl: clean(resumeUrl),
    subject: clean(subject),
  })

  const reminderContentHash = (input) =>
    hashText(JSON.stringify(reminderSignaturePayload(input)))

  const reminderHashForCompletion = (completion, override = {}) =>
    reminderContentHash({
      body:
        override.body ??
        completion?.followUp?.bodySnapshot ??
        completion?.emailDraft?.bodySnapshot,
      matterRevision: override.matterRevision ?? completion?.revision,
      missingItems: override.missingItems ?? completion?.missingItems,
      recipient:
        override.recipient ??
        completion?.followUp?.recipient ??
        completion?.emailDraft?.recipient,
      resumeUrl: override.resumeUrl ?? completion?.intakeResumeUrl,
      subject:
        override.subject ??
        completion?.followUp?.subject ??
        completion?.emailDraft?.subject,
    })

  const dedupeById = (items) => {
    const seen = new Set()
    return asArray(items).filter((item) => {
      const id = clean(item?.id)
      if (!id || seen.has(id)) return false
      seen.add(id)
      return true
    })
  }

  const normalizeOrganization = (candidate) => {
    const source = candidate && typeof candidate === 'object' ? candidate : {}
    return {
      city: clean(source.city) || DEFAULT_ORGANIZATION.city,
      country: clean(source.country) || DEFAULT_ORGANIZATION.country,
      logo: typeof source.logo === 'string' && source.logo ? source.logo : null,
      name: clean(source.name) || DEFAULT_ORGANIZATION.name,
      phone: clean(source.phone) || DEFAULT_ORGANIZATION.phone,
      state: clean(source.state) || DEFAULT_ORGANIZATION.state,
      street: clean(source.street) || DEFAULT_ORGANIZATION.street,
      website: clean(source.website),
      zip: clean(source.zip) || DEFAULT_ORGANIZATION.zip,
    }
  }

  const readOrganization = (storage) => {
    try {
      return normalizeOrganization(
        JSON.parse(storage?.getItem(ORGANIZATION_STORAGE_KEY) || 'null'),
      )
    } catch {
      return normalizeOrganization()
    }
  }

  const writeOrganization = (storage, candidate) => {
    const organization = normalizeOrganization(candidate)
    storage.setItem(ORGANIZATION_STORAGE_KEY, JSON.stringify(organization))
    return organization
  }

  const debtorName = (debtor) =>
    [debtor?.firstName, debtor?.middleName, debtor?.lastName]
      .map(clean)
      .filter(Boolean)
      .join(' ')

  const matterClientName = (matter) =>
    asArray(matter?.debtors).map(debtorName).filter(Boolean).join(' & ') ||
    clean(matter?.title) ||
    'Unnamed intake'

  const formatAddress = (debtor) =>
    [debtor?.address, debtor?.city, debtor?.state, debtor?.zipCode]
      .map(clean)
      .filter(Boolean)
      .join(', ')

  const total = (items, key) =>
    asArray(items).reduce((sum, item) => sum + numberValue(item?.[key]), 0)

  const validatePackage = (candidate) => {
    const errors = []
    const matter = candidate?.matter

    if (!candidate || typeof candidate !== 'object') errors.push('Package is missing.')
    if (candidate?.schemaVersion !== PACKAGE_SCHEMA_VERSION) errors.push('Unsupported package schema.')
    if (candidate?.demo !== true) errors.push('Only fake demo packages are accepted on this branch.')
    if (!clean(candidate?.packageId)) errors.push('Package ID is required.')
    if (clean(candidate?.source?.system) !== 'BK FastLane Intake') errors.push('Unexpected package source.')
    if (!matter || typeof matter !== 'object') errors.push('Canonical Matter payload is required.')
    if (!clean(matter?.id)) errors.push('Matter ID is required.')
    if (!['7', '13'].includes(String(matter?.chapter))) errors.push('Bankruptcy chapter is invalid.')
    if (!asArray(matter?.debtors).length || !debtorName(matter?.debtors?.[0])) {
      errors.push('Primary debtor identity is incomplete.')
    }
    if (
      !asArray(matter?.debtors).every((debtor) =>
        clean(debtor?.email).endsWith('@example.test'),
      )
    ) {
      errors.push('Every debtor email must use the reserved fake-data domain.')
    }
    if (!clean(candidate?.submittedAt)) errors.push('Submission timestamp is required.')

    const completion = candidate?.completion || {}
    const missingItems = asArray(completion.missingItems)
    if (completion?.bundle?.bundleVersion !== 2) {
      errors.push('Canonical IntakeCompletionBundle v2 is required.')
    }
    if (
      !asArray(completion?.items).every(
        (item) =>
          clean(item?.id) &&
          clean(item?.canonicalPath) &&
          clean(item?.applicability) &&
          clean(item?.applicabilityReason) &&
          clean(item?.whyNeeded) &&
          clean(item?.caseStageDeadline) &&
          typeof item?.clientActionable === 'boolean' &&
          clean(item?.resolutionStatus),
      )
    ) {
      errors.push('Every completion item must include the canonical applicability contract.')
    }
    const projectionSignature = (items) => asArray(items)
      .map((item) => JSON.stringify([
        clean(item?.id),
        clean(item?.kind),
        clean(item?.label),
        clean(item?.clientInstruction),
        clean(item?.canonicalPath),
        clean(item?.applicability),
        clean(item?.applicabilityReason),
        clean(item?.whyNeeded),
        clean(item?.caseStageDeadline),
        item?.clientActionable === true,
        clean(item?.priority),
        clean(item?.resolutionStatus),
        clean(item?.sectionId),
        clean(item?.responseReason),
        clean(item?.responseNote),
        clean(item?.respondedAt),
      ]))
      .sort()
      .join('\n')
    if (projectionSignature(completion.items) !== projectionSignature(completion.bundle?.items)) {
      errors.push('Completion item projection diverges from the canonical bundle.')
    }
    if (numberValue(completion.revision) !== numberValue(completion.bundle?.matterRevision)) {
      errors.push('Completion revision diverges from the canonical bundle.')
    }
    const canonicalStates = completion.bundle?.states || {}
    const projectedStates = completion.states || {}
    if (
      ['submission', 'intakeCompletion', 'documentReview', 'attorneyReview']
        .some((key) => clean(projectedStates[key]) !== clean(canonicalStates[key]))
      || clean(completion.status) !== clean(canonicalStates.intakeCompletion)
    ) {
      errors.push('Completion state projection diverges from the canonical bundle.')
    }
    const canonicalMetrics = completion.bundle?.metrics || {}
    const projectedMetricPairs = [
      [completion.intakeChecklistCompletion, canonicalMetrics.intakeChecklistCompletion],
      [completion.percent, canonicalMetrics.intakeChecklistCompletion],
      [completion.fieldCompletion?.applicableRequired, canonicalMetrics.fieldCompletion?.applicable],
      [completion.fieldCompletion?.enteredRequired, canonicalMetrics.fieldCompletion?.entered],
      [completion.fieldCompletion?.percent, canonicalMetrics.fieldCompletion?.percent],
      [completion.documentCompletion?.applicableRequired, canonicalMetrics.documentCollection?.applicable],
      [completion.documentCompletion?.receivedRequired, canonicalMetrics.documentCollection?.collected],
      [completion.blockingReadiness?.required, canonicalMetrics.blockingReadiness?.required],
      [completion.blockingReadiness?.complete, canonicalMetrics.blockingReadiness?.complete],
      [completion.blockingReadiness?.percent, canonicalMetrics.blockingReadiness?.percent],
    ]
    if (projectedMetricPairs.some(([projected, canonical]) => numberValue(projected) !== numberValue(canonical))) {
      errors.push('Completion metric projection diverges from the canonical bundle.')
    }
    const expectedMissingItems = asArray(completion.bundle?.items).filter(
      (item) =>
        item?.clientActionable === true &&
        item?.applicability === 'essential_now' &&
        !['answered', 'uploaded', 'replaced', 'unavailable', 'not_applicable'].includes(item?.resolutionStatus),
    )
    if (projectionSignature(missingItems) !== projectionSignature(expectedMissingItems)) {
      errors.push('Missing-item projection diverges from canonical essential-now resolution state.')
    }
    const expectedReminderItems = expectedMissingItems.filter(
      (item) => ['open', 'unsupported_file'].includes(item?.resolutionStatus),
    )
    if (
      projectionSignature(completion.bundle?.reminderItems) !==
      projectionSignature(expectedReminderItems)
    ) {
      errors.push('Reminder projection diverges from canonical unresolved first-reminder state.')
    }
    const needsClientAction = completion.status === 'needs_client_action'
    const isComplete = completion.status === 'complete'
    if (!needsClientAction && !isComplete) errors.push('Completion status is invalid.')
    if (needsClientAction) {
      if (!['review', 'client-response-received'].includes(matter?.status)) {
        errors.push('Matter is not awaiting Intake Completion review.')
      }
      if (!missingItems.length) errors.push('At least one applicable missing item is required.')
      if (
        !missingItems.every(
          (item) => item?.applicability === 'essential_now' && item?.clientActionable === true,
        )
      ) {
        errors.push('First-reminder items must be client-actionable essential-now items.')
      }
    }
    if (isComplete) {
      if (!['ready-for-attorney', 'intake-complete-pending-review'].includes(matter?.status)) {
        errors.push('Completed Intake is not pending the separate review workflow.')
      }
      if (completion.percent !== 100 || missingItems.length) errors.push('Completed Intake must be 100% with no missing items.')
    }
    if (!clean(completion.intakeResumeUrl)) errors.push('Intake return URL is required.')
    try {
      const resumeUrl = new URL(completion.intakeResumeUrl)
      if (
        resumeUrl.protocol !== 'https:' ||
        resumeUrl.hostname !== 'jimmydanol.github.io' ||
        !resumeUrl.pathname.startsWith('/bkfl-crm-lite/')
      ) {
        errors.push('Intake return URL must use the authorized Jimmy preview origin.')
      }
    } catch {
      errors.push('Intake return URL is invalid.')
    }
    if (completion.emailDraft?.deliveryMode !== 'simulation') errors.push('Only simulated email delivery is allowed.')
    if (!clean(completion.emailDraft?.recipient).endsWith('@example.test')) errors.push('Reminder recipient must be fake-safe.')

    return { errors, valid: errors.length === 0 }
  }

  const normalizePackage = (candidate) => {
    const result = validatePackage(candidate)
    if (!result.valid) throw new Error(result.errors.join(' '))
    return JSON.parse(JSON.stringify(candidate))
  }

  const checklistStatus = (status, qualityIssue) => {
    if (qualityIssue) return 'open'
    if (status === 'reviewed') return 'approved'
    if (status === 'received') return 'ai_accepted'
    return 'open'
  }

  const documentReviewStatus = (document) => {
    if (document?.qualityIssue) return 'replacement_requested'
    if (document?.status === 'reviewed') return 'approved'
    if (document?.status === 'received') return 'pending_review'
    return 'awaiting_upload'
  }

  const packageToLead = (candidate) => {
    const intakePackage = normalizePackage(candidate)
    const matter = intakePackage.matter
    const debtors = asArray(matter.debtors)
    const primary = debtors[0]
    const submittedDate = dateOnly(intakePackage.submittedAt)
    const stableId = `intake-${intakePackage.packageId}`
    const clientName = matterClientName(matter)
    const completion = intakePackage.completion
    const isComplete = completion.status === 'complete'
    const isSuppressed = isComplete || completion.suppressionReason === 'client_response'
    const contentHash = reminderHashForCompletion(completion)
    const missingSignature = contentHash
    const nextDay = new Date(`${submittedDate}T12:00:00Z`)
    nextDay.setUTCDate(nextDay.getUTCDate() + 1)

    return {
      bankruptcyType: `Chapter ${matter.chapter}`,
      calendarEvents: [],
      clientFullName: clientName,
      communications: [],
      contacts: debtors.map((debtor, index) => ({
        address: formatAddress(debtor),
        email: clean(debtor.email),
        firstName: clean(debtor.firstName),
        id: index + 1,
        lastName: clean(debtor.lastName),
        middleName: clean(debtor.middleName),
        name: debtorName(debtor),
        phone: clean(debtor.phone),
        role: index === 0 ? 'Lead' : 'Lead (Spouse)',
      })),
      createdDate: dateOnly(matter.createdAt) || submittedDate,
      customFields: {
        intakePackageId: intakePackage.packageId,
        intakeReadiness: isComplete ? 'Ready for attorney' : 'Client action needed',
        intakeSubmittedDate: submittedDate,
      },
      docChecklist: asArray(matter.documents).map((document, index) => {
        const documentId = clean(document.id) || `intake-document-${index + 1}`
        const documentName = clean(document.name) || `Intake document ${index + 1}`
        const receivedAt = clean(document.receivedAt) || intakePackage.submittedAt
        const reviewStatus = documentReviewStatus(document)
        const hasSubmission = reviewStatus !== 'awaiting_upload'

        return {
          aiNote: document.qualityIssue
            ? `Seeded ${document.qualityIssue.replaceAll('_', ' ')} document; replacement required.`
            : clean(document.notes),
          customName: documentName,
          date: dateOnly(receivedAt) || submittedDate,
          docId: documentId,
          fileName: `${documentName} (fake demo)`,
          id: index + 1,
          reviewEvents: hasSubmission
            ? [
                {
                  action: 'submission_received',
                  actor: 'BK FastLane Intake',
                  date: receivedAt,
                  detail: 'Completed fake-client submission entered the bankruptcy-attorney review queue.',
                  id: `${stableId}-${documentId}-received`,
                },
              ]
            : [],
          replacementReason: document.qualityIssue
            ? `The seeded fake document is ${document.qualityIssue.replaceAll('_', ' ')}.`
            : undefined,
          reviewStatus,
          status: checklistStatus(document.status, document.qualityIssue),
          versions: hasSubmission
            ? [
                {
                  fileName: `${documentName} (fake demo)`,
                  id: `${stableId}-${documentId}-v1`,
                  receivedAt,
                  status:
                    reviewStatus === 'approved'
                      ? 'approved'
                      : reviewStatus === 'replacement_requested'
                        ? 'rejected'
                        : 'under_review',
                  version: 1,
                },
              ]
            : [],
        }
      }),
      documents: [],
      email: clean(primary.email),
      firstName: clean(primary.firstName),
      id: stableId,
      intakeCompletion: {
        ...completion,
        followUp: {
          ...completion.emailDraft,
          cadencePolicy: SIMULATED_CADENCE_POLICY,
          approvedAt: undefined,
          approvedBy: undefined,
          id: `${stableId}-completion-reminder`,
          generatedSnapshot: {
            body: completion.emailDraft.bodySnapshot,
            recipient: completion.emailDraft.recipient,
            resumeUrl: completion.intakeResumeUrl,
            subject: completion.emailDraft.subject,
          },
          contentHash,
          matterRevision: completion.revision,
          missingItemIds: asArray(completion.missingItems).map((item) => item.id),
          scheduledFor: '',
          status: isSuppressed ? 'canceled' : 'pending_approval',
          ...(isSuppressed
            ? {
                canceledAt: intakePackage.submittedAt,
                canceledBy: 'BK FastLane Intake',
                cancelReason: isComplete
                  ? 'Debtor completed the outstanding Intake items.'
                  : 'A debtor response suppressed the pending reminder for staff review.',
              }
            : {}),
          timezone: 'America/Denver',
        },
        missingSignature,
      },
      intakePackage,
      intakeSubmittedDate: submittedDate,
      intakeSentDate: submittedDate,
      lastName: clean(primary.lastName),
      leadNotes: [clean(matter.clientGoals), clean(matter.urgentConcerns)]
        .filter(Boolean)
        .join(' Urgent: '),
      leadStage: isComplete
        ? 'Intake Submitted'
        : 'Intake Submitted — Client Action Needed',
      notes: [],
      phone: clean(primary.phone),
      tasks: [
        ...(completion.urgentAttorneyTask
          ? [
              {
                assignee: 'pilot reviewer',
                description: completion.urgentAttorneyTask.reason,
                due: submittedDate,
                id: `${stableId}-same-day-attorney-task-r${completion.revision}`,
                priority: 'High',
                stage: 'Attorney Review',
                status: 'Pending',
                title: completion.urgentAttorneyTask.title,
              },
            ]
          : []),
        ...asArray(completion.missingItems)
          .filter((item) => item.resolutionStatus === 'help_requested')
          .map((item) => ({
            assignee: 'pilot reviewer',
            description: `${item.label}: ${clean(item.responseReason || item.responseNote || 'Client requested help.')}`,
            due: submittedDate,
            id: `${stableId}-client-help-${item.id}-r${completion.revision}`,
            priority: item.priority === 'high' ? 'High' : 'Medium',
            stage: 'Intake Completion',
            status: 'Pending',
            title: 'Respond to debtor Intake help request',
          })),
        {
          assignee: 'pilot reviewer',
          description: isComplete
            ? `Review the completed BK FastLane Intake package for ${clientName}.`
            : isSuppressed
              ? `Review the new debtor response and remaining Intake Completion items for ${clientName}.`
            : `Review missing Intake items and approve a scheduled reminder for ${clientName}.`,
          due: completion.urgentAttorneyTask
            ? submittedDate
            : nextDay.toISOString().slice(0, 10),
          id: `${stableId}-attorney-review`,
          priority: completion.urgentAttorneyTask ? 'High' : 'Medium',
          stage: isComplete ? 'Intake Submitted' : 'Intake Completion',
          status: 'Pending',
          title: isComplete
            ? 'Review completed Intake package'
            : isSuppressed
              ? 'Review debtor Intake response'
              : 'Approve incomplete Intake reminder',
        },
      ],
      timeEntries: [],
      timeline: [
        {
          action: isComplete ? 'Debtor completed outstanding Intake items' : 'Incomplete Intake package received',
          date: submittedDate,
          detail: isComplete
            ? '100% complete; the reminder schedule was canceled and the package moved to attorney review.'
            : `${completion.percent}% complete with ${completion.missingItems.length} client items still needed.`,
          id: isComplete ? `${stableId}-completed-r${completion.revision}` : `${stableId}-received`,
          user: 'BK FastLane Intake',
        },
      ],
    }
  }

  const approveCompletionReminder = (
    lead,
    { actor = 'pilot reviewer', now = new Date().toISOString(), scheduledFor } = {},
  ) => {
    const completion = lead?.intakeCompletion
    if (!completion || completion.status === 'complete' || !clean(scheduledFor)) {
      return lead
    }
    const contentHash = reminderHashForCompletion(completion)
    const workflowKey = `${lead.id}:r${completion.revision}:${contentHash}:${scheduledFor}`
    const approvalId = `completion-approval-${hashText(workflowKey)}`
    if (completion.followUp?.approvalId === approvalId) return lead

    const approvedSnapshot = {
      body: clean(completion.followUp?.bodySnapshot || completion.emailDraft?.bodySnapshot),
      missingItemInstructions: asArray(completion.missingItems).map((item) => ({
        id: item.id,
        instruction: item.clientInstruction,
      })),
      recipient: clean(completion.followUp?.recipient || completion.emailDraft?.recipient),
      resumeUrl: clean(completion.intakeResumeUrl),
      subject: clean(completion.followUp?.subject || completion.emailDraft?.subject),
    }
    const approvalSignature = {
      ...approvedSnapshot,
      approvedAt: now,
      approvedBy: actor,
      contentHash,
      matterRevision: completion.revision,
    }
    const communicationId = `scheduled-reminder-${hashText(workflowKey)}`
    const taskId = `scheduled-reminder-task-${hashText(workflowKey)}`
    const eventId = `reminder-approved-${hashText(workflowKey)}`
    const followUp = {
      ...completion.followUp,
      approvalId,
      approvalSignature,
      approvedAt: now,
      approvedBy: actor,
      approvedSnapshot,
      contentHash,
      deliveryMode: 'simulation',
      matterRevision: completion.revision,
      missingItemIds: asArray(completion.missingItems).map((item) => item.id),
      scheduledFor,
      status: 'approved_scheduled',
      timezone: 'America/Denver',
      workflowKey,
    }
    const communication = {
      approvedAt: now,
      approvedBy: actor,
      body: approvedSnapshot.body,
      date: dateOnly(now),
      deliveryMode: 'simulation',
      direction: 'Scheduled',
      email: approvedSnapshot.recipient,
      id: communicationId,
      scheduledFor,
      status: 'Scheduled',
      subject: approvedSnapshot.subject,
      to: lead.clientFullName || `${lead.firstName} ${lead.lastName}`,
      type: 'Email',
      workflowKey,
    }
    const task = {
      assignee: actor,
      due: scheduledFor.slice(0, 10),
      id: taskId,
      stage: 'Intake Completion',
      status: 'Pending',
      title: 'Simulated intake reminder scheduled',
      workflowKey,
    }
    const cadenceTasks = [
      {
        assignee: actor,
        description: 'After five business days, suggest reminder 2 only if Intake is still incomplete and no stop condition has occurred.',
        due: dueDateAfter(scheduledFor, SIMULATED_CADENCE_POLICY.reminder2BusinessDays, true),
        id: `reminder-2-suggestion-task-${hashText(workflowKey)}`,
        stage: 'Intake Completion',
        status: 'Pending',
        title: 'Suggest reminder 2 if Intake is still incomplete',
        workflowKey,
      },
      {
        assignee: actor,
        description: 'Firm follow-up at the end of the pilot window; stop on completion, response, reviewer pause, unavailable-item resolution, or maximum cadence.',
        due: dueDateAfter(scheduledFor, SIMULATED_CADENCE_POLICY.firmFollowUpDays),
        id: `firm-completion-follow-up-task-${hashText(workflowKey)}`,
        stage: 'Intake Completion',
        status: 'Pending',
        title: 'Firm follow-up if Intake is still incomplete',
        workflowKey,
      },
    ]

    return {
      ...lead,
      communications: dedupeById([communication, ...asArray(lead.communications)]),
      intakeCompletion: {
        ...completion,
        events: dedupeById([
          {
            action: 'reminder_approved',
            actor,
            date: now,
            detail: scheduledFor,
            id: eventId,
          },
          ...asArray(completion.events),
        ]),
        followUp,
        scheduledRecords: dedupeById([
          {
            id: `scheduled-record-${hashText(workflowKey)}`,
            scheduledFor,
            status: 'active',
            workflowKey,
          },
          ...asArray(completion.scheduledRecords),
        ]),
      },
      tasks: dedupeById([task, ...cadenceTasks, ...asArray(lead.tasks)]),
      timeline: dedupeById([
        {
          action: 'Incomplete Intake reminder approved',
          date: dateOnly(now),
          detail: `Simulation scheduled for ${scheduledFor}`,
          id: `scheduled-reminder-timeline-${hashText(workflowKey)}`,
          user: actor,
        },
        ...asArray(lead.timeline),
      ]),
    }
  }

  const cancelCompletionFollowUp = (
    lead,
    {
      actor = 'pilot reviewer',
      now = new Date().toISOString(),
      reason = 'Reminder canceled by the pilot reviewer.',
    } = {},
  ) => {
    const completion = lead?.intakeCompletion
    if (!completion) return lead
    const workflowKey = completion.followUp?.workflowKey
    const cancelItem = (item) =>
      workflowKey && item?.workflowKey === workflowKey && !['Canceled', 'canceled'].includes(item.status)
        ? { ...item, canceledAt: now, cancelReason: reason, status: item.type === 'Email' ? 'Canceled' : 'Canceled' }
        : item
    const cancelRecord = (record) =>
      workflowKey && record?.workflowKey === workflowKey
        ? { ...record, canceledAt: now, cancelReason: reason, status: 'canceled' }
        : record
    const eventId = `reminder-canceled-${hashText(`${lead.id}:${workflowKey || 'none'}:${reason}`)}`

    return {
      ...lead,
      communications: asArray(lead.communications).map(cancelItem),
      intakeCompletion: {
        ...completion,
        events: dedupeById([
          {
            action: 'reminder_canceled',
            actor,
            date: now,
            detail: reason,
            id: eventId,
          },
          ...asArray(completion.events),
        ]),
        followUp: {
          ...completion.followUp,
          canceledAt: now,
          canceledBy: actor,
          cancelReason: reason,
          status: 'canceled',
        },
        scheduledRecords: asArray(completion.scheduledRecords).map(cancelRecord),
      },
      tasks: asArray(lead.tasks).map(cancelItem),
    }
  }

  const updateCompletionReminderDraft = (
    lead,
    {
      actor = 'pilot reviewer',
      body,
      missingItems,
      now = new Date().toISOString(),
      overrideReason,
      recipient,
      subject,
    } = {},
  ) => {
    if (!clean(overrideReason)) throw new Error('An override reason is required.')
    const completion = lead?.intakeCompletion
    if (!completion) return lead
    const nextMissingItems = missingItems || completion.missingItems
    const previousApproval = completion.followUp?.approvalSignature
    const invalidatedLead = previousApproval && completion.followUp?.workflowKey
      ? cancelCompletionFollowUp(lead, {
          actor,
          now,
          reason: 'Approved reminder content changed and the prior simulated schedule was invalidated.',
        })
      : lead
    const invalidatedCompletion = invalidatedLead.intakeCompletion
    const nextFollowUp = {
      ...invalidatedCompletion.followUp,
      approvalId: undefined,
      approvalSignature: undefined,
      approvedAt: undefined,
      approvedBy: undefined,
      bodySnapshot: body ?? completion.followUp?.bodySnapshot,
      canceledAt: undefined,
      canceledBy: undefined,
      cancelReason: undefined,
      recipient: recipient ?? completion.followUp?.recipient,
      scheduledFor: '',
      status: previousApproval ? 'stale' : 'pending_approval',
      subject: subject ?? completion.followUp?.subject,
      workflowKey: undefined,
    }
    nextFollowUp.contentHash = reminderHashForCompletion(
      { ...invalidatedCompletion, followUp: nextFollowUp, missingItems: nextMissingItems },
      { missingItems: nextMissingItems },
    )
    return {
      ...invalidatedLead,
      intakeCompletion: {
        ...invalidatedCompletion,
        approvalHistory: previousApproval
          ? [...asArray(completion.approvalHistory), previousApproval]
          : asArray(completion.approvalHistory),
        events: dedupeById([
          {
            action: 'reminder_draft_changed',
            actor,
            date: now,
            detail: overrideReason,
            id: `reminder-changed-${hashText(`${lead.id}:${nextFollowUp.contentHash}:${overrideReason}`)}`,
          },
          ...asArray(invalidatedCompletion.events),
        ]),
        followUp: nextFollowUp,
        missingItems: nextMissingItems,
        missingSignature: nextFollowUp.contentHash,
      },
    }
  }

  const mergePackageIntoLeads = (leads, candidate) => {
    const incoming = packageToLead(candidate)
    const list = asArray(leads)
    const existingIndex = list.findIndex(
      (lead) =>
        lead?.id === incoming.id ||
        lead?.intakePackage?.packageId === incoming.intakePackage.packageId,
    )

    if (existingIndex < 0) return [incoming, ...list]

    const existingChecklist = asArray(list[existingIndex]?.docChecklist)
    const incomingDocumentIds = new Set(incoming.docChecklist.map((document) => document.docId))
    const mergedChecklist = incoming.docChecklist.map((document) => {
      const existingDocument = existingChecklist.find(
        (candidateDocument) => candidateDocument?.docId === document.docId,
      )

      if (!existingDocument) return document

      // Once Intake creates the review item, the CRM owns its attorney decision,
      // replacement history, follow-up state, and resubmission versions. A feed
      // refresh may update the surrounding Intake package, but must not erase that
      // law-firm work.
      return {
        ...document,
        ...existingDocument,
        docId: document.docId,
        id: document.id,
      }
    })

    existingChecklist.forEach((document) => {
      if (!incomingDocumentIds.has(document?.docId)) mergedChecklist.push(document)
    })

    const existingLead = list[existingIndex]
    const existingCompletion = existingLead?.intakeCompletion
    const sameReminderContent =
      existingCompletion?.missingSignature === incoming.intakeCompletion.missingSignature
    const priorApproval = existingCompletion?.followUp?.approvalSignature
    const invalidatedExistingLead = !sameReminderContent && existingCompletion?.followUp?.workflowKey
      ? cancelCompletionFollowUp(existingLead, {
          actor: 'BK FastLane Intake',
          now: incoming.intakePackage.submittedAt,
          reason: 'New Intake content invalidated the prior simulated reminder schedule.',
        })
      : existingLead
    const preservedCompletion = invalidatedExistingLead?.intakeCompletion
    const mergedCompletion = sameReminderContent
      ? {
          ...incoming.intakeCompletion,
          ...preservedCompletion,
          documentCompletion: incoming.intakeCompletion.documentCompletion,
          emailDraft: incoming.intakeCompletion.emailDraft,
          fieldCompletion: incoming.intakeCompletion.fieldCompletion,
          intakeResumeUrl: incoming.intakeCompletion.intakeResumeUrl,
          missingItems: incoming.intakeCompletion.missingItems,
          missingSignature: incoming.intakeCompletion.missingSignature,
          percent: incoming.intakeCompletion.percent,
          revision: incoming.intakeCompletion.revision,
        }
      : {
          ...incoming.intakeCompletion,
          approvalHistory: priorApproval
            ? [...asArray(preservedCompletion?.approvalHistory), priorApproval]
            : asArray(preservedCompletion?.approvalHistory),
          events: dedupeById([
            ...(priorApproval
              ? [
                  {
                    action: 'approval_invalidated',
                    actor: 'BK FastLane Intake',
                    date: incoming.intakePackage.submittedAt,
                    detail: 'Recipient, subject, body, resume URL, item instructions, or Matter revision changed.',
                    id: `approval-invalidated-${incoming.intakeCompletion.missingSignature}`,
                  },
                ]
              : []),
            ...asArray(incoming.intakeCompletion.events),
            ...asArray(preservedCompletion?.events),
          ]),
          followUp: {
            ...incoming.intakeCompletion.followUp,
            status: priorApproval ? 'stale' : incoming.intakeCompletion.followUp.status,
          },
        }

    const completedNow = incoming.intakeCompletion.status === 'complete'
    const suppressNow = completedNow || incoming.intakeCompletion.suppressionReason === 'client_response'

    return list.map((lead, index) => {
      if (index !== existingIndex) return lead
      const mergedLead = {
            ...incoming,
            ...invalidatedExistingLead,
            bankruptcyType: incoming.bankruptcyType,
            communications: invalidatedExistingLead.communications,
            contacts: incoming.contacts,
            docChecklist: mergedChecklist,
            email: incoming.email,
            firstName: incoming.firstName,
            intakeCompletion: mergedCompletion,
            intakePackage: incoming.intakePackage,
            intakeSubmittedDate: incoming.intakeSubmittedDate,
            lastName: incoming.lastName,
            leadStage: incoming.leadStage,
            phone: incoming.phone,
            tasks: suppressNow
              ? dedupeById([...incoming.tasks, ...asArray(invalidatedExistingLead.tasks)])
              : invalidatedExistingLead.tasks,
            timeline: suppressNow
              ? [
                  ...incoming.timeline,
                  ...asArray(invalidatedExistingLead.timeline).filter(
                    (event) => event?.id !== incoming.timeline[0]?.id,
                  ),
                ]
              : invalidatedExistingLead.timeline,
          }
      return suppressNow
        ? cancelCompletionFollowUp(mergedLead, {
            actor: 'BK FastLane Intake',
            now: incoming.intakePackage.submittedAt,
            reason: 'Debtor completion or response suppressed the pending reminder.',
          })
        : mergedLead
    })
  }

  const mergePackagesIntoLeads = (leads, packages) =>
    asArray(packages).reduce((current, candidate) => {
      try {
        return mergePackageIntoLeads(current, candidate)
      } catch {
        return current
      }
    }, asArray(leads))

  const readQueuedPackages = (storage) => {
    try {
      const parsed = JSON.parse(storage?.getItem(HANDOFF_STORAGE_KEY) || '[]')
      return asArray(parsed).filter((item) => validatePackage(item).valid)
    } catch {
      return []
    }
  }

  const enqueuePackage = (storage, candidate) => {
    const intakePackage = normalizePackage(candidate)
    const queued = readQueuedPackages(storage)
    const current = queued.find((item) => item.packageId === intakePackage.packageId)
    if (
      current &&
      numberValue(current?.completion?.revision) >=
        numberValue(intakePackage?.completion?.revision)
    ) {
      return current
    }
    const existing = queued.filter(
      (item) => item.packageId !== intakePackage.packageId,
    )
    storage.setItem(
      HANDOFF_STORAGE_KEY,
      JSON.stringify([intakePackage, ...existing].slice(0, 25)),
    )
    return intakePackage
  }

  return {
    DEFAULT_ORGANIZATION,
    HANDOFF_STORAGE_KEY,
    ORGANIZATION_EVENT,
    ORGANIZATION_STORAGE_KEY,
    PACKAGE_SCHEMA_VERSION,
    approveCompletionReminder,
    cancelCompletionFollowUp,
    debtorName,
    enqueuePackage,
    formatAddress,
    matterClientName,
    mergePackageIntoLeads,
    mergePackagesIntoLeads,
    normalizePackage,
    packageToLead,
    readOrganization,
    readQueuedPackages,
    reminderContentHash,
    reminderHashForCompletion,
    total,
    validatePackage,
    updateCompletionReminderDraft,
    writeOrganization,
  }
})
