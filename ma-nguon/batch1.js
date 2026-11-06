// First art batch: exact species IDs from the original meadow configuration.
const FISH_ART=[
 {name:'Mè hoa',swim:'batch1_me_hoa_swim',struggle:'batch1_me_hoa_struggle',caught:'batch1_me_hoa_caught'},
 {name:'Trắm đen',swim:'batch1_tram_den_swim',struggle:'batch1_tram_clean_struggle',caught:'batch1_tram_den_caught'},
 {name:'Lóc bông',swim:'batch1_loc_bong_swim',struggle:'batch1_loc_bong_struggle',caught:'batch1_loc_bong_caught'},
 {name:'Chép vàng',swim:'batch1_chep_vang_swim',struggle:'batch1_chep_vang_struggle',caught:'batch1_chep_vang_caught'}
];
function drawFish(kind,x,y,scale,flip=false,alpha=1,action='swim',clock=t){
 const art=FISH_ART[kind];
 const key=art?art[action]:kind%2?'meadow_dark_swim':'meadow_gold_swim';
 const d=geom(key);if(!d)return;
 const image=art?key:kind%2?'dark':'gold';
 const frame=action==='caught'?Math.min(d.frames-1,Math.floor(clock*d.fps)):Math.floor(clock*d.fps)%d.frames;
 // Normalize cell dimensions so different export resolutions keep the same world scale.
 blit(image,key,frame,x,y,scale*320/d.frameWidth,flip,alpha);
}
function atlasIcon(image,key,label,extra=''){
 const d=geom(key),im=ART[image];if(!d||!im?.naturalWidth)return '<span aria-hidden="true">◇</span>';
 return '<span class="art-icon atlas-icon '+extra+'" role="img" aria-label="'+clean(label)+'" style="background-image:url(&quot;'+im.src+'&quot;);background-size:'+d.columns*100+'% '+d.rows*100+'%"></span>';
}
function fishIcon(f){const a=!f.boss&&FISH_ART[f.id];return a?atlasIcon(a.swim,a.swim,f.n):f.boss?'♛':'🐟';}
function upgradeIcon(k){if(k==='pet')return atlasIcon('palico','exp_palico_idle','Thú cưng');const im=ART['icon_'+k];return im?.naturalWidth?'<img class="art-icon" src="'+im.src+'" alt="">':UP_ICON[k];}
function rewardEffect(){const d=geom('batch1_reward_burst'),im=ART.reward;if(!d||!im?.naturalWidth||!d.frameDurationsMs)return;let ms=phase*1000,i=0;while(i<d.frames&&ms>=d.frameDurationsMs[i])ms-=d.frameDurationsMs[i++];if(i>=d.frames)return;const size=220;g.save();g.globalCompositeOperation=d.blendMode==='additive'?'lighter':'source-over';g.drawImage(im,i%d.columns*d.frameWidth,Math.floor(i/d.columns)*d.frameHeight,d.frameWidth,d.frameHeight,252-(d.pivot?.x??.5)*size,562-(d.pivot?.y??.5)*size,size,size);g.restore();}
function loadBatch1(){
 asset('batch1_me_hoa_swim','game-asset://batch1_me_hoa_swim');
 asset('batch1_me_hoa_struggle','game-asset://batch1_me_hoa_struggle');
 asset('batch1_me_hoa_caught','game-asset://batch1_me_hoa_caught');
 asset('batch1_tram_den_swim','game-asset://batch1_tram_den_swim');
 asset('batch1_tram_clean_struggle','game-asset://batch1_tram_clean_struggle');
 asset('batch1_tram_den_caught','game-asset://batch1_tram_den_caught');
 asset('batch1_loc_bong_swim','game-asset://batch1_loc_bong_swim');
 asset('batch1_loc_bong_struggle','game-asset://batch1_loc_bong_struggle');
 asset('batch1_loc_bong_caught','game-asset://batch1_loc_bong_caught');
 asset('batch1_chep_vang_swim','game-asset://batch1_chep_vang_swim');
 asset('batch1_chep_vang_struggle','game-asset://batch1_chep_vang_struggle');
 asset('batch1_chep_vang_caught','game-asset://batch1_chep_vang_caught');
 asset('icon_rod','game-asset://batch1_icon_rod');
 asset('icon_bait','game-asset://batch1_icon_bait');
 asset('icon_boat','game-asset://exp_dragon_boat');
 asset('icon_bag','game-asset://batch1_icon_bag');
 asset('icon_line','game-asset://batch1_icon_line');
 asset('icon_hook','game-asset://batch1_icon_hook');

}
