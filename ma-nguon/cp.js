// Pure permanent-stat ledger. It never reads buffs, battle state or currency.
const CPSystem=(()=>{
 const keys=Object.keys(COMBAT_CONFIG.base),categories=['Character','Equipment','Boat','Pet','Rebirth'];
 function blank(){return Object.fromEntries(keys.map(k=>[k,0]));}
 function add(to,from,multiplier=1){for(const k of keys)to[k]+=(from[k]||0)*multiplier;}
 function item(group,id){const r=COMBAT_CONFIG.ownership[group],out=blank();if(!r)return out;const tier=Math.floor((Math.abs(id)-1)/r.tierSize);add(out,r.base);add(out,r.perTier,Math.max(0,tier));return out;}
 function calculate(save,catalog,legacyPetCount=0){
  const groups=Object.fromEntries(categories.map(k=>[k,blank()]));add(groups.Character,COMBAT_CONFIG.base);
  for(const group of ['character','pet'])for(const id of new Set(save.owned[group]||[])){
   if(group==='character'&&id===0)continue;
   const valid=group==='pet'&&id<0?-id<=legacyPetCount:catalog[group].some(x=>x.id===id);
   if(valid)add(groups[group==='character'?'Character':'Pet'],item(group,id));
  }
  for(const group of ['rod','line','bag','boat']){const id=save.equip[group];if(id>0&&save.owned[group]?.includes(id)&&catalog[group].some(x=>x.id===id))add(groups[group==='boat'?'Boat':'Equipment'],item(group,id));}
  for(const [key,row] of Object.entries(COMBAT_CONFIG.upgrades))add(groups[row.category],row.stats,Math.max(0,Number(save.up[key])||0));
  groups.Equipment.LineDurability+=Math.max(0,Number(save.permanentLine)||0);
  add(groups.Rebirth,COMBAT_CONFIG.rebirth,Math.max(0,Number(save.prestige)||0));
  const stats=blank(),parts={};for(const category of categories){add(stats,groups[category]);let value=0;for(const key of keys){const row=COMBAT_CONFIG.cp[key];value+=groups[category][key]/row.reference*row.weight;}parts[category]=value;}
  return {stats,groups,parts,total:categories.reduce((sum,k)=>sum+parts[k],0)};
 }
 return {calculate,item,keys,categories};
})();
let cpStamp='',permanentCP=null;
function refreshCP(force=false){const stamp=JSON.stringify([S.owned,S.equip,S.up,S.prestige,S.permanentLine]);if(force||stamp!==cpStamp){cpStamp=stamp;permanentCP=CPSystem.calculate(S,CATALOG,ORIGINAL.PETS.length);}return permanentCP;}
