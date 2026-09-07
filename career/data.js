/* ═══════════════════════════════════════════════════════════
   Career Development — shared data
   Involvement figures derived from the live operating model
   (flow-community-os · MENA · 48 functions)
   ═══════════════════════════════════════════════════════════ */

/* The three dimensions of the gate — each with the question it actually asks. */
const DIMENSIONS = {
  Craft:  {q:'Can you do the work to standard?',                 how:'computed from the functions'},
  Conduct:{q:'How do you show up while doing it?',                how:'observed, from three sources'},
  Scope:  {q:'Can you carry the next kind of responsibility?',    how:'tested by the stretch assignment'},
  'Learning speed':{q:'How fast do you turn a correction into a habit?', how:'read from the practice log'},
  Teaching:{q:'Can you get someone else doing it?',               how:'one thing taught, and it stuck'}
};

const SCALE = [
  {v:1,l:'Not yet',    d:'We have not seen it. No evidence — not a verdict.'},
  {v:2,l:'Sometimes',  d:'Does it, but not reliably. Still needs reminding.'},
  {v:3,l:'Every time', d:'Does it under pressure, not only on a good day.'},
  {v:4,l:'Teaches',    d:'Does it, and gets someone else doing it.'}
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
  startState:'59% of a Coordinator’s functions are assisting someone else, and they own only two. An Associate executes 86% — the same work, done rather than supported.',
  valueShift:['I succeeded because I helped','I succeeded because I delivered'],
  eligibility:[
    'Mastered the Coordinator role — ≥90% of 29 functions at standard',
    'Practised each function often enough to be judged — not a count, the manager’s call',
    '<b>At least 6 months in the current role</b> — settling period',
    'No open performance concern'],
  quarters:[
    {n:1,goal:'Understand the whole picture',period:'Observation quarter',fns:[],
     months:['Programme opens. Walk the seven functions that are coming — the ones never touched as a Coordinator.',
             'Shadow a contractor visit, a vendor call and a handover. Watch how they fail, not only how they work.',
             'Name the teacher for each of the three Q2 functions. First practice entries written.'],
     noPlan:"An observation quarter — nothing is practised yet. The steps begin in Q2, once there is a function to stand in front of.",
     milestone:'Can describe what the seven new functions demand — and who owns each one today.'},
    {n:2,goal:'I can deliver on my own',period:'First independence',
     fns:['Shift handover','Consumables Inventory Management','Move-ins'],
     why:'Daily, monthly and high-volume — reps accumulate at different speeds.',
     months:['Observe all three. Start Shift handover with support. <b>Value conversation.</b>',
             'Shift handover alone. Move-ins with support. Safety certificate.',
             'Move-ins alone. Second inventory cycle alone. Quarter review.'],
     example:{"fn":"Shift handover","a":"Ran the evening handover on my own for the first time — the 6pm shift, with the Senior watching from the desk.","o":"I covered the open work orders but skipped the two flats waiting on access. The night team heard about it at 9pm from the resident, not from me.","w":"Go through the access list <b>before</b> the work orders, not after. The access items are the ones that go wrong overnight.","n":"The access log is on paper at the desk and the work orders are in the system. Until they sit in one place I will keep missing it."},
     plan:[["a","o","o"],["s","o","a"],["s","s","s"]],
     milestone:'Two consecutive weeks with no unjustified escalation.'},
    {n:3,goal:'I can handle what I have never seen',period:'The hard firsts',
     fns:['Maintenance coordination','Incident Management','★ Package oversight'],
     why:'Contractors and a crisis — after confidence was built in Q2.',
     months:['Observe a contractor visit. Shadow maintenance coordination end to end.',
             'Coordinate maintenance alone. <b>First incident — fully supervised.</b>',
             'Two further incidents. Package oversight ownership handed over.'],
     example:{"fn":"Incident Management","a":"First incident handled alone — a water leak on the third floor at 11pm.","o":"I stopped the leak and got the contractor out, but I did not tell the two flats below until the next morning. One of them had already called the GM.","w":"Tell the affected residents <b>before</b> calling the contractor. The repair takes hours; the message takes two minutes.","n":"The after-hours contractor number was out of date. Somebody needs to own keeping that list current."},
     plan:[["o","o","a"],["s","a","a"],["s","s","w"]],
     milestone:'One incident handled alone, start to finish.'},
    {n:4,goal:'It works because I own it',period:'First ownership',
     fns:['Renewal Coordination','Deposit Accounting','★ Vacant Unit Inspections'],
     months:['<b>Stretch assignment starts.</b> Renewal Coordination begins.',
             'Deposit Accounting. Full renewal cycle. Teach one thing to a coordinator.',
             '<b>A full month with no intervention.</b> The gate.'],
     example:{"fn":"Renewal Coordination","a":"Ran a full renewal cycle for four flats without asking anyone.","o":"Three renewed on time. The fourth slipped eleven days because I was waiting for pricing to be confirmed and did not chase it.","w":"Chase the pricing myself on day one. <b>Waiting is not neutral</b> — it cost eleven days.","n":"Nothing. I should have asked earlier instead of waiting, and that is on me."},
     plan:[["a","o","a"],["s","a","s"],["w","s","w"]],
     milestone:'The gate — all five checks.'}],
  stretch:{what:'Own Package oversight for the whole of the final quarter — handed over at the end of Q3, no daily review after it',
    ok:'A non-critical delay · a call the manager would have made differently · rework',
    stop:'Safety risk · financial commitment above the agreed limit · escalating resident complaint'},
  external:[{c:'Safety & First Aid certification',q:2,why:'Required before Incident Management in Q3'}],
  questions:[
    'What did you do on your own this month that you were not doing three months ago?',
    'Tell me about something that went wrong — what did you do?',
    '<b>What are you avoiding?</b>',
    'What blocked you that you did not ask for help with?'],
  agm:{hours:'4.5',acts:[
    'Q1 — Name the seven new functions out loud. Arrange the shadowing. Write down what Q1 success means.',
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
    ['Conduct','Every time across all five, from three sources'],
    ['Teaching','Taught one thing to a coordinator'],
    ['Scope','Stretch assignment held within its written limits']],
  failRule:'Someone who reaches the standard but never worked unsupervised has not made the transition.'
},

'assoc-sr':{
  code:'T2', from:'RX Associate', to:'Senior RX Associate',
  kind:'Level jump L2 → L3 — first responsibility for someone else’s work', months:12, level:3,
  changed:36, counts:{deliberate:12,natural:22,oversight:2},
  essence:'From doing the task to owning the outcome — it has to hold whether they are there or not',
  startState:'Twenty-four functions move from execute to own. A Senior ends up holding 43 functions with 28 of them owned — 65% ownership, the heaviest load on the team. They still perform the work; what changes is that the result is now theirs.',
  valueShift:['I did my work well','The outcome is mine — present or not'],
  eligibility:[
    'Mastered the Associate role — ≥90% of 35 functions, 100% of the owned two',
    'Practised each function often enough to be judged — not a count, the manager’s call',
    '<b>At least 6 months in the current role</b> — settling period',
    'No open performance concern',
    '<b>An L3 position exists or is created</b> — a level jump needs real scope'],
  quarters:[
    {n:1,goal:'I own it, not just do it',period:'Ownership foundation',
     fns:['Move-ins','Issues, Complaints & Feedback Management','Maintenance coordination','Shift handover'],
     why:'Four representative functions — ownership is one capability, learned once then extended.',
     months:['Ownership announced to the team. <b>Conversation: what separates execute from own.</b>',
             '<b>Write a procedure for each</b> that someone else could follow.',
             'Root-cause the three most repeated problems. Put a preventive step in place.'],
     plan:[["s","s","s","s"],["s","s","s","s"],["w","w","w","w"]],
     example:{"fn":"Move-ins","a":"Wrote the move-in procedure so that a coordinator could run it without me, then had Meshal run one from it while I stayed out of the way.","o":"He got through it, but he called me twice — once about the utilities form and once about a key that was not in the box. Both are steps I do from memory and never wrote down.","w":"A procedure I can follow is not a procedure <b>someone else</b> can follow. Write it for the person who has never done it, then test it on them before calling it done.","n":"Nothing. The gap was mine — I wrote it from what I remember instead of watching what actually happens."},
     milestone:'The four keep working during a week of leave.'},
    {n:2,goal:'It works when I am away',period:'First directing — hardest part',
     fns:['Directing 1–2 people','★ Vacant Unit Inspections (oversee)','Preparing Community Spaces for Classes & Meetups (oversee)'],
     why:'The defining L3 capability. Yesterday they were your peer.',
     months:['The directing role is announced formally. Begin guiding 1–2 people.',
             '<b>Oversee without executing.</b> Four documented feedback conversations.',
             'Second oversight function. <b>Performance management course.</b>'],
     example:{"fn":"Directing 1–2 people","a":"First month directing two coordinators — Meshal and Dana. Gave each of them one function to run.","o":"Dana asked me three times what to do and I told her three times. By week four she was still asking. Meshal stopped asking after the first week because he had decided I did not want to be bothered.","w":"I answered instead of asking her what she thought — that is why she kept coming back. And I never told Meshal it was fine to ask. <b>Directing is two different mistakes with two different people.</b>","n":"The performance-management course earlier than Q2 month 3. I am learning this on two real people."},
     noPlan:"The four steps describe your own work. This quarter is about someone else’s — progress is measured by whether they meet the standard when you are not there.",
     milestone:'Those they direct meet the standard in their absence.'},
    {n:3,goal:'I can run the commercial side',period:'First financial exposure',
     fns:['Reporting','Vendor Reconciliation','Procurement'],
     why:'The test here is psychological, not technical — the common failure is avoidance.',
     months:['<b>Accounting fundamentals course.</b> Shadow a full reconciliation.',
             'Produce the operational report alone. First vendor reconciliation solo.',
             'Procurement solo. Accounts Payable and Quarterly Reporting as assist.'],
     plan:[["o","o","o"],["s","s","o"],["s","s","s"]],
     example:{"fn":"Vendor Reconciliation","a":"First reconciliation on my own — the maintenance vendor for August.","o":"The totals matched but I passed it on with two line items I did not understand. The AGM found them: both were charged twice.","w":"A number that matches is not a number I have checked. <b>If I cannot explain a line, it does not go out</b> — matching totals hid a duplicate charge.","n":"I need the original work orders next to the invoice. I was reconciling the invoice against itself."},
     milestone:'A full monthly financial cycle with no correction.'},
    {n:4,goal:'The building runs through me',period:'Proof',
     fns:['Ambassador & Community Leadership','Community Engagement Lead Coordination','Preparing Community Events'],
     months:['<b>Stretch assignment starts.</b> Community ownership begins.',
             'Third community function. The 22 extended ownerships verified.',
             '<b>A planned week away.</b> The gate.'],
     plan:[["a","o","o"],["w","a","a"],["w","w","w"]],
     example:{"fn":"Ambassador & Community Leadership Management","a":"Took over the ambassador group and ran the first monthly meeting myself.","o":"Six of the nine came. I filled the silence with my own plans instead of asking them what they wanted to run.","w":"Owning a community function does not mean deciding for the community. <b>Ask first, plan second</b> — I ran a meeting that did not need them in the room.","n":"To know what the previous owner had already promised them. I contradicted two commitments without knowing."},
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
    ['Conduct','Every time across five, and <b>Teaches</b> on developing others'],
    ['Teaching','Those they directed perform to standard — assessed independently'],
    ['Scope','Two weeks with the AGM away, all 43 functions working']],
  failRule:'Someone holding 28 functions who has become the single point of failure has not transitioned — they have absorbed more work.'
},

'sr-agm':{
  code:'T3', from:'Senior RX Associate', to:'Assistant General Manager',
  kind:'Level jump L3 → L4 — promotion by letting go', months:12, level:4,
  changed:46, counts:{release:24,oversee:7,newwork:4,deepen:10,handback:1},
  essence:'Twenty-four front-line functions are handed over, and finance, people and legal work takes their place',
  startState:'Not a move from doing to supervising — an AGM still executes six functions and owns eleven. What changes is which work: the building floor is released, and its money, its roster and its legal exposure are taken on.',
  valueShift:['I am valuable because I run the floor','I am valuable because the floor runs without me'],
  eligibility:[
    'Mastered the Senior role — ≥90% of 43 functions, 100% of the 28 owned',
    '<b>At least 6 months in the current role</b> · 12 preferred given the complexity',
    'Teaches on developing others',
    'No open performance concern',
    '<b>A successor is named and has entered the L2→L3 programme</b> — the real blocker',
    'The GM has committed 4 hours a month'],
  blocker:'Of the 24 released functions, 19 drop to Associate at <b>execute</b>, not <b>own</b> — they keep a doer and lose their owner. Three have no holder at Associate at all, and two of those none anywhere below L3. This promotion cannot complete without an L2→L3 promotion running alongside it.',
  quarters:[
    {n:1,goal:'The map — planning, not handover',period:'No handover this quarter',
     fns:['Handover map for all 24','Successor readiness assessment','A written procedure per function'],
     why:'Starting the handover before the map is complete creates chaos, then a retreat.',
     months:['<b>Handover map</b> — a named recipient per function. Decide the two orphaned functions.',
             'Assess successor readiness. <b>Value conversation with the GM.</b>',
             'A written procedure per released function. <b>Accounting course.</b>'],
     example:{"fn":"Handover map for all 24","a":"Built the handover map — a named recipient for each of the 24 functions I have to release.","o":"I filled 22 quickly and then stalled. The two community-leadership functions have nobody below L3 who touches them at all, and I had been carrying them personally for a year without noticing.","w":"Write the map <b>before</b> deciding I am ready, not after. Two of my functions exist only because I do them — that is not ownership, it is a single point of failure.","n":"A decision from the GM on the two orphans: recruit, split them, or accept that the community programme shrinks."},
     noPlan:"Progress in this transition runs backwards. The four steps describe taking work up; here the measure is what has been released — and nothing is released this quarter without a named recipient.",
     milestone:'Map approved, 24 procedures written, successor knows what is coming.'},
    {n:2,goal:'Hand over the first half',period:'12 functions released',
     fns:['11 Community Experience functions','Consumables Inventory','Schedule Management (new)'],
     why:'Community first — visible failure, correctable, no harm to residents.',
     months:['Hand over 6. A teaching event each. <b>Labour & tenancy law course.</b>',
             'Hand over 6 more. Take on Schedule Management. Weekly coaching on relapse.',
             'Take on Accounts Receivable. <b>Zero tasks completed in their name across the 12.</b>'],
     example:{"fn":"11 Community Experience functions","a":"Handed over six community functions with a teaching event for each.","o":"Five held. On the sixth — the newsletter — I rewrote her draft the night before it went out because I did not like the tone.","w":"That was a relapse, and I dressed it up as quality control. <b>The standard is the standard I wrote down, not the version in my head.</b> Next time I send it back with two notes instead of rewriting it.","n":"Somewhere to put the urge. I need to log the relapse in the moment, not remember it at the monthly session."},
     noPlan:"Progress in this transition runs backwards. The four steps describe taking work up; here the measure is what has been released — and nothing is released this quarter without a named recipient.",
     milestone:'Half released. Relapse being managed, not eliminated yet.'},
    {n:3,goal:'Take on the management work',period:'Full release',
     fns:['12 remaining releases','Evictions','Early Terminations','7 oversight functions'],
     months:['Release the four operational coordination functions. <b>Begin overseeing the seven.</b>',
             'Release the eight resident-experience functions. <b>First eviction, legally supervised.</b>',
             'Early Terminations. Deepen the ten financial functions. <b>Team leadership course.</b>'],
     example:{"fn":"Evictions","a":"First eviction, with the GM and legal on the call.","o":"I ran the process correctly but I told the resident the date before legal had confirmed it. The date moved by nine days and I had to go back.","w":"<b>Say nothing to the resident until the legal step is closed.</b> I wanted to be the one who was open with them, and it cost them nine days of uncertainty instead of saving them any.","n":"The legal timeline in writing. I was working from what I assumed the sequence was."},
     noPlan:"Progress in this transition runs backwards. The four steps describe taking work up; here the measure is what has been released — and nothing is released this quarter without a named recipient.",
     milestone:'Zero tasks in the 24. The seven overseen with the standard held.'},
    {n:4,goal:'Prove it',period:'No relapse',
     fns:['Scheduling stretch continues','Quarterly report','Successor assessment'],
     months:['<b>Stretch assignment.</b> Formal successor assessment.',
             'Write and present the quarterly management report to the GM.',
             '<b>A full month with no relapse.</b> A planned week away. The gate.'],
     example:{"fn":"Scheduling stretch continues","a":"Held the full team schedule for the quarter with no intervention from the AGM.","o":"Week seven I was short two people on a Friday and covered the gap myself instead of calling agency. It worked, but I was back on the floor for eleven hours.","w":"Covering the gap myself is the most expensive option, not the cheapest. <b>The schedule is mine to solve, not to absorb.</b>","n":"The agency budget limit in writing so I do not have to ask, and can just decide."},
     noPlan:"Progress in this transition runs backwards. The four steps describe taking work up; here the measure is what has been released — and nothing is released this quarter without a named recipient.",
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
    ['Conduct','Every time across five, and <b>Teaches</b> on developing others'],
    ['Teaching','The successor performs to standard — assessed independently'],
    ['Scope','Six months of scheduling with no intervention · a month with no relapse']],
  failRule:'Someone who has mastered the new work but not released the 24 is not an AGM — they are a Senior with extra duties.'
},

'agm-gm':{
  code:'T4', from:'Assistant General Manager', to:'General Manager',
  kind:'Level jump L4 → L5 — from a function to a whole scope', months:18, level:5,
  changed:29, counts:{oversee:17,release:6,newwork:5,deepen:1},
  essence:'From holding functions to holding the result',
  startState:'Seventeen functions move to oversight. A GM executes exactly one and oversees twenty of twenty-seven — the only role where watching rather than doing is the dominant mode. Fewer functions change here than in the step below it; what changes is the accountability.',
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
     example:{"fn":"Scope map across all teams","a":"Mapped the whole scope — security, housekeeping and maintenance, not just RX.","o":"I could name every RX function and almost none of the maintenance ones. I have been the AGM of this building for two years and I did not know how the PPM schedule is set.","w":"I was accountable for a building I only half understood. <b>Scope means the teams I never worked in</b>, and I have to learn their work before I can oversee it.","n":"Two days with the maintenance supervisor. Not a briefing — a shift."},
     noPlan:"A mapping quarter. Nothing moves on the ladder until the scope is understood and the handover map exists.",
     milestone:'Can explain how the building makes or loses money.'},
    {n:2,goal:'Hand over and oversee',period:'Release',
     fns:['Schedule Management','Reporting','4 further releases'],
     months:['Hand Schedule Management and Reporting to the incoming AGM.',
             'Release the remaining four. Begin overseeing the ten previously owned.',
             '<b>Zero tasks in the six.</b> Build the oversight rhythm — how to know without doing.'],
     example:{"fn":"Schedule Management","a":"Handed the team schedule and the operational report to the incoming AGM.","o":"She published a schedule in week three that left the weekend thin. I saw it on the Thursday and fixed it myself without telling her.","w":"I took the lesson away from her to save a weekend. <b>Show her the gap and let her fix it</b> — otherwise she learns nothing and I have not released anything.","n":"An agreed line for when I do step in. Safety yes, thin weekend no — but I had not decided that in advance, so I decided it in the moment."},
     noPlan:"Nothing is being learned here — six functions are being given away. Progress is what is no longer done: zero tasks in your name across the six.",
     milestone:'Six released. Oversight rhythm established.'},
    {n:3,goal:'I own the financial side',period:'Commercial ownership',
     fns:['Accounts Payable','Quarterly Management Reporting','Evictions','Early Terminations'],
     months:['Accounts Payable and Quarterly Management Reporting move to own.',
             '<b>First quarterly report to senior leadership, written and presented alone.</b>',
             'Evictions and Early Terminations to own — final legal responsibility.'],
     plan:[["w","w","s","s"],["w","w","s","s"],["w","w","w","w"]],
     example:{"fn":"Quarterly Management Reporting","a":"Wrote and presented the quarterly report to senior leadership on my own.","o":"The numbers were right. I spent eleven of fifteen minutes on what happened and three on what I intend to do about it. The first question was the one I had not prepared: what are you changing.","w":"Leadership does not need the quarter explained; they need the <b>next</b> quarter decided. Two slides on what happened, the rest on what I am changing.","n":"Nothing. I built the report for myself instead of for the audience."},
     milestone:'A full quarterly financial cycle under their responsibility.'},
    {n:4,goal:'I oversee what I never touched',period:'Cross-team scope',
     fns:['Maintenance & Security oversight','7 resident and community functions','Property Walkthrough'],
     months:['Oversee the other teams — <b>maintenance and security, non-RX</b>.',
             'Oversee resident experience and community — seven functions.',
             'Property Walkthrough to own. GM Check-in becomes personal.'],
     example:{"fn":"Maintenance & Security oversight","a":"Started overseeing maintenance and security — teams I have never worked in.","o":"I asked the maintenance supervisor for a weekly update and got a list of completed jobs. It told me nothing about whether the building is in good condition. Two months later a chiller failed that had been flagged in a report I had signed.","w":"A completion list is activity, not condition. <b>Ask for the two things that worry you, not for everything you did.</b> I signed a report I had not read because reading it was not on my calendar.","n":"One measure per team that tells me condition rather than volume. I do not know what those are yet — the supervisors do."},
     noPlan:"Oversight is not a step on this ladder — it is a different mode. The test is whether you can tell a function is working without doing it or watching it daily.",
     milestone:'Knows a function is working without executing or watching it daily.'},
    {n:5,goal:'I carry the result',period:'Full scope',
     fns:['Stretch assignment begins','Stakeholder management','A real trade-off'],
     months:['<b>Stretch assignment starts</b> — full scope.',
             '<b>External executive coaching begins.</b> Stakeholder management.',
             'A documented trade-off between two functions competing for the same resource.'],
     example:{"fn":"A real trade-off","a":"Two functions wanted the same budget in the same month — a lift refurbishment and the community programme for the quarter. I chose the lift and documented why.","o":"The right call, badly delivered. I announced it and let the community team find out that their quarter had been emptied. They heard it as a verdict on their work.","w":"A trade-off is a decision <b>and</b> a conversation. Tell the side that loses first, in person, with the reason — before it is announced to anyone else.","n":"Nothing on the decision. On the delivery, I should have asked the GM how she has done this before."},
     noPlan:"The stretch quarter tests holding the whole scope at once. There is no per-function step — the unit being tested is the building.",
     milestone:'Holding scope with the GM reviewing outcome only.'},
    {n:6,goal:'Proof',period:'The gate',
     fns:['Two weeks away','Successor AGM ready','Full-cycle result review'],
     months:['<b>Two planned weeks away.</b> The whole scope keeps working.',
             'A successor AGM is ready and independently assessed.',
             'Review the result of a full cycle. <b>The gate.</b>'],
     example:{"fn":"Two weeks away","a":"Two planned weeks away with the AGM holding the whole scope.","o":"Ten days went cleanly. On day eleven she called about a resident escalating to the owner and I took it over from the airport instead of talking her through it.","w":"The whole point was that it keeps working without me, and I broke it in the one call that mattered. <b>Talk her through it, do not take it.</b> The owner would have accepted her, because I had never told them she was in charge.","n":"To have told the owner and the top three residents, in writing, who was in charge before I left. That was my job, not hers."},
     noPlan:"The final quarter tests absence, not progression. Two planned weeks away, a ready successor, and a full-cycle result.",
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
    ['Conduct','Every time across five, and <b>Teaches</b> on developing others'],
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

/* ─────────────────── COMPANY / People Team LAYER ───────────────────
   The People Team sees coaches and the system — never an individual's
   practice log, self-rating, or the gap between ratings.
   ─────────────────────────────────────────────────────────── */

const PROPERTIES = [
  {id:'ne',name:'Narjs East', gm:'Saad Alajmi',      agm:'Raghdah Safar'},
  {id:'gr',name:'Granada',    gm:'Weesam Khuja',     agm:'Sarah Niazi'},
  {id:'nw',name:'Narjs West', gm:'Husni Abdulrazzaq',agm:null},
  {id:'ol',name:'Olaya',      gm:'Johnny Hachem',    agm:null}
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

/* what the People Team deliberately cannot see — displayed in the tool itself */
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
