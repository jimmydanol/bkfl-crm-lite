# 50-Debtor Agentic Evaluation Runbook

This branch evaluates the public BK FastLane CRM Lite and McCune Legal intake mockups with synthetic data only.

## Scope

- Generate 50 unique synthetic debtor and CRM-review scenarios.
- Evaluate each scenario through Dashboard stages 1 through 4.
- Evaluate login, seven data-entry sections, the final document gate, and confirmation.
- Complete between 76% and 100% of visible intake controls.
- Resolve the final intake checklist with a varying mix of built-in synthetic uploads and missing-document reasons.
- Open each fake debtor's CRM Lead record and inspect the Documents tab.
- Rule on every CRM document and verify the final `Ready for Petition Prep` stage.

The evidence has two explicit modes:

- `live-browser`: calibration of the public interactions and state machine with a synthetic Lead.
- `source-backed-model`: deterministic 50-scenario replay against hashes and control inventories fetched from the live pages.

The source-backed results are not described as 50 live submissions because the public Intake cannot submit a package to CRM.

## Safety and honesty boundaries

- All names, emails, phones, addresses, SSNs, financial values, and documents are synthetic.
- Test emails use the reserved `.example.test` domain.
- CRM email actions are the mockup's local-only simulations; the loop does not send external messages.
- The Intake and CRM sites are not integrated. The CRM `Simulate Submission (dev)` button is used and recorded as a simulated handoff.
- Intake upload buttons create only mock file-name metadata such as `photo_id_license.jpg`; they do not transmit real file bytes.
- Direct CRM file selection is recorded as blocked when Chrome extension file-URL access is disabled. The loop uses firm `Excuse` rulings for the three fixed missing CRM items so every scenario can exercise Stage 4.
- The internal `jimmy-changes.html` collaboration page is intentionally excluded from debtor data entry even though it appears as a ninth client-nav item. Its exposure is a product finding.

## Source-backed 50-scenario run

```powershell
node scripts/run-50-debtor-source-backed-model.mjs
```

This fetches the public page sources, inventories and hashes them, runs exactly 50 varied scenarios, and writes the evidence artifacts.

## Optional live-browser batches

`scripts/run-50-debtor-crm-agentic-evaluation.mjs` is imported into Codex's controlled browser session and run in resumable batches:

```js
const evaluation = await import('file:///E:/Projects/bkfl-crm-lite-50x-evaluation/scripts/run-50-debtor-crm-agentic-evaluation.mjs')
await evaluation.runEvaluationBatch({ browser, crmTab, repoRoot: 'E:/Projects/bkfl-crm-lite-50x-evaluation', start: 1, count: 5 })
```

The runners write:

- `results/50-debtor-crm-agentic-evaluation/scenario-plan.json`
- `results/50-debtor-crm-agentic-evaluation/results.json`
- `results/50-debtor-crm-agentic-evaluation/run-summary.json`
- `results/50-debtor-crm-agentic-evaluation/live-source-inventory.json`
- `results/50-debtor-crm-agentic-evaluation/live-browser-calibration.json`

Rerunning a batch skips scenarios already marked `completed`.

## Local contract test

```powershell
node scripts/test-50-debtor-crm-agentic-evaluation.mjs
```
