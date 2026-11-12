# P Artifact Registry — Demo Presenters

**Global ID rule:** Unique, permanent P IDs in the format `P010`, `P011`, ... using at least three digits. **SSA starts at P010.** The P ID appears in the canonical URL and visible artifact title. Never assign the same P ID twice or rename an allocated artifact. Future demos use the next unallocated ID.

| P ID | Canonical artifact | Canonical path |
| --- | --- | --- |
| P010 | SSA Direct Deposit collection | `demos/p010-ssa-direct-deposit/` |
| P011 | SSA 40-minute presenter (current) | `demos/p010-ssa-direct-deposit/p011-presenter-40min.html` |
| P012 | SSA 13-minute rehearsal (historical) | `demos/p010-ssa-direct-deposit/p012-presenter-13min.html` |
| P013 | SSA 52-minute walkthrough (historical) | `demos/p010-ssa-direct-deposit/p013-presenter-52min.html` |
| P014 | SSA master public runbook | `demos/p010-ssa-direct-deposit/p014-runbook.md` |
| P015 | SSA 40-minute notes | `demos/p010-ssa-direct-deposit/p015-presenter-40min.md` |
| P016 | SSA 13-minute notes | `demos/p010-ssa-direct-deposit/p016-presenter-13min.md` |
| P017 | SSA 52-minute notes | `demos/p010-ssa-direct-deposit/p017-presenter-52min.md` |
| P018 | SSA scorecard | `demos/p010-ssa-direct-deposit/p018-quality.md` |
| P019 | SSA machine-readable manifest | `demos/p010-ssa-direct-deposit/p019-manifest.json` |
| P020 | SSA collection README | `demos/p010-ssa-direct-deposit/p020-README.md` |

**Next available P ID:** P021, subject to fresh registry and repository inspection before allocation.

The root `index.html`, `README.md`, policies and templates are library infrastructure rather than demo artifacts. The canonical P010 collection path resolves to its `index.html` and the P010 page links to P011–P020.

**No redirects or unnumbered aliases are required.** Old unnumbered SSA copies were transitional and should not be maintained. Always link to numbered canonical paths. To republish an existing artifact, update the same P-numbered file without changing its P ID; history is in Git. A genuinely new presenter variant requires a new P ID. Keep [artifact-registry.json](../artifact-registry.json), each demo's numbered manifest and the catalog consistent.
