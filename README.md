# Demo Presenters

A reusable, **public presentation-only** library of interactive demo walkthroughs, timed alternatives, speaker runbooks and agent-publishing guidance.

**Repository:** [bradlaw76/bradlaw76-demopresenter](https://github.com/bradlaw76/bradlaw76-demopresenter) · **Planned GitHub Pages home:** https://bradlaw76.github.io/bradlaw76-demopresenter/

## Current demo library

| Collection | Main presenter | Timed versions | Master runbook | Source ready | Artifact grade |
| --- | --- | --- | --- | --- | --- |
| [**P010 — SSA Direct Deposit**](demos/p010-ssa-direct-deposit/) | [P010-1 · 40-minute HTML](demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html) | [P010-2 · 13 min](demos/p010-ssa-direct-deposit/p010-2-presenter-13min.html) · [P010-3 · 52 min](demos/p010-ssa-direct-deposit/p010-3-presenter-52min.html) | [P010-4 · Runbook](demos/p010-ssa-direct-deposit/p010-4-runbook.md) | **READY** | **89% · B+** |

### Current artifact tracking chart

| P ID | Demo | Artifact | Duration | Canonical artifact URL | Collection quality | Status |
| --- | --- | --- | --- | --- | --- | --- |
| **P010** | SSA Direct Deposit | Collection | — | [index.html](demos/p010-ssa-direct-deposit/index.html) | 89% · B+ | Current |
| **P010-1** | SSA Direct Deposit | Primary HTML presenter | 40 min | [p010-1-presenter-40min.html](demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html) | 89% · B+* | Current |
| **P010-2** | SSA Direct Deposit | HTML rehearsal | 13 min | [p010-2-presenter-13min.html](demos/p010-ssa-direct-deposit/p010-2-presenter-13min.html) | 89% · B+* | Historical |
| **P010-3** | SSA Direct Deposit | HTML detailed walkthrough | 52 min | [p010-3-presenter-52min.html](demos/p010-ssa-direct-deposit/p010-3-presenter-52min.html) | 89% · B+* | Historical |
| **P010-4** | SSA Direct Deposit | Master runbook | 40-min storyline | [p010-4-runbook.md](demos/p010-ssa-direct-deposit/p010-4-runbook.md) | 89% · B+ | Current |
| **P010-5** | SSA Direct Deposit | 40-minute notes | 40 min | [p010-5-presenter-40min.md](demos/p010-ssa-direct-deposit/p010-5-presenter-40min.md) | 89% · B+* | Current |
| **P010-6** | SSA Direct Deposit | 13-minute notes | 13 min | [p010-6-presenter-13min.md](demos/p010-ssa-direct-deposit/p010-6-presenter-13min.md) | 89% · B+* | Historical |
| **P010-7** | SSA Direct Deposit | 52-minute notes | 52 min | [p010-7-presenter-52min.md](demos/p010-ssa-direct-deposit/p010-7-presenter-52min.md) | 89% · B+* | Historical |
| **P010-8** | SSA Direct Deposit | Quality scorecard | — | [p010-8-quality.md](demos/p010-ssa-direct-deposit/p010-8-quality.md) | 89% · B+ | Current |
| **P010-9** | SSA Direct Deposit | Manifest | — | [p010-9-manifest.json](demos/p010-ssa-direct-deposit/p010-9-manifest.json) | 89% · B+* | Current |
| **P010-10** | SSA Direct Deposit | Collection guide | — | [p010-10-README.md](demos/p010-ssa-direct-deposit/p010-10-README.md) | 89% · B+* | Current |

*The 89% · B+ score evaluates the **SSA public presenter/runbook collection** based on originating source content. It is **not** a separate grade for every file, nor a certification that the underlying Dynamics integrations are live.*

[P010-8 assessment and deductions](demos/p010-ssa-direct-deposit/p010-8-quality.md) · [Machine-readable P registry](artifact-registry.json) · [Complete quality standard](docs/ARTIFACT_QUALITY_STANDARD.md)

## P-number convention

Each demo has one permanent collection ID and **collection-scoped artifact IDs** (for example P010-1, P010-2). The library begins with **P010** for SSA. The next unallocated **demo collection** ID is **P011**; The owner allocates one parent P number per demo; child numbers increment within that demo and are never reused.

```text
/
├── index.html                                # Global catalog
├── README.md                                 # This public registry / chart
├── artifact-registry.json                    # Global P-ID source of truth
├── AGENTS.md                                 # Publication and source-readiness rules
├── .github/copilot-instructions.md
├── docs/
│   ├── ADD_A_DEMO.md
│   └── ARTIFACT_QUALITY_STANDARD.md
├── templates/
│   ├── AGENTS.demo-presenter.md              # Use in future source repos
│   └── demo-manifest.example.json
└── demos/
    └── p010-ssa-direct-deposit/              # P010 collection
        ├── index.html                        # Collection landing page only
        ├── p010-1-presenter-40min.html          # Main presenter
        ├── p010-2-presenter-13min.html
        ├── p010-3-presenter-52min.html
        ├── p010-4-runbook.md                   # Current public runbook
        ├── p010-5-presenter-40min.md            # Main speaker notes
        ├── p010-6-presenter-13min.md
        ├── p010-7-presenter-52min.md
        ├── p010-8-quality.md                   # Percent + A+/A/…/F scorecard
        ├── p010-9-manifest.json
        └── p010-10-README.md
```

No redirects or legacy alias URLs are required. The **P-numbered files are the canonical versions**; future versions keep the same P ID when revised, and genuinely new artifacts receive the next unique child number under the same collection. The older unnumbered SSA paths are retired.

## Required source content and grading

**Do not generate a new public demo merely because a repo exists.** First confirm that its originating repo has a complete, owner-approved storyline: intended audience/persona, business problem, documented screen/click flow, speaker words, timed sections, exact transitions, truth boundaries, fallbacks, requested variants and explicit permission to release sanitized public content.

Only then prepare **a canonical runbook and the matching HTML presenters**. Every HTML must display a prominent link to its P-numbered runbook, a link to its own numbered notes, real section goals and transitions, mobile/keyboard-aware presentation controls, correct minutes and a preview/real-status distinction.

Every collection receives a [100-point, seven-category A+–F assessment](docs/ARTIFACT_QUALITY_STANDARD.md) with percentage and grade. New public demo content must clear **80% (B−)**, with unverified browser tests disclosed and no fabricated achievements. This evaluates presenter completeness, not live government or financial transaction readiness.

## Adding and maintaining demos

Use [the onboarding guide](docs/ADD_A_DEMO.md), [library agent instructions](AGENTS.md), [source-repository agent template](templates/AGENTS.demo-presenter.md), and [manifest example](templates/demo-manifest.example.json).

Private source repos remain the authority for implementation/deployment history. This repository contains **only reviewed, public-safe presentation artifacts**. An approved private source change is not an automatic public release. For every new publication, the owner must approve the sanitized public delta. No automatic cross-repo mirroring is configured.

## GitHub Pages

On this **public** repository choose **Settings → Pages → Deploy from a branch → main → /(root)** and Save. The expected URL is https://bradlaw76.github.io/bradlaw76-demopresenter/, but **a GitHub commit alone does not confirm Pages is live**. Check the Pages deployment status after enabling.

HTML presenters are standalone static files; they do not execute Dataverse, telephony, banking or customer-account operations.
