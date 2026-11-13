# P010-B · SSA Direct Deposit — Master Demo Runbook

**Version:** November 12, 2026 · **Primary duration:** 40 minutes (including Daniel's independent slot, Brad's live CRM walkthrough, questions, and the Beth handoff) · **Status:** Portal/chat and Timeline history supplemented; technical integration acceptance is separate.

**Main presenter:** [P010-1 interactive HTML](p010-1-presenter-40min.html) · **Speaking notes:** [P010-5](p010-5-presenter-40min.md) · [Collection home](index.html) · [P010-Q quality](p010-q-quality.md) · [P010-G grade](p010-g-grade.md) · [P010-S score](p010-s-score.json) · [P010-I improvements](p010-i-improvements.md)

> **Public-safe demonstration:** Fictional constituent Elena Martinez and synthetic Case/transaction. The file has no private Dynamics URL or live banking actions. Its business examples do not establish operational SSA deployment or authority to change benefits or bank information.

## Executive storyline — a consistent service experience

**Main point:** Chat is **another entry point into a consistent customer-service experience**, not simply another channel or disconnected chatbot application. Channel context can lead to an agent conversation, a Contact, Case work, relevant information from other systems, and operational visibility. The demonstration uses Dynamics 365 and **Dataverse as a proposed common customer-service data foundation**; SSA's authoritative benefit and payment systems are not replaced or represented as production-connected.

**Confirmed presentation boundaries:**
- **Daniel:** Independent section; Brad has no visibility into Daniel's exact script, voice features, or environment. Script only Brad's flexible handoff.
- **Brad:** Portal Overview → Direct Deposit → chat, two copyable citizen messages, human chat handoff into Customer Service workspace, two forms on the same Contact, conditional Timeline/chat history, synthetic Case, AI recommendations and CRM dashboards.
- **Primary Case:** **CAS-01523-T1R7X6**, marked **In Progress**. Linked synthetic banking request **DD-DEMO-H095-01523**, showing **Verification Required: Yes** and **Pending Authorization**. The Case summary may omit values shown on the banking form; do not claim a fully synchronized projection.
- **Constituent review:** On the standard Contact, Timeline displays history and may allow opening a stored chat record if available. The SSA-specific form shows a verification warning. Do not claim automatic transcript retention or completed identity checks.
- **Recommendations:** Explain actual provenance (e.g. rule-based fallback) and representative decision support, never autonomous transaction authorization.
- **Reporting:** These are **CRM Case and activity dashboards**, not the live contact-center channel metrics Beth will cover. Demo numbers are not SSA operational totals.
- **Extensibility:** Brief reference to mobile-capable Dynamics/portals and optional configured channels such as Facebook; no Alexa example, no claim that every custom form has passed mobile acceptance.

## Seven-section agenda — 40-minute total

| # | Presenter | Section | Minutes | Objective |
| --- | --- | --- | ---: | --- |
| 1 | Daniel (independent) → Brad | Daniel → Brad · Omnichannel bridge | **2** | Bridge into Brad's separate chat demonstration without presuming what Daniel showed. |
| 2 | Brad · digital engagement | Elena · Digital portal and Copilot chat | **6** | Show Overview, the verification notice, Direct Deposit context, two constituent messages and human assistance. |
| 3 | Brad · Customer Service workspace | Dynamics · Live representative conversation | **8** | Point to communication controls, summaries, response tools, Intent guidance, custom sidebar and reused assistant. |
| 4 | Brad · Contact | Contact · Standard and SSA-specific experiences | **8** | Show the same Elena Contact in two forms, emphasizing the Timeline and a stored chat activity if one actually exists. |
| 5 | Brad · Case | Case · Cross-system information and controlled decisions | **10** | Keep the Case within ten minutes by emphasizing the overview, Direct Deposit status, one external-information example, recommendations and human review. |
| 6 | Brad · CRM reporting | CRM dashboards · Agent and supervisor work | **4** | Show agent and supervisor visibility into everyday Case and activity work, not contact-center performance metrics. |
| 7 | Brad → Beth | Omnichannel close · Hand off to Beth | **2** | Close Brad's service journey and introduce possible channel extensibility without scripting Beth's part. |
| | | **Total** | **40** | Brief audience questions are included |

