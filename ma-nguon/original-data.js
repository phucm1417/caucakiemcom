/** @typedef {'rod'|'bait'|'boat'|'bag'|'pet'} UpKey */
const SAVE_KEY='cau_ca_v8', LEGACY_KEYS=['cau_ca_v7','cau_ca_v6','cau_ca_v5','cau_ca_v4','cau_ca_v3'];
const UP_KEYS=/** @type {UpKey[]} */(['rod','bait','boat','bag','pet','hook','line']);
/* Giá nâng cấp tăng đều: hệ số nhỏ hơn trước để cuối game không bị hụt hơi */
const UP={rod:{b:40,m:1.55,max:10,min:1},bait:{b:80,m:1.5,max:10,min:0},boat:{b:220,m:1.75,max:10,min:0},bag:{b:80,m:1.45,max:15,min:0},pet:{b:450,m:1.7,max:10,min:0},hook:{b:160,m:1.6,max:10,min:0},line:{b:200,m:1.6,max:10,min:0}};
const P={ink:'#1b1a2e',white:'#ffffff',sun:'#f4d35e',orange:'#f29e4c',red:'#e76f51',moss:'#8ab17d',teal:'#2a9d8f',deep:'#264653',blue:'#457b9d',ice:'#a8dadc',sand:'#e9c46a',brown:'#bc6c25',violet:'#9b5de5',pink:'#f15bb5',gold:'#fee440',plum:'#6a4c93',grey:'#8d99ae',cyan:'#6ee7f7'};
const INK=P.ink;
const RAR_KEYS=['white','moss','blue','violet','orange','gold'];
/* Bảng cá: giá trị tăng dần theo từng khu vực, không còn cảnh khu sau rẻ hơn khu trước */
const FISH=[
{n:'Cá Mè Hoa Khổng Lồ',b:'orange',l:'sun',d:'brown',f:'red',p:'plain',v:6,r:0,s:1},
{n:'Cá Trắm Đen Vảy Sắt',b:'sand',l:'gold',d:'brown',f:'orange',p:'spot',v:11,r:0,s:1.1},
{n:'Cá Lóc Bông Đột Biến',b:'brown',l:'sand',d:'ink',f:'brown',p:'plain',v:18,r:0,s:1},
{n:'Cá Chép Vàng May Mắn',b:'moss',l:'sun',d:'teal',f:'teal',p:'stripe',v:34,r:1,s:1.2},
{n:'Cá Diếc Thạch Anh',b:'ice',l:'white',d:'blue',f:'blue',p:'belly',v:48,r:1,s:1.2},
{n:'Cá Bống Tượng Sấm Sét',b:'red',l:'orange',d:'deep',f:'red',p:'spot',v:110,r:2,s:1.3},
{n:'Cá Hồi Cầu Vồng Vàng',b:'blue',l:'ice',d:'deep',f:'blue',p:'stripe',v:230,r:2,s:1.4},
{n:'Cá Hải Tượng Bão Tố',b:'teal',l:'ice',d:'deep',f:'sun',p:'plain',v:650,r:3,s:1.5},
{n:'Cá Rồng Huyết Kim',b:'gold',l:'white',d:'orange',f:'gold',p:'stripe',v:1200,r:4,s:1.6,crown:1},
{n:'Cá Thần Đáy Hồ',b:'violet',l:'pink',d:'plum',f:'pink',p:'spot',v:3000,r:5,s:1.7,crown:1,aura:'gold'},
{k:'jelly',n:'Sứa Pha Lê',v:45,r:1},{k:'squid',n:'Mực Đèn Lồng',v:190,r:2},
{k:'octo',n:'Bạch Tuộc Nhỏ Kraken',v:320,r:3},{k:'crab',n:'Cua Đá San Hô',v:70,r:1},
{k:'seahorse',n:'Cá Ngựa Hoàng Kim',v:380,r:3},{k:'puffer',n:'Cá Nóc Gia Tốc',v:240,r:2},
{k:'lobster',n:'Tôm Hùm Đỏ',v:560,r:3},{k:'starfish',n:'Sao Biển Năm Cánh',v:50,r:1},
{k:'nautilus',n:'Ốc Anh Vũ Cổ',v:1600,r:4},{k:'mola',n:'Cá Mặt Trăng',v:800,r:3},
{k:'boot',n:'Chiếc Ủng Cũ',v:4,r:0},{k:'bottle',n:'Chai Thư Cổ',v:520,r:3},
{k:'tire',n:'Lốp Xe Chìm',v:3,r:0},{k:'chest',n:'Rương Báu Cướp Biển',v:4200,r:5},
{k:'pearl',n:'Ngọc Trai Đen',v:2600,r:4},{k:'meteor',n:'Thiên Thạch Biển Sâu',v:12000,r:5},
{n:'Cá Chiết Giang Ngũ Sắc',b:'teal',l:'gold',d:'violet',f:'pink',p:'stripe',v:900,r:2,s:1.25},
{n:'Cá Anh Vũ Hoàng Gia',b:'gold',l:'sun',d:'orange',f:'violet',p:'belly',v:2000,r:4,s:1.6,crown:1},
{n:'Cá Tai Kính San Hô',b:'ice',l:'white',d:'cyan',f:'ice',p:'plain',v:3600,r:3,s:1.3,aura:'cyan'},
{n:'Rùa Cổ Đại Khổng Lồ',b:'moss',l:'sand',d:'brown',f:'moss',p:'spot',v:6000,r:4,s:1.8,aura:'moss'},
{n:'Cá Tra Bào Ngư',b:'pink',l:'sand',d:'orange',f:'pink',p:'belly',v:4200,r:3,s:1.4},
{n:'Cá Sấu Bò Nước Ngọt',b:'moss',l:'brown',d:'ink',f:'moss',p:'stripe',v:6000,r:4,s:1.7},
{n:'Cá Chuối Đỏ Toxic',b:'red',l:'orange',d:'moss',f:'moss',p:'spot',v:8000,r:4,s:1.35,aura:'moss'},
{n:'Cá Rồng Hoang Kim',b:'gold',l:'white',d:'red',f:'red',p:'stripe',v:20000,r:5,s:1.9,crown:1,horn:1,aura:'gold'},
{n:'Cá Thần Ánh Trăng',b:'ice',l:'white',d:'blue',f:'cyan',p:'belly',v:32000,r:5,s:2,crown:1,aura:'cyan'}].map(x=>({b:'',l:'',d:'',f:'',p:'plain',s:1,...x}));
const ZONES=[
{n:'Đồng Cỏ Ngập',ic:'lily',sky:['ice','white'],wat:['teal','deep'],hill:0,cost:0,rod:1,fish:[0,1,2,3]},
{n:'Sông Suối',ic:'river',sky:['ice','white'],wat:['blue','deep'],hill:8,cost:600,rod:2,fish:[1,2,3,4,5]},
{n:'Hồ Núi',ic:'mount',sky:['blue','ice'],wat:['deep','ink'],hill:40,cost:2400,rod:4,fish:[3,4,5,6]},
{n:'Biển Khơi',ic:'sea',sky:['orange','sun'],wat:['blue','ink'],hill:6,cost:9000,rod:6,fish:[5,6,7,8]},
{n:'Vực Thẳm',ic:'abyss',sky:['ink','plum'],wat:['deep','ink'],hill:14,cost:34000,rod:8,fish:[6,7,8,9,26,27]},
{n:'Rạn San Hô',ic:'coral',sky:['teal','ice'],wat:['blue','deep'],hill:0,cost:120000,rod:8,hook:2,fish:[14,16,18,19,28,29]},
{n:'Đầm Lầy',ic:'swamp',sky:['moss','sand'],wat:['brown','deep'],hill:10,cost:380000,rod:9,line:2,fish:[21,12,30,31,32]},
{n:'Di Tích Chìm',ic:'ruin',sky:['plum','ink'],wat:['deep','ink'],hill:20,cost:1100000,rod:10,hook:5,line:5,fish:[23,24,25,33,34]}];
const BOSS_EVERY=30,FIGHT_MS=10000;
const BOSSES=[
{k:'eel',n:'Lươn Điện Cổ',z:[2],hp:6,v:1200},
{k:'turtle',n:'Rùa Thần Mai Đá',z:[2,3],hp:8,v:3000},
{k:'shark',n:'Cá Mập Vây Bạc',z:[3,5],hp:10,v:9000},
{k:'dragon',n:'Rồng Biển Cổ',z:[4,7],hp:14,v:30000},
{k:'kraken',n:'Kraken Vực Sâu',z:[4,6],hp:18,v:90000}];
/* Thú cưng: c giá, iv chu kỳ, rare/coin thưởng, perf cắn hoàn hảo, fx màu hạt khi bắt */
const PETS=[
{name:'bird',c:250,iv:1,rare:1,coin:1,perf:0,fx:['orange','white']},
{name:'ufo',c:700,iv:.6,rare:1,coin:1,perf:0,fx:['gold','cyan']},
{name:'drone',c:1200,iv:1,rare:1.4,coin:1,perf:0,fx:['ice','white']},
{name:'hero',c:2600,iv:1,rare:1,coin:1.3,perf:0,fx:['gold','white']},
{name:'anime',c:4200,iv:1,rare:1,coin:1,perf:.3,fx:['pink','violet']},
{name:'robot',c:6500,iv:1,rare:1,coin:1.5,perf:0,fx:['cyan','white']},
{name:'dragonling',c:9000,iv:1,rare:2,coin:1,perf:0,fx:['red','orange']},
{name:'turtle',c:14000,iv:.8,rare:1,coin:1,perf:.5,fx:['teal','moss']},
{name:'fox',c:20000,iv:.8,rare:1.2,coin:1.2,perf:0,fx:['orange','sun']}];
const EVENTS=[{ic:'star',rare:2,coin:1,speed:1},{ic:'coin',rare:1,coin:1.5,speed:1},{ic:'bolt',rare:1,coin:1,speed:1.5}];
/* Thời tiết: wait (chờ cắn), rare (cá hiếm), ring (cửa sổ cắn), wind (gió làm vòng cắn dao động), fog (che bóng gợi ý và cá)
   Mỗi thời tiết kéo theo một hiệu ứng bất lợi (deb) như trong tài liệu thiết kế */
