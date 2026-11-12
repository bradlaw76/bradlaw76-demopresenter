# Add a new P-numbered demo collection

Read [AGENTS.md](../AGENTS.md), the [quality/source standard](ARTIFACT_QUALITY_STANDARD.md), [global registry](../artifact-registry.json) and [source-repo agent template](../templates/AGENTS.demo-presenter.md).

## 1. Verify source readiness before generating public content

The originating repository must already contain a credible, complete source storyline—not merely a project name. Check the **eight mandatory gates** in the quality standard: source revision; audience/persona/problem; actual or proposed screen sequence; owners/durations; speaker words and transitions; truthful capability/fallback status; public-safe extraction; **explicit approval to publish the sanitized material**.

If a required item is absent, **stop public artifact creation** and report the specific gap to the source owner. Do not invent persona details, demo screens, claims, integrations or spoken transitions. Avoid copying the full private operational/deployment runbook.

## 2. Obtain unique P IDs from the owner and registry

The owner assigns the **collection ID** and **one permanent ID per artifact**. Check [artifact-registry.json](../artifact-registry.json) to avoid overlap. Use a stable kebab-case slug and folder:

```text
demos/pNNN-<subject-slug>/
    index.html                          # Collection home, belongs to collection P ID
    pAAA-presenter-<minutes>min.html    # Current main presenter
    pBBB-presenter-<minutes>min.html    # Each alternative
    pCCC-runbook.md                    # Current public narrative source of truth
    pDDD-presenter-<minutes>min.md     # Notes for each version, unique P ID
    pEEE-quality.md                    # A+/A/…/F + score %
    pFFF-manifest.json                 # IDs, filenames, grade and state
    pGGG-README.md                     # Collection guide
```

The [P010 SSA example](../demos/p010-ssa-direct-deposit/) and its [P019 manifest](../demos/p010-ssa-direct-deposit/p019-manifest.json) are the canonical reference. **No redirects or unnumbered mirrored copies are needed.**

## 3. Build the exact runbook and HTML presenters

The numbered **runbook** must specify audience, objective, initiating problem, story conclusion, source evidence, time-summed section agenda, and per-section presenter, duration, goal, what is shown, click path, copy-ready spoken lines, **exact transition**, limitations, and fallback. Include version links and quality/source states.

Every numbered **HTML** must be standalone and usable on mobile/desktop, display its P ID and timing, contain navigable timed sections and print/copy notes, show presenter-specific transitions, and link prominently to its **numbered runbook** and own numbered speaker notes. Alternate timeboxes must come from the actual source and be clearly historical where their storyline predates the current one. Do not treat mock/test evidence as live system acceptance.

## 4. Redact, verify and score before release

- Remove private source-repo URLs, Microsoft environment addresses/IDs, secrets, actual personal/customer/banking data and restricted screenshots.
- Validate HTML/JS parse, unique IDs, links, timebox sums, manifest/registry matches, relevant accessibility and mobile behavior when tools allow.
- Score the seven [rubric categories](ARTIFACT_QUALITY_STANDARD.md) out of **100**; record earned/max, evidence and deductions in the numbered quality report. Convert to percentage and A+–F with plus/minus as documented.
- A new collection is publishable only if **source readiness is READY** and artifact score is **80% (B−) or higher**; a passing grade does not mean bot routing, transaction or production service is accepted.
- Check all file URLs and score values from the public chart and manifest, keeping unverified browser tests explicitly unverified.

## 5. Publish only after owner authorization

Confirm which sanitized files will become public. Require owner permission for this specific public change, not just permission to edit the private source project. Commit only authorized files, read them back, update the catalog and registry, and report whether GitHub Pages is live **separately** from source publication.

No automatic cross-repo mirroring or deployment.

## 6. Link from originating private repositories

After permission, point their README/demo guide at the P-numbered public collection and presenter. Do not link publicly back into private code. Example:

```md
- [Demo presenter library](https://bradlaw76.github.io/bradlaw76-demopresenter/)
- [SSA collection P010](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/)
- [SSA 40-minute P011](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/p011-presenter-40min.html)
- [SSA runbook P014](https://bradlaw76.github.io/bradlaw76-demopresenter/demos/p010-ssa-direct-deposit/p014-runbook.md)
```

## 7. GitHub Pages activation

On public repository [Settings → Pages](https://github.com/bradlaw76/bradlaw76-demopresenter/settings/pages), select **Deploy from a branch**, **main**, **/(root)**, then Save. Verify GitHub's deployment success and the public site. A pushed commit alone does not establish that Pages is running.
