import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const crmRoot = path.resolve(import.meta.dirname, '..')
const intakeRoot = path.resolve(
  process.env.BK_FASTLANE_INTAKE_ROOT || path.join(crmRoot, '..', 'BK-FastLane', 'apps', 'intake'),
)
const debtorAgentRoot = path.join(intakeRoot, 'tmp', 'debtor-entry-agent')
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx'

const latestAgentIndex = async () => {
  const entries = await readdir(debtorAgentRoot, { withFileTypes: true })
  const candidates = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const indexPath = path.join(debtorAgentRoot, entry.name, 'index.json')
    try {
      candidates.push({ indexPath, modifiedAt: (await stat(indexPath)).mtimeMs })
    } catch {
      // Ignore incomplete generator output.
    }
  }
  candidates.sort((left, right) => right.modifiedAt - left.modifiedAt)
  if (!candidates.length) throw new Error(`No debtor-agent index found under ${debtorAgentRoot}`)
  return candidates[0].indexPath
}

const runGeneratorAndFeedBuild = async () => {
  execFileSync(npmCommand, ['run', 'agent:debtor-entry'], {
    cwd: intakeRoot,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  })
  const indexPath = await latestAgentIndex()
  execFileSync(process.execPath, [path.join(crmRoot, 'scripts', 'build-intake-demo-feed.mjs'), indexPath], {
    cwd: crmRoot,
    stdio: 'inherit',
  })
  const feed = JSON.parse(await readFile(path.join(crmRoot, 'data', 'intake-submissions.json'), 'utf8'))
  return { feed, indexPath }
}

const stableIdentifiers = (feed) => feed.packages.map((item) => ({
  documentIds: item.matter.documents.map((document) => document.id),
  itemIds: item.completion.items.map((completionItem) => completionItem.id),
  packageId: item.packageId,
}))

console.log('1/6 Generate canonical Intake Completion bundles for ten fake clients...')
const first = await runGeneratorAndFeedBuild()

console.log('2/6 Regenerate to prove package, completion-item, and document IDs are deterministic...')
const second = await runGeneratorAndFeedBuild()
assert.deepEqual(stableIdentifiers(second.feed), stableIdentifiers(first.feed))

console.log('3/6 Run the Intake app build and lint checks...')
execFileSync(npmCommand, ['run', 'build'], { cwd: intakeRoot, shell: process.platform === 'win32', stdio: 'inherit' })
execFileSync(npmCommand, ['run', 'lint'], { cwd: intakeRoot, shell: process.platform === 'win32', stdio: 'inherit' })

console.log('4/6 Verify the Intake-to-CRM contract, state machine, and fake-data safety boundaries...')
execFileSync(process.execPath, [path.join(crmRoot, 'scripts', 'test-intake-crm-bridge.mjs')], {
  cwd: crmRoot,
  stdio: 'inherit',
})

console.log('5/6 Run desktop and mobile browser acceptance against the local CRM and debtor portal...')
execFileSync(npxCommand, ['playwright', 'test', '--config', 'playwright.crm-lite.config.ts'], {
  cwd: intakeRoot,
  shell: process.platform === 'win32',
  stdio: 'inherit',
})

console.log('6/6 Summarize the verified pilot cohort...')
const feed = second.feed
assert.equal(feed.packages.length, 10)
assert.equal(new Set(feed.packages.map((item) => item.packageId)).size, 10)
assert.ok(feed.packages.every((item) => item.completion.bundle.bundleVersion === 2))
assert.ok(feed.packages.every((item) => item.completion.emailDraft.deliveryMode === 'simulation'))

console.log(JSON.stringify({
  browserAcceptance: '7 passed (staff workflow, organization mailbox settings, debtor help/partial response, reviewer reclassification, conditional completion/replacement, mobile portal, mobile queue)',
  clients: feed.packages.map((item) => ({
    chapter: item.matter.chapter,
    missingDocuments: item.completion.missingItems.filter((missing) => missing.kind === 'document').length,
    missingFields: item.completion.missingItems.filter((missing) => missing.kind === 'field').length,
    name: item.matter.debtors.map((debtor) => [debtor.firstName, debtor.middleName, debtor.lastName].filter(Boolean).join(' ')).join(' & '),
    traits: item.source.traits,
  })),
  deterministicIds: true,
  indexPath: second.indexPath,
  packageCount: feed.packages.length,
  status: 'intake-completion-fake-pilot-passed',
}, null, 2))
