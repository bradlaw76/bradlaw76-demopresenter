# Reusable demo-presenter integration — add to a SOURCE repository's AGENTS.md

> **Template only.** Merge these instructions into the source repository's existing `AGENTS.md` or linked agent policy; never replace current security, production deployment, or handoff instructions.

## Public presenter library

The external public presenter library lives at:

- Repository: `bradlaw76/bradlaw76-demopresenter`
- Site (when Pages is enabled): `https://bradlaw76.github.io/bradlaw76-demopresenter/`

This project may have a private source demo script/runbook. The **public** presenter uses a sanitized, presentation-only copy under `demos/<slug>/` in the library repo.

## Publishing contract for this source repository

1. Keep this source project as the authority for implementation status, scripts, review evidence, approvals and full operational runbooks.
2. For any new presenter or update, first identify the canonical source revision and the requested demo slug.
3. Prepare public-safe static HTML and public runbook without publishing secrets, app/tenant IDs, real data, Dynamics/Power Pages environment URLs or internal project links.
4. Use standard library names: `index.html`, `runbook.md`, `README.md`, `manifest.json`, `presenter-<N>min.html` and `presenter-<N>min.md`.
5. Preserve the verified actual story, section goals, speaking notes and transitions. For unaccepted integrations, include clearly labeled rehearsal fallbacks.
6. Provide the owner with a short source revision + public-content/redaction summary and request **explicit permission to update the public library**.
7. After approval, publish only the sanctioned public copy to the library and verify readback. No automatic cross-repo publishing or syncing without separately authorized process.
8. Update this private repo's README/runbook links to the public presenter only with owner permission; don't insert private repo links into public HTML.

## Prompt for a new demo agent

"Read the current source repo AGENTS and demo runbook, then follow the central Demo Presenters library contract. Prepare a sanitized public presentation folder for `<demo-slug>` with current `index.html`, `runbook.md`, `manifest.json`, and requested `presenter-<N>min` timeboxes. Do not expose private source or perform live operations. Validate links and syntax. Show the publication/redaction summary and request explicit owner approval before committing into the public library."

Project deployment permissions never imply permission to publish source artifacts publicly.
