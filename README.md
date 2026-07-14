# BK FastLane — CRM Lite (Jimmy fake-pilot branch)

The scaled-down, debtor-intake-only version of the BK FastLane CRM. This is the law firm's entry point into the platform: a debtor submits an intake packet, and the firm receives, reviews, and works it from a clean dashboard. Reference prototype for the v1 development build.

## Running it

Open `index.html` in a modern browser, or run `node scripts/serve-static.mjs 4179` and visit `http://127.0.0.1:4179`. React loads from a CDN; generated fake data and browser-local state require no backend.

## Lean Jimmy workflow demo

Shareable CRM: `https://jimmydanol.github.io/bkfl-crm-lite/`

This branch demonstrates one focused path from signed Intake to petition-ready:

- **One Work Queue** — every signed-intake matter appears once with one next action; urgent attorney decisions come first.
- **Three-item navigation** — Work Queue, Matters, and Settings replace eight competing destinations.
- **One Matter workspace** — Overview, Intake, Documents, and Activity replace seven tabs and remove the separate AI destination.
- **Three independent readiness checks** — a matter is Ready for Petition Prep only when Intake Completion, Document Review, and Attorney Review are all complete.
- **Action-based document queues** — separates requests needing a firm decision, requests waiting on the client, and resolved requirements.
- **Recorded attorney decision** — lets the attorney record a decision or return the matter to staff without pretending the software made a legal conclusion.
- **Visible draft and delivery states** — distinguishes draft, approved snapshot, simulated schedule, and browser-only no-send behavior.
- **Evidence-based AI boundary** — uses the entered filing state, household, income, debts, and document readiness; it refuses to state above/below median until a current firm-configured DOJ threshold exists.

## Core workflow

- **Client follow-up** — matter-level queue for applicable missing items, first-reminder review, reasoned edits, approval, scheduling, and cancellation.
- **Document Review** — independent receive, approve, replace, excuse, follow-up, and re-review states.
- **Attorney decisions** — urgent facts, source-backed flags, recorded decisions, and reasoned returns to staff.
- **Fake debtor portal** — exact-item deep links, mobile focus, PDF/image selection, replacement, unavailable/not-applicable/help responses, partial resubmission, and reload/two-tab persistence.

## Core rules

1. Intake owns canonical completion rules and item IDs; CRM consumes the v2 bundle without re-deriving applicability.
2. Every AI-drafted email requires attorney approval before it is sent. This static demo does not send email.
3. Every document requires manual firm approval — AI acceptance is a recommendation, never the final word.
4. One email = one contact = one intake per case. Joint filers share a single intake sent to the primary contact.
5. Client answers, Document Review, and Attorney Review remain separate state dimensions; all three must pass before Ready for Petition Prep.
6. AI may summarize entered evidence, but it cannot invent a current legal threshold or substitute for attorney judgment.

## Spec

`docs/bkfl-intake-flow-spec-v1.docx` — the development specification covering the object model, both intake entry paths, dedupe logic, and field definitions.

`docs/document-review-workflow.md` — the developer-facing incomplete-intake contract, missing-item model, scheduled-email approval state machine, ownership boundaries, and production follow-ons.

`docs/attorney-ready-command-center.md` — the lean workflow decisions, competitive patterns, readiness contract, and production boundaries for this Jimmy build.

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
