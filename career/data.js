/* ═══════════════════════════════════════════════════════════
   Career Development — shared data
   Involvement figures derived from the live operating model
   (flow-community-os · MENA · 48 functions)
   ═══════════════════════════════════════════════════════════ */

const SCALE = [
  {v:1,l:'Not yet'},{v:2,l:'Emerging'},{v:3,l:'Consistent'},{v:4,l:'Teaches'}
];

const BEHAVIOURS = [
  {id:'host',n:'Hospitality presence'},
  {id:'loop',n:'Closing the loop'},
  {id:'judg',n:'Judgement & escalation'},
  {id:'comm',n:'Communication clarity'},
  {id:'std', n:'Standards discipline'},
  {id:'dev', n:'Developing others', fromLevel:3}
];

/* ─────────────────────────── TEMPLATES ─────────────────────────── */

const TEMPLATES = {

'coord-assoc':{
  code:'T1', from:'RX Coordinator', to:'RX Associate',
  kind:'Breadth move within L2 — not a level jump', months:12, level:2,
  changed:26, counts:{deliberate:9,natural:14,conversation:3},
  essence:'From assisting others to delivering the work yourself',
  startState:'59% of the role is assisting someone else. Owns only 2 functions of 29.',
  valueShift:['I succeeded because I helped','I succeeded because I delivered'],
  eligibility:[
    'Mastered the Coordinator role — ≥90% of 29 functions at standard',
    'Enough repetitions on each function across two quarters',
    '<b>At least 6 months in the current role</b> — settling period',
    'No open performance concern'],
  quarters:[
    {n:1,goal:'Understand the whole picture',period:'Observation quarter',fns:[],
     months:['Onboarding. Shadow every major resident interaction.',
             'Learn every touchpoint: check-in, requests, issue logging, checkout.',
             'Daily rhythm established. First evidence entries.'],
     milestone:'Can describe how the building runs end to end.'},
    {n:2,goal:'I can deliver on my own',period:'First independence',
     fns:['Shift handover','Consumables Inventory Management','Move-ins'],
     why:'Daily, monthly and high-volume — reps accumulate at different speeds.',
     months:['Observe all three. Start Shift handover with support. <b>Value conversation.</b>',
             'Shift handover alone. Move-ins with support. Safety certificate.',
             'Move-ins alone. Second inventory cycle alone. Quarter review.'],
     milestone:'Two consecutive weeks with no unjustified escalation.'},
    {n:3,goal:'I can handle what I have never seen',period:'The hard firsts',
     fns:['Maintenance coordination','Incident Management','★ Package oversight'],
     why:'Contractors and a crisis — after confidence was built in Q2.',
     months:['Observe a contractor visit. Shadow maintenance coordination end to end.',
             'Coordinate maintenance alone. <b>First incident — fully supervised.</b>',
             'Two further incidents. Package oversight ownership handed over.'],
     milestone:'One incident handled alone, start to finish.'},
    {n:4,goal:'It works because I own it',period:'First ownership',
     fns:['Renewal Coordination','Deposit Accounting','★ Vacant Unit Inspections'],
     months:['<b>Stretch assignment starts.</b> Renewal Coordination begins.',
             'Deposit Accounting. Full renewal cycle. Teach one thing to a coordinator.',
             '<b>A full month with no intervention.</b> The gate.'],
     milestone:'The gate — all five checks.'}],
  stretch:{what:'Own Package oversight and Vacant Unit Inspections for a full quarter, no daily review',
    ok:'A non-critical delay · a call the manager would have made differently · rework',
    stop:'Safety risk · financial commitment above the agreed limit · escalating resident complaint'},
  external:[{c:'Safety & First Aid certification',q:2,why:'Required before Incident Management in Q3'}],
  questions:[
    'What did you do on your own this month that you were not doing three months ago?',
    'Tell me about something that went wrong — what did you do?',
    '<b>What are you avoiding?</b>',
    'What blocked you that you did not ask for help with?'],
  agm:{hours:'4.5',acts:[
    'Q1 — Introduce the building. Assign the buddy. Write down what Q1 success means.',
    'Q2 — Assign a teacher per function. Hold the value conversation. Decide who takes Classes & Meetups.',
    'Q3 — Supervise the first full incident. Hand over Package oversight in front of the team.',
    'Q4 — Step back from daily review. Assess who they taught. Prepare the gate summary.']},
  gm:{hours:'1.5',acts:[
    'Q1 — Put the quarterly gates in your calendar. Do not delegate this.',
    'Q2 — Approve the safety certificate budget. Ask: which function do they now run unaided?',
    'Q3 — Ask: what situation did they handle themselves? A vague answer means it is not working.',
    'Q4 — Approve the stretch assignment and its limits in writing. Rate independently. Sign the gate.']},
  gates:[
    ['Craft','9 deliberate complete · 14 natural verified · 3 conversations held'],
    ['Learning speed','Shift handover record read and accepted'],
    ['Conduct','Consistent across all five, from three sources'],
    ['Teaching','Taught one thing to a coordinator'],
    ['Scope','Stretch assignment held within its written limits']],
  failRule:'Someone who reaches the standard but never worked unsupervised has not made the transition.'
},

'assoc-sr':{
  code:'T2', from:'RX Associate', to:'Senior RX Associate',
  kind:'Level jump L2 → L3 — first responsibility for someone else’s work', months:12, level:3,
  changed:36, counts:{deliberate:12,natural:22,conversation:2},
  essence:'From "I do it" to "it is mine" — then "it works when I am away"',
  startState:'Ends the year holding 43 functions, 28 of them owned — the heaviest role on the team.',
  valueShift:['My success is the quality of my work','My success is the work of those I direct'],
  eligibility:[
    'Mastered the Associate role — ≥90% of 35 functions, 100% of the owned two',
    'Enough repetitions on each function',
    '<b>At least 6 months in the current role</b> — settling period',
    'No open performance concern',
    '<b>An L3 position exists or is created</b> — a level jump needs real scope'],
  quarters:[
    {n:1,goal:'I own it, not just do it',period:'Ownership foundation',
     fns:['Move-ins','Issues & Complaints','Maintenance coordination','Shift handover'],
     why:'Four representative functions — ownership is one capability, learned once then extended.',
     months:['Ownership announced to the team. <b>Conversation: what separates execute from own.</b>',
             '<b>Write a procedure for each</b> that someone else could follow.',
             'Root-cause the three most repeated problems. Put a preventive step in place.'],
     milestone:'The four keep working during a week of leave.'},
    {n:2,goal:'It works when I am away',period:'First directing — hardest part',
     fns:['Directing 1–2 people','★ Vacant Unit Inspections (oversee)','Preparing Community Spaces (oversee)'],
     why:'The defining L3 capability. Yesterday they were your peer.',
     months:['The directing role is announced formally. Begin guiding 1–2 people.',
             '<b>Oversee without executing.</b> Four documented feedback conversations.',
             'Second oversight function. <b>Performance management course.</b>'],
     milestone:'Those they direct meet the standard in their absence.'},
    {n:3,goal:'I can run the commercial side',period:'First financial exposure',
     fns:['Reporting','Vendor Reconciliation','Procurement'],
     why:'The test here is psychological, not technical — the common failure is avoidance.',
     months:['<b>Accounting fundamentals course.</b> Shadow a full reconciliation.',
             'Produce the operational report alone. First vendor reconciliation solo.',
             'Procurement solo. Accounts Payable and Quarterly Reporting as assist.'],
     milestone:'A full monthly financial cycle with no correction.'},
    {n:4,goal:'The building runs through me',period:'Proof',
     fns:['Ambassador & Community Leadership','Community Engagement Lead Coordination','Preparing Community Events'],
     months:['<b>Stretch assignment starts.</b> Community ownership begins.',
             'Third community function. The 22 extended ownerships verified.',
             '<b>A planned week away.</b> The gate.'],
     milestone:'The gate — all five checks.'}],
  stretch:{what:'Run the property for two weeks with the AGM absent — all 43 functions working',
    ok:'A different operational call · a non-critical delay · rework',
    stop:'Safety · financial commitment above the limit · legal escalation'},
  external:[
    {c:'Performance management & coaching basics',q:2,why:'First responsibility for others’ work'},
    {c:'Accounting fundamentals & reconciliation',q:3,why:'Vendor Reconciliation and Accounts Payable'}],
  questions:[
    '<b>Which function now runs without you?</b>',
    '<b>Who did you teach this month, and what did they learn?</b>',
    'What did you decide without consulting anyone?',
    'What are you avoiding?'],
  agm:{hours:'6',acts:[
    'Q1 — Define the four owned functions in writing and announce them to the team.',
    'Q2 — <b>Announce the directing role yourself.</b> Sit in on their first feedback conversation.',
    'Q3 — Shadow them through a reconciliation. Review the first report for quality of observation, not format.',
    'Q4 — <b>Take two planned weeks away.</b> Assess those they directed. Prepare the gate summary.']},
  gm:{hours:'2',acts:[
    'Q1 — Confirm ownership was assigned in writing, not verbally.',
    'Q2 — Ask: have they made a decision in the last four weeks without consulting? "No" means ownership has not landed.',
    'Q3 — Approve both course budgets. Review the quarterly report they produced.',
    'Q4 — Approve the two-week absence. Rate independently. Sign the gate.']},
  gates:[
    ['Craft','12 deliberate · 22 extended ownerships verified · a written procedure per owned function'],
    ['Learning speed','Record on Reporting or Vendor Reconciliation'],
    ['Conduct','Consistent across five, and <b>Teaches</b> on developing others'],
    ['Teaching','Those they directed perform to standard — assessed independently'],
    ['Scope','Two weeks with the AGM away, all 43 functions working']],
  failRule:'Someone holding 28 functions who has become the single point of failure has not transitioned — they have absorbed more work.'
},

'sr-agm':{
  code:'T3', from:'Senior RX Associate', to:'Assistant General Manager',
  kind:'Level jump L3 → L4 — promotion by letting go', months:12, level:4,
  changed:45, counts:{release:24,oversee:7,newwork:4,deepen:10},
  essence:'From doing to being accountable — 24 functions must be handed over',
  startState:'Everything that made them successful at L3 becomes the obstacle at L4.',
  valueShift:['My value is in what I deliver','My value is in what works without me'],
  eligibility:[
    'Mastered the Senior role — ≥90% of 43 functions, 100% of the 28 owned',
    '<b>At least 6 months in the current role</b> · 12 preferred given the complexity',
    'Teaches on developing others',
    'No open performance concern',
    '<b>A successor is named and has entered the L2→L3 programme</b> — the real blocker',
    'The GM has committed 4 hours a month'],
  blocker:'22 of the 24 released functions drop to Associate at <b>execute</b>, not <b>own</b> — they lose their owner. Two have no holder at all below L3. This promotion cannot complete without an L2→L3 promotion running alongside it.',
  quarters:[
    {n:1,goal:'The map — planning, not handover',period:'No handover this quarter',
     fns:['Handover map for all 24','Successor readiness assessment','A written procedure per function'],
     why:'Starting the handover before the map is complete creates chaos, then a retreat.',
     months:['<b>Handover map</b> — a named recipient per function. Decide the two orphaned functions.',
             'Assess successor readiness. <b>Value conversation with the GM.</b>',
             'A written procedure per released function. <b>Accounting course.</b>'],
     milestone:'Map approved, 24 procedures written, successor knows what is coming.'},
    {n:2,goal:'Hand over the first half',period:'12 functions released',
     fns:['11 Community Experience functions','Consumables Inventory','Schedule Management (new)'],
     why:'Community first — visible failure, correctable, no harm to residents.',
     months:['Hand over 6. A teaching event each. <b>Labour & tenancy law course.</b>',
             'Hand over 6 more. Take on Schedule Management. Weekly coaching on relapse.',
             'Take on Accounts Receivable. <b>Zero tasks completed in their name across the 12.</b>'],
     milestone:'Half released. Relapse being managed, not eliminated yet.'},
    {n:3,goal:'Take on the management work',period:'Full release',
     fns:['12 remaining releases','Evictions','Early Terminations','7 oversight functions'],
     months:['Release the four operational coordination functions. <b>Begin overseeing the seven.</b>',
             'Release the eight resident-experience functions. <b>First eviction, legally supervised.</b>',
             'Early Terminations. Deepen the ten financial functions. <b>Team leadership course.</b>'],
     milestone:'Zero tasks in the 24. The seven overseen with the standard held.'},
    {n:4,goal:'Prove it',period:'No relapse',
     fns:['Scheduling stretch continues','Quarterly report','Successor assessment'],
     months:['<b>Stretch assignment.</b> Formal successor assessment.',
             'Write and present the quarterly management report to the GM.',
             '<b>A full month with no relapse.</b> A planned week away. The gate.'],
     milestone:'The gate — all five checks.'}],
  stretch:{what:'Own team scheduling entirely for six months — no intervention from the current AGM',
    ok:'An imperfect roster · costly cover · a different call',
    stop:'Coverage gap that risks safety · labour law breach · labour budget overrun'},
  external:[
    {c:'Accounting fundamentals & reconciliation',q:1,why:'Accounts Receivable and Deposit Accounting'},
    {c:'Saudi labour & tenancy law',q:2,why:'Evictions and Notices — a legal responsibility'},
    {c:'Team leadership & performance management',q:3,why:'First full management responsibility'}],
  questions:[
    '<b>What did you stop doing this month?</b>',
    '<b>When did you go back to executing, and why?</b>',
    'Who could step into your role today?',
    'What decision did you make with incomplete information?'],
  agm:{hours:'7',acts:[
    'Q1 — Review the handover map line by line. Assess successor readiness together.',
    'Q2 — <b>Weekly coaching on relapse</b> — each incident diagnosed, not blamed. Hand over Schedule Management for real.',
    'Q3 — Watch the oversight: did they hold the standard without executing? Accompany the first eviction.',
    'Q4 — <b>Step away from scheduling entirely.</b> Assess the successor independently. Gate summary.']},
  gm:{hours:'4',acts:[
    'Q1 — <b>Decide the successor</b> (the blocker). Decide the two orphaned functions. Hold the value conversation yourself.',
    'Q2 — Ask monthly: what have they stopped doing? Approve all three course budgets.',
    'Q3 — Supervise the first eviction — a legal responsibility. Review the financial deepening.',
    'Q4 — Approve the stretch and its limits in writing. Read the quarterly report. Sign the gate.']},
  gates:[
    ['Craft','24 released · 4 new taken on · 10 deepened · 7 overseen without executing'],
    ['Learning speed','Record on Schedule Management or Evictions'],
    ['Conduct','Consistent across five, and <b>Teaches</b> on developing others'],
    ['Teaching','The successor performs to standard — assessed independently'],
    ['Scope','Six months of scheduling with no intervention · a month with no relapse']],
  failRule:'Someone who has mastered the new work but not released the 24 is not an AGM — they are a Senior with extra duties.'
},

'agm-gm':{
  code:'T4', from:'Assistant General Manager', to:'General Manager',
  kind:'Level jump L4 → L5 — from a function to a whole scope', months:18, level:5,
  changed:29, counts:{oversee:17,release:6,deepen:5,lighter:1},
  essence:'From managing functions to owning a commercial result',
  startState:'The biggest jump on the ladder. 17 functions move to oversight; 19 do not change at all.',
  valueShift:['I am accountable for my functions','I am accountable for the whole result'],
  eligibility:[
    'Mastered the AGM role — ≥90% of 24 functions, 100% of the 11 owned',
    '<b>At least 6 months in the current role</b> · 12 preferred given the size of this jump',
    'Teaches on developing others — <b>and has actually built a successor</b>',
    'No open performance concern',
    '<b>Real scope exists</b> — a building or portfolio. No L5 without scope'],
  note:'18 months, not 12. The job descriptions place AGM at 4–7 years and GM at 8–12 — a gap wider than a single year.',
  quarters:[
    {n:1,goal:'I see the whole scope',period:'Beyond RX',
     fns:['Scope map across all teams','Handover map for the six released','P&L reading'],
     months:['Map the scope: every team, not just RX — security, housekeeping, maintenance.',
             '<b>Value conversation with the regional sponsor.</b> Handover map for the six.',
             '<b>P&L and financial reading course.</b> Shadow a full financial review.'],
     milestone:'Can explain how the building makes or loses money.'},
    {n:2,goal:'Hand over and oversee',period:'Release',
     fns:['Schedule Management','Reporting','4 further releases'],
     months:['Hand Schedule Management and Reporting to the incoming AGM.',
             'Release the remaining four. Begin overseeing the ten previously owned.',
             '<b>Zero tasks in the six.</b> Build the oversight rhythm — how to know without doing.'],
     milestone:'Six released. Oversight rhythm established.'},
    {n:3,goal:'I own the financial side',period:'Commercial ownership',
     fns:['Accounts Payable','Quarterly Management Reporting','Evictions','Early Terminations'],
     months:['Accounts Payable and Quarterly Management Reporting move to own.',
             '<b>First quarterly report to senior leadership, written and presented alone.</b>',
             'Evictions and Early Terminations to own — final legal responsibility.'],
     milestone:'A full quarterly financial cycle under their responsibility.'},
    {n:4,goal:'I oversee what I never touched',period:'Cross-team scope',
     fns:['Maintenance & Security oversight','7 resident and community functions','Property Walkthrough'],
     months:['Oversee the other teams — <b>maintenance and security, non-RX</b>.',
             'Oversee resident experience and community — seven functions.',
             'Property Walkthrough to own. GM Check-in becomes personal.'],
     milestone:'Knows a function is working without executing or watching it daily.'},
    {n:5,goal:'I carry the result',period:'Full scope',
     fns:['Stretch assignment begins','Stakeholder management','A real trade-off'],
     months:['<b>Stretch assignment starts</b> — full scope.',
             '<b>External executive coaching begins.</b> Stakeholder management.',
             'A documented trade-off between two functions competing for the same resource.'],
     milestone:'Holding scope with the GM reviewing outcome only.'},
    {n:6,goal:'Proof',period:'The gate',
     fns:['Two weeks away','Successor AGM ready','Full-cycle result review'],
     months:['<b>Two planned weeks away.</b> The whole scope keeps working.',
             'A successor AGM is ready and independently assessed.',
             'Review the result of a full cycle. <b>The gate.</b>'],
     milestone:'The gate — all five checks.'}],
  stretch:{what:'Full responsibility for a building (or portfolio) result for two quarters — the current GM reviews outcome only',
    ok:'Budget variance within an agreed band · a different commercial call · an initiative that did not work',
    stop:'Reputational risk · material financial overrun · regulatory breach · a wave of resignations'},
  external:[
    {c:'P&L and financial reading',q:1,why:'Responsibility for the commercial result'},
    {c:'Stakeholder management & negotiation',q:4,why:'Investors, partners, regulators'},
    {c:'Individual executive coaching',q:5,why:'The current GM cannot be a neutral mirror for their own successor'}],
  questions:[
    '<b>What did you find out too late this month?</b>',
    '<b>Which trade-off did you make between two competing functions?</b>',
    'Who below you is ready for promotion?',
    '<b>What did you decide not to do?</b>'],
  agm:{hours:'6',label:'Current GM — direct coach',acts:[
    'Q1 — Open the full books, including the numbers they have not seen.',
    'Q2 — Watch: are they overseeing or intervening? Hand scheduling and reporting to the incoming AGM.',
    'Q3 — Accompany the first report to senior leadership. Supervise the first eviction under their responsibility.',
    'Q4 — Introduce them to the other team leads as their overseer. Watch the non-RX oversight.',
    'Q5 — <b>Step away from the scope.</b> Review outcome, not process.',
    'Q6 — Take two weeks away. Assess the successor. Gate summary for the sponsor.']},
  gm:{hours:'2',label:'Regional sponsor',acts:[
    'Q1 — <b>Hold the value conversation.</b> Approve the target scope.',
    'Q3 — Attend the quarterly presentation and judge it as leadership, not as a coach.',
    'Q5 — Approve the stretch and its limits in writing. Approve the external coaching.',
    'Q6 — Rate independently. <b>Grant the level.</b>']},
  gates:[
    ['Craft','6 released · 17 overseen · 5 deepened to ownership'],
    ['Learning speed','Record on overseeing a non-RX team — the first scope outside their specialism'],
    ['Conduct','Consistent across five, and <b>Teaches</b> on developing others'],
    ['Teaching','A successor AGM is ready and independently assessed'],
    ['Scope','Two quarters carrying a full result · two weeks away · the scope keeps working']],
  failRule:'Someone who has not built a successor is not promoted, whatever their results. A GM whose success depends on their presence built dependence, not a system.'
}
};

