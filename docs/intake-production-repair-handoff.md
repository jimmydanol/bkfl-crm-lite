# BK FastLane Intake Production-Repair Handoff

Status: CRM-only implementation handoff for the canonical Intake app. No Intake repository code was copied or changed in this branch.

## Contract to emit

The canonical Intake implementation should emit `bkfl.intake-package.v1`, represented in this CRM branch by `prototype-case-contract.js` and `fixtures/50-synthetic-intake-packages.json`.

At minimum, each submission needs a stable `submissionId`, schema version, synthetic/production data classification, debtor and household answers, section completeness, missing-answer records, contradictions, deadlines, review flags, source references, document requirements, and initial review state. Re-emitting the same `submissionId` must update one CRM Lead deterministically without duplicating the Lead or losing recorded document decisions.

The CRM currently accepts only a local synthetic projection of this contract. Production transport, authentication, authorization, tenant isolation, audit records, and storage are intentionally absent.

## Intake work to carry forward

- Remove `9 Colab` / `jimmy-changes.html` from client navigation.
- Replace the static `Jordan Sample` identity with identity from the authenticated client session.
- Split Assets and Financial Affairs into smaller conditional steps driven by prior answers.
- Add honest effort estimates, continuous save, cross-device resume, a final review step, and debtor attestation.
- Replace simulated upload controls with private object storage, malware/content controls, retention policy, and real file metadata in the canonical Intake app.
- Emit document metadata and source references without placing file bytes in the CRM case payload.
- Preserve missing-answer, contradiction, deadline, and provenance records so attorney/paralegal triage can explain every derived item.

## Integration acceptance criteria

1. The same submission can be delivered repeatedly without creating duplicates.
2. Intake facts change applicable document requirements; the checklist is not universal.
3. A changed or newly required answer re-evaluates CRM readiness.
4. Uploaded documents retain stable requirement IDs and private storage references.
5. Synthetic test identities remain under `.example.test`; real-client mode requires the approved authentication, storage, and pilot gates from `BK_FASTLANE_OVERARCHING_PLAN.md`.
6. Intake never presents AI-generated legal conclusions as attorney decisions.

## Ownership boundary

The canonical Intake team should own the production schema and transport. The CRM should own its Lead projection, review decisions, tasks, audit presentation, and readiness evaluation. Matt must approve the legal-policy portions of document applicability, waiver authority, risk classification, and attorney-review thresholds before those rules become production behavior.
