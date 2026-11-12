# P010-4 · SSA Direct Deposit — Master Presenter Runbook

**Primary duration:** 40 minutes · **Alternative versions:** [13-minute rehearsal](p010-2-presenter-13min.html) · [52-minute detailed walkthrough](p010-3-presenter-52min.html)

[Open main interactive presenter](p010-1-presenter-40min.html) · [Demo catalog](../../index.html)

> **Presentation-only example.** Sofía Reyes and Elena Martinez are fictional personas. This public copy includes no live Dynamics link, customer identity, protected banking data, real government system connection, or instructions to perform a transaction. Current deployment and acceptance status must be checked privately by the demo owner before use.

## Speaker and scenario overview

Daniel demonstrates Sofía's Spanish benefit-letter voice scenario in his **own environment**. Brad then introduces a separate customer, Elena, through an illustrative portal verification alert and conversational assistance. Brad moves from the agent conversation to the exact linked Contact, then the Case, reports, and Beth's governance walkthrough. No actual voice-to-chat transfer or bank change is inferred.

## P010 collection quality and source integrity

**Assessment:** [P010-8 — Quality scorecard](p010-8-quality.md) · **Artifact score:** **89% · B+** · **Source content readiness:** READY (presenter artifact standard; not a live system deployment certification).

**Public audience-safe authority:** this P010-4 runbook governs the seven-section, 40-minute P010-1 presenter. P010-2 (13 minutes) and P010-3 (52 minutes) are preserved **historical rehearsal variants**, not proof of current Dynamics/portal functionality. Each variant links back here.

**P-numbered presenter versions:** [P010-1 main (40 min)](p010-1-presenter-40min.html) · [P010-2 rehearsal (13 min)](p010-2-presenter-13min.html) · [P010-3 detailed (52 min)](p010-3-presenter-52min.html).

## 3. Approved seven-section customer storyline and transitions — 40-minute core

**Current presenter spine (November 11):** The customer hears an independent voice example from Daniel, then Brad starts **Elena's separate portal inquiry**. Elena asks for help with a direct-deposit review alert; a representative handles the protected service process in Dynamics. Brad shows **Conversation → Contact → existing Case → reporting** before handing to Beth. Sections 6–12 below are detailed reference material and fallbacks, **not additional timed presentation sections**. For the live show follow this section's order and handoffs.

**Critical storytelling distinction:** Elena's chat request is about a direct-deposit issue **outside the demonstrated chatbot's approved automated transaction scope**. Copilot Studio may recognize and explain the intent when configured, but cannot independently verify identity, authorize a banking update, or guarantee a payment-date result. Do not claim a bot failure or that a message, portal alert or prior transcript was automatically delivered to Dynamics unless a real channel/transport proves it. **Actual chat-to-live-agent routing is conditional; a prepared switch is the current safe fallback.**

| Section | Presenter | Target | Audience's question and destination |
| --- | --- | ---: | --- |
| **1. Daniel's independent voice demonstration** | Daniel | **5 min** | How does voice-based service guidance work? Sofía benefit-letter inquiry in **Daniel's separate environment** |
| **2. Elena's portal and chat widget** | Brad | **5 min** | Why does Elena need assistance? Show review-required notice, explain Copilot benefits, request a person |
| **3. Conversation arrives at representative** | Brad | **4 min** | What does the agent know and what must be verified? Dynamics chat/Active Conversation, real only if received |
| **4. Contact 360 and verification** | Brad | **7 min** | Who is Elena and what account/service history exists? Exact linked Contact, benefits, proposed related-record alert, Super Six, Timeline |
| **5. Case management and protected banking review** | Brad | **11 min** | What work is pending and why isn't it resolved? Existing Case, activities, documents, checklist, banking, Review & Resolution |
| **6. Operational reporting** | Brad | **4 min** | Who owns the work and what should a supervisor see? Customer 360 → Agent Workload → Supervisor Operations |
| **7. Administration and close** | Beth / executive | **4 min** | How is this governed? Routing, agents, roles, solution, controls and pilot acceptance |
| **Core total** | | **40 min** | Seven sections, no extra application tour |

### 1. Daniel's independent voice demonstration — 5 minutes

