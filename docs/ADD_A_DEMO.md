# Add a demo to the Demo Presenters library

This is the standard process for a **new source repository**. Start with [AGENTS.md](../AGENTS.md), [the source-readiness and grading standard](ARTIFACT_QUALITY_STANDARD.md), and [source review instructions](SOURCE_REVIEW.md).

## 1. Review the originating repository — read-only

- Use an authorized GitHub connection to read the source repo's current `README`, source runbook, demo storyline, and latest implementation/acceptance evidence.
- Or use the local `scripts/review-source.cjs` with a locally supplied **read-only** GitHub token. The public Pages site cannot authenticate to private repositories.
- Confirm all **eight source-readiness inputs** from the [standard](ARTIFACT_QUALITY_STANDARD.md): origin, scenario, ordered walkthrough, owners/timebox, scripts/transitions, actual/conditional status, privacy review, and owner permission to publish.
- If a gate is missing, record `SOURCE_NOT_READY`; do not create a guessed presentation.
- Private links, tokens and operational logs remain **in the source repo/private handoff**, never in the public library.

## 2. Allocate ONE demo ID and timeboxed child IDs

- The parent ID identifies the entire demo. SSA is **P010**. The next distinct demo is **P011** if still available.
- A presenter, alternate timebox and numbered notes get child IDs such as `P011-1`, `P011-2` and `P011-3`. Revisions of the same artifact keep their ID.
- Read [the registry](P_REGISTRY.md) and [machine-readable registry](../artifact-registry.json); obtain the owner's P parent allocation and avoid duplicates.
- Create the collection at `demos/p011-<slug>/` (subject to actual assigned ID). The folder `index.html` is a landing page, not an alternative timebox.

## 3. Generate the standard files

Every demo collection must contain:

```text
demos/pNNN-<slug>/
  index.html                            # PNNN collection landing
  pNNN-1-presenter-<minutes>min.html   # Numeric child ID for current presenter
  pNNN-2-presenter-<minutes>min.html   # Optional alternate timebox
  pNNN-3-presenter-<minutes>min.md     # A distinct child ID for a notes artifact
  pNNN-b-runbook.md                    # PNNN-B mandatory full runbook
  pNNN-q-quality.md                    # PNNN-Q mandatory qualitative assessment
  pNNN-g-grade.md                      # PNNN-G mandatory letter grade
  pNNN-s-score.json                    # PNNN-S mandatory numeric score
  pNNN-i-improvements.md               # PNNN-I mandatory action plan
  pNNN-r-readme.md                     # PNNN-R mandatory per-demo README
  pNNN-m-manifest.json                 # PNNN-M mandatory artifact/variant manifest
```

Numeric children are examples; allocate only actual needed files. The fixed **B/Q/G/S/I/R/M** suffixes are used for every collection and do not consume numeric child IDs. Use [SSA P010](../demos/p010-ssa-direct-deposit/) as the reference.

## 4. Runbook and HTML requirements

- **B runbook:** audience, business problem, fictional/sanitized personas, source-readiness boundary, exact current story, one timed section per stage, each section's goal, audience highlight, click path, spoken words, next-speaker transition, fallback, and real/preview status. All chapter times must sum to the declared main duration.
- **Every HTML:** self-contained HTML5, mobile-friendly, keyboard-usable, actual section duration, speaker words, visible highlights, next/previous navigation, fallbacks, and direct visible links to **B** runbook and its own numbered notes. Link to the collection's **Q quality**, **G grade**, **S score** and **I plan**.
- Alternative timeboxed versions must be coherent; historical scripts should be labeled and should never silently overwrite the current story.
- No live system integrations, writes, credentials, customer records or private source links in the public content.

## 5. Score and propose improvements

Use the [100-point seven-category A+ through F rubric](ARTIFACT_QUALITY_STANDARD.md#5-the-per-demo-score-grade-and-improvements). A new collection needs source READY and at least **80% / B−** before public publication.

- **Q:** category earned/max, evidence and deductions, review limitations.
- **G:** letter grade and exact band.
- **S:** category scores, total earned/max and percentage as machine-readable JSON.
- **I:** **exactly two short bullets under each of seven categories**: **Why** points were earned/lost; **Improve** one concrete action. Also separate any proposed improvements to the original demo implementation from updates to the HTML/runbook. No essay or unverified fix claims.
- Ensure Q, G, S, I and M link to the same reviewed version. Any rescore must be evidence-based, not automatic inflation.

## 6. Get approval for the PUBLIC release

Show the owner what will be public, the redactions, IDs, timebox URLs, source-readiness and score. Require explicit permission **for that exact public delta**, even when the underlying source work was previously authorized. Never automatically mirror private repos or deploy original project resources.

After approval, commit sanctioned content, read it back, validate relative links, update the global catalog and both registries. GitHub Pages activation/live-site behavior must be checked separately.

## 7. Link from the originating private repository

With permission, link **out** from the private repo's README/runbook to the public library. Do not publish a link back to a private source repo. Example:

- [Demo catalog](https://bradlaw76.github.io/bradlaw76-demopresenter/)
- [SSA collection P010](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/)
- [SSA presenter P010-1](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html)
- [SSA runbook P010-B](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/p010-b-runbook.md)
- [SSA improvement plan P010-I](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/p010-i-improvements.md)

## 8. Activate Pages

On [GitHub Pages settings](https://github.com/bradlaw76/bradlaw76-demopresenter/settings/pages), select `Deploy from a branch` → `main` → `/(root)`, then Save. Verify an actual deployment before stating the site is live.
