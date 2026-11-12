# Demo Presenter Quality and Source-Readiness Standard

**Standard version:** 1.0 · **Updated:** November 12, 2026

This policy governs each public `demos/pNNN-<slug>/` collection. Its letter grade measures **presenter and runbook quality**, not the success of live Dynamics, banking, telephony, AI or government integrations.

## Source-readiness gate

A public artifact set is **SOURCE READY** only after the originating repository has all eight inputs, grounded in its source files or owner-approved material:

| # | Required source | Evidence |
| --- | --- | --- |
| 1 | Authoritative origin | Identified repository/project, source revision and current approved storyline |
| 2 | Business scenario | Audience, fictional/sanitized persona, business problem, boundaries and intended outcome |
| 3 | Walkthrough | Ordered screens and actual or explicitly proposed click path |
| 4 | Owners/timing | Speakers, handoffs, main duration and requested alternative timeboxes |
| 5 | Presenter words | Opening, each section's goal, narration, visible highlights and **spoken transition** to the next |
| 6 | Truth/status | Implemented vs deployed vs verified vs staged; fallback at every unverified integration |
| 7 | Public safety | Private URLs/IDs/credentials/customer data removed or proved unnecessary |
| 8 | Publication authority | Explicit owner permission to publish the exact sanitized source-derived materials |

If **any** input is missing, record `NOT READY` in the source project or private review, identify missing information and **do not create or publicly release** a guessed or filler demo. This gate concerns **source content**, not whether a simulated demo's integrations are fully operational.

## P-number registry and URL contract

Use a unique, permanent **P identifier**, formatted `P010`, `P011` … (minimum three digits; do not truncate beyond `P999`). The owner reserves P identifiers; agents must never silently reassign or reuse them.

**SSA is reserved as the first example at P010.**

- Each demo collection is `demos/pNNN-<stable-kebab-slug>/`, e.g. `demos/p010-ssa-direct-deposit/`. The collection's root `index.html` is its **P010 overview**.
- Every **versioned HTML presenter, runbook, notes file, quality report, manifest, and collection README** receives its own P number with a matching lowercase path token. Example: `p011-presenter-40min.html`, `p014-runbook.md`.
- The P-numbered file and URL are the **canonical public artifact**. If an old URL exists, preserve it as an alias or link and do not break an established bookmark.
- Root library `/index.html` and shared policy documents are global infrastructure, not demo-specific P artifacts.
- Maintain a registry in the root `README.md`, in the demo's numbered `pNNN-manifest.json`, and (for future demos) a machine-readable global `artifact-registry.json`.
- A timed variant's HTML and Markdown notes have **different IDs** but the same duration. A new revision keeps its existing P ID and URL, while Git history records change; a genuinely new version receives a new P ID.
- Reserved IDs do not establish publication. Use `published`, `prepared`, or `historical` status, with evidence.

### Canonical SSA example

| ID | Artifact | Canonical path |
| --- | --- | --- |
| P010 | Demo collection | `demos/p010-ssa-direct-deposit/` |
| P011 | Current 40-minute presenter | `p011-presenter-40min.html` |
| P012 | Historical 13-minute presenter | `p012-presenter-13min.html` |
| P013 | Historical 52-minute presenter | `p013-presenter-52min.html` |
| P014 | Master public runbook | `p014-runbook.md` |
| P015 | 40-minute notes | `p015-presenter-40min.md` |
| P016 | 13-minute notes | `p016-presenter-13min.md` |
| P017 | 52-minute notes | `p017-presenter-52min.md` |
| P018 | Quality scorecard | `p018-quality.md` |
| P019 | Manifest | `p019-manifest.json` |
| P020 | Collection README | `p020-README.md` |

The collection may retain conventional `index.html`, `README.md`, `runbook.md`, `manifest.json`, and `quality.md` **as aliases**, but they must point to the numbered canonical artifact. Only the P-numbered canonical asset is graded/tracked.

## Exact runbook requirements

Every current `pNNN-runbook.md` must be the public narrative authority for the demo and contain:

