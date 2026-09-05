/* ═══════════════════════════════════════════════════════════
   Full roster · 22 people across 4 properties

   The People Team has full visibility. What is governed is USE, not access —
   see DATA_USE. monthsInRole and mastery are null where not yet
   verified; the People Team page surfaces those gaps rather than guessing.
   ═══════════════════════════════════════════════════════════ */

const ROSTER = [
 /* ── Narjs East ── */
 {id:'beesan',  name:'Beesan Harb',       prop:'ne', role:'RX Coordinator',      lvl:2, months:14,   mastery:null, state:'active',     target:'coord-assoc', quarter:2, coach:'raghdah'},
 {id:'ali',     name:'Ali Nour',          prop:'ne', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'eligible',   target:'assoc-sr',    quarter:0, coach:'raghdah'},
 {id:'rawan',   name:'Rawan Alattas',     prop:'ne', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'eligible',   target:'assoc-sr',    quarter:0, coach:'raghdah'},
 {id:'rakan',   name:'Rakan Shisha',      prop:'ne', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'pending',    target:'sr-agm',      quarter:0, coach:'saad'},
 {id:'raghdah', name:'Raghdah Safar',     prop:'ne', role:'AGM',                 lvl:4, months:null, mastery:null, state:'practising', target:'agm-gm',      quarter:0, coach:'saad'},
 {id:'saad',    name:'Saad Alajmi',       prop:'ne', role:'GM',                  lvl:5, months:null, mastery:null, state:'practising', target:null,          quarter:0, coach:null},

 /* ── Granada ── */
 {id:'meshal',  name:'Meshal Almutairi',  prop:'gr', role:'RX Coordinator',      lvl:2, months:null, mastery:null, state:'practising', target:'coord-assoc', quarter:0, coach:'sarah'},
 {id:'mamdouh', name:'Mamdouh Omar',      prop:'gr', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'practising', target:'assoc-sr',    quarter:0, coach:'sarah'},
 {id:'suliman', name:'Suliman Alkholaif', prop:'gr', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'practising', target:'assoc-sr',    quarter:0, coach:'sarah'},
 {id:'alharith',name:'Alharith Hassan',   prop:'gr', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'practising', target:'sr-agm',      quarter:0, coach:'weesam'},
 {id:'sarah',   name:'Sarah Niazi',       prop:'gr', role:'AGM',                 lvl:4, months:null, mastery:null, state:'practising', target:'agm-gm',      quarter:0, coach:'weesam'},
 {id:'weesam',  name:'Weesam Khuja',      prop:'gr', role:'GM',                  lvl:5, months:null, mastery:null, state:'practising', target:null,          quarter:0, coach:null},

 /* ── Narjs West · no AGM ── */
 {id:'nader',    name:'Nader',             prop:'nw', role:'RX Coordinator',      lvl:2, months:null, mastery:null, state:'practising', target:'coord-assoc', quarter:0, coach:'husni'},
 {id:'mizanur',  name:'Mizanur Rahman',    prop:'nw', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'practising', target:'assoc-sr',    quarter:0, coach:'husni'},
 {id:'muataz',   name:'Muataz',            prop:'nw', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'practising', target:'assoc-sr',    quarter:0, coach:'husni'},
 {id:'abdulelah',name:'Abdulelah',         prop:'nw', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'practising', target:'sr-agm',      quarter:0, coach:'husni'},
 {id:'moayad',   name:'Moayad',            prop:'nw', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'practising', target:'sr-agm',      quarter:0, coach:'husni'},
 {id:'husni',    name:'Husni Abdulrazzaq', prop:'nw', role:'GM',                  lvl:5, months:null, mastery:null, state:'practising', target:null,          quarter:0, coach:null},

 /* ── Olaya · no AGM ── */
 {id:'nour',     name:'Nour',           prop:'ol', role:'RX Associate',        lvl:2, months:null, mastery:null, state:'practising', target:'assoc-sr', quarter:0, coach:'johnny'},
 {id:'kateryna', name:'Kateryna',       prop:'ol', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'practising', target:'sr-agm',   quarter:0, coach:'johnny'},
 {id:'majed',    name:'Majed',          prop:'ol', role:'Senior RX Associate', lvl:3, months:null, mastery:null, state:'practising', target:'sr-agm',   quarter:0, coach:'johnny'},
 {id:'johnny',   name:'Johnny Hachem',  prop:'ol', role:'GM',                  lvl:5, months:null, mastery:null, state:'practising', target:null,       quarter:0, coach:null}
];