const WEATHER=[
{ic:'sun',wait:1.35,rare:1,ring:1,wind:0,fog:0,deb:'heat'},
{ic:'drop',wait:.9,rare:1,ring:.8,wind:0,fog:0,deb:'rust'},
{ic:'bolt',wait:1,rare:1.8,ring:.9,wind:1,fog:0,deb:'shock'},
{ic:'cloud',wait:1.1,rare:1,ring:.85,wind:0,fog:1,deb:'fog'}];
const DEBUFFS={
  heat:{n:'Kiệt Sức',s:'Nóng',ic:'heat',t:'Nắng gắt: cá lặn sâu, chờ cắn lâu hơn và lực kéo giảm'},
  rust:{n:'Dây Rỉ Sét',s:'Rỉ',ic:'rust',t:'Mưa ẩm: dây câu dễ rối hơn gấp đôi'},
  shock:{n:'Bão Điện',s:'Điện',ic:'shock',t:'Sét đánh làm tê tay 1,5 giây, không nhấn cần được'},
  fog:{n:'Mù Sương',s:'Sương',ic:'fog',t:'Sương dày che gần hết mặt nước và bóng cá'}};
/* Thuyền: mỗi cấp là một con thuyền có tên và hiệu ứng riêng; tự bán mở ở cấp 5 và rất chậm */
const BOATS=[
{n:'Bè Gỗ Sinh Tồn',fx:'Chưa tự câu'},
{n:'Thuyền Trúc Bát Nhã',fx:'Tự câu chậm'},
{n:'Thuyền Hải Tặc Thousand Sunny',fx:'+8% xu khi bắt cá'},
{n:'Thuyền Rồng Hoàng Gia',fx:'Tự câu nhanh hơn'},
{n:'Chiến Tàu Viking Longship',fx:'+1 độ bền, kháng sóng bão'},
{n:'Tàu Ngầm Nautilus',fx:'Mở tự bán: mỗi 5 phút, 70% giá'},
{n:'Thuyền Hoa Sen Tiên Cảnh',fx:'Giảm rối dây, +1 độ bền'},
{n:'Thuyền Băng Nam Cực',fx:'+10% giá bán, +1 độ bền'},
{n:'Phi Thuyền Wakanda Royal',fx:'+15% cá hiếm'},
{n:'Tàu Tuần Dương Cyberpunk',fx:'Tự bán nhanh hơn, +1 độ bền'},
{n:'Thuyền Đa Chiều TARDIS',fx:'Tự bán nhanh nhất, kho +15 ô'}];
/* Nhân vật dạng skin: mua rồi đổi để lấy nội tại + chiêu cuối riêng */
const SKINS=[
{n:'Ngư Dân Tập Sự',src:'Cơ bản',cost:0,hair:'#7a4418',hs:'short',outfit:'#457b9d',accent:'#e9c46a',acc:'cap',weapon:'rod',aura:'',pass:{},pt:'Không có nội tại đặc biệt',ult:{n:'Mẻ Lưới May Mắn',type:'catch',cd:90,mult:1.5,desc:'Bắt ngay cá đang cắn với giá x1.5'}},
{n:'Tôn Thần Nhẫn Giả',src:'Anime / Naruto',cost:300,hair:'#f4d35e',hs:'spike',outfit:'#f29e4c',accent:'#1b1a2e',acc:'band',weapon:'orb',aura:'#f4d35e',pass:{wait:.9,pull:1.08},pt:'Chờ cắn -10%, lực kéo +8%',ult:{n:'Bằng Phong Rasengan',type:'stun',cd:60,dur:8,desc:'Choáng cá 8s: chờ cắn và vòng cắn cực nhanh'}},
{n:'Tài Ba Khai Sáng',src:'Anime / Dragon Ball',cost:600,hair:'#1b1a2e',hs:'spike',outfit:'#f29e4c',accent:'#2a9d8f',acc:'none',weapon:'gauntlet',aura:'#fee440',pass:{coin:1.08,pull:1.1},pt:'Xu +8%, lực kéo +10%',ult:{n:'Kamehameha Fishing',type:'boss',cd:95,dmg:.45,desc:'Trùm mất 45% máu, cá thường bị bắt ngay'}},
{n:'Hải Vương Mũ Rơm',src:'Anime / One Piece',cost:1000,hair:'#264653',hs:'short',outfit:'#e76f51',accent:'#e9c46a',acc:'straw',weapon:'rod',aura:'',pass:{rare:1.15,coin:1.05},pt:'Cá hiếm +15%, xu +5%',ult:{n:'Gomu Gigant Pull',type:'catch',cd:75,mult:2.2,desc:'Bắt ngay cá đang cắn với giá x2.2'}},
{n:'Thần Niệm Niệm Giả',src:'Anime / Hunter x Hunter',cost:1600,hair:'#8ab17d',hs:'spike',outfit:'#2a9d8f',accent:'#fee440',acc:'none',weapon:'rod',aura:'#9b5de5',pass:{ring:1.12},pt:'Vòng cắn hoàn hảo rộng +12%',ult:{n:'Niệm Lực Ngư Giật',type:'stun',cd:65,dur:7,desc:'Choáng cá 7s, vòng cắn mở rộng'}},
{n:'Ma Pháp Thiếu Nữ Card',src:'Anime / Cardcaptor',cost:2500,hair:'#f15bb5',hs:'long',outfit:'#f15bb5',accent:'#ffffff',acc:'crown',weapon:'staff',aura:'#f15bb5',pass:{wait:.82},pt:'Chờ cắn -18%',ult:{n:'Thẻ Bài The Water',type:'lure',cd:70,mult:2.2,desc:'Dụ cá hiếm nhất khu vực, bắt với giá x2.2'}},
{n:'Mèo Máy Tương Lai',src:'Anime / Doraemon',cost:4000,hair:'#6ee7f7',hs:'short',outfit:'#457b9d',accent:'#fee440',acc:'ears',weapon:'orb',aura:'#6ee7f7',pass:{sell:1.08,wait:.92},pt:'Giá bán +8%, chờ cắn -8%',ult:{n:'Túi Thần Kỳ',type:'wealth',cd:80,dur:25,desc:'x2 xu và +50% giá bán trong 25s'}},
{n:'Đao Thần Tóc Đỏ',src:'Anime / Kenshin',cost:6000,hair:'#e76f51',hs:'pony',outfit:'#b23a2e',accent:'#ffffff',acc:'mask',weapon:'sword',aura:'',pass:{ring:1.15},pt:'Vòng cắn hoàn hảo rộng +15%',ult:{n:'Phi Yến Tuyệt Kỹ',type:'catch',cd:70,mult:2,desc:'Bắt ngay cá đang cắn với giá x2'}},
{n:'Đại Bát Vương Săn Thần',src:'Anime / Dragon Ball',cost:9000,hair:'#6ee7f7',hs:'spike',outfit:'#457b9d',accent:'#ffffff',acc:'none',weapon:'gauntlet',aura:'#6ee7f7',pass:{pull:1.15},pt:'Lực kéo +15%',ult:{n:'Final Flash Wave',type:'boss',cd:90,dmg:.5,desc:'Trùm mất 50% máu, cá thường bị bắt ngay'}},
{n:'Nhãn Thuật Ma Vương',src:'Anime / Naruto',cost:13000,hair:'#1b1a2e',hs:'long',outfit:'#262340',accent:'#e76f51',acc:'mask',weapon:'none',aura:'#e76f51',pass:{rare:1.2},pt:'Cá hiếm +20%',ult:{n:'Amaterasu Net',type:'lure',cd:75,mult:2.5,desc:'Dụ cá hiếm nhất khu vực, bắt với giá x2.5'}},
{n:'Kiếm Sĩ Tam Đao',src:'Anime / One Piece',cost:18000,hair:'#8ab17d',hs:'short',outfit:'#264653',accent:'#ffffff',acc:'band',weapon:'sword',aura:'',pass:{pull:1.15},pt:'Lực kéo +15%',ult:{n:'Tam Thiên Thế Giới',type:'catch',cd:65,mult:2.1,desc:'Bắt ngay cá đang cắn với giá x2.1'}},
{n:'Ma Đạo Thủy Tộc Gray',src:'Anime / Fairy Tail',cost:25000,hair:'#cfd8dc',hs:'spike',outfit:'#8d99ae',accent:'#6ee7f7',acc:'none',weapon:'orb',aura:'#a8dadc',pass:{ring:1.1},pt:'Vòng cắn hoàn hảo rộng +10%',ult:{n:'Ice-Make Speargun',type:'guard',cd:80,dur:20,desc:'Xóa hiệu ứng xấu, miễn nhiễm thời tiết 20s'}},
{n:'Hỏa Long Ma Đạo',src:'Anime / Fairy Tail',cost:34000,hair:'#f15bb5',hs:'spike',outfit:'#1b1a2e',accent:'#e76f51',acc:'none',weapon:'gauntlet',aura:'#f29e4c',pass:{coin:1.1},pt:'Xu +10%',ult:{n:'Hỏa Long Hồng Liên Pháo',type:'boss',cd:90,dmg:.45,desc:'Trùm mất 45% máu, cá thường bị bắt ngay'}},
{n:'Tộc Trưởng Chuột Ma Thuật',src:'Anime / Pokemon',cost:46000,hair:'#fee440',hs:'short',outfit:'#e9c46a',accent:'#f29e4c',acc:'ears',weapon:'none',aura:'#fee440',pass:{pull:1.12},pt:'Lực kéo +12%',ult:{n:'Vạn Thập Điện Quang',type:'stun',cd:60,dur:9,desc:'Choáng cá 9s, chờ cắn cực nhanh'}},
{n:'Khai Sáng Giả Titania',src:'Anime / Fairy Tail',cost:60000,hair:'#e76f51',hs:'long',outfit:'#cfd8dc',accent:'#fee440',acc:'crown',weapon:'sword',aura:'#ffffff',pass:{pull:1.18},pt:'Lực kéo +18%',ult:{n:'Hoán Trang Thủy Thần Giáp',type:'guard',cd:85,dur:20,desc:'Xóa hiệu ứng xấu, miễn nhiễm thời tiết 20s'}},
{n:'Bạch Nhãn Nhẫn Giả',src:'Anime / Naruto',cost:78000,hair:'#9b5de5',hs:'short',outfit:'#e9e3d5',accent:'#9b5de5',acc:'band',weapon:'none',aura:'#9b5de5',pass:{rare:1.15},pt:'Cá hiếm +15%',ult:{n:'Bát Quái Chưởng Thủy Vực',type:'lure',cd:72,mult:2.4,desc:'Dụ cá hiếm nhất khu vực, bắt với giá x2.4'}},
{n:'Iron Armor Genius',src:'Marvel',cost:100000,hair:'#7a4418',hs:'short',outfit:'#b23a2e',accent:'#fee440',acc:'mask',weapon:'gauntlet',aura:'#6ee7f7',pass:{coin:1.12},pt:'Xu +12%',ult:{n:'Unibeam Magnet',type:'wealth',cd:80,dur:25,desc:'x2 xu và +50% giá bán trong 25s'}},
{n:'Thần Sấm Giáp Vàng',src:'Marvel',cost:130000,hair:'#fee440',hs:'long',outfit:'#e9c46a',accent:'#b23a2e',acc:'crown',weapon:'hammer',aura:'#fee440',pass:{pull:1.2},pt:'Lực kéo +20%',ult:{n:'Bão Sét Asgard',type:'stun',cd:62,dur:10,desc:'Choáng cá 10s, vòng cắn mở rộng'}},
{n:'Thần Cụ Cây Bảo Hộ',src:'Marvel',cost:165000,hair:'#8ab17d',hs:'spike',outfit:'#8ab17d',accent:'#bc6c25',acc:'horns',weapon:'staff',aura:'#8ab17d',pass:{wait:.85,rare:1.05},pt:'Chờ cắn -15%, cá hiếm +5%',ult:{n:'Trụ Rễ Cây Đại Dương',type:'guard',cd:78,dur:22,desc:'Xóa hiệu ứng xấu, miễn nhiễm thời tiết 22s'}},
{n:'Phù Thủy Thời Gian',src:'Marvel',cost:210000,hair:'#1b1a2e',hs:'long',outfit:'#264653',accent:'#fee440',acc:'halo',weapon:'orb',aura:'#fee440',pass:{wait:.8,coin:1.05},pt:'Chờ cắn -20%, xu +5%',ult:{n:'Mắt Thần Thời Gian',type:'stun',cd:70,dur:10,desc:'Ngưng đọng thời gian 10s, cá chờ cắn cực nhanh'}}];
/* Hồ cá: sức chứa 4 + 2*lv, thu nhập mỗi phút = giá trị * AQ_RATE */
const AQ_RATE=0.02,AQ_MAX_LV=8,AQ_POOL_CAP=7200;
const W=400,H=600,WL=290;
const BOAT_X=110,BOAT_Y=WL+12,FISH_X=104,DECK_Y=WL-8,BAG_X=72,BX=300,BASE_Y=WL+14;
const PERCH={x:138,y:DECK_Y-2};
const TIP={x:250,y:WL-150};
const RING_R0=50,PERFECT_MIN=7,PERFECT_MAX=12;
const COMBO_MAX=10,BOOST_MS=60000,BOOST_CD=300000,EVENT_MS=300000,AFK_CAP=14400;
const TIER={rod:lv=>lv>=9?3:lv>=6?2:lv>=3?1:0,bag:lv=>lv>=10?2:lv>=5?1:0,pet:lv=>lv>=5?2:lv>=3?1:0,boat:lv=>lv>=8?2:lv>=4?1:0,bait:()=>0,hook:lv=>lv>=6?2:lv>=3?1:0,line:lv=>lv>=6?2:lv>=3?1:0};

JSON.stringify({UP,FISH,ZONES,BOSSES,PETS,BOATS,SKINS,WEATHER,EVENTS})