**Presenter rhythm:** One or two important capabilities per screen, actual actions, a brief question checkpoint and the next spoken transition. Do not tour every portal tab or workspace option.

**On-stage P010-1 layout:** Begin with the spoken introduction, then follow each timed **Point / click / show → Say this → Why it matters** stop. The individual **DONE** buttons retain stop completion in that browser only. The spoken **audience takeaway** follows the walkthrough and sits directly above the **next-section transition**; the question checkpoint remains below. In Chapter 3, short workspace talking points are incorporated into the appropriate stops, not duplicated in another card. Each target duration includes navigation, observation pauses, transitions and brief questions—not simply reading a script aloud. The older narrative, live-path fallback and truth-boundary guidance remain collapsed for optional reference.

**Two citizen chat messages:** P010-1 has dedicated Copy buttons. Only the customer sentence is copied, with normal ASCII punctuation and no “You said” label or formatting.

> I see a notice when logged into the mySSA portal that my direct deposit change needs additional verification. Can you explain what that means?

> Can I speak to an agent about my direct deposit? I really need to get it corrected before the holidays.

The configured chat assistant responds automatically; do not type a redundant agent reply to fill airtime.

### 1. Daniel → Brad · Omnichannel bridge — 2 minutes

**Owner:** Daniel (independent) → Brad  
**Goal:** Bridge into Brad's separate chat demonstration without presuming what Daniel showed.  
**Primary screen:** Daniel concludes → Brad opens Elena's portal

**Key highlight:** Chat is another entry point into a consistent customer-service experience—not an additional disconnected application.

**Say**

> Thanks, Daniel. I'm going to switch to a different constituent scenario, this time using chat. The point is not simply to add another way to contact SSA; chat is another entry point into a consistent customer-service experience. Whether someone begins through voice, a website or another appropriate channel, the goal is to give representatives the relevant service information and a process for continuing the work. We'll follow Elena's request from her digital experience through the representative's conversation, her Contact record, the Case and operational reporting. This is a different person and a different session from Daniel's example.

**What to show**

1. Allow Daniel to complete his own segment without assuming or describing his details.
2. Brad delivers only the high-level architecture bridge.
3. Open Elena's independent portal and introduce the Direct Deposit issue.

**Key beats**

- **Speaker transition:** Daniel owns his content; Brad does not recap its implementation.
- **Omnichannel theme:** Different channels can feed a consistent service process, even when scenarios are separate.

**Questions**

> Any quick questions about the broader idea of multiple service entry points before we move into Elena's journey?

**Transition**

> Let's start where Elena is already engaged—with her digital experience.

**Do not overstate:** Do not imply that Daniel's voice session, caller, transcript or tenant is transferred to Brad.

**Fallback:** If Daniel's topic changes, simply say: Thanks, Daniel. I'll show another channel and how that interaction fits into a consistent service process.


### 2. Elena · Digital portal and Copilot chat — 6 minutes

**Owner:** Brad · digital engagement  
**Goal:** Show the Overview verification notice, briefly visit Direct Deposit, then send two copyable constituent messages and request a human representative.  
**Primary screen:** Elena portal → Overview → Direct Deposit → Copilot chat

**Key highlight:** The portal makes the issue visible; chat is another entry point into consistent service, not a separate chatbot experience.

**Say**

