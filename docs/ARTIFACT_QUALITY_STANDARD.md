# Demo Presenter Quality and Source-Readiness Standard

**Standard version:** 1.1 · **Updated:** November 12, 2026

This policy governs each public `demos/p<demo>-<child>-<slug>/` collection. Its letter grade measures **presenter and runbook quality**, not the success of live Dynamics, banking, telephony, AI or government integrations.

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

Each **demo collection** gets one permanent P ID: `P010` for SSA Direct Deposit, then `P011` for the next independent demo, then `P012` and so on (at least three digits; expand naturally after P999).

**Artifacts within the same demo are children, not new demos.** Their permanent IDs use a dash and local sequence: `P010-1`, `P010-2`, `P010-3`, etc. These child IDs must appear in the canonical URLs and visible titles. A new release of an existing artifact retains its child ID; a genuinely different timebox or new file gets the next available child number **within that collection**.

- Collection URL: `/demos/p010-ssa-direct-deposit/` (P010, with `index.html` as its landing page).
- Canonical presenter: `p010-1-presenter-40min.html` (P010-1).
- Canonical runbook: `p010-4-runbook.md` (P010-4). Each HTML must link to this specific runbook and its own notes.
- Generic file naming: `p<collection-number>-<child-number>-presenter-<minutes>min.html`; `p<collection-number>-<child-number>-runbook.md`; `p<collection-number>-<child-number>-quality.md`; `p<collection-number>-<child-number>-manifest.json`; and `p<collection-number>-<child-number>-README.md`.
- New-demo example: `P011` at `demos/p011-example/`; its first presenter is `P011-1`, not P012.
- Library catalog/root `index.html` and shared global policies are infrastructure without a P ID. The demo collection landing page belongs to the parent P ID.
- No redirects, aliases, duplicate unnumbered copies or obsolete P011–P020 numbers from an earlier file-per-P design. This library is new; only canonical paths are required.

The owner allocates **collection IDs**. Agents may propose available child numbers only after checking the [global registry](../artifact-registry.json), [Markdown registry](P_REGISTRY.md), and the collection manifest; never silently duplicate or change an ID.

### Canonical SSA example

| ID | Artifact | Canonical path within `demos/p010-ssa-direct-deposit/` |
| --- | --- | --- |
| **P010** | Demo collection | `index.html` |
| **P010-1** | Current 40-minute presenter | `p010-1-presenter-40min.html` |
| **P010-2** | Historical 13-minute presenter | `p010-2-presenter-13min.html` |
| **P010-3** | Historical 52-minute presenter | `p010-3-presenter-52min.html` |
| **P010-4** | Master public runbook | `p010-4-runbook.md` |
| **P010-5** | 40-minute notes | `p010-5-presenter-40min.md` |
| **P010-6** | 13-minute notes | `p010-6-presenter-13min.md` |
| **P010-7** | 52-minute notes | `p010-7-presenter-52min.md` |
| **P010-8** | Quality scorecard | `p010-8-quality.md` |
| **P010-9** | Manifest | `p010-9-manifest.json` |
| **P010-10** | Collection overview | `p010-10-README.md` |

**Next distinct demo:** P011. **Next SSA artifact:** P010-11, if required. Each is reserved only when the owner approves that work.

## Exact runbook requirements

Every current numbered runbook must be the public narrative authority for the demo and contain:

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

Every `p<demo>-<child>-presenter-<minutes>min.html` must be:

- Self-contained, valid UTF-8 HTML5, mobile-friendly, readable and keyboard-usable; avoid a build step or secrets.
- Clearly titled with the **P ID, demo, duration and version/historical status**.
- A **working, visible link to the same demo's numbered `p<demo>-<child>-runbook.md` on every page**, and a link to the collection/home catalog.
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
