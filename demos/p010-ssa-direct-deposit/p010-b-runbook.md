# P010-B · SSA Direct Deposit — Master Demo Runbook

**Version:** November 12, 2026 · **Primary duration:** 40 minutes (including Daniel's independent slot, Brad's live CRM walkthrough, questions, and the Beth handoff) · **Status:** Presentation script finalized; technical integration acceptance is separate.

**Main presenter:** [P010-1 interactive HTML](p010-1-presenter-40min.html) · **Speaking notes:** [P010-5](p010-5-presenter-40min.md) · [Collection home](index.html) · [P010-Q quality](p010-q-quality.md) · [P010-G grade](p010-g-grade.md) · [P010-S score](p010-s-score.json) · [P010-I improvements](p010-i-improvements.md)

> **Public-safe demonstration:** Fictional constituent Elena Martinez and synthetic Case/transaction. The file has no private Dynamics URL or live banking actions. Its business examples do not establish operational SSA deployment or authority to change benefits or bank information.

## Executive storyline — a consistent service experience

**Main point:** Chat is **another entry point into a consistent customer-service experience**, not simply another channel or disconnected chatbot application. Channel context can lead to an agent conversation, a Contact, Case work, relevant information from other systems, and operational visibility. The demonstration uses Dynamics 365 and **Dataverse as a proposed common customer-service data foundation**; SSA's authoritative benefit and payment systems are not replaced or represented as production-connected.

**Confirmed presentation boundaries:**
- **Daniel:** Independent section; Brad has no visibility into Daniel's exact script, voice features, or environment. Script only Brad's flexible handoff.
- **Brad:** Live chat handoff to Dynamics Customer Service workspace, two forms on the **same Elena Contact**, synthetic Direct Deposit Case and banking record, AI Recommendation Center, CRM agent/supervisor dashboards.
- **Primary Case:** **CAS-01523-T1R7X6**, marked **In Progress**. Linked synthetic banking request **DD-DEMO-H095-01523**, showing **Verification Required: Yes** and **Pending Authorization**. The Case summary may omit values shown on the banking form; do not claim a fully synchronized projection.
- **Constituent review:** The SSA-specific Contact form visibly shows a Direct Deposit verification warning; this is evidence of a rendered alert, not proof of every source/relationship or completed identity checks.
- **Recommendations:** Explain actual provenance (e.g. rule-based fallback) and representative decision support, never autonomous transaction authorization.
- **Reporting:** These are **CRM Case and activity dashboards**, not the live contact-center channel metrics Beth will cover. Demo numbers are not SSA operational totals.
- **Extensibility:** Brief reference to mobile-capable Dynamics/portals and optional configured channels such as Facebook; no Alexa example, no claim that every custom form has passed mobile acceptance.

## Seven-section agenda

| # | Presenter | Section | Time | Objective |
| --- | --- | --- | ---: | --- |
| 1 | Daniel (independent) → Brad | Daniel → Brad · Omnichannel bridge | **5 min** | Bridge into Brad's separate chat demonstration without presuming what Daniel showed. |
| 2 | Brad · digital engagement | Elena · Digital portal and Copilot chat | **5 min** | Explain why Elena needs help and show a short chat-to-human request. |
| 3 | Brad · Customer Service workspace | Dynamics · Live representative conversation | **4 min** | Demonstrate the working handoff and connect conversation to persistent service information. |
| 4 | Brad · Contact | Contact · Standard and SSA-specific experiences | **7 min** | Demonstrate the same Contact record through two different forms and highlight the role-based service experience. |
| 5 | Brad · Case | Case · Cross-system information and controlled decisions | **11 min** | Show how the Case consolidates related information, recommendations and next actions while authorization remains pending. |
| 6 | Brad · CRM reporting | CRM dashboards · Agent and supervisor work | **4 min** | Show agent and supervisor visibility into everyday Case and activity work, not contact-center performance metrics. |
| 7 | Brad → Beth | Omnichannel close · Hand off to Beth | **4 min** | Close Brad's service journey and introduce possible channel extensibility without scripting Beth's part. |
| | | **Total** | **40 min** | Allow brief audience-question pauses within each allocation |

