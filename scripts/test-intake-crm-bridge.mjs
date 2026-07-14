import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const require = createRequire(import.meta.url)
const bridge = require('../intake-bridge.js')
const feedPath = path.resolve(import.meta.dirname, '../data/intake-submissions.json')
const feed = JSON.parse(await readFile(feedPath, 'utf8'))
const publicPageSource = await readFile(path.resolve(import.meta.dirname, '../index.html'), 'utf8')

assert.equal(feed.schemaVersion, 1)
assert.equal(feed.demo, true)
const expectedPackageCount = feed.packages.length
assert([10, 50].includes(expectedPackageCount), 'fixture feed must contain the ten-case regression set or fifty-case demo cohort')
assert.ok(!publicPageSource.includes('mailto:'))
assert.ok(!publicPageSource.includes('@mccunelegal.com'))
assert.ok(!publicPageSource.includes('@uscourts.gov'))
assert.ok(publicPageSource.includes('intake-bridge.js?v=20260714-attorney-ready-v1'))
assert.ok(publicPageSource.includes('intake-submissions.js?v=20260714-attorney-ready-v1'))

const requiredTraitCoverage = [
  'chapter_7',
  'chapter_13',
  'self_employed',
  'unemployed',
  'nonfiling_spouse',
  'vehicle_surrender',
  'recent_transfer',
  'tax_return_unavailable',
  'illegible_document',
  'mobile_accessibility',
]
const allTraits = new Set(feed.packages.flatMap((item) => item.source.traits || []))
requiredTraitCoverage.forEach((trait) => assert.ok(allTraits.has(trait), `Missing pilot trait: ${trait}`))
assert.ok(feed.packages.filter((item) => item.matter.chapter === '7').length >= 5)
assert.ok(feed.packages.filter((item) => item.matter.chapter === '13').length >= 3)

const packageIds = new Set()
const leadIds = new Set()
const documentIds = new Set()
const clientNames = new Set()

