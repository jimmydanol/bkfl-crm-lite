import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const readiness = require('../stage4-readiness.js')
const bridge = require('../intake-stage4-bridge.js')

const fakeLead = (overrides = {}) => ({
  attorneyReview: { status: 'approved' },
  dataReview: {
    accuracyStatus: 'verified',
    completenessStatus: 'complete',
    discrepancies: [],
  },
  docChecklist: [
    {
      docId: 'id_license',
      files: [
        {
          mimeType: 'image/jpeg',
          name: 'fake-driver-license.jpg',
          reviewStatus: 'verified',
        },
      ],
      name: "Driver's license",
      status: 'approved',
    },
    {
      docId: 'tax_return_y1',
      files: [
        {
          mimeType: 'application/pdf',
          name: 'fake-tax-return.pdf',
          reviewStatus: 'verified',
        },
      ],
      name: 'Tax return - last year',
      status: 'approved',
    },
  ],
  firstName: 'Morgan',
  intakeCompletion: {
    missingItems: [],
    states: { attorneyReview: 'approved', dataAccuracy: 'verified' },
    status: 'complete',
  },
  lastName: 'Quinn',
  leadStage: 'Intake Submitted',
  readinessPolicy: { requireFileEvidence: true },
  ...overrides,
})

const deterministicOptions = {
  evaluatedAt: '2026-07-24T16:00:00.000Z',
  today: '2026-07-24',
}

const complete = readiness.evaluateLead(fakeLead(), deterministicOptions)
assert.equal(complete.ready, true)
assert.equal(complete.targetStage, 'Ready for Petition Prep')
assert.equal(complete.gates.intakeCompletion.status, 'complete')
assert.equal(complete.gates.documentReview.status, 'complete')
assert.equal(complete.gates.attorneyReview.status, 'complete')
assert.deepEqual(complete.gates.documentReview.evidence, {
  fileCount: 2,
  imageCount: 1,
  pdfCount: 1,
})

const staged = readiness.reconcileLead(fakeLead(), deterministicOptions)
assert.equal(staged.leadStage, 'Ready for Petition Prep')
assert.equal(staged.prepReadyDate, '2026-07-24')

const missingData = readiness.evaluateLead(
  fakeLead({
    dataReview: {
      accuracyStatus: 'verified',
      completenessStatus: 'needs_client_action',
      missingFields: [{ id: 'county', label: 'County' }],
    },
    intakeCompletion: {
      missingItems: [
        {
          id: 'county',
          kind: 'field',
          label: 'County',
          resolutionStatus: 'open',
        },
      ],
      states: { attorneyReview: 'approved', dataAccuracy: 'verified' },
      status: 'needs_client_action',
    },
  }),
  deterministicOptions,
)
assert.equal(missingData.ready, false)
assert.ok(missingData.blockers.some((item) => item.label.includes('County')))

const inaccurateData = readiness.evaluateLead(
  fakeLead({
    dataReview: {
      accuracyStatus: 'needs_review',
      completenessStatus: 'complete',
      discrepancies: [{ id: 'income-mismatch', label: 'Income differs from pay stubs', status: 'open' }],
    },
  }),
  deterministicOptions,
)
assert.equal(inaccurateData.ready, false)
assert.ok(inaccurateData.blockers.some((item) => item.label.includes('Income differs')))

const flaggedImage = fakeLead()
flaggedImage.docChecklist[0].files[0].qualityIssue = 'illegible'
const flaggedImageAssessment = readiness.evaluateLead(flaggedImage, deterministicOptions)
assert.equal(flaggedImageAssessment.ready, false)
assert.equal(flaggedImageAssessment.gates.documentReview.accuracy, false)

flaggedImage.docChecklist[0].overrideReason = 'Firm compared the original image to debtor identity data.'
const documentedOverride = readiness.evaluateLead(flaggedImage, deterministicOptions)
assert.equal(documentedOverride.ready, true)

const openAttorneyReview = readiness.evaluateLead(
  fakeLead({ attorneyReview: { status: 'not_started' } }),
  deterministicOptions,
)
assert.equal(openAttorneyReview.ready, false)
assert.ok(openAttorneyReview.blockers.some((item) => item.id === 'attorney-review-open'))

