# BK FastLane — CRM Lite

Jimmy's fake-data-only CRM demonstration, based on Matt's current branch. The product has one pre-petition job: move a debtor from first contact to a complete file ready for petition preparation.

## Lifecycle

- **Lead** — no Intake answers received.
- **Contact** — some Intake data received; answers or documents are still in progress.
- **Matter** — Intake data and document requests are complete; ready for petition prep.

The CRM changes the record type automatically. A Matter cannot be created manually.

## Four primary sections

- **Dashboard** — counts and prioritized next work.
- **Leads** — people who have not returned Intake data.
- **Contacts** — debtor files with Intake or document work remaining.
- **Matters** — petition-prep-ready files.

Settings is retained as a utility rather than a primary workflow section. Each debtor file uses four tabs: Overview, Intake Data, Documents, and Activity.

## Run and verify

Open `index.html` in a modern browser. It is a single static file using React via CDN. Demo state persists in browser `localStorage` under `bkfl_lite_*` keys.

Run the lifecycle source checks:

```powershell
node tests/verify-contact-lifecycle.mjs
```

See [the design and research note](docs/jimmy-contact-to-petition-ready.md) for the product rules, competitor lessons, and acceptance criteria.

## Safety boundary

All included debtors, answers, and documents are synthetic. This prototype is not approved for real client data or production legal work.
