# P010-5 · SSA Direct Deposit — Actual-Day Presenter Notes

**Current talk track:** November 12, 2026 · **40 minutes, seven sections** · **Presenters:** Daniel owns his opening; Brad presents the digital/CRM journey; Beth owns her next segment.

[Open P010-1 interactive presenter](p010-1-presenter-40min.html) · [P010-B master runbook](p010-b-runbook.md) · [Collection](index.html) · [Quality](p010-q-quality.md) · [Improvement plan](p010-i-improvements.md)

## The three messages to repeat, without repeating whole scenes

- **Omnichannel:** Chat is another **entry point into consistent customer service**, not another separate chatbot or new customer database.
- **Data:** Dataverse is the **proposed common foundation for customer-service information**, not a replacement for SSA's authoritative benefit/payment systems.
- **Representative work:** The same Contact supports a standard and SSA-specific view; the Case brings related information, guidance, human verification and CRM operational visibility together.

## Speaker rhythm and 40-minute budget

| # | Time | Owner | Where to go |
| --- | ---: | --- | --- |
| 1 | 5 min | Daniel (independent) → Brad | Daniel concludes → Brad opens Elena's portal |
| 2 | 5 min | Brad · digital engagement | Elena portal → review notice → Copilot Studio chat |
| 3 | 4 min | Brad · Customer Service workspace | Dynamics Customer Service workspace → live chat / Active Conversation |
| 4 | 7 min | Brad · Contact | Same Elena Contact → standard Customer Insights form → SSA service form |
| 5 | 11 min | Brad · Case | Elena Case CAS-01523-T1R7X6 / request DD-DEMO-H095-01523 |
| 6 | 4 min | Brad · CRM reporting | Dynamics CRM Agent Dashboard and Supervisor Dashboard |
| 7 | 4 min | Brad → Beth | Brad ends CRM walkthrough → Beth begins her own contact-center section |
| | **40 min** | | Questions included briefly inside each section |

**Navigation constraint:** No deep dive into every tab. Show only one or two consequential details, invite quick questions, then use the exact transition. Do not troubleshoot a display widget on stage; explain its role at a high level and move on.

## 1. Daniel → Brad · Omnichannel bridge (5 min)

**What matters:** Chat is another entry point into a consistent customer-service experience—not an additional disconnected application.

**Screen:** Daniel concludes → Brad opens Elena's portal

**Say:** “Thanks, Daniel. I'm going to switch to a different constituent scenario, this time using chat. The point is not simply to add another way to contact SSA; chat is another entry point into a consistent customer-service experience. Whether someone begins through voice, a website or another appropriate channel, the goal is to give representatives the relevant service information and a process for continuing the work. We'll follow Elena's request from her digital experience through the representative's conversation, her Contact record, the Case and operational reporting. This is a different person and a different session from Daniel's example.”

**Clicks / high-level highlights**

- Allow Daniel to complete his own segment without assuming or describing his details.
- Brad delivers only the high-level architecture bridge.
- Open Elena's independent portal and introduce the Direct Deposit issue.

**Questions:** “Any quick questions about the broader idea of multiple service entry points before we move into Elena's journey?”

**Move on:** “Let's start where Elena is already engaged—with her digital experience.”

**Do not overstate:** Do not imply that Daniel's voice session, caller, transcript or tenant is transferred to Brad.


## 2. Elena · Digital portal and Copilot chat (5 min)

**What matters:** Verification notice → brief natural-language guidance → live representative handoff.

**Screen:** Elena portal → review notice → Copilot Studio chat

**Say:** “Elena Martinez has a Direct Deposit change that needs additional verification. Rather than finding a phone number or figuring out which office handles the request, she can ask for help from her current portal experience. I'll ask one question through Copilot Studio and request a representative; I'm not going to spend time demonstrating every bot topic. The value is how this digital interaction becomes part of a broader service process. Because this request involves protected banking information, a human must handle the appropriate verification and authorization. The chatbot isn't changing payment details or confirming an unverified transaction.”

**Clicks / high-level highlights**

- Point out Elena's fictional verification-required portal notice and launch chat.
- Ask a concise question about the verification notice; avoid a chatbot feature tour.
- Use the configured live chat escalation to request a representative in Dynamics Customer Service workspace.

**Questions:** “Any questions about the digital entry experience before we follow the conversation to a representative?”

**Move on:** “Elena has asked for help. Let's follow the interaction into Dynamics and see what the representative receives.”

**Do not overstate:** Do not claim a portal notice was automatically passed as trusted, authenticated Dataverse context or that the bot authorized banking changes.