for (const intakePackage of feed.packages) {
  const validation = bridge.validatePackage(intakePackage)
  assert.deepEqual(validation.errors, [], `${intakePackage.packageId}: ${validation.errors.join(' ')}`)
  assert.equal(validation.valid, true)
  assert.equal(intakePackage.schemaVersion, 2)
  assert.equal(intakePackage.completion.bundle.bundleVersion, 2)
  assert.equal(intakePackage.completion.bundle.ruleSetVersion, '2026-07-13.pilot-v1')
  assert.equal(intakePackage.matter.status, 'review')
  assert.equal(intakePackage.completion.states.submission, 'submitted')
  assert.equal(intakePackage.completion.states.intakeCompletion, 'needs_client_action')
  assert.notEqual(intakePackage.completion.states.documentReview, 'approved')
  assert.equal(intakePackage.completion.states.attorneyReview, 'not_started')
  assert.ok(intakePackage.readiness.fieldsFilled <= intakePackage.readiness.fieldsRequired)
  assert.ok(intakePackage.readiness.documentsReady < intakePackage.readiness.documentsRequired)
  assert.ok(intakePackage.matter.documents.length > 0)
  assert.ok(intakePackage.completion.missingItems.length >= 2)
  assert.ok(intakePackage.completion.missingItems.length <= 6)
  assert.ok(intakePackage.completion.missingItems.every((item) => item.clientActionable))
  assert.ok(intakePackage.completion.missingItems.every((item) => item.applicability === 'essential_now'))
  assert.ok(intakePackage.completion.missingItems.every((item) => item.resolutionStatus === 'open'))
  assert.ok(intakePackage.matter.debtors.every((debtor) => String(debtor.email).endsWith('@example.test')))
  assert.equal(intakePackage.completion.emailDraft.deliveryMode, 'simulation')
  assert.ok(!JSON.stringify(intakePackage).includes('mailto:'))

  for (const item of intakePackage.completion.items) {
    assert.ok(item.id)
    assert.ok(item.canonicalPath)
    assert.ok(item.applicabilityReason)
    assert.ok(item.whyNeeded)
    assert.ok(item.caseStageDeadline)
    assert.ok(['field', 'document', 'review'].includes(item.kind))
  }

  for (const document of intakePackage.matter.documents) {
    assert.ok(document.id.startsWith('fake-document-'))
    assert.ok(!documentIds.has(document.id), `Duplicate document id: ${document.id}`)
    documentIds.add(document.id)
  }

  const lead = bridge.packageToLead(intakePackage)
  assert.equal(lead.leadStage, 'Intake Submitted — Client Action Needed')
  assert.equal(lead.intakePackage.packageId, intakePackage.packageId)
  assert.equal(lead.contacts.length, intakePackage.matter.debtors.length)
  assert.equal(lead.docChecklist.length, intakePackage.matter.documents.length)
  assert.equal(lead.intakeCompletion.status, 'needs_client_action')
  assert.equal(lead.intakeCompletion.followUp.status, 'pending_approval')
  assert.equal(lead.intakeCompletion.followUp.deliveryMode, 'simulation')
  assert.equal(lead.intakeCompletion.followUp.scheduledFor, '')
  assert.ok(lead.tasks.some((task) => task.title === 'Approve incomplete Intake reminder'))
  assert.ok(lead.intakeCompletion.missingItems.every((item) => lead.intakeCompletion.followUp.bodySnapshot.includes(item.clientInstruction)))

  const resumeUrl = new URL(lead.intakeCompletion.intakeResumeUrl)
  assert.equal(resumeUrl.hostname, 'jimmydanol.github.io')
  assert.equal(resumeUrl.pathname, '/bkfl-crm-lite/intake-demo.html')
  assert.equal(resumeUrl.searchParams.get('packageId'), intakePackage.packageId)
  assert.equal(resumeUrl.searchParams.get('itemId'), intakePackage.completion.missingItems[0].id)

  packageIds.add(intakePackage.packageId)
  leadIds.add(lead.id)
  clientNames.add(lead.clientFullName)
}

assert.equal(packageIds.size, expectedPackageCount)
assert.equal(leadIds.size, expectedPackageCount)
assert.equal(clientNames.size, expectedPackageCount)

const scenario = (id) => feed.packages.find((item) => item.source.scenarioId === id)
const kevin = scenario('kevin-priya-shah-ch13')
assert.ok(kevin.completion.missingItems.some((item) => item.canonicalPath === 'matter.chapter13.foreclosureSaleDate'))

const nolan = scenario('nolan-brooks-ch7-renter')
assert.equal(nolan.matter.isEmployed, 'Yes')
assert.equal(nolan.matter.financialAffairs['job-or-business-income'].answer, 'No')
assert.equal(nolan.matter.financialAffairs['other-income'].answer, 'Yes')
assert.ok(nolan.matter.income.every((item) => !/\bbusiness|\bwages?\b|\bemployment\b/i.test(item.source)))
assert.ok(nolan.readiness.inconsistencies.some((item) => item.sectionId === 'income'))

const maya = scenario('maya-patel-ch7-parent')
assert.ok(maya.matter.income.some((item) => item.source === 'Maya wages'))
assert.ok(maya.matter.income.some((item) => /nonfiling spouse/i.test(item.source)))
assert.ok(maya.completion.missingItems.some((item) => item.canonicalPath === 'matter.income[1].sixMonthTotal'))

const zoe = scenario('zoe-kim-ch7-wage-earner')
const zoeVehicle = zoe.matter.assets.find((item) => item.category === 'Vehicle')
assert.equal(zoeVehicle.financingStatus, 'Financed')
assert.equal(zoeVehicle.keepIntent, 'Surrender')
assert.ok(zoeVehicle.lienAmount > 0)
assert.ok(zoe.matter.debts.some((item) => item.type === 'secured' && item.collateral === zoeVehicle.description))
assert.ok(zoe.matter.documents.some((item) => item.name === 'Tax return - last year' && item.qualityIssue === 'illegible'))
assert.ok(zoe.completion.missingItems.some((item) => item.label === 'Tax return - last year'))