**Goal:** Set a short cross-channel service context, **without** transferring Sofía's call to Brad's environment. **Show:** Sofía Reyes's Spanish benefit-verification-letter question, Daniel's configured voice assistant, and a verified voice communication panel in **Daniel's own environment** if available. Daniel owns migrating/configuring/testing his voice items. Use an authorized labeled recording or screenshots if live voice transfer is unverified. Finish the voice experience there; Brad does not need to open a voice panel.

**Suggested opener:** “We'll begin with a separate Spanish voice service example. Daniel will show how a benefit-letter inquiry is understood and guided in his voice environment. Then we'll move to Elena, who has a different direct-deposit issue in the digital channel.”

**Transition — Daniel → Brad:** “That completes Sofía's voice example in my environment. Brad will now open a different constituent's my Social Security portal and show how a direct-deposit verification issue leads to representative assistance. No call or account context transfers between our environments.”


**Evidence/status and fallback:** Daniel's voice agent runs only in his independently configured environment. If phone routing, real agent transfer or call controls are not accepted, show an approved labeled recording or genuine static capture; no context is transferred to Brad.
### 2. Elena's portal and chat widget — 5 minutes

**Goal:** Explain **why Elena asks for help**, not showcase every chatbot topic. **Show:** the deployed Elena demonstration portal / Preview, visible Review required alert **DD-DEMO-1042**, masked bank destination and the chat widget. Click chat once. Briefly relate it to what Copilot Studio can do: natural-language service guidance, prior-context continuity **only where actually connected**, self-service and appropriate human escalation. There is no need to spend time configuring the bot or playing back an unrelated earlier conversation.

**Suggested script:** “Elena sees that her direct-deposit change needs additional verification. The assistant gives her a natural-language way to ask about the notice. This demo does not give the chatbot an approved way to process a protected direct-deposit transaction, so it should guide her and offer a human representative rather than pretend it has verified the banking change.”

**Elena's question:** “My direct deposit change says additional verification is required. Can someone help me before my next payment?”

**Boundary:** The actual Preview Preview has owner-reported **basic chat working**, not established authenticated bank-flag context, bot escalation, session transcript transfer or automatic Case creation. Portal alert/status is not automatically sent into chat. Use an actual safe answer if visible; otherwise label the intended dialogue as scripted.

**Transition — portal → Dynamics:** “The assistant can explain what the issue means, but protected verification belongs to a person. Let's move to the representative's workspace to see how that request is handled.”


**Evidence/status and fallback:** The portal's example alert is fictional; basic chat has owner-observed evidence, but protected identity linkage and real bot-to-human routing are not accepted. If the widget fails, use a labeled example conversation rather than simulating success.
### 3. Conversation and live-agent intake in Dynamics — 4 minutes

**Goal:** Make the **handoff between channels visible and credible**, then move promptly into CRM. **Show:** an actually received Dynamics chat notification and Active Conversation, communication panel and any observed intent/context. If there is no tested chat-to-agent route, use a clearly labeled prepared agent interaction; do **not** show a fabricated transfer success or claim the portal message, verified identity, transcript or Case was passed through. Mention optional Customer Intent, Case Management or Service Agents only if their actual outputs can be observed.

**Suggested script:** “This is the service representative's workspace. The interaction tells us Elena is asking about additional direct-deposit verification. Here the channel handles the conversation, while Dynamics helps the representative navigate the constituent and Case information. The intended benefit is less re-entry, not an unverified assumption that every field arrived automatically.”

**Case policy:** Check for a genuinely created and linked Case only if the actual agent flow produced one. **Otherwise open Elena's existing Case later; do not create a duplicate Case just to simulate automation.**

**Transition — conversation → Contact:** “We understand why Elena contacted us. Before working a protected request, the representative needs to know which Contact is associated with the service record and what history is available.”


**Evidence/status and fallback:** An actual incoming Dynamics chat is shown **only if observed**. Otherwise use a clearly labeled prepared representative view; no transcript, identity, screen-pop or new Case is claimed.
### 4. Contact 360 and human-controlled constituent verification — 7 minutes

**Goal:** Establish the constituent's available, authorized context **before** opening her Case. **Show once:** the Contact linked to the selected Case (not a name-only selection, because multiple Elena Contacts exist), available profile/benefits and payment fields, supported Super Six controls, Customer Activity Timeline and optionally the visibly labeled H081 **RuleBasedFallback** recommendation. H072 native fields and H080 Timeline have accepted scoped evidence; Super Six workstream focused context tests pass but the full form/owner walkthrough and unsupported identity-answer sources remain open. A visible verification panel is not proof of verified identity.

