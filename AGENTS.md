# Demo Presenters — agent instructions

Read this file before modifying any presentation in this public repository.

## Purpose

Maintain a reusable GitHub Pages catalog of **presentation-only**, static, self-contained HTML demos with Markdown runbooks and clearly timeboxed alternatives. Do not use this public repository for source application code, customer environments, credentials, data records, screenshots containing private data, or solution deployment artifacts.

## Required structure

**One P ID per DEMO.** SSA is collection `P010` at `/demos/p010-ssa-direct-deposit/`. Its presenters and timeboxed notes have child IDs `P010-1`, `P010-2`, etc. The next distinct demo is `P011`, not the next file.

- Library catalog: `/index.html` (global infrastructure)
- Collection: `/demos/pNNN-<lowercase-kebab-slug>/index.html` (parent ID `PNNN`)
- Timed presenters: `pNNN-<child>-presenter-<minutes>min.html`, each with uniquely numbered `.md` notes
- Mandatory **standard documents for EVERY demo** (fixed suffix identifiers, not numeric children):
  - `PNNN-B` — `pNNN-b-runbook.md`: canonical full presenter runbook
  - `PNNN-Q` — `pNNN-q-quality.md`: narrative quality assessment and source evidence
  - `PNNN-G` — `pNNN-g-grade.md`: A+ through F letter grade and interpretation
  - `PNNN-S` — `pNNN-s-score.json`: machine-readable percentage and seven-category scoring
  - `PNNN-R` — `pNNN-r-readme.md`: per-demo overview, navigation and artifacts
  - `PNNN-M` — `pNNN-m-manifest.json`: version, artifact IDs, file paths and status metadata
  - `PNNN-I` — `pNNN-i-improvements.md`: concise criterion-by-criterion improvement plan
- `docs/P_REGISTRY.md` and `artifact-registry.json` must agree with the per-demo manifest.
- **Every HTML** visibly links to that demo's **B runbook**, its own notes, and the Q/G/S/I quality, grade, score and improvement references. Do not keep redirects, legacy aliases or duplicate unnumbered artifacts in this new library.

See [the authoritative standard](docs/ARTIFACT_QUALITY_STANDARD.md) for exact section, HTML, scoring, source-readiness and publication requirements.

## Public-data gate — mandatory

This is a **public repository**. Treat all source project material as private until proven safe for release.

1. Identify the exact source project, branch and presenter version; do not infer that a local file is current.
2. Generate a **public-safe copy**, leaving the authoritative private source unchanged.
3. Remove internal Dynamics/Dataverse/Power Pages environment URLs, tenant/org IDs, app IDs, record GUIDs, user email addresses, credentials, private repository URLs, account numbers and other nonpublic details. Fictional names/references should be clearly labeled.
4. Prefer new sanitized public runbooks over copying private deployment handoffs, operational logs, auth settings, administrative screenshots or technical manifests.
5. Do not imply a demo capability is live if its source, deployed state and user acceptance are not evidenced. Include clearly labeled fallbacks for incomplete integrations.
6. Validate HTML syntax and local navigation, links, all durations, per-variant MD companions, and the manifest/catalog consistency.
7. **Require explicit owner approval for each public publish/update** after displaying what will be exposed and where. Approval to edit a private source repo is not automatic permission to publish it.
8. GitHub source changes must not trigger automatic public deployment or mirroring. Do not install scheduled actions or auto-publish workflows without a separate explicit request and approval.

## Editing behavior

Preserve existing slides/HTML behavior, speaker transitions, visual structure and source citations where public-safe. Update only the requested demo folder and catalog metadata. Do not overwrite unrelated presenters.

When source resides in another repository, use read-only access to gather current source; do not merge the source repo or edit its live environment. If linking back to a private project, link **from** the private README to the public page; the public page should not expose the private URL.

Use existing Git branches and pull-request review practices unless explicitly authorized otherwise. Report the exact commit, public URLs, files changed, static validation results and whether GitHub Pages is actually enabled/live. Never assert deployment solely from a Git commit.

## Adding a new source repository

Share [templates/AGENTS.demo-presenter.md](templates/AGENTS.demo-presenter.md) with the source repo team. Incorporate its guidance into the source repo's current AGENTS.md rather than overwriting its security, deployment or handoff rules. See [docs/ADD_A_DEMO.md](docs/ADD_A_DEMO.md).

## Site setup boundary

This repository's content can be published through the GitHub connector. GitHub Pages settings may still require the owner to enable Pages on `main` / root. The agent must check actual Pages status rather than claiming the live site works based on file existence.

## Mandatory source review, grading and publication workflow

1. Review the originating repo **read-only** using the connected GitHub account or authorized local source reviewer ([source review guide](docs/SOURCE_REVIEW.md)). The public Pages site itself cannot read private repos; never store source credentials or documents here.
2. Confirm **all eight source-readiness inputs**: authoritative revision, business scenario, ordered walkthrough, owner/timeboxes, speaker words and transitions, actual/conditional status, privacy safeguards and owner permission for this specific public release. Stop with `SOURCE_NOT_VERIFIED` / `SOURCE_NOT_READY` rather than inventing missing content.
3. Build a public-safe, self-contained HTML presenter for each requested timebox. Use real stage goals, visible highlights, exact clicks, speaker scripts, next-speaker transitions, safe fallbacks, true live/preview status and accurate durations. Link to **PNNN-B** and own numbered notes.
4. Build the complete **PNNN-B** runbook: agenda sum, objectives, personas, sections and owners, on-screen steps, talk tracks, exact transitions, permissions, fallback, source-readiness status and quality links.
5. Grade the artifact set on the published **100-point, seven-category rubric**. Publish the full **Q** scorecard, separate letter **G** and numeric **S** results, the **R** overview, **I** improvement plan and authoritative **M** manifest. Include earned/max, percentage, A+–F plus/minus letter, evidence, caveats and independent `live_integration` state.
6. New demo content must score at least **80% / B−** and pass the source-readiness gate. The **I improvement plan** has seven headings with earned/max and exactly two short bullets per criterion: **Why** a deduction occurred and **Improve** the next action. Every Q/G/S result links to I. A grade applies to the **demo's public artifact set**, not to every file separately and not to whether Dynamics/SSA integrations work.
7. Require explicit owner approval for the actual sanitized public release. Do not mirror a private repository, upload its raw docs, schedule background sync, merge its work, or perform live Dataverse/portal writes.
8. Verify exact GitHub readback, P registry/manifest, valid links, HTML/JS parse and browser/mobile/keyboard tests when available. Disclose if browser checks or GitHub Pages activation remain unverified. Do not claim public-site success from a source commit alone.

**Current reference:** P010 SSA Direct Deposit is a completed presentation **content** example. Its source-informed Case/Contact claims are carefully qualified; this does not make all live integrations accepted. The next independent demo is P011, using P011-B/Q/G/S/I/R/M and numeric child variants P011-1, P011-2, etc.
