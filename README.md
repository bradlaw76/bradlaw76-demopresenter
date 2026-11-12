# Demo Presenters

A central, **public presentation-only** library for interactive demo walkthroughs, speaker runbooks, timing variants and reusable demo instructions.

**Repository:** [bradlaw76/bradlaw76-demopresenter](https://github.com/bradlaw76/bradlaw76-demopresenter)

**GitHub Pages (when enabled):** https://bradlaw76.github.io/bradlaw76-demopresenter/

## Current demo library

| Demo | Main presenter | Alternative presentations | Runbook |
| --- | --- | --- | --- |
| **SSA Direct Deposit** | [40-minute interactive](demos/ssa-direct-deposit/index.html) | [13-minute rehearsal](demos/ssa-direct-deposit/presenter-13min.html) · [52-minute detailed](demos/ssa-direct-deposit/presenter-52min.html) | [Presenter runbook](demos/ssa-direct-deposit/runbook.md) |

Each variant has a Markdown companion in the same demo folder. The source project repository remains separate and may be private. Only sanitized, approved presenter content is published here.

## Standard layout

```text
/
├── index.html                         # Public catalog home
├── README.md                          # Library documentation
├── AGENTS.md                          # Safe publication/maintenance rules
├── .github/copilot-instructions.md    # Agent discovery pointer
├── docs/
│   └── ADD_A_DEMO.md                  # New-project onboarding and naming policy
├── templates/
│   ├── AGENTS.demo-presenter.md       # Copy into NEW source repo's AGENTS instructions
│   └── demo-manifest.example.json     # Manifest fields and version contract
└── demos/
    └── <demo-slug>/
        ├── index.html                 # Primary/current interactive version
        ├── runbook.md                 # Current business storyline and transitions
        ├── README.md                  # Demo-specific overview
        ├── manifest.json              # Machine-readable version catalog
        ├── presenter-<N>min.html      # Alternative timed interactive version
        └── presenter-<N>min.md        # Companion timeboxed notes
```

## Naming contract

- Demo folder: **lowercase kebab-case**, stable subject name, e.g. `ssa-direct-deposit`, `foia-case-categorization`, `benefit-letter-voice`.
- Main interactive presenter: always `index.html`. It is the canonical version linked from the catalog and is versioned by the manifest's `default_variant`.
- Master public runbook: always `runbook.md`. The detailed private engineering runbook may remain in the source repository; do not expose it here verbatim.
- Alternative timeboxed versions: `presenter-13min.html`, `presenter-52min.html`, etc. Matching Markdown notes: same basename + `.md`.
- Primary presenter notes: `presenter-40min.md` for a 40-minute main version, with the actual time declared in `manifest.json`.
- Every demo includes `manifest.json` with `slug`, `title`, `default_variant`, and `versions`.
- Avoid HXXX IDs, timestamps, customer names, branch names or project environment IDs in public **file and folder paths**. Those belong in the private source history if required.

## Adding or updating demos

Follow [docs/ADD_A_DEMO.md](docs/ADD_A_DEMO.md). Agents must read [AGENTS.md](AGENTS.md) first.

**Approval boundary:** This repository is public. An agent may prepare or validate a sanitized update, but **must not publish new private-source-derived content to this public repository without explicit owner approval for that public change**. Review generated files for authentication/identity references, real data, private URLs, account IDs, tokens and environment-specific information. No unattended mirroring.

For a new project, copy the relevant instructions from [templates/AGENTS.demo-presenter.md](templates/AGENTS.demo-presenter.md) into the project's existing agent guidance, retaining its own policies. Do not replace existing safety or deployment instructions.

## Pages setup

In **Settings → Pages**, select **Deploy from a branch → main → /(root)** and Save. Pages may require an explicit enablement action by the repository owner. The published address is the URL above when GitHub reports a successful Pages deployment.

All listed presentations are self-contained HTML and may also be opened as downloaded local files. They do not perform Dataverse, telephony, payment or account operations.