**Presenter rhythm:** In each of Brad's sections: goal → one or two relevant highlights → actual screen actions → brief questions → exact next-section transition. Ask questions without inviting an extended technical design session. If a question requires source-specific discovery, acknowledge it for follow-up and keep the demonstration moving.

### 1. Daniel → Brad · Omnichannel bridge — 5 minutes

**Owner:** Daniel (independent) → Brad  
**Goal:** Bridge into Brad's separate chat demonstration without presuming what Daniel showed.  
**On screen:** Daniel concludes → Brad opens Elena's portal

**One message to land:** Chat is another entry point into a consistent customer-service experience—not an additional disconnected application.

**Spoken talk track**

> Thanks, Daniel. I'm going to switch to a different constituent scenario, this time using chat. The point is not simply to add another way to contact SSA; chat is another entry point into a consistent customer-service experience. Whether someone begins through voice, a website or another appropriate channel, the goal is to give representatives the relevant service information and a process for continuing the work. We'll follow Elena's request from her digital experience through the representative's conversation, her Contact record, the Case and operational reporting. This is a different person and a different session from Daniel's example.

**What to show (in order)**

1. Allow Daniel to complete his own segment without assuming or describing his details.
2. Brad delivers only the high-level architecture bridge.
3. Open Elena's independent portal and introduce the Direct Deposit issue.

**High-level screen beats**

- **Speaker transition:** Daniel owns his content; Brad does not recap its implementation.
- **Omnichannel theme:** Different channels can feed a consistent service process, even when scenarios are separate.

**Audience checkpoint**

> Any quick questions about the broader idea of multiple service entry points before we move into Elena's journey?

**Transition to next section**

> Let's start where Elena is already engaged—with her digital experience.

**Demonstration boundary:** Do not imply that Daniel's voice session, caller, transcript or tenant is transferred to Brad.

**If a view is unavailable:** If Daniel's topic changes, simply say: Thanks, Daniel. I'll show another channel and how that interaction fits into a consistent service process.


### 2. Elena · Digital portal and Copilot chat — 5 minutes

**Owner:** Brad · digital engagement  
**Goal:** Explain why Elena needs help and show a short chat-to-human request.  
**On screen:** Elena portal → review notice → Copilot Studio chat

**One message to land:** Verification notice → brief natural-language guidance → live representative handoff.

**Spoken talk track**

> Elena Martinez has a Direct Deposit change that needs additional verification. Rather than finding a phone number or figuring out which office handles the request, she can ask for help from her current portal experience. I'll ask one question through Copilot Studio and request a representative; I'm not going to spend time demonstrating every bot topic. The value is how this digital interaction becomes part of a broader service process. Because this request involves protected banking information, a human must handle the appropriate verification and authorization. The chatbot isn't changing payment details or confirming an unverified transaction.

**What to show (in order)**

1. Point out Elena's fictional verification-required portal notice and launch chat.
2. Ask a concise question about the verification notice; avoid a chatbot feature tour.
3. Use the configured live chat escalation to request a representative in Dynamics Customer Service workspace.

**High-level screen beats**

- **The service need:** Elena sees a Direct Deposit verification alert.
- **Copilot guidance:** One question and then a human-help request.
- **Why escalate:** Protected payment changes remain governed by human review.

**Audience checkpoint**

> Any questions about the digital entry experience before we follow the conversation to a representative?

**Transition to next section**

> Elena has asked for help. Let's follow the interaction into Dynamics and see what the representative receives.

**Demonstration boundary:** Do not claim a portal notice was automatically passed as trusted, authenticated Dataverse context or that the bot authorized banking changes.

**If a view is unavailable:** If the live route stalls on stage, identify a prepared agent view as the backup instead of simulating a successful transfer.


### 3. Dynamics · Live representative conversation — 4 minutes

**Owner:** Brad · Customer Service workspace  
**Goal:** Demonstrate the working handoff and connect conversation to persistent service information.  
**On screen:** Dynamics Customer Service workspace → live chat / Active Conversation

