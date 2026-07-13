# Changelog

## 2026-07-13 - Incomplete-intake completion management

- Reframed Document Review as one matter-level completion queue instead of one row per uploaded document.
- Generated ten realistic fake matters at 85-95% completion, each missing at least one essential field and two documents.
- Added consolidated missing-item email previews with Intake return links, schedule selection, attorney/paralegal approval, cancellation, and simulated-only delivery state.
- Routed each reminder to the matching editable fake Intake record; completing it cancels the simulated reminder and advances the matter to attorney review.
- Preserved approved schedules and audit events across feed re-imports when the missing-item signature is unchanged.
- Replaced the completed-package parity loop with an incomplete debtor-entry parity loop and developer contract.

## 2026-07-13 - Ten-client Intake-to-attorney-review parity

- Expanded the canonical fake-debtor run and CRM feed contract from three to ten completed fake clients.
- Routed each completed fake document into the CRM Document Review queue as `pending_review`, with an initial immutable submission version and receipt event.
- Added a one-command parity runner that executes fake-client generation, rebuilds the feed, and verifies the bridge and attorney-review contract.

## 2026-07-13 - Branch-only document review workflow

- Added a global **Document Review** navigation tab for the law-firm queue.
- Added explicit review views for awaiting review, replacement needed, resubmitted, awaiting upload, approved, and excused requests.
- Added reason-required replacement and excusal decisions, tracked follow-up, simulated resubmission, version history, and decision history for the fake-data prototype.
- Added `docs/document-review-workflow.md` with the production-oriented state machine, roles, data objects, API boundary, concurrency rules, audit events, and acceptance scenarios.
- Kept the change on Jimmy's GitHub Pages source branch; no upstream/default-branch files were changed.

## 2026-07-10

### Organization name synchronization (`65cb128`)

- Saving the organization name in CRM Settings now updates the organization
  label in the CRM sidebar footer.
- The Jimmy Intake demo reads the same `bkfl_lite_org_v1` browser setting, so
  its header name, initials, and page title update from the CRM setting.
- Same-tab and cross-tab change listeners keep the fake-data review surfaces in
  sync without requiring a second save.

### Organization logo synchronization (`ba44119`)

- CRM Settings now accepts PNG and JPG logos, verifies that the selected file is
  a valid image, and resizes/compresses it before saving to browser storage.
- The saved logo appears in the CRM sidebar footer and Jimmy Intake header, with
  organization initials as the fallback when no valid logo is available.
- Settings now shows actionable file, image, read, and browser-storage errors
  instead of silently failing.

These features are for the Jimmy fake-data GitHub Pages workflow. Browser-local
storage is not approved for real client data.
