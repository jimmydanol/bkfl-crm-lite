import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const require = createRequire(import.meta.url)
const bridge = require('../intake-bridge.js')
const feedPath = path.resolve(import.meta.dirname, '../data/intake-submissions.json')
const feed = JSON.parse(await readFile(feedPath, 'utf8'))

assert.equal(feed.schemaVersion, 1)
assert.equal(feed.demo, true)
assert.equal(feed.packages.length, 10)

const packageIds = new Set()
const leadIds = new Set()

for (const intakePackage of feed.packages) {
  const validation = bridge.validatePackage(intakePackage)
  assert.deepEqual(validation.errors, [])
  assert.equal(validation.valid, true)
  assert.equal(intakePackage.matter.status, 'review')
  assert.ok(intakePackage.completion.percent >= 85)
  assert.ok(intakePackage.completion.percent <= 95)
  assert.ok(intakePackage.readiness.fieldsFilled <= intakePackage.readiness.fieldsRequired)
  assert.ok(
    intakePackage.readiness.documentsReady < intakePackage.readiness.documentsRequired,
  )
  assert.ok(intakePackage.matter.documents.length > 0)
  assert.ok(
    intakePackage.matter.documents.some((document) => document.status === 'received') &&
      intakePackage.matter.documents.some((document) => document.status === 'needed'),
  )
  assert.ok(
    intakePackage.matter.debtors.every((debtor) =>
      String(debtor.email).endsWith('@example.test'),
    ),
  )

  const lead = bridge.packageToLead(intakePackage)
  assert.equal(lead.leadStage, 'Intake In Progress')
  assert.equal(lead.intakePackage.packageId, intakePackage.packageId)
  assert.equal(lead.contacts.length, intakePackage.matter.debtors.length)
  assert.equal(lead.docChecklist.length, intakePackage.matter.documents.length)
  assert.equal(lead.intakeCompletion.status, 'needs_client_action')
  assert.equal(lead.intakeCompletion.followUp.status, 'pending_approval')
  assert.equal(lead.intakeCompletion.followUp.deliveryMode, 'simulation')
  assert.equal(lead.intakeCompletion.followUp.scheduledFor, '')
  assert.ok(lead.intakeCompletion.missingItems.some((item) => item.kind === 'field'))
  assert.ok(
    lead.intakeCompletion.missingItems.some((item) => item.kind === 'document'),
  )
  assert.ok(
    lead.intakeCompletion.missingItems.every((item) =>
      lead.intakeCompletion.followUp.bodySnapshot.includes(item.clientInstruction),
    ),
  )
  assert.ok(
    lead.intakeCompletion.followUp.bodySnapshot.includes(
      lead.intakeCompletion.intakeResumeUrl,
    ),
  )
  const intakeUrl = new URL(lead.intakeCompletion.intakeResumeUrl)
  assert.equal(intakeUrl.hostname, 'jimmydanol.github.io')
  assert.equal(intakeUrl.searchParams.get('packageId'), intakePackage.packageId)
  assert.ok(
    lead.docChecklist
      .filter((document) => document.reviewStatus === 'pending_review')
      .every(
        (document) =>
          document.status === 'ai_accepted' &&
          document.versions.length === 1 &&
          document.reviewEvents.some((event) => event.action === 'submission_received'),
      ),
  )
  assert.ok(
    lead.docChecklist
      .filter((document) => document.reviewStatus === 'awaiting_upload')
      .every((document) => document.status === 'open' && document.versions.length === 0),
  )
  assert.ok(
    lead.tasks.some((task) => task.title === 'Approve incomplete Intake reminder'),
  )

  packageIds.add(intakePackage.packageId)
  leadIds.add(lead.id)
}

assert.equal(packageIds.size, 10)
assert.equal(leadIds.size, 10)

const once = bridge.mergePackagesIntoLeads([], feed.packages)
const twice = bridge.mergePackagesIntoLeads(once, feed.packages)
assert.equal(once.length, 10)
assert.equal(twice.length, 10)
assert.deepEqual(
  twice.map((lead) => lead.id).sort(),
  once.map((lead) => lead.id).sort(),
)

const reviewedLeads = structuredClone(once)
const reviewedDocument = reviewedLeads[0].docChecklist.find(
  (document) => document.reviewStatus === 'pending_review',
)
reviewedDocument.reviewStatus = 'approved'
reviewedDocument.status = 'approved'
reviewedDocument.approvedBy = 'BK Attorney'
reviewedDocument.approvedDate = '2026-07-13'
reviewedDocument.reviewEvents.push({
  action: 'approved',
  actor: 'BK Attorney',
  date: '2026-07-13T15:00:00.000Z',
  detail: 'Approved after law-firm review.',
  id: `${reviewedDocument.docId}-approved-test`,
})
reviewedDocument.versions[0].status = 'approved'
reviewedLeads[0].intakeCompletion.followUp = {
  ...reviewedLeads[0].intakeCompletion.followUp,
  approvedAt: '2026-07-13T15:00:00.000Z',
  approvedBy: 'BK Attorney',
  scheduledFor: '2026-07-14T09:00',
  status: 'approved_scheduled',
}
reviewedLeads[0].intakeCompletion.events.push({
  action: 'reminder_approved',
  actor: 'BK Attorney',
  date: '2026-07-13T15:00:00.000Z',
  id: 'reminder-approved-test',
})
reviewedLeads[0].communications.unshift({
  deliveryMode: 'simulation',
  id: 'scheduled-reminder-test',
  status: 'Scheduled',
})
reviewedLeads[0].tasks.unshift({
  id: 'scheduled-reminder-task-test',
  status: 'Pending',
  title: 'Simulated intake reminder scheduled',
})

