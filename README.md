# BK FastLane — CRM Lite (v1 Dev Build)

The scaled-down, debtor-intake-only version of the BK FastLane CRM. This is the law firm's entry point into the platform: a debtor submits an intake packet, and the firm receives, reviews, and works it from a clean dashboard. Reference prototype for the v1 development build.

## Running it

Open `index.html` in any modern browser. No build step, no server — it's a single self-contained file (React via CDN). Demo data seeds automatically; all state persists in browser localStorage under `bkfl_lite_*` keys.

## What's in v1

- **Dashboard** — intake pipeline cards (New Lead → Intake Sent → Intake Submitted), outstanding tasks (the attorney approval queue), quick links
- **Leads** — list + detail with Dashboard, Communications (email tracking log), Notes, Documents, Tasks, and AI tabs
- **Contacts** — one contact per debtor; email is the unique identity key; contacts and leads always exist in pairs
- **Documents** — 32-type checklist per lead: AI accepted/flagged review lanes, firm approval as home base, debtor "not applicable" reasons, and the approve-and-send follow-up email flow
- **Settings** — read-only v1 rule documentation: organization, users, lead stages, tasks, communications templates, document catalog

## Core rules

1. Lead stages are system-driven — set by events (link sent, intake submitted), never edited by hand.
2. Every AI-drafted email requires attorney approval before it is sent. No exceptions.
3. Every document requires manual firm approval — AI acceptance is a recommendation, never the final word.
4. One email = one contact = one intake per case. Joint filers share a single intake sent to the primary contact.

## Synthetic 50-debtor branch

The `codex/50-realistic-debtor-imports` branch layers 50 deterministic, synthetic Intake submissions over Matt's existing seed records without changing his `main` branch. Every synthetic record uses reserved `example.test` email addresses, reserved 555-01xx phone numbers, and PDFs visibly marked as training fixtures.

- Generate the Intake packages and document files: `node scripts/generate-50-synthetic-debtors.mjs`
- Verify identities, package variation, document contracts, and PDF imports: `node scripts/test-50-synthetic-debtors.mjs`
- Canonical fixture inventory: `fixtures/synthetic-intake-2026-07-13/manifest.json`
- Browser import payload: `synthetic-intake-fixtures.js`

The CRM uses a branch-specific localStorage key, `bkfl_lite_leads_v22_synthetic_50`, so this dataset cannot overwrite Matt's normal `bkfl_lite_leads_v21` browser state.

## Spec

`docs/bkfl-intake-flow-spec-v1.docx` — the development specification covering the object model, both intake entry paths, dedupe logic, and field definitions.
