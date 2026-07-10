# Changelog

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
