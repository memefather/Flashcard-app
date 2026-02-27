const cards = [
  // --- SECTION: DISCORD PRINCIPLES & VALUES (Behavioral) ---
  {
    q: "Principle: Deliver for Customers. How do you define your 'customer' in a sourcing role for Discord?",
    a: "Our customers are twofold: 1) Internal stakeholders (Marketing, HR, Facilities) whose success depends on the vendors I pick, and 2) Discord users, who benefit when we optimize costs to reinvest in app features. I serve them by deeply understanding their needs from first principles."
  },
  {
    q: "Principle: Surprise & Delight. Tell me about a time you went beyond just 'saving money' to delight a stakeholder.",
    a: "S: Sourcing an event vendor for a tight deadline. A: I didn't just find a cheap vendor; I found one with an integrated platform that automated attendee check-ins, saving the Marketing team 20 hours of manual work. R: They were 'surprised and delighted' by the reclaimed time, not just the budget."
  },
  {
    q: "Principle: Debate, Decide, Commit. Describe a time you had a data-backed disagreement with a leader.",
    a: "S: Leader wanted to stay with a legacy staffing agency for 'comfort.' A: I presented 'Brutal Facts' on their 15% higher markups and poor fill rates. We debated, the leader decided to pilot a new agency, and I committed 100% to making that pilot a success."
  },
  {
    q: "Principle: Progress Over Perfection. How do you handle a sourcing project with a 24-hour turnaround?",
    a: "Apply the 80/20 rule. Focus on the 'million little details' that matter (safety, cost, capacity) and use pre-approved templates for the rest. I'd rather deliver a 90% perfect solution today than a 100% perfect one next week when the opportunity is gone."
  },
  {
    q: "Principle: Embrace the Brutal Facts. Tell me about a sourcing project that failed. What did you learn?",
    a: "S: Attempted to consolidate all global facilities under one vendor. A: Brutal facts showed local nuances were too great for one vendor to handle. R: I cut our losses early, pivoted to a regional 'hub-and-spoke' model, and applied those learnings to our next global RFP."
  },

  // --- SECTION: CATEGORY STRATEGY - PROFESSIONAL SERVICES ---
  {
    q: "How do you manage 'Contingent Staffing' spend in a high-growth tech environment?",
    a: "Use a Vendor Management System (VMS) for visibility. I categorize roles into 'commodity' vs 'niche.' For commodity, I use a competitive rate card; for niche, I focus on 'Quality of Hire' and speed-to-fill to ensure Discord's engineering velocity isn't throttled."
  },
  {
    q: "Discord JD mentions BPO (Business Process Outsourcing). How do you evaluate the TCO of a BPO partner?",
    a: "TCO = Base labor rate + Management overhead + Infrastructure + Attrition costs + Quality/Error costs. I look for 'Value beyond Savings'—can this BPO innovate or automate parts of the process for us over time?"
  },
  {
    q: "What is your strategy for sourcing Marketing & Events vendors where 'Vibe' and 'Creativity' are critical?",
    a: "I use a 'Dual-Track' evaluation. Track 1: Financials and Compliance (the 'Brutal Facts'). Track 2: Creative pitch and 'Surprise & Delight' potential. I involve stakeholders heavily in Track 2 while I lead Track 1 to ensure a balanced decision."
  },
  {
    q: "How would you approach a global facilities management contract for a 'Flexible Work' culture?",
    a: "Focus on 'Flexibility clauses.' Since Discordians can work from home or HQ, I'd negotiate 'on-demand' service tiers and variable pricing models rather than fixed monthly retainers to ensure we only pay for what we use."
  },

  // --- SECTION: PROBLEM SOLVING & SYSTEMS ---
  {
    q: "The JD mentions 'seeing around corners.' How do you predict supplier risk before it happens?",
    a: "I monitor 'leading indicators': changes in vendor management, spikes in turnover, or news in their sub-tier supply chain. I build a 'Risk Matrix' for critical vendors and ensure we have a 'Plan B' (exit strategy) baked into the contract."
  },
  {
    q: "How have you used Procurement systems (Oracle, Ironclad, Lexion) to drive efficiency?",
    a: "I use them to automate the 'Intake-to-Pay' flow. By building pre-approved contract templates in a CLM, I can reduce Legal review time by 50%, allowing the business to move at 'Discord speed' without skipping compliance."
  },
  {
    q: "Walk through your process for a complex RFx for a new software category.",
    a: "1. Stakeholder alignment (needs). 2. Market Assessment. 3. Shortlist. 4. RFx issuance. 5. Quantitative scoring. 6. Finalist demos. 7. Negotiation on Brutal Facts (Price) and Long-term Value (SLA/Roadmap)."
  },

  // --- SECTION: COLLABORATION & INFLUENCE ---
  {
    q: "How do you handle a stakeholder who wants to bypass Procurement because 'it's too slow'?",
    a: "I cultivate belonging by listening to their pain points. I then show them how Procurement protects them (Risk/Legal) and offer a 'Fast-Track' process for low-spend items to prove we are a partner, not a bottleneck."
  },
  {
    q: "Tell me about influencing a Finance partner on a sourcing roadmap.",
    a: "I present a 'Spend Map' vs 'Saving Opportunity.' I show not just the $ savings, but the 'Avoided Cost' (risk mitigation). I align the roadmap with Discord's quarterly financial goals to ensure buy-in."
  },
  {
    q: "How do you manage vendor performance (KPIs/SLAs) without being 'combative'?",
    a: "I frame it as 'Striving for Excellence' together. We use a shared dashboard. When a KPI is missed, we look at 'First Principles'—is it a process gap or a vendor failure? This builds a partnership rather than a police relationship."
  },

  // --- SECTION: ADDITIONAL BEHAVIORAL & TACTICAL (30+ Total) ---
  {
    q: "Give an example of 'Striving for Excellence' in a boring contract negotiation.",
    a: "I don't just 'sign.' I look for the 'million little details' like auto-renewal clauses or hidden platform fees that could hurt us in Year 3. Excellence is protecting the company's future, not just the current budget."
  },
  {
    q: "Describe a time you negotiated a 20%+ cost reduction. What was your leverage?",
    a: "Leverage came from 'Brutal Facts': I consolidated 5 small vendors into 1, offering them a 3x volume increase in exchange for aggressive tiered pricing. I also used market benchmarking to anchor the opening bid."
  },
  {
    q: "How do you handle 'Scope Creep' in a Professional Services contract?",
    a: "I build a clear 'Change Order' process into the SOW (Statement of Work) up front. When creep happens, I refer back to the first principles of the original project and re-negotiate the commercial terms based on the new data."
  },
  {
    q: "What is your approach to 'Supplier Diversity' at a company like Discord?",
    a: "It's about 'Cultivating Belonging.' I actively search for diverse-owned BPOs and Agencies. I don't just include them in the RFx; I ensure the scoring system doesn't unfairly penalize smaller firms for lack of 'legacy' infrastructure."
  },
  {
    q: "Tell me about a time you had to deliver 'Brutal Facts' to a vendor. How did they react?",
    a: "I told a key vendor they were at risk of being replaced due to service quality. They were defensive initially, but because I brought data (not just feelings), we were able to build a 90-day remediation plan that saved the relationship."
  },
  {
    q: "How do you ensure 'Legal and Finance' alignment during an end-to-end sourcing project?",
    a: "I use a RACI matrix and host a 'Pre-Flight' meeting. Finance sets the budget ceiling; Legal defines the risk floor; I navigate the space in between. This prevents last-minute surprises during the signature phase."
  },
  {
    q: "Describe your experience with 'Should-Cost' modeling for services.",
    a: "I break it down: Labor (Base + Fringe) + SG&A + Profit Margin. For a BPO in the Philippines vs Poland, I'll model the different labor floors to ensure our 'Anchoring' in negotiation is realistic but aggressive."
  },
  {
    q: "How do you source 'Marketing Events' where the ROI is hard to measure?",
    a: "I focus on 'Lead Gen' or 'Brand Sentiment' as the KPI. If we can't measure direct sales, we measure 'Engagement' or 'Media Impressions.' I ensure the vendor contract is tied to these outcome-based metrics."
  },
  {
    q: "How do you manage a 'Critical Vendor' who knows they are your only option (Sole Source)?",
    a: "I use 'Relationship Leverage.' I show them our growth roadmap. If they aren't a 'Partner' now when they have the upper hand, they won't be part of the long-term journey. I also start building a 'Plan B' immediately to create future competition."
  },
  {
    q: "What's the first thing you'd do in your first 30 days at Discord as a Sourcing Manager?",
    a: "1. Meet my stakeholders (Cultivate Belonging). 2. Inspect the 'Brutal Facts' of current spend data. 3. Identify one 'Low-Hanging Fruit' project to Deliver Value and prove the procurement engine works."
  },
  {
    q: "Explain a 'Tail Spend' strategy for a company with 1000s of small vendors.",
    a: "I'd implement a 'Buying Channel' strategy. Use a P-Card or an 'Amazon Business' type portal for low-value spend to get it off my desk, so I can focus on the Top 20% of vendors that drive 80% of Discord's risk/cost."
  },
  {
    q: "How do you handle 'Inflation' or 'Price Increase' requests from vendors?",
    a: "I ask for the 'Brutal Facts.' I want to see the component of their cost that increased. If it's labor, I want to see the index. I then negotiate for a 'fixed period' or 'productivity offset' to neutralize the impact."
  },
  {
    q: "Describe a 'Win-Win' negotiation outcome you led.",
    a: "I negotiated a longer contract term (3 years vs 1) for a vendor in exchange for a 15% discount and 'First Look' at their new product features. They got predictable revenue; we got cost savings and innovation."
  },
  {
    q: "What is the difference between Sourcing and Procurement in your eyes?",
    a: "Sourcing is the 'Strategy' (Finding the right partner, negotiating the value). Procurement is the 'Execution' (The intake, the PO, the payment). A great Sourcing Manager ensures the Strategy makes the Execution easy."
  },
  {
    q: "Why Discord? (Beyond the gaming aspect)",
    a: "Because Discord is building the 'future of belonging.' From a sourcing perspective, that means building a supply chain that is as inclusive, fast, and 'Surprising & Delightful' as the platform itself."
  },
  {
    q: "How do you stay 'Efficient' when managing 10+ RFPs at once?",
    a: "Prioritization based on 'Brutal Facts': Risk x Spend. I use project management tools and standard templates. I also 'Surprise & Delight' stakeholders with weekly status updates so they never have to ask 'Where is my contract?'"
  }
];

let idx = 0;
const front = document.getElementById('front');
const back = document.getElementById('back');
const answerText = document.getElementById('answer-text');
const cardIndex = document.getElementById('card-index');

function render() {
  front.textContent = cards[idx].q;
  answerText.textContent = cards[idx].a;
  cardIndex.textContent = (idx + 1) + ' / ' + cards.length;
  back.classList.add('hidden');
}

render();

document.getElementById('flip').addEventListener('click', () => {
  back.classList.toggle('hidden');
});

document.getElementById('next').addEventListener('click', () => {
  idx = (idx + 1) % cards.length;
  render();
});

document.getElementById('prev').addEventListener('click', () => {
  idx = (idx - 1 + cards.length) % cards.length;
  render();
});