**One message to land:** Accept the incoming chat and show the actual issue/context before navigating to Contact.

**Spoken talk track**

> Here I'm in Dynamics 365 Customer Service workspace, accepting Elena's conversation. The representative can continue the interaction, see the message and work with the context that actually arrived. More importantly, this is where an engagement channel connects to the rest of the service process. We don't need separate customer-service databases or back-office applications for every channel. The representative can move from the conversation to customer information, activities and casework in Dynamics. I'll show that continuity rather than tour the communication controls.

**What to show (in order)**

1. Accept the actual incoming chat and point to Elena's question.
2. Show one or two relevant items in Active Conversation and only the context actually delivered.
3. Navigate to the exact Case-linked Elena Contact; do not invent automatic Case creation.

**High-level screen beats**

- **Live chat acceptance:** Follow the human handoff into Customer Service workspace.
- **Context:** Only describe delivered conversation details.
- **Service continuity:** Move into the correct Contact.

**Audience checkpoint**

> Any questions about the representative's conversation experience before we open the customer record?

**Transition to next section**

> We know why Elena reached out. Now let's see how the same customer data supports a standard Contact experience and a purpose-built SSA one.

**Demonstration boundary:** Successful live chat arrival does not establish verified identity, a trusted portal alert payload or automatic Case creation.

**If a view is unavailable:** If the chat is not visible during the meeting, say the route was tested and clearly show a prepared agent conversation.


### 4. Contact · Standard and SSA-specific experiences — 7 minutes

**Owner:** Brad · Contact  
**Goal:** Demonstrate the same Contact record through two different forms and highlight the role-based service experience.  
**On screen:** Same Elena Contact → standard Customer Insights form → SSA service form

**One message to land:** Contact – Customer Insights – SSA → SSA | Constituent Verification & Direct Deposit: same record, tailored experience.

**Spoken talk track**

> First, this is Contact – Customer Insights – SSA. It's a standard Dynamics 365 customer view with core customer information and interaction history. I'll highlight the profile and Timeline without walking through every field. Now I'll switch to SSA | Constituent Verification & Direct Deposit. This is still the same Elena Contact and underlying data and security, but organized around an SSA representative's responsibilities. We can see a Direct Deposit verification alert, the Super Six review experience, related request information and activities. This isn't another copy of the customer. Dataverse is the proposed common customer-service data foundation, while authoritative benefit and payment systems can remain in their existing systems and supply relevant information through integration.

**What to show (in order)**

1. Open the Elena Contact linked to Case CAS-01523-T1R7X6; avoid a first-by-name duplicate.
2. Show Contact – Customer Insights – SSA briefly: standard customer fields and Timeline.
3. Switch forms on the SAME Contact to SSA | Constituent Verification & Direct Deposit.
4. Highlight the visible Direct Deposit warning, available Super Six, related banking context and activities—one takeaway per tab.

**High-level screen beats**

- **Standard Contact:** Customer Insights – SSA: profile and interaction history.
- **Form switch:** Same Contact record, no duplicate customer.
- **SSA Contact:** Verification alert, Super Six, related Direct Deposit and activities.
- **Data foundation:** Dataverse as proposed common customer-service foundation, source systems stay authoritative.

**Audience checkpoint**

> Any questions about tailoring the representative's experience while maintaining the same underlying Contact record?

**Transition to next section**

> Now that we've seen Elena's customer context and outstanding verification needs, let's open the Case that organizes the work.

**Demonstration boundary:** Visible alert is evidence of a displayed status, not necessarily a proven synchronized field projection; Super Six display does not prove verified identity. Dataverse is proposed for service information, not SSA's benefit-system source of truth.

**If a view is unavailable:** If form switching is slow, use two pre-opened views of the exact same Contact and explain the form change.


### 5. Case · Cross-system information and controlled decisions — 11 minutes

