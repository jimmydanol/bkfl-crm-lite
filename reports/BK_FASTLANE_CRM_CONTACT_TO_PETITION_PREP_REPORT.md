# BK FastLane CRM: Contact to Petition Prep

**Plain-English product report for Jimmy Stein and Matt McCune**

**Date:** July 14, 2026

**Status:** Live fake-data demo verified
**Demo:** https://jimmydanol.github.io/bkfl-crm-lite/

## Executive verdict

The CRM is finally centered on one clear job: take a potential bankruptcy client from first contact to a complete file that can be used to start preparing the petition.

The terminology is now simple and automatic:

1. **Lead:** The firm has not received any Intake answers.
2. **Contact:** The firm has received some Intake data, but answers or documents still need work.
3. **Matter:** The required Intake data is complete and every document request is approved or excused. The file is ready for petition prep.

This is a much stronger direction than treating every person as a Lead or letting staff manually decide when a case becomes a Matter. The screen now tells the firm what is true based on the file itself.

**Recommendation:** Use this version as the product-design baseline. Do not add broad case-management or post-filing features yet. First connect this workflow to secure real storage, the live Intake, and a controlled pilot.

## What changed

- Matt's four-part structure remains, but the four sections are now **Dashboard, Leads, Contacts, and Matters**.
- Settings still exists, but it is a small utility instead of a major daily-work destination.
- The Dashboard explains the whole workflow at a glance and lists the files that need work next.
- Contacts are placed ahead of Leads in the work list because they are closer to petition prep and usually contain the most valuable staff work.
- Each Contact shows Intake-data progress, document progress, and one plain-language next step.
- A Contact becomes a Matter automatically only when data and documents are complete.
- A Matter returns to Contacts if later activity reopens data or document work.
- Each debtor file now has four focused tabs: **Overview, Intake Data, Documents, and Activity**.
- The document resolved count was corrected so only approved or excused requests count as complete.
- Important labels include hover explanations, and the site is visibly marked as a fake-data-only Jimmy demo.

## The intended daily workflow

### 1. Create the Lead

The firm records the new person's name and contact information. The person remains a Lead even if the secure Intake link has been sent, because no answers have been received yet.

### 2. Receive Intake data

As soon as any Intake answers arrive, the person becomes a Contact. This tells the firm that there is now a real file to complete.

### 3. Complete the Contact

The Contact screen shows two separate kinds of work:

- **Intake data:** identity, household, income, expenses, property, debts, and financial-affairs answers.
- **Documents:** items needed from the client, uploads waiting for firm review, and requests already approved or excused.

The firm should always be able to answer two questions: "What is missing?" and "Who needs to act next?"

### 4. Reach petition prep

When all required Intake sections have answers and all document requests are approved or excused, the Contact automatically becomes a Matter. That is the current finish line. The next action is to begin petition preparation.

## What works well now

### The language matches how a small bankruptcy firm thinks

Lead, Contact, and Matter now describe real changes in the file, not vague sales stages. A new staff member can understand the model without training in CRM terminology.

### The Dashboard answers "What should I do next?"

The Dashboard no longer tries to be a general control center. It shows counts, progress, and a short work list. Contacts come first because moving an existing Contact forward is usually more valuable than staring at an untouched Lead.

### Data and documents stay separate

A complete questionnaire does not mean the documents are complete, and complete documents do not cure missing answers. The CRM shows both measures independently and requires both before petition prep.

### Staff cannot create a Matter too early

There is no "Create Matter" button. The system must earn that label from the file's readiness. This prevents optimistic or inconsistent status changes.

### The document screen preserves firm judgment

AI can flag or preliminarily accept an upload, but the firm still approves, rejects, or excuses it. That is the correct safety boundary for legal work.

### The design stays narrow

The CRM does not try to replace mature petition-preparation software. It stops at a clean, reviewable package that can later be exported or integrated.

## What is not production-ready

The demo is appropriate for product review and synthetic testing. It is not ready for real client data.

### Must be completed before any real-client pilot

1. **Real accounts and permissions.** Attorneys, paralegals, and administrators need secure sign-in and role-based access.
2. **Secure client-data storage.** Intake answers and files need encrypted storage, backups, retention rules, and tested recovery.
3. **Reliable Intake connection.** The live Intake must create and update the same debtor record, with retries and visible error handling.
4. **Real document storage.** Uploads need secure file storage, file-type and size controls, malware scanning, and a reliable preview/download path.
5. **A permanent activity history.** The firm needs a tamper-resistant record of who changed data, approved a document, sent a request, or changed readiness.
6. **Production readiness rules.** Chapter-specific required sections and documents must be agreed on by the attorneys and versioned.
7. **End-to-end testing.** The team should test Intake submission, partial completion, document follow-up, promotion to Matter, reopening, and export with synthetic clients before a pilot.

