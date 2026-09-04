/* ═══════════════════════════════════════════════════════════
   Full roster · 22 people across 4 properties

   HR has full visibility. What is governed is USE, not access —
   see DATA_USE. monthsInRole and mastery are null where not yet
   verified; the HR page surfaces those gaps rather than guessing.
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
  support:   {n:'Needs support',  s:'background:#FDEEEA;color:#8A2E12'}
};

/* HR sees everything. Governance applies to USE, not access. */
const DATA_USE = {
  principle:'HR has full visibility of every record. What is governed is how the data may be used — not what may be seen. Restricting access would blind talent planning and make bias impossible to detect.',
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
