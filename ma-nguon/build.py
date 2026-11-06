from pathlib import Path
import json,re,base64
base=Path('src/expansion/base.html').read_text()
head=base[:base.index('<style>')]
ui=Path('src/expansion/ui.html').read_text().replace('</style>',Path('src/expansion/lobby.css').read_text()+'</style>',1)
helpers=base[base.index('<script>'):base.index("const cv=document.getElementById('stage')")]
renderer=base[base.index('const ART={}') : base.index('function fit(){')]
renderer=renderer.replace("key==='background'","['background','atlantis','ice','lava','cosmic','swamp'].includes(key)")
renderer=renderer.replace("const im=ART.background;","const im=ART[sceneKey()]||ART.background;")
renderer=renderer.replace("const cut=im.naturalHeight*.68;","const cut=im.naturalHeight*(sceneKey()==='background'?.68:.55);")
renderer=renderer.replace("state==='reel'?'reel'","(state==='reel'||state==='fight'&&held)?'reel'")
renderer=renderer.replace("state==='wait'||state==='bite'","state==='wait'||state==='bite'||state==='fight'")
renderer=renderer.replace("const active=state==='cast'||state==='wait'||state==='bite'||state==='fight'||state==='reel'","const active=state==='cast'||state==='wait'||state==='bite'||state==='fight'||state==='reel'")
renderer=renderer.replace("if(ART.raft?.naturalWidth)g.drawImage(ART.raft,45,242,574,170,30,545+bob,260,77);","if((S.equip.boat===2||S.up.boat>=3)&&ART.dragonBoat?.naturalWidth){g.drawImage(ART.dragonBoat,20,175,600,300,18,506+bob,285,142);}else if(ART.raft?.naturalWidth)g.drawImage(ART.raft,45,242,574,170,30,545+bob,260,77); if(S.equip.pet!==0)drawPet();")
renderer=renderer.replace("g.strokeStyle='#244640';g.lineWidth=2.4;","g.strokeStyle=state==='fight'&&tension>75?'#e47750':S.equip.line>0?'#9ee9e6':'#244640';g.lineWidth=2.4;")
renderer=renderer.replace("if(state==='reel')drawFish", "if(state==='fight'&&target?.boss)drawBoss(); if(skillFx<2)drawSkill(); drawWeather(); if(state==='reel')drawFish")
renderer=renderer.replace("const position=d.loop?","const position=(d.loop||state==='fight')?")
renderer=renderer.replace("for(let i=0;i<fishPool.length;i++){const f=fishPool[i];drawFish", "if(menu)return; for(let i=0;i<fishPool.length;i++){const f=fishPool[i];drawFish")
# Artwork overrides leave the original scene and fishing-line geometry intact.
renderer=re.sub(r"function drawFish\(.*?\nfunction waterEffect", "function waterEffect", renderer, flags=re.S)
renderer=renderer.replace("if(menu)return;", "if(menu||!$('sheet').hidden)return;")
renderer=renderer.replace("kind:i%2", "kind:i%4")
renderer=renderer.replace("im.onload=()=>{", "im.onload=()=>{if(menu){const y=$('panel').scrollTop;renderMenu();$('panel').scrollTop=y;}")
renderer=renderer.replace("const active=state==='cast'||state==='wait'||state==='bite'||state==='reel'", "const active=state==='cast'||state==='wait'||state==='bite'||state==='fight'||state==='reel'")
renderer=renderer.replace("if(state==='fight'&&target?.boss)drawBoss();", "if(state==='fight'){if(target?.boss)drawBoss();else drawFish(fishKind,bobX,665,.36,false,.95,'struggle',phase);}")
renderer=renderer.replace("drawFish(fishKind,bobX,bobY+40,.35,false,1)", "drawFish(fishKind,bobX,bobY+40,.35,false,1,'struggle',phase)")
renderer=re.sub(r"if\(state==='result'\)\{drawFish.*?\n window.mableTuningFrame", "if(state==='result'){drawFish(fishKind,252,632,.46,false,1,'caught',phase);rewardEffect();}\n window.mableTuningFrame", renderer, flags=re.S)
# base result UI no longer used; leave catch sprite in world.
late="""
function sceneKey(){const n=ZONES[S.zone].n;if(/Băng|Tuyết/.test(n))return 'ice';if(/Dung Nham|Núi Lửa/.test(n))return 'lava';if(/Vực|Tinh Hà|Vũ Trụ|Hư Không/.test(n))return 'cosmic';if(/Đầm|Rừng/.test(n))return 'swamp';if(/Di Tích|Atlantis|San H|Biển|Đền|Thủy Cung/.test(n))return 'atlantis';return 'background';}
function selectScene(){bakeScene();}
function drawPet(){const d=geom('exp_palico_idle');if(d)blit('palico','exp_palico_idle',Math.floor(t*d.fps)%d.frames,71,559+Math.sin(t*1.6)*2,.23);}
function drawBoss(){const d=geom('exp_leviathan_swim');if(d)blit('leviathan','exp_leviathan_swim',Math.floor(t*d.fps)%d.frames,320+Math.sin(t*2)*9,770,.72,false,.95);}
function drawSkill(){const d=geom('exp_chakra_burst'),im=ART.chakra;if(!d||!im?.naturalWidth||!d.frameDurationsMs)return;let ms=skillFx*1000,i=0;while(i<d.frames&&ms>=d.frameDurationsMs[i])ms-=d.frameDurationsMs[i++];if(i>=d.frames)return;g.save();g.globalCompositeOperation=d.blendMode==='additive'?'lighter':'source-over';const size=230;g.drawImage(im,i%d.columns*d.frameWidth,Math.floor(i/d.columns)*d.frameHeight,d.frameWidth,d.frameHeight,350-(d.pivot?.x??.5)*size,610-(d.pivot?.y??.5)*size,size,size);g.restore();}
function drawWeather(){if(weatherIndex===1||weatherIndex===2||weatherIndex===4){g.save();g.strokeStyle=weatherIndex===4?'#fff9e799':'#d4f5f566';g.lineWidth=1.4;for(let i=0;i<28;i++){const x=(i*73+t*25)%504,y=(i*149+t*(weatherIndex===4?24:180))%800+250;g.beginPath();g.moveTo(x,y);g.lineTo(x+3,y+(weatherIndex===4?3:14));g.stroke();}g.restore();}if(weatherIndex===3||weatherIndex===10){g.fillStyle='#e9eee855';g.fillRect(0,300,504,480);}if(weatherIndex===9){g.fillStyle='#f3b4c1bb';for(let i=0;i<12;i++){g.beginPath();g.ellipse((i*67+t*12)%504,(i*79+t*20)%660+250,4,2,t+i,0,Math.PI*2);g.fill();}}if(guard>0){g.strokeStyle='#a1e9eeaa';g.lineWidth=3;g.beginPath();g.ellipse(162,514,100,90,0,0,Math.PI*2);g.stroke();}}
function fit(){const d=Math.min(devicePixelRatio||1,2);cv.width=Math.round(innerWidth*d);cv.height=Math.round(innerHeight*d);draw();}
function frame(ms){if(!last)last=ms;acc+=Math.min((ms-last)/1000,.1);last=ms;while(acc>=1/60){tick(1/60);acc-=1/60}draw();raf=requestAnimationFrame(frame)}
addEventListener('resize',fit);document.addEventListener('visibilitychange',()=>{stopPull();cancelAnimationFrame(raf);last=0;acc=0;if(document.hidden){save();}else{raf=requestAnimationFrame(frame)}applyAudio()});addEventListener('blur',stopPull);
window.FISH_GAME={get state(){return state},get save(){return JSON.parse(JSON.stringify(S))},get battle(){return {hp,maxHp,tension,fightLeft}},get catalog(){return {fish:FISH.length,maps:ZONES.length,bosses:BOSSES.length,characters:CHARACTERS.length}},openMenu,closeMenu};
setState('idle');write('sound',S.muted?'🔇':'🔊');applyAudio();updateUI();fit();$('loading').hidden=true;window.MableBoot?.ready();window.mableTuningReady?.();raf=requestAnimationFrame(frame);
// Deferred media starts after the first paint and never gates input.
requestAnimationFrame(()=>{loadBatch1();asset('leviathan','game-asset://exp_leviathan_swim');asset('palico','game-asset://exp_palico_idle');asset('dragonBoat','game-asset://exp_dragon_boat');asset('chakra','game-asset://exp_chakra_burst');asset('atlantis','game-asset://exp_atlantis');asset('ice','game-asset://exp_ice');asset('lava','game-asset://exp_lava');asset('cosmic','game-asset://exp_cosmic');asset('swamp','game-asset://exp_swamp');});
"""
data='const CATALOG='+Path('src/expansion/catalog.json').read_text()+';\nconst ORIGINAL='+Path('src/expansion/original.json').read_text()+';\n'
late=late.replace("setState('idle');write('sound'",Path('src/expansion/art-runtime.js').read_text()+Path('src/expansion/procedural-fx.js').read_text()+Path('src/expansion/polish.js').read_text()+'\nconst COMBAT_CONFIG='+Path('src/expansion/combat-config.json').read_text()+';\n'+Path('src/expansion/cp.js').read_text()+Path('src/expansion/combat.js').read_text()+Path('src/expansion/combat-ui.js').read_text()+Path('src/expansion/hub-icons.js').read_text()+Path('src/expansion/companions.js').read_text()+'\nconst HARBOUR_PROPS="data:image/webp;base64,'+base64.b64encode(Path('src/lobby-art/harbour-props.webp').read_bytes()).decode()+'";\n'+Path('src/expansion/lobby.js').read_text()+"\nsetState('idle');write('sound'")
renderer=renderer.replace("if((S.equip.boat===2||S.up.boat>=3)","if(drawPackedBoat(bob)){}else if((S.equip.boat===2||S.up.boat>=3)")
renderer=renderer.replace("phase/.85","phase/.32").replace("state==='cast'?.85:1","state==='cast'?.32:.4")
renderer=renderer.replace("asset('splash','game-asset://meadow_water_burst');",'')
late=late.replace("asset('chakra','game-asset://exp_chakra_burst');",'')
# Keep the painted world proportional while the backdrop covers the actual viewport.
renderer=re.sub(r"function draw\(\)\{const sx=cv.width/504,sy=cv.height/1092;.*?\n ", "function draw(){drawBackdrop();\n ", renderer, flags=re.S)
late=late.replace("function fit(){const d=Math.min(devicePixelRatio||1,2);cv.width=Math.round(innerWidth*d);cv.height=Math.round(innerHeight*d);draw();}",Path('src/expansion/responsive.js').read_text())
html=head+ui+helpers+data+Path('src/expansion/packed-art.js').read_text()+Path('src/expansion/engine.js').read_text()+renderer+Path('src/expansion/batch1.js').read_text()+Path('src/expansion/menus.js').read_text()+late+'</script></body></html>'
Path('src/game.html').write_text(html)
Path('src/tools/runtime-check.js').write_text('\n'.join(re.findall(r'<script[^>]*>([\s\S]*?)</script>',html)))
print('Built',len(html),'characters')