> Elena is in a demonstration of a my Social Security-style portal. On Overview, she sees that her Direct Deposit change needs additional verification. I'll briefly open Direct Deposit so you can see the protected request, then use chat to ask for help. This is not a separate chatbot application or a production SSA mySSA environment. It illustrates another way to enter a consistent customer-service process. I'll send two short questions; the configured assistant will respond automatically. We don't need to type or disclose full banking information, passwords, Social Security numbers, or verification codes. Because this is a protected payment issue, we will request a human representative rather than use the chat to authorize a change.

**What to show**

1. Open portal Overview and highlight Elena's Direct Deposit verification notice; no detailed portal tour.
2. Open Direct Deposit for one high-level highlight; return to the available chat widget.
3. Use the two Copy Message buttons below to paste only the citizen messages into chat, sending Message 1 before Message 2. The assistant responds automatically.
4. Request escalation to a live representative; do not supply sensitive banking or identity details.
5. Benefits, Messages, Profile and Help Center may be mentioned as possible service experiences, but are not extra presentation stops.

**Portal pages — short highlights**

- **Overview:** Point to the example verification-required alert and briefly explain the service need.
- **Direct Deposit:** Show the request's review status and explain that a protected change requires human verification.
- **Chat:** Open the widget, send the two copyable citizen messages, allow the automatic reply, and request a representative.

**Copyable citizen text**

- **You said 1:** I see a notice when logged into the mySSA portal that my direct deposit change needs additional verification. Can you explain what that means?
- **You said 2:** Can I speak to an agent about my direct deposit? I really need to get it corrected before the holidays.

**Key beats**

- **Overview:** Verification alert and citizen service need.
- **Direct Deposit:** Human review is needed.
- **Message 1:** Ask what the notice means; let the configured assistant respond.
- **Message 2:** Request a human agent before the holidays.
- **Escalation:** Follow the actual human-assistance route to Dynamics.

**Questions**

> Any questions about the digital entry experience before we follow the conversation to a representative?

**Transition**

> Elena has asked for human assistance. Let's follow the conversation into Dynamics and see how the representative continues her service request.

**Do not overstate:** The portal is a fictional demonstration. Its DD-DEMO-1042 example is distinct from the Case's DD-DEMO-H095-01523. Do not claim bank authorization, verified portal-to-Case linkage or an automatically created Case.

**Fallback:** If the assistant response or transfer is delayed, show the intended response as a labeled rehearsal example; switch to a prepared representative only after identifying the fallback.


### 3. Dynamics · Live representative conversation — 8 minutes

**Owner:** Brad · Customer Service workspace  
**Goal:** Use the live chat scenario to showcase the broader agent workspace: support for chat and telephony, practical productivity tools, and embedded Copilot assistance.
**Primary screen:** Customer Service workspace → chat and summary → Intent-based suggestion → SSA Agent Support → my Social Security Assistant → Contact

**Key highlight:** Chat is today's example. The broader value is an agent workspace supporting multiple channels, including telephony, with summaries, quick replies, consultation, transfers and contextual assistance.

**Primary takeaway:** Dynamics 365 Contact Center offers a unified workspace for chat, telephony and other configured channels, equipping representatives with tools that help them serve customers efficiently.

**Say**

> Today we're demonstrating a live chat interaction, but the broader capability is the agent workspace. Dynamics 365 Contact Center can support chat, telephony and other configured channels in one place, giving representatives practical tools to assist customers more effectively. We can see the conversation summary, quick replies and consultation or transfer controls without touring every feature. Near the end, notice the Intent-based suggestion in the Copilot pane. It identifies the issue as SSA FAQ and gives the representative a suggested response and recommended path. I can take useful wording into the chat on the left, edit it and decide whether to send it. Finally, I want to show our custom SSA Agent Support sidebar. It can make multiple Copilot Studio agents available within this workspace for different service needs. I'll finish by selecting my Social Security Assistant, the same configured assistant Elena used in the public portal. When connected to approved published SSA website information, it can help with general questions here as well. That reuse illustrates consistent guidance across citizen and representative experiences, but it does not transfer Elena's authenticated session or authorize a banking change.

