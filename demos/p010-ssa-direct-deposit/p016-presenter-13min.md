> **Historical rehearsal reference:** This alternative predates the current seven-section flow. Follow P014 for current speaker/feature acceptance boundaries.

> **P016 · 13-minute version notes.** [Open this presenter](p012-presenter-13min.html) · [Canonical P014 runbook](p014-runbook.md) · [SSA collection](index.html) · [P018 score](p018-quality.md).

# H083 — SSA Direct Deposit Demo: 13-Minute Dry-Run Guide

> Public, historical rehearsal variant. The seven-section [current presenter](p011-presenter-40min.html) and [runbook](p014-runbook.md) take precedence on status and transitions.

**Owner:** Presenter · **Date:** November 11, 2026 · **Scope:** Presenter rehearsal, no Dynamics writes · **Source of truth for the full presentation:** [November 10 master runbook](p014-runbook.md)

## Open the interactive guide

**[SSA Direct Deposit — Dry-Run Playbook (standalone HTML)](p012-presenter-13min.html)**  
The HTML file opens locally in any modern browser. It contains seven guided scenes, a timer, presenter talk track, exact clicks, safe fallback, handoff language, printable notes, and locally saved checklist marks. It does **not** connect to Dynamics or change data.

The [full 17-scene playbook in PR #2](p014-runbook.md) remains intact. This dry-run version is deliberately not a replacement.

## Today's objective

Give the team a quick guided tour of the **planned** demo, not an end-to-end runtime acceptance test. Preserve the canonical sequence:

**Daniel / Sofía voice → Brad voice controls → Elena's separate portal/chat inquiry → human representative → Contact → Case/banking process → reports → Beth administration.**

Sofía requests a benefit verification letter in Spanish. Elena is a **different** fictional constituent with a direct-deposit verification alert. No voice-to-chat transfer, inherited session, or shared authentication is implied.

## Seven chapters, thirteen minutes

| Time | Presenter | Screen / target click | Narration goal |
| ---: | --- | --- | --- |
| 2:00 | Daniel | Existing voice bot or approved fallback | Sofía's benefit-letter inquiry, Spanish guidance, conditional voice representative handoff |
| 1:00 | Brad | Voice Active Conversation + communication panel | Representative call controls; no unnecessary completed Conversation deep dive |
| 2:00 | Brad | Elena portal → Direct Deposit alert → assistant | Alert and human-help need; prepared dialogue if chat widget does not load |
| 1:00 | Brad | Chat agent desktop / prepared view | Human owns the sensitive decision; AI agents only where observed |
| 2:00 | Brad | Contact form: benefits → Super Six → Timeline | Constituent context, human identity review, service history in one place |
| 3:00 | Brad | Case → masked banking row → three reviews | Explain protected update/readback/alert-clearance sequence; **no live write** |
| 2:00 | Brad → Beth | Customer 360 / Agent Workload / Supervisor Operations → admin | One insight per report; governance closes the story |
| **13:00** | | | |

Seven chapters can still require roughly 10–12 actual Dynamics/portal views. The objective is to reduce **context switches**, not to hide important capabilities.

## Today's presenter-safe claim boundaries

- **Voice:** Daniel validates his own configured bot and transfer. A prepared voice panel must be labeled; it is not an actual transferred call.
- **Portal:** Elena's isolated page is deployed. Its demo-mode alert is **not** accepted proof of a signed-in Dataverse banking Boolean read.
- **Chat:** The H070 Omnichannel widget previously failed readiness; live human escalation is unaccepted. Attempt once if appropriate, then pivot to the prepared agent view instead of waiting.
- **AI:** Customer Intent Agent, Case Management Agent, Service Agent and Knowledge Management Agent are conditional and should not each become a standalone screen. Do not imply outputs or automated Case changes without actual observed configuration.
- **Contact:** The Generic Activity Timeline PCF has shown live activities on three accepted Contact forms; native Timeline is a valid fallback elsewhere. H075 Super Six bridge/live verification acceptance remains conditional.
- **Banking:** The verification Boolean and editable banking form have live persistence evidence. The **complete** trusted update → readback → clear the same-row flag → authenticated portal refresh → Case closure path is not accepted. **Do not execute or claim it during this dry run.**
- **Reports:** Customer 360, Agent Workload and Supervisor Operations HTML resources have source/test evidence; live installation, role permissions and real metric acceptance require verification. Label fixture views.
- **Administration:** Beth's section is read-only. H082 TED integration dashboard is optional and its all-green system health/latency is explicitly simulated.

## Exact handoff lines

**Daniel → Brad:** “We've reached the representative side of Sofía's voice interaction. Brad will show the call-specific controls in Dynamics.”

**Brad voice → portal:** “We're leaving Sofía's voice call and changing both the customer and the channel. Elena has a separate direct-deposit verification issue in my Social Security. This is not a voice-to-chat transfer.”

**Portal → agent:** “The assistant can explain the process, but a representative must handle identity review and any protected banking action. We'll show that representative experience next.”

**Case → reporting:** “The Case tracks the service request; the banking record tracks the protected destination and review alert. Those records support frontline and supervisory insight.”

**Brad → Beth:** “We've seen the constituent experience, the service work and its reporting. Beth will show how routing, agents, security and changes are governed.”

## Producer checklist

- [ ] Daniel's voice experience or labeled fallback is prepared.
- [ ] Elena portal and prepared chatbot exchange are available.
- [ ] Correct P0 Contact and Direct Deposit Change Case are pre-opened.
- [ ] Super Six, Timeline, banking and checklist screens are clearly live/preview labeled.
- [ ] Three reports and Beth's first admin page are ready.
- [ ] No live bank write, flag clear, Case closure, identity secret or unrelated form publication is planned.
- [ ] Someone notes awkward navigation and failed handoffs during the click-through.

## Three questions after the dry run

1. Was the two-caller story and the voice-to-digital *presentation transition* understandable?
2. Which screen changes felt slow, duplicative or unnecessary?
3. Did everyone understand which capabilities are accepted live and which are prepared illustrations?

## Follow-on

After Brad shares the built screens, reconcile this seven-chapter route against **actual screenshot order** and the full runbook. Reduce screen changes by clustering Contact features, Case/banking features and reporting, without changing protected behavior or inventing integrations. The dry-run guide should not be expanded into another feature backlog.

**References:** [Master runbook PR #11](p014-runbook.md) · [Full playbook PR #2](p014-runbook.md) · [Elena portal PR #20](p014-runbook.md) · [Banking field PR #26](p014-runbook.md) · [TED integration PR #29](p014-runbook.md)
