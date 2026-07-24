(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.BKFLStage4Readiness = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  const CONTRACT_VERSION = 'bkfl.stage4-readiness.v1'
  const READY_STAGE = 'Ready for Petition Prep'
  const REVIEW_STAGE = 'Intake Submitted'
  const CLOSED_DOCUMENT_STATUSES = new Set(['approved', 'excused'])
  const APPROVED_REVIEW_STATUSES = new Set(['approved', 'complete', 'completed', 'verified'])
  const SUPPORTED_EVIDENCE_EXTENSIONS = new Set([
    'jpeg',
    'jpg',
    'pdf',
    'png',
    'tif',
    'tiff',
    'txt',
    'webp',
  ])
  const SUPPORTED_EVIDENCE_MIME_TYPES = new Set([
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/tiff',
    'image/webp',
    'text/plain',
  ])

  const list = (value) => (Array.isArray(value) ? value : [])
  const text = (value) => String(value ?? '').trim()
  const lower = (value) => text(value).toLowerCase()
  const isClosed = (value) => ['closed', 'resolved', 'verified', 'waived'].includes(lower(value))
  const isApproved = (value) => APPROVED_REVIEW_STATUSES.has(lower(value))
  const blocker = (id, label, owner, source) => ({ id, label, owner, source })

  const completionFor = (lead) => lead?.intakeCompletion || lead?.completion || null
  const dataReviewFor = (lead, completion) =>
    lead?.dataReview || completion?.dataReview || completion?.states?.dataReview || null
  const attorneyReviewFor = (lead, completion) =>
    lead?.attorneyReview || completion?.attorneyReview || completion?.states?.attorneyReview || null

  function openCompletionItems(completion, kind) {
    return list(completion?.missingItems).filter((item) => {
      const itemKind = lower(item?.kind)
      const applicable = !['attorney_only', 'conditional', 'contextual', 'deferred'].includes(
        lower(item?.applicability),
      )
      return itemKind === kind && applicable && !isClosed(item?.resolutionStatus)
    })
  }

  function openDataIssues(lead, completion, dataReview) {
    const candidates = [
      ...list(lead?.dataDiscrepancies),
      ...list(lead?.inconsistencies),
      ...list(completion?.dataDiscrepancies),
      ...list(dataReview?.discrepancies),
      ...list(dataReview?.issues),
    ]
    const seen = new Set()
    return candidates.filter((issue, index) => {
      const id = text(issue?.id || issue?.label || issue?.message || index)
      if (seen.has(id) || isClosed(issue?.status || issue?.resolutionStatus)) return false
      seen.add(id)
      return true
    })
  }

  function assessIntakeGate(lead) {
    const completion = completionFor(lead)
    const dataReview = dataReviewFor(lead, completion)
    const fieldItems = openCompletionItems(completion, 'field')
    const missingFields = [
      ...fieldItems.map((item) => ({
        id: item.id,
        label: item.label || item.canonicalPath || 'Required intake answer',
      })),
      ...list(dataReview?.missingFields).map((item, index) => ({
        id: item?.id || `data-review-missing-${index + 1}`,
        label: item?.label || item?.canonicalPath || item || 'Required intake answer',
      })),
    ]
    const issues = openDataIssues(lead, completion, dataReview)
    const completenessStatus = lower(
      dataReview?.completenessStatus || completion?.status || completion?.states?.intakeCompletion,
    )
    const accuracyStatus = lower(
      dataReview?.accuracyStatus || dataReview?.status || completion?.states?.dataAccuracy,
    )
    const blockers = []

    if (!completion && !dataReview) {
      blockers.push(
        blocker(
          'intake-contract-missing',
          'No canonical Intake Completion contract is attached',
          'Intake',
          'intake',
        ),
      )
    }
    for (const item of missingFields) {
      blockers.push(
        blocker(
          `intake-field-${text(item.id) || blockers.length + 1}`,
          `Missing intake data: ${text(item.label)}`,
          'Debtor / intake staff',
          'intake',
        ),
      )
    }
    if (!['complete', 'completed', 'verified'].includes(completenessStatus)) {
      blockers.push(
        blocker(
          'intake-completeness-open',
          'Intake Completion has not been closed',
          'Intake staff',
          'intake',
        ),
      )
    }
    for (const issue of issues) {
      blockers.push(
        blocker(
          `intake-accuracy-${text(issue?.id || blockers.length + 1)}`,
          `Unresolved data accuracy issue: ${text(issue?.label || issue?.message || issue)}`,
          'Firm reviewer',
          'intake',
        ),
      )
    }
    if (!['verified', 'approved', 'complete', 'completed'].includes(accuracyStatus)) {
      blockers.push(
        blocker(
          'intake-accuracy-unverified',
          'Intake data accuracy has not been verified',
          'Firm reviewer',
          'intake',
        ),
      )
    }

    const completenessBlockers = blockers.filter(
      (item) => item.id.includes('field') || item.id.includes('completeness') || item.id.includes('contract'),
    )
    const accuracyBlockers = blockers.filter((item) => item.id.includes('accuracy'))
    return {
      accuracy: accuracyBlockers.length === 0,
      blockerCount: blockers.length,
      blockers,
      completeness: completenessBlockers.length === 0,
      status: blockers.length === 0 ? 'complete' : 'blocked',
    }
  }

  function fileEvidenceFor(document) {
    const files = list(document?.files).length
      ? list(document.files)
      : text(document?.fileName)
        ? [
            {
              mimeType: document.mimeType,
              name: document.fileName,
              qualityIssue: document.qualityIssue,
            },
          ]
        : []
    return files
  }

  function supportedEvidence(file) {
    const mimeType = lower(file?.mimeType || file?.type)
    if (mimeType && SUPPORTED_EVIDENCE_MIME_TYPES.has(mimeType)) return true
    const name = lower(file?.name || file?.fileName)
    const extension = name.includes('.') ? name.split('.').pop() : ''
    return SUPPORTED_EVIDENCE_EXTENSIONS.has(extension)
  }

  function evidenceAccuracyIssue(document, file) {
    const status = lower(file?.accuracyStatus || file?.reviewStatus || file?.scanStatus)
    const issue = text(file?.qualityIssue || document?.qualityIssue)
    if (issue) return issue
    if (['flagged', 'failed', 'illegible', 'needs_review', 'wrong_client'].includes(status)) return status
    return ''
  }

  function assessDocumentGate(lead) {
    const completion = completionFor(lead)
    const checklist = list(lead?.docChecklist).length
      ? list(lead.docChecklist)
      : list(lead?.documents).length
        ? list(lead.documents)
        : list(completion?.documents)
    const completionDocuments = openCompletionItems(completion, 'document')
    const requireEvidence = lead?.readinessPolicy?.requireFileEvidence !== false
    const blockers = []
    let evidenceFileCount = 0
    let imageFileCount = 0
    let pdfFileCount = 0

    if (!checklist.length) {
      blockers.push(
        blocker(
          'documents-contract-missing',
          'No applicable Document checklist is attached',
          'Document Review',
          'documents',
        ),
      )
    }

    checklist.forEach((document, index) => {
      const documentId = text(document?.docId || document?.id || index + 1)
      const name = text(document?.name || document?.label || document?.docId || 'Document')
      const status = lower(document?.status)
      const files = fileEvidenceFor(document)
      evidenceFileCount += files.length
      imageFileCount += files.filter((file) => lower(file?.mimeType || file?.type).startsWith('image/')).length
      pdfFileCount += files.filter((file) => lower(file?.mimeType || file?.type) === 'application/pdf').length

      if (!CLOSED_DOCUMENT_STATUSES.has(status)) {
        blockers.push(
          blocker(
            `document-open-${documentId}`,
            `Document requirement is unresolved: ${name}`,
            'Document Review',
            'documents',
          ),
        )
      }
      if (status === 'ai_flagged') {
        blockers.push(
          blocker(
            `document-accuracy-flag-${documentId}`,
            `AI-flagged Document still needs a firm accuracy decision: ${name}`,
            'Document Review',
            'documents',
          ),
        )
      }
      if (status === 'approved' && requireEvidence && files.length === 0) {
        blockers.push(
          blocker(
            `document-evidence-missing-${documentId}`,
            `Approved Document has no retained file evidence: ${name}`,
            'Document Review',
            'documents',
          ),
        )
      }
      files.forEach((file, fileIndex) => {
        if (!supportedEvidence(file)) {
          blockers.push(
            blocker(
              `document-file-unsupported-${documentId}-${fileIndex + 1}`,
              `Unsupported Document file evidence: ${text(file?.name || file?.fileName || name)}`,
              'Document Review',
              'documents',
            ),
          )
        }
        const accuracyIssue = evidenceAccuracyIssue(document, file)
        const documentedOverride = text(document?.overrideReason || file?.overrideReason)
        if (accuracyIssue && !(status === 'approved' && documentedOverride)) {
          blockers.push(
            blocker(
              `document-accuracy-${documentId}-${fileIndex + 1}`,
              `Document accuracy issue: ${name} (${accuracyIssue})`,
              'Document Review',
              'documents',
            ),
          )
        }
      })
    })

    completionDocuments.forEach((item, index) => {
      blockers.push(
        blocker(
          `document-completion-${text(item?.id || index + 1)}`,
          `Intake still requires a Document response: ${text(item?.label || 'Document')}`,
          'Debtor / document staff',
          'documents',
        ),
      )
    })

    const accuracyBlockers = blockers.filter((item) => item.id.includes('accuracy'))
    const completenessBlockers = blockers.filter((item) => !item.id.includes('accuracy'))
    return {
      accuracy: accuracyBlockers.length === 0,
      blockerCount: blockers.length,
      blockers,
      completeness: completenessBlockers.length === 0,
      evidence: { fileCount: evidenceFileCount, imageCount: imageFileCount, pdfCount: pdfFileCount },
      status: blockers.length === 0 ? 'complete' : 'blocked',
    }
  }

  function assessAttorneyGate(lead) {
    const completion = completionFor(lead)
    const attorneyReview = attorneyReviewFor(lead, completion)
    const reviewFlags = [
      ...list(lead?.reviewFlags),
      ...list(completion?.reviewFlags),
      ...list(attorneyReview?.flags),
    ]
    const blockers = []
    const status = typeof attorneyReview === 'string' ? attorneyReview : attorneyReview?.status

    if (!isApproved(status)) {
      blockers.push(
        blocker(
          'attorney-review-open',
          'Attorney Review has not been approved',
          'Attorney',
          'attorney',
        ),
      )
    }
    reviewFlags.forEach((flag, index) => {
      if (isClosed(flag?.status || flag?.resolutionStatus)) return
      blockers.push(
        blocker(
          `attorney-flag-${text(flag?.id || index + 1)}`,
          `Attorney Review flag is unresolved: ${text(flag?.label || flag?.message || flag)}`,
          'Attorney',
          'attorney',
        ),
      )
    })

    return {
      blockerCount: blockers.length,
      blockers,
      status: blockers.length === 0 ? 'complete' : 'blocked',
    }
  }

  function evaluateLead(lead, options = {}) {
    const intakeCompletion = assessIntakeGate(lead)
    const documentReview = assessDocumentGate(lead)
    const attorneyReview = assessAttorneyGate(lead)
    const blockers = [
      ...intakeCompletion.blockers,
      ...documentReview.blockers,
      ...attorneyReview.blockers,
    ]
    return {
      blockerCount: blockers.length,
      blockers,
      contractVersion: CONTRACT_VERSION,
      evaluatedAt: options.evaluatedAt || new Date().toISOString(),
      gates: { attorneyReview, documentReview, intakeCompletion },
      ready: blockers.length === 0,
      targetStage: blockers.length === 0 ? READY_STAGE : REVIEW_STAGE,
    }
  }

  function reconcileLead(lead, options = {}) {
    const assessment = evaluateLead(lead, options)
    if (![REVIEW_STAGE, READY_STAGE].includes(lead?.leadStage)) {
      return { ...lead, readiness: assessment }
    }
    const next = { ...lead, leadStage: assessment.targetStage, readiness: assessment }
    if (assessment.ready) {
      next.prepReadyDate = lead?.prepReadyDate || options.today || new Date().toISOString().slice(0, 10)
    } else {
      delete next.prepReadyDate
    }
    return next
  }

  function reconcileLeads(leads, options = {}) {
    return list(leads).map((lead) => reconcileLead(lead, options))
  }

  return {
    CONTRACT_VERSION,
    READY_STAGE,
    REVIEW_STAGE,
    assessAttorneyGate,
    assessDocumentGate,
    assessIntakeGate,
    evaluateLead,
    reconcileLead,
    reconcileLeads,
  }
})