## 3. Dynamics · Live representative conversation (4 min)

**What matters:** Accept the incoming chat and show the actual issue/context before navigating to Contact.

**Screen:** Dynamics Customer Service workspace → live chat / Active Conversation

**Say:** “Here I'm in Dynamics 365 Customer Service workspace, accepting Elena's conversation. The representative can continue the interaction, see the message and work with the context that actually arrived. More importantly, this is where an engagement channel connects to the rest of the service process. We don't need separate customer-service databases or back-office applications for every channel. The representative can move from the conversation to customer information, activities and casework in Dynamics. I'll show that continuity rather than tour the communication controls.”

**Clicks / high-level highlights**

- Accept the actual incoming chat and point to Elena's question.
- Show one or two relevant items in Active Conversation and only the context actually delivered.
- Navigate to the exact Case-linked Elena Contact; do not invent automatic Case creation.

**Questions:** “Any questions about the representative's conversation experience before we open the customer record?”

**Move on:** “We know why Elena reached out. Now let's see how the same customer data supports a standard Contact experience and a purpose-built SSA one.”

**Do not overstate:** Successful live chat arrival does not establish verified identity, a trusted portal alert payload or automatic Case creation.


## 4. Contact · Standard and SSA-specific experiences (7 min)

**What matters:** Contact – Customer Insights – SSA → SSA | Constituent Verification & Direct Deposit: same record, tailored experience.

**Screen:** Same Elena Contact → standard Customer Insights form → SSA service form

**Say:** “First, this is Contact – Customer Insights – SSA. It's a standard Dynamics 365 customer view with core customer information and interaction history. I'll highlight the profile and Timeline without walking through every field. Now I'll switch to SSA | Constituent Verification & Direct Deposit. This is still the same Elena Contact and underlying data and security, but organized around an SSA representative's responsibilities. We can see a Direct Deposit verification alert, the Super Six review experience, related request information and activities. This isn't another copy of the customer. Dataverse is the proposed common customer-service data foundation, while authoritative benefit and payment systems can remain in their existing systems and supply relevant information through integration.”

**Clicks / high-level highlights**

- Open the Elena Contact linked to Case CAS-01523-T1R7X6; avoid a first-by-name duplicate.
- Show Contact – Customer Insights – SSA briefly: standard customer fields and Timeline.
- Switch forms on the SAME Contact to SSA | Constituent Verification & Direct Deposit.
- Highlight the visible Direct Deposit warning, available Super Six, related banking context and activities—one takeaway per tab.

**Questions:** “Any questions about tailoring the representative's experience while maintaining the same underlying Contact record?”

**Move on:** “Now that we've seen Elena's customer context and outstanding verification needs, let's open the Case that organizes the work.”

**Do not overstate:** Visible alert is evidence of a displayed status, not necessarily a proven synchronized field projection; Super Six display does not prove verified identity. Dataverse is proposed for service information, not SSA's benefit-system source of truth.


## 5. Case · Cross-system information and controlled decisions (11 min)

**What matters:** CAS-01523-T1R7X6 → Direct Deposit → synthetic bank record → supporting system information → AI recommendations → review.

**Screen:** Elena Case CAS-01523-T1R7X6 / request DD-DEMO-H095-01523

**Say:** “Here's Elena's in-progress Case, CAS-01523-T1R7X6. Case Overview gives us the request, owner, status and recent activity; I'll keep that high level rather than walk through every widget. The Direct Deposit tab brings in the associated request. The synthetic banking record shows Verification Required and Pending Authorization. That tells us what remains, not that any banking change is approved. We can also bring information from benefits, payment or document systems into a consolidated service experience; I'll use one supporting view to illustrate the pattern without claiming a production SSA integration. The AI Recommendation Center can present guidance and possible next steps. If its provenance is labeled rule-based fallback, we'll say that rather than claiming an autonomous AI decision. Finally, Review & Resolution helps the representative assess outstanding work. This request remains pending; we do not change account details or close it prematurely.”

**Clicks / high-level highlights**

- Open Case CAS-01523-T1R7X6 and highlight Overview, In Progress, owner, description and Timeline.
- Open Direct Deposit; locate request DD-DEMO-H095-01523. Highlight pending verification and authorization.
- Briefly open the related banking record; do not assume its fields and the Case summary show identical data.
- Show ONE relevant supporting view: Benefits & Payments, TED or documents, describing source integration at a high level.
- Show AI Recommendation Center with actual recommendation provenance, then Review & Resolution as available for this Case.
- Leave the Case and banking request pending; don't repeat the old Case's checklist counts or supervisor recommendation.

