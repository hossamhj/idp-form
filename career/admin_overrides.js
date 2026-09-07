/* Everything typed into Admin lives in localStorage under `cd_admin`.
   Every page merges it on top of the static seed, so what you enter in one
   place is what every other page shows. */
const ADMIN_DB = (function(){
  try { return JSON.parse(localStorage.getItem('cd_admin') || '{}'); }
  catch (e) { return {}; }
})();
const ADMIN_PEOPLE = ADMIN_DB.people || {};

/* merge the override for one person on top of whatever base record is given */
function withAdmin(id, base){
  return Object.assign({}, base || {}, ADMIN_PEOPLE[id] || {});
}
