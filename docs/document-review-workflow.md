# BK FastLane CRM Lite - Intake Completion Review Workflow

## Purpose

Debtors usually submit an Intake that is mostly, but not entirely, complete. This workflow helps a bankruptcy attorney or paralegal answer two questions quickly:

1. What essential information and documents are still missing?
2. Is the consolidated reminder accurate, and when should its fake schedule be approved?

The workflow is matter-based. Staff review one incomplete debtor matter at a time rather than sorting through one queue row per document.

## Prototype boundary

The Jimmy branch uses deterministic fake clients and `@example.test` recipients. Email scheduling is simulated in browser storage; it does not contact Gmail, an email provider, a background scheduler, or a real debtor.

GitHub Pages script URLs carry a release version so a cached page cannot silently combine a newer reviewer UI with an older bridge or fake-data feed. Update the version on every public workflow release.

Production requires authenticated firm roles, tenant isolation, matter-scoped client access, private document storage, durable scheduling, delivery events, immutable audit records, and conflict-safe APIs. The Jimmy branch does not provide any of those controls and must never hold real client data.

## End-to-end flow

```mermaid
flowchart LR
  A["Debtor enters about 90% of Intake"] --> B["Intake derives missing fields and documents"]
  B --> C["One completion bundle enters CRM"]
  C --> D["Staff reviews applicable first-reminder items"]
  D --> E["Review email body, recipient, Intake link, and scheduled time"]
  E --> F["Approve and schedule simulated reminder"]
  F --> G["Debtor returns to the exact item and submits one or more responses"]
  G --> B
```

## Ownership

| Owner | Responsibilities |
| --- | --- |
| BK FastLane Intake | Canonical debtor data, document-request states, completion calculation, missing-item derivation, Intake return URL, and matter revision. |
| CRM | Staff-facing completion queue, schedule selection, approval record, exact email snapshot, communication/task entry, and workflow events. |
| Attorney/paralegal | Confirm the missing requests are appropriate and approve the schedule. |
| Email service (production only) | Deliver an approved immutable snapshot at its scheduled time and return delivery status. |

## Completion bundle

```ts
interface IntakeCompletionBundle {
  bundleVersion: 2
  matterId: string
  matterRevision: number
  ruleSetVersion: string
  items: CompletionItem[]
  reminderItems: CompletionItem[]
  metrics: CompletionMetrics
  states: {
    submission: 'draft' | 'submitted' | 'resubmitted'
    intakeCompletion: 'needs_client_action' | 'complete'
    documentReview: 'pending' | 'approved' | 'replacement_requested' | 'excused' | 'rejected'
    attorneyReview: 'not_started' | 'in_review' | 'complete'
  }
}

interface CompletionItem {
  id: string
  kind: 'field' | 'document' | 'review'
  label: string
  clientInstruction: string
  canonicalPath: string
  applicability: 'essential_now' | 'conditional' | 'contextual' | 'attorney_only' | 'deferred'
  applicabilityReason: string
  whyNeeded: string
  caseStageDeadline: string
  clientActionable: boolean
  priority: 'high' | 'medium' | 'low'
  resolutionStatus: 'open' | 'answered' | 'uploaded' | 'replaced' | 'unavailable' | 'not_applicable' | 'help_requested' | 'unsupported_file'
}
```

The Intake agent excludes legal review flags from the debtor email. A review flag may matter to the attorney without being a question the debtor should answer.

## Scheduled email record

The CRM creates this record only after approval:

```ts
interface ScheduledCompletionEmail {
  id: string
  matterRevision: number
  missingItemIds: string[]
  recipient: string
  subject: string
  bodySnapshot: string
  intakeResumeUrl: string
  scheduledFor: string
  timezone: 'America/Denver'
  status:
    | 'pending_approval'
    | 'approved_scheduled'
    | 'simulated_sent'
    | 'canceled'
    | 'stale'
    | 'failed'
  deliveryMode: 'simulation' | 'production'
  approvedBy?: string
  approvedAt?: string
  canceledBy?: string
  canceledAt?: string
}
```

## State transitions

```mermaid
stateDiagram-v2
  [*] --> PendingApproval
  PendingApproval --> ApprovedScheduled: staff approves schedule
  ApprovedScheduled --> SimulatedSent: prototype due-time simulation
  ApprovedScheduled --> Canceled: staff cancels
  PendingApproval --> Stale: missing-item revision changes
  ApprovedScheduled --> Stale: missing-item revision changes before send
  Stale --> PendingApproval: regenerate exact email snapshot
  SimulatedSent --> [*]
```

Approval must be idempotent. Repeating approval against the same revision and schedule must not create duplicate communications or tasks.

## UI contract

The **Intake Completion** tab defaults to **Needs approval** and displays one row per incomplete matter:

- debtor name and chapter;
- overall completion percentage;
- number of missing essential fields;
- number of missing documents;
- reminder state.

Opening a row shows:

- a short list of missing essential information;
- a short list of missing documents;
- an explicitly editable scheduled-email preview containing the exact recipient, subject, and complete email body;
- the organization sender address and mailbox-connection state;
- Intake return link;
- scheduled date/time;
- **Approve & schedule reminder**.

If the visible recipient, subject, or body differs from the saved draft, the reviewer must give an override reason. Approval atomically persists those visible edits and approves that exact snapshot; it must never silently approve an older saved version. Editing an already-approved message invalidates the old schedule before the replacement snapshot is approved.

