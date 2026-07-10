# Jimmy Experimental - CRM Parity Lab

The `Jimmy-experimental` branch adds an attorney-facing Automation Lab based on
publicly documented competitor capability categories. The implementation is an
original FastLane workflow and does not copy competitor source, private data,
wording, creditor records, or visual design.

## Implemented in the experimental CRM

- Prioritized client follow-up queue with questionnaire progress, missing
  documents, overdue tasks, language, and preferred channel.
- Editable email/text drafts that can be placed in a local attorney-approval
  queue. No message is transmitted.
- Paystub, bank-statement, credit-report, and PDF-conversion assistant queues
  with explicit human-review status.
- Common-creditor review table with source-verification warnings.
- Readiness view for B101, schedules, SOFA, and the attorney review package.
- Downloadable fake-data CSV review index.

## Existing FastLane strengths retained

- Every AI recommendation and outbound draft remains subject to firm approval.
- Document status distinguishes AI review from final firm acceptance.
- Intake packages preserve source evidence and attorney-review boundaries.
- Organization name and logo continue to synchronize with Jimmy Intake.

## Integration gates

The following are not production-connected in this branch:

- SMS/email delivery.
- Bank or payroll account connections.
- OCR/PDF conversion services.
- Credit-report pulls or creditor-address databases.
- Petition-preparation software import.
- Authenticated cross-device persistence.

Each requires vendor approval, authentication, consent, secure storage,
retention/deletion rules, audit logging, error recovery, and human review. This
branch remains fake/demo-data only.
