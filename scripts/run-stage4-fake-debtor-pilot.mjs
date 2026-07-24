import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const here = path.dirname(fileURLToPath(import.meta.url))
const crmRoot = path.resolve(here, '..')
const intakeRoot = process.env.BKFL_INTAKE_ROOT || path.resolve(crmRoot, '../BK-FastLane/apps/intake')
const require = createRequire(import.meta.url)
const bridge = require('../intake-stage4-bridge.js')

const generated = spawnSync(process.execPath, ['scripts/run-debtor-entry-agent.mjs'], {
  cwd: intakeRoot,
  encoding: 'utf8',
  env: { ...process.env, BKFL_FAKE_DEBTOR_COUNT: '10' },
  maxBuffer: 25 * 1024 * 1024,
})

if (generated.status !== 0) {
  process.stderr.write(generated.stderr || generated.stdout)
  process.exit(generated.status || 1)
}

const generation = JSON.parse(generated.stdout)
const index = JSON.parse(await readFile(generation.indexPath, 'utf8'))

const evidenceFor = (
  document,
  indexValue,
  qualityIssue = document.qualityIssue,
  evidenceRevision = 1,
) => {
  const image = /license/i.test(document.name)
  const extension = image ? 'png' : 'pdf'
  return [
    {
      accuracyStatus: qualityIssue ? 'needs_review' : 'verified',
      mimeType: image ? 'image/png' : 'application/pdf',
      name: `${String(document.id || `document-${indexValue + 1}`).replace(/[^a-z0-9-]+/gi, '-')}.${extension}`,
      qualityIssue,
      sha256: `fake-only-${document.id || indexValue + 1}-revision-${evidenceRevision}`,
      size: image ? 68 : 128,
      source: 'intake_upload',
    },
  ]
}

const packages = []
for (const report of index.reports) {
  const data = JSON.parse(await readFile(report.dataPath, 'utf8'))
  const completion = {
    ...data.intakeCompletionBundle,
    missingItems: data.intakeCompletionBundle.items,
    revision: data.intakeCompletionBundle.matterRevision,
    status: data.intakeCompletionBundle.states.intakeCompletion,
  }
  const matter = structuredClone(data.matter)
  matter.documents = matter.documents.map((document, documentIndex) => ({
    ...document,
    evidenceFiles: document.status === 'received' ? evidenceFor(document, documentIndex) : [],
  }))
  packages.push({
    completion,
    inconsistencies: data.inconsistencies,
    matter,
    packageId: data.matter.id,
    reviewFlags: data.reviewFlags,
    syntheticOnly: true,
  })
}

assert.equal(packages.length, 10, 'The canonical Intake generator must produce ten fake debtors.')
let leads = bridge.importIntakePackages([], packages)
assert.equal(leads.length, 10)
assert.equal(leads.filter((lead) => lead.readiness.ready).length, 0)
assert.ok(leads.every((lead) => lead.leadStage === 'Intake Submitted'))
assert.ok(leads.some((lead) => lead.readiness.gates.documentReview.evidence.imageCount > 0))
assert.ok(leads.some((lead) => lead.readiness.gates.documentReview.evidence.pdfCount > 0))

const targetSource = structuredClone(packages[0])
targetSource.completion = {
  ...targetSource.completion,
  missingItems: targetSource.completion.missingItems.map((item) => ({
    ...item,
    resolutionStatus: 'resolved',
  })),
  revision: 2,
  states: {
    ...targetSource.completion.states,
    attorneyReview: 'approved',
    dataAccuracy: 'verified',
    documentReview: 'complete',
    intakeCompletion: 'complete',
  },
  status: 'complete',
}
targetSource.inconsistencies = targetSource.inconsistencies.map((issue) => ({
  ...issue,
  status: 'resolved',
}))
targetSource.reviewFlags = targetSource.reviewFlags.map((flag) => ({
  ...flag,
  status: 'resolved',
}))
targetSource.matter.documents = targetSource.matter.documents.map((document, documentIndex) => ({
  ...document,
  evidenceFiles: evidenceFor({ ...document, qualityIssue: undefined }, documentIndex, undefined),
  qualityIssue: undefined,
  status: 'reviewed',
}))

leads = bridge.importIntakePackages(leads, [targetSource], {
  attorneyReviewStatus: 'approved',
  dataAccuracyStatus: 'verified',
})
let target = leads.find((lead) => lead.packageId === targetSource.packageId)
assert.equal(target.readiness.ready, true)
assert.equal(target.leadStage, 'Ready for Petition Prep')

const correctedSource = structuredClone(targetSource)
correctedSource.completion.revision = 3
correctedSource.matter.documents[0] = {
  ...correctedSource.matter.documents[0],
  evidenceFiles: evidenceFor(correctedSource.matter.documents[0], 0, 'illegible', 3),
  qualityIssue: 'illegible',
  status: 'received',
}
leads = bridge.importIntakePackages(leads, [correctedSource], {
  attorneyReviewStatus: 'approved',
  dataAccuracyStatus: 'verified',
})
target = leads.find((lead) => lead.packageId === targetSource.packageId)
assert.equal(target.readiness.ready, false)
assert.equal(target.leadStage, 'Intake Submitted')
assert.ok(target.readiness.blockers.some((item) => item.id.includes('document-accuracy')))

const replacementSource = structuredClone(correctedSource)
replacementSource.completion.revision = 4
replacementSource.matter.documents[0] = {
  ...replacementSource.matter.documents[0],
  evidenceFiles: evidenceFor(
    { ...replacementSource.matter.documents[0], qualityIssue: undefined },
    0,
    undefined,
    4,
  ),
  qualityIssue: undefined,
  status: 'received',
}
leads = bridge.importIntakePackages(leads, [replacementSource], {
  attorneyReviewStatus: 'approved',
  dataAccuracyStatus: 'verified',
})
target = leads.find((lead) => lead.packageId === targetSource.packageId)
assert.equal(target.readiness.ready, false)
assert.equal(target.leadStage, 'Intake Submitted')
assert.equal(target.docChecklist[0].status, 'ai_accepted')

leads = leads.map((lead) =>
  lead.packageId === targetSource.packageId
    ? {
        ...lead,
        docChecklist: lead.docChecklist.map((document, index) =>
          index === 0 ? { ...document, status: 'approved' } : document,
        ),
      }
    : lead,
)
leads = bridge.importIntakePackages(leads, [replacementSource], {
  attorneyReviewStatus: 'approved',
  dataAccuracyStatus: 'verified',
})
target = leads.find((lead) => lead.packageId === targetSource.packageId)
assert.equal(target.readiness.ready, true)
assert.equal(target.leadStage, 'Ready for Petition Prep')

console.log(
  JSON.stringify(
    {
      evidence: leads.reduce(
        (total, lead) => ({
          images: total.images + lead.readiness.gates.documentReview.evidence.imageCount,
          pdfs: total.pdfs + lead.readiness.gates.documentReview.evidence.pdfCount,
        }),
        { images: 0, pdfs: 0 },
      ),
      generatedDebtors: packages.length,
      intakeOutputRoot: generation.outputRoot,
      promotedPackageId: target.packageId,
      regressionCheck: 'illegible image evidence returned the matter to Intake Submitted',
      replacementCheck: 'verified replacement evidence restored Ready for Petition Prep',
      status: 'stage4-fake-debtor-pilot-passed',
    },
    null,
    2,
  ),
)