After approval, the UI shows the schedule, approver, immutable body snapshot, and a cancel action. The CRM also creates one scheduled communication, one scheduled-reminder task, one timeline entry, and one completion event.

The fake pilot also creates two idempotent, browser-local cadence tasks under the same workflow key: suggest reminder 2 after five business days (within the 3-5 day policy window), and firm follow-up after ten days (within the 7-10 day window). Completion, any client response, reviewer cancellation/pause, an unavailable-item response, or the two-reminder maximum stops the cadence. Atomic cancellation closes the reminder communication, schedule, and all three related tasks together; nothing is delivered externally.

## Merge and concurrency rules

Intake refreshes may update canonical completion data. They must not overwrite CRM-owned approval state when the missing-item signature is unchanged.

In the Jimmy prototype, the full approved snapshot is hashed: recipient, subject, body, exact resume URL, sorted item instructions, and Matter revision. A changed hash preserves the approval in history, marks the draft stale, and requires reapproval. Any debtor response atomically cancels the pending simulated reminder, communication, task, and schedule before staff reviews the remaining items.

Production must additionally preserve the prior approval as immutable audit history and, when missing items change without full completion:

1. keep the prior approval event for audit history;
2. mark an unsent schedule `stale`;
3. regenerate the email body from the new missing-item list;
4. require a new staff approval.

Production mutations should include an expected revision or ETag and return `409 Conflict` when stale.

## Fake-debtor parity contract

The deterministic parity run must prove:

1. exactly 10 unique fake matters and package IDs;
2. all recipients end in `@example.test`;
3. the cohort covers Chapter 7/13, self-employment, unemployment, nonfiling spouse, vehicle surrender, recent transfer, tax unavailability, unreadable replacement, and mobile/accessibility cases;
4. each matter has a bounded, fact-specific set of applicable missing items;
5. source document states remain received or needed as generated;
6. every missing field/document appears in the completion bundle and email body;
7. every Jimmy-branch Intake link opens `intake-demo.html` with the matching `packageId` selected;
8. CRM import produces 10 matter-level completion rows;
9. approving a schedule records actor, time, schedule, exact body, task, communication, and timeline event;
10. reload and feed re-import preserve the approval and schedule;
11. the Jimmy branch makes no external send request.
12. partial and final fake responses cancel the simulated schedule without changing the independent Document Review or Attorney Review decision state;
13. desktop and mobile browser tests prove exact-item focus, file feedback, partial resubmission, reload/two-tab persistence, and page-level overflow safety;
14. a second generation produces the same package, completion-item, and document IDs;
15. sender identity and provider preference persist while connection state remains explicitly not connected;
16. direct approval of edited recipient/subject/body stores and approves the exact visible snapshot, and rescheduling leaves one active schedule.

Run the full contract with:

```powershell
node scripts/run-10-client-completion-review-parity.mjs
```

## Production follow-ons

- Replace the Jimmy `packageId` selector with authenticated, expiring resume tokens on `intake.bkfastlane.com`.
- Separate delivery execution from approval and use a durable job queue.
- Add role-based permission checks for attorney, paralegal, and client.
- Store immutable audit events and exact outbound message snapshots.
- Add stale-revision handling when a debtor edits Intake after approval.
- Add delivery, bounce, retry, cancellation, and opt-out rules.

## Organization-mailbox delivery design

The browser-only Jimmy prototype may store the non-secret sender address and provider choice. It must not store OAuth access tokens, refresh tokens, client secrets, or mailbox credentials in local storage, source files, or GitHub Pages.

Recommended provider choice:

- If the firm mailbox is Google Workspace, use a server-side OAuth 2.0 connection and the Gmail API `users.messages.send` method. This sends through the authorized mailbox.
- If the firm mailbox is Microsoft 365, use Microsoft identity OAuth and Microsoft Graph `sendMail`. The default Graph behavior saves the message in Sent Items.
- A transactional provider is useful for a verified sending domain, but it is not the first choice when the requirement is specifically to send through and retain mail in the organization's real mailbox.

The production boundary should be:

```text
Reviewer edits preview
  -> CRM validates recipient, subject, body, schedule, reason, role, and current matter revision
  -> CRM persists immutable approved snapshot and idempotency key
  -> authenticated backend creates durable scheduled job
  -> delivery worker re-checks cancellation and current revision at send time
  -> Gmail API or Microsoft Graph sends through the authorized organization mailbox
  -> provider result updates queued/sent/failed status and immutable audit history
```

The scheduling endpoint should accept the approved snapshot, content hash, expected matter revision, schedule, timezone, sender-mailbox identifier, and workflow idempotency key. It should never accept or return an OAuth token. A cancellation endpoint must atomically mark the schedule canceled and prevent a worker that has not yet claimed the job from sending it.

Production connection sequence:

1. The organization chooses Google Workspace or Microsoft 365 and enters its sender address.
2. An authorized organization administrator completes the provider consent flow against a secure backend callback.
3. The backend stores the refresh credential encrypted and associates it with the organization and sender mailbox.
4. A test-message flow sends only to a designated internal test recipient and verifies Sent-folder behavior, From identity, SPF/DKIM/DMARC alignment, audit logging, cancellation, and retry handling.
5. Real client delivery remains disabled until operations approves the mailbox, authentication, data handling, and release approval.

Primary implementation references:

- [Gmail API: create and send email](https://developers.google.com/workspace/gmail/api/guides/sending)
- [Google OAuth 2.0 for web-server applications](https://developers.google.com/identity/protocols/oauth2/web-server)
- [Microsoft Graph: user sendMail](https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0)
