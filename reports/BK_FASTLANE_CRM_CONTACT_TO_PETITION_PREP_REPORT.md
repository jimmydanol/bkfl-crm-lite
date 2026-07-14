# BK FastLane CRM: Contact to Petition Prep

**Plain-English product report for Jimmy Stein and Matt McCune**

**Updated:** July 14, 2026

**Demo:** <https://jimmydanol.github.io/bkfl-crm-lite/>
**Scope:** Jimmy's fake-data-only branch; Matt's branch was not changed

## Bottom line

The CRM now has a clearer job: move a person from first contact to a complete, reviewed file that is ready for petition preparation.

The structure remains deliberately small:

1. **Dashboard** — what the firm should work on next.
2. **Leads** — people who have not provided any Intake answers.
3. **Contacts** — people who have provided some Intake data, but whose answers or Documents still need work.
4. **Matters** — Contacts whose Intake data and Document requests are complete and who are ready for petition prep.

This pass focused heavily on **Contacts → Documents**, because that is where the law firm must approve, reject, excuse, and follow up on debtor uploads. It also added the most useful lessons from Glade and Clio without adding another main menu, another dashboard, or a large set of settings.

> **Recommendation:** Use this as the product-design baseline. Keep simplifying this exact Intake-to-petition-prep path. Do not add broad post-filing case management until the core workflow is secure, connected, and proven with staff.

## What changed in this pass

### Document review is now safer and easier to understand

- The screen is named **Contact Document Review** so the wording matches the lifecycle.
- The review queue is the first place staff look. Approved and excused Documents alone appear in **Home Base**.
- Each upload shows whether it belongs to the debtor or spouse, when it arrived, and how many versions exist.
- The synthetic preview opens **inside the Document card**, so the review buttons remain visible.
- Replacement uploads append to an upload history instead of silently erasing the prior file.
- A normal approval records the reviewer and date.
- Overriding an AI flag requires the firm to explain why the Document is acceptable.
- Rejections use a small set of practical reason choices, plus optional detail.
- The client-facing rejection explanation is separate from the firm's internal note.
- Approvals, rejections, exceptions, excuses, replacement uploads, and reopened reviews add events to the Contact history.

### Follow-up can no longer get ahead of review

- **Review & Send Follow-Up** remains disabled while any upload or debtor explanation still needs a firm decision.
- The button also requires an assigned follow-up Task. This connects the communication to a responsible person and due date.
- Rejection explanations remain attached on later reminders instead of disappearing after the first email.
- The CRM counts how many requests have been sent and shows the last request date.
- The firm can edit the subject and message before sending.
- The demo clearly labels its upload URL as a demo. Production must use an expiring, per-Contact portal link and record delivery.

### The design stayed lean

- Matt's four-part CRM structure remains intact.
- Each debtor record still has only four work tabs: **Overview, Intake Data, Documents, and Activity**.
- No extra “automation center,” rule builder, or reporting module was added.
- Small mouse-over explanations identify why a workflow choice exists.

## What Glade taught us