const reopened = fakeLead({ leadStage: 'Ready for Petition Prep', prepReadyDate: '2026-07-20' })
reopened.docChecklist[1].status = 'ai_flagged'
const regressed = readiness.reconcileLead(reopened, deterministicOptions)
assert.equal(regressed.leadStage, 'Intake Submitted')
assert.equal(regressed.prepReadyDate, undefined)

const falseReadyLegacyLead = readiness.reconcileLead(
  {
    docChecklist: [
      { docId: 'id_license', fileName: 'license.pdf', status: 'approved' },
      { docId: 'tax_return_y1', fileName: 'tax-return.pdf', status: 'approved' },
    ],
    leadStage: 'Ready for Petition Prep',
    prepReadyDate: '2026-07-13',
  },
  deterministicOptions,
)
assert.equal(falseReadyLegacyLead.leadStage, 'Intake Submitted')
assert.ok(falseReadyLegacyLead.readiness.blockers.some((item) => item.id === 'intake-contract-missing'))
assert.ok(falseReadyLegacyLead.readiness.blockers.some((item) => item.id === 'attorney-review-open'))

const intakePackage = {
  completion: {
    bundle: { items: [] },
    missingItems: [],
    revision: 3,
    states: { attorneyReview: 'not_started', dataAccuracy: 'needs_review' },
    status: 'complete',
  },
  matter: {
    chapter: '7',
    debtors: [
      {
        email: 'morgan.quinn@example.test',
        firstName: 'Morgan',
        lastName: 'Quinn',
        phone: '(303) 555-0199',
      },
    ],
    documents: [
      {
        evidenceFiles: [
          {
            mimeType: 'image/png',
            name: 'fake-id-card.png',
            reviewStatus: 'verified',
            sha256: 'fake-image-sha256',
          },
        ],
        id: 'id_license',
        name: "Driver's license",
        status: 'received',
      },
      {
        evidenceFiles: [
          {
            mimeType: 'application/pdf',
            name: 'fake-bank-statement.pdf',
            reviewStatus: 'verified',
            sha256: 'fake-pdf-sha256',
          },
        ],
        id: 'bank_statements',
        name: 'Bank statements - last 6 months',
        status: 'received',
      },
    ],
  },
  packageId: 'bkfl-fake-morgan-quinn',
  syntheticOnly: true,
}

const imported = bridge.importIntakePackage(intakePackage, null, {
  ...deterministicOptions,
  importedAt: deterministicOptions.evaluatedAt,
})
assert.equal(imported.leadStage, 'Intake Submitted')
assert.equal(imported.readiness.gates.documentReview.evidence.imageCount, 1)
assert.equal(imported.readiness.gates.documentReview.evidence.pdfCount, 1)
assert.ok(imported.readiness.blockers.some((item) => item.id === 'intake-accuracy-unverified'))
assert.ok(imported.readiness.blockers.some((item) => item.id === 'attorney-review-open'))

const firmReviewed = bridge.importIntakePackage(
  intakePackage,
  {
    ...imported,
    attorneyReview: { status: 'approved' },
    dataReview: { ...imported.dataReview, accuracyStatus: 'verified' },
    docChecklist: imported.docChecklist.map((document) => ({ ...document, status: 'approved' })),
  },
  {
    ...deterministicOptions,
    importedAt: deterministicOptions.evaluatedAt,
  },
)
assert.equal(firmReviewed.leadStage, 'Ready for Petition Prep')
assert.equal(firmReviewed.readiness.ready, true)

const correctedPackage = structuredClone(intakePackage)
correctedPackage.completion.revision = 4
correctedPackage.completion.missingItems = [
  { id: 'county', kind: 'field', label: 'County', resolutionStatus: 'open' },
]
correctedPackage.completion.status = 'needs_client_action'
const corrected = bridge.importIntakePackage(correctedPackage, firmReviewed, {
  ...deterministicOptions,
  importedAt: deterministicOptions.evaluatedAt,
})
assert.equal(corrected.leadStage, 'Intake Submitted')
assert.ok(corrected.readiness.blockers.some((item) => item.label.includes('County')))

console.log('Stage 4 readiness checks passed: data completeness + accuracy, PDF/image evidence, Document Review, Attorney Review, promotion, and regression.')
