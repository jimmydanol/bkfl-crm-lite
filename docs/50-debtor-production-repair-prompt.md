# BK FastLane Production-Repair Prompt

Paste-ready implementation prompt derived from the 50-debtor workflow evaluation. This prompt keeps Matt McCune's CRM `main` branch as the source/design baseline while directing all changes to Jimmy's isolated repair branch.

---

## PROMPT - copy from here down

You are improving the BK FastLane Intake-to-CRM prototype using the completed 50-debtor evaluation as the acceptance baseline.

### Repository and branch constraints

- Work only in `E:\Projects\bkfl-crm-lite-50x-evaluation`.
- Stay on `codex/50-debtor-crm-agentic-evaluation`.
- This branch is based directly on Matt McCune's `mmccune22/bkfl-crm-lite` `origin/main` commit `798d88ab31b6fcad87320e7d872bff04c25286ca`.
- Preserve Matt's `main` as the design and source lineage. Do not switch to, rebase onto, merge from, or copy wholesale from Jimmy experimental branches.
- Do not modify Matt's `main` branch.
- Before editing, verify that Matt's base commit is an ancestor of the current branch and report any drift.
- Preserve the completed evaluation commit `c5bbb32c674d0f06697632c92d5035dfb45525fe`.
- Do not deploy, push, send messages, access databases, use real client data, or create paid resources unless Jimmy explicitly authorizes that action.

### Required source material

Read these files completely before implementation:

1. `docs/50-debtor-agentic-evaluation-report.md`
2. `results/50-debtor-crm-agentic-evaluation/run-summary.json`
3. `results/50-debtor-crm-agentic-evaluation/scenario-plan.json`
4. `results/50-debtor-crm-agentic-evaluation/live-browser-calibration.json`
5. `scripts/run-50-debtor-crm-agentic-evaluation.mjs`
6. `E:\Projects\BK-FastLane\BK_FASTLANE_OVERARCHING_PLAN.md`
7. `E:\Projects\BK-FastLane\AGENTS.md`
8. `E:\Projects\BK-FastLane\work\SYSTEM_COMPONENT_MAP.md`

Treat the evaluation report and live/source evidence as the current problem statement. Treat the overarching plan as the product and phase authority.

### Objective

Make the attorney/paralegal CRM prototype materially better and more honest by replacing its fixed fake submission package with case-specific synthetic Intake data, improving staff triage and document review, and preventing a Lead from appearing Ready for Petition Prep when required review gates remain unresolved.

This is a prototype-repair pass, not authorization to claim production security. Keep fake/demo data clearly labeled. Build seams that can later connect to the canonical BK FastLane Intake app, but do not invent a production backend inside this static GitHub Pages prototype.

### Product principles

- Intake remains the first product wedge. Do not overbuild unrelated Phase 2 CRM features.
- Enter data once and reuse it. Dashboard, Lead, Intake Package, Documents, Tasks, and AI must be projections of the same synthetic case record.
- Attorney judgment remains central.
- AI output must show source, uncertainty, and review state.
- A missing or contradicted required fact cannot be hidden by completing document cards.
- External communications require human approval.
- Prototype controls, simulated data, and unavailable production capabilities must be visibly identified.

### Implement in this order

#### 1. Establish one prototype case contract

Create a versioned synthetic `IntakePackage`/case fixture contract that can represent:

- Lead and debtor identity.
- Joint filing and household members.
- Income and employment.
- Assets.
- Debts.
- Expenses.
- Financial-affairs answers.
- Counseling state.
- Documents and document metadata.
- Missing answers, contradictions, urgent deadlines, and review flags.
- Source references for every derived staff-facing fact.
- Schema version, submission ID, and submission timestamp.

Use stable scenario and document identifiers. A repeat import of the same submission ID must update deterministically rather than create a duplicate Lead or duplicate document cards.

Keep the contract isolated from React rendering so it can later be replaced by a real Intake submission API.

#### 2. Drive CRM fixtures from varied Intake scenarios

Use the existing 50-scenario plan to create case-specific CRM inputs. Do not generate the same four review items and three missing items for every debtor.

At minimum, the document requirements must react to:

- Employment and other-income answers.
- Homeownership and mortgage information.
- Vehicle ownership and liens.
- Bank accounts.
- Tax debt.
- Student loans.
- Business debt.
- Prior bankruptcy.
- Joint household facts.
- Uploaded, partial, unreadable, promised-later, not-filed, and not-taken-yet document states.

Preserve deterministic output so test failures are reproducible.

#### 3. Repair Dashboard triage

Keep Matt's four-stage visual design, but use one canonical stage vocabulary everywhere:

1. New Lead
2. Intake Sent
3. Intake Submitted
4. Ready for Petition Prep

The Stage 3 section may be titled `Intake Inbox`, but each Lead's stored stage must remain `Intake Submitted`.

For every submitted Lead, show a compact triage summary with:

- Completion percentage.
- Case-complexity indicators.
- Missing required answers.
- Contradictions.
- Urgent deadlines.
- Legal-risk candidates clearly labeled for attorney review.
- Exemption and means-test concern candidates.
- Documents awaiting upload, AI screening, staff review, or attorney ruling.
- Recommended next action and responsible role.

Allow useful sorting/filtering by urgency, age, missing count, review owner, and readiness blockers. Do not turn this into a generic full CRM redesign.

#### 4. Repair Lead > Intake Package

Render the submitted synthetic Intake Package from the shared case contract. Organize it for quick attorney review rather than mirroring the debtor form page by page.

Include:

- Plain-language case summary.
- Source-linked facts.
- Visible missing and contradictory answers.
- Uncertainty and review state.
- Section completeness.
- A concise timeline of submission/import events.