/* ─────────────────────────── TEAM ─────────────────────────── */

const TEAM = {
  beesan:{name:'Beesan Harb',ini:'BH',color:'#1D9E75',property:'Narjs East',
    role:'RX Coordinator',template:'coord-assoc',state:'active',quarter:2,
    manager:'Raghdah Safar',sponsor:'Saad Alajmi',gate:'Jun 2027',
    teachers:{'Shift handover':'Rakan Shisha','Consumables Inventory Management':'Rakan Shisha','Move-ins':'Ali Nour'},
    note:'The only two functions she owns today, she hands over. Needs an explicit conversation — ownership moves because she is freed for bigger ownership.'},

  rakan:{name:'Rakan Shisha',ini:'RK',color:'#7C5CBF',property:'Narjs East',
    role:'Senior RX Associate',template:'sr-agm',state:'blocked',quarter:0,
    manager:'Raghdah Safar',sponsor:'Saad Alajmi',gate:'Sep 2027',
    blockedBy:'No successor at L3. 22 functions would lose their owner.',
    note:'Priority candidate — his promotion also relieves the AGM shortage at Narjs West and Olaya.'},

  ali:{name:'Ali Nour',ini:'AL',color:'#C8853A',property:'Narjs East',
    role:'RX Associate',template:'assoc-sr',state:'eligible',quarter:0,
    manager:'Raghdah Safar',sponsor:'Saad Alajmi',gate:'—',
    note:'Candidate to succeed Rakan. Eligibility needs verification by the AGM.'},

  rawan:{name:'Rawan Alattas',ini:'RA',color:'#C8853A',property:'Narjs East',
    role:'RX Associate',template:'assoc-sr',state:'eligible',quarter:0,
    manager:'Raghdah Safar',sponsor:'Saad Alajmi',gate:'—',
    note:'Candidate to succeed Rakan. Eligibility needs verification by the AGM.'},

  raghdah:{name:'Raghdah Safar',ini:'RS',color:'#0D6E5C',property:'Narjs East',
    role:'AGM',template:'agm-gm',state:'practising',quarter:0,
    manager:'Saad Alajmi',sponsor:'Regional',gate:'—',
    note:'Practising at level. Coach for Beesan and Rakan — around 11 hours a month committed.'}
};

