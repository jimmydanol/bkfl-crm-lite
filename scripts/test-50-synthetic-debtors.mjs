import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile, stat } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = await readFile(resolve(root, 'synthetic-intake-fixtures.js'), 'utf8')
const indexHtml = await readFile(resolve(root, 'index.html'), 'utf8')
const context = { window: {} }
vm.runInNewContext(source, context, { filename: 'synthetic-intake-fixtures.js' })

const payload = context.window.BKFLSyntheticIntake
assert(payload, 'browser fixture payload should be defined')
assert(indexHtml.includes('<script src="./synthetic-intake-fixtures.js"></script>'), 'CRM should load the synthetic Intake payload before the app')
assert(indexHtml.includes('INITIAL_LEADS.push(...((window.BKFLSyntheticIntake||{}).leads||[]))'), 'CRM should import the 50 synthetic leads')
assert(indexHtml.includes('bkfl_lite_leads_v22_synthetic_50'), 'synthetic branch should use isolated localStorage')
assert(indexHtml.includes('<iframe src={d.fileUrl}'), 'document review should render imported PDF fixtures')
assert.equal(payload.syntheticOnly, true)
assert.equal(payload.leads.length, 50, 'exactly 50 debtors should be imported')
assert.equal(payload.leads.filter(lead => lead.intakePackage).length, 50, 'each debtor should have one intake package')

const manifest = JSON.parse(await readFile(resolve(root, 'fixtures', 'synthetic-intake-2026-07-13', 'manifest.json'), 'utf8'))
assert.equal(manifest.debtors.length, 50)
assert.equal(manifest.summary.debtorCount, 50)
const manifestByFixture = new Map(manifest.debtors.map(debtor => [debtor.fixtureId, debtor]))

const unique = values => new Set(values).size === values.length
assert(unique(payload.leads.map(lead => lead.id)), 'lead ids must be unique')
assert(unique(payload.leads.map(lead => lead.fixtureId)), 'fixture ids must be unique')
assert(unique(payload.leads.map(lead => lead.email)), 'emails must be unique')
assert(unique(payload.leads.map(lead => lead.phone)), 'phone numbers must be unique')
assert(unique(payload.leads.map(lead => `${lead.firstName} ${lead.lastName}`)), 'debtor names must be unique')
assert(payload.leads.every(lead => lead.email.endsWith('@example.test')), 'all debtor emails must use the reserved example.test domain')
assert(payload.leads.every(lead => /\) 555-01\d{2}$/.test(lead.phone)), 'all debtor numbers must use the reserved 555-0100 through 555-0199 range')
assert(payload.leads.every(lead => lead.leadStage === 'Intake Submitted'))
assert(payload.leads.every(lead => lead.synthetic && lead.syntheticSource === 'matt-intake-main'))
assert(payload.leads.every(lead => lead.intakePackage?.schemaVersion === 'bkfl.intake-package.v1'))
assert(payload.leads.every(lead => lead.intakeCompletion.missingFields.length >= 2), 'every debtor should have entered-data gaps')
assert(payload.leads.every(lead => lead.intakeCompletion.completionPercent < 95), 'no debtor should be artificially perfect')
assert(payload.leads.every(lead => lead.documents.length >= 4), 'every debtor should import at least four real fixture files')

const packageHashes = payload.leads.map(lead => createHash('sha256').update(JSON.stringify(lead.intakePackage)).digest('hex'))
assert(unique(packageHashes), 'all 50 intake packages must contain individual data')

