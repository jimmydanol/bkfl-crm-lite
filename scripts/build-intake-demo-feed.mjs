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

const buildPackage = (report, sourceData, generatedAt) => {
  const matter = structuredClone(sourceData.matter)
  const packageId = `bkfl-demo-${report.scenarioId}`
  const canonicalBundle = structuredClone(sourceData.intakeCompletionBundle)
  if (canonicalBundle?.bundleVersion !== 2) {
    throw new Error(`${report.scenarioId} did not provide IntakeCompletionBundle v2.`)
  }
  const missingItems = canonicalBundle.reminderItems.map((item) => ({ ...item }))
  const missingFields = missingItems.filter((item) => item.kind === 'field')
  const missingDocuments = missingItems.filter((item) => item.kind === 'document')
  const fieldsRequired = canonicalBundle.metrics.fieldCompletion.applicable
  const fieldsFilled = canonicalBundle.metrics.fieldCompletion.entered
  const documentsRequired = canonicalBundle.metrics.documentCollection.applicable
  const documentsReady = canonicalBundle.metrics.documentCollection.collected
  const completionPercent = canonicalBundle.metrics.intakeChecklistCompletion

  if (!matter?.id || matter.status !== 'review') {
    throw new Error(`${report.scenarioId} is not an incomplete review Matter.`)
  }
  if (!missingFields.length || !missingDocuments.length) {
    throw new Error(`${report.scenarioId} must omit both fields and documents.`)
  }
  if (!String(sourceData.reminder?.to || '').endsWith('@example.test')) {
    throw new Error(`${report.scenarioId} reminder recipient is not fake-safe.`)
  }
  if (
    !missingItems.every((item) =>
      sourceData.reminder.body.includes(item.clientInstruction),
    )
  ) {
    throw new Error(`${report.scenarioId} reminder omitted a missing item.`)
  }

  const submittedAt = matter.personalInfoSubmittedAt || generatedAt
  const firstItemId = missingItems[0]?.id || ''
  const intakeResumeUrl = `https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=${encodeURIComponent(packageId)}${firstItemId ? `&itemId=${encodeURIComponent(firstItemId)}` : ''}`
  const emailBodySnapshot = sourceData.reminder.body.replace(
    sourceData.reminder.intakeUrl,
    intakeResumeUrl,
  )

  return asciiSafe({
    completion: {
      bundle: canonicalBundle,
      blockingReadiness: canonicalBundle.metrics.blockingReadiness,
      documentCompletion: {
        applicableRequired: documentsRequired,
        receivedRequired: documentsReady,
      },
      emailDraft: {
        bodySnapshot: emailBodySnapshot,
        deliveryMode: 'simulation',
        intakeResumeUrl,
        recipient: sourceData.reminder.to,
        status: 'pending_approval',
        subject: sourceData.reminder.subject,
      },
      events: [],
      fieldCompletion: {
        applicableRequired: fieldsRequired,
        enteredRequired: fieldsFilled,
        percent: fieldsRequired ? Math.round((fieldsFilled / fieldsRequired) * 100) : 0,
      },
      intakeChecklistCompletion: completionPercent,
      intakeResumeUrl,
      items: canonicalBundle.items,
      missingItems,
      percent: completionPercent,
      revision: canonicalBundle.matterRevision,
      states: canonicalBundle.states,
      status: canonicalBundle.states.intakeCompletion,
      urgentAttorneyTask: canonicalBundle.urgentAttorneyTask,
    },
    demo: true,
    generatedAt,
    matter,
    packageId,
    readiness: {
      documentsReady,
      documentsRequired,
      fieldsFilled,
      fieldsRequired,
      reviewFlagCount: (sourceData.reviewFlags || []).length,
      status: 'needs-client-action',
    },
    reviewFlags: sourceData.reviewFlags || [],
    schemaVersion: 2,
    source: {
      branch: 'Jimmy',
      scenarioId: report.scenarioId,
      scenarioTitle: sourceData.scenario?.title || '',
      system: 'BK FastLane Intake',
      traits: sourceData.scenario?.traits || [],
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
  source: 'BK FastLane Intake incomplete debtor entry agent',
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
