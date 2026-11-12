# Demo Presenter — Source, Runbook, HTML and Quality Standard

**Version 2.0 — November 12, 2026**  
**Applies to every demo in the public presenter library.** This is the normative publishing contract. [P010 SSA example](../demos/p010-ssa-direct-deposit/) is the reference set.

## 1. Numbering: one parent P ID per demo

The **demo collection** has one permanent P number: `P010` for SSA, `P011` for the next demo, etc. Its folder is `demos/p010-ssa-direct-deposit/`.

- **Timeboxed or nonstandard artifacts:** unique numeric children within the same parent, e.g. `P010-1`, `P010-2`, `P010-5`. Numbers are never reassigned; gaps after a retired numbering scheme may remain.
- **Standard documents:** fixed letter suffixes, always exactly one per demo:

| Suffix | Canonical example | Purpose |
| --- | --- | --- |
| **-B** | `p010-b-runbook.md` | Complete public demo runbook; authoritative storyline and transitions |
| **-Q** | `p010-q-quality.md` | Evidence-backed scoring rubric, deductions and validation state |
| **-G** | `p010-g-grade.md` | Letter grade, percentage range and derivation |
| **-S** | `p010-s-score.json` | Numeric 0–100 score and per-category earned/max points |
| **-R** | `p010-r-readme.md` | Collection guide and artifact directory |
| **-M** | `p010-m-manifest.json` | Version inventory, IDs, paths, source state, quality |
| **-I** | `p010-i-improvements.md` | **Mandatory short improvement plan**, one why-and-improve pair per grade criterion |

The folder `index.html` belongs to the parent P010 and lists artifacts. The global library `index.html`, root `README.md`, this policy and the global registry are infrastructure, not P-numbered artifacts.

**URL requirement:** Every demo artifact has its identifier in its URL: `.../demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html`. Fixed letters likewise appear in document URLs. No redirects, duplicate unnumbered copies or alias URLs are required. The [global registry](../artifact-registry.json) is authoritative for parent IDs and paths. Do not reuse an ID or rename an existing public artifact without explicit owner direction. A source revision normally updates the same existing artifact ID and is tracked in Git history.

## 2. Source-readiness gate: no empty or invented presentations

Before creating any **public** presenter/runbook, the originating repository must provide **all eight**:

1. **Authority:** Current approved source branch/revision, existing runbook or detailed source material.
2. **Business story:** Intended audience, fictional/sanitized customer, problem, value and in/out-of-scope decisions.
3. **Navigation:** Ordered screens, actual or clearly intended clicks, beginning and meaningful ending.
4. **People and time:** Speaker ownership, exact transition points, main duration and any requested timeboxed variants.
5. **Spoken script:** Presenter highlights, usable narration, specific question/dialogue and next-section transition for every section.
6. **Evidence and fallback:** Source vs deployed vs accepted boundaries, known errors, safe fallback and conditional features.
7. **Public-safety review:** Review of every file/image/link for private URLs, real customer data, auth keys, environment identifiers, record GUIDs and sensitive implementation material.
8. **Publication authority:** Explicit approval to release the **specific sanitized content** publicly. Private source editing approval is not a public-release approval.

If any gate is absent, report **NOT READY** and gaps in private/source context; do not publish invented scripts, placeholder runbooks or silent private-to-public sync. Source READY certifies sufficient demo source **content**, not that Dynamics, an AI agent or a bank transaction works live.

## 3. Exact public runbook requirements (-B)

Every `pNNN-b-runbook.md` must have:

1. Title, parent ID, use case, audience, date/revision, duration, sanitized/fictional disclaimer.
2. Source evidence and status, without exposing private repository URLs or deployment secrets.
3. Business problem, persona, objective, desired or intentionally unresolved outcome.
4. Timed agenda table: section, presenter, goal, screen, duration, **exact sum** equal to primary presenter.
5. **For each section**: owner, duration, **goal**, audience-visible highlight, start/end screen, concrete clicks, copy-ready spoken words, **exact transition**, honest status and fallback.
6. Preflight and contingency instructions, authorized data/roles, and a safe stopping condition.
7. Links to current and timeboxed HTML presenters and their numbered notes, with historical variants labeled.
8. Links to **-Q quality, -G grade, -S numeric score and -I improvements**.
9. Close: what the audience learned, what is verified, what remains gated, and speaker handoff.

The runbook governs the storyline for current HTML. Historical timeboxes may preserve older ordering, but must visibly identify that fact and refer to the current runbook.

## 4. Exact standalone HTML presenter requirements (-1, -2, etc.)

Every timed presenter (e.g. `p010-1-presenter-40min.html`) must:

