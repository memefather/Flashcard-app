const cards = [
  {q: 'Tell me about a sourcing program you led for professional services (BPO/contingent staffing). What was the outcome?', a: 'Use STAR: role, challenge, actions (supplier selection, negotiations, SLA), results (savings, quality, time).' },
  {q: 'How do you evaluate and select BPO vendors? What criteria and scorecard do you use?', a: 'Include capability, capacity, security/compliance, cost, cultural fit, references, scalability, and score weights.'},
  {q: 'Describe your RFP process for contingent staffing — timelines, stakeholders, evaluation metrics.', a: 'Outline scope, timeline, supplier shortlist, scoring (rate, fill time, vetting, SLAs), and decision governance.'},
  {q: 'How have you achieved measurable cost savings with vendor consolidation or renegotiation?', a: 'Give example: analyze spend, bundle categories, negotiate volume discounts, implement SLAs; show $ saved %.'},
  {q: 'Explain how you build SLAs and KPIs for workplace services or facilities vendors.', a: 'Define objectives (uptime, response time), metrics, measurement cadence, reporting, and penalties/incentives.'},
  {q: 'Tell me about a time a vendor missed SLAs. How did you handle remediation?', a: 'Describe detection, root-cause, remediation plan, communications, corrective action and follow-up metrics.'},
  {q: 'How do you assess vendor risk (operational, compliance, data security) for BPO partners?', a: 'Use risk matrix, audits, certifications (SOC2), contingency plans, insurance, and contractual protections.'},
  {q: 'Describe your approach to stakeholder management across Procurement, HR, Finance, and Operations.', a: 'Regular alignment meetings, RACI, clear SLAs, shared dashboards, and executive updates for escalation.'},
  {q: 'Walk me through creating a temp/contingent staffing strategy for a fast-growing org.', a: 'Forecast demand, define supply channels, onboarding standards, preferred supplier program, and cost controls.'},
  {q: 'How do you measure and report supplier performance to execs?', a: 'Use dashboard with KPIs (fill rate, quality, SLA attainment, spend vs budget), monthly exec summary and highlights.'},
  {q: 'Describe contract negotiation tactics that worked well for marketing/events vendors.', a: 'Leverage competition, anchor pricing, request bundled services, include performance incentives and cancellation terms.'},
  {q: 'How do you factor diversity, equity, and inclusion into your supplier strategy?', a: 'Set targets, include DEI in RFx scoring, maintain diverse supplier lists, and report spend by supplier category.'},
  {q: 'Explain a sourcing decision where you chose value over lowest cost. Why?', a: 'Show trade-off: quality, risk reduction, faster time-to-market, long-term TCO vs sticker price.'},
  {q: 'How do you structure incentives or gain-share models with vendors?', a: 'Define baseline metrics, share savings or revenue uplift, contractually tie payouts to measurable outcomes.'},
  {q: 'Tell me about a time you automated or improved a sourcing workflow (tools/process).', a: 'Describe the manual pain, automation chosen (eSourcing/CLM), outcomes (cycle time reduction, fewer errors).' },
  {q: 'How do you approach onboarding a new global facilities vendor across regions?', a: 'Pilot in one region, align SLAs, local compliance checks, stakeholder training, phased roll-out.'},
  {q: 'Describe your experience with SOW vs managed services contracts.', a: 'SOW for project work (deliverables), managed services for ongoing outcomes; choose by predictability and control.'},
  {q: 'How do you manage workforce supply risk during spikes (events, launches)?', a: 'Use multipliers, backup suppliers, guaranteed capacity clauses, surge pricing caps and playbooks.'},
  {q: 'What procurement systems/tools (SRM, eSourcing, CLM) have you used? How did they help?', a: 'Mention tools (Ariba, Coupa, Ivalua, Jaggaer, Bullhorn) and benefits: visibility, faster RFx, contract traceability.'},
  {q: 'How do you ensure compliance with local labor laws when using contingent agencies globally?', a: 'Work with local counsel, require supplier attestations, vet payroll/tax practices, include compliance clauses.'},
  {q: 'Give an example of influencing senior leaders to approve a sourcing roadmap.', a: 'Share data-backed case, pilot results, risk assessment, and clear ROI to gain buy-in.'},
  {q: 'How do you price and forecast spend for recurring services like facilities?', a: 'Use historical spend, inflation indices, occupancy forecasts, and scenario-based modeling.'},
  {q: 'Describe a successful negotiation with an event vendor under a tight timeline.', a: 'Prioritize must-haves, accept trade-offs, use pre-approved clause library, and get exec-level sign-off.'},
  {q: 'How do you evaluate the ROI of outsourcing a process to a BPO vs keeping it in-house?', a: 'Compare TCO, service levels, speed-to-scale, opportunity costs, and strategic focus.'},
  {q: 'What KPIs would you set for a 12-month vendor performance program for Professional Services?', a: 'SLA attainment, on-time delivery, cost variance, quality scores, diversity spend, responsiveness.'}
];
let idx = 0;const front = document.getElementById('front');const back = document.getElementById('back');
function render(){front.textContent = 'Q: ' + cards[idx].q;back.textContent = 'A: ' + cards[idx].a;back.classList.add('hidden')}render();
document.getElementById('flip').addEventListener('click',()=>{back.classList.toggle('hidden')});document.getElementById('next').addEventListener('click',()=>{idx=(idx+1)%cards.length;render()});document.getElementById('prev').addEventListener('click',()=>{idx=(idx-1+cards.length)%cards.length;render()});