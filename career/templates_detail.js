/* ═══════════════════════════════════════════════════════════
   Template detail — the function lists and behavioural anchors
   that data.js does not carry. Derived from the live operating
   model (flow-community-os · MENA · 48 functions).
   ═══════════════════════════════════════════════════════════ */

const FN_LISTS = {

'coord-assoc':[
  {k:'new',   n:'Entirely new work',     c:'#7C5CBF', d:'Never touched before — and every one of the seven is a first of its kind in the career: the first contractor, the first vendor, the first crisis, the first contract, the first ledger. That is the real weight of this transition, not the fourteen that deepen.',
   f:[['Shift handover','— → execute','first continuity duty'],
      ['Maintenance coordination','— → execute','first dealings with contractors'],
      ['Housekeeping coordination','— → execute','first vendor management'],
      ['Security & Watch coordination','— → execute','first security responsibility'],
      ['Incident Management','— → execute','FIRST CRISIS'],
      ['Renewal Coordination','— → execute','first contractual duty'],
      ['Deposit Accounting','— → assist','first financial exposure']]},
  {k:'own',   n:'First real ownership',  c:'#1D9E75', d:'The first operational outcomes they are accountable for, including when off shift.',
   f:[['Package oversight','execute → own',''],
      ['Vacant Unit Inspections','execute → own','']]},
  {k:'deepen',n:'Natural progression',   c:'#0D6E5C', d:'Already assisting on these today. They convert through exposure and are verified at the gate — no dedicated teacher needed.',
   f:[['Move-ins','assist → execute',''],['Move-in Inspections','assist → execute',''],
      ['Move-out & Move-out Inspection','assist → execute',''],['Pre-Move-in Coordination & Preparation','assist → execute',''],
      ['Neighbor Support','assist → execute',''],['Issues, Complaints & Feedback Management','assist → execute',''],
      ['Neighbor Check-in / Coffee Chat','assist → execute',''],['Renewal Support','assist → execute',''],
      ['Property Walkthrough','assist → execute',''],['Daily briefing','assist → execute',''],
      ['Consumables Inventory Management','assist → execute',''],['Hosting Community Events','assist → execute',''],
      ['Events & Experiences Community Marketing','assist → execute',''],['Notices','assist → execute','']]},
  {k:'step',  n:'Handed over',           c:'#EF9F27', d:'Three go: the only two functions they own today drop to execute, and one stops entirely. Read as a loss unless it is explained — the ownership moves because they are freed for something heavier.',
   f:[['Classes - Attendance Check-ins','own → execute',''],
      ['Meetups - Attendance Check-ins','own → execute',''],
      ['Preparing Community Events','stops','']]}
],

'assoc-sr':[
  {k:'own',   n:'Ownership — the core',  c:'#1D9E75', d:'Twenty-four functions move from doing to owning. Ownership is one capability learned once and then extended, so four representative ones are taught deliberately and the rest follow.',
   f:[['Move-ins','execute → own','taught deliberately'],['Issues, Complaints & Feedback Management','execute → own','taught deliberately'],
      ['Maintenance coordination','execute → own','taught deliberately'],['Shift handover','execute → own','taught deliberately'],
      ['Move-in Inspections','execute → own',''],['Move-out & Move-out Inspection','execute → own',''],
      ['Pre-Move-in Coordination & Preparation','execute → own',''],['Neighbor Support','execute → own',''],
      ['Neighbor Check-in / Coffee Chat','execute → own',''],['Renewal Support','execute → own',''],
      ['Renewal Coordination','execute → own',''],['Survey Response Actioning','execute → own',''],
      ['Visitor Management','execute → own',''],['Front Desk Hospitality','execute → own',''],
      ['Billing & Payment Support','execute → own',''],['Daily briefing','execute → own',''],
      ['Housekeeping coordination','execute → own',''],['Security & Watch coordination','execute → own',''],
      ['Consumables Inventory Management','execute → own',''],['Hosting Community Events','execute → own',''],
      ['Marketing Events Support','execute → own',''],['Events & Experiences Community Marketing','execute → own',''],
      ['Supporting Neighbor-led Community Events','execute → own',''],['Community Newsletter','assist → own','']]},
  {k:'new',   n:'New — the commercial side', c:'#7C5CBF', d:'First exposure to money and reporting. The test here is psychological rather than technical: the common failure is avoidance.',
   f:[['Reporting','— → execute','first reporting to management'],
      ['Vendor Reconciliation','— → execute','first financial reconciliation'],
      ['Procurement','— → execute','first purchasing'],
      ['Accounts Payable','— → assist','first payables'],
      ['Quarterly Management Reporting','— → assist','first quarterly report'],
      ['Ambassador & Community Leadership Management','— → own','new community ownership'],
      ['Community Engagement Lead Coordination','— → own','new community ownership'],
      ['Preparing Community Events','— → own','new community ownership']]},
  {k:'deepen',n:'Deepening',             c:'#0D6E5C', d:'Two that move up the depth axis without becoming ownership.',
   f:[['Deposit Accounting','assist → execute',''],['Weekly Neighbor Experience Review','assist → execute','']]},
  {k:'oversee',n:'First oversight',      c:'#1A3660', d:'The first two functions held without executing them — a rehearsal for the level above.',
   f:[['Vacant Unit Inspections','own → oversee',''],
      ['Preparing Community Spaces for Classes & Meetups','execute → oversee','']]}
],

'sr-agm':[
  {k:'release',n:'Released — the heart of it', c:'#E07050', d:'Twenty-four functions handed over. This is what the transition is: not mastering more, but letting go. Someone excellent at the Senior job who cannot delegate is less ready, not more.',
   f:[['Hosting Community Events','own → stops','all of Community Experience goes'],
      ['Community Newsletter','own → stops',''],['Ambassador & Community Leadership Management','own → stops',''],
      ['Community Engagement Lead Coordination','own → stops',''],['Marketing Events Support','own → stops',''],
      ['Events & Experiences Community Marketing','own → stops',''],['Preparing Community Events','own → stops',''],
      ['Supporting Neighbor-led Community Events','own → stops',''],['Preparing Community Spaces for Classes & Meetups','oversee → stops',''],
      ['Classes - Attendance Check-ins','execute → stops',''],['Meetups - Attendance Check-ins','execute → stops',''],
      ['Maintenance coordination','own → stops','daily operational coordination goes'],
      ['Housekeeping coordination','own → stops',''],['Security & Watch coordination','own → stops',''],
      ['Consumables Inventory Management','own → stops',''],['Vacant Unit Inspections','oversee → stops',''],
      ['Move-ins','own → stops','front-line resident work goes'],['Move-in Inspections','own → stops',''],
      ['Front Desk Hospitality','own → stops',''],['Visitor Management','own → stops',''],
      ['Renewal Support','own → stops',''],['Renewal Coordination','own → stops',''],
      ['Neighbor Check-in / Coffee Chat','own → stops',''],['Survey Response Actioning','own → stops','']]},
  {k:'oversee',n:'Held without doing',   c:'#1A3660', d:'Kept, but at arm’s length. The test is whether the standard holds when they are not the one performing it.',
   f:[['Daily briefing','own → oversee',''],['Shift handover','own → oversee',''],
      ['Package oversight','own → oversee',''],['Issues, Complaints & Feedback Management','own → oversee',''],
      ['Move-out & Move-out Inspection','own → oversee',''],['Billing & Payment Support','own → oversee',''],
      ['GM Check-in / Coffee Chat','— → oversee','new']]},
  {k:'new',   n:'New — real management',  c:'#7C5CBF', d:'Four responsibilities never touched before, and the first with legal weight.',
   f:[['Schedule Management','— → own','first people-resource responsibility'],
      ['Accounts Receivable','— → own','first collections responsibility'],
      ['Evictions','— → execute','FIRST LEGAL PROCEEDING'],
      ['Early Terminations','— → execute','first contractual termination']]},
  {k:'deepen',n:'Deepening — finance and risk', c:'#0D6E5C', d:'The whole set is administrative and financial. The move is from running a building to running its money, its people and its risk.',
   f:[['Deposit Accounting','execute → own',''],['Vendor Reconciliation','execute → own',''],
      ['Procurement','execute → own',''],['Reporting','execute → own',''],
      ['Notices','execute → own',''],['Incident Management','execute → own',''],
      ['Team Meetings & Coordination','execute → own',''],['Weekly Neighbor Experience Review','execute → own',''],
      ['Accounts Payable','assist → execute',''],['Quarterly Management Reporting','assist → execute','']]},
  {k:'handback',n:'Kept in hand, but no longer owned', c:'#8A8780', d:'One function alone moves this way. The AGM keeps doing it personally while ownership passes to the Senior — the relationship with the neighbour is not something a manager delegates away.',
   f:[['Neighbor Support','own → execute','still done in person; the Senior now owns the outcome']]}
],

'agm-gm':[
  {k:'oversee',n:'Moves to oversight',   c:'#1A3660', d:'Seventeen functions held at scope level. Eight were owned before; nine come back from the release made as an AGM — in a different capacity, ensuring they work rather than performing them.',
   f:[['Accounts Receivable','own → oversee',''],['Deposit Accounting','own → oversee',''],
      ['Vendor Reconciliation','own → oversee',''],['Procurement','own → oversee',''],
      ['Notices','own → oversee',''],['Incident Management','own → oversee',''],
      ['Team Meetings & Coordination','own → oversee',''],['Weekly Neighbor Experience Review','own → oversee',''],
      ['Maintenance coordination','— → oversee','returns as oversight'],['Security & Watch coordination','— → oversee','returns as oversight'],
      ['Front Desk Hospitality','— → oversee','returns as oversight'],['Hosting Community Events','— → oversee','returns as oversight'],
      ['Marketing Events Support','— → oversee','returns as oversight'],['Community Engagement Lead Coordination','— → oversee','returns as oversight'],
      ['Renewal Support','— → oversee','returns as oversight'],['Renewal Coordination','— → oversee','returns as oversight'],
      ['Survey Response Actioning','— → oversee','returns as oversight']]},
  {k:'release',n:'Released',             c:'#E07050', d:'Six pass down to the incoming AGM — the operational layer a scope owner should no longer hold.',
   f:[['Schedule Management','own → stops','goes to the AGM'],['Reporting','own → stops','goes to the AGM'],
      ['Shift handover','oversee → stops',''],['Billing & Payment Support','oversee → stops',''],
      ['Move-out & Move-out Inspection','oversee → stops',''],['Pre-Move-in Coordination & Preparation','own → stops','']]},
  {k:'new',   n:'Deepening to ownership', c:'#1D9E75', d:'Five move up to full ownership — the commercial and legal end of the scope.',
   f:[['Accounts Payable','execute → own',''],['Quarterly Management Reporting','execute → own','the report to senior leadership'],
      ['Evictions','execute → own','final legal responsibility'],['Early Terminations','execute → own',''],
      ['Property Walkthrough','execute → own','owns the building standard itself']]},
  {k:'step',  n:'Becomes personal',      c:'#EF9F27', d:'One function moves the other way — the resident relationship at GM level is theirs to hold, not to supervise.',
   f:[['GM Check-in / Coffee Chat','oversee → own','']]}
]
};

