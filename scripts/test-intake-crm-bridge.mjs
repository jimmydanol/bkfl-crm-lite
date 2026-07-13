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
  assert.equal(intakePackage.matter.status, 'ready-for-attorney')
  assert.equal(
    intakePackage.readiness.fieldsFilled,
    intakePackage.readiness.fieldsRequired,
  )
  assert.equal(
    intakePackage.readiness.documentsReady,
    intakePackage.readiness.documentsRequired,
  )
  assert.ok(intakePackage.matter.documents.length > 0)
  assert.ok(
    intakePackage.matter.documents.every((document) => document.status === 'received'),
  )
  assert.ok(
    intakePackage.matter.debtors.every((debtor) =>
      String(debtor.email).endsWith('@example.test'),
    ),
  )

  const lead = bridge.packageToLead(intakePackage)
  assert.equal(lead.leadStage, 'Intake Submitted')
  assert.equal(lead.intakePackage.packageId, intakePackage.packageId)
  assert.equal(lead.contacts.length, intakePackage.matter.debtors.length)
  assert.equal(lead.docChecklist.length, intakePackage.matter.documents.length)
  assert.ok(
    lead.docChecklist.every(
      (document) =>
        document.reviewStatus === 'pending_review' &&
        document.status === 'ai_accepted' &&
        document.versions.length === 1 &&
        document.versions[0].status === 'under_review' &&
        document.reviewEvents.some((event) => event.action === 'submission_received'),
    ),
  )
  assert.ok(lead.tasks.some((task) => task.title === 'Review completed Intake package'))

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
const reviewedDocument = reviewedLeads[0].docChecklist[0]
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
