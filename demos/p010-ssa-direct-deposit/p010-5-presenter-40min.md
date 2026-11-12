# P010-5 · SSA Direct Deposit — 40-Minute Presenter Notes

**Current:** November 12, 2026 · Seven sections · **40 minutes** including questions. Daniel owns his independent segment; Brad covers portal, chat, CRM and transitions; Beth owns her separate demonstration.

[P010-1 live presenter](p010-1-presenter-40min.html) · [P010-B runbook](p010-b-runbook.md) · [Collection](index.html) · [P010-Q quality](p010-q-quality.md) · [P010-I improvements](p010-i-improvements.md)

**Presenter display convention:** P010-1 is the on-stage screen-by-screen guide. Every chapter has timed **Point / click / show**, **Say this**, and **Why it matters** stops, followed by an exact spoken takeaway. These target minutes include navigation, pauses to inspect the UI, transitions and questions; they are not a claim that reading the words takes that long. The older full narrative remains available in a collapsed rehearsal section. Live-path fallback and truth-boundary reminders remain collapsed by default. This Markdown note preserves the fuller source script and caveats.

## Core message

- Chat is **another entry point into a consistent customer-service experience**, not another disconnected chatbot.
- **Dataverse is the proposed common customer-service data foundation**. SSA's authoritative benefit and payment systems are not replaced.
- The same Contact can show **standard and SSA-specific forms**; Timeline can expose interaction history captured from available sources.
- The Case assembles work, relevant information from other systems, recommendations and human-controlled decisions.
- Agent and supervisor dashboards cover **CRM Case/task operations**, not the separate contact-center performance metrics.

## Timed route

| # | Presenter | Time | Main screen |
| --- | --- | ---: | --- |
| 1 | Daniel (independent) → Brad | 2 min | Daniel concludes → Brad opens Elena's portal |
| 2 | Brad · digital engagement | 6 min | Elena portal → Overview → Direct Deposit → Copilot chat |
| 3 | Brad · Customer Service workspace | 8 min | Dynamics Customer Service workspace → accept chat → conversation panel → Elena Contact |
| 4 | Brad · Contact | 8 min | Same Elena Contact → standard Customer Insights form → SSA service form |
| 5 | Brad · Case | 10 min | Elena Case CAS-01523-T1R7X6 / request DD-DEMO-H095-01523 |
| 6 | Brad · CRM reporting | 4 min | Dynamics CRM Agent Dashboard and Supervisor Dashboard |
| 7 | Brad → Beth | 2 min | Brad ends CRM walkthrough → Beth begins her own contact-center section |
| | **Total** | **40 min** | Keep questions brief; park technical discovery |

## The only two customer messages to paste

The **two Copy buttons in P010-1 HTML** copy only the text below, without a label or formatting, with ordinary ASCII punctuation. The configured chatbot answers automatically.

**You said — Message 1**

I see a notice when logged into the mySSA portal that my direct deposit change needs additional verification. Can you explain what that means?

**You said — Message 2**

Can I speak to an agent about my direct deposit? I really need to get it corrected before the holidays.

The first portal alert is a fictional demonstration example. It is **not the same record** as the later Case's H095 banking request.

## 1. Daniel → Brad · Omnichannel bridge — 2 minutes

**Goal:** Bridge into Brad's separate chat demonstration without presuming what Daniel showed.

**Main highlight:** Chat is another entry point into a consistent customer-service experience—not an additional disconnected application.

**Say:** “Thanks, Daniel. I'm going to switch to a different constituent scenario, this time using chat. The point is not simply to add another way to contact SSA; chat is another entry point into a consistent customer-service experience. Whether someone begins through voice, a website or another appropriate channel, the goal is to give representatives the relevant service information and a process for continuing the work. We'll follow Elena's request from her digital experience through the representative's conversation, her Contact record, the Case and operational reporting. This is a different person and a different session from Daniel's example.”

**Click/show:**
- Allow Daniel to complete his own segment without assuming or describing his details.
- Brad delivers only the high-level architecture bridge.
- Open Elena's independent portal and introduce the Direct Deposit issue.

**Questions:** “Any quick questions about the broader idea of multiple service entry points before we move into Elena's journey?”

**Next section:** “Let's start where Elena is already engaged—with her digital experience.”

**Do not claim:** Do not imply that Daniel's voice session, caller, transcript or tenant is transferred to Brad.


## 2. Elena · Digital portal and Copilot chat — 6 minutes

**Goal:** Show the Overview verification notice, briefly visit Direct Deposit, then send two copyable constituent messages and request a human representative.

**Main highlight:** The portal makes the issue visible; chat is another entry point into consistent service, not a separate chatbot experience.