/* Behavioural anchors — what each dimension looks like at the target level */
const ANCHORS = {
'coord-assoc':[
  ['Hospitality presence','Greets everyone; consistent tone and presence','Proactive — does not wait to be approached. Remembers preferences and records them.'],
  ['Closing the loop','Finishes the task and reports it without a reminder','Follows up until the resident confirms resolution. Does not close before that.'],
  ['Judgement & escalation','Knows what to escalate, and escalates early rather than late','Resolves tier-1 independently. Escalates with a brief and options, not a problem.'],
  ['Communication clarity','Passes information on completely. Asks rather than guesses','Adapts tone to the situation. Written work needs no editing.'],
  ['Standards discipline','Logs everything within the shift, no blank fields','Zero incomplete records. Does not cut a step under pressure.']
],
'assoc-sr':[
  ['Hospitality presence','Proactive, remembers preferences','A reference point on site. Leads difficult conversations calmly.'],
  ['Closing the loop','Follows up until the resident confirms','Addresses the root cause rather than the instance. Prevents recurrence.'],
  ['Judgement & escalation','Escalates with a brief and options','Decisions inside their scope are rarely overturned. Knows what is not theirs to decide.'],
  ['Communication clarity','Adapts tone to the situation','Delivers a hard decision to the team without the team coming apart.'],
  ['Standards discipline','Does not cut a step under pressure','Holds the standard on those around them, not only on themselves.'],
  ['Developing others','—','Trains and corrects. Feedback is specific and immediate.']
],
'sr-agm':[
  ['Hospitality presence','A reference point on site','Appears at the critical moments, not in the routine.'],
  ['Closing the loop','Addresses root causes','Owns the outcome across the scope even when someone else performed it.'],
  ['Judgement & escalation','Decisions rarely overturned','Decides under ambiguity and incomplete information. Takes risk knowingly.'],
  ['Communication clarity','Delivers hard decisions intact','Reports upward honestly — bad news early.'],
  ['Standards discipline','Holds the standard on others','Builds a system that holds the standard, instead of holding it personally.'],
  ['Developing others','Trains and corrects','Delegates real responsibility. Leaves room for safe failure. Builds a successor.']
],
'agm-gm':[
  ['Hospitality presence','Appears at the critical moments','Represents the company externally.'],
  ['Closing the loop','Owns the outcome across the scope','Owns the commercial result.'],
  ['Judgement & escalation','Decides under ambiguity','Balances trade-offs between competing functions. Decides what not to do.'],
  ['Communication clarity','Bad news early','Leads through influence rather than authority.'],
  ['Standards discipline','Builds a system that holds the standard','Raises the standard for the company.'],
  ['Developing others','Builds a successor','Builds leaders who build leaders. Measured by who was promoted beneath them.']
]
};

/* What disqualifies — the signs that the transition has not happened */
const NOT_READY = {
'coord-assoc':['Escalates with no view or suggestion','Closes a request before the resident confirms','Quality collapses when it gets busy','Avoids the unfamiliar new functions'],
'assoc-sr':['The function stops working during their leave','Fixes it themselves instead of teaching','"It is faster if I just do it"','Avoids the financial work'],
'sr-agm':['Still executing','No successor after a year','Learns about problems last','Complains the team cannot cope without them — which indicts them, not the team'],
'agm-gm':['Solves daily operational problems','Nobody is ready to succeed them','Success depends on their presence','Avoids hard commercial decisions']
};