**Proposed Contact alert (not yet implemented/accepted):** Add one **read-only, record-derived** status strip on the Contact form using the related Direct Deposit Demo Record's record-level verification-required attribute Boolean. Show “Direct deposit verification required” and the safe reference only for a uniquely identified, authorized related banking row. A missing/multiple/denied record displays unavailable, **never** a fictional Contact flag or a copied Boolean. **Do not add a second Contact Boolean.** The banking source-of-truth field already exists; its secure Contact-form read/display requires a separate confirmed implementation. Until then show the actual bank record later or describe this strip as a planned experience.

**Suggested script:** “The Contact brings together who Elena is, what benefits are recorded and what service history we can legitimately access. This is also the logical place to surface a read-only indication that a related direct-deposit request needs attention. We can now review what information is available for human verification, without turning the screen into automatic identity proofing.”

**Transition — Contact → Case:** “We've established Elena's context and the history available to the representative. Now we'll open her service Case to manage the actual direct-deposit issue, its outstanding steps and resolution decision.”


**Evidence/status and fallback:** Contact Timeline and supported Super Six fields have scoped evidence; complete identity verification and a Contact-bank-status banner are unaccepted. Use only the correct linked Contact and show a proposed alert as a verbal future capability.
### 5. Enhanced Case management and protected banking review — 11 minutes

**Goal:** Make the **enhanced Case form the centerpiece**, answering what happened, what evidence exists, what remains and whether the request may be resolved. **Open Elena's existing Case CASE-DEMO-01526**; if the live interaction genuinely created another eligible Case, establish the correct relationship first rather than silently changing demonstration records.

**Case screen path — spend time where value is visible:**

1. **Case Overview:** customer, reference, service reason, owner, status and separate banking record. The Case handles service work; verification-required remains on the Direct Deposit Demo Record, not on Case.
2. **Case Activity Center:** use the actual H079/H080 Case activity view with owner-accepted refresh/reopen behavior. This is distinct from Contact Timeline PCF.
3. **Documents / TED:** show already available SharePoint documents and the H082 published TED Integration tab. Owner's Contact/benefits display check remains outstanding; the tab is not proof of a live external SSA/TED system.
4. **Checklist / Direct Deposit:** show Elena's three existing Checklist Response records and the masked DD-DEMO-1042 bank row. H085 response controls were published, but physical Related-grid filtering and GUI save remain unaccepted; H082 Case/Contact checklist-host continuation is not deployed as fully trusted.
5. **Agent Workbench / recommendations:** preserve the currently selected earnings/fraud web resource on the Case form; H087's new SSA workbench is published but **not** installed into that slot. H081 recommendations are labeled **RuleBasedFallback**, not generated AI. H088 center is source-only.
6. **Review & Resolution — close the chapter here:** Review & Resolution workstream is **deployed and owner-verified inside the enhanced Case form**. Elena currently has **three applicable responses, zero complete**, verification pending and both authorization fields blank. “Not Ready” and **“Return for Verification”** are the correct supervisor guidance, **not** an approval or Case closure.

**Suggested script:** “We can see the Case history, supporting documents, the related banking issue and the three independent human-review requirements. Because none of the three checklist responses is completed and there is no recorded authorization, Dynamics correctly identifies the request as not ready. We're not going to change a protected payment destination or close the Case just to turn the demonstration green.”

**Conditional future complete path (do not execute without actual authority):** Approved human review → separate authorized destination update → independent destination readback → same-row verification flag clear/readback → authenticated Contact-bound portal refresh → proper Case resolution. If those controls aren't live, **leave the real Case and banking flag pending**, with any imagined after-state labeled as illustration.

**Transition — Case → reporting:** “We've seen how one constituent's request is managed and why the service remains pending. Now let's see how this structured work can support frontline workload and supervisor decisions across Cases.”


**Evidence/status and fallback:** Case Activity Center and embedded Review & Resolution have owner acceptance. H085 response-form GUI save, TED Contact rendering, H087 replacement, bank authorization and clearance are still conditional. If a tab is unavailable, remain on accepted Case screens, keeping the Case pending.
### 6. Operational reporting — 4 minutes