**Say:** “Elena is in a demonstration of a my Social Security-style portal. On Overview, she sees that her Direct Deposit change needs additional verification. I'll briefly open Direct Deposit so you can see the protected request, then use chat to ask for help. This is not a separate chatbot application or a production SSA mySSA environment. It illustrates another way to enter a consistent customer-service process. I'll send two short questions; the configured assistant will respond automatically. We don't need to type or disclose full banking information, passwords, Social Security numbers, or verification codes. Because this is a protected payment issue, we will request a human representative rather than use the chat to authorize a change.”

**Click/show:**
- Open portal Overview and highlight Elena's Direct Deposit verification notice; no detailed portal tour.
- Open Direct Deposit for one high-level highlight; return to the available chat widget.
- Use the two Copy Message buttons below to paste only the citizen messages into chat, sending Message 1 before Message 2. The assistant responds automatically.
- Request escalation to a live representative; do not supply sensitive banking or identity details.
- Benefits, Messages, Profile and Help Center may be mentioned as possible service experiences, but are not extra presentation stops.

**Portal navigation:**
- **Overview:** Point to the example verification-required alert and briefly explain the service need.
- **Direct Deposit:** Show the request's review status and explain that a protected change requires human verification.
- **Chat:** Open the widget, send the two copyable citizen messages, allow the automatic reply, and request a representative.

**Questions:** “Any questions about the digital entry experience before we follow the conversation to a representative?”

**Next section:** “Elena has asked for human assistance. Let's follow the conversation into Dynamics and see how the representative continues her service request.”

**Do not claim:** The portal is a fictional demonstration. Its DD-DEMO-1042 example is distinct from the Case's DD-DEMO-H095-01523. Do not claim bank authorization, verified portal-to-Case linkage or an automatically created Case.


## 3. Dynamics · Live representative conversation — 8 minutes

**Goal:** Use the live chat scenario to showcase the broader agent workspace: support for chat and telephony, practical productivity tools, and embedded Copilot assistance.

**Main highlight:** Chat is today's example. The broader value is an agent workspace supporting multiple channels, including telephony, with summaries, quick replies, consultation, transfers and contextual assistance.

**Primary takeaway:** Dynamics 365 Contact Center offers a unified workspace for chat, telephony and other configured channels, equipping representatives with tools that help them serve customers efficiently.

**Say:** “Today we're demonstrating a live chat interaction, but the broader capability is the agent workspace. Dynamics 365 Contact Center can support chat, telephony and other configured channels in one place, giving representatives practical tools to assist customers more effectively. We can see the conversation summary, quick replies and consultation or transfer controls without touring every feature. Near the end, notice the Intent-based suggestion in the Copilot pane. It identifies the issue as SSA FAQ and gives the representative a suggested response and recommended path. I can take useful wording into the chat on the left, edit it and decide whether to send it. Finally, I want to show our custom SSA Agent Support sidebar. It can make multiple Copilot Studio agents available within this workspace for different service needs. I'll finish by selecting my Social Security Assistant, the same configured assistant Elena used in the public portal. When connected to approved published SSA website information, it can help with general questions here as well. That reuse illustrates consistent guidance across citizen and representative experiences, but it does not transfer Elena's authenticated session or authorize a banking change.”

**Click/show:**

- Accept Elena's actual live chat and briefly highlight the customer request in the communication panel.
- Show the conversation summary, then mention Quick Replies, consultation and transfer, and other available communication options at a high level.
- Near the end, show Copilot Intent-based suggestions on the right: Issue: SSA FAQ, suggested response and recommended path. Explain how the representative can adapt wording in the left chat before sending.
- Open the custom SSA Agent Support sidebar and briefly identify that several linked Copilot Studio agents can be exposed in the agent workspace.
- As the LAST sidebar highlight, select my Social Security Assistant. Show the actual response and explain it is the same configured assistant used through the public-facing portal, for general published SSA guidance where configured.
- Then navigate to the correct Elena Contact and Timeline. Case Management Agent creation remains conditional and should be claimed only if verified.

**Agent workspace features (brief only):**

- **Live chat and conversation summary:** Continue Elena's request and review the available conversation recap.
- **Quick Replies and consult/transfer:** Use configured response shortcuts or request help from another representative when needed.
- **Other workspace tools:** Voice/video, attachments, notes, rich messages, translation, text prediction and compliance nudges are options to mention, not individually demonstrate.
- **Case Management Agent:** Any automatically created Case must be independently verified; otherwise continue to the existing Case.
- **Intent-based suggestions — near the end:** The right-side Copilot pane displays Issue: SSA FAQ and guidance the representative can review, edit in the left chat and choose whether to send.
- **Custom SSA Agent Support sidebar:** Multiple linked Copilot Studio assistants can be surfaced within the representative workspace for different needs.
- **my Social Security Assistant — final highlight:** Select the same configured assistant used in Elena's public-facing experience. General published SSA guidance can be reused, without claiming shared authentication or protected account access.

