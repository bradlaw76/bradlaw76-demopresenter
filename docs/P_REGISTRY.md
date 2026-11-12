# Demo Presenters — P identifier registry

**Rule:** A demo collection receives one permanent parent ID: **P010** for SSA, **P011** for the next different demo. Timed HTML presenters and notes receive numbered children such as **P010-1**. The **standard documents** receive fixed suffixes and do **not** consume numeric child IDs.

**Required fixed suffixes for every demo:** **B** runbook, **Q** quality, **G** letter grade, **S** numeric score, **I** improvements, **R** README, **M** manifest.

| P ID | Artifact | Canonical path |
| --- | --- | --- |
| P010 | collection | `demos/p010-ssa-direct-deposit/index.html` |
| P010-1 | presenter current 40min | `demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html` |
| P010-2 | presenter historical 13min | `demos/p010-ssa-direct-deposit/p010-2-presenter-13min.html` |
| P010-3 | presenter historical 52min | `demos/p010-ssa-direct-deposit/p010-3-presenter-52min.html` |
| P010-5 | notes current 40min | `demos/p010-ssa-direct-deposit/p010-5-presenter-40min.md` |
| P010-6 | notes historical 13min | `demos/p010-ssa-direct-deposit/p010-6-presenter-13min.md` |
| P010-7 | notes historical 52min | `demos/p010-ssa-direct-deposit/p010-7-presenter-52min.md` |
| P010-B | runbook | `demos/p010-ssa-direct-deposit/p010-b-runbook.md` |
| P010-Q | quality | `demos/p010-ssa-direct-deposit/p010-q-quality.md` |
| P010-G | grade | `demos/p010-ssa-direct-deposit/p010-g-grade.md` |
| P010-S | score | `demos/p010-ssa-direct-deposit/p010-s-score.json` |
| P010-I | improvements | `demos/p010-ssa-direct-deposit/p010-i-improvements.md` |
| P010-R | readme | `demos/p010-ssa-direct-deposit/p010-r-readme.md` |
| P010-M | manifest | `demos/p010-ssa-direct-deposit/p010-m-manifest.json` |

**Next distinct collection:** P011 (subject to owner assignment and a fresh registry check). **Next numerical child for P010:** P010-11 (older numeric child IDs P010-4 and P010-8 through P010-10 were superseded and remain retired, not reusable).

Do **not** publish redirects or duplicate old unnumbered copies. The collection `index.html` belongs to the parent **P010**, while its presenters and notes are P010-N and its mandatory documents are P010-letter.

Every HTML presenter links to **P010-B** and its own notes. **P010-Q, P010-G, P010-S** and the collection landing link to **P010-I**. The I plan has brief **Why** and **Improve** bullets under all seven graded criteria and must reconcile with Q/S scores.

[Quality standard](ARTIFACT_QUALITY_STANDARD.md) · [Source review](SOURCE_REVIEW.md) · [Machine-readable registry](../artifact-registry.json)