const STATE = {
  active:    {n:'In development', s:'background:#EAF7F2;color:#0A5540'},
  blocked:   {n:'Blocked',        s:'background:#FDEEEA;color:#8A2E12'},
  eligible:  {n:'Eligible',       s:'background:#EEEDFE;color:#26215C'},
  practising:{n:'Practising',     s:'background:#F2EFE9;color:#5A5750'}
};

const ACTIONS = [
  {id:'a1',who:'Rakan',   t:'Choose the successor — Ali or Rawan?',            m:'The actual blocker. His programme cannot start without it.',due:'20 Sep',lvl:'over'},
  {id:'a2',who:'Ali / Rawan',t:'Verify eligibility for the L2→L3 programme',   m:'Mastery of 35 functions + 6 months in role',due:'25 Sep',lvl:'over'},
  {id:'a3',who:'Rakan',   t:'Decide the two orphaned functions',               m:'Community Engagement Lead Coordination · Ambassador & Community Leadership',due:'15 Oct',lvl:'soon'},
  {id:'a4',who:'Beesan',  t:'Assign a teacher for each of the 7 new functions',m:'Craft is taught laterally by the function owner',due:'31 Oct',lvl:'soon'},
  {id:'a5',who:'Beesan',  t:'Ownership conversation — Classes & Meetups',      m:'Skipping it creates silent resistance',due:'30 Nov',lvl:'soon'},
  {id:'a6',who:'Beesan',  t:'Monthly development session — October',           m:'45 minutes · last Thursday',due:'31 Oct',lvl:''},
  {id:'a7',who:'Beesan',  t:'Budget for Safety & First Aid certification',     m:'Scheduled inside Q2',due:'31 Oct',lvl:''}
];