**Owner:** Brad · Case  
**Goal:** Show how the Case consolidates related information, recommendations and next actions while authorization remains pending.  
**On screen:** Elena Case CAS-01523-T1R7X6 / request DD-DEMO-H095-01523

**One message to land:** CAS-01523-T1R7X6 → Direct Deposit → synthetic bank record → supporting system information → AI recommendations → review.

**Spoken talk track**

> Here's Elena's in-progress Case, CAS-01523-T1R7X6. Case Overview gives us the request, owner, status and recent activity; I'll keep that high level rather than walk through every widget. The Direct Deposit tab brings in the associated request. The synthetic banking record shows Verification Required and Pending Authorization. That tells us what remains, not that any banking change is approved. We can also bring information from benefits, payment or document systems into a consolidated service experience; I'll use one supporting view to illustrate the pattern without claiming a production SSA integration. The AI Recommendation Center can present guidance and possible next steps. If its provenance is labeled rule-based fallback, we'll say that rather than claiming an autonomous AI decision. Finally, Review & Resolution helps the representative assess outstanding work. This request remains pending; we do not change account details or close it prematurely.

**What to show (in order)**

1. Open Case CAS-01523-T1R7X6 and highlight Overview, In Progress, owner, description and Timeline.
2. Open Direct Deposit; locate request DD-DEMO-H095-01523. Highlight pending verification and authorization.
3. Briefly open the related banking record; do not assume its fields and the Case summary show identical data.
4. Show ONE relevant supporting view: Benefits & Payments, TED or documents, describing source integration at a high level.
5. Show AI Recommendation Center with actual recommendation provenance, then Review & Resolution as available for this Case.
6. Leave the Case and banking request pending; don't repeat the old Case's checklist counts or supervisor recommendation.

**High-level screen beats**

- **Case Overview:** Status, ownership and recent service activity.
- **Direct Deposit:** H095 synthetic request and verification-required status.
- **Other systems:** One benefits/TED/document example; label integration boundaries.
- **AI Recommendation Center:** Assisted guidance, with rule-based provenance where shown.
- **Review & Resolution:** Outstanding work and human-controlled decision, not premature closure.

**Audience checkpoint**

> Any questions about how the Case brings together information and guides the next action before we move to operational dashboards?

**Transition to next section**

> We've seen the work involved in one constituent request. Let's widen the view to the day-to-day CRM workload for agents and supervisors.

**Demonstration boundary:** The synthetic Case and banking form can show different completeness of saved fields; do not imply full synchronization. No bank write, authorization, verification clearance, automatic resolution or externally verified SSA integration.

**If a view is unavailable:** If an embedded tab is slow, state its role at a high level and continue with the saved Case and pending state; do not troubleshoot on stage.


### 6. CRM dashboards · Agent and supervisor work — 4 minutes

**Owner:** Brad · CRM reporting  
**Goal:** Show agent and supervisor visibility into everyday Case and activity work, not contact-center performance metrics.  
**On screen:** Dynamics CRM Agent Dashboard and Supervisor Dashboard

**One message to land:** Agent Dashboard / My Workload → Supervisor Operations: workload, aging and follow-up.

**Spoken talk track**

> Let's step back from one constituent's Case. An agent needs to know what work is assigned, which requests are open and where follow-up is required. The Agent Dashboard and My Workload help organize that day-to-day work. A supervisor needs a broader view of Case ownership, workload distribution and aging. That's what Supervisor Operations can provide. This is CRM service information: customer records, Cases and activities. It's a different perspective from the contact-center channel and performance metrics Beth will cover. The values shown here are from our demonstration data, not official SSA operational totals.

**What to show (in order)**

1. Open Agent Dashboard/My Workload and highlight one pending-work or ownership insight.
2. Open Supervisor Operations and Customer 360/My Workload as appropriate; describe one supervisory insight.
3. Distinguish CRM Case/activity operations from Beth's contact-center performance scope. Avoid every graph and filter.

**High-level screen beats**

- **Agent operations:** Assignments and follow-ups.
- **Supervisor operations:** Open work, aging and Case-level oversight.
- **Reporting boundary:** CRM operational view, not contact-center performance.

