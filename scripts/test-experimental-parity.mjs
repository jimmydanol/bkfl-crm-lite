import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');

for (const marker of [
  'Jimmy Experimental | Fake Data Demo',
  'key:"automation-lab"',
  'function AutomationLabPage',
  'Follow-up queue',
  'Source assistants',
  'Creditor review',
  'Export readiness',
  'bk-fastlane-experimental-review.csv',
  'Queue for attorney approval',
]) {
  assert.ok(html.includes(marker), `Missing CRM parity marker: ${marker}`);
}

assert.ok(html.includes('./crm-intake-components.jsx-source'));
assert.ok(!html.includes('./crm-intake-components.jsx"'));

const parityDoc = await readFile(path.join(root, 'docs', 'EXPERIMENTAL-PARITY.md'), 'utf8');
assert.ok(parityDoc.includes('## Integration gates'));
assert.ok(parityDoc.includes('No message is transmitted'));

console.log('Experimental CRM parity checks passed.');
