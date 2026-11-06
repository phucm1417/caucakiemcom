// Bounded, deterministic particles; motion follows actual battle/weather state.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function fxRing(x,y,r,color,alpha=1){g.globalAlpha=alpha;g.strokeStyle=color;g.lineWidth=2;g.beginPath();g.ellipse(x,y,r,r*.32,0,0,Math.PI*2);g.stroke();g.globalAlpha=1;}
waterEffect=function(x,y,size){const p=fxTime/1.15;if(p>1)return;g.save();for(let j=0;j<3;j++)fxRing(x,y,(12+p*size*.45+j*12),'#d5ffef',(1-p)*.65);for(let i=0;i<18;i++){const angle=i*2.399,dist=(30+i%5*9)*p;g.fillStyle=i%2?'#ebfff5':'#80d8d9';g.globalAlpha=1-p;g.beginPath();g.ellipse(x+Math.cos(angle)*dist,y-85*Math.sin(p*Math.PI)*(1+i%3*.2)+Math.sin(angle)*dist*.2,2,4,angle,0,7);g.fill()}g.restore()};
rewardEffect=function(){if(phase>1.2)return;g.save();for(let i=0;i<22;i++){const a=i*2.399,p=phase/1.2;g.fillStyle=i%3?'#f6d97f':'#d5fff1';g.globalAlpha=1-p;const x=252+Math.cos(a)*p*115,y=590+Math.sin(a)*p*80-p*45;g.fillRect(x,y,3,6)}g.restore()};
function effectColor(text){return /Băng|Tuyết|Kim Cương/.test(text)?'#a8efff':/Hỏa|Lửa|Nham|Đỏ/.test(text)?'#ff9466':/Độc|Toxic|Rêu/.test(text)?'#a9d779':/Điện|Sét|Lôi/.test(text)?'#c3a2ff':/Vàng|Kim|Hoàng/.test(text)?'#ffe495':'#83e4e0'}
drawSkill=function(){if(skillFx>1.6)return;const color=effectColor(CHARACTERS[S.equip.character]?.n||'');g.save();g.globalCompositeOperation='lighter';for(let i=0;i<4;i++)fxRing(350,610,25+skillFx*90+i*12,color,(1-skillFx/1.6)*.65);for(let i=0;i<14;i++){const a=i*2.399+skillFx*2;g.strokeStyle=color;g.beginPath();g.moveTo(350+Math.cos(a)*35,610+Math.sin(a)*22);g.lineTo(350+Math.cos(a)*(45+skillFx*80),610+Math.sin(a)*(30+skillFx*55));g.stroke()}g.restore()};
drawWeather=function(){g.save();const left=-viewport.x/viewport.scale,top=-viewport.y/viewport.scale,w=viewport.width/viewport.scale,h=viewport.height/viewport.scale;g.beginPath();g.rect(left,top,w,h);g.clip();const tm=reducedMotion?0:t;
 if(weatherIndex===1||weatherIndex===2||weatherIndex===4||weatherIndex===7||weatherIndex===8||weatherIndex===9){for(let i=0;i<32;i++){const x=(i*71+tm*(weatherIndex===9?15:35))%w+left,y=top+(i*113+tm*(weatherIndex===4?25:weatherIndex===7?140:180))%h;g.strokeStyle=weatherIndex===8?'#ffb26d88':weatherIndex===7?'#fff2afaa':'#d6f6ffcc';g.fillStyle=weatherIndex===9?'#ffc7dcbb':'#f2ffffee';g.lineWidth=1.8;if(weatherIndex===4||weatherIndex===9){g.beginPath();g.ellipse(x,y,weatherIndex===9?4:2,2,tm+i,0,7);g.fill()}else{g.beginPath();g.moveTo(x,y);g.lineTo(x-5,y+(weatherIndex===7?25:15));g.stroke()}}}
 if(weatherIndex===0||weatherIndex===6){g.fillStyle='#ffefb617';for(let i=0;i<4;i++){g.beginPath();g.moveTo(50+i*85,290);g.lineTo(175+i*85,780);g.lineTo(230+i*85,780);g.lineTo(74+i*85,290);g.fill()}}
 if(weatherIndex===5){g.strokeStyle='#d9fff4aa';g.lineWidth=2;for(let i=0;i<12;i++){const y=top+(i*79+tm*12)%h,x=left+(i*101+tm*150)%w;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+35,y-12,x+85,y-4);g.stroke();}}
 if(weatherIndex===2&&tm%5<.18){g.strokeStyle='#bfa9ee99';g.lineWidth=3;g.beginPath();g.moveTo(410,300);g.lineTo(385,370);g.lineTo(410,365);g.lineTo(360,440);g.stroke()}
 if(weatherIndex===3||weatherIndex===10){const fog=g.createRadialGradient(bobX,bobY,30,bobX,bobY,310);fog.addColorStop(0,'#19394c00');fog.addColorStop(1,weatherIndex===10?'#1d183bbb':'#d4e7e4bb');g.fillStyle=fog;g.fillRect(left,top,w,h)}
 if(weatherIndex===4){g.fillStyle='#b5e8f344';for(let i=0;i<12;i++){g.beginPath();g.moveTo(i%2?504:0,300+i*38);g.lineTo(i%2?480:24,320+i*38);g.lineTo(i%2?504:0,345+i*38);g.fill()}}
 if(weatherIndex===8){for(let i=0;i<8;i++){const p=(tm*.5+i*.17)%1;fxRing(300+i*19%150,592-p*35,3+p*6,'#ffbb8088',1-p)}}
 if(guard>0||buffs.guard>0){g.fillStyle='#a4eeff18';g.strokeStyle='#9be7ff99';g.beginPath();g.ellipse(158,500,112,108,0,0,7);g.fill();g.stroke()}
 if(buffs.flow>0||speedBuff>0){for(let i=0;i<3;i++)fxRing(158,540,(tm*65+i*25)%100,speedBuff>0?'#ffe3a0':'#83ebff',.6)}
 if(buffs.luck>0){g.fillStyle='#9ce4b1aa';for(let i=0;i<14;i++)g.fillRect((i*67+tm*9)%504,310+(i*57+tm*25)%420,3,5)}
 if(state==='fight'){
 const color=effectColor(target?.n||'');if(target?.boss){const rage=hp/maxHp<.35;for(let i=0;i<4;i++)fxRing(325,710,40+((tm*(rage?65:30)+i*22)%105),rage?'#ff887b':color,.35)}
 if(wealth>1){for(let i=0;i<6;i++){const a=tm+i*1.05;g.fillStyle='#ffe39a';g.beginPath();g.ellipse(bobX+Math.cos(a)*28,bobY-10+Math.sin(a)*12,2,4,0,0,7);g.fill()}}
 if(powerBuff>0||buffs.pull>0){g.fillStyle='#ff9b6b88';for(let i=0;i<9;i++){const p=(tm*.9+i*.13)%1;g.globalAlpha=1-p;g.beginPath();g.ellipse(152+Math.sin(i*3)*25,490-p*60,3,6,0,0,7);g.fill()}g.globalAlpha=1}
 if(stun>0){g.strokeStyle='#b9efff';for(let i=0;i<6;i++){const a=i*Math.PI/3;g.beginPath();g.moveTo(bobX,660);g.lineTo(bobX+Math.cos(a)*30,660+Math.sin(a)*30);g.stroke()}}
 if(shock>0){g.strokeStyle='#c3a2ff';g.beginPath();g.moveTo(190,460);for(let i=0;i<8;i++)g.lineTo(190+(i%2?18:-12),465+i*8);g.stroke()}
 if(entangled>0){g.strokeStyle='#345e3b';g.lineWidth=4;for(let j=0;j<3;j++){g.beginPath();g.moveTo(bobX-15+j*10,650);g.bezierCurveTo(bobX+25,615,bobX-25,615,bobX+j*5,585);g.stroke()}}
 if(/rỉ/.test(debuff)){g.fillStyle='#ad714a';for(let i=0;i<10;i++)g.fillRect(rodX+(bobX-rodX)*i/10,rodY+(bobY-rodY)*i/10+(tm*30+i*7)%25,3,3)}
 if(S.stamina<5){g.fillStyle='#37474a55';g.fillRect(left,top,w,h)}
 if(held&&tension>65)fxRing(bobX,bobY,15+Math.sin(tm*9)*4,'#ffb395',.8);
 }
 g.restore();
 drawExtraStatusFX(tm);
 const z=ZONES[S.zone].doc;if(z)packDraw(artKey('map',z,'foreground'),252,775,480,120);
 if(['wait','bite','fight'].includes(state))packDraw(artKey('ui',target?.boss?9:8),bobX,bobY-3,24,32);
 if(S.equip.rod)packDraw(artKey('rod',S.equip.rod,state==='fight'&&held?'bent':'asset'),205,476,65,90);
 if(S.equip.line&&['wait','bite','fight'].includes(state))packDraw(artKey('line',S.equip.line,'endpoint'),bobX,bobY+27,18,22);
 if(S.equip.bag)packDraw(artKey('bag',S.equip.bag,state==='result'?'open':'asset'),235,558,45,45);
};