**What to show**

1. Accept Elena's actual live chat and briefly highlight the customer request in the communication panel.
2. Show the conversation summary, then mention Quick Replies, consultation and transfer, and other available communication options at a high level.
3. Near the end, show Copilot Intent-based suggestions on the right: Issue: SSA FAQ, suggested response and recommended path. Explain how the representative can adapt wording in the left chat before sending.
4. Open the custom SSA Agent Support sidebar and briefly identify that several linked Copilot Studio agents can be exposed in the agent workspace.
5. As the LAST sidebar highlight, select my Social Security Assistant. Show the actual response and explain it is the same configured assistant used through the public-facing portal, for general published SSA guidance where configured.
6. Then navigate to the correct Elena Contact and Timeline. Case Management Agent creation remains conditional and should be claimed only if verified.

**Agent tools — one sentence each**

- **Live chat and conversation summary:** Continue Elena's request and review the available conversation recap.
- **Quick Replies and consult/transfer:** Use configured response shortcuts or request help from another representative when needed.
- **Other workspace tools:** Voice/video, attachments, notes, rich messages, translation, text prediction and compliance nudges are options to mention, not individually demonstrate.
- **Case Management Agent:** Any automatically created Case must be independently verified; otherwise continue to the existing Case.
- **Intent-based suggestions — near the end:** The right-side Copilot pane displays Issue: SSA FAQ and guidance the representative can review, edit in the left chat and choose whether to send.
- **Custom SSA Agent Support sidebar:** Multiple linked Copilot Studio assistants can be surfaced within the representative workspace for different needs.
- **my Social Security Assistant — final highlight:** Select the same configured assistant used in Elena's public-facing experience. General published SSA guidance can be reused, without claiming shared authentication or protected account access.

**Key beats**

- **Live conversation:** Show the incoming request and conversation summary.
- **Productivity controls:** Briefly mention Quick Replies, consult/transfer and other agent options.
- **Intent guidance:** Show the right-hand SSA FAQ suggestion, then the editable response in left-side chat.
- **Custom sidebar:** Show linked Copilot Studio assistants in SSA Agent Support.
- **Final workspace highlight:** Open my Social Security Assistant to show the same assistant across public and internal experiences.
- **Contact transition:** Continue to Elena's Contact and Timeline; do not imply an automatic Case was created.

**Questions**

> Any questions about the representative's conversation experience before we open the customer record?

**Transition**

> We've seen the conversation, contextual guidance, and the same public-facing assistant available to the representative through a custom sidebar. Now let's open Elena's Contact to see the customer history behind the interaction.

**Do not overstate:** Telephony is a supported workspace capability, not a claim that this SSA environment has demonstrated a live call. The sidebar identifies my Social Security Assistant as the public-facing agent reused internally; this does not establish inherited portal authentication, a shared session or protected-record access. Public SSA website grounding requires an approved configured knowledge source. The SSA FAQ suggestion is observed; one-click insertion and Case Management Agent creation are not independently proven.

**Fallback:** If Intent suggestions do not appear, describe the observed guidance briefly. If the custom assistant is slow, show the configured sidebar and avoid claiming an answer was generated. Continue to the Contact without troubleshooting.


### 4. Contact · Standard and SSA-specific experiences — 8 minutes

**Owner:** Brad · Contact  
**Goal:** Show the same Elena Contact in two forms, emphasizing the Timeline and a stored chat activity if one actually exists.  
**Primary screen:** Same Elena Contact → standard Customer Insights form → SSA service form

**Key highlight:** Standard Contact → service Timeline and possible chat history → SSA-specific Contact form with verification and related Direct Deposit context.

**Say**