const daniel = scenario('daniel-sofia-reyes-ch13')
assert.ok(!daniel.matter.assets.some((item) => item.category === 'Real estate'))
assert.equal(daniel.matter.assets.filter((item) => item.category === 'Vehicle').length, 1)
assert.ok(daniel.matter.debts.filter((item) => item.type === 'secured').every((item) => /Honda Odyssey/i.test(item.collateral)))
assert.ok(!daniel.matter.expenses.some((item) => /mortgage/i.test(item.category)))
assert.equal(daniel.matter.financialAffairs.lawsuits.answer, 'No')
assert.equal(daniel.matter.financialAffairs['property-taken'].answer, 'Yes')
assert.ok(!daniel.completion.items.some((item) => item.canonicalPath === 'matter.chapter13.foreclosureSaleDate'))

const erin = scenario('erin-cole-mitchell-ch13')
assert.ok(!erin.matter.assets.some((item) => item.category === 'Real estate'))
assert.ok(!erin.matter.debts.some((item) => /mortgage|primary residence|home/i.test(`${item.creditor} ${item.collateral}`)))
assert.ok(erin.matter.expenses.some((item) => item.category === 'Rent'))
assert.equal(erin.matter.financialAffairs.lawsuits.entries[0].fields.type, 'Eviction')
assert.equal(erin.matter.financialAffairs['property-taken'].answer, 'No')
assert.ok(!JSON.stringify(erin.matter.financialAffairs['creditor-payments-90-days']).includes('Mortgage'))
assert.ok(!erin.completion.items.some((item) => item.canonicalPath === 'matter.chapter13.foreclosureSaleDate'))

const firstImport = bridge.mergePackagesIntoLeads([], feed.packages)
const repeatedImport = bridge.mergePackagesIntoLeads(firstImport, feed.packages)
assert.equal(firstImport.length, expectedPackageCount)
assert.equal(repeatedImport.length, expectedPackageCount)
assert.deepEqual(repeatedImport.map((lead) => lead.id).sort(), firstImport.map((lead) => lead.id).sort())
assert.deepEqual(
  repeatedImport.map((lead) => lead.docChecklist.map((document) => document.docId)),
  firstImport.map((lead) => lead.docChecklist.map((document) => document.docId)),
)

const approvalInput = {
  actor: 'pilot reviewer',
  now: '2026-07-13T18:00:00.000Z',
  scheduledFor: '2026-07-14T09:00',
}
const approvalLead = firstImport.find(
  (lead) => lead.intakePackage.packageId === feed.packages[0].packageId,
)
const approvedOnce = bridge.approveCompletionReminder(approvalLead, approvalInput)
const approvedTwice = bridge.approveCompletionReminder(approvedOnce, approvalInput)
assert.deepEqual(approvedTwice, approvedOnce)
assert.equal(approvedOnce.intakeCompletion.followUp.status, 'approved_scheduled')
assert.equal(approvedOnce.intakeCompletion.followUp.approvedBy, 'pilot reviewer')
assert.equal(approvedOnce.intakeCompletion.followUp.deliveryMode, 'simulation')
assert.equal(approvedOnce.communications.filter((item) => item.workflowKey).length, 1)
assert.equal(approvedOnce.tasks.filter((item) => item.workflowKey).length, 3)
assert.equal(approvedOnce.intakeCompletion.scheduledRecords.filter((item) => item.workflowKey).length, 1)
assert.ok(approvedOnce.tasks.some((item) => item.title === 'Suggest reminder 2 if Intake is still incomplete' && item.due === '2026-07-21'))
assert.ok(approvedOnce.tasks.some((item) => item.title === 'Firm follow-up if Intake is still incomplete' && item.due === '2026-07-24'))
assert.equal(approvedOnce.intakeCompletion.followUp.cadencePolicy.maximumReminders, 2)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.recipient, approvalLead.intakeCompletion.emailDraft.recipient)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.subject, approvalLead.intakeCompletion.emailDraft.subject)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.body, approvalLead.intakeCompletion.emailDraft.bodySnapshot)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.resumeUrl, approvalLead.intakeCompletion.intakeResumeUrl)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.matterRevision, approvalLead.intakeCompletion.revision)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.contentHash, approvedOnce.intakeCompletion.followUp.contentHash)
assert.equal(approvedOnce.intakeCompletion.followUp.approvalSignature.missingItemInstructions.length, approvalLead.intakeCompletion.missingItems.length)
assert.deepEqual(approvedOnce.intakeCompletion.followUp.approvedSnapshot, {
  body: approvalLead.intakeCompletion.emailDraft.bodySnapshot,
  missingItemInstructions: approvalLead.intakeCompletion.missingItems.map((item) => ({ id: item.id, instruction: item.clientInstruction })),
  recipient: approvalLead.intakeCompletion.emailDraft.recipient,
  resumeUrl: approvalLead.intakeCompletion.intakeResumeUrl,
  subject: approvalLead.intakeCompletion.emailDraft.subject,
})
assert.equal(approvedOnce.intakeCompletion.followUp.generatedSnapshot.body, approvalLead.intakeCompletion.emailDraft.bodySnapshot)

