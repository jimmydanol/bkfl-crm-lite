# Client Portal — Brief for the Intake Project (formerly "Upload Center")

Paste-ready prompt for the intake mockups project. Everything below reflects decisions
already made on the CRM side (see india-handoff-checklist.md); the intake work should
implement them, not reopen them.

---

## PROMPT (copy from here down)

We're adding the post-submission **Client Portal** to the intake window (this is the settled name — use it everywhere; the working name was "Upload Center"). Context: the CRM
side (bkfl-crm-lite) is done through the full document-review loop — when the law firm
reviews a submitted intake, their rejections and rulings build a "chase list" of missing
documents, and the firm's follow-up emails carry a secure upload link. That link opens the
page you're about to mock. Build it in this project's existing mockup style (same branding,
components, and tone as the intake form pages).

### Decisions already made — do not redesign these

1. The Client Portal lives in THIS app as a second token-gated route (`/portal/{token}`) —
   not a separate app. It reuses the intake's upload components and styling. It behaves like
   a password-reset page: nothing renders without a valid token.
2. The intake FORM locks permanently at submission. The Client Portal is the only debtor
   doorway afterward. Never link back into the form.
3. Auth = magic link + one lightweight identity check: date of birth OR SSN last-4 (data
   the debtor gave at intake). No passwords, no account login.
4. The page shows ONLY the outstanding items (served live from the CRM) — one upload slot
   per requested item. No free-form "upload anything" dropzone: files must land in a
   specific requested item so they arrive in the CRM pre-categorized.
5. Scope is upload-only. The page may display item names and the firm's notes, never any
   intake answers or case data.
6. Tokens are per-lead, expiring; every follow-up email carries a fresh link; the link is
   revoked when the case reaches Ready for Petition Prep. (Mockup can note this in a
   footer; no real token logic needed.)

### Pages to mock (3 states)

**1. Identity gate** — firm-branded header ("McCune Legal"), one field:
"To protect your information, confirm your date of birth." Friendly error state for a
mismatch. A reassurance line: "This is a secure, private link that only works for you."

**2. Client Portal (main page)** — greeting: "Hi Linda — here's what we still need to keep
your case moving." Then the outstanding list, one card per item, each with:
- Item name and the firm's note, verbatim (this is the firm's rejection note or the
  debtor's own earlier reason — see demo data)
- An upload button/slot (multiple files allowed per item)
- "I can't provide this" → opens a reason picker: "I'll send it later", "I don't have a
  copy", "This doesn't apply to me", "I didn't file", "I haven't taken it yet"
- Item states: waiting / uploaded ("Got it — your law firm will review") / reason given
A progress line ("1 of 3 done"), and partial progress is fine — same link resumes where
they left off.

**3. Confirmation** — after uploads: "Got them. Your law firm will review everything and
follow up if anything else is needed." Warm, fresh-start tone consistent with the intake
emails. No promises of approval.

### Demo data (mirrors the CRM's Linda Tran seed)

1. **Pay stubs — last 6 months** — note: "You told us you'd send these later."
2. **Bank statements — 6 months** — note: "Only 3 of 6 months received — we need all six."
   (this is a firm rejection note, show it verbatim)
3. **Credit counseling certificate** — note: "Not taken yet — here's how to complete it."

### Wording change on the existing submission screen

Where the intake currently tells the debtor their intake is complete/locked, change to:
"Your intake is submitted and locked — nothing more to fill out. If we need any documents,
we'll email you a secure link to your client portal, and it stays open until we have everything."

### API contract the mock should visually match (build later, not now)

- `GET /upload-session/{token}` → `{ firstName, firmName, items: [{ id, name, note, status }] }`
- `POST /upload/{token}/{itemId}` (file) · `POST /reason/{token}/{itemId}` (reason code)
- Uploads flow into the CRM as AI-screened checklist items; the CRM's 5:00 a.m. batch
  creates the firm's review task. Nothing on this page needs to know that — listed so field
  names and shapes line up.

### Tone rules

Debtor-facing text is natural case and firm-voiced (no product terms like "Lead" or
"Task"). Warm but plain: this audience is stressed; the page should feel like a short
to-do list, not a portal.

### Cross-check note (2026-07-13, verified programmatically)

The document catalogs are in perfect sync: 32 doc_types on each side, ids match
1:1 both directions, T1/required tiers agree, and the five skip-reason codes are
identical. Rule going forward: **the doc_type id is the shared contract between
the two windows; debtor-facing and firm-facing labels may differ per audience.**

One doc update needed in THIS repo: DOC-LOGIC.md §4's "Follow-up behavior" column
predates the CRM's ruling model (built 2026-07-12). Correct behavior now:
`dont_have_copy`, `doesnt_apply`, and `didnt_file` do NOT self-close or auto-chase —
they wait for a firm ruling in the CRM (Excuse closes the item; Keep Chasing puts it
on the follow-up list). `will_send_later` and `not_taken_yet` still chase automatically.
Debtor-facing behavior in the intake is unchanged; only the described downstream
handling needs the correction.

### Link model — settled 2026-07-13

ONE secure link per follow-up email, opening the Client Portal with every outstanding
item. DOC-LOGIC's per-item single-link note (7/10) is superseded — update it alongside
the §4 correction above.
