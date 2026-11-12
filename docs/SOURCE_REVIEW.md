# Originating Repository Review — Read-Only Procedure

**Purpose:** Review the source project before any demo presenter or runbook is created or graded. The origin repository is authoritative for its business story, available screens, current feature status and presenter handoffs. The public demo library is **not** the source repository.

## Two supported ways to review private source

**1. Authorized GitHub connector (interactive agent).** An authorized agent may use its connected GitHub repository tools to read source repo `README.md`, presenter briefs, source runbooks, feature status, validation receipts and relevant PRs. Read only: no source changes are required to evaluate the demo. The agent must state what documents it actually read, where claims are uncertain, and which source revision is current. Connector authentication remains in the app—not on this public website.

**2. Read-only local CLI.** On a trusted machine with Node.js 18+ and a GitHub token scoped to **Contents: read** on the source repository, run:

```sh
node scripts/review-source.cjs --repo OWNER/SOURCE_REPO --ref SOURCE_BRANCH \
  --path docs/DEMO_RUNBOOK.md --path README.md --json
```

Pass a token in the local environment using `GH_TOKEN` or `GITHUB_TOKEN`. **Never paste the token into a command, Markdown file, Git commit, HTML or CI log.** The script performs GitHub REST **GET** reads, sends no source content to the public site, and prints metadata/safety marker counts only. It does not publish, grade or alter source files.

The public GitHub Pages site **cannot** fetch private repo files directly; it has no secret token. A source-review agent or authorized local tool must perform the review first.

## Required source-readiness evidence

Before producing an artifact, confirm all eight [source-readiness gates](ARTIFACT_QUALITY_STANDARD.md#2-source-readiness-gate-no-empty-or-invented-presentations): authoritative origin/revision; business scenario; ordered walkthrough; speaker ownership and timeboxes; presenter words and transitions; implementation/live-acceptance truth; public privacy; and explicit permission to publish the sanitized copy.

Keep private links, source commit IDs and any sensitive review notes **in the originating repository or private handoff**, not in public manifest, presenter, quality scorecard or catalog. Public grading may describe source **types** and assurance limits without exposing private URLs or records.

If any gate fails, return `SOURCE_NOT_READY` or `SOURCE_NOT_VERIFIED`, identify which source evidence is missing, and **do not fabricate** a demo or publish a guessed presenter. Preview-only demos may be source-ready when their incomplete live capabilities are honestly represented.

## Output of a completed source review

Provide a private owner-facing summary that includes:
- Demo objective, source revision and documents reviewed
- Intended audience, owner, duration/variants and each stage's goal/transition
- Existing/blocked integrations, safe fallback and actual acceptance evidence
- Public-redaction checklist and publication-ready artifact mapping
- Approval status for the **exact public change**

After the owner approves sanitized publication, create or update only canonical `demos/pNNN-slug/pNNN-...` artifacts and update the [P registry](P_REGISTRY.md). Run static checks and score the public artifacts using the [100-point rubric](ARTIFACT_QUALITY_STANDARD.md#5-the-per-demo-score-grade-and-improvements).

**No automatic mirroring:** changes to a source repo are not permission to update the public library. No scheduled private repo monitoring or cross-repo sync should be installed by default.