**Questions:** “Any questions about the representative's conversation experience before we open the customer record?”

**Next section:** “We've seen the conversation, contextual guidance, and the same public-facing assistant available to the representative through a custom sidebar. Now let's open Elena's Contact to see the customer history behind the interaction.”

**Do not claim:** Telephony is a supported workspace capability, not a claim that this SSA environment has demonstrated a live call. The sidebar identifies my Social Security Assistant as the public-facing agent reused internally; this does not establish inherited portal authentication, a shared session or protected-record access. Public SSA website grounding requires an approved configured knowledge source. The SSA FAQ suggestion is observed; one-click insertion and Case Management Agent creation are not independently proven.


## 4. Contact · Standard and SSA-specific experiences — 8 minutes

**Goal:** Show the same Elena Contact in two forms, emphasizing the Timeline and a stored chat activity if one actually exists.

**Main highlight:** Standard Contact → service Timeline and possible chat history → SSA-specific Contact form with verification and related Direct Deposit context.

**Say:** “This is Contact – Customer Insights – SSA. Alongside the usual profile information, I want to emphasize the Timeline. Today representatives may need to open another system to find prior conversations. When customer interactions are recorded or integrated into Dynamics, that history can be surfaced on the Contact. If we have a chat activity here, I'll open it and show the history actually stored. We don't need to claim a complete transcript exists if the record only shows an activity or summary. Now I'll switch to SSA | Constituent Verification & Direct Deposit, remaining on the same Elena Contact. It's a purpose-built view for constituent verification, a visible Direct Deposit warning, Super Six, related records and activities—all against the same underlying customer-service data, not a duplicate customer. Dataverse is the proposed service-information foundation while SSA's authoritative benefit and payment systems remain distinct.”

**Click/show:**
- Open the Contact linked to CAS-01523-T1R7X6, using Contact – Customer Insights – SSA.
- Highlight the Timeline and explain how one customer record can surface interaction history that might otherwise require switching systems.
- If a real chat record is visible in the Timeline, open it and show its actual saved messages, transcript or summary. If not, explain the intended capability using existing activities only.
- Switch to SSA | Constituent Verification & Direct Deposit on the SAME Contact.
- Highlight the displayed verification alert, available Super Six, Direct Deposit related context and activity history without visiting every field.

**Questions:** “Any questions about consolidating interaction history and tailoring the Contact experience without duplicating the customer record?”

**Next section:** “We've seen the same customer record supporting historical interactions and an SSA-specific experience. Now let's open Elena's Case and review the work behind the Direct Deposit request.”

**Do not claim:** A Timeline is a service-history surface, not proof that all live chat transcripts are automatically retained. Show stored chat details only if accessible on this Contact; do not invent evidence or imply identity verification was completed.


## 5. Case · Cross-system information and controlled decisions — 10 minutes

**Goal:** Keep the Case within ten minutes by emphasizing the overview, Direct Deposit status, one external-information example, recommendations and human review.

**Main highlight:** CAS-01523-T1R7X6 → Direct Deposit → synthetic bank record → supporting system information → AI recommendations → review.

**Say:** “Here's Elena's in-progress Case, CAS-01523-T1R7X6. Case Overview gives us the request, owner, status and recent activity; I'll keep that high level rather than walk through every widget. The Direct Deposit tab brings in the associated request. The synthetic banking record shows Verification Required and Pending Authorization. That tells us what remains, not that any banking change is approved. We can also bring information from benefits, payment or document systems into a consolidated service experience; I'll use one supporting view to illustrate the pattern without claiming a production SSA integration. The AI Recommendation Center can present guidance and possible next steps. If its provenance is labeled rule-based fallback, we'll say that rather than claiming an autonomous AI decision. Finally, Review & Resolution helps the representative assess outstanding work. This request remains pending; we do not change account details or close it prematurely.”

**Click/show:**
- Open Case CAS-01523-T1R7X6 and highlight Overview, In Progress, owner, description and Timeline.
- Open Direct Deposit; locate request DD-DEMO-H095-01523. Highlight pending verification and authorization.
- Briefly open the related banking record; do not assume its fields and the Case summary show identical data.
- Show ONE relevant supporting view: Benefits & Payments, TED or documents, describing source integration at a high level.
- Show AI Recommendation Center with actual recommendation provenance, then Review & Resolution as available for this Case.
- Leave the Case and banking request pending; don't repeat the old Case's checklist counts or supervisor recommendation.

**Questions:** “Any questions about how the Case brings together information and guides the next action before we move to operational dashboards?”

