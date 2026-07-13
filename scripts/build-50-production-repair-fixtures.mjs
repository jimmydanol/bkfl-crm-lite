import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

await import('../prototype-case-contract.js')

const CASE_ENGINE = globalThis.BKFLPrototypeCase
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT_DIR = path.join(ROOT, 'results', 'production-repair-50x')
const FIXTURE_PATH = path.join(ROOT, 'fixtures', '50-synthetic-intake-packages.json')
const BASELINE_PATH = path.join(ROOT, 'results', '50-debtor-crm-agentic-evaluation', 'run-summary.json')

const scenarios = CASE_ENGINE.generateScenarios(50)
const packages = scenarios.map((scenario) => CASE_ENGINE.buildIntakePackage(scenario))
const importedLeads = packages.map((pkg) => CASE_ENGINE.upsertLeadBySubmission([], pkg)[0])
const resolvedLeads = importedLeads.map((lead) => CASE_ENGINE.resolveForAcceptance(lead))

const documentSignatures = new Set(packages.map((pkg) => pkg.documentRequirements.map((item) => item.requirementId).sort().join('|')))
const missingSignatures = new Set(packages.map((pkg) => pkg.documentRequirements.filter((item) => !['approved', 'excused'].includes(item.status)).map((item) => `${item.requirementId}:${item.status}`).sort().join('|')))
const triageSignatures = new Set(packages.map((pkg) => JSON.stringify(pkg.triage)))

const afterSummary = {
  evaluationId: CASE_ENGINE.EVALUATION_ID,
  schemaVersion: CASE_ENGINE.SCHEMA_VERSION,
  fixtureEngineVersion: CASE_ENGINE.FIXTURE_ENGINE_VERSION,
  generatedAt: '2026-07-13T18:00:00.000Z',
  requestedScenarioCount: 50,
  completedCount: packages.length,
  uniqueScenarioCount: new Set(scenarios.map((item) => item.scenarioId)).size,
  uniqueSubmissionCount: new Set(packages.map((item) => item.submissionId)).size,
  documentRequirementSignatureVariants: documentSignatures.size,
  crmMissingSignatureVariants: missingSignatures.size,
  triageSignatureVariants: triageSignatures.size,
  totalDocumentRequirements: packages.reduce((sum, pkg) => sum + pkg.documentRequirements.length, 0),
  casesWithMissingAnswers: packages.filter((pkg) => pkg.missingAnswers.length).length,
  casesWithContradictions: packages.filter((pkg) => pkg.contradictions.length).length,
  casesWithUrgentDeadlines: packages.filter((pkg) => pkg.urgentDeadlines.length).length,
  casesWithAiFlags: packages.filter((pkg) => pkg.documentRequirements.some((item) => item.status === 'ai_flagged')).length,
  casesReadyOnImport: importedLeads.filter((lead) => CASE_ENGINE.evaluateReadiness(lead).ready).length,
  casesReadyAfterExplicitResolution: resolvedLeads.filter((lead) => CASE_ENGINE.evaluateReadiness(lead).ready).length,
  allResolvedCasesReady: resolvedLeads.every((lead) => CASE_ENGINE.evaluateReadiness(lead).ready),
  allFixturesSyntheticOnly: packages.every((pkg) => pkg.syntheticOnly && pkg.household.debtors.every((debtor) => debtor.email.endsWith('@example.test'))),
  fileBytesStored: false,
  externalMessagesSent: false,
  productionSystemsMutated: false,
  expectedMinimumDocumentRequirementSignatureVariants: 8,
  expectedMinimumCrmMissingSignatureVariants: 20,
}

let beforeSummary
try {
  const baseline = JSON.parse(await fs.readFile(BASELINE_PATH, 'utf8'))
  beforeSummary = {
    evaluationId: baseline.evaluationId,
    completedCount: baseline.completedCount,
    crmMissingSignatureVariants: baseline.crmMissingSignatureVariants,
    allCrmReviewsReachedReady: baseline.allCrmReviewsReachedReady,
    source: 'results/50-debtor-crm-agentic-evaluation/run-summary.json',
    productionSystemsMutated: baseline.productionSystemsMutated,
    externalMessagesSent: baseline.externalMessagesSent,
  }
} catch {
  beforeSummary = {
    evaluationId: CASE_ENGINE.EVALUATION_ID,
    completedCount: 50,
    crmMissingSignatureVariants: 1,
    allCrmReviewsReachedReady: true,
    source: 'documented acceptance baseline',
    productionSystemsMutated: false,
    externalMessagesSent: false,
  }
}

const fixtureArtifact = {
  schemaVersion: CASE_ENGINE.SCHEMA_VERSION,
  fixtureEngineVersion: CASE_ENGINE.FIXTURE_ENGINE_VERSION,
  syntheticOnly: true,
  generatedAt: '2026-07-13T18:00:00.000Z',
  packages,
}

await fs.mkdir(path.dirname(FIXTURE_PATH), { recursive: true })
await fs.mkdir(OUTPUT_DIR, { recursive: true })
await fs.writeFile(FIXTURE_PATH, `${JSON.stringify(fixtureArtifact, null, 2)}\n`)
await fs.writeFile(path.join(OUTPUT_DIR, 'before-summary.json'), `${JSON.stringify(beforeSummary, null, 2)}\n`)
await fs.writeFile(path.join(OUTPUT_DIR, 'after-summary.json'), `${JSON.stringify(afterSummary, null, 2)}\n`)
await fs.writeFile(path.join(OUTPUT_DIR, 'resolved-readiness.json'), `${JSON.stringify(resolvedLeads.map((lead) => ({
  scenarioId: lead.intakePackage.scenarioId,
  submissionId: lead.submissionId,
  documentRequirementSignature: lead.docChecklist.map((item) => item.requirementId).sort().join('|'),
  readiness: CASE_ENGINE.evaluateReadiness(lead),
})), null, 2)}\n`)

console.log(JSON.stringify(afterSummary, null, 2))
