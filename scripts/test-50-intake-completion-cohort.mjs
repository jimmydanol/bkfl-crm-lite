import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const repoRoot = path.resolve(import.meta.dirname, '..')
const feed = JSON.parse(await readFile(path.join(repoRoot, 'data', 'intake-submissions.json'), 'utf8'))
const packages = feed.packages || []

assert.equal(packages.length, 50, 'the Intake Completion cohort must contain 50 matters')
assert.equal(new Set(packages.map((item) => item.packageId)).size, 50, 'package IDs must be unique')
assert.equal(new Set(packages.map((item) => item.matter.id)).size, 50, 'matter IDs must be unique')
assert.equal(
  new Set(packages.map((item) => item.matter.debtors[0].email)).size,
  50,
  'primary debtor emails must be unique',
)

const pathValue = (matter, sourcePath) => {
  if (!sourcePath.startsWith('matter.') || sourcePath.includes("[id='")) return undefined
  const parts = sourcePath
    .replace(/^matter\./, '')
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean)
  return parts.reduce((value, key) => value?.[key], matter)
}

const isBlank = (value) => value === '' || value === null || value === undefined || value === 0
const completionValues = new Set()
let genuineBlankCount = 0
let untouchedRequestCount = 0
let inconsistencyCount = 0
let partialSectionCount = 0

for (const item of packages) {
  const { completion, matter, readiness } = item
  const primary = matter.debtors[0]
  assert(primary.email.endsWith('@example.test'), `${item.packageId} must use a fake-safe email`)
  assert(completion.intakeChecklistCompletion >= 80, `${item.packageId} must be at least 80% complete`)
  assert(completion.intakeChecklistCompletion <= 95, `${item.packageId} must be no more than 95% complete`)
  completionValues.add(completion.intakeChecklistCompletion)

  assert(readiness.blankFields.length > 0, `${item.packageId} must record genuine blank fields`)
  const sourceBackedBlanks = readiness.blankFields.filter((field) =>
    isBlank(pathValue(matter, field.sourcePath)),
  )
  assert(sourceBackedBlanks.length > 0, `${item.packageId} blank evidence must resolve to an actual blank value`)
  genuineBlankCount += sourceBackedBlanks.length

  assert(readiness.partialSections.length > 0, `${item.packageId} must contain a partially completed section`)
  assert(
    readiness.partialSections.every((section) => section.status === 'partially_completed'),
    `${item.packageId} partial sections must use the expected state`,
  )
  partialSectionCount += readiness.partialSections.length

  assert(readiness.untouchedDocumentRequests.length > 0, `${item.packageId} must contain an untouched request`)
  for (const request of readiness.untouchedDocumentRequests) {
    const source = matter.documents.find((document) => document.id === request.id)
    assert(source, `${item.packageId} untouched request must resolve to a source document`)
    assert.equal(source.status, 'needed')
    assert.equal(source.requestState, 'untouched')
    assert.equal(source.firstRequestedAt, '')
    assert.equal(source.debtorResponse, null)
    untouchedRequestCount += 1
  }

  assert(readiness.inconsistencies.length > 0, `${item.packageId} must contain an inconsistent answer`)
  for (const inconsistency of readiness.inconsistencies) {
    assert(inconsistency.detail, `${item.packageId} inconsistency must explain the conflict`)
    assert.equal(inconsistency.evidence?.length, 2, `${item.packageId} inconsistency must include both source values`)
    assert(
      completion.bundle.items.some(
        (bundleItem) => bundleItem.kind === 'review' && bundleItem.id === `flag-${inconsistency.id}`,
      ),
      `${item.packageId} inconsistency must appear as a reviewer-only bundle item`,
    )
    assert(
      !completion.bundle.reminderItems.some((bundleItem) => bundleItem.id === `flag-${inconsistency.id}`),
      `${item.packageId} inconsistency must not be sent to the debtor as a reminder`,
    )
    inconsistencyCount += 1
  }

  assert(completion.missingItems.some((missing) => missing.kind === 'field'))
  assert(completion.missingItems.some((missing) => missing.kind === 'document'))
  assert.equal(completion.states.intakeCompletion, 'needs_client_action')
}

assert(completionValues.size >= 6, 'completion should vary materially across the 80-95% range')

console.log(JSON.stringify({
  completionMaximum: Math.max(...completionValues),
  completionMinimum: Math.min(...completionValues),
  completionValues: [...completionValues].sort((left, right) => left - right),
  genuineBlankCount,
  inconsistencyCount,
  matters: packages.length,
  partialSectionCount,
  untouchedRequestCount,
}, null, 2))