[Glade](https://www.glade.ai/) is the closer comparison because it is designed around bankruptcy work. Its strongest idea is not a particular button or screen. It is that Intake, Documents, communication, and case work should build one continuous bankruptcy file instead of making staff re-enter information across disconnected products.

Glade's public product and help materials emphasize:

- bankruptcy-specific workflows rather than a generic sales CRM;
- a client questionnaire, Document checklist, client portal, consultation flow, and case initiation in one system;
- automation of repetitive administrative work from Intake through later case work;
- a client experience that lets prospects complete Intake and upload Documents without staff repeatedly directing every step.

Sources: [Glade product site](https://www.glade.ai/), [Glade Help Center](https://help.glade.ai/), and Glade's vendor-authored discussion of [unified legal practice management](https://glade.ai/blog/unified-legal-practice-management-platforms/).

### How that changed BK FastLane

- The CRM now explains Document review as part of one **Contact case file**.
- Intake progress and Document progress remain separate but live on the same record.
- The interface suggests the next useful action instead of asking staff to understand the whole system.
- Automation drafts and organizes work, while the firm makes every legal and Document decision.
- The final near-term destination stays **Petition Prep**, which is specific and meaningful to bankruptcy firms.

## What Clio taught us

[Clio](https://www.clio.com/features/) is broader than BK FastLane, but it demonstrates the operational discipline expected from production legal software.

The most useful Clio practices are:

- potential clients move through visible Intake stages on one dashboard in [Clio Grow](https://www.clio.com/grow/);
- Tasks are tied to the client or Matter, with an owner, due date, reminders, and visibility in the record history ([Clio Tasks](https://help.clio.com/hc/en-us/articles/9204917906971-Manage-Tasks-in-Clio-Manage));
- Documents carry useful metadata and remain connected to the relevant Contact or Matter ([Clio Documents](https://help.clio.com/hc/en-us/articles/9290308200091-Generate-Manage-and-Share-Documents));
- stage-driven workflows can create consistent Tasks and Documents while reducing missed steps ([Clio Automated Workflows](https://help.clio.com/hc/en-150/articles/35132279298843-Clio-Manage-Automated-Workflows));
- client sharing belongs in a protected portal with controlled access rather than a generic public upload link ([Clio for Clients](https://help.clio.com/hc/en-150/articles/9156800144283-Clio-for-Clients-Client-Actions));
- roles and permissions protect confidential information and control who can change firm-wide workflow rules ([Clio permissions](https://help.clio.com/hc/en-us/articles/9200279456667-Account-Users-and-Permissions)).

### How that changed BK FastLane

- The client follow-up cannot be sent until the assigned Task and review state agree.
- Document decisions now record the responsible reviewer and appear in Activity.
- Upload date, owner, version count, and replacement history are visible where staff decide.
- Client communication is editable and logged.
- The demo no longer pretends that a static URL is a secure production portal.

## What works well now

### A nontechnical attorney can understand the lifecycle

The labels describe the evidence in the file:

| Record | What it means |
|---|---|
| Lead | The firm has no Intake answers yet. |
| Contact | Intake data exists, but answers or Documents still need work. |
| Matter | Intake data and Document requests are complete; petition prep can begin. |

Staff do not manually “promote” someone because a conversation felt promising. The record changes when the file actually changes.

### The Dashboard answers “what next?”

Contacts appear before Leads because they are closer to petition prep and contain active firm work. Each row shows Intake progress, Document progress, and one next action.

### AI remains an assistant

AI can pre-screen an upload, organize the queue, and draft a follow-up. It cannot give final approval. The firm approves, rejects, excuses, or records an exception.

### The CRM stops at a useful boundary

BK FastLane does not try to reproduce mature petition-preparation and filing software. Its job is to deliver a clean, reviewable package to that next system.

## What is still not production-ready

This is a **synthetic product demo**, not a system for real debtor data.

Before a real-client pilot, the product still needs:

1. Real attorney, paralegal, and administrator accounts with role-based permissions.
2. Encrypted data and Document storage, backups, retention rules, and tested recovery.
3. A live Intake-to-CRM connection with retries, duplicate protection, and visible failures.
4. Malware scanning, real inline PDF rendering, file-size/type controls, and safe downloads.
5. An immutable server-side audit history; the demo history currently exists only in the browser.
6. Expiring, per-Contact portal invitations and upload links.
7. Real email/text delivery status, consent controls, bounce handling, and message threading.
8. Attorney-approved, versioned Chapter 7 and Chapter 13 questionnaire and Document rules.
9. Reliable joint-filer handling, including clear debtor/spouse ownership for every answer and Document.
10. End-to-end tests against the real Intake, storage, communication, and export services.

## Recommended production order

### 1. Complete the real Document contract

Use one Document request with an append-only `files[]` history. Each file needs uploader, upload time, review state, reviewer, decision time, client-facing reason, internal note, and replacement relationship.

### 2. Connect the live Intake

Intake answers and uploads should update the same Contact automatically. Staff should never have to copy the debtor's answers from one system into another.

### 3. Add security and accountability

Implement authentication, permissions, protected storage, expiring portal access, and an immutable audit trail before real client information enters the CRM.

### 4. Run a controlled synthetic staff pilot

Have paralegals process varied fake Contacts, including joint filers, unreadable uploads, missing months, repeat rejections, contradictory answers, and late replacements. Watch where staff hesitate or leave the system.

### 5. Run a small supervised real-client pilot

Keep a manual fallback. Verify every petition-prep export. Expand only after the workflow is dependable and the firm can recover from mistakes.

## What not to add yet

- A fifth main navigation area.
- A complex automation rule builder.
- Predictive legal recommendations.
- One-click batch approval of debtor Documents.
- Broad post-filing case management.
- A large analytics package.

Those may eventually be useful, but they would distract from the product's main promise today.

## Measures that matter

- Time from Lead creation to first Intake response.
- Time from Contact creation to petition-prep readiness.
- Number of Documents waiting on the client versus waiting on the firm.
- Follow-ups and replacement uploads per Contact.
- Average firm review time after an upload arrives.
- Files reopened after they appeared complete.
- Staff time required to reach petition prep.

## Verification completed

- Matt's four primary CRM destinations remain Dashboard, Leads, Contacts, and Matters.
- Lead, Contact, and Matter classification checks pass.
- Matter readiness still requires complete Intake data and resolved Document requests.
- Follow-up gating, rejection persistence, reviewer history, version history, inline preview, and editable-draft checks pass.
- The JSX source parses successfully.
- Browser testing completed the rejection, AI-override, excuse, and follow-up-readiness path.
- The rendered Dashboard and Document Review layouts were visually inspected.
- Matt's branch was not changed.

## Go / no-go

| Decision | Recommendation |
|---|---|
| Share this fake-data demo with Matt | **Yes** |
| Use this design as the CRM baseline | **Yes** |
| Continue synthetic paralegal testing | **Yes** |
| Put real debtor data in it today | **No** |
| Sell it as production-ready today | **No** |

The next value will come from making this exact workflow secure, reliable, and connected—not from adding more screens.
