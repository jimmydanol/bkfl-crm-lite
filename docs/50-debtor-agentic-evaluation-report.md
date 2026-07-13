# BK FastLane 50-Debtor Agentic Workflow Evaluation

**For:** Jimmy Stein and Matt McCune

**Date:** July 13, 2026

**Evaluated surfaces:** [BKFL CRM Lite](https://mmccune22.github.io/bkfl-crm-lite/) and [McCune Legal Intake mockups](https://mmccune22.github.io/mccune-legal-intake-mockups/Intake%20Pages/login.html)

**Plan baseline:** `BK_FASTLANE_OVERARCHING_PLAN.md`

## Bottom line

The two mockups communicate a promising debtor-to-firm workflow, but they are not a connected product and are not ready for real client data. The largest production blocker is not visual polish. It is the absence of a shared matter record and submission event between Intake and CRM.

The Intake currently stores page state in the browser, simulates document uploads without file bytes, and shows a fixed sample identity. The CRM stores its own data in browser `localStorage`, advances Intake through a `Simulate Submission (dev)` button, and creates the same fixed document package for every Lead. A staff member can then mark the case Ready for Petition Prep by approving four fixed cards and excusing all three missing cards, even when the underlying debtor answers and documents were never received by CRM.

**Production recommendation:** keep both public surfaces fake-data-only. Build the Phase 1 Intake-to-attorney-review contract first; only then harden the broader CRM automation promised in Phase 2.

## Evidence integrity

This evaluation deliberately separates two kinds of evidence:

1. **Live-browser calibration.** A synthetic Lead, `Alex Synthetic001`, was created in the public CRM and advanced through New Lead, Intake Sent, Intake Submitted, document review, and Ready for Petition Prep. All public Intake routes were inspected, including login, seven data sections, Documents, and confirmation.
2. **Fifty source-backed deterministic replays.** Fifty varied synthetic debtors were evaluated against hashes and control inventories fetched from the live pages. Each scenario modeled 76% to 100% completion, varied debtor facts and document availability, traversed ten Intake routes, replayed all four live-calibrated CRM states, and performed the CRM's fixed document review.

The 50 replays are **not represented as 50 live client submissions**. The public sites cannot perform that transaction: they have no Intake-to-CRM bridge, no authentication, and no document-byte storage. Actual file-byte upload was also unavailable in the browser calibration. No production system, database, email recipient, or external service was mutated.

## Quantitative results

| Measure | Result |
|---|---:|
| Synthetic debtors evaluated | 50 |
| Scenario completion targets | 76%-100% |
| Average target completion | 88.0% |
| Average source-modeled control completion | 88.8% |
| Intake route evaluations | 500 |
| CRM stage evaluations | 200 |
| Synthetic upload-state transitions | 302 |
| Explicit missing-document reasons | 60 |
| Failed source-backed scenarios | 0 |
| Distinct CRM missing-document signatures | **1** |
| Actual file bytes stored | **0** |
| Live Intake packages received by CRM | **0** |

The varied scenario matrix included 40 employed debtors, 12 with other income, 16 with dependents, 4 with a prior bankruptcy, 8 homeowners, 33 vehicle owners, 7 with tax debt, 10 with student loans, and 5 with business debt. Twenty scenarios supplied one Tier 2 document, twenty supplied two, and ten supplied all three.

The single repeated CRM missing signature was:

- Tax return - last year
- Tax return - two years ago
- Counseling class certificate

That invariant is the clearest proof that the CRM review is not driven by the debtor's Intake answers or document decisions.

## What is working

The overall story is understandable. A Lead starts unsent, staff approves an Intake message, the package arrives in an Intake Inbox, staff reviews documents, and a fully resolved checklist advances to Ready for Petition Prep. The Dashboard makes this four-stage shape easy to explain.

The CRM also contains several good product ideas worth carrying forward:

- Staff approval before client communications are sent.
- Separate initial-document review and later follow-up-upload review.
- AI-accepted versus AI-flagged states, with a human decision required.
- A chase list for rejected or missing documents.
- Automatic reopening when new document activity invalidates readiness.
- A visible audit-style timeline and task history.

The Intake is comprehensive, uses plain-language sectioning, supports conditional questions, and gives debtors a reason path when a document is unavailable. Those are useful foundations.

## Production blockers

### P0 - No canonical matter or real handoff

The Intake and CRM are two unrelated browser-state applications. Intake uses page/session storage; CRM uses `bkfl_lite_leads_v21` and other `localStorage` keys. The CRM's submission button manufactures a package instead of consuming a debtor submission.

This directly conflicts with the overarching plan's core architecture: information should be entered once, become structured matter data, and remain reusable and source-grounded across Intake, CRM, documents, communications, and production.

**Required fix:** define one versioned Matter/Intake Package contract and an idempotent `intake.submitted` event. CRM stages and document checklists must be projections of that record, not independently edited copies.

### P0 - Authentication and identity are simulated

The public login page is a navigation doorway, not an authentication boundary. After using a different synthetic email, the Intake header continued to show `Jordan Sample`. CRM roles and assignees are sample data rather than authenticated, tenant-scoped users.

**Required fix:** implement client magic-link or equivalent authentication, firm tenancy, attorney/staff permissions, session expiry, access revocation, and audit logging before any real debtor data is accepted.

### P0 - Documents are UI state, not documents

`documents.html` contains no file input. Its Upload buttons assign simulated filenames such as `photo_<document>.jpg`; no bytes, storage key, checksum, MIME metadata, access policy, or malware result exists. The overarching plan explicitly says uploaded documents are not production-ready until private R2 behavior and metadata handling are implemented and tested.

**Required fix:** private object storage, signed upload/download operations, immutable metadata, size/type validation, malware scanning, document-to-requirement linkage, retention/deletion rules, and an auditable review decision.

### P0 - Readiness can be manufactured by Excuse

The live synthetic Lead became Ready for Petition Prep after four approvals and three Excuse clicks. The three missing items included two tax returns and the counseling certificate. Each Excuse was recorded as a generic `doesn't apply to me`, with no required explanation, authority, second-level review, or case-specific applicability rule.

Readiness currently means only that every fixed checklist card is approved or excused. It does not establish that required answers are complete, contradictory answers are resolved, legal-risk flags were reviewed, means-test facts are sufficient, exemption issues were reviewed, or the attorney summary was approved.

**Required fix:** Matt must define required, conditionally required, waivable, and post-filing document rules. High-risk excuses need a reason, reviewer identity, timestamp, and possibly attorney approval. Ready for Petition Prep must be a multi-gate decision, not a seven-card count.

### P0 - Internal collaboration UI is client-visible

An internal `9 Colab` / `jimmy-changes.html` route appears in the client navigation on eight live Intake pages. This is a direct prototype artifact and a production trust issue.

**Required fix:** remove all collaboration, debug, and dev-only routes from the client build. Add an automated public-route assertion so they cannot return.

### P0 - AI recommendations lack production evidence

The CRM displays AI-accepted and AI-flagged document states, including an `Approve Anyway` path, but the mockup has no actual file, model run, extracted facts, cited source pages, confidence, prompt/model version, or review record behind the recommendation.

The plan requires source facts, visible uncertainty, and attorney-supervised assistance.

**Required fix:** every AI recommendation must expose its source document and page, extracted fact, confidence/uncertainty, model and prompt version, run time, and human disposition. `Approve Anyway` should require a short rationale.

## Bottlenecks

### Debtor burden is concentrated late

The live-source inventory found 361 modeled controls across the seven substantive Intake sections. Financial Affairs contains 143 (39.6%) and Assets contains 92 (25.5%). Together they account for 65.1% of the modeled control burden.

That creates two predictable failure points: fatigue in Assets, followed by an even larger Financial Affairs section near the end. The current progress treatment does not communicate this uneven effort.

**Improve it:** break these sections into short conditional substeps, show an honest time/effort estimate, save continuously, support resume from another device, and use a review screen that highlights unanswered required fields before Documents.

### Staff review has no case-specific triage

All 50 varied debtors produced the same four review cards and three missing cards. The CRM therefore cannot prioritize a complex homeowner, tax-debt case, prior-bankruptcy debtor, or business-debt case differently from a simple consumer case.

**Improve it:** make the Intake Inbox show case complexity, missing required answers, conflicts, urgent deadlines, legal-risk candidates, exemption issues, means-test concerns, document deficiencies, and next actions. These are the attorney-dashboard promises named in the overarching plan.

### Stage labels hide unresolved work

The Dashboard calls Stage 3 `Intake Inbox`, while the Lead calls it `Intake Submitted`. Stage 4 says `Ready for Petition Prep` even when an AI-summary approval task remains outstanding. The result is a stage that looks more definitive than the underlying workflow.

**Improve it:** use one canonical stage vocabulary and show readiness gates separately: Intake completeness, document completeness, AI review, staff review, attorney review, and legal exceptions.

### Repetitive per-card decisions

Staff must work the fixed list one card at a time. Repetition is tolerable at seven cards, but a real bankruptcy matter may have multiple accounts, vehicles, creditors, pay periods, bank months, and amendments.

**Improve it:** group by risk and document family, support guarded bulk approval for low-risk AI-accepted items, preserve individual audit records, and keep flagged or legally sensitive items out of bulk actions.

## Missing features

The following capabilities are needed before the first real-client gate:

- Canonical Matter, debtor, household, income, asset, debt, expense, financial-affairs, and document schemas.
- Cross-page validation, required-field rules, conflict detection, and a debtor review/attestation step.
- Real authentication, tenant isolation, role permissions, and audit logs.
- Private document storage and secure upload/download behavior.
- Intake-to-CRM submission, retry, idempotency, and failure recovery.
- Attorney review center with source-linked facts and uncertainty.
- Configurable document requirements driven by chapter, jurisdiction, household, employment, assets, debts, and case events.
- Accessibility, responsive, cross-browser, performance, and recovery testing.
- Consent, privacy, retention, deletion, export, and incident-response behavior.
- Operational observability for stuck submissions, failed uploads, stale tasks, and notification failures.

## Redundant or premature features

The CRM mockup includes broad Contacts, Settings, messaging templates, sequences, task automation, matter functionality, and extensive sample data. Much of that is Phase 2 territory. It is useful design exploration, but it competes with the still-missing Phase 1 transaction.

Specific consolidation opportunities:

- Dashboard, Leads, Intake Package, Documents, and AI should be views over one Matter record, not separate stores of similar facts.
- `Intake Inbox` and `Intake Submitted` should be one canonical state and label.
- Document follow-up tasks and Communications should reference one request object so the checklist, task, email, and audit event cannot disagree.
- Client-facing `9 Colab` is not a feature and should be removed.
- Dev controls such as `Simulate Submission (dev)` and `Run 5:00 AM Batch (dev)` must be excluded from production builds.

## Plan-aligned route to production

### Gate 1 - Make Phase 1 one real transaction

1. Define the canonical Intake Package and Document Requirement schemas.
2. Implement authenticated client sessions and private storage.
3. Persist each page to the same server-side Matter draft.
4. Emit an idempotent submission event.
5. Render the attorney review center directly from that submitted package.
6. Prove retry, duplicate-submit, partial-save, and failure recovery.

**Acceptance:** one synthetic debtor can start on one device, resume on another, upload real synthetic fixture bytes, submit exactly once, and appear in attorney review with matching source facts and document metadata.

### Gate 2 - Define attorney-safe readiness

Matt should approve a decision table for:

- Required versus conditional questions.
- Required, conditional, waivable, and deferred documents.
- Which exceptions staff may resolve and which require attorney review.
- Complexity, legal-risk, exemption, means-test, and deadline flags.
- The exact gates behind `Ready for Petition Prep`.

**Acceptance:** a missing or contradicted required fact cannot be hidden by document-card completion, and every exception has a source, reason, reviewer, and timestamp.

### Gate 3 - Run the plan's ten-client dog-food pilot

Use ten representative cases from this 50-scenario matrix rather than ten similar cases. Include at least: simple consumer, joint household, homeowner, tax debt, student loans, prior bankruptcy, business debt, missing tax return, unreadable/partial document, and a case with an urgent deadline.

**Acceptance:** Matt can understand complexity, missing information, legal-risk candidates, next steps, exemption/means-test concerns, and document deficiencies without reopening every Intake page. Jimmy can trace every displayed fact to stored source data.

### Gate 4 - Harden the Phase 2 CRM

After Intake and attorney review are strong, connect tasks, communications, reminders, staff roles, and dashboards to the canonical event stream. Preserve human approval for external messages and legal judgment.

**Acceptance:** task and communication state cannot drift from the Matter; permissions are enforced; all automated actions are explainable and auditable.

### Gate 5 - Production-readiness review

Complete security, privacy, accessibility, performance, backup/recovery, observability, and incident-response gates. Remove all sample identities, internal routes, dev buttons, fake filenames, and public-storage assumptions.

## Ownership proposal

**Jimmy / technical:** canonical schemas, server-side draft persistence, event contract, private storage, auth/RBAC, audit trail, test harness, and deployment gates.

**Matt / legal workflow:** document applicability, exception authority, readiness definition, legal-risk and attorney-review requirements, and validation of the representative ten-case pilot.

**Joint:** approve the Intake Inbox information hierarchy, decide which CRM features are necessary for the pilot, and sign off on the fake-data-to-real-data gate.

## Deliverables and rerun

- `results/50-debtor-crm-agentic-evaluation/scenario-plan.json` - 50 varied fake debtors.
- `results/50-debtor-crm-agentic-evaluation/results.json` - per-scenario page, document, and CRM-stage evidence.
- `results/50-debtor-crm-agentic-evaluation/run-summary.json` - aggregate results.
- `results/50-debtor-crm-agentic-evaluation/live-source-inventory.json` - live URL hashes and control counts.
- `results/50-debtor-crm-agentic-evaluation/live-browser-calibration.json` - truth boundary and live calibration record.
- `scripts/run-50-debtor-source-backed-model.mjs` - reproducible 50-scenario run.
- `scripts/run-50-debtor-crm-agentic-evaluation.mjs` - live-browser loop plus source-backed model.
- `docs/50-debtor-production-repair-prompt.md` - paste-ready implementation prompt based on this report.

Rerun from the branch worktree:

```powershell
node scripts/test-50-debtor-crm-agentic-evaluation.mjs
node scripts/run-50-debtor-source-backed-model.mjs
```

No deployment, email, real client data, database access, or production mutation is part of this evaluation.
