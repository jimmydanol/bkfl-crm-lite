import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const inputIndexPath = process.argv[2]
const repoRoot = path.resolve(import.meta.dirname, '..')
const outputDirectory = path.join(repoRoot, 'data')

if (!inputIndexPath) {
  console.error('Usage: node scripts/build-intake-demo-feed.mjs <debtor-agent-index.json>')
  process.exit(1)
}

const readJson = async (filePath) => JSON.parse(await readFile(filePath, 'utf8'))

const asciiText = (value) =>
  value
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2022/g, '-')
    .replace(/\u2192/g, '->')

const asciiSafe = (value) => {
  if (typeof value === 'string') return asciiText(value)
  if (Array.isArray(value)) return value.map(asciiSafe)
  if (!value || typeof value !== 'object') return value

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, asciiSafe(item)]),
  )
}

const markDemoDocumentsReceived = (documents = [], submittedAt) =>
  documents.map((document) => ({
    ...document,
    notes: 'Fake demo document received with completed intake.',
    receivedAt: submittedAt,
    status: 'received',
  }))

const buildPackage = (report, sourceData, generatedAt) => {
  const requiredCoverage = sourceData.requiredCoverage
  const matter = structuredClone(sourceData.matter)

  if (!matter?.id || matter.status !== 'ready-for-attorney') {
    throw new Error(`${report.scenarioId} is not a ready-for-attorney Matter.`)
  }

  if (
    !requiredCoverage ||
    requiredCoverage.filled !== requiredCoverage.required ||
    requiredCoverage.missing?.length
  ) {
    throw new Error(`${report.scenarioId} is missing required Intake fields.`)
  }

  const submittedAt = matter.personalInfoSubmittedAt || generatedAt
  matter.documents = markDemoDocumentsReceived(matter.documents, submittedAt)

  const reviewFlags = (sourceData.reviewFlags || []).filter(
    (flag) =>
      !(
        flag.sectionId === 'documents' &&
        /open|still needed|request/i.test(`${flag.title} ${flag.detail}`)
      ),
  )

  return asciiSafe({
    demo: true,
    generatedAt,
    matter,
    packageId: `bkfl-demo-${report.scenarioId}`,
    readiness: {
      documentsReady: matter.documents.length,
      documentsRequired: matter.documents.length,
      fieldsFilled: requiredCoverage.filled,
      fieldsRequired: requiredCoverage.required,
      reviewFlagCount: reviewFlags.length,
      status: 'ready-for-attorney',
    },
    reviewFlags,
    schemaVersion: 1,
    source: {
      branch: 'Jimmy',
      scenarioId: report.scenarioId,
      system: 'BK FastLane Intake',
    },
    submittedAt,
  })
}

const index = await readJson(path.resolve(inputIndexPath))
const reports = Array.isArray(index.reports) ? index.reports : []

if (index.status !== 'passed' || reports.length !== 10) {
  throw new Error('Expected one passed debtor-agent run with exactly ten reports.')
}

const packages = []

for (const report of reports) {
  const sourceData = await readJson(report.dataPath)
  packages.push(buildPackage(report, sourceData, index.generatedAt))
}

const feed = {
  demo: true,
  generatedAt: index.generatedAt,
  packages,
  schemaVersion: 1,
  source: 'BK FastLane Intake fake debtor agent',
}

await mkdir(outputDirectory, { recursive: true })
await writeFile(
  path.join(outputDirectory, 'intake-submissions.json'),
  `${JSON.stringify(feed, null, 2)}\n`,
)
await writeFile(
  path.join(outputDirectory, 'intake-submissions.js'),
  `window.BKFL_INTAKE_SUBMISSIONS = ${JSON.stringify(feed, null, 2)};\n`,
)

console.log(
  JSON.stringify(
    {
      outputDirectory,
      packages: packages.map((item) => ({
        client: item.matter.debtors
          .map((debtor) => [debtor.firstName, debtor.middleName, debtor.lastName].filter(Boolean).join(' '))
          .join(' & '),
        packageId: item.packageId,
        readiness: item.readiness,
      })),
      status: 'passed',
    },
    null,
    2,
  ),
)