1. **Title, P ID, target audience, use case, primary duration, version/assessment date and public-safe disclaimer.**
2. **Origin/source-readiness summary:** what originating artifact types exist and what was verified, without disclosing the private repo URL or environment.
3. **Business problem, persona and desired ending:** explicitly distinguish a safe unresolved ending from a completed transaction.
4. **Timed agenda:** one row per section containing section number, owner, goal, screen, duration; sum exactly equals primary timebox.
5. **Full section-by-section plan:** for **every section**, goal, what audience sees, actual click/navigation, copy-ready speaker words, exact transition/handoff, fallback, and implemented/deployed/accepted boundary.
6. **Operator/preflight:** who opens tabs and roles, recorded statuses and what to do if a required demo step fails.
7. **All versions and their P URLs:** HTML, timed companion notes and whether a variant is historical.
8. **Quality evaluation:** link to numbered scorecard, grade, percentage and explicitly named gaps.
9. **Business close:** verified outcome, what remains conditional, next speaker/customer action.

Do not promote a prepared feature to a live claim, invent an auto-generated Case or clear a banking verification indicator without evidence. For a historical version, preserve it with an obvious date/status warning and point to the current runbook.

## Exact HTML presenter requirements

Every `pNNN-presenter-<minutes>min.html` must be:

- Self-contained, valid UTF-8 HTML5, mobile-friendly, readable and keyboard-usable; avoid a build step or secrets.
- Clearly titled with the **P ID, demo, duration and version/historical status**.
- A **working, visible link to the same demo's numbered `pNNN-runbook.md` on every page**, and a link to the collection/home catalog.
- Linked to its **own numbered Markdown notes** and the other timebox options.
- Accurate to the originating runbook for its declared duration: section titles/order, owners, goals, audience highlights, click steps, speaker text, transitions and acceptance boundaries.
- Timed so all section minutes sum to its manifest duration. If a historical presenter uses another storyline, label it historical, do not silently claim equivalence.
- Navigable with Previous/Next and an active-section indicator; support print/copy of notes, explicit fallback and accessibility (contrast, focus and mobile).
- Static and presentation-only; do not execute Dataverse, banking, SSA, portal or live-system writes.
- Clear when chat routing, AI, Contact context, Case creation, human verification, banking, reports or other capability is prepared rather than verified.

**Required validation before publication:** HTML/inline-JS syntax, unique section IDs, duration sum, every numbered runbook/notes link, registry/manifest alignment, public safety scan, and desktop/mobile/keyboard tests when available. Mark visual/browser checks `NOT VERIFIED` if not performed; never fabricate passing QA.

## 100-point scoring

Grade each **current public runbook/artifact set** using actual source-and-output evidence. Record earned/max points and supporting justification.

| Dimension | Max |
| --- | ---: |
| Origin/source fidelity and evidence | 25 |
| Storyline, clear goals and transitions | 20 |
| Runbook completeness and presenter usefulness | 15 |
| Design, mobile accessibility and visual quality | 15 |
| Technical integrity, links, durations and variants | 10 |
| Public privacy and no-false-claims safeguards | 10 |
| Reusability, P registry, naming and maintenance | 5 |
| **TOTAL** | **100** |

**Score = sum of category earned points / 100 × 100%.** Round to the nearest whole percentage (for the fixed 100-point rubric, the sum is already an integer). Unverified browser/accessibility tests or old variants must reduce applicable points. A publication can meet the source gate while still needing artifact improvements.

| Percentage | Letter | Percentage | Letter |
| ---: | :---: | ---: | :---: |
| 97–100 | A+ | 93–96 | A |
| 90–92 | A− | 87–89 | B+ |
| 83–86 | B | 80–82 | B− |
| 77–79 | C+ | 73–76 | C |
| 70–72 | C− | 67–69 | D+ |
| 63–66 | D | 60–62 | D− |
| 0–59 | F | | |

**Minimum grade for a newly published collection: B− (80%).** Below 80%, improve the artifact before public release. A deployed/accepted system and a grade are separate concepts.

## Scorecard content and periodic reviews

The scorecard must show: P ID, source-readiness state (READY/NOT READY), assessment date, source artifacts assessed, a graded 7-row rubric totaling 100 possible points, **percentage AND letter**, explicit deductions, testing caveats, improvement actions and 4 separate statuses: `source_readiness`, `artifact_validation`, `public_publication`, `live_integration`.

Every materially edited presenter/runbook or new timebox requires a source-fidelity refresh and rescoring. A Git commit alone does not certify a published website.

## Authority and public release

This repository is public. Prepare a redaction report and obtain the owner's **explicit approval** for any future private-source-derived public release. Do not enable automated sync or treat source-repo approval as automatic publishing approval. The SSA collection here serves as the **completed presenter-content reference standard**, regardless of incomplete live integration steps.