const ALL_COACHES = {
  raghdah:{name:'Raghdah Safar',     ini:'RS', role:'AGM', prop:'ne', color:'#0D6E5C'},
  saad:   {name:'Saad Alajmi',       ini:'SA', role:'GM',  prop:'ne', color:'#1D3A8A'},
  sarah:  {name:'Sarah Niazi',       ini:'SN', role:'AGM', prop:'gr', color:'#0D6E5C'},
  weesam: {name:'Weesam Khuja',      ini:'WK', role:'GM',  prop:'gr', color:'#1D3A8A'},
  husni:  {name:'Husni Abdulrazzaq', ini:'HA', role:'GM',  prop:'nw', color:'#1D3A8A'},
  johnny: {name:'Johnny Hachem',     ini:'JH', role:'GM',  prop:'ol', color:'#1D3A8A'}
};

const LEVELS = [
  {n:2, label:'L2 · Specialist',    role:'Coordinator / Associate', note:'Entry and specialist layer'},
  {n:3, label:'L3 · Lead',          role:'Senior RX Associate',     note:'Operational backbone — heaviest function load'},
  {n:4, label:'L4 · Function Owner',role:'AGM',                     note:'Two properties have none'},
  {n:5, label:'L5 · Scope Owner',   role:'GM',                      note:'One per property'}
];

const PSTATE = {
  active:    {n:'In development', s:'background:#EAF7F2;color:#0A5540'},
  pending:   {n:'Needs plan',     s:'background:#FEF6E7;color:#7A4A05'},
  eligible:  {n:'Eligible',       s:'background:#EEEDFE;color:#26215C'},
  practising:{n:'Practising',     s:'background:#F2EFE9;color:#5A5750'},
  ready:     {n:'Ready · awaiting scope', s:'background:#E8EEF6;color:#1A3660'},
  remediation:{n:'In remediation',s:'background:#FDEEEA;color:#8A2E12'}
};

/* ─────────────────── MASTERY CHECK ───────────────────
   One judgement plus named exceptions — not thirty ratings.
   A manager already knows the two or three things someone
   is not good at; the model uses that rather than fighting it.
   ─────────────────────────────────────────────────────── */

const MASTERY_RULE = {
  maxExceptions: 3,
  ownedExceptionsAllowed: 0,
  maxAgeMonths: 3,
  prompt: 'Is this person at the standard of their current role? Yes — except:',
  sources: [
    {s:'Observed activity', shows:'Whether it has been practised enough at all', from:'automatic · task system'},
    {s:'Manager judgement', shows:'Whether it is performed to standard',         from:'the confirmation'},
    {s:'Incident record',   shows:'Whether failures repeat in that function',     from:'automatic'}
  ],
  cadence: [
    ['Once at setup',       'Baseline for everyone'],
    ['Annually',            'Refresh per person'],
    ['On eligibility request','A confirmation no older than three months'],
    ['By exception',        'A new function, an incident, a demonstrated improvement']
  ],
  conflictNote:'A function the manager calls at standard that carries repeated incidents is worth a look — which is why all three sources are read together rather than any one alone.'
};

/* null = never assessed · otherwise {confirmed, exceptions:[], ownedExceptions:n, asOf} */
const MASTERY = {};

