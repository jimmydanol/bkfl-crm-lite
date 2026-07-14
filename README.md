# BK FastLane — CRM Lite (Jimmy fake-pilot branch)

The scaled-down, debtor-intake-only version of the BK FastLane CRM. This is the law firm's entry point into the platform: a debtor submits an intake packet, and the firm receives, reviews, and works it from a clean dashboard. Reference prototype for the v1 development build.

## Running it

Open `index.html` in a modern browser, or run `node scripts/serve-static.mjs 4179` and visit `http://127.0.0.1:4179`. React loads from a CDN; generated fake data and browser-local state require no backend.

## What's in v1

- **Intake Completion** — matter-level queue for applicable missing items, first-reminder review, reasoned edits, idempotent approval, scheduling, and atomic cancellation.
- **Document Review** — independent receive, approve, replace, excuse, follow-up, and re-review states.
- **Attorney Review** — an independent status surface that remains open while the administrative workflows continue.
- **Fake debtor portal** — exact-item deep links, mobile focus, PDF/image selection, replacement, unavailable/not-applicable/help responses, partial resubmission, and reload/two-tab persistence.
- **Leads, contacts, dashboard, and settings** — the existing CRM Lite prototype surfaces.

## Core rules

1. Intake owns canonical completion rules and item IDs; CRM consumes the v2 bundle without re-deriving applicability.
2. Every AI-drafted email requires attorney approval before it is sent. No exceptions.
3. Every document requires manual firm approval — AI acceptance is a recommendation, never the final word.
4. One email = one contact = one intake per case. Joint filers share a single intake sent to the primary contact.
5. Intake Completion, Document Review, and Attorney Review are separate state dimensions.

## Spec

`docs/bkfl-intake-flow-spec-v1.docx` — the development specification covering the object model, both intake entry paths, dedupe logic, and field definitions.

`docs/document-review-workflow.md` — the developer-facing incomplete-intake contract, missing-item model, scheduled-email approval state machine, ownership boundaries, and production follow-ons.

## Change log

See [`CHANGELOG.md`](CHANGELOG.md) for dated CRM behavior and deployment changes.

## Jimmy branch Intake handoff demo

- CRM Intake Inbox: `https://jimmydanol.github.io/bkfl-crm-lite/?view=intake-inbox`
- Fake debtor Intake: `https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html`
- Scope: fake data only. The browser-local handoff is for Matt/Jimmy workflow review, not real client data.

The deployed demo feed is generated from 50 deterministic canonical Intake `Matter` records with diverse Chapter 7/13 facts, genuine blanks, partial sections, untouched document requests, reviewer-only inconsistencies, and 80-95% target completion. The ten-client mode remains the bounded regression cohort. To rebuild the deployed cohort after running the Intake debtor-entry agent with `BKFL_FAKE_DEBTOR_COUNT=50`:

```powershell
node scripts/build-intake-demo-feed.mjs <path-to-debtor-agent-index.json>
node scripts/test-intake-crm-bridge.mjs
```

To run the full proof in one command—two deterministic generations, feed build, Intake build/lint, bridge/state-machine contract tests, and desktop/mobile Playwright acceptance:

```powershell
node scripts/run-10-client-completion-review-parity.mjs
```