/* ─────────────────── COACH TASKS ───────────────────
   The template defines the pattern; the coach page
   expands it into concrete, dated tasks per person.
   perFn:true → one task per active function that quarter.
   ─────────────────────────────────────────────────── */

const COACH_TASKS = {
'coord-assoc':{
  agm:{1:[{t:'Introduce the building and walk it together'},
          {t:'Assign the buddy from the Associate team'},
          {t:'Write down what Q1 success means — in writing, not verbally'}],
       2:[{t:'Assign a teacher for',perFn:true},
          {t:'Hold the value conversation — "I helped" → "I delivered"',key:true},
          {t:'Decide who takes over Classes & Meetups check-ins'},
          {t:'Approve the Safety & First Aid booking'}],
       3:[{t:'Supervise the first full incident, start to finish',key:true},
          {t:'Hand over Package oversight in front of the team'},
          {t:'Observe a contractor visit together'}],
       4:[{t:'Step back from daily review of the stretch assignment',key:true},
          {t:'Assess the coordinator they taught'},
          {t:'Prepare the gate summary for the GM'}]},
  gm:{1:[{t:'Put all four quarterly gates in your calendar — do not delegate'}],
      2:[{t:'Approve the Safety certificate budget'},
         {t:'Ask the AGM: which function do they now run unaided?'}],
      3:[{t:'Ask: what situation did they handle themselves? A vague answer means it is not working',key:true}],
      4:[{t:'Approve the stretch assignment and its limits in writing',key:true},
         {t:'Rate all dimensions independently'},
         {t:'Sign the gate decision and tell them in writing within 48 hours'}]}},

'assoc-sr':{
  agm:{1:[{t:'Define the four owned functions in writing and announce them to the team',key:true},
          {t:'Review the written procedure for'},
          {t:'Check the root-cause analysis of the three most repeated problems'}],
       2:[{t:'Announce the directing role formally — do not let them assert it',key:true},
          {t:'Sit in on their first feedback conversation'},
          {t:'Approve the performance management course'}],
       3:[{t:'Shadow them through a full vendor reconciliation'},
          {t:'Review the first report — on quality of observation, not format',key:true},
          {t:'Approve the accounting course'}],
       4:[{t:'Take two planned weeks away',key:true},
          {t:'Assess those they directed, independently'},
          {t:'Prepare the gate summary'}]},
  gm:{1:[{t:'Confirm ownership was assigned in writing, not verbally'}],
      2:[{t:'Ask: have they decided anything in four weeks without consulting? "No" means ownership has not landed',key:true}],
      3:[{t:'Approve both course budgets'},{t:'Review the quarterly report they produced'}],
      4:[{t:'Approve the two-week absence'},{t:'Rate independently and sign the gate'}]}},

'sr-agm':{
  agm:{1:[{t:'Review the handover map line by line — a named recipient per function',key:true},
          {t:'Assess successor readiness together'}],
       2:[{t:'Weekly coaching on relapse — diagnose each incident, do not blame',key:true},
          {t:'Hand over Schedule Management for real'},
          {t:'Verify zero tasks completed in their name across the first 12'}],
       3:[{t:'Watch the oversight: did they hold the standard without executing?',key:true},
          {t:'Accompany the first eviction'}],
       4:[{t:'Step away from scheduling entirely',key:true},
          {t:'Assess the successor independently'},
          {t:'Prepare the gate summary'}]},
  gm:{1:[{t:'Decide the successor — Ali or Rawan',key:true},
         {t:'Decide the two orphaned functions'},
         {t:'Hold the value conversation yourself: "if you no longer execute, what makes you valuable?"',key:true}],
      2:[{t:'Ask monthly: what have they stopped doing?'},
         {t:'Approve all three course budgets'}],
      3:[{t:'Supervise the first eviction — a legal responsibility',key:true},
         {t:'Review the financial deepening'}],
      4:[{t:'Approve the stretch and its limits in writing'},
         {t:'Read the quarterly report'},{t:'Sign the gate'}]}},

'agm-gm':{
  agm:{1:[{t:'Open the full books — including the numbers they have not seen',key:true}],
       2:[{t:'Watch: are they overseeing or intervening?',key:true},
          {t:'Hand scheduling and reporting to the incoming AGM'}],
       3:[{t:'Accompany the first report to senior leadership'},
          {t:'Supervise the first eviction under their responsibility'}],
       4:[{t:'Introduce them to the other team leads as their overseer',key:true}],
       5:[{t:'Step away from the scope — review outcome, not process',key:true}],
       6:[{t:'Take two weeks away'},{t:'Assess the successor AGM'},{t:'Gate summary for the sponsor'}]},
  gm:{1:[{t:'Hold the value conversation'},{t:'Approve the target scope'}],
      3:[{t:'Attend the quarterly presentation — judge it as leadership, not as a coach'}],
      5:[{t:'Approve the stretch and its limits in writing'},{t:'Approve the external coaching'}],
      6:[{t:'Rate independently and grant the level',key:true}]}}
};

