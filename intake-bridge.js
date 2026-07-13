(function attachIntakeBridge(root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  root.BKFLIntakeBridge = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function createIntakeBridge() {
  'use strict'

  const HANDOFF_STORAGE_KEY = 'bkfl_intake_handoffs_v1'
  const ORGANIZATION_EVENT = 'bkfl:organization-change'
  const ORGANIZATION_STORAGE_KEY = 'bkfl_lite_org_v1'
  const PACKAGE_SCHEMA_VERSION = 1
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
    if (!clean(candidate?.submittedAt)) errors.push('Submission timestamp is required.')

    const completion = candidate?.completion || {}
    const missingItems = asArray(completion.missingItems)
    const needsClientAction = completion.status === 'needs_client_action'
    const isComplete = completion.status === 'complete'
    if (!needsClientAction && !isComplete) errors.push('Completion status is invalid.')
    if (needsClientAction) {
      if (matter?.status !== 'review') errors.push('Matter is not awaiting intake completion review.')
      if (completion.percent < 85 || completion.percent > 95) errors.push('Completion must be between 85% and 95%.')
      if (!missingItems.some((item) => item?.kind === 'field')) errors.push('At least one missing field is required.')
      if (!missingItems.some((item) => item?.kind === 'document')) errors.push('At least one missing document is required.')
    }
    if (isComplete) {
      if (matter?.status !== 'ready-for-attorney') errors.push('Completed matter is not ready for attorney review.')
      if (completion.percent !== 100 || missingItems.length) errors.push('Completed Intake must be 100% with no missing items.')
      if (candidate?.readiness?.fieldsFilled !== candidate?.readiness?.fieldsRequired) errors.push('Completed Intake fields are not ready.')
      if (candidate?.readiness?.documentsReady !== candidate?.readiness?.documentsRequired) errors.push('Completed Intake documents are not ready.')
    }
    if (!clean(completion.intakeResumeUrl)) errors.push('Intake return URL is required.')
    if (completion.emailDraft?.deliveryMode !== 'simulation') errors.push('Only simulated email delivery is allowed.')
    if (!clean(completion.emailDraft?.recipient).endsWith('@example.test')) errors.push('Reminder recipient must be fake-safe.')

    return { errors, valid: errors.length === 0 }
  }

  const normalizePackage = (candidate) => {
    const result = validatePackage(candidate)
    if (!result.valid) throw new Error(result.errors.join(' '))
    return JSON.parse(JSON.stringify(candidate))
  }

  const checklistStatus = (status) => {
    if (status === 'reviewed') return 'approved'
    if (status === 'received') return 'ai_accepted'
    return 'open'
  }

  const documentReviewStatus = (status) => {
    if (status === 'reviewed') return 'approved'
    if (status === 'received') return 'pending_review'
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
    const missingSignature = asArray(completion.missingItems)
      .map((item) => clean(item?.id))
      .filter(Boolean)
      .sort()
      .join('|')
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
        const reviewStatus = documentReviewStatus(document.status)
        const hasSubmission = reviewStatus !== 'awaiting_upload'

        return {
          aiNote: clean(document.notes),
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
          reviewStatus,
          status: checklistStatus(document.status),
          versions: hasSubmission
            ? [
                {
                  fileName: `${documentName} (fake demo)`,
                  id: `${stableId}-${documentId}-v1`,
                  receivedAt,
                  status: reviewStatus === 'approved' ? 'approved' : 'under_review',
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
          approvedAt: undefined,
          approvedBy: undefined,
          id: `${stableId}-completion-reminder`,
          matterRevision: completion.revision,
          missingItemIds: asArray(completion.missingItems).map((item) => item.id),
          scheduledFor: '',
          status: isComplete ? 'canceled' : 'pending_approval',
          ...(isComplete
            ? {
                canceledAt: intakePackage.submittedAt,
                canceledBy: 'BK FastLane Intake',
                cancelReason: 'Debtor completed the outstanding Intake items.',
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
      leadStage: isComplete ? 'Intake Submitted' : 'Intake In Progress',
      notes: [],
      phone: clean(primary.phone),
      tasks: [
        {
          assignee: 'Matt McCune',
          description: isComplete
            ? `Review the completed BK FastLane Intake package for ${clientName}.`
            : `Review missing Intake items and approve a scheduled reminder for ${clientName}.`,
          due: nextDay.toISOString().slice(0, 10),
          id: `${stableId}-attorney-review`,
          priority: clean(matter.urgentConcerns) ? 'High' : 'Medium',
          stage: isComplete ? 'Intake Submitted' : 'Intake In Progress',
          status: 'Pending',
          title: isComplete ? 'Review completed Intake package' : 'Approve incomplete Intake reminder',
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

    const existingCompletion = list[existingIndex]?.intakeCompletion
    const sameMissingItems =
      existingCompletion?.missingSignature === incoming.intakeCompletion.missingSignature
    const mergedCompletion = sameMissingItems
      ? {
          ...incoming.intakeCompletion,
          ...existingCompletion,
          documentCompletion: incoming.intakeCompletion.documentCompletion,
          emailDraft: incoming.intakeCompletion.emailDraft,
          fieldCompletion: incoming.intakeCompletion.fieldCompletion,
          intakeResumeUrl: incoming.intakeCompletion.intakeResumeUrl,
          missingItems: incoming.intakeCompletion.missingItems,
          missingSignature: incoming.intakeCompletion.missingSignature,
          percent: incoming.intakeCompletion.percent,
          revision: incoming.intakeCompletion.revision,
        }
      : incoming.intakeCompletion

    const completedNow = incoming.intakeCompletion.status === 'complete'

    return list.map((lead, index) =>
      index === existingIndex
        ? {
            ...incoming,
            ...lead,
            bankruptcyType: incoming.bankruptcyType,
            communications: completedNow
              ? asArray(lead.communications).map((communication) =>
                  communication?.deliveryMode === 'simulation' &&
                  communication?.status === 'Scheduled'
                    ? {
                        ...communication,
                        canceledAt: incoming.intakePackage.submittedAt,
                        status: 'Canceled',
                      }
                    : communication,
                )
              : lead.communications,
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
            tasks: completedNow
              ? [
                  ...incoming.tasks,
                  ...asArray(lead.tasks)
                    .filter((task) => task?.id !== incoming.tasks[0]?.id)
                    .map((task) =>
                      task?.title === 'Simulated intake reminder scheduled'
                        ? { ...task, status: 'Canceled' }
                        : task,
                    ),
                ]
              : lead.tasks,
            timeline: completedNow
              ? [
                  ...incoming.timeline,
                  ...asArray(lead.timeline).filter(
                    (event) => event?.id !== incoming.timeline[0]?.id,
                  ),
                ]
              : lead.timeline,
          }
        : lead,
    )
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
    const existing = readQueuedPackages(storage).filter(
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
    total,
    validatePackage,
    writeOrganization,
  }
})