> This is Contact – Customer Insights – SSA. Alongside the usual profile information, I want to emphasize the Timeline. Today representatives may need to open another system to find prior conversations. When customer interactions are recorded or integrated into Dynamics, that history can be surfaced on the Contact. If we have a chat activity here, I'll open it and show the history actually stored. We don't need to claim a complete transcript exists if the record only shows an activity or summary. Now I'll switch to SSA | Constituent Verification & Direct Deposit, remaining on the same Elena Contact. It's a purpose-built view for constituent verification, a visible Direct Deposit warning, Super Six, related records and activities—all against the same underlying customer-service data, not a duplicate customer. Dataverse is the proposed service-information foundation while SSA's authoritative benefit and payment systems remain distinct.

**What to show**

1. Open the Contact linked to CAS-01523-T1R7X6, using Contact – Customer Insights – SSA.
2. Highlight the Timeline and explain how one customer record can surface interaction history that might otherwise require switching systems.
3. If a real chat record is visible in the Timeline, open it and show its actual saved messages, transcript or summary. If not, explain the intended capability using existing activities only.
4. Switch to SSA | Constituent Verification & Direct Deposit on the SAME Contact.
5. Highlight the displayed verification alert, available Super Six, Direct Deposit related context and activity history without visiting every field.

**Key beats**

- **Standard Contact:** Core profile and consolidated Timeline.
- **Chat history:** Open a stored interaction record only if the underlying messages are accessible.
- **SSA form:** Same Contact, role-specific verification and Direct Deposit layout.
- **Dataverse:** Proposed shared service data; authoritative SSA source systems remain separate.

**Questions**

> Any questions about consolidating interaction history and tailoring the Contact experience without duplicating the customer record?

**Transition**

> We've seen the same customer record supporting historical interactions and an SSA-specific experience. Now let's open Elena's Case and review the work behind the Direct Deposit request.

**Do not overstate:** A Timeline is a service-history surface, not proof that all live chat transcripts are automatically retained. Show stored chat details only if accessible on this Contact; do not invent evidence or imply identity verification was completed.

**Fallback:** If the chat record isn't available, show actual Timeline activities and describe retained conversations as a possible configured capability. Use two pre-opened views of the same Contact if needed.


### 5. Case · Cross-system information and controlled decisions — 10 minutes

**Owner:** Brad · Case  
**Goal:** Keep the Case within ten minutes by emphasizing the overview, Direct Deposit status, one external-information example, recommendations and human review.  
**Primary screen:** Elena Case CAS-01523-T1R7X6 / request DD-DEMO-H095-01523

**Key highlight:** CAS-01523-T1R7X6 → Direct Deposit → synthetic bank record → supporting system information → AI recommendations → review.

**Say**

> Here's Elena's in-progress Case, CAS-01523-T1R7X6. Case Overview gives us the request, owner, status and recent activity; I'll keep that high level rather than walk through every widget. The Direct Deposit tab brings in the associated request. The synthetic banking record shows Verification Required and Pending Authorization. That tells us what remains, not that any banking change is approved. We can also bring information from benefits, payment or document systems into a consolidated service experience; I'll use one supporting view to illustrate the pattern without claiming a production SSA integration. The AI Recommendation Center can present guidance and possible next steps. If its provenance is labeled rule-based fallback, we'll say that rather than claiming an autonomous AI decision. Finally, Review & Resolution helps the representative assess outstanding work. This request remains pending; we do not change account details or close it prematurely.

**What to show**

1. Open Case CAS-01523-T1R7X6 and highlight Overview, In Progress, owner, description and Timeline.
2. Open Direct Deposit; locate request DD-DEMO-H095-01523. Highlight pending verification and authorization.
3. Briefly open the related banking record; do not assume its fields and the Case summary show identical data.
4. Show ONE relevant supporting view: Benefits & Payments, TED or documents, describing source integration at a high level.
5. Show AI Recommendation Center with actual recommendation provenance, then Review & Resolution as available for this Case.
6. Leave the Case and banking request pending; don't repeat the old Case's checklist counts or supervisor recommendation.