/* who coaches whom */
const COACHES = {
  raghdah:{name:'Raghdah Safar',ini:'RS',role:'AGM',color:'#0D6E5C',property:'Narjs East',
    as:'agm', people:['beesan','rakan']},
  saad:{name:'Saad Alajmi',ini:'SA',role:'GM',color:'#1D3A8A',property:'Narjs East',
    as:'gm', people:['beesan','rakan','ali','rawan']}
};

/* ─────────────────── COMPANY / HR LAYER ───────────────────
   HR sees coaches and the system — never an individual's
   practice log, self-rating, or the gap between ratings.
   ─────────────────────────────────────────────────────────── */

const PROPERTIES = [
  {id:'ne',name:'Narjs East', units:242, gm:'Saad Alajmi',      agm:'Raghdah Safar'},
  {id:'gr',name:'Granada',    units:439, gm:'Weesam Khuja',     agm:'Sarah Niazi'},
  {id:'nw',name:'Narjs West', units:238, gm:'Husni Abdulrazzaq',agm:null},
  {id:'ol',name:'Olaya',      units:50,  gm:'Johnny Hachem',    agm:null}
];

/* current headcount per level, company-wide */
const CAPACITY = [
  {lvl:'L2 · Coordinator / Associate', held:10, inDev:1, note:'Entry and specialist layer'},
  {lvl:'L3 · Senior',                  held:6,  inDev:0, note:'Operational backbone'},
  {lvl:'L4 · AGM',                     held:2,  inDev:0, note:'Two properties have none'},
  {lvl:'L5 · GM',                      held:4,  inDev:0, note:'One per property'}
];

