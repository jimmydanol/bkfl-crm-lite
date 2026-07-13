# Changelog

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