**Key beats**

- **Case Overview:** Status, ownership and recent service activity.
- **Direct Deposit:** H095 synthetic request and verification-required status.
- **Other systems:** One benefits/TED/document example; label integration boundaries.
- **AI Recommendation Center:** Assisted guidance, with rule-based provenance where shown.
- **Review & Resolution:** Outstanding work and human-controlled decision, not premature closure.

**Questions**

> Any questions about how the Case brings together information and guides the next action before we move to operational dashboards?

**Transition**

> We've seen the work involved in one constituent request. Let's widen the view to the day-to-day CRM workload for agents and supervisors.

**Do not overstate:** The synthetic Case and banking form can show different completeness of saved fields; do not imply full synchronization. No bank write, authorization, verification clearance, automatic resolution or externally verified SSA integration.

**Fallback:** If an embedded tab is slow, state its role at a high level and continue with the saved Case and pending state; do not troubleshoot on stage.


### 6. CRM dashboards · Agent and supervisor work — 4 minutes

**Owner:** Brad · CRM reporting  
**Goal:** Show agent and supervisor visibility into everyday Case and activity work, not contact-center performance metrics.  
**Primary screen:** Dynamics CRM Agent Dashboard and Supervisor Dashboard

**Key highlight:** Agent Dashboard / My Workload → Supervisor Operations: workload, aging and follow-up.

**Say**

> Let's step back from one constituent's Case. An agent needs to know what work is assigned, which requests are open and where follow-up is required. The Agent Dashboard and My Workload help organize that day-to-day work. A supervisor needs a broader view of Case ownership, workload distribution and aging. That's what Supervisor Operations can provide. This is CRM service information: customer records, Cases and activities. It's a different perspective from the contact-center channel and performance metrics Beth will cover. The values shown here are from our demonstration data, not official SSA operational totals.

**What to show**

1. Open Agent Dashboard/My Workload and highlight one pending-work or ownership insight.
2. Open Supervisor Operations and Customer 360/My Workload as appropriate; describe one supervisory insight.
3. Distinguish CRM Case/activity operations from Beth's contact-center performance scope. Avoid every graph and filter.

**Key beats**

- **Agent operations:** Assignments and follow-ups.
- **Supervisor operations:** Open work, aging and Case-level oversight.
- **Reporting boundary:** CRM operational view, not contact-center performance.

**Questions**

> Any questions about CRM workload visibility before I close my portion with the broader architecture?

**Transition**

> The same organized service data supports the constituent and the people managing the work. Let me close on how that extends to other engagement channels.

**Do not overstate:** Dashboard values are demonstration/scope-specific and not government production service metrics.

**Fallback:** If a chart is empty, describe the operational perspective instead of inventing a number.


### 7. Omnichannel close · Hand off to Beth — 2 minutes

**Owner:** Brad → Beth  
**Goal:** Close Brad's service journey and introduce possible channel extensibility without scripting Beth's part.  
**Primary screen:** Brad ends CRM walkthrough → Beth begins her own contact-center section

**Key highlight:** Voice, chat, web and mobile-capable Dynamics/portals are ways to engage with a consistent service experience; Facebook is only a future configured option.

**Say**

> To close my portion: chat isn't a standalone solution. It's an entry point into a consistent customer-service experience. We saw Elena move from digital engagement into a representative conversation, two views of the same Contact, a Case with related information and operational reporting. Dynamics 365 and Dataverse provide a proposed common foundation for customer-service records, while SSA's benefit and payment systems may remain authoritative. The platform supports mobile experiences and additional web or configured engagement channels, potentially including social messaging such as Facebook if appropriate. I am not saying SSA has implemented every channel or that every custom screen has passed mobile testing. That completes my section. Beth will cover the contact-center capabilities and operations.

**What to show**

