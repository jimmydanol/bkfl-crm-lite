# Jimmy CRM Demo: Contact to Petition Prep

This branch is a fake-data-only product demonstration built from Matt's current CRM branch. It keeps Matt's four-part structure while making the pre-petition workflow explicit and easy to teach.

## The one workflow

1. **Lead** — the firm has no Intake answers from the debtor.
2. **Contact** — the firm has received at least some Intake data, but answers or documents still need work.
3. **Matter** — required Intake data is complete and every document request is approved or excused. The file is ready for petition prep.

Users do not manually convert records. The CRM derives the label from the file's actual state. If new data or document work reopens a Matter, it returns to Contacts.

## Matt's four-part structure

- **Dashboard** — shows Lead, Contact, and Matter counts, then ranks the next work with Contacts first.
- **Leads** — only people with no Intake data.
- **Contacts** — one debtor file per row, with Intake progress, document progress, and one plain-language next step.
- **Matters** — only petition-prep-ready files.

Settings remains available as a small utility link. It no longer competes with daily work in the primary navigation.

Each debtor file has four work tabs: **Overview**, **Intake Data**, **Documents**, and **Activity**.

## Product research applied

- [BK Questionnaire](https://www.bkquestionnaire.com/) emphasizes guided mobile Intake, precise document requests, automatic document organization, follow-up, and a single hub for answers and uploads. This demo applies the same operational lesson: show exactly what is missing and the next action, without turning the CRM into petition-preparation software.
- [BK Questionnaire pricing](https://www.bkquestionnaire.com/public/pricing) reinforces that firms pay for reduced staff chasing and cleaner information gathering. This demo keeps those benefits visible at the Contact level.
- [NextChapter MyChapter](https://app.nextchapterbk.com/sign_in_attempts/new) uses a debtor portal for answers and documents followed by attorney import and review. This demo keeps that handoff clean: Intake data received means Contact; completed package means Matter.
- [Jubilee](https://www.jubileepro.com/) combines client documents, messages, and case data. This demo keeps one debtor file while deferring post-filing feature sprawl.
- [Stretto Best Case](https://www.stretto.com/bankruptcy-software-services/best-case/) owns forms preparation and filing. BK FastLane should export or integrate there later instead of duplicating that mature product category inside this lean CRM.

## Acceptance rules

- No Intake data: Lead.
- Any Intake data but incomplete answers or documents: Contact.
- Complete Intake data and resolved document requests: Matter.
- Matters are never created manually.
- The visible workflow ends at petition prep ready.
- AI suggestions never replace firm document approval.
- Demo records and documents are synthetic only.

Run the source-level lifecycle checks with:

```powershell
node tests/verify-contact-lifecycle.mjs
```