**Questions:** “Any questions about how the Case brings together information and guides the next action before we move to operational dashboards?”

**Move on:** “We've seen the work involved in one constituent request. Let's widen the view to the day-to-day CRM workload for agents and supervisors.”

**Do not overstate:** The synthetic Case and banking form can show different completeness of saved fields; do not imply full synchronization. No bank write, authorization, verification clearance, automatic resolution or externally verified SSA integration.


## 6. CRM dashboards · Agent and supervisor work (4 min)

**What matters:** Agent Dashboard / My Workload → Supervisor Operations: workload, aging and follow-up.

**Screen:** Dynamics CRM Agent Dashboard and Supervisor Dashboard

**Say:** “Let's step back from one constituent's Case. An agent needs to know what work is assigned, which requests are open and where follow-up is required. The Agent Dashboard and My Workload help organize that day-to-day work. A supervisor needs a broader view of Case ownership, workload distribution and aging. That's what Supervisor Operations can provide. This is CRM service information: customer records, Cases and activities. It's a different perspective from the contact-center channel and performance metrics Beth will cover. The values shown here are from our demonstration data, not official SSA operational totals.”

**Clicks / high-level highlights**

- Open Agent Dashboard/My Workload and highlight one pending-work or ownership insight.
- Open Supervisor Operations and Customer 360/My Workload as appropriate; describe one supervisory insight.
- Distinguish CRM Case/activity operations from Beth's contact-center performance scope. Avoid every graph and filter.

**Questions:** “Any questions about CRM workload visibility before I close my portion with the broader architecture?”

**Move on:** “The same organized service data supports the constituent and the people managing the work. Let me close on how that extends to other engagement channels.”

**Do not overstate:** Dashboard values are demonstration/scope-specific and not government production service metrics.


## 7. Omnichannel close · Hand off to Beth (4 min)

**What matters:** Voice, chat, web and mobile-capable Dynamics/portals are ways to engage with a consistent service experience; Facebook is only a future configured option.

**Screen:** Brad ends CRM walkthrough → Beth begins her own contact-center section

**Say:** “To close my portion: chat isn't a standalone solution. It's an entry point into a consistent customer-service experience. We saw Elena move from digital engagement into a representative conversation, two views of the same Contact, a Case with related information and operational reporting. Dynamics 365 and Dataverse provide a proposed common foundation for customer-service records, while SSA's benefit and payment systems may remain authoritative. The platform supports mobile experiences and additional web or configured engagement channels, potentially including social messaging such as Facebook if appropriate. I am not saying SSA has implemented every channel or that every custom screen has passed mobile testing. That completes my section. Beth will cover the contact-center capabilities and operations.”

**Clicks / high-level highlights**

- Finish from the CRM dashboard without opening unrelated administrative settings.
- Briefly mention mobile-capable platform experiences and future channel extensibility; avoid Alexa and detailed voice topics.
- Invite final questions on Brad's section, then hand over to Beth without prescribing her material.

**Questions:** “Before I hand over, any final questions about the constituent, representative and CRM experience?”

**Move on:** “Beth, I'll turn it over to you for the contact-center capabilities and operational view.”

**Do not overstate:** Facebook is an optional future channel, not an SSA requirement or live demonstration; don't imply all custom pages are mobile-validated or that Dataverse is SSA's adopted authoritative system.



## One-page preflight

- Start with Daniel's **independent** slot; Brad must be ready to bridge regardless of what Daniel covers.
- Verify the portal chat routes to Customer Service workspace, or clearly label the fallback.
- Use the SAME Elena Contact for **Contact – Customer Insights – SSA** and **SSA | Constituent Verification & Direct Deposit**.
- Open **CAS-01523-T1R7X6**; show synthetic request **DD-DEMO-H095-01523**, Verification Required **Yes**, Destination Status **Pending Authorization**. Never reuse the older Case's verification checklist totals.
- Keep Case Overview brief. Use one other-system example, the AI Recommendation Center and available Review & Resolution.
- CRM dashboards are **Case/activity workload**, not Beth's contact-center metrics.
- Mention mobile-capable platform experiences and optional Facebook messaging only as future architecture; no Alexa mention.
- Leave the banking record and Case untouched. Ask questions at each checkpoint; park detailed technical discovery.
- Finish your closing words and give Beth the floor without scripting or guessing her content.

**Backed up:** Prior versions are preserved on GitHub branch `backup/p010-pre-final-talk-track-2026-11-12`. This file is the current speaking reference; the interactive presenter and B runbook share the same seven-section content.
