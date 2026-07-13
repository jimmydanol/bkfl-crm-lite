import assert from 'node:assert/strict'
import {
  EVALUATION_ID,
  buildSourceBackedResult,
  generateScenarios,
  summarizeResults,
} from './run-50-debtor-crm-agentic-evaluation.mjs'

const scenarios = generateScenarios(50)
assert.equal(scenarios.length, 50)
assert.equal(new Set(scenarios.map((item) => item.scenarioId)).size, 50)
assert.equal(new Set(scenarios.map((item) => item.email)).size, 50)
assert.ok(scenarios.every((item) => item.syntheticOnly))
assert.ok(scenarios.every((item) => item.email.endsWith('@example.test')))
assert.ok(scenarios.every((item) => item.completionTarget >= 0.76 && item.completionTarget <= 1))
assert.ok(scenarios.some((item) => item.tier2Uploads === 1))
assert.ok(scenarios.some((item) => item.tier2Uploads === 3))

const summary = summarizeResults([])
assert.equal(summary.evaluationId, EVALUATION_ID)
assert.equal(summary.completedCount, 0)
assert.equal(summary.requestedScenarioCount, 50)
assert.equal(summary.externalMessagesSent, false)
assert.equal(summary.productionSystemsMutated, false)
assert.equal(summary.allCompletedFourStages, false)

const inventory = {
  intakePages: ['personal.html', 'income.html', 'assets.html', 'debts.html', 'expenses.html', 'financial-affairs.html', 'counseling.html']
    .map((pageName) => ({ pageName, sha256: `hash-${pageName}`, modeledControls: 10 })),
  crm: { sha256: 'crm-hash' },
}
const modeled = scenarios.map((scenario) => buildSourceBackedResult(scenario, inventory))
const modeledSummary = summarizeResults(modeled)
assert.equal(modeledSummary.completedCount, 50)
assert.equal(modeledSummary.sourceBackedScenarioCount, 50)
assert.equal(modeledSummary.liveBrowserScenarioCount, 0)
assert.equal(modeledSummary.totalDashboardStageObservations, 200)
assert.equal(modeledSummary.totalIntakePageVisits, 500)
assert.ok(modeledSummary.crmMissingSignatureVariants >= 20)
assert.ok(modeledSummary.documentRequirementSignatureVariants >= 8)
assert.equal(modeledSummary.allCrmReviewsReachedReady, true)
assert.equal(modeledSummary.allCrmReviewsPassedExplicitReadinessGates, true)

console.log('50-scenario generator, model, and summary contracts passed.')
