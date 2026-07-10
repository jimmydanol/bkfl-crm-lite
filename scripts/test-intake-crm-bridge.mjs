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
assert.equal(feed.packages.length, 3)

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
  assert.ok(lead.tasks.some((task) => task.title === 'Review completed Intake package'))

  packageIds.add(intakePackage.packageId)
  leadIds.add(lead.id)
}

assert.equal(packageIds.size, 3)
assert.equal(leadIds.size, 3)

const once = bridge.mergePackagesIntoLeads([], feed.packages)
const twice = bridge.mergePackagesIntoLeads(once, feed.packages)
assert.equal(once.length, 3)
assert.equal(twice.length, 3)
assert.deepEqual(
  twice.map((lead) => lead.id).sort(),
  once.map((lead) => lead.id).sort(),
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