const allChecklist = payload.leads.flatMap(lead => lead.docChecklist)
const expectedDocumentTypes = [
  'id_license', 'ssn_proof', 'bank_statements', 'unsecured_statements', 'tax_return_y1', 'tax_return_y2',
  'counseling_certificate', 'pay_stubs', 'other_income_proof', 'zillow_valuation', 'foreclosure_docs',
  'kbb_valuation', 'vehicle_title', 'repo_docs', 'investment_statements', 'mortgage_statements', 'hoa_statements',
  'other_secured_statements', 'vehicle_loan_statements', 'dso_docs', 'tax_notices', 'student_loan_statements',
  'business_debt_statements', 'court_paperwork', 'other_docs', 'sp_id_license', 'sp_ssn_proof',
  'sp_tax_return_y1', 'sp_tax_return_y2', 'sp_pay_stubs', 'sp_other_income_proof', 'sp_bank_statements',
]
const representedDocumentTypes = new Set(allChecklist.map(item => item.docId))
for (const docId of expectedDocumentTypes) assert(representedDocumentTypes.has(docId), `${docId} should be represented across the 50-case dataset`)
for (const requiredDoc of ['id_license', 'ssn_proof', 'bank_statements', 'unsecured_statements']) {
  assert(payload.leads.every(lead => lead.docChecklist.some(item => item.docId === requiredDoc && item.fileName)), `${requiredDoc} should have a submitted file for all 50 cases`)
}
for (const status of ['ai_accepted', 'ai_flagged', 'reason_given']) {
  assert(allChecklist.some(item => item.status === status), `dataset should include ${status} checklist items`)
}
assert(payload.leads.every(lead => lead.docChecklist.some(item => item.status === 'ai_flagged')), 'every debtor should have at least one imperfect uploaded file')
assert(payload.leads.every(lead => lead.docChecklist.some(item => item.status === 'reason_given')), 'every debtor should have at least one missing document with a reason')

const fileUrls = []
const pdfHashes = []
for (const lead of payload.leads) {
  const manifestEntry = manifestByFixture.get(lead.fixtureId)
  assert(manifestEntry, `${lead.fixtureId} should appear in the manifest`)
  const intakePath = resolve(root, 'fixtures', 'synthetic-intake-2026-07-13', manifestEntry.intakePackage.replace(/^\.\//, ''))
  const intakeOnDisk = JSON.parse(await readFile(intakePath, 'utf8'))
  assert.equal(JSON.stringify(intakeOnDisk), JSON.stringify(lead.intakePackage), `${lead.fixtureId} intake JSON should match the CRM import`)
  assert(lead.intakePackage.dataQuality.missingFields.length >= 2)
  for (const document of lead.documents) {
    fileUrls.push(document.fileUrl)
    const filePath = resolve(root, document.fileUrl.replace(/^\.\//, ''))
    const fileStat = await stat(filePath)
    assert(fileStat.size > 900, `${document.fileUrl} should be a substantive PDF fixture`)
    const bytes = await readFile(filePath)
    pdfHashes.push(createHash('sha256').update(bytes).digest('hex'))
    assert.equal(bytes.subarray(0, 8).toString('ascii'), '%PDF-1.4')
    assert(bytes.toString('ascii').includes('SYNTHETIC TRAINING DOCUMENT'))
    assert(bytes.toString('ascii').includes(`${lead.firstName} ${lead.lastName}`))
  }
}
assert(unique(fileUrls), 'each uploaded document URL should be unique')
assert(unique(pdfHashes), 'each imported PDF should contain its own case-specific content')
assert.equal(fileUrls.length, payload.summary.totalUploads)
assert(fileUrls.length >= 300, 'the 50 cases should include at least 300 individual PDF imports')
assert(payload.summary.flaggedUploads >= 50, 'at least one imported file per debtor should be AI-flagged')
assert(payload.summary.reasonGiven >= 50, 'at least one document reason per debtor should be present')
assert(payload.summary.chapter7 > 0 && payload.summary.chapter13 > 0, 'both Chapter 7 and Chapter 13 cases should be represented')
assert(payload.summary.jointCases > 0, 'joint cases should be represented')

console.log(JSON.stringify({
  debtors: payload.leads.length,
  uploadedPdfs: fileUrls.length,
  flaggedUploads: payload.summary.flaggedUploads,
  reasonGiven: payload.summary.reasonGiven,
  averageCompletion: payload.summary.averageCompletion,
  chapter7: payload.summary.chapter7,
  chapter13: payload.summary.chapter13,
  jointCases: payload.summary.jointCases,
}, null, 2))
