// CSS viewport dimensions and one uniform world scale prevent squashed sprites.
const viewport={width:504,height:1092,ratio:1,scale:1,x:0,y:0};
function fit(){
 const root=document.querySelector('[data-game-root]');
 const w=root.clientWidth,h=root.clientHeight,d=Math.min(devicePixelRatio||1,2);
 viewport.width=w;viewport.height=h;viewport.ratio=d;
 const hudBottom=document.querySelector('.resources').getBoundingClientRect().bottom;
 viewport.scale=Math.min(w/504,h/900,Math.max(.28,(h*.56-hudBottom-12)/250));
 viewport.x=(w-504*viewport.scale)/2;
 viewport.y=h*.56-600*viewport.scale;
 cv.width=Math.round(w*d);cv.height=Math.round(h*d);bakeScene();draw();
}
function drawBackdrop(){
 const v=viewport,d=v.ratio;g.setTransform(d,0,0,d,0,0);
 g.fillStyle='#b9d9cd';g.fillRect(0,0,v.width,v.height);
 if(sceneReady)g.drawImage(sceneLayer,0,0,sceneLayer.width,sceneLayer.height,0,0,v.width,v.height);
 const z=v.scale*d;g.setTransform(z,0,0,z,v.x*d,v.y*d);g.imageSmoothingEnabled=true;
}
new ResizeObserver(fit).observe(document.querySelector('[data-game-root]'));
window.visualViewport?.addEventListener('resize',fit);

// One uniform cover crop; never stretch the upper and lower halves separately.
bakeScene=function(){
 const im=ART[sceneKey()]||ART.background;if(!im?.naturalWidth)return;
 const w=viewport.width,h=viewport.height,d=viewport.ratio;
 sceneLayer.width=Math.round(w*d);sceneLayer.height=Math.round(h*d);bgc.setTransform(d,0,0,d,0,0);
 const scale=Math.max(w/im.naturalWidth,h/im.naturalHeight),dw=im.naturalWidth*scale,dh=im.naturalHeight*scale;
 bgc.drawImage(im,(w-dw)/2,(h-dh)*.45,dw,dh);
 const wash=bgc.createLinearGradient(0,h*.6,0,h);wash.addColorStop(0,'#173b3d00');wash.addColorStop(1,'#173b3d66');bgc.fillStyle=wash;bgc.fillRect(0,h*.6,w,h*.4);sceneReady=true;
};
