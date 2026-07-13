import assert from 'node:assert/strict'

await import('../prototype-case-contract.js')

const CASE_ENGINE = globalThis.BKFLPrototypeCase
const scenarios = CASE_ENGINE.generateScenarios(50)
const packages = scenarios.map((scenario) => CASE_ENGINE.buildIntakePackage(scenario))

assert.equal(scenarios.length, 50, 'exactly 50 scenarios must run')
assert.equal(new Set(scenarios.map((item) => item.scenarioId)).size, 50, 'scenario IDs must be unique')
assert.equal(new Set(packages.map((item) => item.submissionId)).size, 50, 'submission IDs must be unique')
assert.ok(scenarios.every((item) => item.syntheticOnly && item.email.endsWith('@example.test')), 'identities must be safe and synthetic')
assert.ok(packages.every((pkg) => pkg.schemaVersion === CASE_ENGINE.SCHEMA_VERSION && pkg.syntheticOnly), 'every package must use the versioned contract')
assert.ok(packages.every((pkg) => pkg.documentRequirements.every((doc) => doc.sourceRefs.length && (!doc.fileMetadata || (doc.fileMetadata.syntheticOnly && doc.fileMetadata.bytesStored === false)))), 'requirements must retain source provenance and never store fixture bytes')
assert.ok(packages.every((pkg) => pkg.reviewFlags.every((flag) => flag.source && flag.source.syntheticOnly) && pkg.triage.sourceRefs.length), 'derived flags and triage summaries must retain source provenance')

const signatureCount = new Set(packages.map((pkg) => pkg.documentRequirements.map((item) => item.requirementId).sort().join('|'))).size
const missingSignatureCount = new Set(packages.map((pkg) => pkg.documentRequirements.filter((item) => !['approved', 'excused'].includes(item.status)).map((item) => `${item.requirementId}:${item.status}`).sort().join('|'))).size
assert.ok(signatureCount >= 8, `expected at least 8 case-specific requirement signatures, got ${signatureCount}`)
assert.ok(missingSignatureCount >= 20, `expected at least 20 case-specific missing/review signatures, got ${missingSignatureCount}`)

for (let index = 0; index < scenarios.length; index += 1) {
  const scenario = scenarios[index]
  const requirementIds = new Set(packages[index].documentRequirements.map((item) => item.requirementId))
  const expected = [
    ['employed', 'pay_stubs'], ['otherIncome', 'other_income_proof'], ['homeowner', 'zillow_valuation'],
    ['homeowner', 'mortgage_statements'], ['vehicle', 'kbb_valuation'], ['vehicle', 'vehicle_loan_statements'],
    ['bankAccount', 'bank_statements'], ['taxDebt', 'tax_notices'], ['studentLoans', 'student_loan_statements'],
    ['businessDebt', 'business_debt_statements'], ['priorBankruptcy', 'prior_bankruptcy_records'],
    ['jointHousehold', 'sp_id_license'], ['jointHousehold', 'sp_income_proof'],
  ]
  for (const [profileKey, requirementId] of expected) {
    assert.equal(requirementIds.has(requirementId), scenario.profile[profileKey], `${requirementId} must follow ${profileKey} for ${scenario.scenarioId}`)
  }
}

const firstPackage = packages[0]
let leads = CASE_ENGINE.upsertLeadBySubmission([], firstPackage)
assert.equal(leads.length, 1)
const preserveId = leads[0].docChecklist.find((item) => item.status === 'ai_accepted').requirementId
leads[0] = CASE_ENGINE.applyDocumentDecision(leads[0], preserveId, 'approve', { reason: 'Reviewed fixture.', reviewer: 'Test Staff', role: 'Staff' })
leads[0] = { ...leads[0], caseReview: { ...leads[0].caseReview, staffReviewComplete: true } }
leads = CASE_ENGINE.upsertLeadBySubmission(leads, firstPackage)
assert.equal(leads.length, 1, 'repeat import must update instead of duplicate')
assert.equal(leads[0].docChecklist.find((item) => item.requirementId === preserveId).status, 'approved', 'repeat import must preserve a disposition')
assert.equal(leads[0].caseReview.staffReviewComplete, true, 'repeat import must preserve recorded review state')
let rejectedLead = CASE_ENGINE.applyDocumentDecision(leads[0], preserveId, 'reject', { reason: 'Replace the synthetic fixture.', reviewer: 'Test Staff', role: 'Staff' })
rejectedLead = CASE_ENGINE.upsertLeadBySubmission([rejectedLead], firstPackage)[0]
assert.equal(rejectedLead.docChecklist.find((item) => item.requirementId === preserveId).reason, 'rejected', 'repeat import must preserve a recorded rejection')

