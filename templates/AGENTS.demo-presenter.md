# Copyable source-repository agent guidance — Demo Presenters

Merge this into a source repository's **existing** agent policy; do not replace existing security, handoff or deployment controls.

## Public presenter library

- Catalog repository: `bradlaw76/bradlaw76-demopresenter`
- Planned website: `https://bradlaw76.github.io/bradlaw76-demopresenter/`
- Authoritative standard: `docs/ARTIFACT_QUALITY_STANDARD.md` in the library
- Source review: `docs/SOURCE_REVIEW.md` in the library

## Requirements

1. **Review THIS repo's actual source first**, read-only. Identify its authoritative business case, existing runbook, owner, demonstration steps, speaker text, transitions, timeboxes, and latest accepted vs. unverified functionality. A public library cannot autonomously read a private source repo without authorized connection.
2. Require the library's **eight-item source-readiness gate** before authoring public output. No invented screens, data, handoffs or completed transactions.
3. The owner assigns **one parent P ID per demo**, e.g. P011. Timed presenters/notes use numeric children (`P011-1`, `P011-2`); standard documents use **P011-B**, **P011-Q**, **P011-G**, **P011-S**, **P011-I**, **P011-R**, **P011-M**.
4. Create **B** runbook with each chapter's goal, audience highlight, exact click path, spoken script, transition, fallback and source/live acceptance boundary. Keep section durations accurate.
5. Each static HTML timebox must visibly link to **B** runbook and its numbered notes, and show stage controls and truth boundaries. No private URLs, client IDs, real customer data, credentials, or access to live systems.
6. Score all seven rubric categories: **Q** = evidence and deductions, **G** = letter, **S** = percentage/points. Produce **I** as a concise Markdown improvement plan: each category has **Why** and **Improve** bullets, and actionable demo-vs-talk-track recommendations. Q/G/S all link to I.
7. Update **R** overview and **M** manifest with each artifact's canonical P URL. Link current grade/score/improvements from collection landing and library catalog.
8. Require explicit owner review/approval of the **specific sanitized public delta** before publication. Source repo approval does not authorize public publication. No automatic mirroring.
9. After approved publication, confirm GitHub readback, source-to-public fidelity, links, syntax, timings, and any browser/mobile/keyboard validation; disclose anything unverified. Preserve previous grades and ID history.

**Agent instruction example:** “Read the originating repository's current authoritative documents and the central Demo Presenters standards. Report any gaps in the eight-item source gate. If ready, prepare a sanitized PNNN collection with timed HTML, B runbook, Q/G/S scores, I improvements, R overview and M manifest. For each grade criterion write short Why and Improve bullets. Show the public diff for explicit approval; do not publish or change the underlying live system without its own authorization.”
