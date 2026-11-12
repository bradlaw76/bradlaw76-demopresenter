# P Artifact Registry — Demo Presenters

**Global ID rule:** Unique, permanent P IDs in the format `P010`, `P010-1`, ... using at least three digits. **SSA starts at P010.** The P ID appears in the canonical URL and visible artifact title. Never assign the same P ID twice or rename an allocated artifact. Future demos use the next unallocated ID.

| P ID | Canonical artifact | Canonical path |
| --- | --- | --- |
| P010 | SSA Direct Deposit collection | `demos/p010-ssa-direct-deposit/` |
| P010-1 | SSA 40-minute presenter (current) | `demos/p010-ssa-direct-deposit/p010-1-presenter-40min.html` |
| P010-2 | SSA 13-minute rehearsal (historical) | `demos/p010-ssa-direct-deposit/p010-2-presenter-13min.html` |
| P010-3 | SSA 52-minute walkthrough (historical) | `demos/p010-ssa-direct-deposit/p010-3-presenter-52min.html` |
| P010-4 | SSA master public runbook | `demos/p010-ssa-direct-deposit/p010-4-runbook.md` |
| P010-5 | SSA 40-minute notes | `demos/p010-ssa-direct-deposit/p010-5-presenter-40min.md` |
| P010-6 | SSA 13-minute notes | `demos/p010-ssa-direct-deposit/p010-6-presenter-13min.md` |
| P010-7 | SSA 52-minute notes | `demos/p010-ssa-direct-deposit/p010-7-presenter-52min.md` |
| P010-8 | SSA scorecard | `demos/p010-ssa-direct-deposit/p010-8-quality.md` |
| P010-9 | SSA machine-readable manifest | `demos/p010-ssa-direct-deposit/p010-9-manifest.json` |
| P010-10 | SSA collection README | `demos/p010-ssa-direct-deposit/p010-10-README.md` |

**Next available collection ID:** P011, subject to fresh registry and repository inspection before allocation.

The root `index.html`, `README.md`, policies and templates are library infrastructure rather than demo artifacts. The canonical P010 collection path resolves to its `index.html` and the P010 page links to P010-1–P010-10.

**No redirects or unnumbered aliases are required.** Old unnumbered SSA copies were transitional and should not be maintained. Always link to numbered canonical paths. To republish an existing artifact, update the same P-numbered file without changing its P ID; history is in Git. A genuinely new presenter variant requires a new P ID. Keep [artifact-registry.json](../artifact-registry.json), each demo's numbered manifest and the catalog consistent.