const missingPackage = packages.find((pkg) => pkg.missingAnswers.length)
const missingLead = CASE_ENGINE.upsertLeadBySubmission([], missingPackage)[0]
assert.equal(CASE_ENGINE.evaluateReadiness(CASE_ENGINE.resolveForAcceptance({ ...missingLead, intakePackage: { ...missingPackage, missingAnswers: missingPackage.missingAnswers } })).ready, true, 'acceptance resolver must explicitly resolve answers')
const documentsOnlyResolved = CASE_ENGINE.resolveForAcceptance({ ...missingLead, intakePackage: { ...missingPackage, missingAnswers: [] } })
const restoredMissing = { ...documentsOnlyResolved, intakePackage: missingPackage, caseReview: { ...documentsOnlyResolved.caseReview, resolvedMissingAnswerIds: [] } }
assert.equal(CASE_ENGINE.evaluateReadiness(restoredMissing).ready, false, 'unresolved required Intake answer must block readiness')

const nonWaivableLead = CASE_ENGINE.upsertLeadBySubmission([], firstPackage)[0]
const nonWaivable = nonWaivableLead.docChecklist.find((item) => !item.waivable)
assert.throws(() => CASE_ENGINE.applyDocumentDecision(nonWaivableLead, nonWaivable.requirementId, 'excuse', { reason: 'Not allowed.' }), /non-waivable/)

const highRiskPackage = packages.find((pkg) => pkg.documentRequirements.some((item) => item.waivable && item.requiresAttorneyReview))
let exceptionLead = CASE_ENGINE.upsertLeadBySubmission([], highRiskPackage)[0]
const exceptionDoc = exceptionLead.docChecklist.find((item) => item.waivable && item.requiresAttorneyReview)
exceptionLead = CASE_ENGINE.applyDocumentDecision(exceptionLead, exceptionDoc.requirementId, 'excuse', { reason: 'Case-specific fixture rationale.', role: 'Staff' })
assert.equal(exceptionLead.docChecklist.find((item) => item.requirementId === exceptionDoc.requirementId).status, 'exception_pending_attorney')
assert.equal(CASE_ENGINE.evaluateReadiness(exceptionLead).ready, false, 'pending attorney exception must block readiness')

const bulkLead = CASE_ENGINE.upsertLeadBySubmission([], packages.find((pkg) => pkg.documentRequirements.some((item) => item.status === 'ai_flagged')))[0]
const bulkEligible = CASE_ENGINE.bulkApprovableDocuments(bulkLead.docChecklist)
assert.ok(bulkEligible.every((item) => item.status === 'ai_accepted' && item.riskLevel === 'low' && !item.requiresAttorneyReview))
assert.ok(bulkLead.docChecklist.filter((item) => item.status === 'ai_flagged').every((item) => !bulkEligible.includes(item)), 'AI flags cannot be bulk-approved')

let resolved = CASE_ENGINE.resolveForAcceptance(CASE_ENGINE.upsertLeadBySubmission([], firstPackage)[0])
assert.equal(CASE_ENGINE.evaluateReadiness(resolved).ready, true)
const rejectTarget = resolved.docChecklist[0]
resolved = CASE_ENGINE.applyDocumentDecision(resolved, rejectTarget.requirementId, 'reject', { reason: 'Please upload a readable synthetic replacement.', role: 'Staff' })
assert.equal(CASE_ENGINE.evaluateReadiness(resolved).ready, false, 'rejection must invalidate readiness')
assert.equal(resolved.leadStage, 'Intake Submitted', 'rejection must return the case to Intake Submitted')

const allResolved = packages.map((pkg) => CASE_ENGINE.resolveForAcceptance(CASE_ENGINE.upsertLeadBySubmission([], pkg)[0]))
assert.ok(allResolved.every((lead) => CASE_ENGINE.evaluateReadiness(lead).ready), 'all 50 fixtures must be resolvable through explicit gates')
assert.ok(allResolved.every((lead) => lead.leadStage === 'Ready for Petition Prep'))

console.log(JSON.stringify({ scenarios: scenarios.length, signatureCount, missingSignatureCount, allResolvedReady: true }, null, 2))