/* set by leadership — drives the whole capacity calculation */
const EXPANSION = {newBuildings:null, horizonMonths:18};

/* what a new building consumes */
const PER_BUILDING = {L5:1, L4:1, L3:2};

/* the four system-level measures */
const PROGRAMME_METRICS = [
  {k:'Gate pass rate',              v:null, unit:'%',  reveals:'Whether the standard is set at the right level',
   warn:'A sharp rise during rapid expansion is a warning, not good news'},
  {k:'Retention 12 months after promotion', v:null, unit:'%', reveals:'Whether the promotion decision was right',
   warn:'The clearest signal the model works — and the slowest to arrive'},
  {k:'Internal fill rate for open roles',   v:null, unit:'%', reveals:'Whether it is actually building capacity',
   warn:'Falling means expansion is being funded by external hiring'},
  {k:'Coach compliance',            v:null, unit:'%',  reveals:'Whether the programme is being applied at all',
   warn:'Everything else is meaningless if this is low'}
];

/* what HR deliberately cannot see — displayed in the tool itself */
const HR_BOUNDARY = {
  sees:[
    'Whether the monthly session was held',
    'Whether coach tasks were completed, and on time',
    'Whether criteria were published before assessment',
    'Whether calibration happened this quarter',
    'Whether a coach’s outcomes are unusually skewed'],
  doesNot:[
    'The content of anyone’s practice log',
    'Any individual’s self-rating',
    'The gap between a self-rating and a manager rating',
    'Whether a specific person is ready for promotion'],
  why:'The practice log contains admissions of error. If everyone can read it, people write for the audience and it stops working within a month. Protection is not secrecy — it is the condition for honesty.'
};
