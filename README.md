# Demo Presenters — Public Presentation Library

Reusable, **public presentation-only** walkthroughs created from source-repository materials after authorized read-only review, privacy review and explicit approval to publish.

**Repository:** [bradlaw76/bradlaw76-demopresenter](https://github.com/bradlaw76/bradlaw76-demopresenter)  
**Live GitHub Pages home:** https://bradlaw76.github.io/bradlaw76-demopresenter/

**Verified:** November 12, 2026 — homepage and all 14 P010 registry-listed artifacts returned HTTP 200. Future commits still require fresh Pages readback; a GitHub commit alone is not deployment proof.

## Current demo

| Demo collection | Main presenter | Alternatives | Runbook | Artifact grade | Improve |
| --- | --- | --- | --- | --- | --- |
| **[P010 · SSA Direct Deposit](demos/p010-ssa-direct-deposit/)** | [P010-1 · 40 min](demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html) | [P010-2 · 13 min](demos/p010-ssa-direct-deposit/p010-2-presenter-13min.html) · [P010-3 · 52 min](demos/p010-ssa-direct-deposit/p010-3-presenter-52min.html) | [P010-B](demos/p010-ssa-direct-deposit/p010-b-runbook.md) | [P010-G · B+](demos/p010-ssa-direct-deposit/p010-g-grade.md) · [P010-S · 89%](demos/p010-ssa-direct-deposit/p010-s-score.json) | [P010-I](demos/p010-ssa-direct-deposit/p010-i-improvements.md) |

The grade measures source-grounded public presenter/runbook quality, **not** whether a live SSA, banking, chatbot or Dataverse integration is operating. The older 13- and 52-minute editions are labeled historical.

## Permanent P identifier standard

**One parent ID per demo**: SSA is **P010**; a genuinely new demo would be **P011** (after owner assignment and checking the registry).

- Timed presenters and notes have child IDs **P010-1**, **P010-2**, etc.
- Every demo must also have these seven fixed-suffix standard artifacts:

| Suffix | File pattern | Meaning |
| --- | --- | --- |
| **B** | `pNNN-b-runbook.md` | Complete runbook; objectives, screens, spoken lines, transitions, fallbacks |
| **Q** | `pNNN-q-quality.md` | Qualitative 100-point rubric with seven criteria |
| **G** | `pNNN-g-grade.md` | A+–F letter grade, with plus/minus bands |
| **S** | `pNNN-s-score.json` | Percentage and earned/max points |
| **I** | `pNNN-i-improvements.md` | **Why** and **Improve** bullets for all seven criteria |
| **R** | `pNNN-r-readme.md` | Per-demo README and artifact links |
| **M** | `pNNN-m-manifest.json` | Machine-readable catalog of versions, IDs and statuses |

Example: P010-B / P010-Q / P010-G / P010-S / P010-I / P010-R / P010-M. These are **not separate demo IDs**. No redirects or duplicate unnumbered copies are part of this new library.

## Standard folder structure

```text
/
├── index.html                          # Library homepage
├── artifact-registry.json              # Global demo/child/standard P IDs
├── AGENTS.md                           # Mandatory source-review and publication rules
├── docs/
│   ├── ARTIFACT_QUALITY_STANDARD.md    # Eight source gates, runbook/HTML contract, grading
│   ├── SOURCE_REVIEW.md                # Authorized read-only source-repository access
│   ├── P_REGISTRY.md                   # Human-readable canonical IDs/URLs
│   └── ADD_A_DEMO.md                   # Onboarding instructions
├── templates/
│   ├── AGENTS.demo-presenter.md        # Reusable instructions for a source repo
│   └── demo-manifest.example.json      # Template for future demo manifests
├── scripts/
│   └── review-source.cjs               # Local read-only source evidence inspection
└── demos/
    └── p010-ssa-direct-deposit/
        ├── index.html                   # Collection home (P010)
        ├── p010-1-presenter-40min.html  # P010-1 current
        ├── p010-2-presenter-13min.html  # P010-2 historical
        ├── p010-3-presenter-52min.html  # P010-3 historical
        ├── p010-5-presenter-40min.md    # P010-5 notes
        ├── p010-6-presenter-13min.md    # P010-6 notes
        ├── p010-7-presenter-52min.md    # P010-7 notes
        ├── p010-b-runbook.md
        ├── p010-q-quality.md
        ├── p010-g-grade.md
        ├── p010-s-score.json
        ├── p010-i-improvements.md
        ├── p010-r-readme.md
        └── p010-m-manifest.json
```

Retired intermediate P010 numeric IDs are **not reusable**. The next unallocated numeric child must be verified against the registry.

## Source review and public-release gates

1. **Inspect the originating repository with authorized read-only access** and establish a current source revision, audience, business case, screens, section goals, owner, speaker text, timings, transitions and actual-vs-proposed status.
2. Pass all **eight required source inputs** and create public-safe versions—no private repo URLs, credentials, tenant/environment IDs or real restricted data.
3. Build each HTML timebox with a prominent link to the same demo's **B runbook** and its own numbered notes.
4. Produce Q/G/S quality evidence and **I improvement plan**, where every criterion has concise **Why** and **Improve** bullets.
5. Request the owner's explicit approval for the specific public content before publishing. Source project changes never trigger automatic public mirroring.
6. Validate static HTML, JS, links, durations and manifest/registry; report visual/mobile and Pages status honestly.

New releases require at least **80% / B−** on the [grading rubric](docs/ARTIFACT_QUALITY_STANDARD.md), independent of live-system acceptance.

## Start here

- [Add a new demo](docs/ADD_A_DEMO.md)
- [Exact HTML/runbook/grade requirements](docs/ARTIFACT_QUALITY_STANDARD.md)
- [Read originating repository docs](docs/SOURCE_REVIEW.md)
- [P registry](docs/P_REGISTRY.md)
- [Reusable source-repo agent instructions](templates/AGENTS.demo-presenter.md)

**Pages status:** Live as checked November 12, 2026. For configuration, use [Settings → Pages](https://github.com/bradlaw76/bradlaw76-demopresenter/settings/pages); verify each new update at the live URL.
