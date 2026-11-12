# Add a new demo to the Demo Presenters library

This page defines a repeatable process for any source repository (Dynamics, FOIA, Power Platform, Copilot Studio, business process, etc.).

## 1. Choose a permanent slug

Name the folder by stable subject, not customer, date, ticket or developer:

- `ssa-direct-deposit`
- `foia-case-categorization`
- `contact-center-voice`

Never rename a public slug casually; stable Pages URLs may be bookmarked.

## 2. Prepare presenter inputs in the source repository

Maintain the authoritative full runbook and editable source there. Use a top-level `docs/demo/` folder if the repo has no established convention; otherwise retain its current document structure. Record the private source branch/revision and the required time-box variants. **Do not copy private source controls, environment IDs, endpoint credentials or real customer data to this repository.**

In the source project, add a reference to the library using the [agent template](../templates/AGENTS.demo-presenter.md). **Do not replace the source repo's existing AGENTS.md or security policy**.

## 3. Build the public folder

Create:

```text
demos/<slug>/
├── index.html                  # Main/current interactive presenter
├── runbook.md                  # Public-safe full storyline and handoffs
├── README.md                   # Demo landing + version links
├── manifest.json               # Metadata and time-box routes
├── presenter-<N>min.html       # Every alternative timing
└── presenter-<N>min.md         # Notes for each timing
```

If the main version is 40 minutes, its notes should be `presenter-40min.md`, not a second `presenter-40min.html`. `index.html` must remain the single canonical main URL.

Copy [manifest example](../templates/demo-manifest.example.json) and fill its fields with **relative** paths. A variant `id` should match the lowercase duration suffix, e.g. `13min`, `40min`, `52min`.

## 4. Public-safety review

Before publishing inspect **all** HTML, Markdown, metadata, image paths and external links for:

- Actual private GitHub repo URLs, internal implementation paths or private pull requests
- Microsoft environment names/URLs, tenant IDs, organization/app/user IDs or Dataverse GUIDs
- Authentication configuration, secrets, tokens, account numbers, identity answers, credentials
- Real person/customer/tenant data, actual records or screenshots with restricted information
- Incorrect claims of live agent transfer, identity verification, financial updates or accepted integration

Prefer clearly labeled fictional cases and masked example data. Public vendor documentation links may remain when useful. Do not publish raw private runbooks/hand-off histories. Require an explicit owner acceptance of the public-facing content.

## 5. Validate

- HTML parses and opens independently, without remote project credentials.
- All alternate durations are correct and clearly marked; the main runbook and latest presenter have the same story, section boundaries and transitions.
- All relative links, catalog cards and `manifest.json` paths resolve.
- Every timeboxed HTML has a same-name Markdown notes file; `index.html` has `presenter-<main-duration>min.md`.
- The site shows genuine existing capabilities as implemented/deployed/accepted separately from previews.

## 6. Obtain owner approval and publish

**Owner approval is required each time private source material is copied or updated in this public repository.** Confirm the exact demo slug, versions, public URLs and redaction report. Commit only approved, sanitized files; verify remote readback. Then update root `index.html` and root `README.md` catalog entries.

Do not automatically sync future changes. A source project can propose an update by passing the current source revision and a publication request, but a new public commit still needs owner approval.

## 7. Link back from the source repo

Add references in the original source repo's README, demo runbook, and presenter guide only after owner permission:

```md
## Interactive demo presentations
- [Demo presenter library](https://bradlaw76.github.io/bradlaw76-demopresenter/)
- [<Demo> — current presenter](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/<slug>/)
- [<Demo> — public runbook](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/<slug>/runbook.md)
```

The private repo links **out** to public pages. Public pages should not link **back** to a private source.

## 8. GitHub Pages

On this public repository: **Settings → Pages → Deploy from a branch → main → /(root) → Save**. A GitHub commit is not proof that Pages is enabled; verify the deployment status or open the public URL.

## Example: SSA Direct Deposit

- [Main 40-minute presenter](../demos/ssa-direct-deposit/index.html)
- [13-minute rehearsal](../demos/ssa-direct-deposit/presenter-13min.html)
- [52-minute detailed walkthrough](../demos/ssa-direct-deposit/presenter-52min.html)
- [Current public runbook](../demos/ssa-direct-deposit/runbook.md)
