# Lean signed-intake workflow

This document records how the Matt-branch CRM review was translated into the Jimmy fake-data demonstration. It is product guidance, not a claim that the static GitHub Pages prototype is production-ready.

## Staff question the home page must answer

The first screen answers one question: **What should I do next?** Each synthetic matter appears once, ranked by urgent attorney issue and due date. A selected row explains what remains and provides one Continue action.

The raw task list remains underlying workflow data, but it is not the primary navigation model. A solo-practice team should not have to translate 85 task rows into 50 client decisions every morning.

## Readiness checks

`Ready for Petition Prep` is true only when all three conditions are true:

1. **Intake Completion:** required answers are complete and tracked inconsistencies are resolved.
2. **Document Review:** every applicable document request is approved or excused by the firm.
3. **Attorney Review:** the firm has recorded the independent attorney workflow review.

Document approval cannot silently satisfy attorney review. Recording attorney review cannot override missing intake answers or unresolved documents.

## Simple product shape

- Primary navigation is **Work Queue**, **Matters**, and **Settings**.
- A matter has four tabs: **Overview**, **Intake**, **Documents**, and **Activity**.
- Client follow-up owns missing answers and client reminder drafts.
- Document Review owns approve, replacement, client-waiting, excuse, version, and decision history.
- Attorney decisions own time-sensitive flags, evidence review, recorded decisions, and reasoned returns to staff.
- AI does not get its own destination; source-backed assistance belongs beside the fact or document it explains.

## Competitive patterns adopted

- Mortgage CRMs use clear milestones and stage-triggered next steps. BK FastLane adopts the milestone discipline, not the marketing-suite bulk. See [BNTouch pipeline automation](https://bntouch.com/mortgage-lead-management/).
- Tax workflow systems keep requests, documents, and staff work attached to one job. BK FastLane adopts one matter record and one client request path. See [TaxDome workflow](https://help.taxdome.com/article/105-tasks-pipelines-jobs-explained) and [document checklists](https://help.taxdome.com/article/document-checklist).
- Legal intake CRMs use precise stage names, quick views, and one current matter state. BK FastLane adopts precise, action-based labels and avoids overlapping pipelines. See [Clio Grow Pipeline](https://help.clio.com/hc/en-us/articles/9286134468507-Clio-Grow-Pipeline) and [Lawmatics Intake Pipeline](https://help.lawmatics.com/en/articles/10699827-intake-pipeline).
- Accounting workflow products centralize files, notes, requests, and tasks in one workspace. BK FastLane combines them into the Matter workspace but does not expose a general workflow builder in this solo-firm demo. See [Canopy Task Workspace](https://support.getcanopy.com/en/articles/9376005-how-do-i-navigate-the-task-workspace).

## Trust and safety boundaries

- Every displayed person and document is synthetic.
- Browser-local schedules and communications are simulations; no mailbox is connected.
- AI summaries are drafts until the linked approval task is completed.
- The preliminary income check uses entered Intake facts but shows no above/below-median conclusion unless the firm configures the applicable current DOJ threshold.
- This static build has no production authentication, private document storage, immutable server-side audit log, conflict-safe API, or real email delivery.

## Production follow-ons

Before real-client use, replace browser storage and simulations with authenticated, role-scoped server workflows; encrypted private document storage; immutable audit events; current jurisdiction-specific DOJ data management; conflict-safe review APIs; verified delivery integrations; monitoring; retention controls; and attorney-approved operating procedures.
