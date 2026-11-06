const packImages=Object.create(null),packKeys=Object.keys(PACK);let galleryGroup='fish';
function artKey(group,id,variant='asset'){return group+'_'+String(id).padStart(3,'0')+'_'+variant}
function packImage(key){if(!PACK[key])return null;if(!packImages[key]){const im=new Image();im.src=PACK[key].s;packImages[key]=im;}return packImages[key]}
function packIcon(key,label=''){const a=PACK[key];return a?'<img class="art-icon" src="'+a.s+'" alt="'+clean(label||a.n)+'">':'<span class="missing-art" aria-label="Chưa có ảnh">Chưa có<br>ảnh</span>'}
function catalogIcon(k,id){if(k==='character'&&id===0)return atlasIcon('heroIdle','fishing_ninja_no_line_idle','Nhẫn giả tóc bạc');return packIcon(artKey(k,id,k==='character'?'portrait':k==='map'?'icon':'icon'))}
function packDraw(key,x,y,w,h,flip=false,alpha=1){const im=packImage(key);if(!im?.complete||!im.naturalWidth)return false;const a=PACK[key],scale=Math.min(w/a.w,h/a.h),dw=a.w*scale,dh=a.h*scale;g.save();g.globalAlpha=alpha;g.translate(x,y);if(flip)g.scale(-1,1);g.drawImage(im,-dw/2,-dh/2,dw,dh);g.restore();return true;}
const oldFishIcon=fishIcon,oldDrawFish=drawFish,oldHero=hero;
fishIcon=function(f){const d=f.boss?BOSSES[f.id]?.doc:FISH[f.id]?.doc;if(d)return packIcon(artKey(f.boss?'boss':'fish',d,'icon'),f.n);return oldFishIcon(f)};
drawFish=function(kind,x,y,scale,flip=false,alpha=1,action='swim',clock=t){const poolKind=action==='swim'&&ZONES[S.zone].doc?ZONES[S.zone].fish[Math.abs(kind)%ZONES[S.zone].fish.length]:kind;const f=FISH[poolKind];if(f?.doc){packDraw(artKey('fish',f.doc,'anchor'),x,y-30,320*scale,220*scale,flip,alpha);return}oldDrawFish(kind,x,y,scale,flip,alpha,action,clock)};
hero=function(){
 const id=S.equip.character,fishing=(state==='cast'||state==='wait'||state==='bite'||state==='fight'||state==='reel');
 const posed=artKey('character',id,'body_layer'),key=fishing&&PACK[posed]?.original?posed:artKey('character',id,'anchor');
 if(!id||!PACK[key]){oldHero();return}
 const a=PACK[key],bob=Math.sin(t*1.6)*2;
 if(a.original&&a.tip){const scale=Math.min(190/a.w,190/a.h),w=a.w*scale,h=a.h*scale,x=158-w/2,y=570+bob-h;
  packDraw(key,158,y+h/2,w,h);rodX=x+a.tip[0]*w;rodY=y+a.tip[1]*h;
 }else{packDraw(key,158,490+bob,170,180);rodX=226;rodY=401+bob;}
};
function drawPackedBoat(bob){const id=S.equip.boat;if(!id||!PACK[artKey('boat',id)])return false;packDraw(artKey('boat',id,S.hull<35?'damaged':'asset'),153,570+bob,278,122);return true;}
drawPet=function(){if(S.equip.pet>0&&PACK[artKey('pet',S.equip.pet)])packDraw(artKey('pet',S.equip.pet),65,540+Math.sin(t*2)*2,65,75);else if(S.equip.pet<0){const d=geom('exp_palico_idle');if(d)blit('palico','exp_palico_idle',Math.floor(t*d.fps)%d.frames,71,559,.23)}};
drawBoss=function(){if(target?.doc){packDraw(artKey('boss',target.doc,'anchor'),325+Math.sin(t*2)*8,705,210,190);return}const d=geom('exp_leviathan_swim');if(d)blit('leviathan','exp_leviathan_swim',Math.floor(t*d.fps)%d.frames,320,770,.72)};
function galleryHTML(){const groups=['fish','boss','character','rod','boat','bag','pet','aquarium','bait','line','buff','debuff','map','weather','ui'];let h='<div class="gallery-groups">'+groups.map(k=>button(({fish:'Cá',ui:'Giao diện',weather:'Thời tiết',buff:'Buff',debuff:'Debuff',bag:'Túi'})[k]||LABEL[k], 'artgroup:'+k,false,k!==galleryGroup)).join('')+'</div>';const keys=packKeys.filter(k=>PACK[k].g===galleryGroup),start=menuPage*12;h+='<p class="details">'+keys.length+' hình · Chạm để xem biến thể. 4 hình chưa có bản riêng.</p><div class="art-grid">';for(const key of keys.slice(start,start+12))h+='<button class="art-card" data-do="artview:'+key+'">'+packIcon(key)+'<b>'+clean(PACK[key].n)+'</b><small>'+clean(PACK[key].v)+'</small></button>';return h+'</div>'+button('←','page:-1',menuPage===0,true)+button('→','page:1',start+12>=keys.length,true)}
function artDetail(key){const a=PACK[key];return '<div class="art-detail">'+packIcon(key)+'<h3>'+clean(a.n)+'</h3><p>'+clean(a.v)+'</p>'+button('Quay lại','submenu:art',false,true)+'</div>'}
const basePanelClick=$('panel').onclick;
$('panel').onclick=function(e){const b=e.target.closest('[data-do]');if(!b)return;const [a,k]=b.dataset.do.split(':');if(a==='artgroup'){galleryGroup=k;menuPage=0;renderMenu();return}if(a==='artview'){$('panel').innerHTML=artDetail(k);return}basePanelClick(e)};

const originalUpgradeIcon=upgradeIcon;
upgradeIcon=function(k){const id=S.equip[k];return id>0&&PACK[artKey(k,id,'icon')]?catalogIcon(k,id):originalUpgradeIcon(k)};
const baseUI=updateUI;let uiArtStamp='';
function setButtonArt(id,key,fallback='✦'){
 const e=$(id),a=PACK[key];e.replaceChildren();
 if(a){const im=new Image();im.src=a.s;im.alt='';im.draggable=false;e.append(im);}
 else e.textContent=fallback;
}
updateUI=function(){baseUI();const stamp=state+':'+held+':'+S.equip.character+':'+$('action').disabled;if(stamp===uiArtStamp)return;uiArtStamp=stamp;
 setButtonArt('actionArt',artKey('ui',state==='fight'?7:6,$('action').disabled?'disabled':held?'pressed':'asset'),'🎣');
 setButtonArt('skillArt',artKey('character',S.equip.character,'ultimate_icon'));
};
function installHudArt(){
 for(const [id,n] of [['money',1],['rankLabel',4],['energyLabel',3]]){const e=$(id),a=PACK[artKey('ui',n)];e.style.background='url("'+a.s+'") left center / 18px 18px no-repeat';e.style.paddingLeft='22px';}
 const icons={up:artKey('rod',1,'icon'),bag:artKey('bag',1,'icon'),map:artKey('map',1,'icon'),collection:artKey('ui',4),more:artKey('ui',5)};
 for(const [menu,key] of Object.entries(icons)){const e=document.querySelector('[data-menu="'+menu+'"] span');if(PACK[key])e.innerHTML=packIcon(key);}
}
installHudArt();