const originalHash = approvedOnce.intakeCompletion.followUp.contentHash
const edited = bridge.updateCompletionReminderDraft(approvedOnce, {
  actor: 'pilot reviewer',
  body: `${approvedOnce.intakeCompletion.followUp.bodySnapshot}\n\nPlease use the secure fake-data link above.`,
  now: '2026-07-13T18:05:00.000Z',
  overrideReason: 'Clarify secure-link instructions for the fake pilot.',
})
assert.equal(edited.intakeCompletion.followUp.status, 'stale')
assert.notEqual(edited.intakeCompletion.followUp.contentHash, originalHash)
assert.equal(edited.intakeCompletion.approvalHistory.length, 1)
assert.ok(edited.communications.filter((item) => item.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(edited.tasks.filter((item) => item.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(edited.intakeCompletion.scheduledRecords.filter((item) => item.workflowKey).every((item) => item.status === 'canceled'))
assert.throws(
  () => bridge.updateCompletionReminderDraft(approvedOnce, { subject: 'Unsafe unreasoned edit' }),
  /override reason/i,
)

const reapproved = bridge.approveCompletionReminder(edited, {
  actor: 'pilot reviewer',
  now: '2026-07-13T18:06:00.000Z',
  scheduledFor: '2026-07-14T10:00',
})
assert.equal(reapproved.intakeCompletion.followUp.status, 'approved_scheduled')
assert.notEqual(reapproved.intakeCompletion.followUp.approvalId, approvedOnce.intakeCompletion.followUp.approvalId)
assert.equal(reapproved.communications.filter((item) => item.workflowKey && item.status === 'Scheduled').length, 1)
assert.equal(reapproved.tasks.filter((item) => item.workflowKey && item.status === 'Pending').length, 3)
assert.equal(reapproved.intakeCompletion.scheduledRecords.filter((item) => item.workflowKey && item.status === 'active').length, 1)

const canceled = bridge.cancelCompletionFollowUp(reapproved, {
  actor: 'pilot reviewer',
  now: '2026-07-13T18:07:00.000Z',
  reason: 'Pilot reviewer canceled the simulated reminder.',
})
assert.equal(canceled.intakeCompletion.followUp.status, 'canceled')
assert.ok(canceled.communications.filter((item) => item.workflowKey === reapproved.intakeCompletion.followUp.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(canceled.tasks.filter((item) => item.workflowKey === reapproved.intakeCompletion.followUp.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(canceled.intakeCompletion.scheduledRecords.filter((item) => item.workflowKey === reapproved.intakeCompletion.followUp.workflowKey).every((item) => item.status === 'canceled'))

const reviewed = structuredClone(firstImport)
const reviewedDocument = reviewed[0].docChecklist.find((document) => document.reviewStatus === 'pending_review')
reviewedDocument.reviewStatus = 'approved'
reviewedDocument.status = 'approved'
reviewedDocument.approvedBy = 'pilot reviewer'
reviewedDocument.approvedDate = '2026-07-13'
reviewedDocument.versions[0].status = 'approved'
const approvedForReimport = bridge.approveCompletionReminder(reviewed[0], approvalInput)
reviewed[0] = approvedForReimport
const reimported = bridge.mergePackagesIntoLeads(reviewed, feed.packages)
const preserved = reimported[0].docChecklist.find((document) => document.docId === reviewedDocument.docId)
assert.equal(preserved.reviewStatus, 'approved')
assert.equal(preserved.status, 'approved')
assert.equal(preserved.approvedBy, 'pilot reviewer')
assert.equal(preserved.versions[0].status, 'approved')
assert.equal(reimported[0].intakeCompletion.followUp.status, 'approved_scheduled')

const partialPackage = structuredClone(feed.packages[0])
const respondedItem = partialPackage.completion.missingItems[0]
partialPackage.submittedAt = '2026-07-13T19:00:00.000Z'
partialPackage.matter.updatedAt = partialPackage.submittedAt
partialPackage.matter.status = 'client-response-received'
partialPackage.completion.revision = 2
partialPackage.completion.suppressionReason = 'client_response'
partialPackage.completion.missingItems = partialPackage.completion.missingItems.filter((item) => item.id !== respondedItem.id)
partialPackage.completion.items = partialPackage.completion.items.map((item) => item.id === respondedItem.id ? { ...item, resolutionStatus: 'answered' } : item)
partialPackage.completion.bundle.items = structuredClone(partialPackage.completion.items)
partialPackage.completion.bundle.reminderItems = partialPackage.completion.bundle.reminderItems.filter((item) => item.id !== respondedItem.id)
partialPackage.completion.bundle.matterRevision = 2
partialPackage.completion.bundle.states.submission = 'resubmitted'
partialPackage.completion.states.submission = 'resubmitted'
assert.equal(bridge.validatePackage(partialPackage).valid, true)

const partialMerged = bridge.mergePackageIntoLeads([approvedOnce], partialPackage)[0]
assert.equal(partialMerged.intakePackage.packageId, partialPackage.packageId)
assert.equal(partialMerged.intakeCompletion.status, 'needs_client_action')
assert.equal(partialMerged.intakeCompletion.followUp.status, 'canceled')
assert.ok(partialMerged.intakeCompletion.missingItems.length > 0)
assert.ok(!partialMerged.intakeCompletion.missingItems.some((item) => item.id === respondedItem.id))
assert.ok(partialMerged.tasks.some((task) => task.title === 'Review debtor Intake response'))
assert.ok(partialMerged.communications.filter((item) => item.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(partialMerged.tasks.filter((item) => item.workflowKey).every((item) => item.status === 'Canceled'))
assert.ok(partialMerged.intakeCompletion.scheduledRecords.filter((item) => item.workflowKey).every((item) => item.status === 'canceled'))

const completedPackage = structuredClone(partialPackage)
completedPackage.submittedAt = '2026-07-13T20:00:00.000Z'
completedPackage.matter.status = 'intake-complete-pending-review'
completedPackage.completion.revision = 3
completedPackage.completion.status = 'complete'
completedPackage.completion.percent = 100
completedPackage.completion.intakeChecklistCompletion = 100
completedPackage.completion.missingItems = []
completedPackage.completion.items = completedPackage.completion.items.map((item) => item.clientActionable ? { ...item, resolutionStatus: item.kind === 'document' ? 'uploaded' : 'answered' } : item)
completedPackage.completion.bundle.items = structuredClone(completedPackage.completion.items)
completedPackage.completion.bundle.reminderItems = []
completedPackage.completion.bundle.matterRevision = 3
completedPackage.completion.bundle.metrics.intakeChecklistCompletion = 100
completedPackage.completion.bundle.states.submission = 'resubmitted'
completedPackage.completion.bundle.states.intakeCompletion = 'complete'
completedPackage.completion.states = structuredClone(completedPackage.completion.bundle.states)
assert.equal(bridge.validatePackage(completedPackage).valid, true)

const completedLead = bridge.mergePackageIntoLeads([approvedOnce], completedPackage)[0]
assert.equal(completedLead.leadStage, 'Intake Submitted')
assert.equal(completedLead.intakeCompletion.status, 'complete')
assert.equal(completedLead.intakeCompletion.followUp.status, 'canceled')
assert.equal(completedLead.intakeCompletion.missingItems.length, 0)
assert.equal(completedLead.intakeCompletion.states.documentReview, feed.packages[0].completion.states.documentReview)
assert.equal(completedLead.intakeCompletion.states.attorneyReview, 'not_started')

const helpPackage = structuredClone(feed.packages[0])
helpPackage.submittedAt = '2026-07-13T20:15:00.000Z'
helpPackage.matter.updatedAt = helpPackage.submittedAt
helpPackage.matter.status = 'client-response-received'
helpPackage.completion.revision = 2
helpPackage.completion.suppressionReason = 'client_response'
helpPackage.completion.items = helpPackage.completion.items.map((item) =>
  item.clientActionable && item.applicability === 'essential_now'
    ? { ...item, resolutionStatus: 'help_requested', responseReason: 'I need help with this fake pilot item.' }
    : item,
)
helpPackage.completion.missingItems = helpPackage.completion.items.filter((item) =>
  item.clientActionable && item.applicability === 'essential_now',
)
helpPackage.completion.bundle.items = structuredClone(helpPackage.completion.items)
helpPackage.completion.bundle.reminderItems = []
helpPackage.completion.bundle.matterRevision = 2
helpPackage.completion.bundle.states.submission = 'resubmitted'
helpPackage.completion.states.submission = 'resubmitted'
assert.equal(bridge.validatePackage(helpPackage).valid, true)
const helpLead = bridge.packageToLead(helpPackage)
assert.equal(helpLead.intakeCompletion.status, 'needs_client_action')
assert.equal(helpLead.intakeCompletion.followUp.status, 'canceled')
assert.equal(helpLead.intakeCompletion.missingItems.length, helpPackage.completion.missingItems.length)
assert.ok(helpLead.tasks.some((task) => task.title === 'Respond to debtor Intake help request'))

const conditionalPackage = structuredClone(scenario('theo-bennett-ch7-retired'))
const conditionalItem = conditionalPackage.completion.items.find((item) => item.applicability === 'conditional')
assert.ok(conditionalItem)
conditionalPackage.submittedAt = '2026-07-13T20:30:00.000Z'
conditionalPackage.matter.updatedAt = conditionalPackage.submittedAt
conditionalPackage.matter.status = 'intake-complete-pending-review'
conditionalPackage.completion.revision = 2
conditionalPackage.completion.status = 'complete'
conditionalPackage.completion.percent = 100
conditionalPackage.completion.intakeChecklistCompletion = 100
conditionalPackage.completion.items = conditionalPackage.completion.items.map((item) =>
  item.clientActionable && item.applicability === 'essential_now'
    ? { ...item, resolutionStatus: item.kind === 'document' ? 'uploaded' : 'answered' }
    : item,
)
conditionalPackage.completion.missingItems = []
conditionalPackage.completion.bundle.items = structuredClone(conditionalPackage.completion.items)
conditionalPackage.completion.bundle.reminderItems = []
conditionalPackage.completion.bundle.matterRevision = 2
conditionalPackage.completion.bundle.metrics.intakeChecklistCompletion = 100
conditionalPackage.completion.bundle.states.submission = 'resubmitted'
conditionalPackage.completion.bundle.states.intakeCompletion = 'complete'
conditionalPackage.completion.states = structuredClone(conditionalPackage.completion.bundle.states)
assert.equal(bridge.validatePackage(conditionalPackage).valid, true)
assert.equal(conditionalPackage.completion.bundle.items.find((item) => item.id === conditionalItem.id).resolutionStatus, 'open')

const divergentProjection = structuredClone(feed.packages[0])
divergentProjection.completion.bundle.reminderItems = []
assert.equal(bridge.validatePackage(divergentProjection).valid, false)
assert.ok(bridge.validatePackage(divergentProjection).errors.some((error) => /Reminder projection diverges/.test(error)))
const divergentInstruction = structuredClone(feed.packages[0])
divergentInstruction.completion.missingItems[0].clientInstruction = 'Tampered CRM-only instruction.'
assert.equal(bridge.validatePackage(divergentInstruction).valid, false)
assert.ok(bridge.validatePackage(divergentInstruction).errors.some((error) => /Missing-item projection diverges/.test(error)))
const divergentRevision = structuredClone(feed.packages[0])
divergentRevision.completion.bundle.matterRevision += 1
assert.equal(bridge.validatePackage(divergentRevision).valid, false)
assert.ok(bridge.validatePackage(divergentRevision).errors.some((error) => /revision diverges/.test(error)))
const divergentMetric = structuredClone(feed.packages[0])
divergentMetric.completion.bundle.metrics.intakeChecklistCompletion -= 1
assert.equal(bridge.validatePackage(divergentMetric).valid, false)
assert.ok(bridge.validatePackage(divergentMetric).errors.some((error) => /metric projection diverges/.test(error)))

const queueValues = new Map()
const queueStorage = {
  getItem: (key) => queueValues.get(key) ?? null,
  setItem: (key, value) => queueValues.set(key, value),
}
bridge.enqueuePackage(queueStorage, partialPackage)
bridge.enqueuePackage(queueStorage, feed.packages[0])
assert.equal(bridge.readQueuedPackages(queueStorage)[0].completion.revision, 2)
const simultaneousPackage = structuredClone(partialPackage)
simultaneousPackage.completion.emailDraft.bodySnapshot += '\nConflicting simultaneous write.'
const acceptedSimultaneous = bridge.enqueuePackage(queueStorage, simultaneousPackage)
assert.notEqual(acceptedSimultaneous.completion.emailDraft.bodySnapshot, simultaneousPackage.completion.emailDraft.bodySnapshot)
assert.equal(bridge.readQueuedPackages(queueStorage)[0].completion.emailDraft.bodySnapshot, partialPackage.completion.emailDraft.bodySnapshot)

const organizationValues = new Map()
const organizationStorage = {
  getItem: (key) => organizationValues.get(key) ?? null,
  setItem: (key, value) => organizationValues.set(key, value),
}
assert.equal(bridge.readOrganization(organizationStorage).name, 'McCune Legal')
const savedOrganization = bridge.writeOrganization(organizationStorage, {
  ...bridge.DEFAULT_ORGANIZATION,
  email: '  intake@stein.example  ',
  logo: 'data:image/png;base64,ZmFrZS1sb2dv',
  mailboxProvider: 'google_workspace',
  name: '  Stein Legal  ',
})
assert.equal(savedOrganization.name, 'Stein Legal')
assert.equal(savedOrganization.email, 'intake@stein.example')
assert.equal(savedOrganization.mailboxProvider, 'google_workspace')
assert.equal(bridge.readOrganization(organizationStorage).logo, 'data:image/png;base64,ZmFrZS1sb2dv')

console.log(JSON.stringify({
  clients: firstImport.map((lead) => lead.clientFullName),
  documentCount: documentIds.size,
  packageCount: feed.packages.length,
  status: 'passed',
  traitCoverage: requiredTraitCoverage,
}, null, 2))