1. Finish from the CRM dashboard without opening unrelated administrative settings.
2. Briefly mention mobile-capable platform experiences and future channel extensibility; avoid Alexa and detailed voice topics.
3. Invite final questions on Brad's section, then hand over to Beth without prescribing her material.

**Key beats**

- **Consistent service:** Chat is one entry point into customer-service information.
- **Common data:** Dataverse proposed for service; authoritative SSA systems remain distinct.
- **Extensibility:** Web/mobile and social channels as optional options.
- **Handoff:** Ask for questions, then give Beth the floor.

**Questions**

> Before I hand over, any final questions about the constituent, representative and CRM experience?

**Transition**

> Beth, I'll turn it over to you for the contact-center capabilities and operational view.

**Do not overstate:** Facebook is an optional future channel, not an SSA requirement or live demonstration; don't imply all custom pages are mobile-validated or that Dataverse is SSA's adopted authoritative system.

**Fallback:** Use the short close: Different entry points can contribute to a consistent service experience, with common customer-service information. Beth will take us through the contact-center operations.

## Show-day preparation and decision boundaries

- Daniel owns his independent portion. Brad prepares the opening bridge regardless of the voice scenario.
- Prepare portal Overview and Direct Deposit, then use the two Copy buttons in the P010-1 HTML for chat. The configured assistant answers automatically. Verify chat-to-agent routing and keep a **clearly labeled** fallback.
- Open the correct Elena Contact linked to **CAS-01523-T1R7X6**. In **Contact – Customer Insights – SSA**, show Timeline history and open a chat record only if its stored contents are available. Then show **SSA | Constituent Verification & Direct Deposit** on the same Contact.
- Have Elena's synthetic Direct Deposit request **DD-DEMO-H095-01523** available in the Case and banking record. The bank detail may contain values which the Case summary displays as *not recorded*; avoid describing those fields as fully synchronized.
- Use **8 minutes on Contact and 10 on Case**. Keep Case Overview high-level: Direct Deposit, ONE other-system example, AI Recommendation Center, then available Review & Resolution. Only mention real Intent Agent suggestions/Case Management Agent Case creation if verified. **Do not import checklist counts or a supervisor recommendation from a different Case**.
- Open Agent Dashboard and Supervisor Operations for CRM work-management reporting. Do not conflate them with Beth's contact-center reporting.
- No real bank edits, identity claims, authorization, transaction execution, verification flag clearance, or Case closure.
- Each section includes one contextual question checkpoint; allow a brief pause and defer detailed ISD/integration discovery.
- End Brad's section with a concise omnichannel/mobile-capable architecture statement, then Beth's handoff. **Beth's content is her own** and is not scripted here.

## Versions and publishing boundaries

| P ID | Artifact | Use |
| --- | --- | --- |
| [P010-1](p010-1-presenter-40min.html) | 40-minute current interactive | Canonical seven-section storyline in this runbook |
| [P010-5](p010-5-presenter-40min.md) | Current speaker notes | Compact, ready-to-use highlights/checkpoints and transitions |
| [P010-2](p010-2-presenter-13min.html) · [P010-6 notes](p010-6-presenter-13min.md) | Historical 13-minute rehearsal | Earlier story, not fully restaged to this Case |
| [P010-3](p010-3-presenter-52min.html) · [P010-7 notes](p010-7-presenter-52min.md) | Historical 52-minute walkthrough | Prior detailed material, may contain superseded evidence |

**Publication:** The public presenter source is versioned in GitHub. Public publication and operational/live integration acceptance remain separate. The prior talk track is preserved on backup branch `backup/p010-before-portal-chat-copy-2026-11-12` (latest), plus the earlier backup.

**Quality:** [P010-Q](p010-q-quality.md) / [P010-G](p010-g-grade.md) / [P010-S](p010-s-score.json) and [P010-I next improvements](p010-i-improvements.md) are evaluated separately from this content update. No grade increase is implied without revalidation.