function drawExtraStatusFX(tm){
 g.save();
 if(buffs.eye>0||buffs.radar>0){fxRing(bobX,bobY,25+(tm*30)%65,buffs.radar>0?'#90f5b0':'#ffe191',.85);if(target){const text=buffs.radar>0?target.n+' · '+RAR[target.r]:target.kg.toFixed(1)+' kg';g.font='bold 12px system-ui';const width=Math.min(220,g.measureText(text).width+16);g.fillStyle='#123c3ef0';g.fillRect(bobX-width/2,bobY+30,width,24);g.fillStyle='#fff6d4';g.textAlign='center';g.fillText(text,bobX,bobY+46,width-10);}}
 if(buffs.titan>0){g.strokeStyle='#ffe493';g.lineWidth=4;g.beginPath();g.arc(182,474,18,0,Math.PI*2);g.stroke();fxRing(158,570,35+(tm*30)%45,'#ffdd89',.7);}
 if(buffs.speed>0){for(let i=0;i<4;i++)fxRing(180,480,12+(tm*60+i*15)%60,'#ffe69b',.7);}
 if(buffs.shield>0){g.fillStyle='#74cef230';g.strokeStyle='#a9ecff';g.lineWidth=3;g.beginPath();g.ellipse(158,500,100,100,0,0,Math.PI*2);g.fill();g.stroke();}
 if(buffs.gold>0){g.fillStyle='#ffe27e';for(let i=0;i<8;i++){const a=i*.785+tm;g.beginPath();g.ellipse(bobX+Math.cos(a)*35,bobY+Math.sin(a)*16,3,5,0,0,7);g.fill();}}
 if(state==='fight'&&weatherIndex===4){g.strokeStyle='#bdf8ff';g.lineWidth=3;g.strokeRect(164,452,28,31);}
 if(state==='fight'&&weatherIndex===10){g.strokeStyle='#f5a8da88';for(let i=0;i<6;i++){g.beginPath();g.arc(150+Math.sin(tm+i)*45,460-(tm*16+i*12)%65,6,0,7);g.stroke();}}
 g.restore();
}