- Be UTF-8 HTML5, static/self-contained, responsive and usable without a build tool or private authentication.
- Display its **P ID, title, declared duration, current/historical status and safe-demo disclaimer**.
- Display a **visible link** to the canonical `pNNN-b-runbook.md` plus its own numeric-child speaker notes. Show the parent collection and other available timeboxes.
- Preserve source-backed section count/order and a duration sum equal to the manifest's version. Each section needs a goal, presenter, visual highlight, clickable actions, speakable narration, next transition, and fallback/claim boundary.
- Offer previous/next section navigation and current-section indication, speaker notes that can be copied or printed, and timer or exact time budget.
- Provide readable contrast and focus, keyboard navigation, mobile-friendly layout, and meaningful visual alternatives when applicable.
- Make no protected API writes, banking operations, identity checks, privileged Dataverse calls, or unapproved external requests.
- Label unverified chatbot transfer, Contact matching, Case creation, human approval, payment change, or report data as conditional/simulated; never fabricate a completed result.

**Tests:** parse HTML/inline JavaScript; check unique element IDs, local links, section IDs/order, time totals, notes/runbook links, manifest/registry consistency and public privacy; test navigation and mobile/keyboard/contrast in a real browser when available. Mark browser and accessibility **NOT VERIFIED** if not executed.

## 5. The per-demo score, grade and improvements

Grade the **collection's presenter/runbook artifact set** out of **100**, not its live application or each individual file by assumption:

| Criterion | Max |
| --- | ---: |
| Source fidelity and evidence | 25 |
| Storyline, goals and exact speaker transitions | 20 |
| Runbook completeness and presenter usefulness | 15 |
| Visual design, responsiveness and accessibility | 15 |
| Technical integrity, links and timebox variants | 10 |
| Public privacy and truthful capability claims | 10 |
| Maintainability, manifest/registry and standards | 5 |
| **Total** | **100** |

**-Q Quality:** record earned/max and one brief reason for each category, evidence, test caveats and linked corrective actions.  
**-G Grade:** display letter/percentage and explain the deterministic percentage band. **Must link to -I.**  
**-S Score:** JSON numeric total, per-criterion earned/max and `improvements.path` linked to the fixed -I Markdown.  
**-I Improvements (mandatory):** exactly **one "Why" bullet and one "Improve" bullet for each of seven criteria**, both concise and actionable. Link -I from -Q, -G, -S, collection -R, collection homepage and root tracking chart. Don't duplicate full explanations across the score and improvement documents. After the seven scored criteria, provide two short groups of bullets: **Originating demo / workflow improvements** (source-system suggestions only) and **HTML presenter / runbook improvements** (talk track, timing, usability and file links). Recommendations do not authorize deployment or publication.

### Grade conversion

| Percent | Grade | Percent | Grade |
| ---: | :---: | ---: | :---: |
| 97–100 | A+ | 93–96 | A |
| 90–92 | A− | 87–89 | B+ |
| 83–86 | B | 80–82 | B− |
| 77–79 | C+ | 73–76 | C |
| 70–72 | C− | 67–69 | D+ |
| 63–66 | D | 60–62 | D− |
| 0–59 | F | | |

Show percentage and letter together, e.g. **89% · B+**. Grade F does not have plus/minus. Round percentage to nearest whole percent; with a fixed 100-point rubric, this is the earned-point sum.

New public demo collections require **source READY** and **at least 80% / B−** artifact quality. Unverified browser tests or historical variants reduce relevant category points. This grade is **not** evidence of operational readiness.

## 6. Manifest and global library consistency

- Use a parent `P###` ID and fixed document IDs `-B/-Q/-G/-S/-R/-M/-I`; numeric children only for variable artifacts such as timed HTML and notes.
- `pNNN-m-manifest.json` tracks the parent, all timed versions, numeric-child IDs, all standard document links, grade, percentage, source-readiness and validation status.
- The root `README.md` **Current demo library** contains a collection summary and artifact chart, including a link to **-I improvements**.
- The global `artifact-registry.json` holds the next unallocated **parent** ID and all canonical relative paths. For SSA, parent P010; **next demo P011**.
- Each material update triggers source-fidelity review, score recalculation and seven short improvement bullets as needed.
- Keep approved URLs stable and preserve source-repo ownership. **No redirects or alias copies** are needed in this new library.

## 7. Public release and status reporting

Only sanitized and explicitly approved content may enter this public repository. Do not auto-mirror a private source repo, change a live environment or assume any private source approval extends to public release. Report separately:

- `source_readiness`: READY / NOT_READY
- `artifact_validation`: STATIC_VERIFIED / BROWSER_VERIFIED / INCOMPLETE
- `public_publication`: COMMITTED / PAGES_LIVE / NOT_PUBLISHED
- `live_integration`: NOT_APPLICABLE / PARTIAL / ACCEPTED / NOT_VERIFIED

A GitHub commit is **not** proof that Pages is live. Keep browser/accessibility limitations and unresolved integration claims visible.

**Reference set:** [P010 SSA](../demos/p010-ssa-direct-deposit/) · [P010-B runbook](../demos/p010-ssa-direct-deposit/p010-b-runbook.md) · [P010-Q quality](../demos/p010-ssa-direct-deposit/p010-q-quality.md) · [P010-I improvements](../demos/p010-ssa-direct-deposit/p010-i-improvements.md).