**Next section:** “We've seen the work involved in one constituent request. Let's widen the view to the day-to-day CRM workload for agents and supervisors.”

**Do not claim:** The synthetic Case and banking form can show different completeness of saved fields; do not imply full synchronization. No bank write, authorization, verification clearance, automatic resolution or externally verified SSA integration.


## 6. CRM dashboards · Agent and supervisor work — 4 minutes

**Goal:** Show agent and supervisor visibility into everyday Case and activity work, not contact-center performance metrics.

**Main highlight:** Agent Dashboard / My Workload → Supervisor Operations: workload, aging and follow-up.

**Say:** “Let's step back from one constituent's Case. An agent needs to know what work is assigned, which requests are open and where follow-up is required. The Agent Dashboard and My Workload help organize that day-to-day work. A supervisor needs a broader view of Case ownership, workload distribution and aging. That's what Supervisor Operations can provide. This is CRM service information: customer records, Cases and activities. It's a different perspective from the contact-center channel and performance metrics Beth will cover. The values shown here are from our demonstration data, not official SSA operational totals.”

**Click/show:**
- Open Agent Dashboard/My Workload and highlight one pending-work or ownership insight.
- Open Supervisor Operations and Customer 360/My Workload as appropriate; describe one supervisory insight.
- Distinguish CRM Case/activity operations from Beth's contact-center performance scope. Avoid every graph and filter.

**Questions:** “Any questions about CRM workload visibility before I close my portion with the broader architecture?”

**Next section:** “The same organized service data supports the constituent and the people managing the work. Let me close on how that extends to other engagement channels.”

**Do not claim:** Dashboard values are demonstration/scope-specific and not government production service metrics.


## 7. Omnichannel close · Hand off to Beth — 2 minutes

**Goal:** Close Brad's service journey and introduce possible channel extensibility without scripting Beth's part.

**Main highlight:** Voice, chat, web and mobile-capable Dynamics/portals are ways to engage with a consistent service experience; Facebook is only a future configured option.

**Say:** “To close my portion: chat isn't a standalone solution. It's an entry point into a consistent customer-service experience. We saw Elena move from digital engagement into a representative conversation, two views of the same Contact, a Case with related information and operational reporting. Dynamics 365 and Dataverse provide a proposed common foundation for customer-service records, while SSA's benefit and payment systems may remain authoritative. The platform supports mobile experiences and additional web or configured engagement channels, potentially including social messaging such as Facebook if appropriate. I am not saying SSA has implemented every channel or that every custom screen has passed mobile testing. That completes my section. Beth will cover the contact-center capabilities and operations.”

**Click/show:**
- Finish from the CRM dashboard without opening unrelated administrative settings.
- Briefly mention mobile-capable platform experiences and future channel extensibility; avoid Alexa and detailed voice topics.
- Invite final questions on Brad's section, then hand over to Beth without prescribing her material.

**Questions:** “Before I hand over, any final questions about the constituent, representative and CRM experience?”

**Next section:** “Beth, I'll turn it over to you for the contact-center capabilities and operational view.”

**Do not claim:** Facebook is an optional future channel, not an SSA requirement or live demonstration; don't imply all custom pages are mobile-validated or that Dataverse is SSA's adopted authoritative system.



## Preflight and time control

- Daniel remains outside Brad's scripted segment; use the flexible voice-to-chat bridge.
- Portal sequence: **Overview → Direct Deposit → Chat**. Paste only the two citizen messages via HTML Copy buttons.
- Chat is configured to respond automatically; demonstrate the human handoff into Customer Service workspace.
- Briefly mention summaries, Quick Replies, consult/transfer, voice/video, attachments, notes, rich messages, translation and compliance nudges.
- **Intent Agent and Case Management Agent:** show only if actual output has been validated. Do not claim automatic Case creation otherwise.
- **Contact Timeline:** show prior activity and, **if a real stored chat entry exists**, open it and show the recorded details. Otherwise demonstrate the Timeline without implying transcript retention.
- Switch between **Contact – Customer Insights – SSA** and **SSA | Constituent Verification & Direct Deposit** on the same Elena Contact.
- **Contact 8 min, Case 10 min.** Case **CAS-01523-T1R7X6**, synthetic banking request **DD-DEMO-H095-01523** remains pending. Never describe it as directly synchronized with portal example **DD-DEMO-1042**.
- Case highlights: Overview, Direct Deposit, one supporting-system view, recommendations and available Review & Resolution. Don't change the bank record or close the Case.
- Dashboards cover CRM work management; Beth covers her own Contact Center topics.
- Questions at each section should be short. Follow up on technical integration questions after the demo.

**Backup:** `backup/p010-before-portal-chat-copy-2026-11-12` preserves the previous presenter, runbook and notes. An earlier talk-track backup also exists.