const reimported = bridge.mergePackagesIntoLeads(reviewedLeads, feed.packages)
const preservedDocument = reimported
  .find((lead) => lead.id === reviewedLeads[0].id)
  .docChecklist.find((document) => document.docId === reviewedDocument.docId)
assert.equal(reimported.length, 10)
assert.equal(preservedDocument.reviewStatus, 'approved')
assert.equal(preservedDocument.status, 'approved')
assert.equal(preservedDocument.approvedBy, 'BK Attorney')
assert.equal(preservedDocument.approvedDate, '2026-07-13')
assert.equal(preservedDocument.versions[0].status, 'approved')
assert.ok(preservedDocument.reviewEvents.some((event) => event.action === 'approved'))
const preservedCompletion = reimported.find(
  (lead) => lead.id === reviewedLeads[0].id,
).intakeCompletion
assert.equal(preservedCompletion.followUp.status, 'approved_scheduled')
assert.equal(preservedCompletion.followUp.scheduledFor, '2026-07-14T09:00')
assert.equal(preservedCompletion.followUp.approvedBy, 'BK Attorney')
assert.ok(
  preservedCompletion.events.some((event) => event.action === 'reminder_approved'),
)

const completedPackage = structuredClone(
  feed.packages.find(
    (item) => item.packageId === reviewedLeads[0].intakePackage.packageId,
  ),
)
completedPackage.submittedAt = '2026-07-14T16:00:00.000Z'
completedPackage.matter.status = 'ready-for-attorney'
completedPackage.matter.updatedAt = completedPackage.submittedAt
completedPackage.matter.documents = completedPackage.matter.documents.map((document) => ({
  ...document,
  receivedAt: completedPackage.submittedAt,
  status: 'received',
}))
completedPackage.readiness.documentsReady = completedPackage.readiness.documentsRequired
completedPackage.readiness.fieldsFilled = completedPackage.readiness.fieldsRequired
completedPackage.readiness.status = 'ready-for-attorney'
completedPackage.completion = {
  ...completedPackage.completion,
  documentCompletion: {
    applicableRequired: completedPackage.readiness.documentsRequired,
    receivedRequired: completedPackage.readiness.documentsRequired,
  },
  emailDraft: {
    ...completedPackage.completion.emailDraft,
    status: 'canceled',
  },
  fieldCompletion: {
    applicableRequired: completedPackage.readiness.fieldsRequired,
    enteredRequired: completedPackage.readiness.fieldsRequired,
    percent: 100,
  },
  missingItems: [],
  percent: 100,
  revision: 2,
  status: 'complete',
}
assert.equal(bridge.validatePackage(completedPackage).valid, true)

const completedLeads = bridge.mergePackagesIntoLeads(reimported, [completedPackage])
const completedLead = completedLeads.find(
  (lead) => lead.id === reviewedLeads[0].id,
)
assert.equal(completedLead.leadStage, 'Intake Submitted')
assert.equal(completedLead.intakeCompletion.status, 'complete')
assert.equal(completedLead.intakeCompletion.followUp.status, 'canceled')
assert.equal(completedLead.intakeCompletion.missingItems.length, 0)
assert.ok(
  completedLead.tasks.some((task) => task.title === 'Review completed Intake package'),
)
assert.equal(
  completedLead.tasks.find(
    (task) => task.title === 'Simulated intake reminder scheduled',
  ).status,
  'Canceled',
)
assert.equal(
  completedLead.communications.find(
    (communication) => communication.id === 'scheduled-reminder-test',
  ).status,
  'Canceled',
)

const organizationValues = new Map()
const organizationStorage = {
  getItem: (key) => organizationValues.get(key) ?? null,
  setItem: (key, value) => organizationValues.set(key, value),
}
assert.equal(bridge.readOrganization(organizationStorage).name, 'McCune Legal')
const savedOrganization = bridge.writeOrganization(organizationStorage, {
  ...bridge.DEFAULT_ORGANIZATION,
  logo: 'data:image/png;base64,ZmFrZS1sb2dv',
  name: '  Stein Legal  ',
})
assert.equal(savedOrganization.name, 'Stein Legal')
assert.equal(savedOrganization.logo, 'data:image/png;base64,ZmFrZS1sb2dv')
assert.equal(bridge.readOrganization(organizationStorage).name, 'Stein Legal')
assert.equal(
  bridge.readOrganization(organizationStorage).logo,
  'data:image/png;base64,ZmFrZS1sb2dv',
)
assert.equal(
  JSON.parse(organizationStorage.getItem(bridge.ORGANIZATION_STORAGE_KEY)).name,
  'Stein Legal',
)

console.log(
  JSON.stringify(
    {
      clients: once.map((lead) => lead.clientFullName),
      packageCount: feed.packages.length,
      status: 'passed',
    },
    null,
    2,
  ),
)