### Important next improvements

- Duplicate detection and safe handling of joint filers.
- Reliable email and text reminders with consent and delivery history.
- Assignment and ownership so every Contact has a responsible staff member.
- Export into the selected petition-preparation system.
- Accessibility, keyboard, mobile, performance, and browser testing.
- Simple reporting on time waiting for the client versus time waiting for the firm.

### Later, only after the core workflow works

- OCR and AI extraction from pay stubs, tax returns, and statements.
- Payroll, bank, credit-report, or creditor-data connections.
- More advanced automation and predictive follow-up.
- Post-filing case management.

## Competitive lessons applied

### BK Questionnaire

BK Questionnaire focuses on guided mobile Intake, exact document requests, organized uploads, reminders, and reducing staff chasing. The important lesson is not to copy every feature. It is to make missing information obvious and make the next request easy.

### NextChapter / MyChapter

MyChapter demonstrates a clean debtor portal handoff: the debtor supplies answers and documents, then the law firm reviews and imports the work. BK FastLane should preserve that separation and avoid redundant entry.

### Jubilee

Jubilee reinforces the value of keeping client data, documents, and communications attached to one file. The new four-tab debtor record follows that principle without adding a large case-management menu.

### Stretto Best Case

Best Case is mature petition-preparation and filing software. BK FastLane should integrate or export there later, not try to reproduce forms preparation inside this CRM.

## Recommended production order

### Phase 1: Make the current workflow real

- Confirm the Lead, Contact, and Matter rules with the attorneys.
- Define the authoritative Intake and document data model.
- Add authentication, permissions, secure storage, and audit history.
- Connect the live Intake to the CRM.
- Complete the real document-review and follow-up loop.

### Phase 2: Run a controlled synthetic pilot

- Use varied fake clients with missing answers, inconsistent answers, and incomplete document sets.
- Measure whether staff can always identify what is missing and who acts next.
- Test promotion to Matter and reopening back to Contacts.
- Fix confusion before allowing any real client data.

### Phase 3: Limited real-client pilot

- Select a small number of matters with attorney supervision.
- Keep a manual fallback and verify every export.
- Track errors, staff time, follow-up counts, and time to petition-prep readiness.
- Expand only after the team can show reliable, repeatable handling.

## Measures that matter

- Time from Lead creation to first Intake response.
- Time from Contact creation to Matter readiness.
- Number of missing Intake sections per Contact.
- Number of documents waiting on the client versus waiting on the firm.
- Number of follow-ups required per Contact.
- Percentage of Matters reopened because work was incomplete.
- Staff time spent per file before petition prep.

## Go / no-go recommendation

- **Share this fake-data demo:** Yes.
- **Use this design as the CRM baseline:** Yes.
- **Begin a controlled synthetic pilot:** Yes.
- **Store real client information today:** No.
- **Sell it as production-ready software today:** No.

The product direction is now strong enough to explain to a solo bankruptcy attorney in a few minutes. The next value will come from making this exact workflow secure, reliable, and connected - not from adding more screens.

## Build and verification record

- Matt's unchanged base: `a94e1793dac7d08d8e1632f74c2b05b1a9a4a517`
- Jimmy feature branch: `codex/jimmy-contact-to-petition-ready`
- CRM feature commit: `d59accaa6dab9c26e94d261a0c287cf6295f429e`
- GitHub Pages branch: `Jimmy`
- Live URL: https://jimmydanol.github.io/bkfl-crm-lite/
- Verification completed: lifecycle checks, JSX parsing, rendered Dashboard/Leads/Contacts/Matters pages, GitHub Pages build, live HTTP response, and live browser inspection.
- Matt's branch was not changed.

## Sources

- BK Questionnaire: https://www.bkquestionnaire.com/
- BK Questionnaire pricing: https://www.bkquestionnaire.com/public/pricing
- NextChapter / MyChapter: https://app.nextchapterbk.com/sign_in_attempts/new
- Jubilee: https://www.jubileepro.com/
- Stretto Best Case: https://www.stretto.com/bankruptcy-software-services/best-case/