**Audience checkpoint**

> Any questions about CRM workload visibility before I close my portion with the broader architecture?

**Transition to next section**

> The same organized service data supports the constituent and the people managing the work. Let me close on how that extends to other engagement channels.

**Demonstration boundary:** Dashboard values are demonstration/scope-specific and not government production service metrics.

**If a view is unavailable:** If a chart is empty, describe the operational perspective instead of inventing a number.


### 7. Omnichannel close · Hand off to Beth — 4 minutes

**Owner:** Brad → Beth  
**Goal:** Close Brad's service journey and introduce possible channel extensibility without scripting Beth's part.  
**On screen:** Brad ends CRM walkthrough → Beth begins her own contact-center section

**One message to land:** Voice, chat, web and mobile-capable Dynamics/portals are ways to engage with a consistent service experience; Facebook is only a future configured option.

**Spoken talk track**

> To close my portion: chat isn't a standalone solution. It's an entry point into a consistent customer-service experience. We saw Elena move from digital engagement into a representative conversation, two views of the same Contact, a Case with related information and operational reporting. Dynamics 365 and Dataverse provide a proposed common foundation for customer-service records, while SSA's benefit and payment systems may remain authoritative. The platform supports mobile experiences and additional web or configured engagement channels, potentially including social messaging such as Facebook if appropriate. I am not saying SSA has implemented every channel or that every custom screen has passed mobile testing. That completes my section. Beth will cover the contact-center capabilities and operations.

**What to show (in order)**

1. Finish from the CRM dashboard without opening unrelated administrative settings.
2. Briefly mention mobile-capable platform experiences and future channel extensibility; avoid Alexa and detailed voice topics.
3. Invite final questions on Brad's section, then hand over to Beth without prescribing her material.

**High-level screen beats**

- **Consistent service:** Chat is one entry point into customer-service information.
- **Common data:** Dataverse proposed for service; authoritative SSA systems remain distinct.
- **Extensibility:** Web/mobile and social channels as optional options.
- **Handoff:** Ask for questions, then give Beth the floor.

**Audience checkpoint**

> Before I hand over, any final questions about the constituent, representative and CRM experience?

**Transition to next section**

> Beth, I'll turn it over to you for the contact-center capabilities and operational view.

**Demonstration boundary:** Facebook is an optional future channel, not an SSA requirement or live demonstration; don't imply all custom pages are mobile-validated or that Dataverse is SSA's adopted authoritative system.

**If a view is unavailable:** Use the short close: Different entry points can contribute to a consistent service experience, with common customer-service information. Beth will take us through the contact-center operations.

## Show-day preparation and decision boundaries

- Daniel owns his independent portion. Brad prepares the opening bridge regardless of the voice scenario.
- Pre-open Elena's portal, a tested live chat-to-human route, and Dynamics Customer Service workspace. Prepare a **clearly labeled** representative fallback.
- Identify the specific Contact linked to Case **CAS-01523-T1R7X6** and open both form views on that **same record**. Form labels: **Contact – Customer Insights – SSA** and **SSA | Constituent Verification & Direct Deposit**.
- Have Elena's synthetic Direct Deposit request **DD-DEMO-H095-01523** available in the Case and banking record. The bank detail may contain values which the Case summary displays as *not recorded*; avoid describing those fields as fully synchronized.
- Keep Case Overview high-level. Show Direct Deposit, ONE other-system view, AI Recommendation Center, then Review & Resolution only as actually available for this Case. **Do not import checklist counts or a supervisor recommendation from a different Case**.
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

**Publication:** The public presenter source is versioned in GitHub. Public publication and operational/live integration acceptance remain separate. The prior talk track is preserved on backup branch `backup/p010-pre-final-talk-track-2026-11-12`.

**Quality:** [P010-Q](p010-q-quality.md) / [P010-G](p010-g-grade.md) / [P010-S](p010-s-score.json) and [P010-I next improvements](p010-i-improvements.md) are evaluated separately from this content update. No grade increase is implied without revalidation.
