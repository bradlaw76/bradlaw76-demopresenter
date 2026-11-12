# Demo Presenters — agent instructions

Read this file before modifying any presentation in this public repository.

## Purpose

Maintain a reusable GitHub Pages catalog of **presentation-only**, static, self-contained HTML demos with Markdown runbooks and clearly timeboxed alternatives. Do not use this public repository for source application code, customer environments, credentials, data records, screenshots containing private data, or solution deployment artifacts.

## Required structure

- Catalog root: `/index.html`
- Each demo: `/demos/<lowercase-kebab-slug>/`
- Primary presenter: `index.html`
- Public full runbook: `runbook.md`
- Per-demo landing/notes: `README.md`
- Standard variants: `presenter-<N>min.html` and `presenter-<N>min.md`
- Metadata: `manifest.json`, including an explicit `default_variant`, `versions`, `duration_minutes`, and relative URLs

Do not create duplicate repos or renumber workstreams just to publish a new timebox. Reuse the same demo folder, update `manifest.json` and the catalog, and preserve existing stable URLs.

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

## Mandatory P-ID and quality contract (supersedes earlier unnumbered examples)

Read **[docs/ARTIFACT_QUALITY_STANDARD.md](docs/ARTIFACT_QUALITY_STANDARD.md)** before generating, changing, grading or publishing a demo. The [global registry](artifact-registry.json) is authoritative for existing IDs and the next free allocation. **The owner reserves new P numbers; agents never choose, reuse, or silently renumber them.**

- **P010** is the SSA Direct Deposit reference collection; its canonical folder is `demos/p010-ssa-direct-deposit/`.
- Every collection and demo-specific artifact has a unique permanent **P###** ID embedded in its canonical URL. The collection's `index.html` belongs to its collection P ID; each presenter, runbook, notes, quality file, manifest and collection guide gets a separate P ID.
- Canonical names: `pNNN-presenter-<minutes>min.html`, `pNNN-presenter-<minutes>min.md`, `pNNN-runbook.md`, `pNNN-quality.md`, `pNNN-manifest.json`, and `pNNN-README.md`.
- **No redirects, compatibility aliases or duplicate unnumbered copies are needed** for this new library. Use only canonical P-numbered destinations and keep the catalog, global registry, and collection manifest consistent.
- Do not generate any public HTML or runbook before the **eight-item source-readiness gate is READY**, meaning the originating project actually contains the use case, speakers, approved story, screen path, timing, words, transitions, truth boundaries, privacy clearance and public-publish permission. Do not invent missing scenarios.
- Each public **runbook** must document the exact goal, duration, audience highlight, clicks, spoken words, transition, fallback and acceptance boundary for *every* section, plus a time-summed agenda, source-readiness and graded quality reference.
- **Every HTML version must visibly link to its own numbered runbook and numbered speaker notes**, show its P ID and duration, and contain navigable timed sections, actions, transitions, speaker words and fallbacks. Historical alternatives must say that they may differ from the current storyline.
- Score each completed collection and runbook on the documented **100-point rubric** and publish a `pNNN-quality.md` scorecard with earned points in seven categories, percentage and **A+ through F** letter, source-readiness status, and specific unverified tests. Minimum publishable quality is **80% / B−**. A high artifact grade is NOT proof of live integration acceptance.
- Before declaring success, verify every relative URL and P ID from both registry and manifest, HTML syntax, exact timing, display runbook links, privacy constraints and any obtainable browser/mobile accessibility checks. When an external Pages deployment is unverified, label it **committed**, not **live**.

Earlier sections of this policy describe the original unnumbered folder layout; **these P-numbered rules supersede those names**.