Never invent a fact that is absent from the case fixture.

#### 5. Repair Lead > Documents

Make the checklist case-specific. Each item must include:

- Requirement ID and document type.
- Why it is required for this synthetic case.
- Source Intake answer(s).
- Requirement class: required, conditional, waivable, or deferred.
- Current state: awaiting upload, uploaded, AI accepted, AI flagged, approved, rejected, excused, or deferred.
- Filename and synthetic metadata when uploaded.
- AI note, confidence/uncertainty, and source reference when simulated AI is present.
- Staff/attorney decision, reviewer, reason, and timestamp.

Decision rules:

- `Approve Anyway` requires a rationale.
- `Reject` requires a debtor-facing reason.
- `Excuse` requires a reason and is unavailable for non-waivable requirements.
- High-risk exceptions require attorney review.
- Guarded bulk approval may apply only to low-risk AI-accepted items; never include flagged, rejected, high-risk, or legally sensitive items.
- Reopening or adding a required item must automatically invalidate Ready status.

Keep the useful Home Base, review pile, and chase-list mental model from Matt's design.

#### 6. Replace the single readiness count with explicit gates

`Ready for Petition Prep` must require all applicable gates:

- Required Intake answers complete.
- Contradictions resolved.
- Required/conditional document requirements resolved under their allowed rules.
- AI-flagged items dispositioned by a human.
- High-risk exceptions approved by the authorized role.
- Staff review complete.
- Attorney-review items complete.

Show the gates and blockers in the Lead view. A case with an unresolved required answer, prohibited excuse, flagged document, or pending attorney gate must remain Intake Submitted.

Do not treat AI-summary email approval or unrelated administrative tasks as hidden readiness gates; show them separately.

#### 7. Improve prototype truthfulness and safety

- Display a persistent `Synthetic prototype - no real client data` indicator.
- Keep dev-only actions visibly marked and group them away from normal staff actions.
- Do not imply that a simulated filename represents stored file bytes.
- Do not imply that an AI result came from a real model or document unless the fixture explicitly contains that provenance.
- Do not add real authentication, storage, email, or production claims to this static prototype.
- Keep all generated identities and files obviously synthetic.

#### 8. Keep the UI focused

Preserve Matt's current visual language unless a change is necessary for clarity, safety, accessibility, or task completion.

Prioritize:

- Dashboard Intake Inbox.
- Lead > Intake Package.
- Lead > Documents.
- Readiness gates.
- Staff/attorney review history.

Avoid spending the repair pass on Contacts, generic Matters, messaging-template builders, broad Settings, or other Phase 2 surfaces that do not unblock the Phase 1 fake-client pilot.

### Intake-side findings to preserve as a handoff

Do not edit the separate Intake repository during this CRM-only repair pass. Create or update a concise Intake handoff artifact covering:

- Remove `9 Colab` / `jimmy-changes.html` from client navigation.
- Replace the static `Jordan Sample` identity with authenticated-session identity when the real app is implemented.
- Split Assets and Financial Affairs into smaller conditional steps.
- Add honest effort estimates, continuous save, cross-device resume, review, and attestation.
- Replace simulated upload buttons with private object storage and real document metadata in the canonical Intake app.
- Emit the versioned case contract used by this CRM prototype.

Do not copy Intake mockup code into this CRM repository.

### Required tests

Extend the existing evaluation harness so it proves:

1. Exactly 50 unique scenarios run.
2. All scenarios use stable IDs and safe `.example.test` identities.
3. Scenario facts produce multiple distinct document-requirement signatures.
4. Employment, home, vehicle, bank, tax, student-loan, business, prior-bankruptcy, and joint-household variations affect the review package when applicable.
5. Reimporting the same submission is idempotent.
6. Missing required answers block readiness.
7. A non-waivable document cannot be excused.
8. High-risk exceptions require attorney review.
9. AI-flagged documents cannot be bulk-approved.
10. Rejected or newly required documents reopen a Ready case.
11. Every derived summary/flag has a source reference.
12. No real client data, external message, database, deployment, or production mutation occurs.

The previous result `crmMissingSignatureVariants: 1` is a regression failure. The repaired system must produce case-specific signatures with a documented expected count or lower bound.

### Verification

- Run syntax and contract tests.
- Run the full 50-scenario evaluation.
- Verify the key CRM flows locally through the browser using synthetic data.
- Check responsive behavior and keyboard-accessible controls on the repaired surfaces.
- Run `git diff --check`.
- Confirm the worktree contains only in-scope changes.
- Confirm Matt's original base commit remains an ancestor of the branch.
- Do not deploy or push without explicit approval.

### Deliverables

1. The repaired CRM prototype on `codex/50-debtor-crm-agentic-evaluation`.
2. The versioned synthetic case contract and deterministic fixtures.
3. Updated 50-scenario runner and tests.
4. Before/after aggregate evidence.
5. A concise Intake handoff artifact for the canonical Intake implementation.
6. A short implementation report for Jimmy and Matt containing:
   - What changed.
   - Which P0/P1 findings were resolved.
   - What remains prototype-only.
   - What decisions require Matt.
   - Exact test results.
   - Exact files and commit.

### Stop conditions

Stop and report instead of guessing if the work would require:

- A legal decision about document applicability, waiver authority, or readiness that Matt has not defined.
- Secrets, credentials, tokens, databases, real client data, or production services.
- Modifying or overwriting Matt's branch.
- Pulling unreviewed experimental code into the branch.
- Sending messages, deploying, or pushing without approval.

The desired outcome is a materially stronger, case-specific, attorney-reviewable prototype that remains honest about its static/demo boundaries and creates a clean path into the canonical BK FastLane Intake architecture.