**Goal:** Move from **one Case** to **service insight** without a second technical tour. Show **Customer 360** (constituent and history), **Agent Workload** (owner, status and follow-up) and **Supervisor Operations** (queue, aging and metrics) in that order. Spend roughly a minute per report and reserve time for the next presenter. H071 resources are deployed/published, but authenticated generation-scoped extraction returned zero scoped Contacts/Cases; populated charts, non-admin role access and live browser behavior are not fully accepted. Zero returned **for that query** does not establish zero agency workload.

**Suggested script:** “Customer 360 connects individual context; Agent Workload organizes who is responsible for pending actions; Supervisor Operations helps leaders identify demand and aging. These are three perspectives on the same governed service process. We only treat numbers as real operational measures when the source, time window and user access are verified.”

**Transition — Brad → Beth:** “We've shown the constituent journey, the representative's Case work and the reporting opportunity. Beth will close by showing how channels, agents, roles and solution changes are configured and governed.”


**Evidence/status and fallback:** H071 reports have published assets but scoped data and representative access are not fully accepted. Show accurate empty/unavailable states or labeled preview figures—never an invented agency-wide zero.
### 7. Administration, governance and executive close — 4 minutes

**Goal:** End with confidence in the platform and honest pilot gates. Beth opens **one** approved read-only administration view for queues/workstreams, permissions and deployment governance; avoid a second tour of Case/Contact forms. Daniel's voice agent/routing belongs to his separate environment. TED and other legacy SSA systems are informational integrations unless explicitly validated. The executive closes by identifying the next accepted integration gates: verified human chat routing, record-derived Contact alert, fully accepted Contact questionnaire, trusted checklist/transaction, source-matched reports and role coverage.

**Suggested close:** “We showed why Elena needs help, how the representative can review her context and Case, and how the system avoids premature banking changes. Dynamics organizes this service process while human verification and authorization remain explicit controls. The same information model supports reporting and governed improvement as each remaining integration is tested.”

**Final handoff:** “That completes the service journey and its governance view. The remaining pilot decisions are which live integrations and role-based validations must pass before this becomes an accepted end-to-end demonstration.”

**15-minute executive cut (same seven sections):** Daniel 2:00; portal 2:00; Dynamics conversation 1:30; Contact 2:30; Case 4:00; reporting 1:30; administration/close 1:30. **Total 15:00.** Use pre-opened tabs and only already verified screens; don't attempt a new chat route, Case creation or banking authorization inside the cut.




**Evidence/status and fallback:** Beth uses a read-only approved admin surface. If it is unavailable, use a labeled governance capture. Do not imply a separate voice environment or external SSA legacy system is integrated.
## Other presenter lengths

| Variant | File | Intended use |
| --- | --- | --- |
| 13-minute rehearsal | [Interactive presenter](p010-2-presenter-13min.html) · [Cue notes](p010-6-presenter-13min.md) | Fast practice and fallback checks; preserves an earlier presentation layout |
| 40-minute current flow | [Interactive presenter](p010-1-presenter-40min.html) · [Cue notes](p010-5-presenter-40min.md) | Recommended customer demonstration; seven sections and current handoffs |
| 52-minute detailed reference | [Interactive presenter](p010-3-presenter-52min.html) · [Scene map](p010-7-presenter-52min.md) | Long-form and additional scene detail; older copy may contain superseded statuses |

**Publication boundary:** Updates to the private demo project do not automatically become public. The presenter owner must approve each sanitized library update.

## Run-of-show preflight and safe close

- Confirm Daniel's independent voice demonstration or labeled fallback, Elena's fictional portal status, accepted Dynamics user permissions, a real or prepared conversation, the correct Case-linked Elena Contact, the enhanced Case, three incomplete responses, published report fallback screens and Beth's administration view.
- Ensure no actual bank-change, identity secret, verification flag clearance, Case close or other live operation is attempted by the presentation.
- The accepted **presentation ending** is that an outstanding protected request remains **Not Ready / Return for Verification** until human checks and authorization are completed. This is a legitimate business control outcome, not a demonstration failure.

**Canonical public artifact:** P010-4. **Grading record:** [P010-8 · 89% / B+](p010-8-quality.md). Last static review: November 12, 2026. Browser acceptance and live integration acceptance are separately documented as incomplete where applicable.