const REMEDIATION = {
  principle:'Someone below the standard of their current role needs remediation, not development. Building on soft ground collapses under the first real pressure.',
  differsFrom: [
    ['Purpose',  'Growth toward the next level',    'Restoring the current level'],
    ['Duration', '12 months',                       '60–90 days'],
    ['Scope',    '3 functions, deliberate practice','1–2 specific gaps'],
    ['Nature',   'Aspirational, optional',          'Required'],
    ['Owner',    'Coach and sponsor',               'Direct manager alone'],
    ['Outcome',  'Promotion or mastery',            'Resolved, or a role-fit conversation']
  ],
  triggers: [
    'More than three exceptions in the mastery check — automatic',
    'Any exception on an owned function — automatic',
    'Repeated incidents in the same function — automatic',
    'Direct observation by the manager — manual'
  ],
  plan: ['The gap — precisely what is below standard',
         'What resolved looks like — an observable behaviour, not a feeling',
         'The support offered — a teacher, time, a tool, training',
         'Review every two weeks, thirty minutes',
         'Sixty days · extended by thirty once only'],
  outcomes: [
    {r:'Resolved',   d:'Returns to Practising — and leaves no mark on the eligibility record'},
    {r:'Extended',   d:'Thirty further days on a revised plan. Once, not repeatedly'},
    {r:'Unresolved', d:'A role-fit conversation with the sponsor — is this the right role, a different scope, another team?'}
  ],
  rules: [
    'Remediation pauses eligibility; it does not cancel it. Once resolved the person is eligible again, with nothing held against them.',
    'It is not a route to exit. The People Team watches for the pattern — a manager whose remediations always end in a departure.',
    'The person sees the whole plan. There is no confidential remediation.'
  ]
};

/* Template versioning — a change never applies to someone already enrolled */
const CHANGE_CONTROL = {
  rules: [
    'Every template carries a version number and a date',
    'A person’s programme is stamped with the template version at enrolment',
    'A template change does not apply to anyone already in a programme — they finish on their version',
    'A change requires the People Team plus one sponsor, recorded with the reason and date',
    'Templates are reviewed annually, after a full cycle has completed'
  ],
  basis:'A direct extension of the transparency rule: no assessment against a criterion published after the fact.'
};

const EXCEPTIONS = [
  {c:'Coach leaves or transfers',   r:'A replacement coach within two weeks. Prior assessments stand. The new coach re-baselines conduct only, not craft — they have not observed it yet.'},
  {c:'Employee transfers property', r:'The programme continues; it does not restart. The receiving property’s coach takes over, and the quarter’s functions may be re-selected if that building operates differently.'},
  {c:'External hire at L3 or above',r:'The six-month settling period runs from the join date. External experience does not count toward it — the point is knowing this building. The mastery check can be run earlier.'},
  {c:'Paused — leave, illness, crisis', r:'The programme pauses rather than resets. Six months maximum, after which it is re-baselined.'},
  {c:'Withdrawal',                  r:'A right at any time, without penalty. Returns to Practising. Re-entry needs a fresh eligibility check.'},
  {c:'No seat available at completion', r:'The programme completes and readiness is recorded — the state is Ready, awaiting scope. Promoting without real scope would be title inflation; calling it a failure would be false.'}
];

/* The People Team sees everything. Governance applies to USE, not access. */
const DATA_USE = {
  principle:'The People Team has full visibility of every record. What is governed is how the data may be used — not what may be seen. Restricting access would blind talent planning and make bias impossible to detect.',
  rules:[
    {d:'Practice log',      use:'Understanding patterns · reviewing an appeal · detecting bias',
     never:'Quoted in a performance review, a report, or a promotion decision'},
    {d:'Self / manager gap',use:'Coaching context · spotting a coach who rates systematically high or low',
     never:'Reported as a metric on an individual — it would be gamed within a quarter'},
    {d:'Assessments & gates',use:'Talent planning · calibration · succession · appeals', never:'—'},
    {d:'Coach compliance',  use:'Process oversight · workload balancing', never:'—'}
  ],
  transparency:'Every person can see who has access to their record. The harm comes from surprise, not from access.'
};
