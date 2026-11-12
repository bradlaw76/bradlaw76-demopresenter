# Demo Presenter Quality and Source-Readiness Standard

**Standard version:** 1.2 · **Updated:** November 12, 2026

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

## Demo IDs, standard artifacts and canonical URLs

**One parent P ID per demo.** SSA Direct Deposit is **P010** at `demos/p010-ssa-direct-deposit/`; the next independent demo is **P011**, regardless of how many files SSA contains. Each timed HTML presenter and its separate notes use numbered child IDs such as `P010-1`, `P010-2` or `P010-5`. A revision of the same artifact retains its assigned ID.

Every demo collection must produce these **fixed-suffix standard artifacts**. These IDs do not consume numeric child IDs:

| Suffix ID (SSA example) | Required canonical filename | Purpose |
| --- | --- | --- |
| **P010-B** | `p010-b-runbook.md` | Full public runbook: scenario, sections, on-screen actions, spoken lines, handoffs and fallbacks |
| **P010-Q** | `p010-q-quality.md` | Seven-category qualitative review, source grounding, earned/max, evidence and deductions |
| **P010-G** | `p010-g-grade.md` | Letter grade with A+ through F interpretation and limitations |
| **P010-S** | `p010-s-score.json` | Machine-readable percentage, category earned/max and total |
| **P010-R** | `p010-r-readme.md` | Demo-specific README, catalog and timebox navigation |
| **P010-M** | `p010-m-manifest.json` | All canonical IDs, file paths, versions and status |
| **P010-I** | `p010-i-improvements.md` | **Mandatory** short, actionable plan for improving the demo and talk track |

The suffixes **B/Q/G/S/R/M/I** apply identically to **every** future demo: P011-B, P011-Q, P011-G, P011-S, P011-R, P011-M, P011-I, and so on.

Canonical parent path: `demos/pNNN-<stable-kebab-slug>/`. Numeric child paths: `pNNN-<child>-presenter-<minutes>min.html` and `pNNN-<child>-presenter-<minutes>min.md`. Each HTML links visibly to **that demo's B runbook**, its own numbered notes, and the quality/improvement references. The collection `index.html` is its landing page, not a second HTML presenter ID.

**P010 current allocation:** P010-1 (40-minute HTML), P010-2 (13-minute HTML), P010-3 (52-minute HTML), P010-5 (40-minute notes), P010-6 (13-minute notes), P010-7 (52-minute notes), plus B/Q/G/S/R/M/I. Older numbers P010-4, P010-8, P010-9 and P010-10 are retired superseded file IDs; they are **not** available for reassignment. New child IDs must be checked against the registry and existing Git history before allocation.

The owner allocates each new **demo parent ID**. Agents check [P registry](P_REGISTRY.md), [global JSON registry](../artifact-registry.json), and that demo's M manifest before assigning child IDs. Do not silently renumber, duplicate, or invent new demo collections. No redirects or compatibility aliases are required for this new public library.

## Exact runbook requirements

Every current numbered runbook must be the public narrative authority for the demo and contain:

1. **Title, P ID, target audience, use case, primary duration, version/assessment date and public-safe disclaimer.**
2. **Origin/source-readiness summary:** what originating artifact types exist and what was verified, without disclosing the private repo URL or environment.
3. **Business problem, persona and desired ending:** explicitly distinguish a safe unresolved ending from a completed transaction.
4. **Timed agenda:** one row per section containing section number, owner, goal, screen, duration; sum exactly equals primary timebox.
5. **Full section-by-section plan:** for **every section**, goal, what audience sees, actual click/navigation, copy-ready speaker words, exact transition/handoff, fallback, and implemented/deployed/accepted boundary.
6. **Operator/preflight:** who opens tabs and roles, recorded statuses and what to do if a required demo step fails.
7. **All versions and their P URLs:** HTML, timed companion notes and whether a variant is historical.
8. **Quality evaluation:** link to the fixed-suffix Q, G, S and **I improvement plan**, with grade, percentage and named gaps.
9. **Business close:** verified outcome, what remains conditional, next speaker/customer action.

Do not promote a prepared feature to a live claim, invent an auto-generated Case or clear a banking verification indicator without evidence. For a historical version, preserve it with an obvious date/status warning and point to the current runbook.

## Exact HTML presenter requirements

Every `p<demo>-<child>-presenter-<minutes>min.html` must be:

- Self-contained, valid UTF-8 HTML5, mobile-friendly, readable and keyboard-usable; avoid a build step or secrets.
- Clearly titled with the **P ID, demo, duration and version/historical status**.
- A **working, visible link to the same demo's fixed-suffix `pNNN-b-runbook.md` on every page**, and a link to the collection/home catalog.
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

## Required I improvement plan — one document per demo

Every Q quality review, G letter grade and S numeric score **must link directly to the same demo's** `pNNN-i-improvements.md`. The collection index and R overview must also link it. The M manifest and global registry store its canonical path.

**Exact format for PNNN-I:** one section per each of the seven graded criteria, in rubric order. Each must show the criterion name and `earned/max`, followed by **exactly two concise bullets**:
- **Why:** One short sentence describing specific source evidence, point deduction or outstanding validation.
- **Improve:** One actionable sentence identifying what to change or test.

The plan may also contain a compact *demo itself* section for improvements belonging to the originating application or scenario, clearly distinguishing them from **HTML/talk-track improvements**. Each action is advisory, not deployment permission. Avoid long essays and repeated status logs.

For a criterion with full points, write **Why: Full points earned because ...** and **Improve: Preserve ... / optional refinement ...**, not invented deficiencies. The seven section scores must match Q and S; total and G must reconcile to the A–F scale. Grade/score/source and live-integration acceptance are independent.

On each materially approved public update, **refresh Q, G, S, I and M together**, preserve previous grade history, and require new owner approval for source-derived publication. If source cannot be reviewed, mark `SOURCE_NOT_VERIFIED` without manufacturing a grade.

## Scorecard content and periodic reviews

The scorecard must show: P ID, source-readiness state (READY/NOT READY), assessment date, source artifacts assessed, a graded 7-row rubric totaling 100 possible points, **percentage AND letter**, explicit deductions, testing caveats, improvement actions and 4 separate statuses: `source_readiness`, `artifact_validation`, `public_publication`, `live_integration`.

Every materially edited presenter/runbook or new timebox requires a source-fidelity refresh and rescoring. A Git commit alone does not certify a published website.

## Authority and public release

This repository is public. Prepare a redaction report and obtain the owner's **explicit approval** for any future private-source-derived public release. Do not enable automated sync or treat source-repo approval as automatic publishing approval. The SSA collection here serves as the **completed presenter-content reference standard**, regardless of incomplete live integration steps.
