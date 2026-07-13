import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const crmRoot = path.resolve(import.meta.dirname, '..')
const intakeRoot = path.resolve(
  process.env.BK_FASTLANE_INTAKE_ROOT ||
    path.join(crmRoot, '..', 'BK-FastLane', 'apps', 'intake'),
)
const debtorAgentRoot = path.join(intakeRoot, 'tmp', 'debtor-entry-agent')
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const latestAgentIndex = async () => {
  const entries = await readdir(debtorAgentRoot, { withFileTypes: true })
  const candidates = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const indexPath = path.join(debtorAgentRoot, entry.name, 'index.json')
    try {
      const metadata = await stat(indexPath)
      candidates.push({ indexPath, modifiedAt: metadata.mtimeMs })
    } catch {
      // Ignore incomplete or unrelated generated directories.
    }
  }

  candidates.sort((left, right) => right.modifiedAt - left.modifiedAt)
  if (!candidates.length) {
    throw new Error(`No debtor-agent index found under ${debtorAgentRoot}`)
  }

  return candidates[0].indexPath
}

console.log('Running the BK FastLane debtor-entry agent for ten realistic incomplete clients...')
execFileSync(npmCommand, ['run', 'agent:debtor-entry'], {
  cwd: intakeRoot,
  shell: process.platform === 'win32',
  stdio: 'inherit',
})

const indexPath = await latestAgentIndex()

console.log(`Building the CRM Intake feed from ${indexPath}...`)
execFileSync(
  process.execPath,
  [path.join(crmRoot, 'scripts', 'build-intake-demo-feed.mjs'), indexPath],
  { cwd: crmRoot, stdio: 'inherit' },
)

console.log('Verifying the Intake-to-CRM bridge and attorney-review contract...')
execFileSync(
  process.execPath,
  [path.join(crmRoot, 'scripts', 'test-intake-crm-bridge.mjs')],
  { cwd: crmRoot, stdio: 'inherit' },
)

const feed = JSON.parse(
  await readFile(path.join(crmRoot, 'data', 'intake-submissions.json'), 'utf8'),
)

assert.equal(feed.packages.length, 10)
assert.equal(new Set(feed.packages.map((item) => item.packageId)).size, 10)
assert.ok(feed.packages.every((item) => item.matter.status === 'review'))
assert.ok(
  feed.packages.every(
    (item) =>
      item.completion.percent >= 85 &&
      item.completion.percent <= 95 &&
      item.completion.missingItems.some((missing) => missing.kind === 'field') &&
      item.completion.missingItems.some((missing) => missing.kind === 'document') &&
      item.completion.emailDraft.deliveryMode === 'simulation' &&
      item.completion.emailDraft.bodySnapshot.includes(item.completion.intakeResumeUrl),
  ),
)

console.log(
  JSON.stringify(
    {
      clients: feed.packages.map((item) =>
        item.matter.debtors
          .map((debtor) =>
            [debtor.firstName, debtor.middleName, debtor.lastName]
              .filter(Boolean)
              .join(' '),
          )
          .join(' & '),
      ),
      completionRange: '85-95%',
      documentReviewState: 'pending_approval',
      indexPath,
      packageCount: feed.packages.length,
      status: 'completion-management-parity-passed',
    },
    null,
    2,
  ),
)
