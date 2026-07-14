# Attorney-ready command center

This document records how the Matt-branch CRM review was translated into the Jimmy fake-data demonstration. It is product guidance, not a claim that the static GitHub Pages prototype is production-ready.

## Staff question the home page must answer

The first screen answers one question: **What needs attention today?** Each synthetic matter appears once, ranked by urgent attorney issue, due date, and blocker count. A selected row explains the exact open gates and routes the reviewer to the next useful workspace.

The raw task list remains underlying workflow data, but it is not the primary navigation model. A solo-practice team should not have to translate 85 task rows into 50 client decisions every morning.

## Readiness contract

`Ready for Petition Prep` is true only when all three conditions are true:

1. **Intake Completion:** required answers are complete and tracked inconsistencies are resolved.
2. **Document Review:** every applicable document request is approved or excused by the firm.
3. **Attorney Review:** the firm has recorded the independent attorney workflow review.

Document approval cannot silently satisfy attorney review. Recording attorney review cannot override missing intake answers or unresolved documents.

## Action queues

- Intake Completion owns genuine blanks, partial sections, inconsistent answers, and client reminder drafts.
- Document Review owns receive, approve, replacement, client-waiting, excuse, resubmission, version, and decision history.
- Attorney Review owns time-sensitive flags, evidence review, recorded workflow review, and reasoned return.

## Trust and safety boundaries

- Every displayed person and document is synthetic.
- Browser-local schedules and communications are simulations; no mailbox is connected.
- AI summaries are drafts until the linked approval task is completed.
- The preliminary income check uses entered Intake facts but shows no above/below-median conclusion unless the firm configures the applicable current DOJ threshold.
- This static build has no production authentication, private document storage, immutable server-side audit log, conflict-safe API, or real email delivery.

## Highlighted review aids

The dashboard includes a report-to-product change guide. Highlighted `NEW` explanation controls support both mouse hover and click. Their wording is intentionally nontechnical so a solo-practice attorney can understand the workflow change without reading this file.

## Production follow-ons

Before real-client use, replace browser storage and simulations with authenticated, role-scoped server workflows; encrypted private document storage; immutable audit events; current jurisdiction-specific DOJ data management; conflict-safe review APIs; verified delivery integrations; monitoring; retention controls; and attorney-approved operating procedures.
