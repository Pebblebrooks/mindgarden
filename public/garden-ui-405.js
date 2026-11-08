/* artwork.js */
/* Locally bundled illustrations. Twemoji graphics: CC BY 4.0; see art/ATTRIBUTION.txt. */
(function(){
'use strict';
const pictures={"▶":"art/25b6.svg","🎵":"art/1f3b5.svg","🚲":"art/1f6b2.svg","🌻":"art/1f33b.svg","🏡":"art/1f3e1.svg","🐦":"art/1f426.svg","☕":"art/2615.svg","⏸":"art/23f8.svg","🦋":"art/1f98b.svg","🐶":"art/1f436.svg","🌍":"art/1f30d.svg","🍎":"art/1f34e.svg","🎹":"art/1f3b9.svg","🎷":"art/1f3b7.svg","🔔":"art/1f514.svg","🥁":"art/1f941.svg","🎻":"art/1f3bb.svg","🍰":"art/1f370.svg","🎧":"art/1f3a7.svg","🎸":"art/1f3b8.svg","🌈":"art/1f308.svg","⛵":"art/26f5.svg","🎺":"art/1f3ba.svg","🎤":"art/1f3a4.svg","🛋️":"art/1f6cb.svg","🕰️":"art/1f570.svg","🧺":"art/1f9fa.svg","🔑":"art/1f511.svg","🧵":"art/1f9f5.svg","🧭":"art/1f9ed.svg","🎼":"art/1f3bc.svg","📷":"art/1f4f7.svg","📻":"art/1f4fb.svg","🎶":"art/1f3b6.svg","🕯️":"art/1f56f.svg","☎️":"art/260e.svg","⭐":"art/2b50.svg","🧶":"art/1f9f6.svg","🌲":"art/1f332.svg","🌷":"art/1f337.svg","🍳":"art/1f373.svg","🐝":"art/1f41d.svg","☀️":"art/2600.svg","🌙":"art/1f319.svg","📺":"art/1f4fa.svg","🍁":"art/1f341.svg","🍄":"art/1f344.svg","🐢":"art/1f422.svg","🌹":"art/1f339.svg","🌳":"art/1f333.svg","🐟":"art/1f41f.svg","🍅":"art/1f345.svg","🐞":"art/1f41e.svg","🎙️":"art/1f399.svg","🥕":"art/1f955.svg","🐌":"art/1f40c.svg","🌊":"art/1f30a.svg","🌼":"art/1f33c.svg","🌽":"art/1f33d.svg","🦉":"art/1f989.svg","🎪":"art/1f3aa.svg","💡":"art/1f4a1.svg","🎬":"art/1f3ac.svg","🎭":"art/1f3ad.svg","🚪":"art/1f6aa.svg","💿":"art/1f4bf.svg","🛁":"art/1f6c1.svg","⏰":"art/23f0.svg","👓":"art/1f453.svg","💃":"art/1f483.svg","🧹":"art/1f9f9.svg","🎠":"art/1f3a0.svg","🐸":"art/1f438.svg","⛰️":"art/26f0.svg","🦁":"art/1f981.svg","🐘":"art/1f418.svg","🦆":"art/1f986.svg","✂️":"art/2702.svg","☂️":"art/2602.svg","🍜":"art/1f35c.svg","🐒":"art/1f412.svg","🐧":"art/1f427.svg","🐙":"art/1f419.svg","🍚":"art/1f35a.svg","🥚":"art/1f95a.svg","🍿":"art/1f37f.svg","🥟":"art/1f95f.svg","🍤":"art/1f364.svg","🥥":"art/1f965.svg","🍲":"art/1f372.svg","🥭":"art/1f96d.svg","🍦":"art/1f366.svg","🍍":"art/1f34d.svg","🍵":"art/1f375.svg","🍉":"art/1f349.svg","🍞":"art/1f35e.svg","🎁":"art/1f381.svg","🎇":"art/1f387.svg","🍯":"art/1f36f.svg","🧧":"art/1f9e7.svg","🎆":"art/1f386.svg","🏮":"art/1f3ee.svg","🍪":"art/1f36a.svg","🍋":"art/1f34b.svg","🎈":"art/1f388.svg","🍐":"art/1f350.svg","🍒":"art/1f352.svg","🍑":"art/1f351.svg","🎄":"art/1f384.svg","🔒":"art/1f512.svg","👑":"art/1f451.svg","🗂️":"art/1f5c2.svg","🎊":"art/1f38a.svg","🏆":"art/1f3c6.svg","🎀":"art/1f380.svg","🌱":"art/1f331.svg","🎉":"art/1f389.svg","🎂":"art/1f382.svg","🐲":"art/1f432.svg","🥮":"art/1f96e.svg","🐴":"art/1f434.svg","🐱":"art/1f431.svg","🍌":"art/1f34c.svg","✈️":"art/2708.svg","🛏️":"art/1f6cf.svg","🌰":"art/1f330.svg","🍊":"art/1f34a.svg","🚌":"art/1f68c.svg","🍇":"art/1f347.svg","🌿":"art/1f33f.svg","🚂":"art/1f682.svg","🍓":"art/1f353.svg","🎯":"art/1f3af.svg","🕒":"art/1f552.svg","💭":"art/1f4ad.svg","🔤":"art/1f524.svg","🔷":"art/1f537.svg","🤝":"art/1f91d.svg","🧩":"art/1f9e9.svg","🔢":"art/1f522.svg","✖️":"art/2716.svg","⏬":"art/23ec.svg","🔍":"art/1f50d.svg","➕":"art/2795.svg","🖼️":"art/1f5bc.svg","📖":"art/1f4d6.svg","🕵️":"art/1f575.svg","👀":"art/1f440.svg","⏳":"art/23f3.svg","🔟":"art/1f51f.svg","🐯":"art/1f42f.svg","🦊":"art/1f98a.svg","🔥":"art/1f525.svg","🌸":"art/1f338.svg","➖":"art/2796.svg","🐼":"art/1f43c.svg","🌺":"art/1f33a.svg","🧢":"art/1f9e2.svg","🧦":"art/1f9e6.svg","💬":"art/1f4ac.svg","👗":"art/1f457.svg","🐰":"art/1f430.svg","👕":"art/1f455.svg","🦅":"art/1f985.svg","🚗":"art/1f697.svg","🎲":"art/1f3b2.svg","🧥":"art/1f9e5.svg","👖":"art/1f456.svg","🦟":"art/1f99f.svg","🐬":"art/1f42c.svg","🥬":"art/1f96c.svg","🐜":"art/1f41c.svg","🦗":"art/1f997.svg","🦈":"art/1f988.svg","🥒":"art/1f952.svg","🍆":"art/1f346.svg","🐳":"art/1f433.svg","🦑":"art/1f991.svg","🥦":"art/1f966.svg","🦜":"art/1f99c.svg","🏀":"art/1f3c0.svg","🏸":"art/1f3f8.svg","🏓":"art/1f3d3.svg","🪓":"art/1fa93.svg","🪚":"art/1fa9a.svg","🏐":"art/1f3d0.svg","⚽":"art/26bd.svg","🎾":"art/1f3be.svg","🪛":"art/1fa9b.svg","⛏️":"art/26cf.svg","🔧":"art/1f527.svg","🔨":"art/1f528.svg","🛌":"art/1f6cc.svg","🏠":"art/1f3e0.svg","🖥️":"art/1f5a5.svg","🥣":"art/1f963.svg","🔗":"art/1f517.svg","🛒":"art/1f6d2.svg","🪴":"art/1fab4.svg","📅":"art/1f4c5.svg","🪥":"art/1faa5.svg","🪙":"art/1fa99.svg","🛞":"art/1f6de.svg","📚":"art/1f4da.svg","⚙":"art/2699.svg","🧠":"art/1f9e0.svg","✉":"art/2709.svg","↗":"art/2197.svg","©":"art/a9.svg","🃏":"art/1f0cf.svg","👤":"art/1f464.svg","🎨":"art/1f3a8.svg","🔊":"art/1f50a.svg","🪁":"art/1fa81.svg","●":"art/shape-0.svg","■":"art/shape-1.svg","▲":"art/shape-2.svg","◆":"art/shape-3.svg","★":"art/shape-4.svg","✚":"art/shape-5.svg"};
const key=value=>String(value).replace(/\uFE0F/g,'');
const lookup=new Map(Object.entries(pictures).map(([symbol,url])=>[key(symbol),url]));
function html(value){const url=lookup.get(key(value));return '<span class="game-picture'+(url?' has-art':'')+'">'+(url?'<img class="game-illustration" src="'+url+'" alt="" aria-hidden="true" width="144" height="144" draggable="false">':'')+'<span class="picture-text">'+esc(value)+'</span></span>'}
document.addEventListener('error',e=>{if(e.target.matches?.('img.game-illustration'))e.target.parentElement.classList.remove('has-art')},true);
window.MindGardenArt={html,source:value=>lookup.get(key(value))||null};
})();

;
/* player-preferences.js */
/* Preferences belong to stable local profile IDs, so renaming keeps them. */
(function(){
const defaults={lang:'en',timed:0,speak:0,mode:'auto',th:'cream',motionMode:'gentle',motionExplicit:false,still:0,homeNature:true,sceneLight:'blossom',sceneDark:'blossom',photolight:false,photodark:false,heroLight:null,heroDark:null,motionPrevious:'gentle',soundscape:{music:'strings',nature:'garden',master:45,musicVolume:55,natureVolume:35,horn:false},snd:1,fs:0,textScale:null,bouquetRotation:true,quietGames:true,v4IntroSeen:false,hc:0,cb:0,lh:0,brk:1,bn:15};
const keys=Object.keys(defaults),copy=x=>JSON.parse(JSON.stringify(x));
function capture(){const out={};for(const k of keys)out[k]=copy(save[k]===undefined?defaults[k]:save[k]);return out}
if(!save.profilePrefsMigrated){me().preferences=capture();save.profilePhotoOwner=save.cp;save.profilePrefsMigrated=true}
function restore(){const pref=me().preferences||copy(defaults);for(const k of keys)save[k]=copy(pref[k]===undefined?defaults[k]:pref[k]);me().preferences=capture()}
const originalPersist=window.persist;window.persist=function(){me().preferences=capture();return originalPersist()};
const originalLoad=window.load;window.load=function(){originalLoad();restore();window.MindGardenSound?.restorePreferences();applyPrefs();window.dispatchEvent(new Event('gardenPlayerChange'))};restore();applyPrefs();persist();
window.MindGardenPlayerPreferences={capture,restore,defaults:copy(defaults)};
})();

;
/* upgrade.js */
/* Mind Garden v2: optional daily route, difficulty selection and new games.
   All existing games, local player data, garden and settings are retained. */
(function(){
 const extra={
  shopping:{n:'Shopping basket',d:'Remember the items on your shopping list.',ic:'🛒',g:0},
  routine:{n:'Daily routines',d:'Which everyday task comes next?',ic:'☀️',g:2},
  related:{n:'Word connections',d:'Find a word with a related meaning.',ic:'🔗',g:5},
  calendar:{n:'Calendar day',d:'Work out the next day of the week.',ic:'📅',g:3},
  money:{n:'Market change',d:'Practise everyday shopping calculations.',ic:'🪙',g:1},
  story:{n:'Short story memory',d:'Listen or read, then remember a detail.',ic:'📖',g:0},
  visual:{n:'Garden detective',d:'Find a special flower in the garden.',ic:'🌺',g:4},
  order:{n:'Picture order',d:'Which picture completes the pattern?',ic:'🧩',g:3},
  place:{n:'Where does it belong?',d:'Match everyday objects to a place.',ic:'🏠',g:2}
 };
 Object.assign(MG,extra);
 renderHome();
 const D=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const pairs=[['sun','bright'],['night','dark'],['flower','garden'],['book','reading'],['bird','nest'],['rain','umbrella'],['key','door'],['cup','tea'],['doctor','clinic'],['train','station'],['pillow','bed'],['spoon','soup']];
 const routines=[['Wake up','Brush your teeth','Eat breakfast','Go for a walk'],['Wash vegetables','Cut vegetables','Cook the meal','Eat together'],['Prepare soil','Plant seeds','Water the garden','Watch flowers grow'],['Put clothes in washer','Add detergent','Start washing','Hang clothes to dry']];
 const places=[['🛏️','Bedroom','Kitchen','Garden','Garage'],['🍳','Kitchen','Bedroom','Bathroom','Garden'],['🪴','Garden','Bathroom','Garage','Bedroom'],['🚗','Garage','Kitchen','Bedroom','Bathroom'],['🪥','Bathroom','Garden','Garage','Kitchen'],['🛋️','Living room','Garden','Garage','Bathroom']];
 function choices(question,answers,correct,ok,bad){
  const opts=shuffle(answers.map((x,i)=>({v:x,h:x})));$('mmsg').textContent=question;
  ask('',opts,correct,ok||'That is right!',bad||'The answer is '+correct+'. You can try again.',1);
  $('mp').querySelector('.gridm').style.setProperty('--c',answers.length>2?2:answers.length);
 }
 function shopping(){let n=Math.min(7,2+Math.floor((mg.difficulty||1)/3)),it=pick(allItems(),n+3),target=it.slice(0,n),answer=target[rnd(0,n-1)],g=mg;
  $('mmsg').textContent='Remember your shopping list.';
  $('mp').innerHTML='<div class="seqline">'+target.map(x=>x.e).join(' ')+'</div>';
  $('mp').insertAdjacentHTML('beforeend','<div class="row"><button class="btn main" id="shoppingReady">'+(save.lang==='zh'?'我准备好了':'I am ready')+'</button></div>');
  $('shoppingReady').onclick=()=>{if(mg!==g||paused)return;$('mmsg').textContent='Which item was on the shopping list?';ask('',shuffle([answer,...it.slice(n)]).map(x=>({v:x.e,h:x.e,l:x.n})),answer.e,'You remembered '+answer.n+'!','It was '+answer.n+'. Try again next time.');};
 }
 function routine(){const r=routines[rnd(0,routines.length-1)],step=rnd(1,3),answer=r[step];let options=shuffle([answer,...pick(routines.flat().filter(x=>!r.includes(x)),3)]);choices('What comes next after '+r[step-1]+'?',options,answer)}
 function related(){const p=pairs[rnd(0,pairs.length-1)],ans=p[1],opts=[ans,...pick(pairs.filter(x=>x!==p).map(x=>x[1]),3)];choices('Which word goes with “'+p[0]+'”?',opts,ans)}
 function calendar(){const day=rnd(0,6),offset=rnd(1,Math.min(6,1+Math.floor((mg.difficulty||1)/3))),ans=D[(day+offset)%7];choices('If today is '+D[day]+', what day is '+offset+' day'+(offset>1?'s':'')+' later?',D.filter(x=>x===ans).concat(pick(D.filter(x=>x!==ans),3)),ans)}
 function money(){const hi=(mg.difficulty||1)<6?20:100,price=rnd(2,hi-2),paid=hi,ans=paid-price;const opts=[ans,...[ans+1,ans-1,ans+2,ans-2,ans+5].filter(x=>x>=0&&x!==ans).slice(0,3)].map(String);choices('An item costs $'+price+'. You pay $'+paid+'. How much change?',opts,String(ans))}
 function story(){const stories=[{s:'Lily visited the market and bought three oranges. Afterwards she watered her flowers.',q:'What did Lily buy?',a:'Oranges',d:['Bread','Apples','Rice']},{s:'George took the blue bus to the library. He borrowed a book about birds.',q:'Where did George go?',a:'Library',d:['Hospital','Market','Park']},{s:'Mei drank tea after breakfast and then called her sister.',q:'Who did Mei call?',a:'Her sister',d:['Her neighbour','Her doctor','Her friend']},{s:'On Tuesday, Ben planted red roses in his garden.',q:'What colour were the roses?',a:'Red',d:['Blue','Yellow','White']}];const st=stories[rnd(0,stories.length-1)],g=mg;$('mmsg').textContent='Read or listen to the story.';$('mp').innerHTML='<div class="seqline" style="font-size:1.5em;line-height:1.6">'+esc(st.s)+'</div><button class="btn" id="readStory">🔊 Read aloud</button>';$('readStory').onclick=()=>say(st.s);
  $('mp').insertAdjacentHTML('beforeend','<div class="row"><button class="btn main" id="storyReady">'+(save.lang==='zh'?'回答问题':'Answer the question')+'</button></div>');$('storyReady').onclick=()=>{if(mg===g&&!paused)choices(st.q,[st.a,...st.d],st.a)};}
 function visual(){const n=Math.min(12,4+Math.floor((mg.difficulty||1)/2)),flowers=['🌷','🌻','🌹','🌼','🌺','🌸','🌿'],answer=flowers[rnd(0,5)],d=flowers.filter(x=>x!==answer)[rnd(0,flowers.length-2)],a=Array(n-1).fill(d);a.splice(rnd(0,n-1),0,answer);$('mmsg').textContent='Find the different flower.';ask('',a.map((e,i)=>({v:i,h:e})),String(a.indexOf(answer)),'You spotted it!','Look for the flower that is different.');$('mp').querySelector('.gridm').style.setProperty('--c',Math.min(4,n));}
 function order(){const seq=['🌱','🌿','🌷','🌻'],end=rnd(1,3),a=seq[end];choices('What comes next? '+seq.slice(0,end).join(' → ')+' → ?',seq,a)}
 function place(){const p=places[rnd(0,places.length-1)];choices('Where would you usually find '+p[0]+'?',p.slice(1),p[1])}
 const gens={shopping,routine,related,calendar,money,story,visual,order,place};
 // Expose these game generators for the existing mini-game dispatcher.
 window.MindGardenExtras=gens;
 window.mgDifficulty=1;
 window.chooseMiniLevel=function(type){
  const p=me();p.levels=p.levels||{};const best=p.levels[type]||1;
  const opts=Array.from({length:15},(_,i)=>'<option value="'+(i+1)+'"'+(best===i+1?' selected':'')+'>Level '+(i+1)+(i+1===best?' (suggested)':'')+'</option>').join('');
  overlay('<h2>'+esc(MG[type].n)+'</h2><p>'+esc(MG[type].d)+'</p><label class="lab">Difficulty (all levels are available)<select id="difficultyChoice">'+opts+'</select></label><p class="tip">Choose a comfortable challenge. There is no penalty for selecting an easier level.</p><div class="row"><button class="btn main" id="startExtra">Play game</button><button class="btn" id="cancelExtra">Cancel</button></div>');
  $('startExtra').onclick=()=>{window.mgDifficulty=Number($('difficultyChoice').value);startMG(type)};
  $('cancelExtra').onclick=closeOv;
 };
 const originalDone=mdone;
 mdone=function(){const g=mg,p=me();if(g&&g.ok>=Math.ceil(g.R*.75)){p.levels=p.levels||{};p.levels[g.t]=Math.min(15,Math.max(p.levels[g.t]||1,(g.difficulty||1)+1));persist()}originalDone();if(g){const row=$('ma')?.parentElement;if(row&&(g.difficulty||1)<15){const next=document.createElement('button');next.className='btn main';next.id='miniNextLevel';next.textContent=save.lang==='zh'?'下一级':'Next level';next.onclick=()=>{window.mgDifficulty=(g.difficulty||1)+1;startMG(g.t)};row.prepend(next)}if($('ma'))$('ma').onclick=()=>{window.mgDifficulty=g.difficulty||1;startMG(g.t)}}};
 // Daily session: one round of each of three complementary games.
 const home=document.getElementById('home');
 const day=document.createElement('div');day.id='dailyStart';day.innerHTML='<button class="btn main" id="todayPlay" style="width:100%;font-size:1.2em;min-height:78px">🌻 Start today’s gentle activities</button><p class="tip" style="margin:5px auto 16px">Memory, attention and everyday thinking · Play at your own pace</p>';
 home.insertBefore(day,document.getElementById('hero'));
 $('todayPlay').onclick=()=>{const types=['shopping','visual','calendar','related','routine','story'];const dayIndex=Math.floor(Date.now()/86400000),type=types[dayIndex%types.length];window.chooseMiniLevel(type)};
 const style=document.createElement('style');style.textContent='#dailyStart{margin:12px auto 10px;max-width:720px} #dailyStart .btn.main{box-shadow:0 4px 0 var(--sunink)}.mp-board{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.mp-tile{min-height:85px;font-size:2.5em;border:3px solid var(--back);border-radius:16px;background:var(--panel);color:var(--ink)}.mp-tile:disabled{opacity:.65}.mp-tile.revealed{background:var(--sun)}@media(max-width:620px){.mp-board{grid-template-columns:repeat(4,minmax(0,1fr))!important}.mp-tile{min-width:0}}@media(max-width:620px){.mp-tile{min-height:70px;font-size:2em}}';document.head.appendChild(style);
})();

;
/* new-games.js */
/* Mind Garden: five untimed activities, accessible by tap or keyboard. */
(function(){
'use strict';
const $=id=>document.getElementById(id),T=(en,zh)=>save.lang==='zh'?zh:en;
const specs={
 jigsaw:['Garden picture puzzles','花园拼图','Swap large picture pieces to complete a garden scene.','交换大图块，完成花园图片。','🖼️',3],
 dominoes:['Gentle dominoes','轻松多米诺','Match the dots and take turns with a garden friend.','匹配点数，与花园伙伴轮流出牌。','🎲',2],
 bingo:['Picture bingo','图片宾果','Match called pictures, solo or in an online room.','匹配叫到的图片，可单人或在线一起玩。','🌈',4],
 pathways:['Garden pathways','花园小径','Turn path tiles to connect the gate to the flower.','旋转路径方块，连接入口与花朵。','🌻',2],
 sayings:['Complete the saying','接下半句','Complete familiar sayings and discover their meaning.','补全熟悉的谚语，了解其中的含义。','💬',5]
};
for(const [key,s]of Object.entries(specs))MG[key]={get n(){return T(s[0],s[1])},get d(){return T(s[2],s[3])},ic:s[4],g:s[5]};
const pictures=[['🌻','Sunflower','向日葵'],['🍎','Apple','苹果'],['🐦','Bird','小鸟'],['🐶','Dog','小狗'],['🌈','Rainbow','彩虹'],['🚲','Bicycle','自行车'],['🌷','Tulip','郁金香'],['🍓','Strawberry','草莓'],['🐢','Turtle','乌龟'],['🏡','House','房子'],['🦋','Butterfly','蝴蝶'],['🍊','Orange','橙子'],['☕','Tea','茶'],['🌹','Rose','玫瑰'],['🚂','Train','火车'],['🥕','Carrot','胡萝卜']];
function random(seed){let x=seed>>>0;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
function mix(a,r=Math.random){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function bingoItems(seed,round=1,count=9){return mix(pictures,random((seed^Math.imul(round,0x9E3779B1))>>>0)).slice(0,count)}
function bitCount(v){let n=0;for(;v;v>>>=1)n+=v&1;return n}
function tile(a,b){return '<span class="domino" aria-hidden="true"><span>'+pips(a)+'</span><span>'+pips(b)+'</span></span>'}
function pips(n){const positions=[[false,false,false,false,false,false,false,false,false],[false,false,false,false,true,false,false,false,false],[true,false,false,false,false,false,false,false,true],[true,false,false,false,true,false,false,false,true],[true,false,true,false,false,false,true,false,true],[true,false,true,false,true,false,true,false,true],[true,false,true,true,false,true,true,false,true]][n];return '<span class="pip-grid">'+positions.map(v=>'<i'+(v?' class="dot"':'')+'></i>').join('')+'</span>'}
const rot=m=>((m<<1)&15)|((m>>3)&1),dir=[[-1,0,1,4],[0,1,2,8],[1,0,4,1],[0,-1,8,2]];
function pathPuzzle(n,r=Math.random){const answer=Array(n*n).fill(0),path=[0];let row=0,col=0;while(row<n-1||col<n-1){if(col<n-1&&(row===n-1||r()<.5))col++;else row++;path.push(row*n+col)}
 for(let i=0;i<path.length;i++){const p=path[i],prev=i?path[i-1]:-1,next=i<path.length-1?path[i+1]:-1;answer[p]=(i===0?8:p-prev===1?8:1)|(next<0?2:next-p===1?2:4)}
 const cells=answer.map(v=>{let m=v||([3,5,6,9,10,12][Math.floor(r()*6)]);for(let i=Math.floor(r()*4);i>0;i--)m=rot(m);return m});if(pathConnected(cells,n)){cells[0]=rot(cells[0]);if(pathConnected(cells,n))cells[0]=rot(cells[0])}return{n,answer,path,cells};}
function pathConnected(cells,n){if(!(cells[0]&8))return false;const seen=new Set([0]),queue=[0];while(queue.length){const p=queue.shift(),row=Math.floor(p/n),col=p%n;if(p===n*n-1&&(cells[p]&2))return true;for(const [dr,dc,bit,other]of dir){const rr=row+dr,cc=col+dc,q=rr*n+cc;if(rr>=0&&rr<n&&cc>=0&&cc<n&&(cells[p]&bit)&&(cells[q]&other)&&!seen.has(q)){seen.add(q);queue.push(q)}}}return false}
function dominoState(level,r=Math.random){const max=level===1?4:6,all=[];for(let a=0;a<=max;a++)for(let b=a;b<=max;b++)all.push([a,b]);const deck=mix(all,r),size=level===1?4:level===2?6:7,first=deck.pop();return {hand:deck.splice(0,size),cpu:deck.splice(0,size),stock:deck,chain:[first],left:first[0],right:first[1],turn:'you',selected:-1,passes:0}}
function fits(t,end){return t.includes(end)}
function placeDomino(d,hand,index,side){const t=hand[index],end=d[side];if(!t||!fits(t,end))return false;const other=t[0]===end?t[1]:t[0];hand.splice(index,1);if(side==='left')d.chain.unshift([other,end]);else d.chain.push([end,other]);d[side]=other;d.passes=0;return true}
const sayings={
 en:[['A journey of a thousand miles begins with','a single step',['a loud voice','a perfect map','a long sleep'],'Start with one manageable action.'],['Where there is a will, there is','a way',['a cloud','a clock','a price'],'Determination helps us find a solution.'],['Practice makes','perfect',['winter','silence','trouble'],'Skills improve with repeated practice.'],['Better late than','never',['early','tomorrow','always'],'Doing something late can be better than not doing it.'],['Two heads are better than','one',['three','none','ten'],'Working together can bring more ideas.'],['Look before you','leap',['sleep','sing','laugh'],'Think about a choice before acting.'],['A stitch in time saves','nine',['two','four','twenty'],'Fixing a small problem early can prevent a bigger one.'],['Every cloud has a silver','lining',['handle','ticket','button'],'Difficult situations can still contain something hopeful.'],['Many hands make light','work',['rain','music','shoes'],'Sharing a task can make it easier.'],['Actions speak louder than','words',['bells','trains','waves'],'What we do matters more than what we promise.'],['Slow and steady wins the','race',['weather','road','garden'],'Patient, consistent effort can succeed.'],['When in Rome, do as the Romans','do',['sing','sleep','travel'],'Respect the customs of the place you visit.']],
 zh:[['一分耕耘，','一分收获',['一路顺风','一心一意','一清二楚'],'付出努力，才能有所收获。'],['千里之行，','始于足下',['百花齐放','风和日丽','四海为家'],'远大的目标，从眼前的一小步开始。'],['三个臭皮匠，','顶个诸葛亮',['更上一层楼','一去不复返','岁月不待人'],'大家一起动脑筋，往往能想出好办法。'],['活到老，','学到老',['跑得快','起得早','看得远'],'无论年纪多大，都可以继续学习。'],['有志者，','事竟成',['天自晴','花更红','水长流'],'有目标并坚持努力，就有机会取得成功。'],['熟能生巧，','勤能补拙',['春暖花开','瓜熟蒂落','知足常乐'],'多练习、肯努力，可以提高本领。'],['路遥知马力，','日久见人心',['春来花满园','独木不成林','岁月不留人'],'经过时间与事情的考验，才能更了解一个人。'],['良言一句三冬暖，','恶语伤人六月寒',['春风吹又生','近水楼台先得月','千金难买好心情'],'友善的话使人温暖，伤人的话使人难过。'],['众人拾柴，','火焰高',['春光好','月儿圆','道路宽'],'大家一起出力，事情更容易做好。'],['滴水穿石，','非一日之功',['百花争艳','四季如春','一路平安'],'持续的小努力，经过时间也能产生大变化。'],['赠人玫瑰，','手有余香',['水到渠成','心想事成','四海一家'],'帮助别人，自己也能感到快乐。'],['少壮不努力，','老大徒伤悲',['百年树人','花好月圆','千里同风'],'珍惜时间，努力做好眼前的事。']]
};
let active=null;
const oldChoose=window.chooseMiniLevel,oldStart=window.startMG,oldMenu=$('bMn').onclick,oldPause=$('bPause2').onclick;
function has(k){return Object.hasOwn(specs,k)}
window.chooseMiniLevel=function(k){if(!has(k))return oldChoose(k);const levels=k==='jigsaw'?[T('6 large pieces','6块大拼图'),T('12 pieces','12块拼图'),T('24 pieces','24块拼图')]:k==='pathways'?[T('3 × 3 path','3 × 3路径'),T('4 × 4 path','4 × 4路径'),T('5 × 5 path','5 × 5路径')]:k==='sayings'?[T('4 sayings · 2 choices','4道谚语 · 2个选项'),T('6 sayings · 4 choices','6道谚语 · 4个选项'),T('8 sayings · 6 choices','8道谚语 · 6个选项')]:k==='bingo'?[T('9 pictures','9张图片'),T('12 pictures','12张图片'),T('16 pictures','16张图片')]:[T('Small set · 0–4 dots','小组 · 0至4点'),T('Classic set · 0–6 dots','标准组 · 0至6点'),T('Larger hand · 0–6 dots','更多手牌 · 0至6点')];
 overlay('<h2>'+MG[k].n+'</h2><p>'+MG[k].d+'</p><label class="lab">'+T('Choose your challenge','选择难度')+'<select id="newGameLevel">'+levels.map((x,i)=>'<option value="'+(i+1)+'"'+((me().levels?.[k]||1)===i+1?' selected':'')+'>'+x+'</option>').join('')+'</select></label><p>'+T('No countdown. Hints and pauses are always welcome.','没有倒计时。随时可以使用提示或暂停。')+'</p><div class="row"><button class="btn main" id="newGameStart">'+T('Play game','开始游戏')+'</button>'+(k==='bingo'?'<button class="btn" id="newGameOnline">'+T('Play bingo together online','在线一起玩宾果')+'</button>':'')+'<button class="btn" id="newGameCancel">'+T('Cancel','取消')+'</button></div>');
 $('newGameStart').onclick=()=>start(k,+$('newGameLevel').value);$('newGameCancel').onclick=closeOv;if($('newGameOnline'))$('newGameOnline').onclick=()=>{window.MindGardenPreferredRoomMode='bingo9';closeOv();$('bOnline').click()};};
window.startMG=function(k){if(has(k))return start(k,Math.min(3,window.mgDifficulty||1));active=null;return oldStart(k)};
function start(k,level){active={type:k,level:Math.max(1,Math.min(3,level)),started:Date.now(),pausedMs:0,finished:false,moves:0,hints:0,undo:[],notice:'',paused:false};const g=active;mg=null;paused=false;me().lg={k};persist();closeOv();show('mini');$('hLv2').textContent=MG[k].n;$('hRound').textContent=T('At your pace','按照您的节奏');
 if(k==='jigsaw'){g.cols=level===1?3:4;g.rows=level===1?2:level===2?3:6;g.cells=mix(Array.from({length:g.cols*g.rows},(_,i)=>i));if(g.cells.every((v,i)=>v===i))[g.cells[0],g.cells[1]]=[g.cells[1],g.cells[0]];g.selected=-1;g.image=['garden-day.webp','garden-meadow-day.webp','garden-pond-day.webp'][Math.floor(Math.random()*3)]}
 if(k==='pathways')Object.assign(g,pathPuzzle(level+2));
 if(k==='dominoes')Object.assign(g,dominoState(level));
 if(k==='bingo'){g.count=[9,12,16][level-1];g.items=bingoItems(Math.floor(Math.random()*0xffffffff),1,g.count);g.order=mix(Array.from({length:g.count},(_,i)=>i));g.called=1;g.marked=new Set()}
 if(k==='sayings'){g.questions=mix(sayings[save.lang==='zh'?'zh':'en']).slice(0,[4,6,8][level-1]).map(q=>({q:q[0],a:q[1],options:mix([q[1],...mix([...new Set([...q[2],...sayings[save.lang==='zh'?'zh':'en'].map(x=>x[1]).filter(x=>x!==q[1])])]).slice(0,[1,3,5][level-1])]),ex:q[3]}));g.index=0;g.correct=0;g.answered=false;g.hidden=[]}
 render();window.scrollTo(0,0);}
function finish(score,total,message){const g=active;if(!g||g.finished)return;g.finished=true;const secs=Math.max(1,Math.round((Date.now()-g.started-g.pausedMs)/1000));logPlay(g.type,score/Math.max(1,total),secs,{level:g.level});award(score,null,secs);me().levels=me().levels||{};me().levels[g.type]=Math.min(3,Math.max(me().levels[g.type]||1,g.level));persist();win();
 overlay('<h2>'+T('Lovely work!','做得真棒！')+'</h2><p>'+esc(message)+'</p><p>'+T('Your activity and garden growth are saved.','您的活动与花园成长已保存。')+'</p><div class="row"><button class="btn main" id="newAgain">'+T('Play again','再玩一次')+'</button><button class="btn" id="newMenu">'+T('All Games','所有游戏')+'</button></div>');addGrow();addBreak();if(g.level<3){const next=document.createElement('button');next.id='newNextLevel';next.className='btn main';next.textContent=T('Next level','下一级');next.onclick=()=>start(g.type,g.level+1);$('newAgain').before(next)}$('newAgain').onclick=()=>start(g.type,g.level);$('newMenu').onclick=exit;window.MindGardenDaily?.complete(g.type);}
function exit(){active=null;mg=null;paused=false;if(window.speechSynthesis)speechSynthesis.cancel();toHome();window.MindGardenDashboard?.library()}
$('bMn').onclick=function(){if(!active)return oldMenu.call(this);if(active.finished)return exit();overlay('<h2>'+T('Leave this game?','退出本局游戏？')+'</h2><p>'+T('This unfinished game will not be added to your scores.','本局尚未完成，不会加入成绩记录。')+'</p><div class="row"><button class="btn" id="newKeep">'+T('Keep playing','继续游戏')+'</button><button class="btn" id="newLeave">'+T('Leave game','退出游戏')+'</button></div>');pauseClock();$('newKeep').onclick=()=>{resumeClock();closeOv()};$('newLeave').onclick=exit;};
function pauseClock(){if(active&&!active.paused){active.paused=true;active.pauseAt=Date.now()}}
function resumeClock(){if(active?.paused){active.pausedMs+=Date.now()-active.pauseAt;active.paused=false}}
$('bPause2').onclick=function(){if(!active)return oldPause.call(this);if(active.finished)return;pauseClock();overlay('<h2>'+T('Paused','已暂停')+'</h2><p>'+T('Rest as long as you like.','想休息多久都可以。')+'</p><div class="row"><button class="btn main" id="newResume">'+T('Keep playing','继续游戏')+'</button><button class="btn" id="newPauseLeave">'+T('Leave game','退出游戏')+'</button></div>');$('newResume').onclick=()=>{resumeClock();closeOv()};$('newPauseLeave').onclick=exit;};
function button(id,en,zh,disabled=false){return '<button type="button" class="btn" id="'+id+'"'+(disabled?' disabled':'')+'>'+T(en,zh)+'</button>'}
function render(focus){const g=active;if(!g||g.finished)return;const renderers={jigsaw:drawJigsaw,pathways:drawPath,dominoes:drawDomino,bingo:drawBingo,sayings:drawSaying};$('mp').innerHTML='<section class="new-game" translate="no">'+renderers[g.type](g)+'<p class="new-notice" id="newNotice" role="status" aria-live="polite">'+esc(g.notice)+'</p></section>';wire(g);if(focus)document.querySelector(focus)?.focus({preventScroll:true});}
function pictureSvg(g,p){const w=g.cols*200,h=g.rows*160,x=(p%g.cols)*200,y=Math.floor(p/g.cols)*160;return '<svg viewBox="'+[x,y,200,160].join(' ')+'" aria-hidden="true"><image href="'+g.image+'" width="'+w+'" height="'+h+'" preserveAspectRatio="xMidYMid slice"/></svg>'}
function drawJigsaw(g){$('mmsg').textContent=T('Tap one piece, then tap its destination to swap them.','点选一块拼图，再点选目标位置，交换两块拼图。');return '<p>'+T('Pieces in place: ','已归位：')+g.cells.filter((x,i)=>x===i).length+' / '+g.cells.length+'</p><details class="puzzle-reference"><summary>'+T('Show completed picture','查看完整图片')+'</summary><svg viewBox="0 0 '+g.cols*200+' '+g.rows*160+'" aria-label="'+T('Completed picture','完整图片')+'"><image href="'+g.image+'" width="'+g.cols*200+'" height="'+g.rows*160+'" preserveAspectRatio="xMidYMid slice"/></svg></details><div class="picture-grid" style="--cols:'+g.cols+'">'+g.cells.map((p,i)=>'<button class="picture-piece'+(g.selected===i?' selected':'')+(g.hint?.includes(i)?' hinted':'')+'" data-piece="'+i+'" aria-pressed="'+(g.selected===i)+'" aria-label="'+T('Piece '+(p+1)+', position '+(i+1),'图块'+(p+1)+'，位置'+(i+1))+'">'+pictureSvg(g,p)+'<span>'+(i+1)+'</span></button>').join('')+'</div><div class="new-actions">'+button('newHint','Hint','提示')+button('newUndo','Undo swap','撤销交换',!g.undo.length)+'</div>'}
function pathSvg(mask){return '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="'+[[1,'M50 50V0'],[2,'M50 50H100'],[4,'M50 50V100'],[8,'M50 50H0']].filter(([b])=>mask&b).map(x=>x[1]).join(' ')+'" stroke="currentColor" stroke-width="17" fill="none" stroke-linecap="round"/><circle cx="50" cy="50" r="8" fill="currentColor"/></svg>'}
function drawPath(g){$('mmsg').textContent=T('Tap a tile to turn it clockwise. Connect the gate to the flower.','点击方块顺时针旋转，连接入口与花朵。');return '<p>'+T('Gate: top left → Flower: bottom right.','入口：左上角 → 花朵：右下角。')+'</p><div class="path-grid" style="--cols:'+g.n+'">'+g.cells.map((mask,i)=>'<button class="path-tile'+(g.hint===i?' hinted':'')+'" data-path="'+i+'" aria-label="'+T('Row '+(Math.floor(i/g.n)+1)+', column '+(i%g.n+1)+'. Connections: ','第'+(Math.floor(i/g.n)+1)+'行，第'+(i%g.n+1)+'列。连接：')+[[1,T('up','上')],[2,T('right','右')],[4,T('down','下')],[8,T('left','左')]].filter(([b])=>mask&b).map(x=>x[1]).join(', ')+'">'+pathSvg(mask)+(i===0?'<span>🚪</span>':i===g.cells.length-1?'<span>🌻</span>':'')+'</button>').join('')+'</div><div class="new-actions">'+button('newHint','Help with one tile','提示一块')+button('newUndo','Undo turn','撤销旋转',!g.undo.length)+'</div>'}
function dominoSum(hand){return hand.flat().reduce((a,b)=>a+b,0)}
function hasMove(g,hand){return hand.some(t=>fits(t,g.left)||fits(t,g.right))}
function drawDomino(g){$('mmsg').textContent=T('Choose a domino, then choose an end with the same number of dots.','选择一张骨牌，再选择点数相同的一端。');return '<p>'+T('Garden friend: ','花园伙伴：')+g.cpu.length+T(' tiles · Draw pile: ','张牌 · 牌堆：')+g.stock.length+'</p><div class="domino-chain" aria-label="'+T('Domino chain','骨牌链')+'">'+g.chain.map(t=>'<span role="img" aria-label="'+t[0]+' / '+t[1]+'">'+tile(...t)+'</span>').join('')+'</div><p class="domino-ends">'+T('Open ends: ','两端点数：')+g.left+' ← → '+g.right+'</p><h3>'+T('Your hand','您的手牌')+'</h3><div class="domino-hand">'+g.hand.map((t,i)=>'<button class="domino-choice'+(g.selected===i?' selected':'')+(g.hint===i?' hinted':'')+'" data-domino="'+i+'" aria-pressed="'+(g.selected===i)+'" aria-label="'+T('Domino ','骨牌')+t[0]+' / '+t[1]+'"'+(g.turn!=='you'?' disabled':'')+'>'+tile(...t)+'</button>').join('')+'</div><div class="new-actions">'+(g.turn==='cpu'?button('dominoCPU',"Garden friend’s turn",'花园伙伴的回合'):button('dominoLeft','Place on left','放在左端',g.selected<0)+button('dominoRight','Place on right','放在右端',g.selected<0)+button('dominoDraw',g.stock.length?'Draw one tile':'Pass',g.stock.length?'摸一张牌':'跳过',hasMove(g,g.hand))+button('newHint','Hint','提示'))+'</div>'}
function bingoBoard(items,order,called,marked,attr='data-bingo'){return '<div class="bingo-grid" style="--cols:'+(order.length===9?3:4)+'">'+order.map(i=>{const p=items[i],done=marked.has(i);return '<button class="bingo-card'+(done?' marked':'')+'" '+attr+'="'+i+'" aria-pressed="'+done+'"'+(done?' disabled':'')+'><span class="bingo-picture" aria-hidden="true">'+gamePicture(p[0])+'</span>'+(done?'<span class="bingo-check" aria-hidden="true">✓</span>':'')+'<small>'+T(p[1],p[2])+'</small></button>'}).join('')+'</div>'}
function drawBingo(g){$('mmsg').textContent=T('Match the called picture. Complete your whole card at your own pace.','找出叫到的图片，按照自己的节奏完成整张卡片。');const p=g.items[g.called-1];return '<div class="bingo-call" role="status"><span class="bingo-picture" aria-hidden="true">'+gamePicture(p[0])+'</span><strong>'+T(p[1],p[2])+'</strong><small>'+g.called+' / '+g.count+'</small></div>'+bingoBoard(g.items,g.order,g.called,g.marked)+'<div class="new-actions">'+button('bingoNext','Call next picture','叫下一张图片',!g.marked.has(g.called-1)||g.called===g.count)+button('bingoSpeak','Read picture name','朗读图片名称',!window.speechSynthesis)+button('newHint','Hint','提示')+'</div>'}
function readPicture(p){if(!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(T(p[1],p[2]));u.lang=save.lang==='zh'?'zh-CN':'en-GB';u.rate=.85;speechSynthesis.speak(u)}
function drawSaying(g){const q=g.questions[g.index];$('mmsg').textContent=T('Choose the ending. Read the meaning, then continue when you are ready.','选择下半句，阅读解释，准备好后再继续。');return '<p>'+T('Saying ','第')+(g.index+1)+' / '+g.questions.length+'</p><h2 class="saying-prompt">'+esc(q.q)+' …</h2><div class="saying-options">'+q.options.map((v,i)=>'<button class="btn'+(g.answered&&v===q.a?' correct':'')+'" data-saying="'+i+'"'+(g.answered||g.hidden.includes(i)?' disabled':'')+'>'+esc(v)+(g.answered&&v===q.a?' ✓':'')+'</button>').join('')+'</div>'+(g.answered?'<p class="saying-explanation">'+esc(q.q+' '+q.a)+'. '+esc(q.ex)+'</p>':'')+'<div class="new-actions">'+(g.answered?button('sayingNext',g.index===g.questions.length-1?'Finish':'Next saying',g.index===g.questions.length-1?'完成':'下一题'):button('newHint','Narrow the choices','减少选项',g.hidden.length>0))+'</div>'}
function on(id,fn){if($(id))$(id).onclick=()=>{if(active&&!active.paused&&!active.finished)fn()}}
function wire(g){
 document.querySelectorAll('[data-piece]').forEach(b=>b.onclick=()=>{if(g.paused)return;const i=+b.dataset.piece;if(g.selected<0){g.selected=i;render('[data-piece="'+i+'"]');return}const from=g.selected;g.selected=-1;if(from!==i){g.undo.push(g.cells.slice());[g.cells[from],g.cells[i]]=[g.cells[i],g.cells[from]];g.moves++;g.hint=null}if(g.cells.every((p,j)=>p===j))finish(g.cells.length,g.cells.length,T('Your garden picture is complete.','花园拼图完成了。'));else render('[data-piece="'+i+'"]')});
 document.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>{if(g.paused)return;const i=+b.dataset.path;g.undo.push(g.cells.slice());g.cells[i]=rot(g.cells[i]);g.moves++;g.hint=null;if(pathConnected(g.cells,g.n))finish(g.path.length,g.path.length,T('The gate and flower are connected.','入口与花朵连接起来了。'));else render('[data-path="'+i+'"]')});
 document.querySelectorAll('[data-domino]').forEach(b=>b.onclick=()=>{if(g.paused||g.turn!=='you')return;g.selected=+b.dataset.domino;g.notice=T('Choose left or right to place this tile.','请选择左端或右端放置这张牌。');render('[data-domino="'+g.selected+'"]')});
 for(const side of ['Left','Right'])on('domino'+side,()=>{if(!placeDomino(g,g.hand,g.selected,side.toLowerCase())){g.notice=T('The dots do not match this end. Try the other end or another tile.','点数与这一端不同，请尝试另一端或另一张牌。');render();return}g.moves++;g.selected=-1;g.hint=null;if(!g.hand.length)return finish(1,1,T('You placed all your dominoes!','您的骨牌全部出完了！'));g.turn='cpu';g.notice=T('Ready for your garden friend. Press the turn button when you are ready.','轮到花园伙伴了，准备好后点击回合按钮。');render('#dominoCPU')});
 on('dominoDraw',()=>{if(hasMove(g,g.hand))return;if(g.stock.length){g.hand.push(g.stock.pop());g.notice=T('A new domino has been added to your hand.','您摸到了一张新骨牌。')}else{g.passes++;g.turn='cpu';g.notice=T('You passed. Your garden friend can take a turn.','您已跳过，轮到花园伙伴。')}if(blocked(g))return;render()});
 on('dominoCPU',()=>{if(g.turn!=='cpu')return;while(!hasMove(g,g.cpu)&&g.stock.length)g.cpu.push(g.stock.pop());const playable=g.cpu.map((t,i)=>({i,t})).filter(x=>fits(x.t,g.left)||fits(x.t,g.right));if(g.level===3)playable.sort((a,b)=>(b.t[0]+b.t[1])-(a.t[0]+a.t[1]));const i=playable[0]?.i??-1;if(i>=0){const t=g.cpu[i].slice(),side=fits(t,g.right)?'right':'left';placeDomino(g,g.cpu,i,side);g.notice=T('Your friend played ','伙伴出了')+t.join(' / ')+T('. Your turn.','。轮到您了。');if(!g.cpu.length)return finish(0,1,T('Your garden friend finished first. Thank you for playing together.','花园伙伴先出完了牌，谢谢您一起玩。'))}else{g.passes++;g.notice=T('Your friend passed. Your turn.','花园伙伴跳过，轮到您了。')}g.turn='you';if(!blocked(g))render()});
 document.querySelectorAll('[data-bingo]').forEach(b=>b.onclick=()=>{if(g.paused)return;const i=+b.dataset.bingo;if(i>=g.called){g.notice=T('That picture has not been called yet. Look for the picture above.','这张图片还没有叫到，请找上方的图片。');render();return}g.marked.add(i);if(g.marked.size===g.count)return finish(g.count,g.count,T('Bingo! Your whole card is complete.','宾果！整张卡片完成了。'));g.notice=T('Picture matched. Call the next one when you are ready.','配对成功，准备好后叫下一张图片。');render('#bingoNext')});
 on('bingoNext',()=>{if(g.marked.has(g.called-1)&&g.called<g.count){g.called++;g.notice='';render('#bingoSpeak')}});on('bingoSpeak',()=>readPicture(g.items[g.called-1]));
 document.querySelectorAll('[data-saying]').forEach(b=>b.onclick=()=>{if(g.paused||g.answered)return;const q=g.questions[g.index],good=q.options[+b.dataset.saying]===q.a;g.correct+=good?1:0;g.answered=true;g.notice=good?T('That is the familiar ending.','这就是熟悉的下半句。'):T('Good try. The complete saying and its meaning are below.','试得不错，下方是完整谚语及解释。');render('#sayingNext')});
 on('sayingNext',()=>{if(++g.index===g.questions.length)return finish(g.correct,g.questions.length,T('You explored '+g.questions.length+' sayings.','您完成了'+g.questions.length+'道谚语。'));g.answered=false;g.hidden=[];g.notice='';render('[data-saying="0"]')});
 on('newUndo',()=>{if(g.undo.length){g.cells=g.undo.pop();g.selected=-1;g.hint=null;g.notice=T('Last move undone.','已撤销上一步。');render('#newUndo')}});
 on('newHint',()=>{g.hints++;if(g.type==='jigsaw'){const target=g.cells.findIndex((p,i)=>p!==i),from=g.cells.indexOf(target);g.hint=[target,from];g.notice=T('Swap positions '+(target+1)+' and '+(from+1)+'.','交换位置'+(target+1)+'与'+(from+1)+'。')}
 if(g.type==='pathways'){const i=g.path.find(i=>g.cells[i]!==g.answer[i]);if(i!==undefined){g.undo.push(g.cells.slice());g.cells[i]=g.answer[i];g.hint=i;g.notice=T('One path tile is now facing the right way.','一块路径方块已朝向正确方向。');if(pathConnected(g.cells,g.n))return finish(g.path.length,g.path.length,T('The path is complete, with a little help.','在提示的帮助下，小径完成了。'))}}
 if(g.type==='dominoes'){g.hint=g.hand.findIndex(t=>fits(t,g.left)||fits(t,g.right));g.notice=g.hint<0?T('No matching tile. Draw or pass.','没有匹配的骨牌，请摸牌或跳过。'):T('The highlighted tile fits on the ','标记的骨牌可以放在')+(fits(g.hand[g.hint],g.left)?T('left.','左端。'):T('right.','右端。'))}
 if(g.type==='bingo')g.notice=T('Look for ','请找')+T(g.items[g.called-1][1],g.items[g.called-1][2])+'.';if(g.type==='sayings'){g.hidden=g.questions[g.index].options.map((x,i)=>x!==g.questions[g.index].a?i:-1).filter(i=>i>=0).slice(0,Math.max(0,g.questions[g.index].options.length-2));g.notice=T('Two choices remain.','还剩两个选项。')}render('#newHint')});
}
function blocked(g){if(!g.stock.length&&!hasMove(g,g.hand)&&!hasMove(g,g.cpu)){const a=dominoSum(g.hand),b=dominoSum(g.cpu);finish(a<=b?1:0,1,T('No more moves. Your dots: '+a+'; your friend’s: '+b+'. '+(a<b?'You have the lower total.':a===b?'A friendly draw.':'Your friend has the lower total.'),'没有可出的牌了。您的点数：'+a+'，伙伴：'+b+'。'+(a<b?'您的点数较少。':a===b?'双方平局。':'伙伴的点数较少。')));return true}return false}
window.MindGardenNewGames={has,start,bingoItems,bingoBoard,readPicture,bitCount,rules:{random,mix,pathPuzzle,pathConnected,rot,dominoState,placeDomino,fits,hasMove},get current(){return active}};
})();

;
/* progression.js */
/* Level-based challenges. Difficulty changes content, not the session's round number. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en,$=id=>document.getElementById(id);
const level=n=>Math.max(1,Math.min(15,Math.round(Number(n)||1))),L=()=>level(mg?.difficulty),options=n=>Math.min(6,3+Math.floor((n-1)/3));
const choose=a=>a[rnd(0,a.length-1)],value=x=>({v:String(x),h:esc(x)});
const label=x=>typeof tr==='function'&&save.lang==='zh'?tr(x):x;
function answers(answer,candidates,count=options(L())){const out=[String(answer)];for(const v of shuffle(candidates.map(String)))if(!out.includes(v))out.push(v);return shuffle(out.slice(0,count)).map(value)}
function numeric(answer,count=options(L()),step=1){const out=[answer];for(let d=1;out.length<count;d++)for(const sign of [-1,1]){const n=Number((answer+sign*d*step).toFixed(2));if(n>=0&&!out.includes(n))out.push(n);if(out.length===count)break}return shuffle(out).map(value)}
function question(prompt,opts,answer,top='',numericText=false){$('mmsg').textContent=prompt;ask(top,opts,String(answer),T('That is right!','答对了！'),T('The answer was ','答案是 ')+label(answer)+T('. Keep practising.','。继续练习。'),1);if(numericText)$('mp').querySelectorAll('[data-a],.seqline').forEach(el=>{el.setAttribute('translate','no');el.classList.add('notranslate')});$('mp').querySelector('.gridm:last-child')?.style.setProperty('--c',Math.min(3,opts.length));}
const line=s=>'<div class="seqline" translate="no">'+esc(s)+'</div>';
function numberQuestion(s,a){question(T('Work out the missing number.','算出缺少的数字。'),numeric(a),a,line(s),true)}
const patternFamilies=['add','subtract','multiply','alternating','growing','two-step','fibonacci','interleaved','squares','mixed-cycle','weighted-fibonacci','interleaved-geometric','alternating-growing'];
function pattern(n,random=Math.random){
 n=level(n);const ri=(a,b)=>a+Math.floor(random()*(b-a+1)),low=n<=3?['add']:n<=5?['add','subtract']:n<=7?['multiply','alternating']:n<=10?['growing','two-step','squares']:n<=12?['fibonacci','interleaved','growing']:['weighted-fibonacci','interleaved-geometric','alternating-growing','squares','mixed-cycle'];
 const family=low[ri(0,low.length-1)],a=ri(n>=11?n:1,4+n*2),d=ri(Math.max(1,Math.floor(n/3)),2+n),e=d+ri(1,3+Math.floor(n/3)),q=[];
 const length=['interleaved','interleaved-geometric','alternating-growing','mixed-cycle','two-step'].includes(family)?8:6;
 for(let i=0;i<length;i++){
  if(family==='add')q.push(a+i*d);
  if(family==='subtract')q.push(a+(length-i)*d);
  if(family==='multiply')q.push(a*Math.pow(n<7?2:3,i));
  if(family==='alternating')q.push(i?q[i-1]+(i%2?d:e):a);
  if(family==='growing')q.push(a+i*d+i*(i-1)/2*(1+Math.floor(n/5)));
  if(family==='two-step')q.push(i?(i%2?q[i-1]+d:q[i-1]*2):a);
  if(family==='fibonacci')q.push(i<2?a+i*d:q[i-1]+q[i-2]);
  if(family==='weighted-fibonacci')q.push(i<2?a+i*d:q[i-1]+2*q[i-2]);
  if(family==='interleaved')q.push(i%2?a+30+Math.floor(i/2)*e:a+Math.floor(i/2)*d);
  if(family==='interleaved-geometric')q.push(i%2?(a+30)*Math.pow(2,Math.floor(i/2)):a+Math.floor(i/2)*d);
  if(family==='alternating-growing')q.push(i?q[i-1]+(i%2?d:e)*Math.ceil(i/2):a);
  if(family==='squares')q.push(a+Math.pow(i+1,2)*(1+Math.floor(n/4)));
  if(family==='mixed-cycle')q.push(i?i%3===1?q[i-1]+d:i%3===2?q[i-1]*2:q[i-1]-d:a);
 }
 return{family,shown:q.slice(0,-1),answer:q.at(-1),level:n};
}
window.rNum=function(){const p=pattern(L());mg.patternFamily=p.family;numberQuestion(p.shown.join(' , ')+' , ?',p.answer)};
window.rSum=function(){const n=L(),a=rnd(2+n*2,10+n*n),b=rnd(1,4+n*3),c=rnd(1,n*2),subtract=n>2&&rnd(0,1);if(n>=11){const first=a+b;numberQuestion(a+' + '+b+' − '+c+' = ?',first-c)}else if(n>=7){numberQuestion(a+' + '+b+' + '+c+' = ?',a+b+c)}else if(subtract){numberQuestion((a+b)+' − '+b+' = ?',a)}else numberQuestion(a+' + '+b+' = ?',a+b)};
window.rTbl=function(){const n=L(),a=rnd(2,3+n),b=rnd(2,Math.min(12,3+n)),c=rnd(1,n);if(n>=11)numberQuestion(a+' × '+b+' + '+c+' = ?',a*b+c);else if(n>=7)numberQuestion(a+' × ? = '+a*b,b);else numberQuestion(a+' × '+b+' = ?',a*b)};
window.rAdd=function(){const n=L(),a=rnd(n,10+n*8),b=rnd(1,3+n*3),c=rnd(1,n+1);numberQuestion(n<8?a+' + ? = '+(a+b):a+' + ? + '+c+' = '+(a+b+c),b)};
window.rSub=function(){const n=L(),a=rnd(2,5+n*6),b=rnd(1,3+n*3),c=rnd(1,n+1);numberQuestion(n<8?(a+b)+' − ? = '+a:(a+b+c)+' − ? − '+c+' = '+a,b)};
window.rCnt=function(){const n=L(),step=rnd(2,3+n),steps=n<6?3:n<11?4:5,a=steps*step+rnd(5,15+n*5);const q=Array.from({length:steps},(_,i)=>a-i*step);numberQuestion(q.join(' , ')+' , ?',a-steps*step)};
const timeText=mins=>{mins=(mins%1440+1440)%1440;return String(Math.floor(mins/60)).padStart(2,'0')+':'+String(mins%60).padStart(2,'0')};
window.rTime=function(){const n=L(),start=rnd(0,23)*60+(n<4?0:rnd(0,n<8?3:11)*(n<8?15:5)),delta=rnd(1,n+1)*60+(n<6?0:rnd(1,11)*5),sign=n>=10&&rnd(0,1)?-1:1,a=timeText(start+sign*delta);question(T('Using the 24-hour clock, what time is '+Math.floor(delta/60)+' h '+delta%60+' min '+(sign>0?'later?':'earlier?'),'使用24小时制，'+Math.floor(delta/60)+'小时'+delta%60+'分钟'+(sign>0?'后':'前')+'是几点？'),answers(a,[-60,60,-5,5,30,90].map(d=>timeText(start+sign*delta+d))),a,line(timeText(start)),true)};
window.rClk=function(){const n=L(),step=n<4?30:n<7?15:n<11?5:1,m=rnd(0,60/step-1)*step,h=rnd(1,12),a=h+':'+String(m).padStart(2,'0'),f=(hh,mm)=>((hh+11)%12+1)+':'+String((mm+60)%60).padStart(2,'0');const distractors=[f(h+1,m),f(h-1,m),f(h,m+step),f(h,m-step),f(h+2,m),f(h+3,m)];question(T('What time does the clock show?','时钟显示几点？'),answers(a,distractors),a,'<div class="clock-question">'+clockSvg(h,m)+'</div>',true);};
function ready(top,id,cb){const g=mg;$('mp').innerHTML=top+'<div class="row"><button class="btn main" id="'+id+'">'+T('I am ready','我准备好了')+'</button></div>';$('mmsg').textContent=T('Remember these pictures. Continue when you are ready.','记住这些图片，准备好后继续。');$(id).onclick=()=>{if(mg===g&&!paused)cb()}}
window.rRem=function(){const n=L(),count=1+Math.floor((n-1)/4),it=pick(allItems(),count+options(n)),target=it.slice(0,count),at=rnd(0,count-1),a=target[at];ready(gamePictureLine(target.map(x=>x.e)),'memoryReady',()=>question(T('Which picture was in position '+(at+1)+'?','第'+(at+1)+'个位置是什么图片？'),shuffle([a,...it.slice(count,count+options(n)-1)]).map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e))};
// Semantically related choices make recognition harder without making text or pictures smaller.
function pictureChoices(n){const pool=allItems(),min=Math.min(8,2+Math.floor(n/3)),eligible=pool.filter(x=>x.n.length>=min),a=choose(eligible.length?eligible:pool);const same=Object.values(DECKS).map(d=>d.map(P)).find(d=>d.some(x=>x.e===a.e))||pool;const others=n>=8?same.filter(x=>x.e!==a.e):pool.filter(x=>x.e!==a.e);return shuffle([a,...pick(others,options(n)-1)]).map(x=>({...x,target:x.e===a.e}))}
window.rPic=function(){const it=pictureChoices(L()),a=it.find(x=>x.target);question(T('Which picture matches the word?','哪张图片与词语相符？'),it.map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e,'<div class="seqline">'+esc(label(a.n))+'</div>')};
window.rWm=function(){const it=pictureChoices(L()),a=it.find(x=>x.target);question(T('Which word matches the picture?','哪个词语与图片相符？'),it.map(x=>({v:x.n,h:esc(label(x.n)),l:label(x.n)})),a.n,'<div class="big st one">'+gamePicture(a.e)+'</div>')};
const patterns=n=>n<=3?['AB','AAB']:n<=6?['ABC','ABB','AABC']:n<=9?['ABAC','ABCB','AABBC']:n<=12?['ABCAC','ABBCD','AABCBD']:['ABACBD','ABCDAC','AABCDC'];
function picturePattern(symbols){const n=L(),p=choose(patterns(n)),map=shuffle(symbols),size=p.length*2+1,seq=Array.from({length:size},(_,i)=>map[p.charCodeAt(i%p.length)-65]),a=seq.pop();question(T('Which picture comes next?','下一个是什么图形？'),shuffle([a,...pick(map.filter(x=>x!==a),Math.max(3,new Set(p).size-1))]).map(x=>({v:x,h:x})),a,gamePictureLine([...seq,'?']))}
window.rShp=function(){picturePattern(['●','■','▲','◆','★','✚'])};
const groupSets=[
 ['Fruit','水果',['🍎','🍌','🍇','🍊','🍓','🍋']],['Animals','动物',['🐶','🐱','🐴','🐘','🐢','🐰']],['Transport','交通工具',['🚲','🚌','🚂','✈️','🚗','⛵']],['Musical instruments','乐器',['🎹','🎻','🎺','🥁','🎸','🎷']],['Clothing','衣物',['👕','👖','🧥','🧦','👗','🧢']],['Flowers','花朵',['🌷','🌻','🌹','🌼','🌺','🌸']],
 ['Birds','鸟类',['🐦','🦉','🦆','🐧','🦅','🦜']],['Insects','昆虫',['🐝','🦋','🐞','🦗','🐜','🦟']],['Vegetables','蔬菜',['🥕','🌽','🥦','🥬','🍆','🥒']],['Sea animals','海洋动物',['🐟','🐙','🐬','🦈','🐳','🦑']],['Sports equipment','运动用品',['⚽','🏀','🎾','🏓','🏸','🏐']],['Tools','工具',['🔨','🔧','🪛','🪚','🪓','⛏️']]
];
function groups(){const n=L(),pool=n<=5?groupSets.slice(0,6):n<=10?groupSets.slice(4):groupSets.filter((_,i)=>i!==1);return pick(pool,Math.min(6,2+Math.floor((n-1)/3)))}
window.rSort=function(){const gs=groups(),a=choose(gs),e=choose(a[2]);question(T('Which group does this picture belong to?','这张图片属于哪一组？'),gs.map((g,i)=>({v:String(i),h:T(g[0],g[1])})),String(gs.indexOf(a)),'<div class="big st one">'+gamePicture(e)+'</div>')};
window.rOdd=function(){const gs=groups(),main=gs[0],other=gs[1],a=choose(other[2]),count=Math.min(7,3+Math.floor(L()/3));question(T('Which picture belongs to a different group?','哪张图片属于不同的类别？'),shuffle([...pick(main[2],count-1),a]).map(x=>({v:x,h:x})),a)};
window.rSame=function(){const gs=groups(),a=gs[0],items=pick(a[2],L()<8?2:3),answer=items.pop();question(T('Which picture belongs with these?','哪张图片与这些属于同一组？'),shuffle([answer,...gs.slice(1).map(g=>choose(g[2]))]).map(x=>({v:x,h:x})),answer,gamePictureLine(items))};
const days=[['Sunday','星期日'],['Monday','星期一'],['Tuesday','星期二'],['Wednesday','星期三'],['Thursday','星期四'],['Friday','星期五'],['Saturday','星期六']];
function calendar(){const n=L();if(n<=5){const day=rnd(0,6),offset=rnd(1,n+1),sign=n>2&&rnd(0,1)?-1:1,idx=(day+offset*sign+14)%7;question(T('If today is '+days[day][0]+', what day is '+offset+' days '+(sign>0?'later?':'earlier?'),'如果今天是'+days[day][1]+'，'+offset+'天'+(sign>0?'后':'前')+'是星期几？'),shuffle([{v:String(idx),h:T(...days[idx])},...pick(days.map((d,i)=>({v:String(i),h:T(...d)})).filter(x=>x.v!==String(idx)),options(n)-1)]),String(idx));return}
 const date=new Date(Date.UTC(rnd(2024,2032),rnd(0,11),rnd(20,28))),a=rnd(3,n*2),b=n<11?0:rnd(1,n),target=new Date(date.getTime()+(a-b)*86400000),iso=d=>d.toISOString().slice(0,10),answer=iso(target);question(T('Date: '+iso(date)+'. Move '+a+' days forward'+(b?', then '+b+' days back':'')+'. Which date? Use year-month-day.','日期：'+iso(date)+'。向后推'+a+'天'+(b?'，再往前推'+b+'天':'')+'。是几月几日？格式为年-月-日。'),answers(answer,[-7,-2,-1,1,2,7].map(x=>iso(new Date(target.getTime()+x*86400000)))),answer,'',true)}
function money(){const n=L(),cents=n>=8,prices=Array.from({length:n<5?1:n<10?2:3},()=>cents?rnd(100,300+n*80):rnd(1,4+n*3)*100),sum=prices.reduce((a,b)=>a+b,0),paid=Math.ceil((sum+100)/1000)*1000,answer=((paid-sum)/100).toFixed(2),cash=x=>'$'+(x/100).toFixed(2);question(T('Prices: '+prices.map(cash).join(' + ')+'. You pay '+cash(paid)+'. How much change?','价格：'+prices.map(cash).join(' + ')+'。支付'+cash(paid)+'，应找回多少？'),answers(answer,[-100,100,-10,10,50,200].map(d=>((paid-sum+d)/100).toFixed(2)).filter(x=>Number(x)>=0)),answer,'',true)}
function shopping(){const n=L(),count=2+Math.floor((n-1)/2),items=pick(allItems(),count+6),target=items.slice(0,count),at=rnd(0,count-1),a=target[at];ready(gamePictureLine(target.map(x=>x.e)),'shoppingReady',()=>question(n<8?T('Which item was on your list?','哪件物品在购物清单上？'):T('Which item was number '+(at+1)+' on your list?','购物清单上第'+(at+1)+'件是什么？'),shuffle([a,...(n<8?items.slice(count):items.filter(x=>x!==a)).slice(0,options(n)-1)]).map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e))}
const routines=[
 [['Prepare soil','准备土壤'],['Plant seeds','播种'],['Water the soil','浇水'],['Watch sprouts grow','等待发芽'],['Move plants to bigger pots','移入大花盆'],['Enjoy the flowers','欣赏花朵']],
 [['Collect dirty clothes','收集脏衣服'],['Sort the colours','按颜色分类'],['Load the washer','放入洗衣机'],['Add detergent','加入洗衣液'],['Start washing','开始洗衣'],['Hang clothes to dry','晾干衣服']],
 [['Choose a recipe','选择食谱'],['Buy ingredients','购买食材'],['Wash vegetables','清洗蔬菜'],['Cut vegetables','切菜'],['Cook the meal','烹饪'],['Serve the meal','上菜']]
];
function routine(){const n=L(),r=choose(routines),jump=n<6?1:n<11?2:3,at=rnd(0,r.length-jump-1),answer=r[at+jump],pool=n<6?routines.filter(x=>x!==r).flat():r.filter(x=>x!==answer);question(T('In this order: '+r.map(x=>x[0]).join(' → ')+'. What is '+jump+' step'+(jump>1?'s':'')+' after “'+r[at][0]+'”?','按此顺序：'+r.map(x=>x[1]).join(' → ')+'。“'+r[at][1]+'”之后第'+jump+'步是什么？'),answers(T(...answer),pool.map(x=>T(...x))),T(...answer))}
const associations=[['bird','小鸟','nest','鸟巢'],['dog','狗','kennel','狗窝'],['bee','蜜蜂','hive','蜂巢'],['fish','鱼','water','水'],['book','书','reading','阅读'],['pencil','铅笔','writing','书写'],['scissors','剪刀','cutting','剪切'],['spoon','勺子','eating','进食'],['eye','眼睛','seeing','看'],['ear','耳朵','hearing','听'],['nose','鼻子','smelling','闻'],['tongue','舌头','tasting','尝味']];
function related(){const n=L(),pool=n<6?associations:n<11?associations.slice(0,8):associations.slice(4),p=choose(pool),ans=T(p[2],p[3]),others=associations.filter(x=>x!==p);let prompt=T('Which word goes with “'+p[0]+'”?','哪个词语与“'+p[1]+'”相关？');if(n>=6){const family=associations.slice(Math.floor(associations.indexOf(p)/4)*4,Math.floor(associations.indexOf(p)/4)*4+4),ref=choose(family.filter(x=>x!==p));prompt=T(ref[0]+' → '+ref[2]+'; '+p[0]+' → ?' ,ref[1]+' → '+ref[3]+'；'+p[1]+' → ?');}question(prompt,answers(ans,others.map(x=>T(x[2],x[3]))),ans)}
const rooms=[['Kitchen','厨房','🍳','🥣'],['Bedroom','卧室','🛏️','🛌'],['Bathroom','浴室','🪥','🛁'],['Garage','车库','🚗','🛞'],['Garden','花园','🌷','🌲'],['Study','书房','🖥️','📚']];
function place(){const n=L(),p=choose(rooms),ans=T(p[0],p[1]);question(T('Which place best matches these objects?','这些物品最适合哪个地方？'),answers(ans,rooms.filter(x=>x!==p).map(x=>T(x[0],x[1]))),ans,gamePictureLine(p.slice(2,n>=8?4:3)))}
let storyQuestionCycle=0,storyUtterance=null,storySpeechTimer=null;
function stopStory(){clearTimeout(storySpeechTimer);if(!storyUtterance)return;storyUtterance.onend=storyUtterance.onerror=null;storyUtterance=null;window.speechSynthesis?.cancel()}
new MutationObserver(()=>{if(!$('readStory'))stopStory()}).observe($('mp'),{childList:true});
new MutationObserver(()=>{if($('mini').classList.contains('hidden'))stopStory()}).observe($('mini'),{attributes:true,attributeFilter:['class']});
new MutationObserver(()=>{if(!$('ov').classList.contains('hidden'))stopStory()}).observe($('ov'),{attributes:true,attributeFilter:['class']});
window.addEventListener('pagehide',stopStory);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopStory()});

function readStory(text){const status=$('storySpeechStatus'),button=$('readStory'),synth=window.speechSynthesis;const update=t=>{if(status?.isConnected)status.textContent=t};if(!synth||!window.SpeechSynthesisUtterance){update(T('Read aloud is unavailable in this browser. You can read the story above.','此浏览器不支持朗读，请阅读上方故事。'));return}try{if(storyUtterance){storyUtterance.onend=storyUtterance.onerror=null}synth.cancel();synth.resume();const u=new SpeechSynthesisUtterance(text);storyUtterance=u;u.lang=save.lang==='zh'?'zh-CN':'en-GB';u.rate=.85;const voice=synth.getVoices().find(v=>v.lang.toLowerCase().startsWith(save.lang==='zh'?'zh':'en'));if(voice)u.voice=voice;update(T('Starting narration…','正在开始朗读……'));u.onstart=()=>{clearTimeout(storySpeechTimer);update(T('Reading aloud…','正在朗读……'))};u.onend=()=>{clearTimeout(storySpeechTimer);if(storyUtterance===u)storyUtterance=null;update(T('Finished reading. Tap Read aloud to listen again.','朗读完成，可再次点击朗读。'))};u.onerror=e=>{clearTimeout(storySpeechTimer);if(!['canceled','interrupted'].includes(e.error))update(T('Voice could not play. Check device volume or try another browser. The story remains available to read.','无法播放语音，请检查设备音量或尝试其他浏览器。您仍可阅读故事。'))};synth.speak(u);clearTimeout(storySpeechTimer);storySpeechTimer=setTimeout(()=>{if(storyUtterance===u)update(T('If you cannot hear speech, check device volume and try Read aloud again. You can also read the story.','若听不到语音，请检查设备音量并再次点击朗读，也可阅读故事。'))},6000)}catch{update(T('Read aloud is unavailable. Please read the story above.','暂时无法朗读，请阅读上方故事。'))}}
function story(){const n=L(),person=T(...choose([['Mei','小梅'],['Lily','莉莉'],['George','乔治'],['Ben','小本']])),places=[['market','市场'],['park','公园'],['library','图书馆'],['cafe','咖啡馆']],items=[['apples','苹果'],['oranges','橙子'],['flowers','花朵'],['books','书']],colours=[['red','红色'],['blue','蓝色'],['green','绿色'],['yellow','黄色']],people=[['sister','姐姐'],['friend','朋友'],['neighbour','邻居'],['brother','哥哥']],travel=[['bus','公共汽车'],['train','火车'],['bicycle','自行车'],['taxi','出租车']],drinks=[['tea','茶'],['water','水'],['juice','果汁'],['milk','牛奶']];
const place=choose(places),item=choose(items),colour=choose(colours),day=choose(days),who=choose(people),ride=choose(travel),drink=choose(drinks),count=rnd(2,n+3),other=(pool,v)=>pool.filter(x=>x!==v).map(x=>T(...x));
const facts=[
[T(person+' went to the '+place[0]+'.',person+'去了'+place[1]+'。'),T('Where did '+person+' go?',person+'去了哪里？'),T(...place),other(places,place),'place'],
[T(person+' carried '+count+' '+item[0]+'.',person+'带了'+count+'个'+item[1]+'。'),T('What did '+person+' carry?',person+'带了什么？'),T(...item),other(items,item),'item'],
['',T('How many items were carried?','带了多少个物品？'),String(count),[count+1,count+2,count+3,count+4,count+5].map(String),'count'],
[T('The bag was '+colour[0]+'.','袋子是'+colour[1]+'的。'),T('What colour was the bag?','袋子是什么颜色？'),T(...colour),other(colours,colour),'colour'],
[T('It was '+day[0]+'.','那天是'+day[1]+'。'),T('On which day did this happen?','这件事发生在星期几？'),T(...day),other(days,day),'day'],
[T(person+' travelled by '+ride[0]+'.',person+'乘坐的交通工具是'+ride[1]+'。'),T('How did '+person+' travel?',person+'使用了什么交通工具？'),T(...ride),other(travel,ride),'travel'],
[T('After returning home, '+person+' phoned a '+who[0]+'.','回家后，'+person+'给'+who[1]+'打了电话。'),T('Who received the phone call?','电话打给了谁？'),T(...who),other(people,who),'person'],
[T('Finally, '+person+' drank '+drink[0]+'.','最后，'+person+'喝了'+drink[1]+'。'),T('What happened last?','最后做了什么？'),T('Drank '+drink[0],'喝'+drink[1]),[T('Packed the bag','整理袋子'),T('Travelled to the '+place[0],'前往'+place[1]),T('Phoned the '+who[0],'给'+who[1]+'打电话')],'sequence']
].slice(0,Math.min(8,3+Math.ceil((n-1)/3)));
const q=facts[storyQuestionCycle++%facts.length],g=mg,text=facts.map(x=>x[0]).filter(Boolean).join(' ');g.storyQuestionKind=q[4];g.storyFactCount=facts.filter(x=>x[0]).length;
$('mmsg').textContent=T('Read or listen to the story.','阅读或聆听故事。');$('mp').innerHTML='<div class="story-copy">'+esc(text)+'</div><div class="row"><button class="btn" id="readStory">'+T('Read aloud','朗读')+'</button><button class="btn main" id="storyReady">'+T('Answer the question','回答问题')+'</button></div><p id="storySpeechStatus" role="status"></p>';$('readStory').onclick=()=>readStory(text);$('storyReady').onclick=()=>{window.speechSynthesis?.cancel();if(mg===g&&!paused)question(q[1],answers(q[2],q[3]),q[2])};
}

function visual(){const n=5+L()*2,icons=['🌷','🌻','🌹','🌼','🌺','🌸'],a=choose(icons),d=choose(icons.filter(x=>x!==a)),index=rnd(0,n-1),list=Array.from({length:n},(_,i)=>({v:String(i),h:i===index?a:d}));question(T('Find the different flower.','找出不同的花朵。'),list,String(index));$('mp').querySelector('.gridm').style.setProperty('--c',Math.min(5,Math.ceil(Math.sqrt(n))))}
Object.assign(window.MindGardenExtras,{shopping,routine,related,calendar,money,story,visual,order:()=>picturePattern(['🌱','🌿','🌷','🌻','🌹','🌺']),place});
// A consistent description is visible before choosing a level.
const descriptions={numbers:['Larger numbers, closer alternatives and multi-step rules.','更大的数字、更接近的选项与多步规律。'],memory:['Longer sequences and more details to remember.','更长的顺序与更多需要记住的细节。'],words:['Longer words, related alternatives and analogies.','更长的词语、相关选项与类比。'],other:['More items, finer categories and longer patterns.','更多项目、更细的分类与更长的规律。']};
function describe(type){return T(...descriptions[['num','sum','tbl','add','sub','cnt','money','calendar','time','clk'].includes(type)?'numbers':['seq','miss','rem','shopping','story'].includes(type)?'memory':['wrd','pic','wm','related'].includes(type)?'words':'other'])}
const oldChoose=window.chooseMiniLevel;window.chooseMiniLevel=function(type){oldChoose(type);const select=$('difficultyChoice');if(select){const p=document.createElement('p');p.className='difficulty-guide';p.textContent=describe(type);select.closest('label').after(p)}};
window.MindGardenDifficulty={level,options,pattern,patternFamilies,describe};
})();

;
/* daily-plan.js */
/* Personal practice is based on retained results, never on another player's data. */
(function(){
'use strict';
function select(profile,available,date){
 const known=new Set(available),byGame=new Map();
 for(const [index,r]of (profile.log||[]).entries()){
  if(!known.has(r.g)||typeof r.r!=='number'||!Number.isFinite(r.r)||r.r<0||r.r>1)continue;
  const rows=byGame.get(r.g)||[];rows.push({rate:r.r,index});if(rows.length>5)rows.shift();byGame.set(r.g,rows);
 }
 const ranked=[...byGame].map(([type,rows])=>({type,average:rows.reduce((sum,r)=>sum+r.rate,0)/rows.length,samples:rows.length,last:rows.at(-1).index})).sort((a,b)=>a.average-b.average||a.last-b.last||a.type.localeCompare(b.type));
 const plan=ranked.slice(0,3),used=new Set(plan.map(x=>x.type));
 const stamp=Date.parse(date+'T12:00:00Z'),offset=Number.isFinite(stamp)?Math.floor(stamp/86400000)%available.length:0;
 for(let i=0;plan.length<3&&i<available.length;i++){const type=available[(offset+i)%available.length];if(!used.has(type)){used.add(type);plan.push({type,average:null,samples:0,last:-1})}}
 return plan;
}
window.MindGardenPractice={select};
})();

;
/* online-activities.js */
(function(){
// Deterministic question sets shared by the browser and server. Answers use stable IDs.
const onlineActivities=[
 {id:'times8',en:'Times tables · 8 questions',zh:'乘法练习 · 8题'},
 {id:'gaps8',en:'Missing number · 8 questions',zh:'缺失数字 · 8题'},
 {id:'change8',en:'Market change · 8 questions',zh:'购物找零 · 8题'},
 {id:'calendar8',en:'Calendar day · 8 questions',zh:'星期推算 · 8题'},
 {id:'shapes8',en:'Shape patterns · 8 questions',zh:'形状规律 · 8题'},
 {id:'picture8',en:'Find the picture · 8 questions',zh:'找出图片 · 8题'},
 {id:'words8',en:'Match the word · 8 questions',zh:'匹配词语 · 8题'},
 {id:'groups8',en:'Same group · 8 questions',zh:'同一类别 · 8题'}
];
const pictureWords=[['apple','🍎','Apple','苹果','fruit'],['banana','🍌','Banana','香蕉','fruit'],['grapes','🍇','Grapes','葡萄','fruit'],['orange','🍊','Orange','橙子','fruit'],['dog','🐶','Dog','狗','animal'],['cat','🐱','Cat','猫','animal'],['rabbit','🐰','Rabbit','兔子','animal'],['turtle','🐢','Turtle','乌龟','animal'],['car','🚗','Car','汽车','transport'],['train','🚂','Train','火车','transport'],['bus','🚌','Bus','巴士','transport'],['bicycle','🚲','Bicycle','自行车','transport'],['rose','🌹','Rose','玫瑰','flower'],['tulip','🌷','Tulip','郁金香','flower'],['sunflower','🌻','Sunflower','向日葵','flower'],['hibiscus','🌺','Hibiscus','扶桑花','flower']];
function rng(seed){let x=seed>>>0;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
function mixed(a,r){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function makeOnlineQuestions(mode,seed,round){if(!onlineActivities.some(x=>x.id===mode))return null;const r=rng((seed^Math.imul(round,0x9E3779B1))>>>0),num=(a,b)=>a+Math.floor(r()*(b-a+1)),pick=a=>a[num(0,a.length-1)],questions=[];
 function number(prompt,answer){const options=mixed([answer,...mixed([answer+1,answer+2,answer+3,answer+5,answer-1,answer-2].filter(v=>v>=0),r).slice(0,3)],r).map(String);return {prompt,answer:String(answer),options}}
 for(let i=0;i<8;i++){let q;
  if(mode==='times8'){const a=num(2,9),b=num(2,9);q=number([a+' × '+b+' = ?',a+' × '+b+' = ?'],a*b)}
  if(mode==='gaps8'){const a=num(2,30),b=num(1,20);q=number([a+' + ? = '+(a+b),a+' + ? = '+(a+b)],b)}
  if(mode==='change8'){const paid=pick([10,20,50]),cost=num(1,paid-1);q=number(['An item costs $'+cost+'. You pay $'+paid+'. How much change?','物品售价$'+cost+'，付$'+paid+'，应找回多少？'],paid-cost)}
  if(mode==='calendar8'){const en=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],zh=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],day=num(0,6),offset=num(1,6),answer=(day+offset)%7;const options=mixed([answer,...mixed([0,1,2,3,4,5,6].filter(v=>v!==answer),r).slice(0,3)],r).map(String);q={prompt:['Today is '+en[day]+'. What day is it '+offset+' days later?','今天是'+zh[day]+'，'+offset+'天后是星期几？'],answer:String(answer),options,labels:Object.fromEntries(options.map(v=>[v,[en[+v],zh[+v]]]))}}
  if(mode==='shapes8'){const shapes=mixed(['●','■','▲','◆','★'],r),pattern=pick([[0,1],[0,0,1],[0,1,2],[0,1,1]]),sequence=Array.from({length:6},(_,j)=>shapes[pattern[j%pattern.length]]),answer=shapes[pattern[6%pattern.length]];q={prompt:['Which shape comes next? '+sequence.join(' ')+' ?','下一个形状是什么？'+sequence.join(' ')+' ?'],answer,options:mixed([answer,...shapes.filter(v=>v!==answer).slice(0,3)],r)}}
  if(mode==='picture8'||mode==='words8'){const pool=mixed(pictureWords,r).slice(0,4),target=pick(pool);q={prompt:mode==='picture8'?['Find the '+target[2].toLowerCase()+'.','找出'+target[3]+'。']:['Which word matches '+target[1]+'?','哪个词语与'+target[1]+'相配？'],answer:target[0],options:pool.map(x=>x[0]),labels:Object.fromEntries(pool.map(x=>[x[0],mode==='picture8'?[x[1],x[1]]:[x[2],x[3]]]))}}
  if(mode==='groups8'){const target=pick(pictureWords),answer=pick(pictureWords.filter(v=>v[4]===target[4]&&v[0]!==target[0])),pool=mixed([answer,...mixed(pictureWords.filter(v=>v[4]!==target[4]),r).slice(0,3)],r);q={prompt:['Which picture is in the same group as '+target[1]+'?','哪张图片与'+target[1]+'属于同一类别？'],answer:answer[0],options:pool.map(x=>x[0]),labels:Object.fromEntries(pool.map(x=>[x[0],[x[1],x[1]]]))}}
  questions.push(q);
 }
 return questions;
}

window.MindGardenOnlineActivities={activities:onlineActivities,questions:makeOnlineQuestions};
})();

;
/* multiplayer.js */
/* v3.0: 2–8 players, online lobby invitations, host launch and shared rounds. */
(function(){
'use strict';
const KEY='mindGardenRoom8',SESSION='mindGardenLobby',GAME='mindGardenRound8';
const MODES=[['pairs6','Matching pairs · 6 pairs'],['pairs10','Matching pairs · 10 pairs'],['sums','Mental sums · 8 questions'],['patterns','Number patterns · 8 questions'],['odd','Odd one out · 8 questions'],['sums12','Mental sums · 12 questions'],['patterns12','Number patterns · 12 questions'],['odd12','Odd one out · 12 questions'],['bingo9','Picture bingo · host-paced']];
const EXTRA=window.MindGardenOnlineActivities;for(const activity of EXTRA?.activities||[])MODES.push([activity.id,activity.en,activity.zh]);
const $=id=>document.getElementById(id),T=(a,b)=>save.lang==='zh'?b:a;
const volatileStorage=new Map();
const read=k=>{try{return JSON.parse((volatileStorage.has(k)?volatileStorage.get(k):localStorage.getItem(k))||'null')}catch{return null}};
function store(k,v){try{localStorage.setItem(k,v);volatileStorage.delete(k)}catch{volatileStorage.set(k,v);window.reportStorageFailure?.()}}
function remove(k){try{localStorage.removeItem(k);volatileStorage.delete(k)}catch{volatileStorage.set(k,null);window.reportStorageFailure?.()}}
const storedSession=read(SESSION),validSession=storedSession&&/^[0-9a-f]{48}$/.test(storedSession.token)&&/^[0-9a-f]{16}$/.test(storedSession.id)&&typeof storedSession.name==='string';
let session=validSession&&!storedSession.offline?storedSession:null,room=null,game=null,shownRound=0,screen='',generation=0,membershipRevision=0,busy=false,pollRequest=null,loungeBusy=false,last=null,loungeRooms=[],loungeTimer=null;
const noticed=new Set();let view=null,checkpointTimer=null,mismatchTimer=null,previewTimer=null;
// Each response belongs to the screen that initiated it. Other dialogs may replace it.
function overlay(html){window.overlay(html);$('box').classList.add('mp-dialog');view=$('box').firstElementChild}
function current(gen=generation){return gen===generation&&!!view?.isConnected&&!$('ov').classList.contains('hidden')}
function clearPairTimers(){clearTimeout(mismatchTimer);clearInterval(previewTimer);mismatchTimer=previewTimer=null}
function suspend(){checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;screen='';last=null;view=null}
window.addEventListener('gardenPlayerChange',suspend);
function api(action,data={}){return fetch('/api/room8?action='+action,{method:'POST',headers:{'content-type':'application/json'},cache:'no-store',body:JSON.stringify({...data,token:session?.token||data.token})}).then(async r=>{let j;try{j=await r.json()}catch{throw Error(T('Online service unavailable. Check the deployment.','在线服务不可用，请检查部署。'))}if(!r.ok)throw Object.assign(Error(j.error||'Connection failed'),{status:r.status});return j})}
function error(e){const el=$('multiError');if(el)el.textContent=save.lang==='zh'&&window.tr?tr(e.message):e.message}
function name(){let n=(me().name||'').replace(/[^\p{L}\p{N} ._'-]/gu,'').slice(0,20);if(!n||/^(Player\s*\d*|玩家\s*\d*)$/i.test(n)){let tag=read('mindGardenGuestTag');if(!tag){tag=Array.from(crypto.getRandomValues(new Uint8Array(3)),x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();store('mindGardenGuestTag',JSON.stringify(tag))}n='Guest '+tag}return n}
function invite(c=room?.code){const u=new URL(location.pathname,location.origin);u.hostname=u.hostname.replace(/^[a-f0-9]{8,}\.(?=[^.]+\.pages\.dev$)/i,'');u.searchParams.set('room',c);return u.href}
function user(n){return '<span translate="no">'+esc(n)+'</span>'}
function roomControls(s){const state=s?.host!==undefined?s:last;if(!state||state.closed||state.left)return '';return '<div class="mp-room-actions row">'+(state.host?(state.started&&!state.finished?'<button class="btn" id="mpCancelGame">'+T('Cancel game & close room','取消游戏并关闭房间')+'</button>':''):'<button class="btn" id="mpLeaveRoom">'+T('Leave this room','退出此房间')+'</button>')+'</div>'}
function base(s){return '<h2>'+T('Play Together','一起玩')+' · '+T('Up to 8 players','最多8人')+'</h2><p class="mp-room-code">'+T('Room code','房间码')+' <strong translate="no">'+esc(room.code)+'</strong>'+(s?.round?' · '+T('Round ','第 ')+s.round+((s.totalRounds||last?.totalRounds)?' / '+(s.totalRounds||last.totalRounds):'')+T('',' 轮'):'')+'</p>'+nameControls()+roomControls(s)+'<p id="mpConnection" class="tip" role="status"></p>'}
function checkpoint(){clearTimeout(checkpointTimer);checkpointTimer=null;if(!game||!room)return;try{store(GAME,JSON.stringify({code:room.code,...game,done:game.done?[...game.done]:undefined}))}catch{}}
function queueCheckpoint(){clearTimeout(checkpointTimer);checkpointTimer=setTimeout(checkpoint,80)}
function exitScreen(){suspend();closeOv()}
function clearInvite(){const u=new URL(location.href);u.searchParams.delete('room');history.replaceState(null,'',u.pathname+u.search+u.hash)}
async function action(fn){if(busy)return;busy=true;const gen=generation;try{await fn()}catch(e){if(current(gen))error(e)}finally{busy=false}}
async function login(){const gen=generation,owner=save.cp,profile=me(),n=$('mpName')?.value.trim()||name();session=await api('login',{name:n,token:read(SESSION)?.token});store(SESSION,JSON.stringify(session));if(save.pr[owner]===profile){profile.name=session.name;persist()}if(owner===save.cp)window.MindGardenDashboard?.refresh();startLounge();return owner===save.cp&&current(gen)}
function nameControls(){return '<details class="mp-name-editor"><summary>'+T('Your name: ','你的名称：')+'<span class="mp-self-name" translate="no">'+esc(session?.name||name())+'</span> · '+T('Rename','改名')+'</summary><label class="lab">'+T('Name shown to other players','其他玩家看到的名称')+'<input id="mpRenameName" maxlength="20" value="'+esc(session?.name||name())+'"></label><button class="btn" id="mpSaveName">'+T('Save name','保存名称')+'</button><span id="mpNameStatus" role="status"></span></details>'}
async function renameOnline(n){
 n=n.trim();if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(n))throw Error(T('Use 1–20 letters or numbers.','请使用1至20个字母或数字。'));
 if(session){const previous=session,updated=await api('login',{name:n});if(session!==previous)return n;session=updated;store(SESSION,JSON.stringify(session))}
 else{const previous=read(SESSION);if(previous)store(SESSION,JSON.stringify({...previous,name:n,offline:true}))}
 return n;
}
window.MindGardenMultiplayer={flushStorage(){for(const [k,v]of volatileStorage){try{v===null?localStorage.removeItem(k):localStorage.setItem(k,v);volatileStorage.delete(k)}catch{return false}}return true},rename:renameOnline,online:()=>!!session,active:()=>!!read(KEY),history:()=>action(()=>openHistory())};
function releaseRoom(code,notice,gen=generation){
 membershipRevision++;
 if(read(KEY)?.code===code)remove(KEY);if(read(GAME)?.code===code)remove(GAME);
 if(room?.code!==code)return;
 const show=current(gen);clearPairTimers();clearTimeout(checkpointTimer);checkpointTimer=null;generation++;room=null;game=null;last=null;shownRound=0;screen='';clearInvite();
 if(show)menu(notice);
}
function cancelRoom(){if(confirm(T('Cancel this game and close the room for everyone? Completed scores are kept.','取消游戏并为所有人关闭房间？已完成的成绩会保留。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('close',{code:c});releaseRoom(c,T('Room closed. You can join or create another room.','房间已关闭。您可以加入或创建其他房间。'),gen)})}
$('box').addEventListener('click',e=>{if(e.target.closest('#mpCancelGame'))cancelRoom();if(e.target.closest('#mpLeaveRoom')&&confirm(T('Leave this room? Your unfinished round will stop. Other players can continue.','退出此房间？你的未完成回合将停止，其他玩家可以继续。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('leave',{code:c});releaseRoom(c,T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'),gen)})});
$('box').addEventListener('click',e=>{const button=e.target.closest('#mpSaveName');if(!button)return;const editor=button.closest('details'),input=$('mpRenameName'),profile=me();action(async()=>{button.disabled=true;try{const n=await renameOnline(input.value);if(Object.values(save.pr).includes(profile)){profile.name=n;persist()}if(me()!==profile)return;window.MindGardenDashboard?.refresh();document.querySelectorAll('.mp-self-name').forEach(el=>el.textContent=n);if(editor.isConnected){editor.open=false;editor.querySelector('summary')?.focus()}if($('mpConnection'))$('mpConnection').textContent=T('Name saved.','名称已保存。')}finally{button.disabled=false}})});
function startLounge(){if(loungeTimer)clearInterval(loungeTimer);loungeTimer=setInterval(lounge,2500);lounge()}
async function lounge(){
 if(!session||loungeBusy||document.hidden)return;loungeBusy=true;const identity=session,revision=membershipRevision;
 try{const s=await api('lounge');if(session!==identity||revision!==membershipRevision)return;loungeRooms=s.rooms;
  if(screen==='menu'&&current()){if(s.activeRoom){store(KEY,JSON.stringify({code:s.activeRoom}));if(!$('mpResume')){const b=document.createElement('button');b.id='mpResume';b.className='btn';b.textContent=T('Resume room','返回房间');$('mpClose').before(b);b.onclick=()=>action(()=>join(read(KEY).code))}}else{remove(KEY);$('mpResume')?.remove()}}
  if($('mpOnlineCount'))$('mpOnlineCount').textContent=s.online+' '+T('players online','位玩家在线');
  const list=$('mpOpenRooms');if(list){list.innerHTML=s.rooms.length?s.rooms.map(r=>'<div class="mp-open-room">'+user(r.host)+' · <strong translate="no">'+r.code+'</strong> · '+r.players+'/8 <button class="btn sm" data-join-room="'+r.code+'">'+T('Join','加入')+'</button></div>').join(''):'<p>'+T('No open rooms yet. Create one to invite everyone online.','暂无开放房间。创建房间即可邀请所有在线玩家。')+'</p>';list.querySelectorAll('[data-join-room]').forEach(b=>b.onclick=()=>action(()=>join(b.dataset.joinRoom)))}
  const fresh=s.rooms.filter(r=>!noticed.has(r.code)&&r.code!==s.activeRoom);
  if(fresh.length){let notice=$('onlineInvitation');if(!notice){notice=document.createElement('aside');notice.id='onlineInvitation';notice.setAttribute('role','status');document.body.appendChild(notice)}
   notice.innerHTML='<span>'+T('New room invitations: ','新房间邀请：')+fresh.map(r=>user(r.host)+' <b translate="no">'+r.code+'</b>').join(' · ')+'</span><small id="mpInviteTip"></small><button class="btn sm" id="mpSeeInvite">'+(s.activeRoom?T('Room options','房间选项'):T('View lobby','查看大厅'))+'</button><button class="btn sm" id="mpDismissInvite" aria-label="'+T('Dismiss','关闭')+'">×</button>';
   if(s.activeRoom)$('mpInviteTip').textContent=T('Leave your current room first; hosts must finish or cancel it before joining another.','请先退出当前房间；房主须先结束或取消房间，才能加入其他房间。');
   $('mpSeeInvite').onclick=()=>{const active=read(KEY)?.code;if(active){if(room?.code===active&&current()){$('mpLeaveRoom')?.focus();$('mpCancelGame')?.focus();$('mpCloseRoom')?.focus();$('mpCancelRoom')?.focus()}else{menu();action(()=>join(active))}}else menu();notice.remove()};$('mpDismissInvite').onclick=()=>notice.remove();
  }
  // Acknowledge only after invitations have been rendered on the player's device.
  if(s.rooms.length){await api('ack',{codes:s.rooms.map(r=>r.code)});s.rooms.forEach(r=>noticed.add(r.code))}
 }catch(e){if(session!==identity)return;if($('mpOnlineCount'))$('mpOnlineCount').textContent=T('Reconnecting to the lobby…','正在重新连接大厅……');if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer)}}finally{loungeBusy=false}
}
function menu(notice=''){checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;last=null;screen='menu';
 const prefill=(new URLSearchParams(location.search).get('room')||'').toUpperCase();
 overlay('<h2>'+T('Online lobby · 2–8 players','在线大厅 · 2至8人')+'</h2><p>'+T('Enter the lobby to receive room codes from hosts online. Joining a room shares your display name and game scores with its players.','进入大厅即可接收在线房主的房间码。加入房间后，其他玩家可看到你的显示名称和游戏积分。')+'</p>'+(!session?'<label class="lab">'+T('Your display name','你的显示名称')+'<input id="mpName" maxlength="20" value="'+esc(name())+'"></label><button class="btn main" id="mpLogin">'+T('Enter online lobby','进入在线大厅')+'</button>':'<p>'+T('Online as ','在线玩家：')+'<span class="mp-self-name">'+user(session.name)+'</span>'+' · <span id="mpOnlineCount" role="status"></span></p>'+nameControls()+'<button class="btn" id="mpHistory">'+T('Saved online rankings','已保存的在线排名')+'</button>'+roundChoices()+'<button class="btn main" id="mpCreate">'+T('Create room & invite online players','创建房间并邀请在线玩家')+'</button><h3>'+T('Open rooms — room codes arrive here','开放房间——在此接收房间码')+'</h3><div id="mpOpenRooms" aria-live="polite"></div>')+'<label class="lab">'+T('Room code','房间码')+'<input id="mpCode" maxlength="6" value="'+(/^[A-Z2-9]{6}$/.test(prefill)?prefill:'')+'"></label><div class="row"><button class="btn" id="mpJoin">'+T('Join room','加入房间')+'</button>'+(session&&read(KEY)?'<button class="btn" id="mpResume">'+T('Resume room','返回房间')+'</button>':'')+'<button class="btn" id="mpClose">'+T('Close','关闭')+'</button>'+(session?'<button class="btn" id="mpLogout">'+T('Go offline','退出在线大厅')+'</button>':'')+'</div><p id="multiError" role="alert"></p>');
 if($('mpLogin'))$('mpLogin').onclick=()=>action(async()=>{if(await login())menu()});
 if($('mpHistory'))$('mpHistory').onclick=()=>action(()=>openHistory());
 if($('mpCreate'))$('mpCreate').onclick=()=>action(async()=>{const gen=generation,r=await api('create',{rounds:Number($('mpRoundCount').value)});claim(r.code,gen)});
 $('mpJoin').onclick=()=>action(async()=>{const c=$('mpCode').value.trim().toUpperCase();if(!session&&!await login())return;await join(c)});
 if($('mpResume'))$('mpResume').onclick=()=>action(()=>join(read(KEY).code));
 if($('mpLogout'))$('mpLogout').onclick=()=>action(async()=>{const gen=generation;await api('logout');store(SESSION,JSON.stringify({...session,offline:true}));session=null;clearInterval(loungeTimer);noticed.clear();$('onlineInvitation')?.remove();if(current(gen))menu()});
 if(typeof notice==='string'&&notice){const status=document.createElement('p');status.id='mpLobbyStatus';status.setAttribute('role','status');status.textContent=notice;$('box').firstElementChild.after(status)}
 $('mpClose').onclick=exitScreen;if(session)lounge();
 if(/^[A-Z2-9]{6}$/.test(prefill))action(async()=>{if(!session&&!await login())return;await join(prefill)});
}
function claim(code,gen){membershipRevision++;store(KEY,JSON.stringify({code}));if(current(gen))enter(code)}
async function join(code){const gen=generation;await api('join',{code});claim(code,gen);clearInvite()}
function enter(code){clearPairTimers();generation++;room={code};store(KEY,JSON.stringify(room));shownRound=0;game=null;screen='loading';last=null;overlay(base()+'<p>'+T('Connecting…','正在连接……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button>');$('mpExit').onclick=exitScreen;poll()}
function shareControls(){return '<label class="lab">'+T('Invitation link','邀请链接')+'<input id="mpVisibleLink" readonly aria-label="'+T('Invitation link','邀请链接')+'" value="'+esc(invite())+'"></label><div class="row"><button class="btn" id="mpCopy">'+T('Copy link','复制链接')+'</button><button class="btn" id="mpShare">'+T('Share','分享')+'</button><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div>'}
function wireShare(){
 $('mpExit').onclick=exitScreen;$('mpVisibleLink').onclick=e=>e.target.select();
 $('mpCopy').onclick=async()=>{const gen=generation;try{await navigator.clipboard.writeText(invite());if(current(gen)&&$('multiError'))$('multiError').textContent=T('Invitation copied.','邀请已复制。')}catch{if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}}};
 $('mpShare').onclick=async()=>{const gen=generation;try{if(navigator.share){await navigator.share({title:T('Mind Garden invitation','心灵花园邀请'),url:invite()});return}}catch(e){if(e.name==='AbortError')return}if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}};
}
function roundChoices(){return '<label class="lab">'+T('Number of rounds in your session','本次游戏的回合数')+'<select id="mpRoundCount">'+Array.from({length:20},(_,i)=>i+1).map(n=>'<option value="'+n+'"'+(n===3?' selected':'')+'>'+n+'</option>').join('')+'</select></label>'}
function modeOptions(){return MODES.map(m=>'<option value="'+m[0]+'"'+(m[0]===window.MindGardenPreferredRoomMode?' selected':'')+'>'+esc(m[0]==='bingo9'?T('Picture bingo · host-paced','图片宾果 · 房主控制节奏'):save.lang==='zh'?(m[2]||tr(m[1])):m[1])+'</option>').join('')}
function people(s){return '<ul class="mp-roster">'+s.players.map(p=>'<li>'+user(p.name)+(s.players.filter(q=>q.name.trim().toLowerCase()===p.name.trim().toLowerCase()).length>1?' <small translate="no">· '+esc(p.id.slice(-4))+'</small>':'')+(p.id===session?.id?' <small>'+T('You','你')+'</small>':'')+(p.host?' <small>'+T('Host','房主')+'</small>':'')+'<span>'+ (p.departed?T('Left room','已退出'):p.skipped?T('Not finished','未完成'):p.score!==null?T('Finished','已完成'):s.started?(p.beganAt?T('Started','已开始'):T('Waiting for Begin','等待点击开始')):T('Joined','已加入'))+' · '+(s.serverTime-p.lastSeen<15000?T('Online','在线'):T('Reconnecting','重新连接中'))+'</span></li>').join('')+'</ul>'}
function renderLobby(s){screen='lobby';overlay(base(s)+'<p>'+T('Planned rounds: ','计划回合数：')+(s.totalRounds||T('Legacy room · finish manually','旧版房间 · 手动结束'))+'</p><h3 id="mpPlayerCount"></h3><div id="mpRoster"></div><div id="mpDelivery" aria-live="polite"></div>'+(s.host?'<label class="lab">'+T('Activity','活动')+'<select id="mpMode">'+modeOptions()+'</select></label><button class="btn main" id="mpLaunch">'+T('Prepare first round','准备第一轮')+'</button><p>'+T('Wait for your friends to join. After launch, each player presses Begin when ready. No new players can join after launch.','请等待朋友加入。房主开始后，每位玩家准备好再点击开始。开始后不能加入新玩家。')+'</p>':'<p>'+T('Wait for the host to prepare a round, then press Begin when you are ready.','等待房主准备回合，准备好后再点击开始。')+'</p>')+(s.host?'<button class="btn" id="mpCancelRoom">'+T('Cancel / close room','取消 / 关闭房间')+'</button>':'')+shareControls()+'<p id="multiError" role="alert"></p>');wireShare();if($('mpCancelRoom'))$('mpCancelRoom').onclick=cancelRoom;if(s.host)$('mpLaunch').onclick=()=>action(async()=>{const state=await api('launch',{...room,round:0,mode:$('mpMode').value});accept(state)});updateLobby(s)}
function updateLobby(s){if($('mpPlayerCount'))$('mpPlayerCount').textContent=s.players.filter(p=>!p.departed).length+'/8 '+T('players joined','位玩家已加入');if(s.players&&$('mpRoster'))$('mpRoster').innerHTML=people(s);if($('mpLaunch'))$('mpLaunch').disabled=s.players.filter(p=>!p.departed).length<2;
 if($('mpDelivery')&&s.host)$('mpDelivery').innerHTML='<p>'+T('Invitation delivery','邀请送达')+': '+s.invitations.filter(p=>p.receivedAt).length+'/'+s.invitations.length+'</p><ul class="mp-receipts">'+s.invitations.map(p=>'<li>'+user(p.name)+' — '+(p.receivedAt?T('Room code received','已收到房间码'):T('Awaiting connection','等待连接'))+'</li>').join('')+'</ul>';
}
async function poll(){if(!room||last?.sessionFinished||screen==='closed'||pollRequest?.gen===generation||document.hidden||!current())return;const gen=generation,c=room.code,ticket={gen};pollRequest=ticket;try{const s=await api('status',{...room,seenRound:shownRound});if(!current(gen)||room?.code!==c)return;accept(s);if($('mpConnection'))$('mpConnection').textContent=''}catch(e){if(current(gen)){if([401,403,404,410].includes(e.status)){room=null;game=null;screen='closed';generation++;remove(KEY);remove(GAME);if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);$('onlineInvitation')?.remove()}overlay('<h2>'+T('Room unavailable','房间不可用')+'</h2><p>'+esc(save.lang==='zh'&&window.tr?tr(e.message):e.message)+'</p><button class="btn" id="mpBackLobby">'+T('Back to lobby','返回大厅')+'</button>');$('mpBackLobby').onclick=menu;return}if($('mpConnection'))$('mpConnection').textContent=T('Connection interrupted. Reconnecting; your room and score are kept.','连接中断，正在重连；房间和积分已保留。');error(e)}}finally{if(pollRequest===ticket)pollRequest=null}}
function endRound(){if(confirm(T('End this round? Unfinished players receive no points.','结束本轮？未完成的玩家本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:last.round})))}
function liveScores(s){const players=[...s.players].sort((a,b)=>(b.total||0)-(a.total||0));return '<h3>'+T('Room rankings','房间排名')+'</h3><p>'+T('Saved points so far; this round updates when results are submitted.','已保存的积分；本轮成绩提交后更新。')+'</p><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map(p=>'<tr><td>'+(1+players.filter(q=>(q.total||0)>(p.total||0)).length)+'</td><td>'+user(p.name)+'</td><td>'+(p.total||0)+'</td></tr>').join('')+'</tbody></table></div>'}
function livePanel(){if(!last)return;const panel=document.createElement('section');panel.className='mp-live';panel.innerHTML='<h3>'+T('Room players · live status','房间玩家 · 实时状态')+'</h3><div id="mpRoster">'+people(last)+'</div><div id="mpLiveScores">'+liveScores(last)+'</div>'+(last.host?'<button class="btn sm" id="mpEndRound">'+T('End current round','结束本轮')+'</button>':'');const target=$('box').querySelector('.mp-board,.gridm,#onlineBingo,.mp-ready');(target||$('multiError')).before(panel);if($('mpEndRound'))$('mpEndRound').onclick=endRound}

function accept(s){if(!current()||!room||s.code!==room.code)return;last=s;if($('mpLiveScores'))$('mpLiveScores').innerHTML=liveScores(s);if(s.players&&s.round)rememberResult(s);if(s.left||(s.closed&&!s.sessionFinished)){releaseRoom(s.code,s.left?T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'):T('The host closed this room. You can join or create another room.','房主已关闭此房间。您可以加入或创建其他房间。'));return}if(s.players&&$('mpRoster'))$('mpRoster').innerHTML=people(s);
 if(!s.started){if(screen!=='lobby')renderLobby(s);else updateLobby(s);return}
 const mine=s.players.find(p=>p.id===s.me);if(s.finished){if(screen!=='results'||shownRound!==s.round||!!$('mpSessionFinished')!==!!s.sessionFinished)results(s);return}
 if(s.mode==='bingo9'&&!mine?.skipped){shownRound=s.round;game=null;if(s.requiresBegin&&!s.allReady)drawBingoReady(s);else drawBingoOnline(s);return}
 if(mine?.score!==null||mine?.skipped){shownRound=s.round;if(screen!=='waiting')waitingForOther(s);else updateLobby(s);return}
 if(shownRound!==s.round||!game){shownRound=s.round;screen='game';const saved=read(GAME);if(saved?.code===room.code&&saved.round===s.round&&saved.mode===s.mode){game=saved;if(saved.done)game.done=new Set(saved.done);game.locked=false;if(game.open?.length===2)game.open=[];if(game.submitted){finish();return}game.mode.startsWith('pairs')?draw('Find the matching picture.'):game.phase==='ready'?drawQuizReady():drawQuiz('Choose the best answer. Take your time.')}else start(s)}
}
async function beginRound(button,ready){
 if(!button||button.disabled||!room)return;button.disabled=true;button.setAttribute('aria-busy','true');
 const gen=generation,c=room.code,r=last.round;
 try{const state=await api('begin',{code:c,round:r});if(!current(gen)||room?.code!==c||last?.round!==r)return;
  if(state.closed||state.finished||state.left||state.round!==r){accept(state);return}
  last=state;ready(state);
 }catch(e){if(current(gen))error(e)}finally{if(button.isConnected){button.disabled=button.id==='mpBeginPairs'&&game?.phase!=='ready';button.removeAttribute('aria-busy')}}
}
function drawQuizReady(){
 const g=game;screen='game';checkpoint();
 overlay(base(last)+'<section class="mp-ready"><h3>'+esc(activityName(g.mode))+'</h3><p>'+T('Press Begin when you are ready. Questions stay hidden and your timer has not started.','准备好后点击开始。题目暂不显示，计时尚未开始。')+'</p><button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button></section><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button><p id="multiError" role="alert"></p>');
 $('mpExit').onclick=exitScreen;livePanel();
 $('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),state=>{if(game!==g)return;g.started=Date.now();g.phase='playing';checkpoint();drawQuiz(T('Choose the best answer. Take your time.','选择最佳答案，不用着急。'))});
}
function drawBingoReady(s){
 const mine=s.players.find(p=>p.id===s.me),ready=!!mine.beganAt;
 if(screen==='bingo-ready'&&!!$('mpBeginGame')===!ready){updateLobby(s);return}
 screen='bingo-ready';
 overlay(base(s)+'<section class="mp-ready"><h3>'+T('Picture bingo · ready check','图片宾果 · 准备确认')+'</h3><p>'+T('Everyone must press Begin before the first picture appears. The host cannot call ahead while someone is not ready.','所有人点击开始后才显示第一张图片。有人未准备好时，房主不能提前叫图。')+'</p>'+(ready?'<p>'+T('You are ready. Waiting for the other players.','您已准备好，正在等待其他玩家。')+'</p>':'<button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button>')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
 wireShare();livePanel();if($('mpBeginGame'))$('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),accept);
}
let bingoViewKey='';
function drawBingoOnline(s){
 const kit=window.MindGardenNewGames,mine=s.players.find(p=>p.id===s.me),called=s.bingo?.called||1,mask=mine?.bingoMask||0;
 const key=JSON.stringify([s.code,s.round,called,s.players.map(p=>[p.id,p.bingoMask,p.score,p.skipped,p.departed])]);
 if(screen==='bingo'&&key===bingoViewKey&&$('onlineBingo'))return;
 const focused=document.activeElement,focusID=focused?.id,focusTile=focused?.getAttribute('data-room-bingo');
 bingoViewKey=key;screen='bingo';const items=kit.bingoItems(s.seed,s.round),order=shuffle(Array.from({length:9},(_,i)=>i),randomizer(s.seed^parseInt(s.me.slice(0,8),16))),marked=new Set(order.filter(i=>mask&(1<<i))),current=items[called-1],members=s.players.filter(p=>!p.departed&&!p.skipped),ready=members.filter(p=>p.bingoMask&(1<<(called-1))).length;
 overlay(base(s)+'<section id="onlineBingo" class="new-game" translate="no"><h3>'+T('Picture bingo · play together','图片宾果 · 一起玩')+'</h3><p>'+T('The host calls each picture. Mark any picture already called. Complete all 9 together; there is no speed bonus.','房主逐张叫图，您可以标记任何已经叫到的图片。一起完成9张图片，没有速度奖励。')+'</p><div class="bingo-call" tabindex="-1" id="roomBingoCall" role="status"><span class="bingo-picture" aria-hidden="true">'+gamePicture(current[0])+'</span><strong>'+T(current[1],current[2])+'</strong><small>'+T('Call ','已叫')+called+'/9 · '+ready+'/'+members.length+T(' players marked this picture','位玩家已标记此图')+'</small></div>'+kit.bingoBoard(items,order,called,marked,'data-room-bingo')+'<p>'+marked.size+'/9 '+T('marked on your card','张已标记')+'</p><details><summary>'+T('Pictures called so far','已经叫到的图片')+'</summary><div class="bingo-called">'+items.slice(0,called).map(p=>'<span>'+p[0]+' '+T(p[1],p[2])+'</span>').join('')+'</div></details><div class="new-actions">'+(s.host?'<button class="btn main" id="roomBingoNext"'+(called>=9?' disabled':'')+'>'+T('Call next picture','叫下一张图片')+'</button>':'<p>'+T('The host will call the next picture when everyone is ready.','大家准备好后，房主会叫下一张图片。')+'</p>')+'<button class="btn" id="roomBingoSpeak"'+(!window.speechSynthesis?' disabled':'')+'>'+T('Read picture name','朗读图片名称')+'</button></div>'+(mine.score!==null?'<p role="status">'+T('Your full card and result are saved. Waiting for the other players.','您的完整卡片与成绩已保存，正在等待其他玩家。')+'</p>':'')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
 wireShare();livePanel();document.querySelectorAll('[data-room-bingo]').forEach(b=>b.onclick=()=>{const index=+b.dataset.roomBingo;if(index>=called){$('multiError').textContent=T('That picture has not been called yet.','这张图片还没有叫到。');return}action(async()=>accept(await api('bingoMark',{...room,round:s.round,index})))});
 if($('roomBingoNext'))$('roomBingoNext').onclick=()=>action(async()=>accept(await api('bingoCall',{...room,round:s.round,called})));
 $('roomBingoSpeak').onclick=()=>kit.readPicture(current);
 if(focusID&&$(focusID)&&!$(focusID).disabled)$(focusID).focus({preventScroll:true});else if(focusTile!==null&&focusTile!==undefined){const b=document.querySelector('[data-room-bingo="'+focusTile+'"]');(b&&!b.disabled?b:$('roomBingoCall')).focus({preventScroll:true})}
}
setInterval(poll,1500);
 function randomizer(seed){let x=(seed>>>0)||1;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
 function shuffle(a,rand){for(let i=a.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
 function problems(mode,rand){let qs=[];const count=mode.endsWith('12')?12:8;const baseMode=mode.replace('12','');for(let i=0;i<count;i++){
  if(baseMode==='sums'){const a=3+Math.floor(rand()*35),b=2+Math.floor(rand()*15),sub=rand()>.5,ans=sub?a-b:a+b;qs.push({title:a+(sub?' − ':' + ')+b+' = ?',answer:String(ans),options:shuffle([ans,ans+1,ans-1,ans+3].map(String),rand)})}
  else if(baseMode==='patterns'){const start=1+Math.floor(rand()*20),step=2+Math.floor(rand()*7),ans=start+step*4;qs.push({title:[0,1,2,3].map(j=>start+j*step).join(', ')+', ?',answer:String(ans),options:shuffle([ans,ans-step,ans+step,ans+2*step].map(String),rand)})}
  else{const groups=[['🍎','🍌','🍓','🍇'],['🐶','🐱','🐢','🐦'],['🚲','🚂','🚗','🚌'],['🌻','🌷','🌹','🌼']];let k=Math.floor(rand()*4),other=(k+1+Math.floor(rand()*3))%4;let choices=shuffle(groups[k].slice(0,3).concat(groups[other][Math.floor(rand()*4)]),rand);qs.push({title:'Which picture belongs to a different group?',answer:groups[other].find(e=>choices.includes(e)),options:choices})}
 }return qs}
 function start(s){const began=s.players.find(p=>p.id===s.me)?.beganAt,started=began?Date.now()-(s.serverTime-began):null;const mode=s.mode||'pairs6',rand=randomizer((s.seed^Math.imul(s.round,0x9E3779B1))>>>0);
  if(mode.startsWith('pairs')){const count=mode==='pairs10'?10:6,pool=['🌻','🍎','🐦','🐶','🌈','🚲','🌷','🍓','🐢','🎹','🏡','🦋','🍊','☕','🌹','🚂','🎨','🪁','🥕','🐞'];const values=shuffle(pool.slice(),rand).slice(0,count);game={mode,round:s.round,deck:shuffle(values.concat(values),rand),open:[],done:new Set(),moves:0,locked:false,started:null,submitted:false,saved:false,phase:began?'preview':'ready'};if(began)game.previewEndsAt=started+pairSeconds(game)*1000;draw()}
  else {game={mode,round:s.round,questions:EXTRA?.questions(mode,s.seed,s.round)?.map(q=>({...q,title:T(...q.prompt),labels:q.labels?Object.fromEntries(Object.entries(q.labels).map(([k,v])=>[k,T(...v)])):null}))||problems(mode,rand),answers:[],index:0,moves:0,correct:0,started,phase:began?'playing':'ready',submitted:false,saved:false};if(began)drawQuiz('Choose the best answer. Take your time.');else drawQuizReady()}
  checkpoint();
 }
 function progress(s){return '<p class="tip">Round '+s.round+' · '+(MODES.find(m=>m[0]===s.mode)?.[1]||s.mode)+'</p>'}
 function pairSeconds(g){return g.mode==='pairs10'?8:5}
 function pairMessages(g){return {
  ready:T('Press Begin to see every picture for '+pairSeconds(g)+' seconds.','点击开始，所有图片将显示 '+pairSeconds(g)+' 秒。'),
  preview:T('Remember the pictures. They close automatically.','记住图片的位置。倒计时结束后会自动翻回。'),
  playing:T('Find the matching picture.','找出相同的图片。'),
  match:T('Lovely match!','配对成功！'),
  miss:T('Not a match. Try another pair.','这两张不同，再试一对。'),
  saved:T('All pairs found. Saving your result…','已找到全部配对，正在保存成绩……')
 }}
 function settlePairPreview(g){
  if(g.phase!=='preview'||Date.now()<g.previewEndsAt)return false;
  g.phase='playing';g.started=g.previewEndsAt;delete g.previewEndsAt;clearInterval(previewTimer);previewTimer=null;return true;
 }
 function normalizePairs(g){
  // Preserve ongoing V4.0.1 rounds; an unused unlimited preview becomes ready.
  if(!['ready','preview','playing'].includes(g.phase))g.phase=g.preview?'ready':'playing';
  delete g.preview;
  if(g.phase==='preview'&&!Number.isFinite(g.previewEndsAt))g.phase='ready';
  settlePairPreview(g);
 }
 function runPairClock(g){
  clearInterval(previewTimer);previewTimer=null;if(g.phase!=='preview')return;
  const tick=()=>{
   if(game!==g||screen!=='game'||!current()||!document.querySelector('.mp-board')){clearInterval(previewTimer);previewTimer=null;return}
   const ended=settlePairPreview(g);
   if(ended){updatePairs(pairMessages(g).playing);checkpoint();const board=document.querySelector('.mp-board');if(document.activeElement===board)board.querySelector('[data-tile="0"]')?.focus({preventScroll:true})}
   else updatePairControls(g);
  };
  previewTimer=setInterval(tick,100);tick();
 }
 function mountPairArtwork(board){
  for(const image of board.querySelectorAll('.game-illustration')){
   image.loading='eager';const picture=image.parentElement;
   const ready=()=>{const show=()=>{if(image.isConnected&&image.naturalWidth>0)picture.classList.add('mp-art-ready')};if(image.decode)image.decode().then(show,show);else show()};
   image.addEventListener('load',ready,{once:true});
   image.addEventListener('error',()=>picture.classList.remove('has-art','mp-art-ready'),{once:true});
   if(image.complete&&image.naturalWidth>0)ready();
  }
 }
 // Mount the card board once. Updating only its state preserves touch targets,
 // keyboard focus, scroll position and already-loaded artwork between taps.
 function draw(msg){
  screen='game';const g=game;if(!g)return;clearPairTimers();normalizePairs(g);checkpoint();const messages=pairMessages(g);
  const count=g.deck.length/2,cards=g.deck.map((x,i)=>'<button type="button" class="mp-tile" data-tile="'+i+'"><span class="mp-card-back" aria-hidden="true">❀</span><span class="mp-card-face" aria-hidden="true">'+gamePicture(x)+'</span></button>').join('');
  overlay(base({round:g.round})+'<div class="mp-pair-status"><p id="mpPairMessage" role="status"></p>'+Object.values(messages).map(text=>'<p class="mp-message-reserve" aria-hidden="true">'+esc(text)+'</p>').join('')+'</div><p id="mpPairCount"></p><div id="mpPairPreview" class="mp-pair-controls"><button type="button" class="btn main" id="mpBeginPairs">'+T('Begin','开始')+'</button><p id="mpPairPhase" aria-live="off"></p><p class="mp-phase-reserve" aria-hidden="true">'+T('Remember: 8 seconds','记忆时间：8 秒')+'</p></div><div class="mp-board" tabindex="-1" role="group" aria-label="'+T('Matching cards','配对卡片')+'" style="grid-template-columns:repeat('+(count===10?5:4)+',minmax(0,1fr))">'+cards+'</div><div class="row"><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div><p id="multiError" role="alert"></p>');
  $('mpExit').onclick=exitScreen;
  document.querySelector('.mp-board').onclick=e=>{const b=e.target.closest('[data-tile]');if(b)flip(Number(b.dataset.tile))};
  $('mpBeginPairs').onclick=()=>beginRound($('mpBeginPairs'),state=>{
   if(game!==g||g.phase!=='ready')return;
   // Grant the full study period after the Begin response arrives.
   g.phase='preview';g.previewEndsAt=Date.now()+pairSeconds(g)*1000;g.started=null;
   settlePairPreview(g);checkpoint();updatePairs(messages[g.phase]);document.querySelector('.mp-board').focus({preventScroll:true});runPairClock(g);
  });
  mountPairArtwork(document.querySelector('.mp-board'));
  updatePairs(messages[g.phase]||msg||messages.playing);livePanel();runPairClock(g);
 }
 function updatePairs(msg){
  const g=game,board=document.querySelector('.mp-board');if(!g||!board)return;
  for(const button of board.querySelectorAll('[data-tile]')){
   const i=Number(button.dataset.tile),matched=g.done.has(i),face=g.phase==='preview'||matched||g.open.includes(i);
   if(button.classList.contains('revealed')!==face)button.classList.toggle('revealed',face);
   if(button.classList.contains('matched')!==matched)button.classList.toggle('matched',matched);
   const disabled=g.phase!=='playing'||matched||g.submitted;if(button.disabled!==disabled)button.disabled=disabled;
   const label=face?g.deck[i]:T('Hidden picture ','未翻开的图片 ')+(i+1);
   if(button.getAttribute('aria-label')!==label)button.setAttribute('aria-label',label);
   if(button.getAttribute('aria-pressed')!==String(face))button.setAttribute('aria-pressed',String(face));
  }
  const message=$('mpPairMessage');if(message&&message.textContent!==msg)message.textContent=msg;
  const count=$('mpPairCount'),label=T(g.done.size/2+' of '+g.deck.length/2+' pairs · '+g.moves+' turns','已找到 '+g.done.size/2+'/'+g.deck.length/2+' 对 · '+g.moves+' 次');if(count&&count.textContent!==label)count.textContent=label;
  updatePairControls(g);
 }
 function updatePairControls(g){
  const controls=$('mpPairPreview');if(!controls)return;
  if(controls.dataset.phase!==g.phase)controls.dataset.phase=g.phase;
  const begin=$('mpBeginPairs'),disabled=g.phase!=='ready';if(begin.disabled!==disabled)begin.disabled=disabled;
  const phase=$('mpPairPhase'),text=g.phase==='preview'?T('Remember: '+Math.max(0,Math.ceil((g.previewEndsAt-Date.now())/1000))+' seconds','记忆时间：'+Math.max(0,Math.ceil((g.previewEndsAt-Date.now())/1000))+' 秒'):T('Matching','配对中');if(phase.textContent!==text)phase.textContent=text;
 }
 function flip(i){
  const g=game;if(!g)return;if(settlePairPreview(g))checkpoint();if(g.phase!=='playing'||g.submitted||!Number.isInteger(i)||i<0||i>=g.deck.length||g.open.includes(i)||g.done.has(i))return;
  // A new card tap can dismiss an unmatched pair immediately. It is never lost
  // behind a fixed lockout or delayed until another tap.
  if(g.locked){clearTimeout(mismatchTimer);g.open=[];g.locked=false}
  g.open.push(i);
  if(g.open.length<2){updatePairs(T('Find the matching picture.','找出相同的图片。'));queueCheckpoint();return}
  g.moves++;const[a,b]=g.open;
  if(g.deck[a]===g.deck[b]){
   g.done.add(a);g.done.add(b);g.open=[];
   if(g.done.size===g.deck.length){g.submitted=true;updatePairs(T('All pairs found. Saving your result…','已找到全部配对，正在保存成绩……'));finish();return}
   updatePairs(T('Lovely match!','配对成功！'));queueCheckpoint();
  }else{
   g.locked=true;updatePairs(pairMessages(g).miss);queueCheckpoint();
   mismatchTimer=setTimeout(()=>{if(game===g&&g.locked){g.open=[];g.locked=false;checkpoint();if(current())updatePairs(pairMessages(g).playing)}},950);
  }
 }
 function drawQuiz(msg){screen='game';checkpoint();const g=game;if(!g)return;const q=g.questions[g.index];overlay(base({round:g.round})+'<p>'+esc(msg)+'</p><p>Question '+(g.index+1)+' of '+g.questions.length+'</p><div class="seqline">'+gamePrompt(q.title)+'</div><div class="gridm" style="--c:2">'+q.options.map((o,i)=>'<button class="big '+(isGamePicture(q.labels?.[o]||o)?'picture-answer':'txt')+'" data-answer="'+i+'">'+(isGamePicture(q.labels?.[o]||o)?gamePicture(q.labels?.[o]||o):esc(q.labels?.[o]||o))+'</button>').join('')+'</div><div class="row"><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div><p id="multiError" role="alert"></p>');$('mpExit').onclick=exitScreen;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer));livePanel()}
 function answer(i){const g=game;if(!g||g.submitted||g.phase==='ready')return;const q=g.questions[g.index],good=q.options[i]===q.answer;(g.answers||(g.answers=[])).push(q.options[i]);g.moves+=good?1:2;if(good)g.correct++;g.index++;if(g.index===g.questions.length){g.submitted=true;finish()}else drawQuiz(good?'Well done!':'Good try! The answer was '+(q.labels?.[q.answer]||q.answer)+'.')}

async function finish(){const g=game;if(!g||!room)return;checkpoint();const gen=generation,c=room.code;screen='saving';overlay(base({round:g.round})+'<p>'+T('Saving your result…','正在保存成绩……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button>');$('mpExit').onclick=exitScreen;
 try{const s=await api('submit',{code:c,round:g.round,moves:g.moves,answers:g.answers,elapsed:Math.max(1,Math.floor((Date.now()-g.started)/1000))});if(!current(gen)||room?.code!==c)return;g.saved=true;checkpoint();accept(s)}catch(e){if(!current(gen))return;error(e);const b=document.createElement('button');b.className='btn';b.textContent=T('Retry saving','重新保存');b.onclick=()=>finish();$('multiError').after(b)}}
function waitingForOther(s){screen='waiting';overlay(base(s)+'<h3>'+T('Your round is complete','本轮已完成')+'</h3><div id="mpRoster"></div><p>'+T('Waiting for the other players. Your result is saved.','等待其他玩家，成绩已保存。')+'</p>'+ (s.host?'<button class="btn" id="mpEndRound">'+T('End round for unfinished players','结束未完成玩家的本轮游戏')+'</button>':'')+shareControls()+'<p id="multiError" role="alert"></p>');wireShare();updateLobby(s);if($('mpEndRound'))$('mpEndRound').onclick=()=>{if(confirm(T('End this round? Unfinished players will be marked not finished and receive no points for this round.','结束本轮？未完成的玩家将标记为未完成，本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:s.round})))}}
function rememberResult(s){const mine=s.players?.find(p=>p.id===s.me);if(!mine||(!mine.skipped&&(mine.score===null||mine.score===undefined))||!s.round)return;const p=me();p.multiplayerHistory=p.multiplayerHistory||[];const key=s.code+':'+s.seed+':'+s.round;if(!p.multiplayerHistory.some(r=>r.key===key)){p.multiplayerHistory.push({key,date:new Date(s.serverTime||Date.now()).toISOString(),activity:s.mode,round:s.round,score:mine.score,total:mine.total,skipped:!!mine.skipped});p.multiplayerHistory=p.multiplayerHistory.slice(-300);persist()}}
function results(s){rememberResult(s);if(s.sessionFinished){membershipRevision++;if(read(KEY)?.code===s.code)remove(KEY);clearInvite()}screen='results';game=null;shownRound=s.round;remove(GAME);const players=[...s.players].sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name));
 overlay(base(s)+(s.sessionFinished?'<h3 id="mpSessionFinished">'+T('Session complete','本次游戏已完成')+'</h3><p>'+T('Final scores are saved. Everyone can now join or create another room.','最终成绩已保存。所有人现在可以加入或创建其他房间。')+'</p>':'')+'<h3>'+T('Room leaderboard','房间排行榜')+'</h3><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('This round','本轮')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map((p,i)=>'<tr><td>'+(1+players.filter(x=>x.total>p.total).length)+'</td><td>'+user(p.name)+'</td><td>'+(p.departed?T('Left room','已退出'):p.skipped?T('Not finished','未完成'):p.score)+'</td><td>'+p.total+'</td></tr>').join('')+'</tbody></table></div>'+(s.sessionFinished?'<button class="btn main" id="mpFinalLobby">'+T('Back to online lobby','返回在线大厅')+'</button>':s.host?'<label class="lab">'+T('Next activity','下一项活动')+'<select id="mpMode">'+modeOptions()+'</select></label><div class="row"><button class="btn main" id="mpNext">'+T('Prepare next round','准备下一轮')+'</button><button class="btn" id="mpCloseRoom">'+T('Finish session','结束本次游戏')+'</button></div>':'<p>'+T('Waiting for the host to start the next round.','等待房主开始下一轮。')+'</p>')+shareControls()+'<p id="multiError" role="alert"></p>');wireShare();
 if(s.sessionFinished){$('mpFinalLobby').onclick=()=>{suspend();menu()};$('mpExit').textContent=T('Back to garden','返回花园')}
 else if(s.host){$('mpNext').onclick=()=>action(async()=>accept(await api('advance',{...room,round:s.round,mode:$('mpMode').value})));$('mpCloseRoom').onclick=()=>action(async()=>accept(await api('finishSession',{...room,round:s.round})))}
}

function activityName(id){const m=MODES.find(v=>v[0]===id);return m?(save.lang==='zh'?(m[2]||window.tr?.(m[1])||m[1]):m[1]):T('Earlier activity','较早的活动')}
function historyFrame(html){overlay('<section class="online-history"><h2>'+T('Saved online rankings','已保存的在线排名')+'</h2>'+html+'<div class="row"><button class="btn" id="historyLobby">'+T('Online lobby','在线大厅')+'</button><button class="btn" id="historyClose">'+T('Close','关闭')+'</button></div><p id="multiError" role="alert"></p></section>');$('historyLobby').onclick=menu;$('historyClose').onclick=exitScreen}
async function openHistory(offset=0){
 checkpoint();clearPairTimers();generation++;const gen=generation;room=null;game=null;last=null;screen='history';
 if(!session){historyFrame('<p>'+T('Enter the online lobby to view rooms linked to this browser’s online identity.','进入在线大厅，查看与此浏览器在线身份关联的房间。')+'</p>');return}
 historyFrame('<p>'+T('Loading your rooms…','正在加载您的房间……')+'</p>');
 const data=await api('history',{offset});if(!current(gen))return;
 historyFrame('<p>'+T('Completed scores are kept after a room closes. Only participants can view a room’s rankings. History follows this browser’s online identity; clearing site data removes access to that identity.','房间关闭后，已完成的成绩仍会保留。仅参与者可查看房间排名。记录与此浏览器的在线身份关联，清除网站数据会失去该身份的访问权限。')+'</p><div class="history-rooms">'+(data.rooms.length?data.rooms.map(r=>'<button class="history-room" data-history-room="'+esc(r.code)+'"><strong>'+T('Room ','房间 ')+esc(r.code)+'</strong><span>'+esc(new Date(r.createdAt).toLocaleString(save.lang==='zh'?'zh-CN':'en-GB'))+'</span><small>'+r.completed+T(' completed rounds · ','轮已完成 · ')+r.total+T(' points','分')+' · '+(r.status==='closed'?T('Closed','已关闭'):T('Open','进行中'))+'</small></button>').join(''):'<p>'+T('No played rooms yet. Completed online rounds will appear here.','尚无游戏房间记录。在线游戏回合会显示在这里。')+'</p>')+'</div><div class="row">'+(offset?'<button class="btn" id="historyPrevious">'+T('Previous rooms','上一页房间')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="historyNext">'+T('More rooms','更多房间')+'</button>':'')+'</div>');
 document.querySelectorAll('[data-history-room]').forEach(b=>b.onclick=()=>action(()=>openRoomHistory(b.dataset.historyRoom,0,offset)));
 if($('historyPrevious'))$('historyPrevious').onclick=()=>action(()=>openHistory(Math.max(0,offset-20)));if($('historyNext'))$('historyNext').onclick=()=>action(()=>openHistory(data.nextOffset));
}
async function openRoomHistory(code,offset=0,roomOffset=0){const gen=generation;historyFrame('<p>'+T('Loading saved results…','正在加载已保存成绩……')+'</p>');const data=await api('rankings',{code,offset});if(!current(gen))return;
 const table=rows=>'<div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Points','积分')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
 const summary=table(data.players.map(p=>'<tr><td>'+(p.rank||'—')+'</td><td>'+user(p.name)+'</td><td>'+p.total+'<br><small>'+p.completed+T(' completed','轮已完成')+'</small></td></tr>').join(''));
 historyFrame('<h3>'+T('Room ','房间 ')+esc(code)+'</h3><p>'+T('Totals across this room’s completed rounds. Equal scores share a rank.','汇总此房间已完成回合的积分，同分并列。')+'</p>'+summary+'<h3>'+T('Round history','回合记录')+'</h3>'+data.rounds.map(r=>'<details class="saved-round"><summary>'+T('Round ','第')+r.round+' · '+esc(activityName(r.mode))+'</summary>'+table(r.results.map(p=>'<tr><td>'+(p.score===null?'—':1+r.results.filter(v=>v.score!==null&&v.score>p.score).length)+'</td><td>'+user(p.name)+'</td><td>'+(p.score===null?T('Not finished','未完成'):p.score)+'</td></tr>').join(''))+'</details>').join('')+'<div class="row">'+(offset?'<button class="btn" id="roundsPrevious">'+T('Newer rounds','较新回合')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="roundsNext">'+T('Earlier rounds','较早回合')+'</button>':'')+'<button class="btn" id="historyRooms">'+T('Back to my rooms','返回我的房间记录')+'</button></div>');
 $('historyRooms').onclick=()=>action(()=>openHistory(roomOffset));if($('roundsPrevious'))$('roundsPrevious').onclick=()=>action(()=>openRoomHistory(code,Math.max(0,offset-20),roomOffset));if($('roundsNext'))$('roundsNext').onclick=()=>action(()=>openRoomHistory(code,data.nextOffset,roomOffset));
}
const localLeaderboard=window.lbView;window.lbView=function(...args){localLeaderboard(...args);const tabs=document.createElement('div');tabs.className='ranking-tabs';tabs.innerHTML='<button class="btn" type="button" aria-pressed="true">'+T('On this device','此设备')+'</button><button class="btn" type="button" id="leaderboardOnline">'+T('Online room rankings','在线房间排名')+'</button>';$('box').querySelector('h2')?.after(tabs);$('leaderboardOnline').onclick=()=>action(()=>openHistory())};

window.addEventListener('pagehide',checkpoint);
function refreshOnline(){if(current()&&game?.phase==='preview')runPairClock(game);poll();lounge()}
window.addEventListener('focus',refreshOnline);document.addEventListener('visibilitychange',()=>{if(document.hidden)checkpoint();else refreshOnline()});
$('bOnline').onclick=menu;
if(session)startLounge();
if(/^[A-Z2-9]{6}$/i.test(new URLSearchParams(location.search).get('room')||''))setTimeout(menu,350);
})();

;
/* i18n.js */
/* Mind Garden – English / 简体中文 layer. Unmatched strings safely fall back to English. */
(function(){
var ZH={"Collapse all":"全部收起","Expand all":"全部展开","Calming music":"舒缓音乐","Garden chimes":"花园风铃","Music box":"八音盒","Warm evening":"温暖黄昏","Ocean waves":"海浪声","Gentle rain":"轻柔雨声","Volume":"音量","Quiet":"轻","Medium":"中","Louder":"大","Music":"音乐","Turn music on":"开启音乐","Turn music off":"关闭音乐","Soft music to help you feel calm and relaxed. Tap a tune to play it.":"柔和的音乐帮助您平静放松。点选一首曲子即可播放。","Stop moving pictures":"停止动态画面","Mind Garden":"心灵花园","Family view":"家人视图","Settings":"设置","Memory games":"记忆游戏","Numbers, logic and shapes":"数字、逻辑与图形","Words and looking":"文字与观察","Choose pictures":"选择图片","Words":"文字","Match the word":"配词语","Pick the word that names the picture.":"选出与图片相符的词语。","Which word matches the picture?":"哪个词语与图片相符？","Leaderboard":"排行榜","Ranking":"排名依据","Overall – correct answers":"总榜——答对数","Continue where you left off":"继续上次的游戏","Best times count games with every answer correct.":"最佳用时只统计全部答对的游戏。","Colour theme":"配色主题","Cream and teal":"奶油与青绿","Warm sand":"暖沙色","Appearance":"外观","Match device":"跟随设备","Light":"浅色","Dark":"深色","Overall – fastest all-correct times":"总榜——全对最快用时","Ranked by fastest games with every answer correct. Overall adds points for each game.":"按全部答对的最快用时排名。总榜按各游戏名次累计积分。","Analogue clock":"指针时钟","Continue":"继续","Continue last game":"继续上次的游戏","Forget last game":"放弃上次的游戏","My photos":"我的照片","My photos for Matching pairs":"配对游戏的我的照片","Add photos":"添加照片","Remove photo":"移除照片","Photos stay on this device. Add at least 6, then choose “My photos” in Matching pairs.":"照片只保存在这台设备上。至少添加 6 张，然后在配对游戏里选择“我的照片”。","Most games played":"对局最多","Best timings":"最佳用时","Ranked by the number of games finished.":"按完成的游戏局数排名。","Ranked by fastest games with every answer correct. “Overall” adds points from each game.":"按全部答对的最快用时排名。“总榜”按各游戏的名次累计积分。","Gold trophy":"金杯","Silver trophy":"银杯","Bronze trophy":"铜杯","Original":"原图","Find the change":"找出变化","One picture has changed. Tap it in the “Find the change” set.":"有一张图片变了。请在“找出变化”那一组里点它。","This summarises each player’s play time and progress. It stays on this device and is never sent anywhere. Continue only if every player agrees.":"这里汇总了每位玩家的游戏时间和进度。内容只保存在这台设备上，不会发送到任何地方。请在所有玩家同意后再继续。","Numerical patterns":"数字规律","Mental arithmetic":"心算","Who's playing?":"谁在玩？","Finish":"完成","Watch the images light up one by one, then click on them accordingly.":"看图片依次亮起，然后照样点出来。","Remove all photos":"删除全部照片","rose": "玫瑰", "daisy": "雏菊", "tree": "树", "carrot": "胡萝卜", "tomato": "番茄", "corn": "玉米", "ladybird": "瓢虫", "snail": "蜗牛", "studio microphone": "录音麦克风", "disc": "光盘", "theatre masks": "戏剧面具", "dancer": "舞者", "clapper board": "场记板", "circus tent": "马戏团帐篷", "carousel": "旋转木马", "door": "门", "bathtub": "浴缸", "broom": "扫帚", "light bulb": "灯泡", "alarm clock": "闹钟", "glasses": "眼镜", "umbrella": "雨伞", "scissors": "剪刀", "elephant": "大象", "monkey": "猴子", "lion": "狮子", "penguin": "企鹅", "frog": "青蛙", "duck": "鸭子", "octopus": "章鱼", "mountain": "山", "noodles": "面条", "rice": "米饭", "dumpling": "饺子", "prawn": "虾", "mango": "芒果", "watermelon": "西瓜", "pineapple": "菠萝", "coconut": "椰子", "egg": "鸡蛋", "bread": "面包", "tea": "茶", "ice cream": "冰淇淋", "soup": "汤", "popcorn": "爆米花", "cookie": "饼干", "peach": "桃子", "lemon": "柠檬", "cherries": "樱桃", "pear": "梨", "honey": "蜂蜜", "lantern": "灯笼", "red packet": "红包", "fireworks": "烟花", "sparkler": "烟火棒", "gift": "礼物", "balloon": "气球", "party popper": "拉炮", "birthday cake": "生日蛋糕", "christmas tree": "圣诞树", "ribbon": "丝带", "mooncake": "月饼", "dragon": "龙", "confetti ball": "彩球", "crown": "皇冠", "trophy": "奖杯", "Food": "美食", "Festivals": "节日", "Break reminders": "休息提醒", "Remind me to rest every": "每隔多久提醒我休息","Numbers": "数字", "Logic": "逻辑", "Shapes and time": "图形与时间", "Observation": "观察", "Take away": "减法", "Find how much to take away.": "找出要减去多少。", "How much do you take away?": "要减去多少？", "Change photo": "更换照片", "Remove my photo": "删除我的照片","Remember the picture": "记住图片", "Look at one picture, then find it again.": "看一张图片，然后把它找出来。", "Count down": "倒数", "Keep taking away the same number.": "一直减去同一个数。", "Missing number": "缺少的数", "Find the number that completes the sum.": "找出让算式成立的数。", "Same group": "同一组", "Find the picture from the same group.": "找出属于同一组的图片。", "Time later": "几小时后", "Work out the time after a few hours.": "算出几小时之后是几点。", "Count it": "数一数", "Count how many of one picture you can see.": "数一数能看到几张同样的图片。", "Find it": "找一找", "Find the named picture in the crowd.": "在众多图片中找出指定的那一张。", "Find the picture": "找图片", "Read the word, then pick its picture.": "读词语，然后选出对应的图片。", "Which picture did you see?": "你刚才看到的是哪一张？", "Find the missing number.": "找出缺少的数。", "Which one belongs to the same group?": "哪一个属于同一组？", "How many of this picture can you see?": "这张图片你能看到几个？", "Which picture matches the word?": "哪张图片与词语相符？", "Choose a picture": "选择图片", "Upload from my device": "从我的设备上传", "Back": "返回","Orchid": "兰花", "Hibiscus": "扶桑花", "Mixed": "混合", "Choose flowers": "选择花朵", "Choose your flowers": "选择你的花朵", "Plant a new garden": "种一座新花园", "Your garden is in full bloom!": "你的花园盛开了！", "Full bloom takes about 60 growth points. Each finished game adds one, plus one for your first game each day: about four weeks at one game a day, three weeks at two, or two weeks at three. Missed days never harm your garden.": "盛开大约需要 60 点成长值。每完成一局加 1 点，每天的第一局再加 1 点：每天玩一局约四周，两局约三周，三局约两周。错过的日子绝不会伤害你的花园。", "🌱 Your garden grew a little.": "🌱 你的花园长大了一点。", "🌱 Every flower bed now has a seed!": "🌱 每个花坛都有了种子！", "🌿 Little sprouts are showing everywhere!": "🌿 到处都冒出了小嫩芽！", "🌷 Buds are forming!": "🌷 花苞正在形成！", "🌸 The flowers are opening!": "🌸 花朵正在绽放！", "🌼 Your garden is in full bloom! Wonderful!": "🌼 你的花园盛开了！太棒了！","Seeds": "种子", "Sprouts": "嫩芽", "Buds": "花苞", "Opening": "绽放", "Full bloom": "盛开", "Play a game to plant your first seed!": "玩一局，种下你的第一颗种子！", "Your first game today counts double!": "今天的第一局算双倍！", "Snack time": "点心时间", "Hawker centre": "小贩中心", "Tea break": "茶点时间", "Market stall": "菜市场摊位", "Feast table": "盛宴", "Master chef": "大厨", "Gift wrap": "包礼物", "Lantern night": "灯笼夜", "Red packets": "红包", "Fireworks": "烟花", "Grand parade": "盛大游行", "Festival star": "节日之星", "First look": "初见", "Familiar faces": "熟悉的面孔", "Precious moments": "珍贵时刻", "Family album": "家庭相册", "Keepsakes": "纪念品", "Treasure box": "宝盒","Menu":"菜单","Pause":"暂停","Done":"完成","On":"开","Off":"关","Stay":"留下","Leave":"离开","Remove":"移除","Card":"卡片","Time left":"剩余时间",
"Gentle games for memory, numbers, logic and shapes. Take your time – there are no wrong turns here. Play a little each day and watch your garden grow.":"轻松的记忆、数字、逻辑和图形游戏。慢慢来，这里没有走错的路。每天玩一点，看着你的花园慢慢长大。",
"Playing a little each day keeps the mind active. Short, regular sessions work best.":"每天玩一点有助于保持头脑活跃。短时间、有规律的练习效果最好。",
"Tap a card to begin.":"点一张卡片开始。","Not quite – have another look.":"不太对——再看看。","Remember where this pair is…":"记住这一对的位置……","Paused":"已暂停","Your time is stopped. Rest as long as you like.":"计时已停止。想休息多久都可以。","Keep playing":"继续玩","Back to menu":"返回菜单","Leave this game?":"离开这局游戏？","Your progress in this round will be lost.":"本局的进度将会丢失。","Level complete!":"过关了！","You finished the garden!":"你完成了整个花园！","Next level":"下一关","Play again":"再玩一次","Time’s up – well tried!":"时间到——已经很棒了！","Try again":"再试一次",
"Lovely match!":"配对成功！","Well spotted!":"眼力真好！","Sharp eyes!":"好眼力！","That’s a pair!":"一对！","Nicely done!":"做得好！",
"Play today to plant your first seed":"今天玩一局，种下第一颗种子","Each day you play, your garden grows.":"每玩一天，花园就长大一点。","Today’s game is done ✓":"今天的游戏已完成 ✓","Play today to keep your garden growing":"今天玩一局，让花园继续生长",
"Sound":"声音","Spoken picture names":"朗读图片名称","Larger text":"更大的文字","Large high-contrast mode":"大字高对比模式","Colour-blind-safe colours":"色盲友好配色","Left-handed layout":"左手布局","Picture set for Matching pairs":"配对游戏的图片组","Who is playing?":"谁在玩？","Tap again to remove":"再点一次以移除","New player’s name":"新玩家的名字","Add player":"添加玩家","Yes, show it":"好的，显示","Not now":"暂时不要","Stop sharing":"停止分享","Clear history":"清除记录","Tap again to clear":"再点一次以清除",
"Garden":"花园","Music":"音乐","Around the home":"家居","Nature":"自然","Fruit":"水果","Animals":"动物","Transport":"交通",
"First blooms":"初绽","Garden path":"花园小径","Sunny border":"向阳花圃","Greenhouse":"温室","Orchard":"果园","Master gardener":"园艺大师","Warm-up":"热身","First verse":"第一段","Chorus":"副歌","Duet":"二重唱","Orchestra":"乐团","Maestro":"大师","Front door":"前门","Hallway":"走廊","Living room":"客厅","Kitchen":"厨房","Attic treasures":"阁楼珍藏","Memory lane":"回忆小路","First steps":"初步","Woodland path":"林间小道","Meadow":"草地","Riverbank":"河岸","Mountain trail":"山间小径","Nature expert":"自然达人",
"Remember the order":"记住顺序","Watch the pictures light up, then repeat them.":"看图片依次亮起，然后照样点出来。","What’s missing?":"少了什么？","One picture disappears. Which one was it?":"一张图片消失了。是哪一张？","Sort it":"分一分","Put each picture in the right group.":"把每张图片放进正确的组。","Number patterns":"数字规律","Find the next number in the pattern.":"找出规律中的下一个数字。","Mental sums":"心算","Friendly adding and taking away.":"轻松的加减法。","Odd one out":"挑出异类","Spot the picture that doesn’t belong.":"找出不属于这一组的图片。","Shape patterns":"图形规律","Which shape comes next?":"下一个是什么图形？","Times tables":"乘法口诀","Practise your tables with friendly choices.":"用选择题轻松练习乘法口诀。","Read the clock":"看时钟","What time does the clock show?":"时钟显示几点？","Spot the difference":"找不同","Find the picture that has changed.":"找出变了的图片。","Word builder":"英文拼字","Put the letters in order to spell the word.":"把字母按顺序排好，拼出英文单词。",
"Watch the order…":"看清顺序……","Your turn – tap them in the same order.":"轮到你了——按同样的顺序点。","Not quite. That’s fine – the next one will be a little different.":"不太对。没关系——下一题会稍有不同。","One has disappeared. Which one was it?":"有一个不见了。是哪一个？","Yes – well done!":"对了——做得好！","What number comes next?":"下一个数字是什么？","Work it out in your head.":"在脑子里算一算。","Which one doesn’t belong with the others?":"哪一个和其他的不是一类？","One picture on the right is different. Tap it.":"右边有一张图片不同。点一下它。","Yes – you spotted it!":"对了——你找到了！","It was the one that flashed. Well tried!":"是刚才闪烁的那一个。已经很棒了！","Not that one – look again.":"不是那个——再看看。","Tap the letters in the right order to spell the word.":"按正确的顺序点字母，拼出这个英文单词。","Not that letter – try another.":"不是这个字母——换一个试试。","Well done!":"做得好！",
"Sun":"日","Mon":"一","Tue":"二","Wed":"三","Thu":"四","Fri":"五","Sat":"六","No games played this week yet.":"本周还没有玩过游戏。","A good start – keep going.":"开局不错——继续加油。","Doing a little better than last week.":"比上周好了一点。","A little lower than last week. That is normal; a short game each day helps.":"比上周略低。这很正常；每天玩一小局会有帮助。","Steady compared with last week.":"与上周持平。",
"apple":"苹果","banana":"香蕉","grapes":"葡萄","strawberry":"草莓","orange":"橙子","dog":"狗","cat":"猫","bird":"鸟","horse":"马","turtle":"乌龟","sofa":"沙发","key":"钥匙","clock":"时钟","frying pan":"平底锅","bed":"床","bicycle":"自行车","bus":"公交车","train":"火车","sailboat":"帆船","aeroplane":"飞机","sunflower":"向日葵","coffee cup":"咖啡杯","music note":"音符","house":"房子","butterfly":"蝴蝶","cake":"蛋糕","rainbow":"彩虹","piano":"钢琴","violin":"小提琴","trumpet":"小号","drum":"鼓","guitar":"吉他","saxophone":"萨克斯","microphone":"麦克风","bell":"铃铛","headphones":"耳机","radio":"收音机","sheet music":"乐谱","melody":"旋律","telephone":"电话","thread":"线","basket":"篮子","camera":"相机","candle":"蜡烛","compass":"指南针","television":"电视","wool":"毛线","tulip":"郁金香","maple leaf":"枫叶","pine tree":"松树","bee":"蜜蜂","moon":"月亮","sun":"太阳","star":"星星","mushroom":"蘑菇","fish":"鱼","wave":"海浪","owl":"猫头鹰","circle":"圆形","square":"方形","triangle":"三角形","diamond":"菱形"};
Object.assign(ZH,{"Choose 1 to 20 rounds.": "请选择1至20轮。", "This session has reached its planned number of rounds.": "本次游戏已达到计划回合数。", "Press Begin before submitting a result.": "请先点击开始，再提交成绩。", "Wait for every remaining player to press Begin before calling or marking pictures.": "请等待所有仍参与的玩家点击开始后，再叫图或标记图片。", "Complete a round before finishing the session.": "请先完成一轮，再结束本次游戏。", "Finish the current round first, or cancel the room.": "请先结束当前回合，或取消房间。", "Run migrate-v4.0.3.sql in the D1 Console before using session and Begin controls.": "使用回合数及开始控件前，请先在D1控制台运行migrate-v4.0.3.sql。"});
Object.assign(ZH,{"Shopping basket": "购物篮", "Remember the items on your shopping list.": "记住购物清单上的物品。", "Daily routines": "日常步骤", "Which everyday task comes next?": "下一步该做什么？", "Word connections": "词语联想", "Find a word with a related meaning.": "找出意思相关的词语。", "Calendar day": "星期推算", "Work out the next day of the week.": "算出几天后是星期几。", "Market change": "购物找零", "Practise everyday shopping calculations.": "练习日常购物计算。", "Short story memory": "短篇故事记忆", "Listen or read, then remember a detail.": "听或阅读故事，然后回忆其中的细节。", "Garden detective": "花园小侦探", "Find a special flower in the garden.": "找出花园中不同的花朵。", "Picture order": "图片顺序", "Which picture completes the pattern?": "哪张图片能补全规律？", "Where does it belong?": "它属于哪里？", "Match everyday objects to a place.": "把日常物品与对应的地点配对。", "Difficulty (all levels are available)": "难度（可选择所有关卡）", "Choose a comfortable challenge. There is no penalty for selecting an easier level.": "选择适合自己的难度。选择简单的关卡不会受到任何惩罚。", "Play game": "开始游戏", "Cancel": "取消", "Timed matching challenges": "限时配对挑战", "Remember your shopping list.": "记住你的购物清单。", "Which item was on the shopping list?": "购物清单上有哪些物品？", "That is right!": "答对了！", "Sunday": "星期日", "Monday": "星期一", "Tuesday": "星期二", "Wednesday": "星期三", "Thursday": "星期四", "Friday": "星期五", "Saturday": "星期六", "bright": "明亮", "dark": "黑暗", "flower": "花朵", "book": "书", "reading": "阅读", "nest": "鸟巢", "rain": "雨", "cup": "杯子", "doctor": "医生", "clinic": "诊所", "station": "车站", "pillow": "枕头", "spoon": "勺子", "night": "夜晚", "Wake up": "起床", "Brush your teeth": "刷牙", "Eat breakfast": "吃早餐", "Go for a walk": "散步", "Wash vegetables": "洗菜", "Cut vegetables": "切菜", "Cook the meal": "做饭", "Eat together": "一起吃饭", "Prepare soil": "准备土壤", "Plant seeds": "播种", "Water the garden": "给花园浇水", "Watch flowers grow": "看花朵生长", "Put clothes in washer": "把衣服放进洗衣机", "Add detergent": "添加洗衣液", "Start washing": "开始洗衣", "Hang clothes to dry": "晾衣服", "Bedroom": "卧室", "Bathroom": "浴室", "Garage": "车库", "Read or listen to the story.": "阅读或聆听故事。", "🔊 Read aloud": "🔊 朗读", "Lily visited the market and bought three oranges. Afterwards she watered her flowers.": "莉莉去了市场，买了三个橙子。之后她给花浇了水。", "What did Lily buy?": "莉莉买了什么？", "Oranges": "橙子", "Apples": "苹果", "George took the blue bus to the library. He borrowed a book about birds.": "乔治乘蓝色公交车去了图书馆。他借了一本关于鸟类的书。", "Where did George go?": "乔治去了哪里？", "Library": "图书馆", "Hospital": "医院", "Market": "市场", "Park": "公园", "Mei drank tea after breakfast and then called her sister.": "小梅吃完早餐后喝了茶，然后给姐姐打了电话。", "Who did Mei call?": "小梅给谁打了电话？", "Her sister": "她的姐姐", "Her neighbour": "她的邻居", "Her doctor": "她的医生", "Her friend": "她的朋友", "On Tuesday, Ben planted red roses in his garden.": "星期二，本在花园里种了红玫瑰。", "What colour were the roses?": "玫瑰是什么颜色的？", "Red": "红色", "Blue": "蓝色", "Yellow": "黄色", "White": "白色", "Find the different flower.": "找出不同的花朵。", "You spotted it!": "你找到了！", "Look for the flower that is different.": "寻找那朵不同的花。", "Play Together 🌍": "一起玩 🌍", "Enjoy several activities with one friend without creating a new room each time.": "与朋友连续玩多种游戏，无需每次重新创建房间。", "Two players per room · Same challenge · Several rounds · No chat required.": "每个房间两位玩家 · 相同挑战 · 多轮游戏 · 无需聊天", "Your display name": "你的显示名称", "Create a room": "创建房间", "Join an invitation": "通过邀请加入", "6-character code": "6位房间码", "Join room": "加入房间", "Resume room": "返回房间", "Close": "关闭", "Copy invitation link": "复制邀请链接", "Share": "分享", "Leave screen": "离开此页面", "Copy this invitation link": "复制此邀请链接", "Invitation link copied! Send it to your friend.": "邀请链接已复制！把它发给朋友吧。", "Connecting…": "正在连接……", "Which picture belongs to a different group?": "哪张图片属于不同的类别？", "Choose the best answer. Take your time.": "选择最合适的答案。慢慢来。", "Hidden picture": "隐藏的图片", "Find the matching picture.": "找出相同的图片。", "Have another look.": "再看一看。", "Try another pair.": "试试另一对。", "Well played!": "玩得真棒！", "Saving your result…": "正在保存成绩……", "Could not save the result. Please retry.": "无法保存成绩，请重试。", "Retry saving": "重新保存", "Round complete!": "本轮完成！", "Your result is saved. Waiting for your friend to finish.": "成绩已保存，正在等待朋友完成。", "A friendly tie!": "本轮平局！", "You won this round!": "你赢了这一轮！", "Your friend won this round!": "朋友赢了这一轮！", "Keep the same room! Choose another activity or play a longer matching board. Points are for fun, not a measure of cognitive health.": "继续使用此房间！选择其他游戏或更多配对卡片。积分仅供娱乐，不代表认知健康状况。", "Next game": "下一局游戏", "Start next round": "开始下一轮", "Finish together": "结束游戏", "Waiting for the host to select the next game. You can keep this screen open.": "等待房主选择下一局游戏。你可以保持此页面打开。", "🌍 Join friend": "🌍 加入朋友", "Room:": "房间：", "Welcome to Mind Garden": "欢迎来到心灵花园", "Main navigation": "主导航", "My garden progress": "我的花园进度", "Peaceful sea with a little sailing boat at sunset": "夕阳下的宁静海面与小帆船", "Motion": "动态画面", "Gentle": "轻柔", "Standard": "标准", "Connection failed": "连接失败", "Room not found": "找不到房间", "Room is full": "房间已满"});
Object.assign(ZH,{"Invitation link": "邀请链接", "Joining the invited room automatically.": "正在自动加入受邀房间。", "Enter a name (1–20 letters/numbers).": "请输入姓名（1至20个字母、汉字或数字）。", "Enter a valid six-character room code.": "请输入有效的6位房间码。", "Room not found.": "找不到该房间。", "This room has expired (24 hours). Create a new one.": "房间已过期（24小时），请创建新房间。", "This room already has two players.": "房间已有两位玩家。", "Another player joined first.": "另一位玩家已先加入。", "A player session is required.": "请先加入房间。", "Your player session is invalid.": "玩家会话已失效，请重新加入。", "Only the host can choose the next activity.": "只有房主可以选择下一项活动。", "Both players must finish before starting another activity.": "两位玩家都完成后才能开始下一项活动。", "Choose an available activity.": "请选择可用的活动。", "Room advanced already. Refresh its status.": "房间已进入下一轮，请刷新状态。", "Room already advanced; try again.": "房间已进入下一轮，请重试。", "Waiting for second player.": "等待第二位玩家。", "Round has changed; reopen the room.": "轮次已更新，请重新打开房间。", "Invalid game result.": "游戏成绩无效。", "Game result submitted too soon.": "成绩提交过早，请稍后重试。", "Result changed; refresh the room.": "成绩已更新，请刷新房间。", "Unable to create room. Please retry.": "无法创建房间，请重试。", "Database binding DB is not configured.": "多人游戏数据库尚未配置，请检查 DB 绑定。", "The multiplayer service did not return a valid response. Refresh the page or check Pages Functions deployment.": "多人游戏服务返回异常，请刷新页面或检查 Pages Functions 部署。", "The multiplayer database schema is outdated. Open the D1 Console and apply only the missing columns from migrate-v2.2.sql.": "多人游戏数据库结构需要更新。请在 D1 控制台执行 migrate-v2.2.sql 中缺少的字段。", "Multiplayer tables are missing. Run schema.sql in the D1 Console.": "缺少多人游戏数据表，请在 D1 控制台执行 schema.sql。", "Multiplayer request failed on the server. Check Pages Functions logs for the underlying error.": "多人游戏服务器请求失败，请检查 Pages Functions 日志。", "Timed matching challenges": "限时配对挑战", "Relaxed matching": "轻松配对", "No timer — take your time.": "不限时，慢慢来。"});
Object.assign(ZH,{"Sign in to the online lobby first.": "请先进入在线大厅。", "Online play is not configured.": "尚未配置在线游戏。", "Online request failed. Please retry.": "在线请求失败，请重试。", "This room already has eight players.": "这个房间已有8位玩家。", "This room has launched. Join another room.": "这个房间已开始游戏，请加入其他房间。", "This room has already launched.": "这个房间已经开始游戏。", "The host closed this room.": "房主已关闭此房间。", "Join this room first.": "请先加入此房间。", "Only the host can do this.": "只有房主可以执行此操作。", "At least two players must join before launch.": "至少需要两位玩家加入后才能开始。", "Wait for everyone, or end the current round.": "请等待所有玩家完成，或结束本轮游戏。", "Launch the room first.": "请先开始游戏。", "Run migrate-v3.sql in the D1 Console before using eight-player rooms.": "使用8人房间前，请先在 D1 控制台执行 migrate-v3.sql。"});
function norm(s){return String(s).toLowerCase().replace(/[’‘`]/g,"'").replace(/\s+/g," ").trim()}
var ZN={};for(var q in ZH)ZN[norm(q)]=ZH[q];
var N=function(x){return ZH[x]||ZN[norm(x)]||x};
var RX=[
[/^Connection interrupted\. Keeping your room; reconnecting automatically\. (.*)$/,a=>"连接中断，房间已保留，正在自动重连。"+tr(a)],
[/^Level (\d+) \(suggested\)$/,n=>'第 '+n+' 关（建议）'],
[/^What comes next after (.+)\?$/,a=>'“'+N(a)+'”之后该做什么？'],
[/^Which word goes with “(.+)”\?$/,a=>'哪个词语与“'+N(a)+'”相关？'],
[/^If today is (.+), what day is (\d+) days? later\?$/,(a,b)=>'如果今天是'+N(a)+'，'+b+'天后是星期几？'],
[/^An item costs \$(\d+)\. You pay \$(\d+)\. How much change\?$/,(a,b)=>'物品售价 '+a+' 元，支付 '+b+' 元，应找回多少？'],
[/^The answer is (.+)\. You can try again\.$/,a=>'答案是'+N(a)+'。可以再试一次。'],
[/^You remembered (.+)!$/,a=>'你记住了'+N(a)+'！'],
[/^It was (.+)\. Try again next time\.$/,a=>'答案是'+N(a)+'。下次再试试。'],
[/^Where would you usually find (.+)\?$/,a=>'通常在哪里能找到'+a+'？'],
[/^What comes next\? (.+)$/,a=>'接下来是什么？'+a],
[/^Join room ([A-Z2-9]{6})$/,a=>'加入房间 '+a],
[/^Round (\d+)$/,a=>'第 '+a+' 轮'],
[/^· Round (\d+)$/,a=>'· 第 '+a+' 轮'],
[/^(Matching pairs|Mental sums|Number patterns|Odd one out) · (\d+) (pairs|questions)$/,(a,b,c)=>N(a)+' · '+b+(c==='pairs'?' 对':' 题')],
[/^Find all (\d+) pairs\. Take your time\.$/,a=>'找出全部 '+a+' 对。慢慢来。'],
[/^(\d+) of (\d+) pairs · (\d+) turns$/,(a,b,c)=>'已找到 '+a+'/'+b+' 对 · '+c+' 次尝试'],
[/^Question (\d+) of (\d+)$/,(a,b)=>'第 '+a+'/'+b+' 题'],
[/^Good try! The answer was (.+)\.$/,a=>'继续加油！答案是 '+a+'。'],
[/^You found every pair in (\d+) turns\.$/,a=>'你用了 '+a+' 次尝试找到全部配对。'],
[/^You finished (\d+) questions!$/,a=>'你完成了 '+a+' 道题！'],
[/^Total points after (\d+) rounds?$/,a=>a+' 轮后的总积分'],
[/^(.+): (\d+) points$/,(a,b)=>a+'：'+b+' 分'],
[/^Waiting for your friend\. Share the invitation link or room code ([A-Z2-9]{6})$/,a=>'等待朋友加入。请分享邀请链接或房间码 '+a],
[/^🌻 You have been invited to room$/,()=>'🌻 你已受邀加入房间'],
[/^\. Your invitation code has been filled in\.$/,()=>'。已自动填入邀请码。'],

[/^([^:]+):$/,function(a){return N(a)+"："}],
[/^(\d+) correct$/,function(n){return"答对 "+n+" 题"}],
[/^Best time: (.+)$/,function(t){return"最快用时："+t}],
[/^Matching pairs – Level (\d+)$/,function(n){return"配对游戏——第 "+n+" 关"}],
[/^Matching pairs · (.+)$/,function(a){return"配对游戏 · "+N(a)}],
[/^(\d+) pts$/,function(n){return n+" 分"}],
[/^(\d+) stars?$/,function(n){return n+" 颗星"}],
[/^Picture (\d+)$/,function(n){return"图片 "+n}],
[/^Letter (.)$/,function(n){return"字母 "+n}],
[/^(\d+) games$/,function(n){return n+" 局"}],
[/^You answered (\d+) out of (\d+) questions correctly\.$/,function(a,b){return"你答对了 "+a+"/"+b+" 题。"}],
[/^Player (\d+)$/,function(n){return"玩家 "+n}],
[/^Today: (\d+) min$/,function(n){return"今天："+n+" 分钟"}],
[/^You’ve played (\d+) minutes today – lovely! Time for a drink, a stretch or a rest\.$/,function(n){return"你今天已经玩了 "+n+" 分钟——真棒！喝杯水、伸展一下或休息一会儿吧。"}],
[/^Remember this… (\d+)$/,function(n){return"记住这个……"+n}],
[/^Keep taking away (\d+)\. What comes next\?$/,function(n){return"一直减去 "+n+"。下一个是多少？"}],
[/^Keep taking away (\d+) from (\d+)\. What is the last number you reach\?$/,function(s,b){return"从 "+b+" 一直减去 "+s+"。最后能得到哪个数？"}],
[/^What time will it be in (\d+) hours\?$/,function(n){return n+" 小时后是几点？"}],
[/^Find the (.+)\.$/,function(a){return"找出"+N(a)+"。"}],
[/^Garden growth: (\d+) of 60$/,function(n){return"花园成长："+n+" / 60"}],
[/^Garden: (\d+) of 60$/,function(n){return"花园："+n+" / 60"}],
[/^Your garden: (\d+) of 60$/,function(n){return"你的花园："+n+" / 60"}],
[/^Next: (.+) – (\d+) more points?$/,function(a,n){return"下一步："+N(a)+"——还差 "+n+" 点"}],
[/^Level (\d+)$/,function(n){return"第 "+n+" 关"}],
[/^(\d+) pairs · (.+?)( · locked)?$/,function(p,t,l){return p+" 对 · "+t+(l?" · 未解锁":"")}],
[/^(\d+) \/ (\d+) pairs$/,function(a,b){return a+" / "+b+" 对"}],
[/^(\d+) of 3 stars$/,function(n){return n+" 颗星（共 3 颗）"}],
[/^Hint \((\d+)\)$/,function(n){return"提示（"+n+"）"}],
[/^Look carefully… cards turn over in (\d+)$/,function(n){return"仔细看……"+n+" 秒后卡片翻过去"}],
[/^Extra (\d+) seconds added\. Tap a card to begin\.$/,function(n){return"已增加 "+n+" 秒。点一张卡片开始。"}],
[/^(Lovely match!|Well spotted!|Sharp eyes!|That’s a pair!|Nicely done!)(?: (\d+) in a row!)?$/,function(p,n){return N(p)+(n?" 连续 "+n+" 对！":"")}],
[/^You found all (\d+) pairs with (.+) to spare\.$/,function(a,b){return"你找到了全部 "+a+" 对，还剩 "+b+"。"}],
[/^You found (\d+) of (\d+) pairs\. Try again with 15 extra seconds\.$/,function(a,b){return"你找到了 "+a+"/"+b+" 对。再试一次，将多给 15 秒。"}],
[/^Player: (.*)$/,function(a){return"玩家："+tr(a)}],
[/^Matching pairs – (.+) pictures$/,function(a){return"配对游戏——"+N(a)+"图片"}],
[/^Matching pairs$/,function(){return"配对游戏"}],
[/^(\d+)-day streak$/,function(n){return"连续 "+n+" 天"}],
[/^Round (\d+) of (\d+)$/,function(a,b){return"第 "+a+"/"+b+" 轮"}],
[/^Remember these… (\d+)$/,function(n){return"记住这些……"+n}],
[/^Which group does the (.+) belong to\?$/,function(a){return"“"+N(a)+"”属于哪一组？"}],
[/^It goes with “(.+)”\. Well tried!$/,function(a){return"它属于“"+N(a)+"”。已经很棒了！"}],
[/^What is (\d+) times (\d+)\?$/,function(a,b){return a+" 乘以 "+b+" 等于多少？"}],
[/^Yes – the (.+) is the odd one out\.$/,function(a){return"对了——"+N(a)+"不属于这一类。"}],
[/^Yes – “(.+)”!$/,function(a){return"对了——“"+a+"”！"}],
[/^Yes – the (.+)!$/,function(a){return"对了——是"+N(a)+"！"}],
[/^Yes – it’s (.+)!$/,function(a){return"对了——是 "+a+"！"}],
[/^Yes – (\d+)!$/,function(a){return"对了——"+a+"！"}],
[/^Perfect – all (\d+) in the right order!$/,function(n){return"太棒了——"+n+" 个顺序全对！"}],
[/^It was the (.+)\. Well tried!$/,function(a){return"是"+N(a)+"。已经很棒了！"}],
[/^It was (.+)\. Well tried!$/,function(a){return"答案是 "+a+"。已经很棒了！"}],
[/^The (?:next number|answer) was (.+)\. Well tried!$/,function(a){return"答案是 "+a+"。已经很棒了！"}],
[/^You got (\d+) of (\d+) right\.$/,function(a,b){return"你答对了 "+a+"/"+b+" 题。"}],
[/^This summarises (.+)’s play time and progress\. It stays on this tablet and is never sent anywhere\. Continue only if (.+) agrees\.$/,function(a){return"这里汇总了"+a+"的游戏时间和进度。内容只保存在这台设备上，不会发送到任何地方。请在"+a+"同意后再继续。"}],
[/^(.+)’s week$/,function(a){return a+"的一周"}],
[/^(\d+) games, (\d+) minutes this week$/,function(a,b){return"本周玩了 "+a+" 局，共 "+b+" 分钟"}],
[/^Matching level reached: (\d+) of 6, with (\d+) stars$/,function(a,b){return"配对游戏进度：第 "+a+" 关（共 6 关），获得 "+b+" 颗星"}],
[/^(\d+) min$/,function(n){return n+" 分钟"}]
];
function tr(s){var k=String(s).trim();if(!k)return s;var z=ZH[k]||ZN[norm(k)];if(z)return s.replace(k,z);
 var kk=k.replace(/'/g,"’");for(var i=0;i<RX.length;i++){var m=kk.match(RX[i][0]);if(m)return s.replace(k,RX[i][1].apply(null,m.slice(1)))}return s}
window.tr=tr;
if(!save.lang)save.lang=/^zh/i.test(navigator.language||"")?"zh":"en";
var zh=save.lang==="zh",btn=document.getElementById("bLang");
document.documentElement.lang=zh?"zh-Hans":"en";
btn.textContent=zh?"English":"Chinese 中文";btn.setAttribute("lang",zh?"en":"zh-Hans");
btn.onclick=function(){save.lang=zh?"en":"zh";persist();location.reload()};
if(!zh)return;
document.title="心灵花园 – 大脑游戏";
var origSay=window.say;
window.say=function(t){if(!save.speak||!t||!window.speechSynthesis)return;try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(/^[A-Z]+$|^[a-z]{3,8}$/.test(t)&&mg&&mg.t==="wrd"?t:tr(t));u.lang=mg&&mg.t==="wrd"?"en-GB":"zh-CN";u.rate=.85;speechSynthesis.speak(u)}catch(e){}};
function walk(n){if(n.nodeType===3){var v=tr(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;return}
 if(n.nodeType!==1)return;if(n.id==="bLang"||/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.tagName)||n.closest("[translate=no]"))return;
 ["aria-label","title","placeholder","alt"].forEach(function(key){var a=n.getAttribute(key);if(a){var t=tr(a);if(t!==a)n.setAttribute(key,t)}});
 for(var c=n.firstChild;c;c=c.nextSibling)walk(c)}
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="attributes")walk(m.target);else if(m.type==="characterData")walk(m.target);else m.addedNodes.forEach(walk)})}).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["aria-label","title","placeholder","alt"]});
walk(document.body);
})();

;
/* dashboard.js */
/* Mind Garden v2.3: one navigation bar, immersive garden welcome,
   searchable games library and guided daily activities. No framework required. */
(function(){
 'use strict';
 const home=document.getElementById('home'),legacyNav=document.getElementById('nav');
 const top=home.querySelector('.top'),hero=document.getElementById('hero');
 const oldDaily=document.getElementById('dailyStart');if(oldDaily)oldDaily.remove();
 const library=document.createElement('section');library.id='gameLibrary';library.className='hidden';
 const children=Array.from(home.children);let afterHero=false;
 children.forEach(el=>{if(el===hero){afterHero=true;return}if(el===legacyNav||el===top)return;if(el.classList.contains('sub')||afterHero)library.appendChild(el)});
 home.appendChild(library);
 const dash=document.createElement('section');dash.id='welcomeDashboard';dash.setAttribute('aria-label','Welcome to Mind Garden');home.insertBefore(dash,library);
 const nav=document.createElement('nav');nav.id='unifiedNav';nav.setAttribute('aria-label','Main navigation');home.insertBefore(nav,dash);
 // Keep garden growth visible, but never let its large SVG appear before the welcome page.
 function closeNavMenu(focus=false){const menu=document.getElementById('navMenu'),button=document.getElementById('navMore');if(!menu||!button)return;const wasOpen=!menu.classList.contains('hidden');menu.classList.add('hidden');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',T('Open menu','打开菜单'));if(focus&&wasOpen)button.focus()}
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNavMenu(true)});
 document.addEventListener('click',e=>{if(!nav.contains(e.target))closeNavMenu()});
 const progressStrip=document.createElement('section');progressStrip.id='gardenProgressStrip';progressStrip.setAttribute('aria-label','My garden progress');home.insertBefore(progressStrip,library);progressStrip.appendChild(hero);
 const progressDisplay=document.createElement('div');progressDisplay.id='progressDisplay';progressDisplay.className='progress-summary';progressStrip.appendChild(progressDisplay);
 const T=(a,b)=>save.lang==='zh'?b:a;
 function icon(kind){
  const parts={
   seed:'<ellipse cx="16" cy="20" rx="6" ry="8" fill="#bd8c55" stroke="#754a29"/><path d="M15 22Q12 11 21 7" fill="none" stroke="#638f48" stroke-width="2"/><path d="M18 11Q19 3 27 4Q27 11 18 11" fill="#9bc967"/>',
   sprout:'<path d="M16 28V15" stroke="#55936b" stroke-width="2.5"/><path d="M16 19Q3 19 4 7Q17 7 16 19" fill="#8dbb66"/><path d="M16 14Q17 3 29 5Q27 16 16 14" fill="#4f9570"/>',
   bud:'<path d="M16 30V15M16 25Q7 25 7 20Q15 19 16 25" stroke="#6ba573" fill="#6ba573" stroke-width="2"/><path d="M16 3C4 7 8 20 16 20C24 20 28 7 16 3Z" fill="#e395a5"/><path d="M9 17Q16 23 23 17" fill="none" stroke="#5a9870" stroke-width="2"/>',
   opening:'<path d="M16 30V15" stroke="#6ba573" stroke-width="2"/><path d="M16 17C-3 15 5 1 16 10C20-5 32 7 23 17C33 27 16 30 16 17C3 30-3 15 16 17" fill="#e29caa"/><circle cx="16" cy="16" r="4" fill="#f5cd6d"/>',
   bloom:'<g fill="#f3d081"><ellipse cx="16" cy="7" rx="5" ry="7"/><ellipse cx="16" cy="25" rx="5" ry="7"/><ellipse cx="7" cy="16" rx="7" ry="5"/><ellipse cx="25" cy="16" rx="7" ry="5"/><ellipse cx="9" cy="9" rx="6" ry="5" transform="rotate(45 9 9)"/><ellipse cx="23" cy="23" rx="6" ry="5" transform="rotate(45 23 23)"/></g><circle cx="16" cy="16" r="6" fill="#946133"/>',
   games:'<rect x="4" y="8" width="24" height="18" rx="6"/><path d="M8 16h8m-4-4v8m9-5h.1m3 5h.1"/>',
   together:'<circle cx="11" cy="10" r="4"/><circle cx="23" cy="12" r="3"/><path d="M3 27v-4a8 8 0 0 1 16 0v4m2-9a6 6 0 0 1 8 6v3"/>',
   progress:'<path d="M5 5v23h23M11 23v-7m7 7V9m7 14V4"/>',
   trophy:'<path d="M9 4h14v8a7 7 0 0 1-14 0ZM9 7H4v4a6 6 0 0 0 7 6m12-10h5v4a6 6 0 0 1-7 6m-5 2v8m-6 0h12"/>',
   home:'<path d="M3 15L16 4l13 11M7 13v15h18V13M13 28v-9h6v9"/>',
   language:'<path d="M3 7h15M10 3v4M6 8q2 8 11 12M15 8q-2 8-11 14M19 28l5-15 5 15m-8-5h6"/>',
   sun:'<circle cx="16" cy="16" r="6"/><path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M6 26l3-3M23 9l3-3"/>',
   moon:'<path d="M26 21A12 12 0 0 1 11 6a12 12 0 1 0 15 15Z"/>',
   menu:'<path d="M5 8h22M5 16h22M5 24h22"/>',
   pause:'<path d="M11 7v18M21 7v18" stroke-width="4"/>',
   play:'<path d="M10 5l17 11-17 11Z"/>',
   reset:'<path d="M7 10a11 11 0 1 1-2 12M7 4v8h8"/>',
   sound:'<path d="M4 12h6l7-6v20l-7-6H4Z M22 11a8 8 0 0 1 0 10M26 7a14 14 0 0 1 0 18"/>',
   muted:'<path d="M4 12h6l7-6v20l-7-6H4Z M22 12l7 8m0-8-7 8"/>',
   music:'<path d="M13 23V6l14-3v17M13 9l14-3"/><ellipse cx="8" cy="24" rx="5" ry="4"/><ellipse cx="22" cy="21" rx="5" ry="4"/>'
  };
  return '<svg class="garden-icon" viewBox="0 0 32 32" aria-hidden="true" '+(['seed','sprout','bud','opening','bloom'].includes(kind)?'':'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"')+'>'+(parts[kind]||parts.sprout)+'</svg>';
 }
 window.MindGardenIcon=icon;
 function renderBed(){
  const bed=document.getElementById('livingGarden');if(!bed)return;
  const player=me(),points=Math.max(0,Math.min(60,player.gr||0)),stages=gstage(points),type=player.fl||'mixed';
  let stems='',leaves='';
  const positions=[[91,102],[205,106],[121,70],[178,64],[65,137],[231,140],[146,46],[104,129],[194,131],[131,101],[166,100],[151,136]];
  for(let i=0;i<12;i++){
   const [x,y]=positions[i],stage=stages[i],kind=type==='mixed'?FLK[i%6]:type;
   if(stage>1){const top=stage===2?y+34:y;stems+='<path d="M150 222Q'+(x+(150-x)*.2)+' 165 '+x+' '+top+'" fill="none" stroke="'+(i%2?'#5e8965':'#3e7058')+'" stroke-width="2.6" stroke-linecap="round"/>';
   stems+='<path d="M'+((x+150)/2)+' 170q-28-3-22-22q24 2 22 22m4-12q22-21 28-8q-8 16-28 8" fill="#79a481" opacity=".85"/>';}
   stems+='<g class="bed-plant" data-stage="'+stage+'" data-flower="'+kind+'">'+(stage>=4?head(kind,x,y,stage===4?.72:1.02):stage===3?'<ellipse cx="'+x+'" cy="'+y+'" rx="5" ry="9" fill="#d99aa9"/>':'')+'</g>';
  }
  for(let i=0;i<5;i++){const x=80+i*35,y=125+(i%2)*17;leaves+='<path d="M150 222Q'+x+' 180 '+x+' '+y+'" stroke="#638c74" stroke-width="2" fill="none"/><g fill="'+(i%2?'#9cba94':'#719a85')+'"><ellipse cx="'+(x-7)+'" cy="'+(y+10)+'" rx="6" ry="12" transform="rotate(-42 '+(x-7)+' '+(y+10)+')"/><ellipse cx="'+(x+7)+'" cy="'+(y+27)+'" rx="6" ry="12" transform="rotate(42 '+(x+7)+' '+(y+27)+')"/></g>';}
  bed.innerHTML='<figcaption><span class="journey-eyebrow">'+T('GROWN BY YOU','由你培育')+'</span><h2>'+T('Your growing bouquet','你的成长花束')+'</h2></figcaption><svg viewBox="0 0 300 255" role="img" aria-label="'+T('Your bouquet: ','你的花束：')+points+'/60"><defs><radialGradient id="bouquetGlow"><stop stop-color="#dcebd6" stop-opacity=".75"/><stop offset="1" stop-color="#dcebd6" stop-opacity="0"/></radialGradient></defs><circle cx="150" cy="135" r="118" fill="url(#bouquetGlow)"/>'+leaves+stems+'<path d="M137 209q13 5 27 0l-3 9q-12 4-21 0Z" fill="#d7ad84"/><path d="M148 214q-26-20-28-2q7 11 28 2m6 0q25-20 26-2q-7 11-26 2m-5 2-11 21m16-21 9 19" fill="none" stroke="#c9a07b" stroke-width="3" stroke-linecap="round"/></svg><p>'+ (points<12?T('A little greenery today. More flowers with every game.','今日的一点绿意，每一局都让花束更丰盛。'):T('Your chosen flowers flourish as you play.','随着你的游戏，心爱的花朵逐渐绽放。'))+'</p>';
  window.MindGardenBouquet?.attach(bed,points,type);
 }
 function renderProgress(){
  const player=me(),points=Math.max(0,Math.min(60,player.gr||0));
  const labels=[['Seeds','种子'],['Sprouts','嫩芽'],['Buds','花苞'],['Opening','绽放'],['Full bloom','盛开']],icons=['seed','sprout','bud','opening','bloom'],targets=[12,24,36,48,60];
  const next=targets.findIndex(x=>points<x),day=dstr(),mins=Math.round((player.log||[]).filter(x=>x.d===day).reduce((a,x)=>a+x.s,0)/60),streak=curStreak(player);
  const headline=next<0?T('Your garden is in full bloom','你的花园已盛开'):T('Next: ','下一步：')+T(...labels[next]);
  progressDisplay.innerHTML='<figure id="livingGarden" class="bouquet-card"></figure><div class="journey-main"><div class="journey-heading"><div><p class="journey-eyebrow">'+T('YOUR GARDEN JOURNEY','你的花园成长之旅')+'</p><h2>'+headline+'</h2><p class="journey-next">'+(next<0?T('Every flower is flourishing. Beautiful work!','每朵花都已盛开，真棒！'):T('Just '+(targets[next]-points)+' more growth points to reach this stage.','再获得 '+(targets[next]-points)+' 点成长值，即可达到这个阶段。'))+'</p></div><div class="journey-score"><strong>'+points+'<span> / 60</span></strong><small>'+T('growth points','成长值')+'</small></div></div><div class="journey-meter" role="progressbar" aria-label="'+T('Garden growth','花园成长')+'" aria-valuemin="0" aria-valuemax="60" aria-valuenow="'+points+'"><span style="width:'+(points/60*100)+'%"></span></div><ol class="journey-stages">'+labels.map((it,i)=>'<li class="'+(points>=targets[i]?'earned':i===next?'next':'')+'"'+(i===next?' aria-current="step"':'')+'><span class="journey-stage-icon" aria-hidden="true">'+icon(icons[i])+'</span><b>'+T(...it)+'</b><small>'+targets[i]+' '+T('pts','点')+(points>=targets[i]?' ✓':'')+'</small></li>').join('')+'</ol></div><aside class="journey-today"><div class="journey-stats"><div><span>'+T('Today','今天')+'</span><strong>'+mins+' <small>'+T('min','分钟')+'</small></strong></div><div><span>'+T('Day streak','连续天数')+'</span><strong>'+streak+' <small>'+T('days','天')+'</small></strong></div></div><p class="journey-status">'+(player.last===day?T('✓ Today’s game is complete','✓ 今日游戏已完成'):T('Your next game helps your garden grow.','再玩一局，让你的花园继续成长。'))+'</p><button class="progress-flowers" type="button" id="progressFlowers">'+T('Choose my flowers','选择我的花朵')+' <span aria-hidden="true">↗</span></button>'+(points===60?'<button class="journey-new" id="progressNew">'+T('Plant a new garden','种一座新花园')+'</button>':'')+'</aside>';
  document.getElementById('progressFlowers').onclick=()=>openFlw();
  if(document.getElementById('progressNew'))document.getElementById('progressNew').onclick=()=>{player.gr=0;player.gs=(player.gs||0)+1;persist();renderHero()};
  renderBed();
 }
 // Refresh both visible progress representations when the legacy engine changes flowers or resets growth.
 const legacyHero=window.renderHero;window.renderHero=function(){legacyHero();renderProgress()};

 const today=()=>dstr();let page='dashboard',daily=null,filter='all',search='',length='standard';
 const META={dots:'shapes',pets:'memory',spot:'attention',links:'logic',drawmemory:'memory',recall:'memory',jigsaw:'shapes',dominoes:'logic',bingo:'attention',pathways:'logic',sayings:'language',seq:'memory',miss:'memory',rem:'memory',shopping:'memory',story:'memory',num:'numbers',sum:'numbers',sub:'numbers',tbl:'numbers',cnt:'numbers',add:'numbers',money:'numbers',sort:'logic',odd:'logic',same:'logic',routine:'logic',place:'logic',shp:'shapes',clk:'shapes',time:'shapes',calendar:'shapes',order:'shapes',diff:'attention',count:'attention',find:'attention',visual:'attention',wrd:'language',wm:'language',pic:'language',related:'language'};
 const LABELS={all:['All Games','全部游戏'],memory:['Memory','记忆'],attention:['Attention','观察'],logic:['Logic','逻辑'],language:['Language','语言'],numbers:['Numbers','数字'],shapes:['Shapes & time','图形与时间']};
 const GAME_TIME={jigsaw:6,dominoes:8,bingo:5,pathways:5,sayings:4,seq:4,miss:4,rem:3,shopping:5,story:5,diff:5,visual:4,wrd:5,related:4};
 function navAction(action){if(action==='home')switchPage('dashboard');else if(action==='library')switchPage('library');else if(action==='online')document.getElementById('bOnline').click();else if(action==='progress')window.openMyProgress();else if(action==='leaderboard')document.getElementById('bLb').click();else if(action==='family')document.getElementById('bFam').click();else if(action==='settings')document.getElementById('bSet').click();else if(action==='profile')document.getElementById('bPl').click();else if(action==='language')document.getElementById('bLang').click();else if(action==='nature')document.getElementById('homeNatureToggle')?.click();else if(action==='motion')document.getElementById('homeAnimationToggle')?.click();else if(action==='music')document.getElementById('bMus').click();else if(action==='theme'){document.getElementById('bSet').click();}else if(action==='quickguide')window.MindGardenV4?.openGuide();else if(action==='about')openInfo('about');else if(action==='contact')openInfo('contact');else if(action==='appearance'){save.mode=appearanceDark()?'light':'dark';persist();applyPrefs();syncAppearance();}}
 const appearanceMedia=matchMedia('(prefers-color-scheme: dark)');
 function appearanceDark(){const mode=document.documentElement.dataset.theme;return mode==='dark'||(mode!=='light'&&appearanceMedia.matches)}
 function syncAppearance(){const button=document.getElementById('navAppearance');if(!button)return;const dark=appearanceDark(),label=dark?T('Switch to light mode','切换到浅色模式'):T('Switch to dark mode','切换到深色模式');button.innerHTML=icon(dark?'moon':'sun');button.dataset.appearance=dark?'dark':'light';button.setAttribute('aria-label',label);button.title=(dark?T('Dark mode','深色模式'):T('Light mode','浅色模式'))+' · '+label}
 new MutationObserver(syncAppearance).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});appearanceMedia.addEventListener('change',syncAppearance);
 function feedbackURL(embed=false){
  const value=document.querySelector('meta[name="'+(embed?'mind-garden-feedback-embed':'mind-garden-feedback')+'"]')?.content.trim();
  try{const u=new URL(value);return u.protocol==='https:'&&(u.hostname==='docs.google.com'&&u.pathname.startsWith('/forms/')||!embed&&u.hostname==='forms.gle')?u.href:''}catch{return ''}
 }
 function aboutExtras(){
  const setup=[
   ['Choose your language','选择语言','Use Language in the navbar or the ☰ menu to choose English or Chinese. Controls move into ☰ when the screen narrows or text gets larger. You can change your language at any time.','使用导航栏或☰菜单中的语言按钮选择英文或中文。屏幕变窄或文字变大时，控件会移入☰菜单。随时可以更改语言。'],
   ['Choose your player','选择玩家','Select Choose or add a player below. Give each person their own local player so their progress and preferences stay separate. A nickname is enough.','点击下方“选择或添加玩家”。为每个人建立独立的本地玩家，以分别保存进度与偏好设置。使用昵称即可。'],
   ['Make reading comfortable','调整阅读方式','Use T− / T+ or the percentage selector in the navbar or ☰ menu for text size; ↺ resets it to 100%. Use the sun/moon button or Display mode in ☰ for appearance. Open ☰ → Preferences → Settings for contrast, left-handed layout and other reading options.','使用导航栏或☰菜单中的T− / T+或百分比选项调整文字大小；↺恢复为100%。使用太阳/月亮按钮或☰中的显示模式调整外观。在☰ → 偏好设置 → 设置中调整对比度、左手布局与其他阅读选项。'],
   ['Choose sound and movement','选择声音与动画','Use the speaker and play/pause icons in the navbar, or ☰ → Preferences → Nature sounds / Animation. Music has its own volume control. Welcome videos have separate playback and sound controls.','使用导航栏的扬声器和播放/暂停图标，或☰ → 偏好设置 → 自然声音 / 动画。音乐有独立音量控制，欢迎视频也有独立的播放与声音控制。'],
   ['Try a first game','开始第一局','Choose Today’s Games for a guided activity, or browse All Games and choose a comfortable difficulty. Take a break whenever you like.','选择“今日游戏”体验引导活动，或浏览所有游戏并选择合适的难度。随时可以休息。'],
   ['Keep a backup','保存备份','After playing, use ☰ → Preferences → Settings → Backup and restore to download a JSON backup before moving devices or clearing browser data.','游戏后，可在“☰ → 偏好设置 → 设置 → 备份与恢复”中下载JSON备份。更换设备或清除浏览器数据前，请先备份。']
  ];
  const faq=[
   ['How do multiplayer sessions start and finish?','多人游戏如何开始和结束？','Choose 1–20 rounds before creating a room; the default is 3. The host prepares each round, then each player presses Begin. Quiz questions and timers wait for Begin; matching pairs uses its timed preview. Bingo waits for every remaining player before showing pictures or allowing calls. The final planned round ends the session automatically. Between rounds the host can choose Finish session early. End current round marks unfinished players as not finished, with no points; Cancel game & close room stops the whole session. Completed scores remain saved.','创建房间前选择1至20轮，默认为3轮。房主准备每一轮后，各玩家点击开始。问答题目及计时会等待点击开始；配对游戏使用限时预览。宾果会等待所有仍参与的玩家准备好，才显示或叫出图片。计划的最后一轮完成后会自动结束。回合之间，房主可选择结束本次游戏。“结束本轮”会把未完成玩家标为未完成，本轮不得分；“取消游戏并关闭房间”会停止整场游戏。已完成成绩仍会保留。'],
   ['Can I receive invitations while playing?','游戏中能收到邀请吗？','Yes, while online with this page active you can receive new open-room invitations, including when you are in another room. Invitations do not switch rooms automatically. A guest must leave the current room; a host must finish or cancel it before joining another. Invitations are in-app notices, not device push notifications. Background or suspended browser tabs may deliver them only when you return.','可以。保持在线并使用此页面时，即使身处其他房间，也可收到新开放房间的邀请。邀请不会自动切换房间。客人须先退出当前房间；房主须先结束或取消房间，才能加入另一个。邀请属于应用内提示，并非设备推送通知。后台或暂停的浏览器页面可能要在返回时才收到提示。'],
   ['Does closing a window take me offline?','关闭窗口会让我离线吗？','Back to garden · stay joined only hides the multiplayer screen and keeps your room membership. Your timer continues if you have already begun. Leave this room ends only your participation. Finish session and Cancel game & close room release everyone in the room but keep them online in the lobby. Go offline stops lobby updates and invitations on this device; leave or finish your room first. It does not erase saved scores.','“返回花园 · 保留参与”只隐藏多人游戏画面，保留房间成员身份。若已点击开始，计时会继续。“退出此房间”只结束你自己的参与。“结束本次游戏”及“取消游戏并关闭房间”会释放所有房间成员，但仍保留在线大厅状态。“退出在线大厅”会停止此设备的大厅更新与邀请；请先退出或结束房间。已保存成绩不会删除。'],

   ['How do online matching cards work?','在线配对卡片如何操作？','Cards start face down. Press Begin to reveal every picture for 5 seconds with 6 pairs, or 8 seconds with 10 pairs. The cards close automatically, then your matching timer starts. Tap each card once. After a mismatch, tap another card immediately or wait for the two cards to close. Leaving and resuming does not restart the preview. Leave this room returns you to the lobby, where you can enter another room code; the other players can continue. Hosts must finish or cancel their room before joining another.','卡片最初朝下。点击“开始”后，6对卡片会显示5秒，10对卡片会显示8秒。之后自动翻回，并开始配对计时。每张卡片点击一次即可。配错后可立即点击另一张，或等待两张卡片自动翻回。返回游戏不会重新开始预览。点击“退出此房间”会返回大厅，可输入其他房间码，其他玩家可以继续。房主须先结束或取消自己的房间，才能加入其他房间。'],
   ['What does a storage warning mean?','存储警告是什么意思？','If saving fails, keep this page open and export each player’s JSON backup from Settings. Check browser storage space and permissions. An unreadable save starts a temporary garden while preserving the original data as a recovery copy. Download original data keeps that copy for repair; it may contain all local profiles and is not a player-backup JSON for importing. Keep it private. If storage is full, the original stored data is left untouched.','如果保存失败，请保持页面打开，并在设置中为各玩家导出JSON备份。检查浏览器存储空间与权限。无法读取存档时，应用会启动临时花园，同时保留原始资料作为恢复副本。“下载原始资料”可保存该副本以供修复；它可能包含所有本地玩家资料，并非用于导入的玩家JSON备份，请妥善保管。存储空间不足时，不会覆盖原始存档。'],
   ['How are daily practice games chosen?','每日练习如何选择？','The app compares your last five completed results per game and chooses the three lowest averages. Ties favour the game played less recently. With fewer than three recorded games it fills the remaining places with other activities. Accuracy, completion and win results differ between games; this is a practice suggestion, not a diagnosis. Only the current local player’s retained results are used, not online rankings or speed.','应用比较各游戏最近最多五局的平均成绩，选择最低的三项；同分时优先选择较久未玩的游戏。记录少于三项时补充其他活动。不同游戏使用正确率、完成率或胜负结果，因此仅作为练习建议，不是诊断。仅使用当前本地玩家保留的记录，不使用在线排名或速度。'],
   ['How do I return home or change a game?','如何返回主页或更换游戏？','Select Mind Garden in the navbar to return to the welcome page. All Games lets you search, choose a category and select a difficulty before starting.','点击导航栏的Mind Garden返回欢迎页。在所有游戏中可搜索、选择类别，并在开始前选择难度。'],
   ['Why can’t I hear sound?','为什么听不到声音？','Check your device volume and whether the browser tab is muted. Open Music in the navbar or ☰ menu, select a sound and press ▶. Nature sounds can be paused by games or other music; welcome videos start muted.','检查设备音量及浏览器标签页是否静音。打开导航栏或☰菜单中的音乐，选择声音并点击▶。游戏或其他音乐可能暂停自然声音；欢迎视频默认静音。'],
   ['Why is animation off?','为什么动画处于关闭状态？','The app initially follows your device’s Reduce Motion setting. Use Animation in ☰ → Preferences or the navbar play/pause icon to choose On or Off; your choice is saved for this player. Video playback is separate.','应用最初遵循设备的减少动态效果设置。使用☰ → 偏好设置中的动画按钮或导航栏播放/暂停图标选择开或关，选择会保存在此玩家的设置中。视频播放另行控制。'],
   ['How do I fix text that feels too large or small?','文字太大或太小怎么办？','Use T− / T+ or select a percentage from 80% to 200% in the navbar or ☰ menu. The ↺ button resets text to exactly 100%. Game cards wrap to fit. The navbar stays on one row, and the bouquet artwork keeps its proportions while its text grows.','使用导航栏或☰菜单中的T− / T+，或选择80%至200%的百分比。↺按钮将文字重设为100%。游戏卡片会根据空间换行；导航栏保持单行，花束文字放大时，图像仍保持适当比例。'],
   ['Where did the navbar buttons go?','导航栏按钮在哪里？','Open ☰. At smaller widths or larger text sizes, controls that no longer fit move into this menu automatically. It includes all main links, Music, Language, text size, Display mode, About and Contact. Settings, Switch Player and Family View are also here.','打开☰。屏幕较窄或文字较大时，放不下的控件会自动移入此菜单。其中包含所有主要链接、音乐、语言、文字大小、显示模式、关于及联系；设置、切换玩家与家人视图也在这里。'],
   ['Why won’t a photo or video appear?','为什么照片或视频没有显示？','Choose the right player and light/dark scenery in Settings. Use JPEG, PNG or WebP for scenery photos, and MP4 or WebM for videos. Each player can keep up to 3 videos of up to 100 MB each. If a video cannot play, try another file; browser codec support varies.','在设置中确认当前玩家及浅色/深色背景。背景照片使用JPEG、PNG或WebP，视频使用MP4或WebM。每位玩家最多保存3个视频，每个不超过100 MB。若无法播放，请尝试其他文件；浏览器支持的视频编码可能不同。'],
   ['Why can’t I join another room?','为什么无法加入另一个房间？','Only one active room is allowed in this browser’s online session. Guests must Leave room; hosts must Finish session or Cancel game & close room before joining another. Back to garden · stay joined keeps the current room active. Online play needs an internet connection. An expired or unavailable room offers Back to lobby; completed rankings remain accessible through Saved online rankings.','此浏览器的在线会话只能参与一个活动房间。客人须退出房间；房主须结束本次游戏或取消房间，才可加入另一房间。“返回花园 · 保留参与”仍会保留当前房间。在线游戏需要网络连接。房间过期或不可用时，可选择返回大厅；已完成的排名仍可通过“已保存的在线排名”查看。'],
   ['Where are my progress and backup?','我的进度与备份在哪里？','Check that you selected the same player and browser. Progress does not automatically sync between devices. In Settings → Backup and restore, import a Mind Garden JSON backup, then select the imported player. Existing players are kept. CSV is for viewing and cannot be imported.','请确认选择了同一玩家并使用同一浏览器。进度不会自动跨设备同步。在“设置 → 备份与恢复”中导入心灵花园JSON备份，再选择导入的玩家。现有玩家会保留。CSV仅供查看，无法导入。'],
   ['What if the feedback form does not load?','反馈表无法加载怎么办？','Check your internet connection, open Contact and choose Open in new tab. The form’s questions are bilingual; Google controls its own buttons, notices and language. You do not need to include game history or private information to describe a problem.','检查网络连接，打开联系并选择在新标签页打开。表单问题为中英双语；Google控制其自身按钮、提示与语言。描述问题时，无须附上游戏历史或私人资料。']
  ];
  const privacy=[
   ['Singapore PDPA','新加坡个人资料保护法（PDPA）','This notice explains Mind Garden’s current data handling with reference to Singapore’s Personal Data Protection Act 2012 (PDPA), where applicable. The Act includes requirements on purposes and consent, access and correction, protection, retention and overseas transfers. Your options and the app’s current limitations are described below.','本说明参照适用的新加坡《2012年个人资料保护法》（PDPA），介绍心灵花园目前处理资料的方式。该法涵盖用途与同意、查阅与更正、保护、保留期限及跨境传输等要求。下文说明您的选择及应用目前的限制。'],
   ['Why information is used','资料的用途','Local player information saves your preferences, progress and practice recommendations. Online identifiers, room activity and scores support room membership, invitations, shared games and saved rankings. The feedback form is for suggestions, troubleshooting and privacy enquiries; submit only information needed for your request. A nickname is enough for gameplay.','本地玩家资料用于保存偏好、进度及练习建议。在线标识、房间活动与成绩用于房间参与、邀请、共同游戏及已保存的排名。反馈表用于建议、问题排查与隐私咨询；请仅提交处理请求所需的资料。游戏使用昵称即可。'],
   ['On this device','此设备上的资料','Player names, avatars, preferences, scores and retained activity are saved in this browser. Personal photos and welcome videos are also stored locally. Personal music files must be selected again after a reload. Profiles are not password-protected accounts; someone using the same browser may access them. Family View should be used with everyone’s agreement.','玩家名称、头像、偏好、成绩与保留的活动记录保存在此浏览器。个人照片与欢迎视频也保存在本地。刷新后需重新选择个人音乐文件。玩家资料并非受密码保护的账户；使用同一浏览器的人可能访问它们。使用家人视图前，应取得所有人的同意。'],
   ['Online play and feedback','在线游戏与反馈','Online play sends your display name, session identifier, room activity and results to the game server. The lobby can show the host’s name and open room code. Room participants can see player names, scores and saved rankings. Opening Contact connects to Google Forms. Information you submit goes to Google and the form owner; the app does not automatically attach your player history.','在线游戏会将显示名称、会话标识、房间活动与成绩发送到游戏服务器。大厅可显示房主名称与开放房间码。房间参与者可看到玩家名称、成绩及已保存的排名。打开联系会连接Google表单。提交的资料会发送给Google及表单所有者；应用不会自动附上玩家历史。'],
   ['Service providers and overseas processing','服务提供方与跨境处理','Loading the app connects to Cloudflare hosting and may request fonts from Google. Opening Contact connects to Google Forms. These services receive connection information such as your IP address, and may process data outside Singapore depending on their services and configuration. Google manages its form cookies and service notices.','加载应用会连接Cloudflare托管服务，也可能向Google请求字体。打开联系会连接Google表单。这些服务会接收IP地址等连接信息，并可能根据其服务与配置在新加坡境外处理资料。Google自行管理其表单Cookie与服务提示。'],
   ['Your choices and privacy requests','您的选择与隐私请求','You can play local games without entering the online lobby or submitting feedback. To stop online participation, leave or close your room, then choose Go offline. For access, correction, consent withdrawal or other privacy requests, use Contact and begin your message with “Privacy / PDPA”. Provide only relevant details, such as a room code and approximate date. Requests may require identity verification and are subject to applicable legal requirements. Do not send passwords, session tokens, identity documents or full backups through the general feedback form.','无需进入在线大厅或提交反馈，也可玩本地游戏。如需停止在线参与，请退出或关闭房间，再选择退出在线大厅。如需查阅、更正、撤回同意或提出其他隐私请求，请通过联系提交，并在消息开头注明“隐私 / PDPA”。仅提供房间码、大致日期等相关资料。请求可能需要核实身份，并须遵守适用法律要求。请勿通过一般反馈表发送密码、会话令牌、身份证件或完整备份。'],
   ['How long records remain','资料保留情况','Local activity and received multiplayer history each keep up to 300 entries per player. Other local preferences and media remain until removed or browser storage is cleared. Online rooms expire after 24 hours, but that does not erase completed rankings. This version has no scheduled deletion of server history and does not control retention of submitted Google Forms feedback. Use Contact to ask about server-held or feedback records.','每位玩家的本地活动与已接收的多人游戏历史各最多保留300条。其他本地偏好与媒体会保留至被删除或浏览器存储被清除。在线房间24小时后过期，但不会因此删除已完成的排名。本版本没有服务器历史的定期删除机制，也不控制已提交Google表单反馈的保留期限。如需了解服务器或反馈记录，请通过联系咨询。'],
   ['Back up or move your data','备份或迁移资料','Settings → Backup and restore exports the selected player’s retained history, scores and preferences as JSON. Local activity keeps up to 300 games. Backups exclude photos, videos, personal music, other players and online sessions. Importing creates a separate player; it does not overwrite existing players. Keep downloaded backups somewhere private.','“设置 → 备份与恢复”可将所选玩家保留的历史、成绩与偏好导出为JSON。本地活动最多保留300局。备份不包含照片、视频、个人音乐、其他玩家及在线会话。导入会创建独立玩家，不会覆盖现有玩家。请妥善保管下载的备份。'],
   ['Remove local data','删除本地资料','Back up anything you want to keep first. Remove personal scenery photos and welcome videos in Settings before removing their player. ☰ → Switch Player offers Remove when another player remains. To erase all players and local media, clear this site’s stored data in your browser; this cannot be undone without backups and original media files. Downloaded backups remain until you delete those files yourself.','请先备份需要保留的资料。删除玩家前，先在设置中移除其个人背景照片与欢迎视频。在还有其他玩家时，“☰ → 切换玩家”提供删除功能。如需清除所有玩家与本地媒体，请在浏览器中清除此网站的存储数据；没有备份与原始媒体文件时无法恢复。已下载的备份须自行删除。'],
   ['Limits of local removal','本地删除的范围','Removing a local player, leaving a room or clearing browser storage does not erase server-held room records or feedback already submitted to Google Forms. This app does not currently offer automatic deletion of those remote records. Use Contact for questions about them.','删除本地玩家、退出房间或清除浏览器存储，不会删除服务器上的房间记录或已提交至Google表单的反馈。应用目前不提供这些远程记录的自动删除功能。如有疑问，请通过联系反馈。']
  ];
  const button=(action,en,zh)=>'<button type="button" class="btn" data-about-action="'+action+'">'+T(en,zh)+'</button>';
  const entries=items=>items.map(x=>'<details><summary>'+T(x[0],x[1])+'</summary><div class="about-answer"><p>'+T(x[2],x[3])+'</p></div></details>').join('');
  return '<nav class="about-shortcuts" aria-label="'+T('About sections','关于栏目')+'">'+[['aboutSetup','First-time setup','首次使用设置'],['aboutFAQ','Help & troubleshooting','帮助与问题解答'],['aboutPrivacy','Privacy, PDPA & my data','隐私、PDPA与我的资料'],['aboutUserGuide','User guide','使用指南']].map(x=>'<button type="button" class="btn" data-about-target="'+x[0]+'">'+T(x[1],x[2])+'</button>').join('')+'</nav><div class="about-support">'+
   '<details id="aboutSetup"><summary>'+T('First-time setup','首次使用设置')+'</summary><div class="about-answer"><p>'+T('Set up at your own pace. Every step is optional and you can return here whenever you need.','按照自己的节奏设置。每一步均可跳过，随时可以回到这里。')+'</p><ol>'+setup.map(x=>'<li><strong>'+T(x[0],x[1])+'</strong><p>'+T(x[2],x[3])+'</p></li>').join('')+'</ol><div class="about-actions">'+button('players','Choose or add a player','选择或添加玩家')+button('settings','Open settings','打开设置')+button('daily','Today’s Games','今日游戏')+'</div></div></details>'+
   '<details id="aboutFAQ"><summary>'+T('FAQ · Help & troubleshooting','常见问题 · 帮助与问题解答')+'</summary><div class="about-answer about-questions">'+entries(faq)+'<div class="about-actions">'+button('settings','Open settings','打开设置')+button('contact','Contact & feedback','联系与反馈')+'</div></div></details>'+
   '<details id="aboutPrivacy"><summary>'+T('Privacy, PDPA & my data','隐私、PDPA与我的资料')+'</summary><div class="about-answer about-questions"><p class="privacy-updated">'+T('Privacy notice updated: 7 November 2026.','隐私说明更新于2026年11月7日。')+'</p>'+entries(privacy)+'<p><a href="https://sso.agc.gov.sg/Act/PDPA2012" target="_blank" rel="noopener noreferrer">'+T('Read Singapore’s PDPA on Singapore Statutes Online ↗','在新加坡法令在线阅读PDPA原文 ↗')+'</a></p><div class="about-actions">'+button('settings','Backup and data settings','备份与资料设置')+button('players','Manage local players','管理本地玩家')+button('contact','Privacy enquiry / request','隐私咨询 / 请求')+'</div></div></details></div>';
 }
 function aboutContent(release){
  const features=[
   ['Games at your pace','按照自己的节奏游戏','Explore memory, attention, language, numbers and logic, plus picture puzzles, dominoes, picture bingo, garden pathways, familiar sayings, Connect the Dots, Spot the Difference, Colour Links, Remember & Draw, Number & Word Recall and Garden Pets. Search All Games or follow Today’s Games.','探索记忆、观察、语言、数字与逻辑，以及花园拼图、多米诺、图片宾果、花园小径、谚语、顺序连点、找不同、彩色连线、记忆画图、数字与词语回忆和花园宠物。在所有游戏中搜索，或点击今日游戏。'],
   ['Progressive challenges','循序渐进的挑战','Choose levels 1–15 for the original activities. Higher levels add longer memory loads, larger searches, more demanding number rules and closer word choices. Matching pairs uses six board sizes; the relaxed puzzle and memory activities use three challenge sizes. Garden Pets is unscored. Daily practice uses your recent results, and you may change its level before starting.','原有活动可选择1至15关。高关卡增加记忆量、搜索内容、数字规律难度与相近词语选项。配对游戏有六种规模，轻松益智与记忆活动有三种挑战规模。花园宠物不计分。每日练习根据近期成绩选择，开始前仍可更改难度。'],
   ['Your growing garden','您的成长花园','Playing earns growth points. Watch your bouquet progress from seeds to full bloom, choose your flowers, and turn or pause the rotating bouquet. Choose my flowers → Preview full bloom lets you compare every finished flower style with your current stage without changing progress.','游戏可获得成长值。看着花束从种子成长至盛开，选择喜爱的花朵，转动花束或暂停旋转。“选择我的花朵 → 预览盛开花束”可比较当前阶段与各种花朵的盛开样子，不会改变进度。'],
   ['Play Together','一起玩','Create or join an online room for up to 8 players. Share a room code, play the same activity, and see round scores and the room leaderboard.','创建或加入最多8人的在线房间。分享房间码，参与相同活动，查看本轮成绩与房间排行榜。'],
   ['Progress and local players','进度与本地玩家','My Progress shows your activity, streak and garden growth. Keep separate local players and use Family View, with everyone’s agreement, to review their activity on this device.','“我的进度”显示游戏活动、连续天数与花园成长。可建立独立的本地玩家；在所有人同意后，通过“家人视图”查看此设备上的活动。'],
   ['Comfortable controls','舒适的操作','Adjust text from 80% to 200%, choose light or dark appearance, switch English/Chinese, and control animation, contrast, spoken picture names and break reminders.','可将文字调整为80%至200%，选择浅色或深色外观、切换中英文，并控制动画、对比度、图片名称朗读与休息提醒。'],
   ['A garden that feels like yours','个性化花园','Choose scenery, add your own photos or welcome videos, and enjoy music and nature sounds. Back up history, scores and preferences as JSON, or export activity as CSV.','选择背景、添加个人照片或欢迎页视频，享受音乐与自然音效。可将历史、成绩与偏好备份为JSON，或将活动导出为CSV。']
  ];
  const guide=[
   ['Start your first game','开始第一局游戏',[
    ['Select your welcome name to rename yourself or choose/add a player. The Mind Garden name in the navbar takes you back to the welcome page.','点击欢迎名称以改名或选择/添加玩家。点击导航栏的“Mind Garden”名称可返回欢迎页。'],
    ['Today’s Games selects your three lowest recent average results (up to five sessions per game). With little history, it adds other games. The choices use this player’s local records and do not measure health. You can change the practice level before Begin, or open All Games. Search by name or choose a category, then select a game and a comfortable difficulty.','“今日游戏”按各游戏最近最多五局的平均成绩，选择三项最需要练习的活动。记录不足时补充其他游戏。仅使用当前玩家的本地记录，不评估健康状况。点击开始前可更改练习难度，也可打开“所有游戏”。按名称搜索或选择类别，再选择游戏与合适的难度。'],
    ['The original five relaxed activities have no countdown: swap picture pieces, take turns in dominoes, match called bingo pictures, rotate path tiles, or complete a saying. Choose a small, medium or larger challenge. Hints and pauses are available; picture puzzles and pathways also offer Undo.','五项新活动没有倒计时：交换拼图、轮流出多米诺、匹配宾果图片、旋转小径方块，或补全谚语。可选择小、中或较大的挑战。均可提示与暂停；拼图及小径也可撤销操作。'],
    ['New activities: Connect the Dots supports numbers or letters; Spot the Difference marks both pictures; Colour Links connects matching symbols without crossings. Remember & Draw and Number & Word Recall wait for Ready and use your chosen viewing time, followed by an untimed answer. Drawing also offers a shape-choice alternative. Garden Pets lets you choose a cat or dog, pet, feed, brush, play or rest without scores.','新活动：顺序连点可选数字或字母；找不同会在两张图上标记；彩色连线连接相同符号且不能交叉。记忆画图与数字词语回忆等待您点击准备，按所选时间显示内容，回答不限时。画图也可改为选择图形。花园宠物可选择猫或狗，抚摸、喂食、梳毛、玩耍或休息，不计分。'],
    ['After Begin, the game opens at the top of the screen. Shopping basket and Short story memory wait for you to choose I am ready or Answer the question. Follow the instructions on each game screen. Use Pause when offered, or return to the menu when you want a rest. Timed matching challenges can be turned off in ☰ → Preferences → Settings.','点击开始后，游戏会在画面顶部显示。购物篮与短篇故事记忆会等待您点击“我准备好了”或“回答问题”。按照每个游戏画面的说明操作。可使用暂停，或在需要休息时返回菜单。在“☰ → 偏好设置 → 设置”中可关闭限时配对挑战。']
   ]],
   ['Read comfortably and control movement','舒适阅读与控制动画',[
    ['Use T− / T+ or the percentage selector to change text size. When space is limited, controls move into the ☰ menu so the navbar stays on one row. Select ↺ to return to 100%. Use the sun/moon button for light or dark mode, or Display mode in ☰ for Light, Dark or Auto.','使用T− / T+或百分比菜单调整文字大小。空间不足时，控件会移入☰菜单，让导航栏保持单行。点击↺返回100%。使用太阳/月亮按钮切换浅色或深色模式，或在☰的显示模式中选择浅色、深色或自动。'],
    ['Animation in the navbar or ☰ → Preferences controls decorative wildlife and bouquet rotation. Your device’s Reduce Motion preference is followed until you explicitly choose On or Off. Settings also offers Gentle and Standard movement.','导航栏或☰ → 偏好设置中的动画按钮控制装饰动物与花束自动旋转。在您明确选择开或关之前，应用遵循设备的减少动态效果设置。设置中也提供轻柔与标准动态模式。'],
    ['In ☰ → Preferences → Settings, adjust large/high-contrast text, colour-blind-safe colours, left-handed layout, spoken picture names and break reminders. Use Language in the navbar or the ☰ menu to switch English and Chinese.','在“☰ → 偏好设置 → 设置”中调整大字/高对比度、色盲友好颜色、左手布局、图片名称朗读与休息提醒。通过导航栏或“☰菜单”中的语言按钮切换中英文。']
   ]],
   ['Choose scenery, video and sound','选择背景、视频与声音',[
    ['Use the welcome page’s left/right arrows to browse backgrounds and saved videos. ☰ → Preferences → Settings lets you choose separate light/dark scenery and add your own photos.','使用欢迎页左右箭头浏览背景与已保存的视频。在“☰ → 偏好设置 → 设置”中可分别选择浅色/深色背景并添加个人照片。'],
    ['Under Welcome videos, add up to 3 MP4 or WebM videos per player, each up to 100 MB. Choose Use video or browse with the arrows. Start playback with Play / pause video; videos begin muted and have separate sound controls.','在“欢迎页视频”中，每位玩家最多可添加3个MP4或WebM视频，每个不超过100MB。选择使用视频或通过箭头切换。点击播放/暂停视频开始播放；视频默认静音，并有独立的声音控制。'],
    ['Use the speaker icon in the navbar, or Music in ☰ → Preferences to choose music, nature soundscapes and volume. Personal music files stay on your device and must be chosen again after a reload.','使用导航栏的扬声器图标，或☰ → 偏好设置中的音乐按钮，选择音乐、自然声景与音量。个人音乐文件保留在设备上，刷新后须重新选择。']
   ]],
   ['Play with family or friends','与亲友一起游戏',[
    ['Open Play Together and enter your display name. Create a room to host, or join with a 6-character room code or invitation. Online play needs an internet connection. An expired or unavailable room offers Back to lobby; completed rankings remain accessible through Saved online rankings.','打开“一起玩”并输入显示名称。创建房间成为房主，或通过6位房间码或邀请加入。在线游戏需要网络连接。房间过期或不可用时，可选择返回大厅；已完成的排名仍可通过“已保存的在线排名”查看。'],
    ['The host chooses from 13 activity types (17 options) and starts the round. Players complete the same challenge and see scores when the round finishes. The host can start another round in the same room.','房主从13类活动（17个选项）中选择并开始本轮。玩家参与相同挑战，在回合结束后查看成绩。房主可在同一房间开始下一轮。'],
    ['For cooperative Picture bingo, select it when creating a room, or use its Play bingo together online button in All Games. The host calls each picture when the group is ready. Everyone marks called pictures on their own card; completing all 9 earns the same score, without a speed bonus.','一起玩图片宾果时，在创建房间时选择该活动，或在所有游戏中点击其“在线一起玩宾果”。房主在大家准备好后叫下一张图片。每人标记自己的卡片；完成全部9张可获得相同分数，没有速度加分。'],
    ['Back to garden · stay joined keeps your place in the room. Guests can Leave room; the host can Cancel / close room for everyone. Completed scores are kept; unfinished participation stops.','“返回花园 · 保留参与”会保留房间中的席位。客人可退出房间；房主可为所有人取消/关闭房间。已完成的成绩保留，未完成的参与会停止。'],
    ['Open Leaderboard → Online room rankings, or Saved online rankings in the lobby, to revisit completed rounds, including closed rooms. Access uses this browser’s online identity; local JSON backups do not restore it.','打开“排行榜 → 在线房间排名”，或大厅中的“已保存的在线排名”，可查看已完成回合，包括已关闭房间。访问权限关联此浏览器的在线身份；本地JSON备份无法恢复该身份。'],
    ['Only one active room is allowed for the current browser’s online session. Leave or close it before joining or creating another.','当前浏览器的在线会话只能参与一个活动房间。加入或创建另一房间前，请先退出或关闭当前房间。']
   ]],
   ['Grow your bouquet and review progress','培育花束与查看进度',[
    ['Your garden progresses through Seeds, Sprouts, Buds, Opening and Full bloom, at 12, 24, 36, 48 and 60 growth points. Choose my flowers changes your bouquet’s flowers.','花园在12、24、36、48、60成长值时，分别进入种子、嫩芽、花苞、绽放与盛开阶段。“选择我的花朵”可更换花束中的花朵。'],
    ['Use the bouquet’s left/right controls to turn it manually, or || to pause automatic turning and ▶ to resume. Animation Off also stops rotation. At larger text sizes the progress sections stack, while the bouquet artwork keeps its proportions and fits the available width.','使用花束左右按钮手动转动，或点击||暂停自动旋转，点击▶继续。关闭动画也会停止旋转。文字较大时，进度栏目会垂直排列，花束图像仍保持比例并适应可用宽度。'],
    ['My Progress shows recent games and the past seven days. Leaderboard shows scores and achievements. ☰ → Family View shows activity for local players after everyone agrees. Scores are for enjoyment, not a health assessment.','“我的进度”显示近期游戏与最近七天的活动。“排行榜”显示成绩与成就。在所有人同意后，“☰ → 家人视图”可显示本地玩家活动。成绩用于娱乐，不是健康评估。']
   ]],
   ['Back up or restore your player','备份或恢复玩家资料',[
    ['Open ☰ → Preferences → Settings → Backup and restore. Download JSON backup saves the selected player’s retained history, scores and preferences. Download activity CSV creates a table for viewing.','打开“☰ → 偏好设置 → 设置 → 备份与恢复”。下载JSON备份可保存所选玩家保留的历史、成绩与偏好。下载活动CSV可生成供查看的表格。'],
    ['To restore, choose Import JSON backup, review the player summary, then select Import as a new player. Existing players are kept. Use Player & garden → Choose or add a player to select the imported player.','恢复时，选择导入JSON备份，查看玩家摘要，再选择导入为新玩家。现有玩家会保留。使用“玩家与花园 → 选择或添加玩家”选择导入的玩家。'],
    ['CSV cannot be imported. Backups do not include photos, videos, personal music files, other players or online room sessions. Local activity retains up to 300 games. Export a backup before clearing browser data or moving to another browser/device.','CSV不能导入。备份不包含照片、视频、个人音乐文件、其他玩家或在线房间会话。本地活动最多保留300局。清除浏览器数据或更换浏览器/设备前，请先导出备份。']
   ]],
   ['Send feedback','提交反馈',[
    ['Open Contact in ☰ → Help, complete the Google form inside the window, then use the form’s Submit button. If the form does not load, choose Open in new tab. Feedback requires an internet connection. For privacy or data requests, begin your message with “Privacy / PDPA”.','打开☰ → 帮助中的联系，在窗口内填写Google表单，然后点击表单的提交按钮。如果表单未能加载，可选择在新标签页打开。反馈需要网络连接。如需提出隐私或资料请求，请在消息开头注明“隐私 / PDPA”。']
   ]]
  ];
  return '<p class="about-version">'+T('Version ','版本 ')+esc(release)+'</p><p class="about-copyright">© '+new Date().getFullYear()+' Pebblebrooks. '+T('All rights reserved.','保留所有权利。')+'</p><p class="about-credits">'+T('Developed by Pebblebrooks. Third-party content remains subject to its respective licences and credits.','由Pebblebrooks开发。第三方内容仍适用各自的许可与署名要求。')+'</p><p class="about-intro">'+T('Mind Garden is a welcoming collection of games and relaxing garden experiences designed with older adults in mind. It combines everyday thinking activities, personal progress and shared play, with controls that let each person choose a comfortable pace.','心灵花园是一款为长者用心设计的游戏与休闲花园应用，将日常思考活动、个人进度和共同游戏结合，让每个人都能选择舒适的节奏。')+'</p><section class="v4-about"><h3>'+T('New in V4','V4更新')+'</h3><p>'+T('A softer light palette, a clearer daily start, consistent picture artwork and a Quiet game view. Use the compact scenery icon above the board to toggle the game background, or choose it in Settings; this choice is saved for each player. Scenery arrows are grouped with the caption below the welcome actions. Open Quick guide from ☰ → Help for the icon key.','更柔和的浅色主题、更清晰的每日开始入口、统一的图片素材与安静游戏视图。使用棋盘上方的小风景图标切换背景，或在设置中更改，选择会为各玩家保存。背景切换箭头与标题集中在欢迎页主要操作下方。可在☰ → 帮助中打开快速指南，查看图标说明。')+'</p><p>'+T('Picture artwork: Twemoji 17.0.3 by Twitter, Inc. and other contributors, licensed under ','图片素材：Twemoji 17.0.3，由Twitter, Inc.及其他贡献者提供，采用 ')+ '<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. <a href="https://github.com/jdecked/twemoji" target="_blank" rel="noopener noreferrer">Twemoji</a>. '+T('Artwork is bundled locally; game photos you add remain your own.','素材保存在应用中；您添加的游戏照片仍属于您自己。')+'</p></section>'+aboutExtras()+'<h3>'+T('What you can do','主要功能')+'</h3><div class="about-features">'+features.map(f=>'<article><h4>'+T(f[0],f[1])+'</h4><p>'+T(f[2],f[3])+'</p></article>').join('')+'</div><h3 id="aboutUserGuide">'+T('User guide','使用指南')+'</h3><p>'+T('Open a section below for step-by-step help.','打开下方栏目，查看分步说明。')+'</p><div class="about-guide">'+guide.map((g,i)=>'<details'+(i===0?' open':'')+'><summary>'+T(g[0],g[1])+'</summary><ol>'+g[2].map(step=>'<li>'+T(step[0],step[1])+'</li>').join('')+'</ol></details>').join('')+'</div><p class="tip">'+T('For enjoyment and cognitive engagement. Not a medical test or treatment. Local player data is stored in this browser; online games share player names and scores through the game server.','用于娱乐和认知活动，并非医疗测试或治疗。本地玩家资料保存在此浏览器中；在线游戏通过游戏服务器共享房间中的玩家名称与成绩。')+'</p>';
 }
 function openInfo(kind){
  const about=kind==='about',release=document.querySelector('meta[name="mind-garden-release"]')?.content||'',title=about?T('About Mind Garden','关于心灵花园'):T('Contact & feedback','联系与反馈'),url=feedbackURL(),embed=feedbackURL(true);
  const content=about?aboutContent(release):'<p>'+T('Share a suggestion, report a problem, or tell us about your Mind Garden experience. Complete the form below and select Submit.','欢迎提出建议、报告问题，或分享您的心灵花园体验。填写下方表单并点击提交。')+'</p>'+(url?'<div class="feedback-actions"><a id="googleFeedbackLink" class="btn" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+T('Open in new tab ↗','在新标签页打开 ↗')+'</a><span>'+T('If Google asks you to sign in or the form does not load, open it in a new tab.','如果Google要求登录或表单未能加载，请在新标签页打开。')+'</span></div>':'')+(embed?'<img class="feedback-banner" src="feedback-banner.jpg" alt="" width="1200" height="300"><iframe id="googleFeedbackFrame" class="feedback-frame" src="'+esc(embed)+'" title="'+T('Mind Garden Google feedback form','心灵花园Google反馈表')+'" loading="eager" referrerpolicy="strict-origin-when-cross-origin"></iframe>':'<p id="feedbackPending" role="status">'+T('The feedback form link will be available here soon.','反馈表链接即将在此提供。')+'</p>');
  overlay('<section class="app-info '+(about?'app-info-about':'app-info-contact')+'" role="dialog" aria-modal="true" aria-labelledby="appInfoTitle" tabindex="-1"><header><h2 id="appInfoTitle">'+title+'</h2><button type="button" class="btn" id="infoClose" aria-label="'+T('Close','关闭')+'">×</button></header>'+content+'<button type="button" class="btn" id="infoDone">'+T('Done','完成')+'</button></section>');
  const panel=document.querySelector('#box .app-info'),close=()=>{closeOv();const source=document.querySelector('#unifiedNav .nav-actions [data-go="'+kind+'"]')||document.getElementById('navMore');(source?.dataset.navHidden==='true'?document.getElementById('navMore'):source)?.focus()};document.getElementById('infoClose').onclick=close;document.getElementById('infoDone').onclick=close;
  panel.querySelectorAll('[data-about-target]').forEach(button=>button.onclick=()=>{const target=document.getElementById(button.dataset.aboutTarget);if(!target)return;if(target.tagName==='DETAILS')target.open=true;const focus=target.querySelector('summary')||target;if(focus.tagName!=='SUMMARY')focus.tabIndex=-1;const box=document.getElementById('box');box.scrollTop+=target.getBoundingClientRect().top-panel.querySelector('header').getBoundingClientRect().bottom-16;focus.focus({preventScroll:true})});
  panel.querySelectorAll('[data-about-action]').forEach(button=>button.onclick=()=>{const action=button.dataset.aboutAction;closeOv();if(action==='players')window.openPl();else if(action==='settings')window.openSet();else if(action==='daily')startDaily();else if(action==='contact')openInfo('contact')});
  panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close()}if(e.key==='Tab'){const buttons=[...panel.querySelectorAll('button,a[href],summary,iframe')].filter(el=>!el.disabled&&el.tabIndex>=0&&el.getClientRects().length),first=buttons[0],last=buttons.at(-1);if(e.shiftKey&&(document.activeElement===first||document.activeElement===panel)){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};panel.focus();
 }
 function menuGroup(en,zh,items){return '<section class="nav-group"><h3>'+T(en,zh)+'</h3><div>'+items.map(v=>'<button data-go="'+v[0]+'"><span aria-hidden="true">'+v[1]+'</span><span>'+T(v[2],v[3])+'</span></button>').join('')+'</div></section>'}
 let nextHelp=0;
 function info(en,zh){const id="garden-help-"+(++nextHelp);return '<div class="mg-help"><button type="button" class="mg-help-trigger" aria-label="'+T('More information','更多信息')+'" aria-expanded="false" aria-describedby="'+id+'">ⓘ</button><div id="'+id+'" class="mg-help-text" role="tooltip">'+T(en,zh)+'</div></div>'}
 function buildNav(){
  const links=[['library','▦','All Games','所有游戏'],['online','♧','Play Together','一起玩']];
  nav.innerHTML='<button class="nav-brand" data-go="home" aria-label="'+T('Mind Garden home','心灵花园主页')+'"><span aria-hidden="true">'+icon('sprout')+'</span> <span>Mind Garden</span></button><div class="nav-items">'+links.map(v=>'<button class="nav-link'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' current':'')+'" data-go="'+v[0]+'"'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' aria-current="page"':'')+' aria-label="'+T(v[2],v[3])+'"><span aria-hidden="true">'+icon(({home:'home',library:'games',online:'together',progress:'progress',leaderboard:'trophy'})[v[0]])+'</span>'+ (v[0]==='home'?'':' <span class="nav-label">'+T(v[2],v[3])+'</span>')+'</button>').join('')+
  '</div><div class="nav-actions"><button class="nav-quiet nav-symbol" data-go="music" aria-label="'+T('Music','音乐')+'">'+icon('music')+'</button><button class="nav-quiet nav-symbol" data-go="language" aria-label="'+T('Language','语言')+'">'+icon('language')+'</button><button type="button" id="navAppearance" class="nav-quiet nav-symbol nav-appearance" data-go="appearance"></button><button type="button" id="navMore" class="nav-more" aria-controls="navMenu" aria-expanded="false" aria-label="'+T('Open menu','打开菜单')+'">'+icon('menu')+'</button></div><div id="navMenu" class="nav-menu hidden">'+menuGroup('Play','游戏',[['home','⌂','Home','主页'],['library','▦','All Games','所有游戏'],['online','♧','Play Together','一起玩']])+menuGroup('Your garden','你的花园',[['progress','▥','My Progress','我的进度'],['leaderboard','♜','Leaderboard','排行榜'],['family','♡','Family View','家人视图'],['profile','♙','Switch Player','切换玩家']])+'<details class="nav-preferences"><summary>'+T('Preferences','偏好设置')+'</summary>'+menuGroup('Controls','控件',[['music','♫','Music','音乐'],['nature','◖','Nature sounds','自然声音'],['motion','Ⅱ','Animation','动画'],['language','文','Language','语言'],['settings','⚙','Settings','设置']])+'<fieldset class="nav-theme"><legend>'+T('Display mode','显示模式')+'</legend><div class="nav-theme-options">'+[['light',T('Light','浅色')],['dark',T('Dark','深色')],['auto',T('Auto','自动')]].map(v=>'<button type="button" data-mode="'+v[0]+'" aria-pressed="'+((save.mode||'auto')===v[0])+'">'+v[1]+'</button>').join('')+'</div></fieldset></details>'+menuGroup('Help','帮助',[['quickguide','?','Quick guide','快速指南'],['about','ⓘ','About','关于'],['contact','✉','Contact','联系']])+'</div>';
  syncAppearance();
  nav.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{closeNavMenu();navAction(b.dataset.go)});
  const more=document.getElementById('navMore'),menu=document.getElementById('navMenu');more.onclick=()=>{const isOpen=!menu.classList.toggle('hidden');more.setAttribute('aria-controls','navMenu');more.setAttribute('aria-expanded',String(isOpen));more.setAttribute('aria-label',isOpen?T('Close menu','关闭菜单'):T('Open menu','打开菜单'));if(isOpen)menu.querySelector('button')?.focus()};
  menu.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{save.mode=b.dataset.mode;persist();applyPrefs();buildNav();document.getElementById('navMore')?.focus()});
 }

 const days=()=>{const t=new Date(today()+'T12:00:00').getTime()/86400000|0;return [['shopping','rem','miss','story'][Math.abs(t)%4],['visual','find','diff','count'][Math.abs(t)%4],['calendar','routine','related','same'][Math.abs(t)%4]]};
 function renderWelcome(){
  const p=me();
  dash.innerHTML='<div class="welcome-scene"><div class="welcome-heading"><h1><span aria-hidden="true">'+icon('sprout')+'</span> Mind Garden</h1><p>'+T('Keep Your Mind Active · Enjoy Learning · Play Together','活跃思维 · 享受学习 · 一起玩')+'</p></div><button class="welcome-name" id="welcomeName"><span class="welcome-greeting">'+T('Welcome, ','欢迎，')+'</span><span translate="no">'+esc(p.name)+'</span> <span aria-hidden="true">✎</span></button>'+
  '<div class="welcome-ctas"><div class="welcome-choice"><button class="welcome-feature feature-today" id="dashStart"><span class="feature-icon" aria-hidden="true">'+icon('bloom')+'</span><strong>'+T('Today’s Games','今日游戏')+'</strong></button>'+info('Three activities chosen from your recent results, with extra practice for your weaker games. Go at your own pace.','根据近期成绩选择三项活动，重点练习较弱的游戏。按自己的节奏进行。')+'</div>'+
  '<div class="welcome-choice"><button class="welcome-feature feature-games" id="dashBrowse"><span class="feature-icon" aria-hidden="true">'+icon('games')+'</span><strong>'+T('All Games','所有游戏')+'</strong></button>'+info('Explore every activity and choose a difficulty before you begin.','浏览所有活动，开始前选择难度。')+'</div>'+
  '<div class="welcome-choice"><button class="welcome-feature feature-together" id="dashTogether"><span class="feature-icon" aria-hidden="true">'+icon('together')+'</span><strong>'+T('Play Together','一起玩')+'</strong></button>'+info('Invite family or friends. Choose a session length; every player presses Begin when ready.','邀请家人或朋友。选择回合数，各玩家准备好后点击开始。')+'</div></div><div class="garden-breathing-space" aria-hidden="true"></div></div><p class="dash-disclaimer">'+T('For enjoyment and cognitive engagement. Not a medical test or treatment.','用于娱乐和认知活动，并非医疗测试或治疗。')+'</p>';
  document.getElementById('welcomeName').onclick=()=>window.MindGardenIdentity?.open();
  document.getElementById('dashStart').onclick=startDaily;
  document.getElementById('dashBrowse').onclick=()=>switchPage('library');
  document.getElementById('dashTogether').onclick=()=>navAction('online');
 }

 const prettyCat=c=>T(...(LABELS[c]||LABELS.all));
 function gameCard(k){const m=MG[k],cat=META[k]||'logic',lvl=(me().levels||{})[k]||1,minutes=GAME_TIME[k]||3;
  return '<button class="game-tile" data-game="'+esc(k)+'" data-category="'+cat+'" aria-label="'+esc(m.n)+'"><span class="game-art" aria-hidden="true">'+gamePicture(m.ic)+'</span><span class="game-info"><strong>'+esc(m.n)+'</strong><span class="game-desc">'+esc(m.d)+'</span><span class="game-meta">'+prettyCat(cat)+' · '+minutes+' '+T('min','分钟')+' · '+(k==='pets'?T('Relaxed play · no scores','轻松互动 · 不计分'):(window.MindGardenActivities?.has(k)||window.MindGardenNewGames?.has(k))?T('3 relaxed choices','3种轻松难度'):T('Level','第')+' '+lvl+(save.lang==='zh'?' 关':' / 15'))+'</span></span><span class="game-play" aria-hidden="true">▶</span></button>'}
 function renderLibrary(searchOnly=false){
  library.querySelectorAll('.zw,.decks,.levels,.garden,.sub,h2.sec,.tip').forEach(el=>{if(el.closest('#libraryDisplay'))return;el.classList.add('legacy-library')});
  let panel=document.getElementById('libraryDisplay');if(!panel){panel=document.createElement('div');panel.id='libraryDisplay';library.insertBefore(panel,library.firstChild)}
  const keys=Object.keys(MG).filter(k=>((META[k]||'logic')===filter||filter==='all')&&((MG[k].n+' '+MG[k].d+' '+tr(MG[k].n)+' '+tr(MG[k].d)).toLowerCase().includes(search.toLowerCase())));
  const pairs=filter==='all'||filter==='memory';
  const pairMatch=pairs&&('matching pairs memory picture cards 配对游戏 记忆 图片').includes(search.toLowerCase());
  const content='<div class="library-leaves" aria-hidden="true"><i></i><i></i><i></i></div><div class="library-top"><span class="library-sprout">🌿</span><h1>'+T('All Games','所有游戏')+'</h1><p>'+T('A variety of fun, brain-friendly activities for memory, attention, logic and language.','探索记忆、观察、语言、数字和日常思考的轻松游戏。')+'</p></div><div class="game-filterbar"><label class="search-field"><span aria-hidden="true">⌕</span><span class="sr">'+T('Search games','搜索游戏')+'</span><input id="gameSearch" type="search" placeholder="'+T('Search games…','搜索游戏…')+'" value="'+esc(search)+'"></label><label class="round-select">'+T('Session','局数')+' <select id="gameLength"><option value="short"'+(length==='short'?' selected':'')+'>'+T('Short · 4','短 · 4')+'</option><option value="standard"'+(length==='standard'?' selected':'')+'>'+T('Standard · 6','标准 · 6')+'</option><option value="long"'+(length==='long'?' selected':'')+'>'+T('Long · 10','长 · 10')+'</option></select></label></div><div class="category-pills" role="group" aria-label="'+T('Filter games by category','按类别筛选游戏')+'">'+Object.keys(LABELS).map(c=>'<button class="category-pill'+(filter===c?' active':'')+'" data-filter="'+c+'" aria-pressed="'+(filter===c)+'">'+({all:'◈',memory:'🧠',attention:'🎯',logic:'🧩',language:'🔤',numbers:'🔢',shapes:'◷'}[c])+' '+prettyCat(c)+'</button>').join('')+'</div><div id="gameCards" class="game-card-grid">'+(pairMatch?'<button class="game-tile" data-game="pairs"><span class="game-art" aria-hidden="true">'+gamePicture('🃏')+'</span><span class="game-info"><strong>'+T('Matching Pairs','配对游戏')+'</strong><span class="game-desc">'+T('Find the matching picture cards.','找出相同的图片卡片。')+'</span><span class="game-meta">'+T('Memory · 6 levels · relaxed mode available','记忆 · 6关 · 可选轻松模式')+'</span></span><span class="game-play" aria-hidden="true">▶</span></button>':'')+keys.map(gameCard).join('')+'</div>'+(keys.length||pairMatch?'':'<div class="empty-games">🌱 '+T('No games match your search. Try another category or word.','没有找到符合条件的游戏，请换个关键词或类别。')+'</div>')+'<p class="library-foot">'+T('Choose the difficulty before starting. Pause or rest whenever you wish.','开始前可以选择难度，随时可以暂停休息。')+'</p>';
  if(searchOnly&&document.getElementById('gameCards')){const temp=document.createElement('div');temp.innerHTML=content;document.getElementById('gameCards').replaceWith(temp.querySelector('#gameCards'));panel.querySelector('.empty-games')?.remove();const empty=temp.querySelector('.empty-games');if(empty)document.getElementById('gameCards').after(empty)}else panel.innerHTML=content;
  const input=document.getElementById('gameSearch');input.oninput=e=>{search=input.value;if(!e.isComposing)renderLibrary(true)};input.oncompositionend=()=>{search=input.value;renderLibrary(true)};
  document.getElementById('gameLength').onchange=e=>{length=e.target.value;window.mgSessionLength=({short:4,standard:6,long:10})[length]};
  panel.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderLibrary()});
  panel.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>{const k=b.dataset.game;if(k==='pairs')showPairs();else {window.mgSessionLength=({short:4,standard:6,long:10})[length];window.chooseMiniLevel(k)}});
 }
 function showPairs(){const opts=LEVELS.map((v,i)=>'<button class="btn" data-pair-level="'+i+'" '+(i>=save.unlocked?'disabled':'')+'>'+T('Level','第')+' '+(i+1)+(save.lang==='zh'?'关':'')+' · '+v.p+' '+T('pairs','对')+'</button>').join('');
  overlay('<h2>'+T('Matching Pairs','配对游戏')+'</h2><p>'+T('Choose your matching game level.','请选择配对游戏关卡。')+'</p><div class="level-buttons">'+opts+'</div><p class="tip">'+T('Unlock additional levels by finishing earlier ones.','完成前面的关卡后可解锁后续关卡。')+'</p><div class="row"><button id="pairBack" class="btn">'+T('Back','返回')+'</button></div>');
  document.querySelectorAll('[data-pair-level]').forEach(b=>b.onclick=()=>start(Number(b.dataset.pairLevel)));
  document.getElementById('pairBack').onclick=closeOv;
 }
 function switchPage(p){page=p;dash.classList.toggle('hidden',p!=='dashboard');progressStrip.classList.toggle('hidden',p!=='dashboard');library.classList.toggle('hidden',p!=='library');top.classList.add('hidden');legacyNav.classList.add('hidden');if(p==='library')renderLibrary();else {renderWelcome();renderProgress()}buildNav();window.scrollTo({top:0,behavior:'instant'})}
 const oldShow=window.show;window.show=function(which){oldShow(which);if(which==='home'&&daily)daily=null;nav.classList.toggle('hidden',which!=='home');if(which==='home')switchPage(page)};
 const oldRender=window.renderHome;window.renderHome=function(){oldRender();if(page==='dashboard'){renderWelcome();renderProgress()}else renderLibrary();buildNav()};
 function dailyGame(type){return type==='pairs'?{n:T('Matching Pairs','配对游戏'),d:T('Find the matching picture cards.','找出相同的图片卡片。')}:MG[type]}
 function startDaily(){const plan=window.MindGardenPractice.select(me(),['pairs',...Object.keys(MG).filter(k=>k!=='pets')],today());daily={plan,types:plan.map(x=>x.type),index:0,active:false};dailyIntro()}
 function dailyIntro(){if(!daily)return;const idx=daily.index,item=daily.plan[idx],type=item.type,m=dailyGame(type),max=type==='pairs'?6:(window.MindGardenNewGames.has(type)||window.MindGardenActivities?.has(type))?3:15,recommended=type==='pairs'?Math.min(6,me().unlocked||1):Math.min(max,Math.max(1,Math.round(me().levels?.[type]||1)));
  const reason=item.samples?T('Practice focus: '+Math.round(item.average*100)+'% average result across your last '+item.samples+' completed session'+(item.samples>1?'s':'')+' in this game.','练习重点：此游戏最近'+item.samples+'局的平均成绩为'+Math.round(item.average*100)+'%。'):T('We are building your history. This activity adds variety until more results are available.','正在建立您的记录。在获得更多成绩之前，用此活动丰富练习。');
  overlay('<p class="daily-progress">'+T('Activity','活动')+' '+(idx+1)+' / 3</p><h2>'+esc(m.n)+'</h2><p>'+esc(m.d)+'</p><p class="daily-reason">'+esc(reason)+'</p><label class="lab">'+T('Practice level','练习难度')+'<select id="dailyDifficulty">'+Array.from({length:max},(_,i)=>'<option value="'+(i+1)+'"'+(i+1===recommended?' selected':'')+'>'+T('Level ','第 ')+(i+1)+T('',' 关')+'</option>').join('')+'</select></label><p>'+T('Take your time. You can choose an easier level or finish early.','慢慢来，可以选择较简单的难度或提前结束。')+'</p><div class="row"><button class="btn main" id="dailyGo">'+T('Begin','开始')+'</button><button class="btn" id="dailyStop">'+T('Finish for now','暂时结束')+'</button></div>');
  document.getElementById('dailyGo').onclick=()=>{const chosen=Number(document.getElementById('dailyDifficulty').value);daily.active=true;window.mgSessionLength=6;window.mgDifficulty=chosen;if(type==='pairs'){mg=null;start(chosen-1);window.scrollTo(0,0)}else startMG(type)};
  document.getElementById('dailyStop').onclick=()=>{daily=null;mg=null;closeOv();toHome();switchPage('dashboard')};
 }
 function completeDaily(type){if(!daily||!daily.active||daily.types[daily.index]!==type)return false;daily.active=false;const completed=daily.index+1;
  if(completed===3){daily=null;overlay('<p class="daily-progress">🌻 '+T('Daily journey complete','今日活动完成')+'</p><h2>'+T('Wonderful work!','做得真棒！')+'</h2><p>'+T('You completed three different activities. Enjoy a rest or browse more games.','您完成了三项不同的活动，可以休息或探索更多游戏。')+'</p><div class="row"><button class="btn main" id="dailyHome">'+T('Return to my garden','返回花园')+'</button></div>');document.getElementById('dailyHome').onclick=()=>{mg=null;toHome();switchPage('dashboard')}}
  else{daily.index++;overlay('<p class="daily-progress">✓ '+completed+'/3 '+T('completed','已完成')+'</p><h2>'+T('Well done!','做得好！')+'</h2><p>'+T('Next activity: ','下一项：')+esc(dailyGame(daily.types[daily.index]).n)+'</p><div class="row"><button class="btn main" id="dailyNext">'+T('Next activity','下一项')+'</button><button class="btn" id="dailyRest">'+T('Finish for today','今日结束')+'</button></div>');document.getElementById('dailyNext').onclick=dailyIntro;document.getElementById('dailyRest').onclick=()=>{daily=null;mg=null;toHome();switchPage('dashboard')}}
  return true;
 }
 const oldDone=window.mdone;window.mdone=function(){const type=mg?.t;oldDone();completeDaily(type)};
 window.MindGardenDaily={complete:completeDaily,get plan(){return daily?.plan.map(x=>({...x}))||[]}};

 window.MindGardenDashboard={home:()=>switchPage('dashboard'),library:()=>switchPage('library'),refresh:()=>{renderWelcome();renderProgress();buildNav()}};
 // Preserve the dynamic garden generated by index.html and expose it below the welcome headline.
 renderWelcome();renderProgress();switchPage('dashboard');
})();

;
/* garden-wildlife.js */
(()=>{var Ch=0,hl=1,Ih=2;var mr=1,Ph=2,vs=3,Rn=0,Yt=1,hn=2,Ni=0,Ms=1,ul=2,dl=3,fl=4,Lh=5;var Di=100,Nh=101,Dh=102,Uh=103,Fh=104,Oh=200,Bh=201,zh=202,kh=203,pl=204,ml=205,Gh=206,Hh=207,Vh=208,Wh=209,Xh=210,qh=211,Yh=212,Kh=213,Zh=214,ia=0,sa=1,ra=2,ns=3,aa=4,oa=5,la=6,ca=7,gl=0,Jh=1,$h=2,Cn=0,_l=1,xl=2,yl=3,vl=4,Ml=5,Sl=6,bl=7,el="attached",jh="detached",Tl=300,Ui=301,Ss=302,Ra=303,Ca=304,ci=1e3,on=1001,is=1002,_t=1003,Ia=1004;var Fi=1005;var St=1006,bs=1007;var un=1008;var jt=1009,Al=1010,El=1011,Ts=1012,Pa=1013,Mn=1014,nn=1015,Sn=1016,La=1017,Na=1018,Oi=1020,wl=35902,Rl=35899,Cl=1021,Il=1022,dn=1023,Hn=1026,Qn=1027,Da=1028,Ua=1029,di=1030,Fa=1031;var Oa=1033,gr=33776,_r=33777,xr=33778,yr=33779,Ba=35840,za=35841,ka=35842,Ga=35843,Ha=36196,Va=37492,Wa=37496,Xa=37488,qa=37489,vr=37490,Ya=37491,Ka=37808,Za=37809,Ja=37810,$a=37811,ja=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,Mr=36285,po=36286,Qh=2200,eu=2201,tu=2202,Ai=2300,Ei=2301,ta=2302,tl=2303,Si=2400,bi=2401,ks=2402,mo=2500,Pl=2501,Ll=0,Sr=1,As=2,nu=3200;var go=0,iu=1,ei="",mt="srgb",Xt="srgb-linear",Gs="linear",it="srgb";var na=7680;var su=519,ru=512,au=513,ou=514,Nl=515,lu=516,cu=517,Dl=518,Ul=519,Fl=35044;var Ol="300 es",ln=2e3,ss=2001;function dd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uu(){let s=rs("canvas");return s.style.display="block",s}var Wc={},as=null;function Hs(...s){let e="THREE."+s.shift();as?as("log",e,...s):console.log(e,...s)}function du(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=du(s);let e="THREE."+s.shift();if(as)as("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ue(...s){s=du(s);let e="THREE."+s.shift();if(as)as("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ti(...s){let e=s.join(" ");e in Wc||(Wc[e]=!0,Ce(...s))}function fu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pu={[ia]:ia,[ra]:la,[aa]:aa,[ns]:oa,[sa]:sa,[la]:ra,[ca]:ca,[oa]:ns},vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Bs=Math.PI/180,wi=180/Math.PI;function In(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function Bl(s,e){return(s%e+e)%e}function fd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function pd(s,e,t){return s!==e?(t-s)/(e-s):0}function zs(s,e,t){return(1-t)*s+t*e}function md(s,e,t,n){return zs(s,e,1-Math.exp(-t*n))}function gd(s,e=1){return e-Math.abs(Bl(s,e*2)-e)}function _d(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vd(s,e){return s+Math.random()*(e-s)}function Md(s){return s*(.5-Math.random())}function Sd(s){s!==void 0&&(Xc=s);let e=Xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bd(s){return s*Bs}function Td(s){return s*wi}function Ad(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _o(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kl(s,e){if(e.constructor===Float32Array)return s;let t=_o(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Gl(s,e){if(e.constructor===Float32Array)return s;let t=_o(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var xo={DEG2RAD:Bs,RAD2DEG:wi,generateUUID:In,clamp:Je,euclideanModulo:Bl,mapLinear:fd,inverseLerp:pd,lerp:zs,damp:md,pingpong:gd,smoothstep:_d,smootherstep:xd,randInt:yd,randFloat:vd,randFloatSpread:Md,seededRandom:Sd,degToRad:bd,radToDeg:Td,isPowerOfTwo:Ad,ceilPowerOfTwo:Ed,floorPowerOfTwo:zl,setQuaternionFromProperEuler:wd,normalize:Gl,denormalize:kl},Xe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new U,qc=new Ct,Oe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],M=i[1],w=i[4],S=i[7],E=i[2],T=i[5],_=i[8];return r[0]=a*y+o*M+l*E,r[3]=a*m+o*w+l*T,r[6]=a*p+o*S+l*_,r[1]=c*y+h*M+u*E,r[4]=c*m+h*w+u*T,r[7]=c*p+h*S+u*_,r[2]=d*y+f*M+g*E,r[5]=d*m+f*w+g*T,r[8]=d*p+f*S+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Po.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Po=new Oe,Yc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let s={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Gs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xt]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Yc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Yc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),s}var Ke=Rd();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ki,ha=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=rs("canvas")),ki.width=e.width,ki.height=e.height;let i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cd=0,os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Lo(i[a].image)):r.push(Lo(i[a]))}else r=Lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ha.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Id=0,No=new U,It=class s extends vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=on,i=on,r=St,a=un,o=dn,l=jt,c=s.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=In(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Tl;It.DEFAULT_ANISOTROPY=1;var rt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(f+1)/2,E=(p+1)/2,T=(h+d)/4,_=(u+y)/4,b=(g+m)/4;return w>S&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=_/n):S>E?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=b/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=_/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ua=class extends vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new It({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new os(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vs=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ge=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Ld)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ii.crossVectors(n,Qt),ii.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ii.crossVectors(n,Qt)),ii.normalize(),Ir.crossVectors(Qt,ii),i[0]=ii.x,i[4]=Ir.x,i[8]=Qt.x,i[1]=ii.y,i[5]=Ir.y,i[9]=Qt.y,i[2]=ii.z,i[6]=Ir.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],S=n[11],E=n[15],T=i[0],_=i[4],b=i[8],F=i[12],P=i[1],N=i[5],G=i[9],K=i[13],C=i[2],X=i[6],$=i[10],V=i[14],ie=i[3],q=i[7],W=i[11],ne=i[15];return r[0]=a*T+o*P+l*C+c*ie,r[4]=a*_+o*N+l*X+c*q,r[8]=a*b+o*G+l*$+c*W,r[12]=a*F+o*K+l*V+c*ne,r[1]=h*T+u*P+d*C+f*ie,r[5]=h*_+u*N+d*X+f*q,r[9]=h*b+u*G+d*$+f*W,r[13]=h*F+u*K+d*V+f*ne,r[2]=g*T+y*P+m*C+p*ie,r[6]=g*_+y*N+m*X+p*q,r[10]=g*b+y*G+m*$+p*W,r[14]=g*F+y*K+m*V+p*ne,r[3]=M*T+w*P+S*C+E*ie,r[7]=M*_+w*N+S*X+E*q,r[11]=M*b+w*G+S*$+E*W,r[15]=M*F+w*K+S*V+E*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*d,w=o*f-c*u,S=o*d-l*u,E=a*f-c*h,T=a*d-l*h,_=a*u-o*h;return t*(y*M-m*w+p*S)-n*(g*M-m*E+p*T)+i*(g*w-y*E+p*_)-r*(g*S-y*T+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-i*a,S=t*c-r*a,E=n*l-i*o,T=n*c-r*o,_=i*c-r*l,b=h*y-u*g,F=h*m-d*g,P=h*p-f*g,N=u*m-d*y,G=u*p-f*y,K=d*p-f*m,C=M*K-w*G+S*N+E*P-T*F+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/C;return e[0]=(o*K-l*G+c*N)*X,e[1]=(i*G-n*K-r*N)*X,e[2]=(y*_-m*T+p*E)*X,e[3]=(d*T-u*_-f*E)*X,e[4]=(l*P-a*K-c*F)*X,e[5]=(t*K-i*P+r*F)*X,e[6]=(m*S-g*_-p*w)*X,e[7]=(h*_-d*S+f*w)*X,e[8]=(a*G-o*P+c*b)*X,e[9]=(n*P-t*G-r*b)*X,e[10]=(g*T-y*S+p*M)*X,e[11]=(u*S-h*T-f*M)*X,e[12]=(o*F-a*N-l*b)*X,e[13]=(t*N-n*F+i*b)*X,e[14]=(y*w-g*E-m*M)*X,e[15]=(h*E-u*w+d*M)*X,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,M=l*c,w=l*h,S=l*u,E=n.x,T=n.y,_=n.z;return i[0]=(1-(y+p))*E,i[1]=(f+S)*E,i[2]=(g-w)*E,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+w)*_,i[9]=(m-M)*_,i[10]=(1-(d+y))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gi.set(i[0],i[1],i[2]).length(),o=Gi.set(i[4],i[5],i[6]).length(),l=Gi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ss)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ln,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ln)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ss)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new U,mn=new Ge,Pd=new U(0,0,0),Ld=new U(1,1,1),ii=new U,Ir=new U,Qt=new U,Zc=new Ge,Jc=new Ct,Vn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Nd=0,$c=new U,Hi=new Ct,Un=new Ge,Pr=new U,Is=new U,Dd=new U,Ud=new Ct,jc=new U(1,0,0),Qc=new U(0,1,0),eh=new U(0,0,1),th={type:"added"},Fd={type:"removed"},Vi={type:"childadded",child:null},Do={type:"childremoved",child:null},dt=class s extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new Vn,n=new Ct,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Oe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Is,Pr,this.up):Un.lookAt(Pr,Is,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Un),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new U(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Uo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Bl(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Uo(a,r,e+1/3),this.g=Uo(a,r,e),this.b=Uo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ke.workingToColorSpace(zt.copy(this),e),Math.round(Je(zt.r*255,0,255))*65536+Math.round(Je(zt.g*255,0,255))*256+Math.round(Je(zt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);let n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=mt){Ke.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,i=zt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Lr);let n=zs(si.h,Lr.h,t),i=zs(si.s,Lr.s,t),r=zs(si.l,Lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new De;De.NAMES=mu;var Xs=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new U,Fn=new U,Fo=new U,On=new U,Wi=new U,Xi=new U,nh=new U,Oo=new U,Bo=new U,zo=new U,ko=new rt,Go=new rt,Ho=new rt,li=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),Fn.subVectors(n,t),Fo.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(Fn),l=gn.dot(Fo),c=Fn.dot(Fn),h=Fn.dot(Fo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ko.setScalar(0),Go.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Ho.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Go,r.y),a.addScaledVector(Ho,r.z),a}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Fn.subVectors(e,t),gn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Wi.subVectors(i,n),Xi.subVectors(r,n),Oo.subVectors(e,n);let l=Wi.dot(Oo),c=Xi.dot(Oo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,i);let h=Wi.dot(Bo),u=Xi.dot(Bo);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Wi,a);zo.subVectors(e,r);let f=Wi.dot(zo),g=Xi.dot(zo);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(nh,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Dr.subVectors(this.max,Ps),qi.subVectors(e.a,Ps),Yi.subVectors(e.b,Ps),Ki.subVectors(e.c,Ps),ri.subVectors(Yi,qi),ai.subVectors(Ki,Yi),xi.subVectors(qi,Ki);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-xi.z,xi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,xi.z,0,-xi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-xi.y,xi.x,0];return!Vo(t,qi,Yi,Ki,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Vo(t,qi,Yi,Ki,Dr))?!1:(Ur.crossVectors(ri,ai),t=[Ur.x,Ur.y,Ur.z],Vo(t,qi,Yi,Ki,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,Nr=new kt,qi=new U,Yi=new U,Ki=new U,ri=new U,ai=new U,xi=new U,Ps=new U,Dr=new U,Ur=new U,yi=new U;function Vo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){yi.fromArray(s,r);let o=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yt=new U,Fr=new Xe,Bd=0,Ut=class extends vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=nn,this.version=0,this._normalizationScale=e!==void 0?_o(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gl(e,this.array)}};var qs=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},zd=new kt,Ls=new U,Wo=new U,Zt=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Wo)),this.expandByPoint(Ls.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kd=0,an=new Ge,Xo=new dt,Zi=new U,en=new kt,Ns=new kt,Rt=new U,Gt=class s extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(en.min,Ns.min),en.expandByPoint(Rt),Rt.addVectors(en.max,Ns.max),en.expandByPoint(Rt)):(en.expandByPoint(Ns.min),en.expandByPoint(Ns.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),Rt.add(Zi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;let h=new U,u=new U,d=new U,f=new Xe,g=new Xe,y=new Xe,m=new U,p=new U;function M(F,P,N){c[F]=c[P]=c[N]=1,h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),y.sub(f);let G=1/(g.x*y.y-y.x*g.y);isFinite(G)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(G),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(G),o[F].add(m),o[P].add(m),o[N].add(m),l[F].add(p),l[P].add(p),l[N].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,P=w.length;F<P;++F){let N=w[F],G=N.start,K=N.count;for(let C=G,X=G+K;C<X;C+=3)M(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let S=new U,E=new U,T=new U,_=new U;function b(F){T.fromBufferAttribute(i,F),_.copy(T);let P=o[F];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),E.crossVectors(_,P);let G=E.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,G)}for(let F=0,P=n.count;F<P;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ih(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ih(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ih(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=In()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Wt=new U,hs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?_o(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gl(e,this.data.array)}},qo=new U,Gd=new U,Hd=new Oe,xn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=qo.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vd=0,Jt=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Ms,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zn=new U,Yo=new U,Or=new U,Br=new U,Ri=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yo.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=Br.dot(this.direction),l=-Br.dot(Or),c=Br.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yo).addScaledVector(Or,d),f}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,S=Math.abs(l),E=Math.abs(c),T=Math.abs(h),_,b,F,P,N,G,K,C,X,$,V,ie;if(S>=E&&S>=T?(F=l,G=u,X=g,ie=p,l>=0?(_=c,b=h,P=d,N=f,K=y,C=m,$=M,V=w):(_=h,b=c,P=f,N=d,K=m,C=y,$=w,V=M)):E>=T?(F=c,G=d,X=y,ie=M,c>=0?(_=h,b=l,P=f,N=u,K=m,C=g,$=w,V=p):(_=l,b=h,P=u,N=f,K=g,C=m,$=p,V=w)):(F=h,G=f,X=m,ie=w,h>=0?(_=l,b=c,P=u,N=d,K=g,C=y,$=p,V=M):(_=c,b=l,P=d,N=u,K=y,C=g,$=M,V=p)),F===0)return null;let q=_/F,W=b/F,ne=1/F,be=P-q*G,Fe=N-W*G,J=K-q*X,me=C-W*X,Se=$-q*ie,k=V-W*ie,ee=Se*me-k*J,ge=be*k-Fe*Se,ke=J*Fe-me*be;if(i){if(ee<0||ge<0||ke<0)return null}else if((ee<0||ge<0||ke<0)&&(ee>0||ge>0||ke>0))return null;let D=ee+ge+ke;if(D===0)return null;let Me=ne*(ee*G+ge*X+ke*ie);return(D>0?Me<0:Me>0)?null:this.at(Me/D,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sh=new Ge,vi=new Ri,zr=new Zt,rh=new U,kr=new U,Gr=new U,Hr=new U,Ko=new U,Vr=new U,ah=new U,Wr=new U,Pt=class extends dt{constructor(e=new Gt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ko.fromBufferAttribute(u,e),a?Vr.addScaledVector(Ko,h):Vr.addScaledVector(Ko.sub(t),h))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(zr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(zr,rh)===null||vi.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),vi.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,E=w;S<E;S+=3){let T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);i=Xr(this,p,e,n,c,h,u,T,_,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);i=Xr(this,a,e,n,c,h,u,M,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,E=w;S<E;S+=3){let T=S,_=S+1,b=S+2;i=Xr(this,p,e,n,c,h,u,T,_,b),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,S=m+2;i=Xr(this,a,e,n,c,h,u,M,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Wd(s,e,t,n,i,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Rn,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:s}}function Xr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,kr),s.getVertexPosition(l,Gr),s.getVertexPosition(c,Hr);let h=Wd(s,e,t,n,kr,Gr,Hr,ah);if(h){let u=new U;li.getBarycoord(ah,kr,Gr,Hr,u),i&&(h.uv=li.getInterpolatedAttribute(i,o,l,c,u,new Xe)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,u,new Xe)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};li.getNormal(kr,Gr,Hr,d.normal),h.face=d,h.barycoord=u}return h}var Ds=new rt,oh=new rt,lh=new rt,Xd=new rt,ch=new Ge,qr=new U,Zo=new Zt,hh=new Ge,Jo=new Ri,Ks=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=el,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1&&(hh.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(hh),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===el?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;oh.fromBufferAttribute(i.attributes.skinIndex,e),lh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ds.copy(t),t.set(0,0,0,0)):(Ds.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ds.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=lh.getComponent(r);if(a!==0){let o=oh.getComponent(r);ch.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xd.copy(Ds).applyMatrix4(ch),a)}}return t.isVector4&&(t.w=Ds.w),t.applyMatrix4(this.bindMatrixInverse)}},us=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ds=class extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=_t,h=_t,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uh=new Ge,qd=new Ge,Zs=class s{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:qd;uh.multiplyMatrices(o,t[r]),uh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ds(t,e,e,dn,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new us),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Wn=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ji=new Ge,dh=new Ge,Yr=[],fh=new kt,Yd=new Ge,Us=new Pt,Fs=new Zt,Js=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),fh.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(fh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Fs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),dh.multiplyMatrices(n,Ji),Us.matrixWorld=dh,Us.raycast(e,Yr);for(let a=0,o=Yr.length;a<o;a++){let l=Yr[a];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(i*this.count),i,this.count,Da,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new Zt,Kd=new Xe(.5,.5),Kr=new U,hi=class{constructor(e=new xn,t=new xn,n=new xn,i=new xn,r=new xn,a=new xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],S=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,p-g,E-M).normalize(),i[1].setComponents(c+a,f+h,p+g,E+M).normalize(),i[2].setComponents(c+o,f+u,p+y,E+w).normalize(),i[3].setComponents(c-o,f-u,p-y,E-w).normalize(),n)i[4].setComponents(l,d,m,S).normalize(),i[5].setComponents(c-l,f-d,p-m,E-S).normalize();else if(i[4].setComponents(c-l,f-d,p-m,E-S).normalize(),t===ln)i[5].setComponents(c+l,f+d,p+m,E+S).normalize();else if(t===ss)i[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);let t=Kd.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ph=new Ge,fa=class s{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new hi),n[i].setFromProjectionMatrix(ph,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new hi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var fs=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pa=new U,ma=new U,mh=new Ge,Os=new Ri,Zr=new Zt,$o=new U,gh=new U,Ci=class extends dt{constructor(e=new Gt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pa.fromBufferAttribute(t,i-1),ma.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new gt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;mh.copy(i).invert(),Os.copy(e.ray).applyMatrix4(mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),w=Jr(this,e,Os,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Jr(this,e,Os,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=Jr(this,e,Os,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Jr(this,e,Os,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jr(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(pa.fromBufferAttribute(o,i),ma.fromBufferAttribute(o,r),t.distanceSqToSegment(pa,ma,$o,gh)>n)return;$o.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($o);if(!(c<e.near||c>e.far))return{distance:c,point:gh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var _h=new U,xh=new U,$s=class extends Ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_h.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_h.distanceTo(xh);e.setAttribute("lineDistance",new gt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},js=class extends Ci{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ps=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yh=new Ge,nl=new Ri,$r=new Zt,jr=new U,Qs=class extends dt{constructor(e=new Gt,t=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;yh.copy(i).invert(),nl.copy(e.ray).applyMatrix4(yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);jr.fromBufferAttribute(u,m),vh(jr,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)jr.fromBufferAttribute(u,g),vh(jr,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vh(s,e,t,n,i,r,a){let o=nl.distanceSqToPoint(s);if(o<t){let l=new U;nl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var er=class extends It{constructor(e=[],t=Ui,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Xn=class extends It{constructor(e,t,n=Mn,i,r,a,o=_t,l=_t,c,h=Hn,u=1){if(h!==Hn&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},tr=class extends Xn{constructor(e,t=Mn,n=Ui,i,r,a=_t,o=_t,l,c=Hn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class s extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function g(y,m,p,M,w,S,E,T,_,b,F){let P=S/_,N=E/b,G=S/2,K=E/2,C=T/2,X=_+1,$=b+1,V=0,ie=0,q=new U;for(let W=0;W<$;W++){let ne=W*N-K;for(let be=0;be<X;be++){let Fe=be*P-G;q[y]=Fe*M,q[m]=ne*w,q[p]=C,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(be/_),u.push(1-W/b),V+=1}}for(let W=0;W<b;W++)for(let ne=0;ne<_;ne++){let be=d+ne+X*W,Fe=d+ne+X*(W+1),J=d+(ne+1)+X*(W+1),me=d+(ne+1)+X*W;l.push(be,Fe,me),l.push(Fe,J,me),ie+=6}o.addGroup(f,ie,F),f+=ie,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ir=class s extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new Xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var sr=class s extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let w=0;w<c;w++){let S=w*u-r;g.push(S,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,S=M+c*(p+1),E=M+1+c*(p+1),T=M+1+c*p;f.push(w,S,T),f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var rr=class s extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,S=a+w*o,E=e*Math.cos(S),T=Math.sqrt(e*e-E*E),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let F=b/t,P=i+F*r;u.x=-T*Math.cos(P),u.y=E,u.z=T*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(F+_,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let w=h[p][M+1],S=h[p][M],E=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(w,S,T),(p!==n-1||l<Math.PI)&&f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Bi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Mh(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Mh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ht(s){let e={};for(let t=0;t<s.length;t++){let n=Bi(s[t]);for(let i in n)e[i]=n[i]}return e}function Mh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Zd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var gu={clone:Bi,merge:Ht},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qt=class extends qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _a=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function es(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function _u(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function il(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function xu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function jd(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let g=c.times[f]*i;if(!(g<t||g>=n)){u.push(c.times[f]);for(let y=0;y<h;++y)d.push(c.values[f*h+y])}}u.length!==0&&(c.times=yn(u,c.times.constructor),c.values=yn(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Qd(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let g=o.times.length-1,y;if(r<=o.times[0]){let p=h,M=u-h;y=o.values.slice(p,M)}else if(r>=o.times[g]){let p=g*u+h,M=p+u-h;y=o.values.slice(p,M)}else{let p=o.createInterpolant();p.evaluate(r),y=p.resultBuffer.slice()}l==="quaternion"&&new Ct().fromArray(y).normalize().conjugate().toArray(y);let m=c.times.length;for(let p=0;p<m;++p){let M=p*f+d;if(l==="quaternion")Ct.multiplyQuaternionsFlat(c.values,M,y,0,c.values,M);else{let w=f-d*2;for(let S=0;S<w;++S)c.values[M+S]-=y[S]}}}return s.blendMode=Pl,s}var gs=class{static convertArray(e,t){return yn(e,t)}static isTypedArray(e){return hu(e)}static hasTangents(e){return es(e)}static getKeyframeOrder(e){return _u(e)}static sortedArray(e,t,n){return il(e,t,n)}static flattenJSON(e,t,n,i){xu(e,t,n,i)}static subclip(e,t,n,i,r=30){return jd(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return Qd(e,t,n,i)}},En=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends En{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case bi:r=e,o=2*t-n;break;case ks:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bi:a=e,l=2*n-t;break;case ks:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,S=f*m-f*y;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+M*a[c+E]+w*a[l+E]+S*a[u+E];return r}},ar=class extends En{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},va=class extends En{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends En{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],w=u[p+1],S=e*d+g*2,E=h[S],T=h[S+1],_=tf(n,t,M,E,i);r[g]=yu(_,y,w,T,m)}return r}};function yu(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ef(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function tf(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=yu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=ef(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $t=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yn(t,this.TimeBufferType),this.values=yn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yn(e.times,Array),values:yn(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),es(e.settings)&&(n.settings={inTangents:yn(e.settings.inTangents,Array),outTangents:yn(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ar(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ai:t=this.InterpolantFactoryMethodDiscrete;break;case Ei:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break;case tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ai;case this.InterpolantFactoryMethodLinear:return Ei;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;es(this.settings)&&(Sh(this.settings.inTangents,e),Sh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;es(this.settings)&&(bh(this.settings.inTangents,e),bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&hu(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ta,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,es(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Sh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function bh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Ei;var Yn=class extends $t{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Ai;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};or.prototype.ValueTypeName="color";var Kn=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};Kn.prototype.ValueTypeName="number";var Sa=class extends En{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ct.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zn=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends $t{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ai;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends $t{constructor(e,t,n,i){super(e,t,n,i)}};ui.prototype.ValueTypeName="vector";var Ii=class{constructor(e="",t=-1,n=[],i=mo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(sf(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push($t.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=_u(l);l=il(l,1,h),c=il(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Kn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function nf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kn;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return or;case"quaternion":return Zn;case"bool":case"boolean":return Yn;case"string":return Jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nf(s.type);if(s.times===void 0){let n=[],i=[];xu(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),es(s.settings)&&(t.settings={inTangents:yn(s.settings.inTangents,Float32Array),outTangents:yn(s.settings.outTangents,Float32Array)}),t}var Tn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Th(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Th(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Th(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ba=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vu=new ba,wn=class{constructor(e){this.manager=e!==void 0?e:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},sl=class extends Error{constructor(e,t){super(e),this.response=t}},_s=class extends wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Tn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:w,value:S})=>{if(w)p.close();else{y+=S.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let T=0,_=h.length;T<_;T++){let b=h[T];b.onProgress&&b.onProgress(E)}p.enqueue(S),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new sl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Tn.add(`file:${e}`,c);let h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $i=new WeakMap,Ta=class extends wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Tn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=$i.get(a);u===void 0&&(u=[],$i.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=rs("img");function l(){h(),t&&t(this);let u=$i.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}$i.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Tn.remove(`image:${e}`);let d=$i.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}$i.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Tn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var lr=class extends wn{constructor(e){super(e)}load(e,t,n,i){let r=new It,a=new Ta(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Pi=class extends dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},cr=class extends Pi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jo=new Ge,Ah=new U,Eh=new U,xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qr=new U,ea=new Ct,bn=new U,hr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,ea,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ea,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qr,ea,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ea,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new U,wh=new Xe,Rh=new Xe,Dt=class extends hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Rh),t.subVectors(Rh,wh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rl=class extends xs{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=wi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ur=class extends Pi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},al=class extends xs{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},dr=class extends Pi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$n=class extends hr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ol=class extends xs{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Li=class extends Pi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new ol}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var jn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Qo=new WeakMap,fr=class extends wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Tn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Qo.has(a)===!0?(i&&i(Qo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qo.set(l,c),Tn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Tn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ji=-90,Qi=1,ys=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(ji,Qi,e,t);i.layers=this.layers,this.add(i);let r=new Dt(ji,Qi,e,t);r.layers=this.layers,this.add(r);let a=new Dt(ji,Qi,e,t);a.layers=this.layers,this.add(a);let o=new Dt(ji,Qi,e,t);o.layers=this.layers,this.add(o);let l=new Dt(ji,Qi,e,t);l.layers=this.layers,this.add(l);let c=new Dt(ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Aa=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ea=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Ct.multiplyQuaternionsFlat(e,a,e,t,e,n),Ct.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Vl="\\[\\]\\.:\\/",rf=new RegExp("["+Vl+"]","g"),Wl="[^"+Vl+"]",af="[^"+Vl.replace("\\.","")+"]",of=/((?:WC+[\/:])*)/.source.replace("WC",Wl),lf=/(WCOD+)?/.source.replace("WCOD",af),cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),uf=new RegExp("^"+of+lf+cf+hf+"$"),df=["material","materials","bones","map"],ll=class{constructor(e,t,n){let i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(e){let t=uf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=ll;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wa=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Si,endingEnd:Si};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=eu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pl:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case mo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===tu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Qh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=bi,i.endingEnd=bi):(e?i.endingStart=this.zeroSlopeAtStart?bi:Si:i.endingStart=ks,t?i.endingEnd=this.zeroSlopeAtEnd?bi:Si:i.endingEnd=ks)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},ff=new Float32Array(1),pr=class extends vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new Ea(at.create(n,f,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ar(new Float32Array(2),new Float32Array(2),1,ff),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ii.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=mo),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new wa(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ii.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var cl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Xl(s,e,t,n){let i=pf(n);switch(t){case Cl:return s*e;case Da:return s*e/i.components*i.byteLength;case Ua:return s*e/i.components*i.byteLength;case di:return s*e*2/i.components*i.byteLength;case Fa:return s*e*2/i.components*i.byteLength;case Il:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case Oa:return s*e*4/i.components*i.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xr:case yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case za:case Ga:return Math.max(s,16)*Math.max(e,8)/4;case Ba:case ka:return Math.max(s,8)*Math.max(e,8)/2;case Ha:case Va:case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wa:case vr:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lo:case co:case ho:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uo:case fo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mr:case po:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pf(s){switch(s){case jt:case Al:return{byteLength:1,components:1};case Ts:case El:case Sn:return{byteLength:2,components:1};case La:case Na:return{byteLength:2,components:4};case Mn:case Pa:case nn:return{byteLength:4,components:1};case wl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Hu(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gf(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Ef,begin_vertex:wf,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:If,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:zf,common:kf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Kf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:lp,envmap_vertex:jf,fog_vertex:Qf,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,lightprobes_pars_fragment:xp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:bp,map_pars_fragment:Tp,map_particle_fragment:Ap,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Ip,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Np,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Vp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:em,shadowmask_pars_fragment:tm,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:ym,cube_vert:vm,cube_frag:Mm,depth_vert:Sm,depth_frag:bm,distance_vert:Tm,distance_frag:Am,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Im,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Nm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:zm,meshphysical_vert:km,meshphysical_frag:Gm,meshtoon_vert:Hm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Km,sprite_frag:Zm},xe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ln={basic:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ht([xe.common,xe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ht([xe.lights,xe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ln.physical={uniforms:Ht([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var yo={r:0,b:0,g:0},Jm=new Ge,Vu=new Oe;Vu.set(-1,0,0,0,1,0,0,0,1);function $m(s,e,t,n,i,r){let a=new De(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let S=M.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(M){let w=!1,S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(M,w){let S=f(w);S&&S.isCubeTexture?(c===void 0&&(c=new Pt(new ms(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Bi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vu),c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==it,(h!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pt(new sr(2,2),new An({name:"BackgroundMaterial",uniforms:Bi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(yo,Hl(s)),t.buffers.color.setClear(yo.r,yo.g,yo.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function jm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(N,G,K,C,X){let $=!1,V=u(N,C,K,G);r!==V&&(r=V,c(r.object)),$=f(N,C,K,X),$&&g(N,C,K,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(N,G,K,C),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,G,K,C){let X=C.wireframe===!0,$=n[G.id];$===void 0&&($={},n[G.id]=$);let V=N.isInstancedMesh===!0?N.id:0,ie=$[V];ie===void 0&&(ie={},$[V]=ie);let q=ie[K.id];q===void 0&&(q={},ie[K.id]=q);let W=q[X];return W===void 0&&(W=d(l()),q[X]=W),W}function d(N){let G=[],K=[],C=[];for(let X=0;X<t;X++)G[X]=0,K[X]=0,C[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,G,K,C){let X=r.attributes,$=G.attributes,V=0,ie=K.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=X[q],be=$[q];if(be===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),ne===void 0||ne.attribute!==be||be&&ne.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(N,G,K,C){let X={},$=G.attributes,V=0,ie=K.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=$[q];ne===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));let be={};be.attribute=ne,ne&&ne.data&&(be.data=ne.data),X[q]=be,V++}r.attributes=X,r.attributesNum=V,r.index=C}function y(){let N=r.newAttributes;for(let G=0,K=N.length;G<K;G++)N[G]=0}function m(N){p(N,0)}function p(N,G){let K=r.newAttributes,C=r.enabledAttributes,X=r.attributeDivisors;K[N]=1,C[N]===0&&(s.enableVertexAttribArray(N),C[N]=1),X[N]!==G&&(s.vertexAttribDivisor(N,G),X[N]=G)}function M(){let N=r.newAttributes,G=r.enabledAttributes;for(let K=0,C=G.length;K<C;K++)G[K]!==N[K]&&(s.disableVertexAttribArray(K),G[K]=0)}function w(N,G,K,C,X,$,V){V===!0?s.vertexAttribIPointer(N,G,K,X,$):s.vertexAttribPointer(N,G,K,C,X,$)}function S(N,G,K,C){y();let X=C.attributes,$=K.getAttributes(),V=G.defaultAttributeValues;for(let ie in $){let q=$[ie];if(q.location>=0){let W=X[ie];if(W===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){let ne=W.normalized,be=W.itemSize,Fe=e.get(W);if(Fe===void 0)continue;let J=Fe.buffer,me=Fe.type,Se=Fe.bytesPerElement,k=me===s.INT||me===s.UNSIGNED_INT||W.gpuType===Pa;if(W.isInterleavedBufferAttribute){let ee=W.data,ge=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,ke=W.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let D=0;D<q.locationSize;D++)p(q.location+D,ee.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let D=0;D<q.locationSize;D++)m(q.location+D);s.bindBuffer(s.ARRAY_BUFFER,J);for(let D=0;D<q.locationSize;D++)w(q.location+D,be/q.locationSize,me,ne,ge*Se,(ke+be/q.locationSize*D)*Se,k)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee,W.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,J);for(let ee=0;ee<q.locationSize;ee++)w(q.location+ee,be/q.locationSize,me,ne,be*Se,be/q.locationSize*ee*Se,k)}}else if(V!==void 0){let ne=V[ie];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(q.location,ne);break;case 3:s.vertexAttrib3fv(q.location,ne);break;case 4:s.vertexAttrib4fv(q.location,ne);break;default:s.vertexAttrib1fv(q.location,ne)}}}}M()}function E(){F();for(let N in n){let G=n[N];for(let K in G){let C=G[K];for(let X in C){let $=C[X];for(let V in $)h($[V].object),delete $[V];delete C[X]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let G=n[N.id];for(let K in G){let C=G[K];for(let X in C){let $=C[X];for(let V in $)h($[V].object),delete $[V];delete C[X]}}delete n[N.id]}function _(N){for(let G in n){let K=n[G];for(let C in K){let X=K[C];if(X[N.id]===void 0)continue;let $=X[N.id];for(let V in $)h($[V].object),delete $[V];delete X[N.id]}}}function b(N){for(let G in n){let K=n[G],C=N.isInstancedMesh===!0?N.id:0,X=K[C];if(X!==void 0){for(let $ in X){let V=X[$];for(let ie in V)h(V[ie].object),delete V[ie];delete X[$]}delete K[C],Object.keys(K).length===0&&delete n[G]}}}function F(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Qm(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==dn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==jt&&_!==nn&&!b&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:T}}function tg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new xn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,S=p.clippingState||null;l.value=S,S=h(g,d,w,f);for(let E=0;E!==w;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=f;w!==y;++w,S+=4)a.copy(u[w]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Ar=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new er(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ms(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ni});r.uniforms.tEquirect.value=t;let a=new Pt(i,r),o=t.minFilter;return t.minFilter===un&&(t.minFilter=St),new ys(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Mu=256,ng=3,ig=20,Wu=256,Xu=16,sg=3,rg=new U,ag=new De,Mo=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ys(1,10,null),this._boxMesh=new Pt(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=rg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(ag));let m=new ys(n,i,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mu,zl(e))}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ss?this._setSize(e.image.length===0?Mu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Su(e,!1,!1),n=Math.log2(e)-ng;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Su(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ui||e.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=og(),this._integrationMaterial=lg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xu);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-sg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Wu*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cg());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Su(s,e,t){return new Ar(s,{minFilter:un,generateMipmaps:e,type:Sn,colorSpace:Xt,depthBuffer:t})}function Er(s,e,t){return new An({name:s,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:Yt,blending:Ni,depthTest:!1,depthWrite:!1})}function og(){return Er("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lg(){return Er("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cg(){return Er("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ig}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function bu(){return Er("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tu(){return Er("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ra||f===Ca)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Ar(g.height);return y.fromEquirectangularTexture(s,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Ra||f===Ca,y=f===Ui||f===Ss;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Mo(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Mo(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Ra?d.mapping=Ui:f===Ca&&(d.mapping=Ss),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function ug(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ti("WebGLRenderer: "+n+" extension not supported."),i}}}function dg(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return i[y.id]!==void 0||(y.addEventListener("dispose",o),i[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],s.ARRAY_BUFFER)}function u(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let M=y!==null?y.array.length:m.array.length/3-1,w=m.count>=65535?Ys:qs,S=new w(Math.ceil(M/3)*6,1),E=S.array;if(y!==null){let _=y.array;p=y.version;for(let b=0,F=0;b<M;b+=3){let P=_[b+0],N=_[b+1],G=_[b+2];E[F++]=P,E[F++]=N,E[F++]=N,E[F++]=G,E[F++]=G,E[F++]=P}}else{p=m.version;for(let _=0,b=0;_<M;_+=3){let F=_+0,P=_+1,N=_+2;E[b++]=F,E[b++]=P,E[b++]=P,E[b++]=N,E[b++]=N,E[b++]=F}}S.version=p;let T=r.get(g);T&&e.remove(T),r.set(g,S)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in i){let y=i[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function fg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,e,t){let n=new WeakMap,i=new rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let S=o.attributes.position.count*w,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*E*4*u),_=new Vs(T,S,E,u);_.type=nn,_.needsUpdate=!0;let b=w*4;for(let P=0;P<u;P++){let N=m[P],G=p[P],K=M[P],C=S*E*4*P;for(let X=0;X<N.count;X++){let $=X*b;f===!0&&(i.fromBufferAttribute(N,X),T[C+$+0]=i.x,T[C+$+1]=i.y,T[C+$+2]=i.z,T[C+$+3]=0),g===!0&&(i.fromBufferAttribute(G,X),T[C+$+4]=i.x,T[C+$+5]=i.y,T[C+$+6]=i.z,T[C+$+7]=0),y===!0&&(i.fromBufferAttribute(K,X),T[C+$+8]=i.x,T[C+$+9]=i.y,T[C+$+10]=i.z,T[C+$+11]=K.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Xe(S,E)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gg(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var _g={[_l]:"LINEAR_TONE_MAPPING",[xl]:"REINHARD_TONE_MAPPING",[yl]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[Sl]:"AGX_TONE_MAPPING",[bl]:"NEUTRAL_TONE_MAPPING",[Ml]:"CUSTOM_TONE_MAPPING"};function xg(s,e,t,n,i,r){let a=new tn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Gt;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let u=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(h,u),f=new $n(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,M=null,w=[],S=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let _=0;_<w.length;_++){let b=w[_];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){w=E,S=w.length>0&&w[0].isRenderPass===!0;let T=a.width,_=a.height;w.length>0&&o===null&&(o=new tn(T,_,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(T,_,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&w.some(F=>F.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Xn(T,_),r===!0&&(c.format=Qn,c.type=Oi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let F=0;F<w.length;F++){let P=w[F];P.setSize&&P.setSize(T,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===Cn&&w.length===0)return!1;if(M=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Cn,!0},this.hasRenderPass=function(){return S},this.end=function(E,T){E.toneMapping=p,m=!0;let _=a,b=o;for(let F=0;F<w.length;F++){let P=w[F];P.enabled!==!1&&(P.render(E,b,_,T),P.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==E.outputColorSpace||y!==E.toneMapping){g=E.outputColorSpace,y=E.toneMapping,u.defines={},Ke.getTransfer(g)===it&&(u.defines.SRGB_TRANSFER="");let F=_g[y];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(M),E.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var qu=new It,Yu=new Xn(1,1),Ku=new tr(1),Zu=new Vs,Ju=new da,$u=new er,Au=[],Eu=[],wu=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function ws(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Au[i];if(r===void 0&&(r=new Float32Array(i),Au[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bo(s,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function Mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function Sg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function bg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Cu.set(n),s.uniformMatrix2fv(this.addr,!1,Cu),Tt(t,n)}}function Tg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Ru.set(n),s.uniformMatrix3fv(this.addr,!1,Ru),Tt(t,n)}}function Ag(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;wu.set(n),s.uniformMatrix4fv(this.addr,!1,wu),Tt(t,n)}}function Eg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function wg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function Rg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function Cg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function Ig(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Lg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Ng(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function To(s){return s.version===0&&(s.compareFunction=Ul,s.needsUpdate=!0),s}function Dg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=To(Yu):r=qu,t.setTexture2D(e||r,i)}function Ug(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function Fg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=To(Ku):r=$u,t.setTextureCube(e||r,i)}function Og(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function Bg(s){switch(s){case 5126:return yg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function zg(s,e){s.uniform1fv(this.addr,e)}function kg(s,e){let t=ws(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){let t=ws(e,this.size,3);s.uniform3fv(this.addr,t)}function Hg(s,e){let t=ws(e,this.size,4);s.uniform4fv(this.addr,t)}function Vg(s,e){let t=ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){let t=ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xg(s,e){let t=ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qg(s,e){s.uniform1iv(this.addr,e)}function Yg(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function Zg(s,e){s.uniform4iv(this.addr,e)}function Jg(s,e){s.uniform1uiv(this.addr,e)}function $g(s,e){s.uniform2uiv(this.addr,e)}function jg(s,e){s.uniform3uiv(this.addr,e)}function Qg(s,e){s.uniform4uiv(this.addr,e)}function e0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=To(Yu):a=qu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function t0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ju,r[a])}function n0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=To(Ku):a=$u;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function i0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zu,r[a])}function s0(s){switch(s){case 5126:return zg;case 35664:return kg;case 35665:return Gg;case 35666:return Hg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}},Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function Iu(s,e){s.seq.push(e),s.map[e.id]=e}function r0(s,e,t){let n=s.name,i=n.length;for(ql.lastIndex=0;;){let r=ql.exec(n),a=ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Iu(t,c===void 0?new Kl(o,s,e):new Zl(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Jl(o),Iu(t,u)),t=u}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);r0(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Pu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var a0=37297,o0=0;function l0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lu=new Oe;function c0(s){Ke._getMatrix(Lu,Ke.workingColorSpace,s);let e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Gs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+l0(s.getShaderSource(e),o)}else return r}function h0(s,e){let t=c0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var u0={[_l]:"Linear",[xl]:"Reinhard",[yl]:"Cineon",[vl]:"ACESFilmic",[Sl]:"AgX",[bl]:"Neutral",[Ml]:"Custom"};function d0(s,e){let t=u0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new U;function f0(){Ke.getLuminanceCoefficients(vo);let s=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function m0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Tr(s){return s!==""}function Du(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Uu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(s){return s.replace(_0,x0)}function x0(s,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $l(t)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(s){return s.replace(y0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ou(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var M0={[mr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function S0(s){return M0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b0={[Ss]:"ENVMAP_MODE_REFRACTION"};function T0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":b0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A0={[gl]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function E0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":A0[s.combine]||"ENVMAP_BLENDING_NONE"}function w0(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=S0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=T0(t),u=E0(t),d=p0(t),f=m0(r),g=i.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Tr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Tr).join(`
`),m.length>0&&(m+=`
`)):(y=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=$l(a),a=Du(a,t),a=Uu(a,t),o=$l(o),o=Du(o,t),o=Uu(o,t),a=Fu(a),o=Fu(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+y+a,w=p+m+o,S=Pu(i,i.VERTEX_SHADER,M),E=Pu(i,i.FRAGMENT_SHADER,w);i.attachShader(g,S),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(S)||"",K=i.getShaderInfoLog(E)||"",C=N.trim(),X=G.trim(),$=K.trim(),V=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,E);else{let q=Nu(i,S,"vertex"),W=Nu(i,E,"fragment");Ue("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+q+`
`+W)}else C!==""?Ce("WebGLProgram: Program Info Log:",C):(X===""||$==="")&&(ie=!1);ie&&(P.diagnostics={runnable:V,programLog:C,vertexShader:{log:X,prefix:y},fragmentShader:{log:$,prefix:m}})}i.deleteShader(S),i.deleteShader(E),_=new Es(i,g),b=g0(i,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(g,a0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var R0=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ql(e),t.set(e,n)),n}},Ql=class{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}};function C0(s){return s===di||s===vr||s===Mr}function I0(s,e,t,n,i,r){let a=new Ws,o=new jl,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,F,P,N,G){let K=P.fog,C=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||X,$),ie=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let W=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=W!==void 0?W.length:0,be=0;C.morphAttributes.position!==void 0&&(be=1),C.morphAttributes.normal!==void 0&&(be=2),C.morphAttributes.color!==void 0&&(be=3);let Fe,J,me,Se;if(ie){let _e=Ln[ie];Fe=_e.vertexShader,J=_e.fragmentShader}else{Fe=_.vertexShader,J=_.fragmentShader;let _e=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,_e,st),me=_e.id,Se=st.id}let k=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),ge=N.isInstancedMesh===!0,ke=N.isBatchedMesh===!0,D=!!_.map,Me=!!_.matcap,Ie=!!V,ve=Ie&&V.isPMREMTexture===!0,we=!!_.aoMap,Ye=!!_.lightMap,tt=!!_.bumpMap&&_.wireframe===!1,Ve=!!_.normalMap,vt=!!_.displacementMap,$e=!!_.emissiveMap,At=!!_.metalnessMap,Kt=!!_.roughnessMap,sn=_.anisotropy>0,L=_.clearcoat>0,rn=_.diffuseRoughness>0,ht=_.dispersion>0,ut=_.retroreflectivity>0,pe=_.iridescence>0,Mt=_.sheen>0,Ne=_.transmission>0,Be=sn&&!!_.anisotropyMap,A=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,B=L&&!!_.clearcoatRoughnessMap,se=rn&&!!_.diffuseRoughnessMap,te=pe&&!!_.iridescenceMap,oe=pe&&!!_.iridescenceThicknessMap,de=Mt&&!!_.sheenColorMap,Z=Mt&&!!_.sheenRoughnessMap,j=!!_.specularMap,ce=!!_.specularColorMap,R=!!_.specularIntensityMap,Q=Ne&&!!_.transmissionMap,Y=Ne&&!!_.thicknessMap,he=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,Pe=!!_.alphaHash,We=!!_.extensions,re=Cn;_.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(re=s.toneMapping);let Le=ve?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,He={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:J,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:ke,batchingColor:ke&&N._colorsTexture!==null,instancing:ge,instancingColor:ge&&N.instanceColor!==null,instancingMorph:ge&&N.morphTexture!==null,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:D,matcap:Me,envMap:Ie,envMapMode:Ie&&V.mapping,envMapPMREM:ve,envMapMaxLod:ve?Le.length-1:null,envMapSize:ve?Le[0].width:null,aoMap:we,lightMap:Ye,bumpMap:tt,normalMap:Ve,displacementMap:vt,emissiveMap:$e,normalMapObjectSpace:Ve&&_.normalMapType===iu,normalMapTangentSpace:Ve&&_.normalMapType===go,packedNormalMap:Ve&&_.normalMapType===go&&C0(_.normalMap.format),metalnessMap:At,roughnessMap:Kt,anisotropy:sn,anisotropyMap:Be,clearcoat:L,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:rn,diffuseRoughnessMap:se,dispersion:ht,retroreflection:ut,iridescence:pe,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:Mt,sheenColorMap:de,sheenRoughnessMap:Z,specularMap:j,specularColorMap:ce,specularIntensityMap:R,transmission:Ne,transmissionMap:Q,thicknessMap:Y,gradientMap:he,opaque:_.transparent===!1&&_.blending===Ms&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Pe,combine:_.combine,mapUv:D&&f(_.map.channel),aoMapUv:we&&f(_.aoMap.channel),lightMapUv:Ye&&f(_.lightMap.channel),bumpMapUv:tt&&f(_.bumpMap.channel),normalMapUv:Ve&&f(_.normalMap.channel),displacementMapUv:vt&&f(_.displacementMap.channel),emissiveMapUv:$e&&f(_.emissiveMap.channel),metalnessMapUv:At&&f(_.metalnessMap.channel),roughnessMapUv:Kt&&f(_.roughnessMap.channel),anisotropyMapUv:Be&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:ce&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ve||sn),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(D||ae),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ee,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:D&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:$e&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:We&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&_.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],F;if(b){let P=Ln[b];F=gu.clone(P.uniforms)}else F=_.uniforms;return F}function w(_,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new w0(s,b,_,i),c.push(F),h.set(b,F)),F}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:T}}function P0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function L0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(d,f,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(d,f,g,y,m,p){let M=o(d,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||L0),n.length>1&&n.sort(f||Bu),i.length>1&&i.sort(f||Bu)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function N0(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new zu,s.set(n,[a])):i>=r.length?(a=new zu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function D0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new De};break;case"SpotLight":t={position:new U,direction:new U,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function U0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var F0=0;function O0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function B0(s){let e=new D0,t=U0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new Ge,a=new Ge;function o(c){let h=0,u=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,S=0,E=0,T=0,_=0,b=0,F=0,P=0;c.sort(O0);for(let G=0,K=c.length;G<K;G++){let C=c[G],X=C.color,$=C.intensity,V=C.distance,ie=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===di?ie=C.shadow.map.texture:ie=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=X.r*$,u+=X.g*$,d+=X.b*$;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],$);P++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=ie;let be=W.getViewportCount();for(let Fe=0;Fe<be;Fe++)n.sunShadowMatrix[y+Fe]=W.getMatrix(Fe),n.sunShadowCascade[y+Fe]=W._cascadeData[Fe];y+=be,g++}n.sun[f]=q,f++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=q,m++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(X).multiplyScalar($),q.distance=V,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[M]=q;let W=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,W.updateMatrices(C),C.castShadow&&F++),n.spotLightMatrix[M]=W.matrix,C.castShadow){let ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.spotShadow[M]=ne,n.spotShadowMap[M]=ie,_++}M++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(X).multiplyScalar($),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=q,w++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let W=C.shadow,ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,ne.shadowCameraNear=W.camera.near,ne.shadowCameraFar=W.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=q,p++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar($),q.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[S]=q,S++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=P,n.version=F0++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let S=c[M];if(S.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),u++}else if(S.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),d++}else if(S.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ku(s){let e=new B0(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function z0(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ku(s),e.set(i,[o])):r>=a.length?(o=new ku(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],V0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Gu=new Ge,br=new U,Yl=new U;function W0(s,e,t){let n=new hi,i=new Xe,r=new Xe,a=new rt,o=new _a,l=new xa,c={},h=t.maxTextureSize,u={[Rn]:Yt,[Yt]:Rn,[hn]:hn},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:k0,fragmentShader:G0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Gt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let p=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ph&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let F=s.getRenderTarget(),P=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ni),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=p!==this.type;K&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(X=>X.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,X=T.length;C<X;C++){let $=T[C],V=$.shadow;if(V===void 0){Ce("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ie=V.getFrameExtents();i.multiply(ie),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,V.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===vs){if($.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new tn(i.x,i.y,{format:di,type:Sn,minFilter:St,magFilter:St,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Xn(i.x,i.y,nn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Hn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=_t,V.map.depthTexture.magFilter=_t}else $.isPointLight?(V.map=new Ar(i.x),V.map.depthTexture=new tr(i.x,Mn)):(V.map=new tn(i.x,i.y),V.map.depthTexture=new Xn(i.x,i.y,Mn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Hn,this.type===mr?(V.map.depthTexture.compareFunction=q?Dl:Nl,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=_t,V.map.depthTexture.magFilter=_t);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let W=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,b);let ne=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let be=0;be<W;be++){let Fe=V.getCamera(be);if($.isPointLight){let J=V.camera,me=V.matrix,Se=$.distance||J.far;Se!==J.far&&(J.far=Se,J.updateProjectionMatrix()),br.setFromMatrixPosition($.matrixWorld),J.position.copy(br),Yl.copy(J.position),Yl.add(H0[be]),J.up.copy(V0[be]),J.lookAt(Yl),J.updateMatrixWorld(),me.makeTranslation(-br.x,-br.y,-br.z),Gu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gu,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,be),s.clear();else{be===0&&(s.setRenderTarget(V.map),s.clear());let J=V.getViewport(be);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),G.viewport(a)}n=V.getFrustum(be),S(_,b,Fe,$,ne,this.type)}V.isPointLightShadow!==!0&&this.type===vs&&M(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(F,P,N)};function M(T,_){let b=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(i.x,i.y,{format:di,type:Sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(_,null,b,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(_,null,b,f,y,null)}function w(T,_,b,F){let P=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let G=P.uuid,K=_.uuid,C=c[G];C===void 0&&(C={},c[G]=C);let X=C[K];X===void 0&&(X=P.clone(),C[K]=X,_.addEventListener("dispose",E)),P=X}if(P.visible=_.visible,P.wireframe=_.wireframe,F===vs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=s.properties.get(P);G.light=b}return P}function S(T,_,b,F,P,N){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let C=e.update(T),X=T.material;if(Array.isArray(X)){let $=C.groups;for(let V=0,ie=$.length;V<ie;V++){let q=$[V],W=X[q.materialIndex];if(W&&W.visible){let ne=w(T,W,F,N);T.onBeforeShadow(s,T,_,b,C,ne,q),s.renderBufferDirect(b,null,C,ne,T,q),T.onAfterShadow(s,T,_,b,C,ne,q)}}}else if(X.visible){let $=w(T,X,F,N);T.onBeforeShadow(s,T,_,b,C,$,null),s.renderBufferDirect(b,null,C,$,T,null),T.onAfterShadow(s,T,_,b,C,$,null)}}let K=T.children;for(let C=0,X=K.length;C<X;C++)S(K[C],_,b,F,P,N)}function E(T){T.target.removeEventListener("dispose",E);for(let b in c){let F=c[b],P=T.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function X0(s,e){function t(){let R=!1,Q=new rt,Y=null,he=new rt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!R&&(s.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){R=ae},setClear:function(ae,le,Pe,We,re){re===!0&&(ae*=We,le*=We,Pe*=We),Q.set(ae,le,Pe,We),he.equals(Q)===!1&&(s.clearColor(ae,le,Pe,We),he.copy(Q))},reset:function(){R=!1,Y=null,he.set(-1,0,0,0)}}}function n(){let R=!1,Q=!1,Y=null,he=null,ae=null;return{setReversed:function(le){if(Q!==le){let Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let We=ae;ae=null,this.setClear(We)}},getReversed:function(){return Q},setTest:function(le){le?ee(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(le){Y!==le&&!R&&(s.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=pu[le]),he!==le){switch(le){case ia:s.depthFunc(s.NEVER);break;case sa:s.depthFunc(s.ALWAYS);break;case ra:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case la:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=le}},setLocked:function(le){R=le},setClear:function(le){ae!==le&&(ae=le,Q&&(le=1-le),s.clearDepth(le))},reset:function(){R=!1,Y=null,he=null,ae=null,Q=!1}}}function i(){let R=!1,Q=null,Y=null,he=null,ae=null,le=null,Pe=null,We=null,re=null;return{setTest:function(Le){R||(Le?ee(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Le){Q!==Le&&!R&&(s.stencilMask(Le),Q=Le)},setFunc:function(Le,He,_e){(Y!==Le||he!==He||ae!==_e)&&(s.stencilFunc(Le,He,_e),Y=Le,he=He,ae=_e)},setOp:function(Le,He,_e){(le!==Le||Pe!==He||We!==_e)&&(s.stencilOp(Le,He,_e),le=Le,Pe=He,We=_e)},setLocked:function(Le){R=Le},setClear:function(Le){re!==Le&&(s.clearStencil(Le),re=Le)},reset:function(){R=!1,Q=null,Y=null,he=null,ae=null,le=null,Pe=null,We=null,re=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,S=null,E=null,T=null,_=null,b=new De(0,0,0),F=0,P=!1,N=null,G=null,K=null,C=null,X=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=ie>=2);let W=null,ne={},be=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),J=new rt().fromArray(be),me=new rt().fromArray(Fe);function Se(R,Q,Y,he){let ae=new Uint8Array(4),le=s.createTexture();s.bindTexture(R,le),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<Y;Pe++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(Q+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return le}let k={};k[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),k[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),k[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(ns),tt(!1),Ve(hl),ee(s.CULL_FACE),we(Ni);function ee(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function ge(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function ke(R,Q){return d[R]!==Q?(s.bindFramebuffer(R,Q),d[R]=Q,R===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Q),R===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function D(R,Q){let Y=g,he=!1;if(R){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let ae=R.textures;if(Y.length!==ae.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Pe=ae.length;le<Pe;le++)Y[le]=s.COLOR_ATTACHMENT0+le;Y.length=ae.length,he=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,he=!0);he&&s.drawBuffers(Y)}function Me(R){return y!==R?(s.useProgram(R),y=R,!0):!1}let Ie={[Di]:s.FUNC_ADD,[Nh]:s.FUNC_SUBTRACT,[Dh]:s.FUNC_REVERSE_SUBTRACT};Ie[Uh]=s.MIN,Ie[Fh]=s.MAX;let ve={[Oh]:s.ZERO,[Bh]:s.ONE,[zh]:s.SRC_COLOR,[pl]:s.SRC_ALPHA,[Xh]:s.SRC_ALPHA_SATURATE,[Vh]:s.DST_COLOR,[Gh]:s.DST_ALPHA,[kh]:s.ONE_MINUS_SRC_COLOR,[ml]:s.ONE_MINUS_SRC_ALPHA,[Wh]:s.ONE_MINUS_DST_COLOR,[Hh]:s.ONE_MINUS_DST_ALPHA,[qh]:s.CONSTANT_COLOR,[Yh]:s.ONE_MINUS_CONSTANT_COLOR,[Kh]:s.CONSTANT_ALPHA,[Zh]:s.ONE_MINUS_CONSTANT_ALPHA};function we(R,Q,Y,he,ae,le,Pe,We,re,Le){if(R===Ni){m===!0&&(ge(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),R!==Lh){if(R!==p||Le!==P){if((M!==Di||E!==Di)&&(s.blendEquation(s.FUNC_ADD),M=Di,E=Di),Le)switch(R){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ul:s.blendFunc(s.ONE,s.ONE);break;case dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ue("WebGLState: Invalid blending: ",R);break}else switch(R){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ul:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",R);break}w=null,S=null,T=null,_=null,b.set(0,0,0),F=0,p=R,P=Le}return}ae=ae||Q,le=le||Y,Pe=Pe||he,(Q!==M||ae!==E)&&(s.blendEquationSeparate(Ie[Q],Ie[ae]),M=Q,E=ae),(Y!==w||he!==S||le!==T||Pe!==_)&&(s.blendFuncSeparate(ve[Y],ve[he],ve[le],ve[Pe]),w=Y,S=he,T=le,_=Pe),(We.equals(b)===!1||re!==F)&&(s.blendColor(We.r,We.g,We.b,re),b.copy(We),F=re),p=R,P=!1}function Ye(R,Q){R.side===hn?ge(s.CULL_FACE):ee(s.CULL_FACE);let Y=R.side===Yt;Q&&(Y=!Y),tt(Y),R.blending===Ms&&R.transparent===!1?we(Ni):we(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let he=R.stencilWrite;o.setTest(he),he&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),$e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(R){N!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),N=R)}function Ve(R){R!==Ch?(ee(s.CULL_FACE),R!==G&&(R===hl?s.cullFace(s.BACK):R===Ih?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),G=R}function vt(R){R!==K&&(V&&s.lineWidth(R),K=R)}function $e(R,Q,Y){R?(ee(s.POLYGON_OFFSET_FILL),(C!==Q||X!==Y)&&(C=Q,X=Y,a.getReversed()&&(Q=-Q,Y=-Y),s.polygonOffset(Q,Y))):ge(s.POLYGON_OFFSET_FILL)}function At(R){R?ee(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Kt(R){R===void 0&&(R=s.TEXTURE0+$-1),W!==R&&(s.activeTexture(R),W=R)}function sn(R,Q,Y){Y===void 0&&(W===null?Y=s.TEXTURE0+$-1:Y=W);let he=ne[Y];he===void 0&&(he={type:void 0,texture:void 0},ne[Y]=he),(he.type!==R||he.texture!==Q)&&(W!==Y&&(s.activeTexture(Y),W=Y),s.bindTexture(R,Q||k[R]),he.type=R,he.texture=Q)}function L(){let R=ne[W];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function rn(){try{s.compressedTexImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ht(){try{s.compressedTexImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ut(){try{s.texSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function pe(){try{s.texSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Be(){try{s.texStorage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function A(){try{s.texStorage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function x(){try{s.texImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function B(){try{s.texImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function se(R){return u[R]!==void 0?u[R]:s.getParameter(R)}function te(R,Q){u[R]!==Q&&(s.pixelStorei(R,Q),u[R]=Q)}function oe(R){J.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function de(R){me.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Z(R,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let he=Y.get(R);he===void 0&&(he=s.getUniformBlockIndex(Q,R.name),s.uniformBlockBinding(Q,he,he),Y.set(R,he))}function j(R,Q,Y){let ae=c.get(Q).get(R);l[ae]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,ne={},d={},l={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,S=null,E=null,T=null,_=null,b=new De(0,0,0),F=0,P=!1,N=null,G=null,K=null,C=null,X=null,J.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:ke,drawBuffers:D,useProgram:Me,setBlending:we,setMaterial:Ye,setFlipSided:tt,setCullFace:Ve,setLineWidth:vt,setPolygonOffset:$e,setScissorTest:At,activeTexture:Kt,bindTexture:sn,unbindTexture:L,compressedTexImage2D:rn,compressedTexImage3D:ht,texImage2D:x,texImage3D:B,pixelStorei:te,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:j,texStorage2D:Be,texStorage3D:A,texSubImage2D:ut,texSubImage3D:pe,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ne,scissor:oe,viewport:de,reset:ce}}function q0(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,x){return m?new OffscreenCanvas(A,x):rs("canvas")}function M(A,x,B){let se=1,te=Be(A);if((te.width>B||te.height>B)&&(se=B/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let oe=Math.floor(se*te.width),de=Math.floor(se*te.height);d===void 0&&(d=p(oe,de));let Z=x?p(oe,de):d;return Z.width=oe,Z.height=de,Z.getContext("2d").drawImage(A,0,0,oe,de),Ce("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+de+")."),Z}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function w(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,x,B,se,te,oe=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8),B===s.UNSIGNED_SHORT&&de&&(Z=de.R16_EXT),B===s.SHORT&&de&&(Z=de.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8),B===s.UNSIGNED_SHORT&&de&&(Z=de.RG16_EXT),B===s.SHORT&&de&&(Z=de.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&de&&(Z=de.RGB16_EXT),B===s.SHORT&&de&&(Z=de.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),x===s.RGBA){let j=oe?Gs:Ke.getTransfer(te);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=j===it?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&de&&(Z=de.RGBA16_EXT),B===s.SHORT&&de&&(Z=de.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(A,x){let B;return A?x===null||x===Mn||x===Oi?B=s.DEPTH24_STENCIL8:x===nn?B=s.DEPTH32F_STENCIL8:x===Ts&&(B=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mn||x===Oi?B=s.DEPTH_COMPONENT24:x===nn?B=s.DEPTH_COMPONENT32F:x===Ts&&(B=s.DEPTH_COMPONENT16),B}function b(A,x){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==_t&&A.minFilter!==St?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function F(A){let x=new WeakRef(A);n.get(A).__ref=x,g.add(x),y.register(A,x,x)}function P(A){let x=n.get(A).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function N(A){K(A.target)}function G(A){C(A.target)}function K(A){A.removeEventListener("dispose",N),P(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function C(A){A.removeEventListener("dispose",G),P(A),ie(A)}function X(){for(let A of g){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):K(x))}g.clear(),u.clear()}function $(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,se=f.get(B);if(se){let te=se[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&V(A),Object.keys(se).length===0&&f.delete(B)}n.remove(A)}function V(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let B=A.source,se=f.get(B);delete se[x.__cacheKey],a.memory.textures--}function ie(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&K(B),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let oe=0;oe<x.__webglFramebuffer[te].length;oe++)s.deleteFramebuffer(x.__webglFramebuffer[te][oe]);else s.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)s.deleteFramebuffer(x.__webglFramebuffer[te]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let se=A.textures;for(let te=0,oe=se.length;te<oe;te++){let de=n.get(se[te]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(se[te])}n.remove(A)}let q=0;function W(){q=0}function ne(){return q}function be(A){q=A}function Fe(){let A=q;return A>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function me(A,x){let B=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let se=A.image;if(se===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function Se(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ye(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function k(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ye(B,A,x);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function ee(A,x){let B=n.get(A);if(A.version>0&&B.__version!==A.version){tt(B,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}let ge={[ci]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[is]:s.MIRRORED_REPEAT},ke={[_t]:s.NEAREST,[Ia]:s.NEAREST_MIPMAP_NEAREST,[Fi]:s.NEAREST_MIPMAP_LINEAR,[St]:s.LINEAR,[bs]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},D={[ru]:s.NEVER,[Ul]:s.ALWAYS,[au]:s.LESS,[Nl]:s.LEQUAL,[ou]:s.EQUAL,[Dl]:s.GEQUAL,[lu]:s.GREATER,[cu]:s.NOTEQUAL};function Me(A,x){if(x.type===nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===St||x.magFilter===bs||x.magFilter===Fi||x.magFilter===un||x.minFilter===St||x.minFilter===bs||x.minFilter===Fi||x.minFilter===un)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ge[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ge[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ge[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ke[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ke[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,D[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_t||x.minFilter!==Fi&&x.minFilter!==un||x.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",N),F(x));let se=x.source,te=f.get(se);te===void 0&&(te={},f.set(se,te));let oe=J(x);if(oe!==A.__cacheKey){te[oe]===void 0&&(te[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[oe].usedTimes++;let de=te[A.__cacheKey];de!==void 0&&(te[A.__cacheKey].usedTimes--,de.usedTimes===0&&V(x)),A.__cacheKey=oe,A.__webglTexture=te[oe].texture}return B}function ve(A,x,B){return Math.floor(Math.floor(A/B)/x)}function we(A,x,B,se){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,se,x.data);else{oe.sort((R,Q)=>R.start-Q.start);let de=0;for(let R=1;R<oe.length;R++){let Q=oe[de],Y=oe[R],he=Q.start+Q.count,ae=ve(Y.start,x.width,4),le=ve(Q.start,x.width,4);Y.start<=he+1&&ae===le&&ve(Y.start+Y.count-1,x.width,4)===ae?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++de,oe[de]=Y)}oe.length=de+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let R=0,Q=oe.length;R<Q;R++){let Y=oe[R],he=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),le=he%x.width,Pe=Math.floor(he/x.width),We=ae,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(s.TEXTURE_2D,0,le,Pe,We,re,B,se,x.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function Ye(A,x,B){let se=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=s.TEXTURE_3D);let te=Ie(A,x),oe=x.source;t.bindTexture(se,A.__webglTexture,s.TEXTURE0+B);let de=n.get(oe);if(oe.version!==de.__version||te===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=Ke.getPrimaries(Ke.workingColorSpace),Le=x.colorSpace===ei?null:Ke.getPrimaries(x.colorSpace),He=x.colorSpace===ei||re===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let j=M(x.image,!1,i.maxTextureSize);j=Ne(x,j);let ce=r.convert(x.format,x.colorSpace),R=r.convert(x.type),Q=T(x.internalFormat,ce,R,x.normalized,x.colorSpace,x.isVideoTexture);Me(se,x);let Y,he=x.mipmaps,ae=x.isVideoTexture!==!0,le=de.__version===void 0||te===!0,Pe=oe.dataReady,We=b(x,j);if(x.isDepthTexture)Q=_(x.format===Qn,x.type),le&&(ae?t.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ce,R,null));else if(x.isDataTexture)if(he.length>0){ae&&le&&t.texStorage2D(s.TEXTURE_2D,We,Q,he[0].width,he[0].height);for(let re=0,Le=he.length;re<Le;re++)Y=he[re],ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,R,Y.data):t.texImage2D(s.TEXTURE_2D,re,Q,Y.width,Y.height,0,ce,R,Y.data);x.generateMipmaps=!1}else ae?(le&&t.texStorage2D(s.TEXTURE_2D,We,Q,j.width,j.height),Pe&&we(x,j,ce,R)):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ce,R,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Q,he[0].width,he[0].height,j.depth);for(let re=0,Le=he.length;re<Le;re++)if(Y=he[re],x.format!==dn)if(ce!==null)if(ae){if(Pe)if(x.layerUpdates.size>0){let He=Xl(Y.width,Y.height,x.format,x.type);for(let _e of x.layerUpdates){let st=Y.data.subarray(_e*He/Y.data.BYTES_PER_ELEMENT,(_e+1)*He/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,_e,Y.width,Y.height,1,ce,st)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,j.depth,ce,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,j.depth,0,Y.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,j.depth,ce,R,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,j.depth,0,ce,R,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(s.TEXTURE_2D,We,Q,he[0].width,he[0].height);for(let re=0,Le=he.length;re<Le;re++)Y=he[re],x.format!==dn?ce!==null?ae?Pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Q,Y.width,Y.height,0,Y.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,R,Y.data):t.texImage2D(s.TEXTURE_2D,re,Q,Y.width,Y.height,0,ce,R,Y.data)}else if(x.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Q,j.width,j.height,j.depth),Pe)if(x.layerUpdates.size>0){let re=Xl(j.width,j.height,x.format,x.type);for(let Le of x.layerUpdates){let He=j.data.subarray(Le*re/j.data.BYTES_PER_ELEMENT,(Le+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,j.width,j.height,1,ce,R,He)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,R,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ce,R,j.data);else if(x.isData3DTexture)ae?(le&&t.texStorage3D(s.TEXTURE_3D,We,Q,j.width,j.height,j.depth),Pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,R,j.data)):t.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ce,R,j.data);else if(x.isFramebufferTexture){if(le)if(ae)t.texStorage2D(s.TEXTURE_2D,We,Q,j.width,j.height);else{let re=j.width,Le=j.height;for(let He=0;He<We;He++)t.texImage2D(s.TEXTURE_2D,He,Q,re,Le,0,ce,R,null),re>>=1,Le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),u.add(x),re.onpaint=Le=>{let He=Le.changedElements;for(let _e of u)He.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let He=s.RGBA,_e=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,He,_e,st,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(he.length>0){if(ae&&le){let re=Be(he[0]);t.texStorage2D(s.TEXTURE_2D,We,Q,re.width,re.height)}for(let re=0,Le=he.length;re<Le;re++)Y=he[re],ae?Pe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ce,R,Y):t.texImage2D(s.TEXTURE_2D,re,Q,ce,R,Y);x.generateMipmaps=!1}else if(ae){if(le){let re=Be(j);t.texStorage2D(s.TEXTURE_2D,We,Q,re.width,re.height)}Pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,R,j)}else t.texImage2D(s.TEXTURE_2D,0,Q,ce,R,j);w(x)&&x.mipmapsAutoUpdate===!0&&S(se),de.__version=oe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function tt(A,x,B){if(x.image.length!==6)return;let se=Ie(A,x),te=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let oe=n.get(te);if(te.version!==oe.__version||se===!0){t.activeTexture(s.TEXTURE0+B);let de=Ke.getPrimaries(Ke.workingColorSpace),Z=x.colorSpace===ei?null:Ke.getPrimaries(x.colorSpace),j=x.colorSpace===ei||de===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ce&&!R?Q[_e]=M(x.image[_e],!0,i.maxCubemapSize):Q[_e]=R?x.image[_e].image:x.image[_e],Q[_e]=Ne(x,Q[_e]);let Y=Q[0],he=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),le=T(x.internalFormat,he,ae,x.normalized,x.colorSpace),Pe=x.isVideoTexture!==!0,We=oe.__version===void 0||se===!0,re=te.dataReady,Le=b(x,Y);Me(s.TEXTURE_CUBE_MAP,x);let He;if(x.isDepthTexture){if(le=_(x.format===Qn,x.type),We)if(Pe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let _e=0;_e<6;_e++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,Y.width,Y.height,0,he,ae,null)}else if(ce){Pe&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,le,Y.width,Y.height);for(let _e=0;_e<6;_e++){He=Q[_e].mipmaps;for(let st=0;st<He.length;st++){let Et=He[st];x.format!==dn?he!==null?Pe?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,Et.width,Et.height,he,Et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,le,Et.width,Et.height,0,Et.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,Et.width,Et.height,he,ae,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,le,Et.width,Et.height,0,he,ae,Et.data)}}}else{if(He=x.mipmaps,Pe&&We){He.length>0&&Le++;let _e=Be(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,le,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(R){Pe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,he,ae,Q[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,Q[_e].width,Q[_e].height,0,he,ae,Q[_e].data);for(let st=0;st<He.length;st++){let ti=He[st].image[_e].image;Pe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,ti.width,ti.height,he,ae,ti.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,le,ti.width,ti.height,0,he,ae,ti.data)}}else{Pe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,ae,Q[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,he,ae,Q[_e]);for(let st=0;st<He.length;st++){let Et=He[st];Pe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,he,ae,Et.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,le,he,ae,Et.image[_e])}}}w(x)&&x.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),oe.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ve(A,x,B,se,te,oe){let de=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),j=T(B.internalFormat,de,Z,B.normalized,B.colorSpace),ce=n.get(x),R=n.get(B);if(R.__renderTarget=x,!ce.__hasExternalTextures){let Q=Math.max(1,x.width>>oe),Y=Math.max(1,x.height>>oe);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,j,Q,Y,x.depth,0,de,Z,null):t.texImage2D(te,oe,j,Q,Y,0,de,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),pe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,te,R.__webglTexture,0,ut(x)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,te,R.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(A,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let se=x.depthTexture,te=se&&se.isDepthTexture?se.type:null,oe=_(x.stencilBuffer,te),de=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(x),oe,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(x),oe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,oe,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,A)}else{let se=x.textures;for(let te=0;te<se.length;te++){let oe=se[te],de=r.convert(oe.format,oe.colorSpace),Z=r.convert(oe.type),j=T(oe.internalFormat,de,Z,oe.normalized,oe.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(x),j,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(A,x,B){let se=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(x.depthTexture);te.__renderTarget=x;let oe=se?x.depthTexture.image[0]:x.depthTexture.image;(!te.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),se?ee(x.depthTexture,0):me(x.depthTexture,0);let de=te.__webglTexture,Z=ut(x),j=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ce=x.depthTexture.format===Qn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)pe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,j,de,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ce,j,de,0);else if(x.depthTexture.format===Qn)pe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,j,de,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ce,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){let te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=se}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)$e(x.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?$e(x.__webglFramebuffer[0],A,0):$e(x.__webglFramebuffer,A,0);else if(B){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=s.createRenderbuffer(),vt(x.__webglDepthbuffer[se],A,!1);else{let te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,oe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),vt(x.__webglDepthbuffer,A,!1);else{let te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(A,x,B){let se=n.get(A);x!==void 0&&Ve(se.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(A)}function sn(A){let x=A.texture,B=n.get(A),se=n.get(x);A.addEventListener("dispose",G),F(A);let te=A.textures,oe=A.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=x.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[Z][j]=s.createFramebuffer()}else B.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(de)for(let Z=0,j=te.length;Z<j;Z++){let ce=n.get(te[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<te.length;Z++){let j=te[Z];B.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ce=r.convert(j.format,j.colorSpace),R=r.convert(j.type),Q=T(j.internalFormat,ce,R,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Y=ut(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Me(s.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ve(B.__webglFramebuffer[Z][j],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Ve(B.__webglFramebuffer[Z],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(x)?S(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Z=0,j=te.length;Z<j;Z++){let ce=te[Z],R=n.get(ce),Q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,R.__webglTexture),Me(Q,ce),Ve(B.__webglFramebuffer,A,ce,s.COLOR_ATTACHMENT0+Z,Q,0),w(ce)&&S(Q)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),Me(Z,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ve(B.__webglFramebuffer[j],A,x,s.COLOR_ATTACHMENT0,Z,j);else Ve(B.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Z,0);w(x)?S(Z):x.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&At(A)}function L(A){let x=A.textures;for(let B=0,se=x.length;B<se;B++){let te=x[B];if(w(te)&&te.mipmapsAutoUpdate===!0){let oe=E(A),de=n.get(te).__webglTexture;t.bindTexture(oe,de),S(oe),t.unbindTexture()}}}let rn=[];function ht(A){if(A.samples>0){if(pe(A)===!1){let x=A.textures,B=A.width,se=A.height,te=s.COLOR_BUFFER_BIT,oe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(A),Z=x.length>1;if(Z)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let R=n.get(x[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,R,0)}s.blitFramebuffer(0,0,B,se,0,0,B,se,te,s.NEAREST),l===!0&&(rn.length=0,rn.push(s.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&rn.push(oe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let R=n.get(x[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,R,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ut(A){return Math.min(i.maxSamples,A.samples)}function pe(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ne(A,x){let B=A.colorSpace,se=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Xt&&B!==ei&&(Ke.getTransfer(B)===it?(se!==dn||te!==jt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),x}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=W,this.getTextureUnits=ne,this.setTextureUnits=be,this.setTexture2D=me,this.setTexture2DArray=Se,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=Kt,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=pe,this.dispose=X}function Y0(s,e){function t(n,i=ei){let r,a=Ke.getTransfer(i);if(n===jt)return s.UNSIGNED_BYTE;if(n===La)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Al)return s.BYTE;if(n===El)return s.SHORT;if(n===Ts)return s.UNSIGNED_SHORT;if(n===Pa)return s.INT;if(n===Mn)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===Cl)return s.ALPHA;if(n===Il)return s.RGB;if(n===dn)return s.RGBA;if(n===Hn)return s.DEPTH_COMPONENT;if(n===Qn)return s.DEPTH_STENCIL;if(n===Da)return s.RED;if(n===Ua)return s.RED_INTEGER;if(n===di)return s.RG;if(n===Fa)return s.RG_INTEGER;if(n===Oa)return s.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===yr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===vr||n===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Va)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vr)return r.COMPRESSED_RG11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Za||n===Ja||n===$a||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===co||n===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uo||n===fo||n===Mr||n===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var K0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:K0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends vn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new ec,p={},M=t.getContextAttributes(),w=null,S=null,E=[],T=[],_=new Xe,b=null,F=null,P=new Dt;P.viewport=new rt;let N=new Dt;N.viewport=new rt;let G=[P,N],K=new Aa,C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=E[J];return me===void 0&&(me=new ls,E[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=E[J];return me===void 0&&(me=new ls,E[J]=me),me.getGripSpace()},this.getHand=function(J){let me=E[J];return me===void 0&&(me=new ls,E[J]=me),me.getHandSpace()};function $(J){let me=T.indexOf(J.inputSource);if(me===-1)return;let Se=E[me];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ie);for(let J=0;J<E.length;J++){let me=T[J];me!==null&&(T[J]=null,E[J].disconnect(me))}C=null,X=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(w),f=null,d=null,u=null,i=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),F!==null){let J=F.camera;J.fov=F.fov,J.zoom=F.zoom,J.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,k=null,ee=null;M.depth&&(ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Qn:Hn,k=M.stencil?Oi:Mn);let ge={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new tn(d.textureWidth,d.textureHeight,{format:dn,type:jt,depthTexture:new Xn(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new tn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let me=0;me<J.removed.length;me++){let Se=J.removed[me],k=T.indexOf(Se);k>=0&&(T[k]=null,E[k].disconnect(Se))}for(let me=0;me<J.added.length;me++){let Se=J.added[me],k=T.indexOf(Se);if(k===-1){for(let ge=0;ge<E.length;ge++)if(ge>=T.length){T.push(Se),k=ge;break}else if(T[ge]===null){T[ge]=Se,k=ge;break}if(k===-1)break}let ee=E[k];ee&&ee.connect(Se)}}function q(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let me=J.near,Se=J.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),K.near=N.near=P.near=me,K.far=N.far=P.far=Se,(C!==K.near||X!==K.far)&&(i.updateRenderState({depthNear:K.near,depthFar:K.far}),C=K.near,X=K.far),K.layers.mask=J.layers.mask|6,P.layers.mask=K.layers.mask&-5,N.layers.mask=K.layers.mask&-3;let k=J.parent,ee=K.cameras;q(K,k);for(let ge=0;ge<ee.length;ge++)q(ee[ge],k);K.projectionMatrix.copy(P.projectionMatrix),K.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&J.isPerspectiveCamera&&(F={camera:J,fov:J.fov,zoom:J.zoom}),W(J,K,k)};function W(J,me,Se){Se===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(J){return p[J]};let ne=null;function be(J,me){if(h=me.getViewerPose(c||a),g=me,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let k=!1;Se.length!==K.cameras.length&&(K.cameras.length=0,k=!0);for(let D=0;D<Se.length;D++){let Me=Se[D],Ie=null;if(f!==null)Ie=f.getViewport(Me);else{let we=u.getViewSubImage(d,Me);Ie=we.viewport,D===0&&(e.setRenderTargetTextures(S,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(S))}let ve=G[D];ve===void 0&&(ve=new Dt,ve.layers.enable(D),ve.viewport=new rt,G[D]=ve),ve.matrix.fromArray(Me.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Me.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),D===0&&(K.matrix.copy(ve.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),k===!0&&K.cameras.push(ve)}let ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let D=u.getDepthInformation(Se[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(ee&&ee.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Se.length;D++){let Me=Se[D].camera;if(Me){let Ie=p[Me];Ie||(Ie=new nr,p[Me]=Ie);let ve=u.getCameraImage(Me);Ie.sourceTexture=ve}}}}for(let Se=0;Se<E.length;Se++){let k=T[Se],ee=E[Se];k!==null&&ee!==void 0&&ee.update(k,me,c||a)}ne&&ne(J,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Fe=new Hu;Fe.setAnimationLoop(be),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}},J0=new Ge,ju=new Oe;ju.set(-1,0,0,0,1,0,0,0,1);function $0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,S=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ju),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j0(s,e,t,n){let i={},r={};function a(M,w){let S=w.program;n.uniformBlockBinding(M,S,i[M.id])}function o(M,w){let S=i[M.id];S===void 0&&(g(M),S=l(M),i[M.id]=S,M.addEventListener("dispose",m));let E=w.program;n.updateUBOMapping(M,E);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let w=s.createBuffer(),S=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,S,E),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(M){let w=i[M.id],S=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let T=0,_=S.length;T<_;T++){let b=S[T];if(Array.isArray(b))for(let F=0,P=b.length;F<P;F++)h(b[F],T,F,E);else h(b,T,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,w,S,E){if(d(M,w,S,E)===!0){let T=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let F=0;F<_.length;F++){let P=_[F],N=y(P,!0);u(P,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,M.__data)}}function u(M,w,S){typeof M=="number"||typeof M=="boolean"?w[S]=M:M.isMatrix3?(w[S]=M.elements[0],w[S+1]=M.elements[1],w[S+2]=M.elements[2],w[S+3]=0,w[S+4]=M.elements[3],w[S+5]=M.elements[4],w[S+6]=M.elements[5],w[S+7]=0,w[S+8]=M.elements[6],w[S+9]=M.elements[7],w[S+10]=M.elements[8],w[S+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-S),S):M.toArray(w,S)}function d(M,w,S,E){let T=M.value,_=w+"_"+S;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let b=E[_],F=!1;for(let P=0;P<T.length;P++)f(T[P],b,P)===!0&&(F=!0);return F}return f(T,E,_)}function f(M,w,S){if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:ArrayBuffer.isView(M)?w[S]=M.slice():w[S]=M.clone(),!0;{let E=w[S];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return w[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(M){let w=M.uniforms,S=0,E=16;for(let _=0,b=w.length;_<b;_++){let F=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,N=F.length;P<N;P++){let G=F[P],K=Array.isArray(G.value)?G.value:[G.value],C=Array.isArray(w[_])||Array.isArray(G.value),X=S;for(let V=0,ie=K.length;V<ie;V++){let q=K[V],W=y(q,C),ne=S%E,be=ne%W.boundary,Fe=ne+be;S+=be,Fe!==0&&E-Fe<W.storage&&(S+=E-Fe),V===0&&(X=S),S+=W.storage}let $=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new $((S-X)/Float32Array.BYTES_PER_ELEMENT),G.__offset=X}}let T=S%E;return T>0&&(S+=E-T),M.__size=S,M.__cache={},this}function y(M,w){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){let w=M.target;w.removeEventListener("dispose",m),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:a,update:o,dispose:p}}var Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function e_(){return Pn===null&&(Pn=new ds(Q0,16,16,di,Sn),Pn.name="DFG_LUT",Pn.minFilter=St,Pn.magFilter=St,Pn.wrapS=on,Pn.wrapT=on,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var So=class{constructor(e={}){let{canvas:t=uu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Oa,Fa,Ua]),p=new Set([jt,Mn,Ts,Oi,La,Na]),M=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],b=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,G=null,K=null,C=null,X=null;this._outputColorSpace=mt;let $=0,V=0,ie=null,q=-1,W=null,ne=new rt,be=new rt,Fe=null,J=new De(0),me=0,Se=t.width,k=t.height,ee=1,ge=null,ke=null,D=new rt(0,0,Se,k),Me=new rt(0,0,Se,k),Ie=!1,ve=new hi,we=new fa,Ye=!1,tt=!1,Ve=new Ge,vt=new U,$e=new rt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function sn(){return ie===null?ee:1}let L=n;function rn(v,I){return t.getContext(v,I)}let ht,ut,pe,Mt,Ne,Be,A,x,B,se,te,oe,de,Z,j,ce,R,Q,Y,he,ae,le,Pe;try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){let I="webgl2";if(L=rn(I,v),L===null)throw rn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(v){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ue("WebGLRenderer: "+v.message),v}function We(){ht=new ug(L),ht.init(),ae=new Y0(L,ht),ut=new eg(L,ht,e,ae),pe=new X0(L,ht),ut.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),K=L.createFramebuffer(),C=L.createFramebuffer(),X=L.createFramebuffer(),Mt=new pg(L),Ne=new P0,Be=new q0(L,ht,pe,Ne,ut,ae,Mt),A=new hg(P),x=new gf(L),le=new jm(L,x),B=new dg(L,x,Mt,le),se=new gg(L,B,x,le,Mt),Q=new mg(L,ut,Be),j=new tg(Ne),te=new I0(P,A,ht,ut,le,j),oe=new $0(P,Ne),de=new N0,Z=new z0(ht),R=new $m(P,A,pe,se,g,l),ce=new W0(P,se,ut),Pe=new j0(L,Mt,ut,pe),Y=new Qm(L,ht,Mt),he=new fg(L,ht,Mt),Mt.programs=te.programs,P.capabilities=ut,P.extensions=ht,P.properties=Ne,P.renderLists=de,P.shadowMap=ce,P.state=pe,P.info=Mt}y!==jt&&(F=new xg(y,t.width,t.height,o,i,r));let re=new tc(P,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=ht.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ht.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(Se,k,!1))},this.getSize=function(v){return v.set(Se,k)},this.setSize=function(v,I,H=!0){if(re.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,k=I,t.width=Math.floor(v*ee),t.height=Math.floor(I*ee),H===!0&&(t.style.width=v+"px",t.style.height=I+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Se*ee,k*ee).floor()},this.setDrawingBufferSize=function(v,I,H){Se=v,k=I,ee=H,t.width=Math.floor(v*H),t.height=Math.floor(I*H),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(y===jt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ne)},this.getViewport=function(v){return v.copy(D)},this.setViewport=function(v,I,H,O){v.isVector4?D.set(v.x,v.y,v.z,v.w):D.set(v,I,H,O),pe.viewport(ne.copy(D).multiplyScalar(sn()).round())},this.getScissor=function(v){return v.copy(Me)},this.setScissor=function(v,I,H,O){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,I,H,O),pe.scissor(be.copy(Me).multiplyScalar(sn()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(v){pe.setScissorTest(Ie=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){ke=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,H=!0){let O=0;if(v){let z=!1;if(ie!==null){let fe=ie.texture.format;z=m.has(fe)}if(z){let fe=ie.texture.type,Te=p.has(fe),ue=R.getClearColor(),ye=R.getClearAlpha(),Re=ue.r,ze=ue.g,je=ue.b;Te?(M[0]=Re,M[1]=ze,M[2]=je,M[3]=ye,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Re,w[1]=ze,w[2]=je,w[3]=ye,L.clearBufferiv(L.COLOR,0,w))}else O|=L.COLOR_BUFFER_BIT}I&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),R.dispose(),de.dispose(),Z.dispose(),Be.dispose(),Ne.dispose(),A.dispose(),se.dispose(),B.dispose(),le.dispose(),Pe.dispose(),te.dispose(),re.dispose(),re.removeEventListener("sessionstart",Dc),re.removeEventListener("sessionend",Uc),mi.stop()};function Le(v){v.preventDefault(),Hs("WebGLRenderer: Context Lost."),N=!0}function He(){Hs("WebGLRenderer: Context Restored."),N=!1;let v=Mt.autoReset,I=ce.enabled,H=ce.autoUpdate,O=ce.needsUpdate,z=ce.type;We(),Mt.autoReset=v,ce.enabled=I,ce.autoUpdate=H,ce.needsUpdate=O,ce.type=z}function _e(v){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function st(v){let I=v.target;I.removeEventListener("dispose",st),Et(I)}function Et(v){ti(v),Ne.remove(v)}function ti(v){let I=Ne.get(v).programs;I!==void 0&&(I.forEach(function(H){te.releaseProgram(H)}),v.isShaderMaterial&&te.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,H,O,z,fe){I===null&&(I=At);let Te=z.isMesh&&z.matrixWorld.determinantAffine()<0,ue=cd(v,I,H,O,z);pe.setMaterial(O,Te);let ye=H.index,Re=1;if(O.wireframe===!0){if(ye=B.getWireframeAttribute(H),ye===void 0)return;Re=2}let ze=H.drawRange,je=H.attributes.position,Ae=ze.start*Re,Qe=(ze.start+ze.count)*Re;fe!==null&&(Ae=Math.max(Ae,fe.start*Re),Qe=Math.min(Qe,(fe.start+fe.count)*Re)),ye!==null?(Ae=Math.max(Ae,0),Qe=Math.min(Qe,ye.count)):je!=null&&(Ae=Math.max(Ae,0),Qe=Math.min(Qe,je.count));let xt=Qe-Ae;if(xt<0||xt===1/0)return;le.setup(z,O,ue,H,ye);let lt,ot=Y;if(ye!==null&&(lt=x.get(ye),ot=he,ot.setIndex(lt)),z.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*sn()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(z.isLine){let Ft=O.linewidth;Ft===void 0&&(Ft=1),pe.setLineWidth(Ft*sn()),z.isLineSegments?ot.setMode(L.LINES):z.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else z.isPoints?ot.setMode(L.POINTS):z.isSprite&&ot.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ft=z._multiDrawStarts,Ee=z._multiDrawCounts,Vt=z._multiDrawCount,nt=ye?x.get(ye).bytesPerElement:1,gi=Ne.get(O).currentProgram.getUniforms();for(let Ot=0;Ot<Vt;Ot++)gi.setValue(L,"_gl_DrawID",Ot),ot.render(Ft[Ot]/nt,Ee[Ot])}else if(z.isInstancedMesh)ot.renderInstances(Ae,xt,z.count);else if(H.isInstancedBufferGeometry){let Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,Ft);ot.renderInstances(Ae,xt,Ee)}else ot.render(Ae,xt)};function Nc(v,I,H,O){G!==null&&v.isNodeMaterial&&G.setObject(O,v),Ye===!0&&j.setState(v,H,!1),v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,Cs(v,I,O),v.side=Rn,v.needsUpdate=!0,Cs(v,I,O),v.side=hn):Cs(v,I,O)}this.compile=function(v,I,H=null){H===null&&(H=v),G!==null&&G.renderStart(v,I,H),T=Z.get(H),T.init(I),b.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),tt=this.localClippingEnabled,Ye=j.init(this.clippingPlanes,tt),Ye===!0&&j.setGlobalState(this.clippingPlanes,I),G!==null&&ce.render(T.state.shadowsArray,H,I);let O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){let ue=fe[Te];Nc(ue,H,I,z),O.add(ue)}else Nc(fe,H,I,z),O.add(fe)}),T=b.pop(),G!==null&&G.renderEnd(),O},this.compileAsync=function(v,I,H=null){let O=this.compile(v,I,H);return new Promise(z=>{function fe(){if(O.forEach(function(Te){let ye=Ne.get(Te).currentProgram;(ye===void 0||ye.isReady())&&O.delete(Te)}),O.size===0){z(v);return}setTimeout(fe,10)}ht.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ro=null;function od(v){Ro&&Ro(v)}function Dc(){mi.stop()}function Uc(){mi.start()}let mi=new Hu;mi.setAnimationLoop(od),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(v){Ro=v,re.setAnimationLoop(v),v===null?mi.stop():mi.start()},re.addEventListener("sessionstart",Dc),re.addEventListener("sessionend",Uc),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(v,I);let H=re.enabled===!0&&re.isPresenting===!0,O=F!==null&&(ie===null||H)&&F.begin(P,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,I,ie),T=Z.get(v,b.length),T.init(I),T.state.textureUnits=Be.getTextureUnits(),b.push(T),Ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?we.setFromArrayCamera(I):ve.setFromProjectionMatrix(Ve,ln,I.reversedDepth),tt=this.localClippingEnabled,Ye=j.init(this.clippingPlanes,tt),E=de.get(v,_.length),E.init(),_.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Te=P.xr.getDepthSensingMesh();Te!==null&&Co(Te,I,-1/0,P.sortObjects)}Co(v,I,0,P.sortObjects),E.finish(),G!==null&&G.updateLights(T.state.lightsArray),P.sortObjects===!0&&E.sort(ge,ke),Kt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Kt&&R.addToRenderList(E,v),this.info.autoReset===!0&&this.info.reset(),Ye===!0&&j.beginShadows();let z=T.state.shadowsArray;if(ce.render(z,v,I),Ye===!0&&j.endShadows(),(O&&F.hasRenderPass())===!1){let Te=E.opaque,ue=E.transmissive;if(T.setupLights(),I.isArrayCamera){let ye=I.cameras;if(ue.length>0)for(let Re=0,ze=ye.length;Re<ze;Re++){let je=ye[Re];Oc(Te,ue,v,je)}Kt&&R.render(v);for(let Re=0,ze=ye.length;Re<ze;Re++){let je=ye[Re];Fc(E,v,je,je.viewport)}}else ue.length>0&&Oc(Te,ue,v,I),Kt&&R.render(v),Fc(E,v,I)}ie!==null&&V===0&&(Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie)),O&&F.end(P),v.isScene===!0&&v.onAfterRender(P,v,I),le.resetDefaultState(),q=-1,W=null,b.pop(),b.length>0?(T=b[b.length-1],Be.setTextureUnits(T.state.textureUnits),Ye===!0&&j.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,G!==null&&G.renderEnd()};function Co(v,I,H,O){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let Te=I.isArrayCamera?we:ve;if(!v.frustumCulled||v.intersectsFrustum(Te)){O&&$e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ve);let ue=se.update(v),ye=v.material;ye.visible&&E.push(v,ue,ye,H,$e.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let Te=I.isArrayCamera?we:ve;if(!v.frustumCulled||v.intersectsFrustum(Te)){let ue=se.update(v),ye=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),$e.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),$e.copy(ue.boundingSphere.center)),$e.applyMatrix4(v.matrixWorld).applyMatrix4(Ve)),Array.isArray(ye)){let Re=ue.groups;for(let ze=0,je=Re.length;ze<je;ze++){let Ae=Re[ze],Qe=ye[Ae.materialIndex];Qe&&Qe.visible&&E.push(v,ue,Qe,H,$e.z,Ae,I)}}else ye.visible&&E.push(v,ue,ye,H,$e.z,null,I)}}}let fe=v.children;for(let Te=0,ue=fe.length;Te<ue;Te++)Co(fe[Te],I,H,O)}function Fc(v,I,H,O){let{opaque:z,transmissive:fe,transparent:Te}=v;T.setupLightsView(H),Ye===!0&&j.setGlobalState(P.clippingPlanes,H),O&&pe.viewport(ne.copy(O)),z.length>0&&Rr(z,I,H),fe.length>0&&Rr(fe,I,H),Te.length>0&&Rr(Te,I,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Oc(v,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Ae=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new tn(1,1,{generateMipmaps:!0,type:Ae?Sn:jt,minFilter:un,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let fe=T.state.transmissionRenderTarget[O.id],Te=O.viewport||ne;fe.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);let ue=P.getRenderTarget(),ye=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(J),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Kt&&R.render(H);let ze=P.toneMapping;P.toneMapping=Cn;let je=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Ye===!0&&j.setGlobalState(P.clippingPlanes,O),Rr(v,H,O),Be.updateMultisampleRenderTarget(fe),Be.updateRenderTargetMipmap(fe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Qe=0,xt=I.length;Qe<xt;Qe++){let lt=I[Qe],{object:ot,geometry:Ft,material:Ee,group:Vt}=lt;if(Ee.side===hn&&ot.layers.test(O.layers)){let nt=Ee.side;Ee.side=Yt,Ee.needsUpdate=!0,Bc(ot,H,O,Ft,Ee,Vt),Ee.side=nt,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(fe),Be.updateRenderTargetMipmap(fe))}P.setRenderTarget(ue,ye,Re),P.setClearColor(J,me),je!==void 0&&(O.viewport=je),P.toneMapping=ze}function Rr(v,I,H){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,fe=v.length;z<fe;z++){let Te=v[z],{object:ue,geometry:ye,group:Re}=Te,ze=Te.material;ze.allowOverride===!0&&O!==null&&(ze=O),ue.layers.test(H.layers)&&Bc(ue,I,H,ye,ze,Re)}}function Bc(v,I,H,O,z,fe){G!==null&&z.isNodeMaterial&&G.setObject(v,z),v.onBeforeRender(P,I,H,O,z,fe),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,I,H,O,v,fe),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,P.renderBufferDirect(H,I,O,z,v,fe),z.side=Rn,z.needsUpdate=!0,P.renderBufferDirect(H,I,O,z,v,fe),z.side=hn):P.renderBufferDirect(H,I,O,z,v,fe),v.onAfterRender(P,I,H,O,z,fe)}function zc(v){let I=0;for(let H of v)H.texture!==null&&I++;return I}function Cs(v,I,H){I.isScene!==!0&&(I=At);let O=Ne.get(v),z=T.state.lights,fe=T.state.shadowsArray,Te=z.state.version,ue=te.getParameters(v,z.state,fe,I,H,T.state.lightProbeGridArray),ye=te.getProgramCacheKey(ue),Re=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let ze=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=A.get(v.envMap||O.environment,ze),O.envMapRotation=O.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",st),Re=new Map,O.programs=Re,O.programVariants=new Map);let je=Re.get(ye);if(je!==void 0){if(O.currentProgram===je&&O.lightsStateVersion===Te)return Gc(v,ue),je}else ue.uniforms=te.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,H,ue),v.onBeforeCompile(ue,P),je=te.acquireProgram(ue,ye),Re.set(ye,je),O.uniforms=ue.uniforms;let Ae=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=j.uniform),Gc(v,ue),O.needsLights=ud(v),O.lightsStateVersion=Te,O.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.sunLights.value=z.state.sun,Ae.sunLightShadows.value=z.state.sunShadow,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.sunShadowMatrix.value=z.state.sunShadowMatrix,Ae.sunShadowCascade.value=z.state.sunShadowCascade,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=zc(T.state.lightProbeGridArray),O.currentProgram=je,O.uniformsList=null,je}function ld(v,I,H,O,z){let fe=Ne.get(v),Te=fe.currentProgram.id+","+O+","+z,ue=fe.programVariants.get(Te);return ue===void 0?(ue=Cs(v,I,H),fe.programVariants.set(Te,ue)):(fe.currentProgram=ue,fe.uniformsList=null,fe.outputColorSpace=O,fe.toneMapping=z),ue}function kc(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Es.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Gc(v,I){let H=Ne.get(v);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function cd(v,I,H,O,z){I.isScene!==!0&&(I=At),Be.resetTextureUnits();let fe=I.fog,Te=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ue=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ke.workingColorSpace,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Re=A.get(O.envMap||Te,ye),ze=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,je=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,xt=!!H.morphAttributes.color,lt=Cn;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=P.toneMapping);let ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ft=ot!==void 0?ot.length:0,Ee=Ne.get(O),Vt=T.state.lights;if(Ye===!0&&(tt===!0||v!==W)){let ft=v===W&&O.id===q;j.setState(O,v,ft)}let nt=!1,gi=!1;O.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Vt.state.version||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Re||O.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==j.numPlanes||Ee.numIntersection!==j.numIntersection)||Ee.vertexAlphas!==ze||Ee.vertexTangents!==je||Ee.morphTargets!==Ae||Ee.morphNormals!==Qe||Ee.morphColors!==xt||Ee.morphTargetsCount!==Ft||Ee.numLightProbeGrids!==zc(T.state.lightProbeGridArray)?nt=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==lt)&&(gi=!0):(nt=!0,Ee.__version=O.version);let Ot=Ee.currentProgram;(nt===!0||gi===!0)&&(Ot=gi===!0?ld(O,I,z,ue,lt):Cs(O,I,z),G&&O.isNodeMaterial&&G.onUpdateProgram(O,Ot,Ee));let Cr=!1,ni=!1,_i=!1,et=Ot.getUniforms(),Nt=Ee.uniforms;if(pe.useProgram(Ot.program)&&(Cr=!0,ni=!0,_i=!0),O.id!==q&&(q=O.id,ni=!0),Cr||W!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),et.setValue(L,"projectionMatrix",v.projectionMatrix),et.setValue(L,"viewMatrix",v.matrixWorldInverse);let wt=et.map.cameraPosition;wt!==void 0&&wt.setValue(L,vt.setFromMatrixPosition(v.matrixWorld)),ut.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),W!==v&&(W=v,ni=!0,_i=!0)}if(Ee.needsLights&&(Vt.state.sunShadowMap.length>0&&et.setValue(L,"sunShadowMap",Vt.state.sunShadowMap,Be),Vt.state.directionalShadowMap.length>0&&et.setValue(L,"directionalShadowMap",Vt.state.directionalShadowMap,Be),Vt.state.spotShadowMap.length>0&&et.setValue(L,"spotShadowMap",Vt.state.spotShadowMap,Be),Vt.state.pointShadowMap.length>0&&et.setValue(L,"pointShadowMap",Vt.state.pointShadowMap,Be)),z.isSkinnedMesh){et.setOptional(L,z,"bindMatrix"),et.setOptional(L,z,"bindMatrixInverse");let ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),et.setValue(L,"boneTexture",ft.boneTexture,Be))}z.isBatchedMesh&&(et.setOptional(L,z,"batchingTexture"),et.setValue(L,"batchingTexture",z._matricesTexture,Be),et.setOptional(L,z,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",z._indirectTexture,Be),et.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",z._colorsTexture,Be));let pn=H.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Q.update(z,H,Ot),(ni||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,et.setValue(L,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Nt.envMapIntensity.value=I.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=e_()),ni){if(et.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&hd(Nt,_i),fe&&O.fog===!0&&oe.refreshFogUniforms(Nt,fe),oe.refreshMaterialUniforms(Nt,O,ee,k,T.state.transmissionRenderTarget[v.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let ft=S,wt=0;for(let Dn of T.state.lightProbeGridArray)Dn.texture!==null&&(ft.textures[wt]=Dn.texture,ft.min[wt]=Dn.boundingBox.min,ft.max[wt]=Dn.boundingBox.max,ft.resolution[wt]=Dn.resolution,wt++);for(let Dn in ft)ft[Dn].length=wt;Nt.probesSH.value=ft.textures,Nt.probesMin.value=ft.min,Nt.probesMax.value=ft.max,Nt.probesResolution.value=ft.resolution}Es.upload(L,kc(Ee),Nt,Be)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Es.upload(L,kc(Ee),Nt,Be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(L,"center",z.center),et.setValue(L,"modelViewMatrix",z.modelViewMatrix),et.setValue(L,"normalMatrix",z.normalMatrix),et.setValue(L,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let ft=O.uniformsGroups;for(let wt=0,Dn=ft.length;wt<Dn;wt++){let Vc=ft[wt];Pe.update(Vc,Ot),Pe.bind(Vc,Ot)}}return Ot}function hd(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function ud(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,I,H){let O=Ne.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ne.get(v.texture).__webglTexture=I,Ne.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let H=Ne.get(v);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,H=0){ie=v,$=I,V=H;let O=null,z=!1,fe=!1;if(v){let ue=Ne.get(v);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),ne.copy(v.viewport),be.copy(v.scissor),Fe=v.scissorTest,pe.viewport(ne),pe.scissor(be),pe.setScissorTest(Fe),q=-1;return}else if(ue.__webglFramebuffer===void 0)Be.setupRenderTarget(v);else if(ue.__hasExternalTextures)Be.rebindTextures(v,Ne.get(v.texture).__webglTexture,Ne.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ze=v.depthTexture;if(ue.__boundDepthTexture!==ze){if(ze!==null&&Ne.has(ze)&&(v.width!==ze.image.width||v.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(v)}}let ye=v.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Re=Ne.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?O=Re[I][H]:O=Re[I],z=!0):v.samples>0&&Be.useMultisampledRTT(v)===!1?O=Ne.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[H]:O=Re,ne.copy(v.viewport),be.copy(v.scissor),Fe=v.scissorTest}else ne.copy(D).multiplyScalar(ee).floor(),be.copy(Me).multiplyScalar(ee).floor(),Fe=Ie;if(H!==0&&(O=K),pe.bindFramebuffer(L.FRAMEBUFFER,O)&&pe.drawBuffers(v,O),pe.viewport(ne),pe.scissor(be),pe.setScissorTest(Fe),z){let ue=Ne.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,H)}else if(fe){let ue=I;for(let ye=0;ye<v.textures.length;ye++){let Re=Ne.get(v.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,Re.__webglTexture,H,ue)}}else if(v!==null&&H!==0){let ue=Ne.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,H)}q=-1};function Hc(v){let I=Ne.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=ut.textureFormatReadable(v.format),I.__typeReadable=ut.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,H,O,z,fe,Te,ue=0){if(!(v&&v.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(ye=ye[Te],Array.isArray(ye)&&(ye=ye[0])),ye){pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{let Re=v.textures[ue],ze=Re.format,je=Re.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let Ae=Hc(Re);if(Ae.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-O&&H>=0&&H<=v.height-z&&L.readPixels(I,H,O,z,ae.convert(ze),ae.convert(je),fe)}finally{let Re=ie!==null?Ne.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,I,H,O,z,fe,Te,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(ye=ye[Te],Array.isArray(ye)&&(ye=ye[0])),ye)if(I>=0&&I<=v.width-O&&H>=0&&H<=v.height-z){pe.bindFramebuffer(L.FRAMEBUFFER,ye);let Re=v.textures[ue],ze=Re.format,je=Re.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let Ae=Hc(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(I,H,O,z,ae.convert(ze),ae.convert(je),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let xt=ie!==null?Ne.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,xt);let lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fu(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Qe),L.deleteSync(lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,H=0){let O=Math.pow(2,-H),z=Math.floor(v.image.width*O),fe=Math.floor(v.image.height*O),Te=I!==null?I.x:0,ue=I!==null?I.y:0;Be.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Te,ue,z,fe),pe.unbindTexture()},this.copyTextureToTexture=function(v,I,H=null,O=null,z=0,fe=0){let Te,ue,ye,Re,ze,je,Ae,Qe,xt,lt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(H!==null)Te=H.max.x-H.min.x,ue=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,ze=H.min.y,je=H.isBox3?H.min.z:0;else{let et=Math.pow(2,-z);Te=Math.floor(lt.width*et),ue=Math.floor(lt.height*et),v.isDataArrayTexture?ye=lt.depth:v.isData3DTexture?ye=Math.floor(lt.depth*et):ye=1,Re=0,ze=0,je=0}O!==null?(Ae=O.x,Qe=O.y,xt=O.z):(Ae=0,Qe=0,xt=0);let ot=ae.convert(I.format),Ft=ae.convert(I.type),Ee;I.isData3DTexture?(Be.setTexture3D(I,0),Ee=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),Ee=L.TEXTURE_2D),pe.activeTexture(L.TEXTURE0),pe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Vt=pe.getParameter(L.UNPACK_ROW_LENGTH),nt=pe.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=pe.getParameter(L.UNPACK_SKIP_PIXELS),Ot=pe.getParameter(L.UNPACK_SKIP_ROWS),Cr=pe.getParameter(L.UNPACK_SKIP_IMAGES);pe.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),pe.pixelStorei(L.UNPACK_SKIP_ROWS,ze),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,je);let ni=v.isDataArrayTexture||v.isData3DTexture,_i=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let et=Ne.get(v),Nt=Ne.get(I),pn=Ne.get(et.__renderTarget),ft=Ne.get(Nt.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let wt=0;wt<ye;wt++)ni&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(v).__webglTexture,z,je+wt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(I).__webglTexture,fe,xt+wt)),L.blitFramebuffer(Re,ze,Re+Te,ze+ue,Ae,Qe,Ae+Te,Qe+ue,L.DEPTH_BUFFER_BIT,L.NEAREST);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Ne.has(v)){let et=Ne.get(v),Nt=Ne.get(I);pe.bindFramebuffer(L.READ_FRAMEBUFFER,C),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let pn=0;pn<ye;pn++)ni?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.__webglTexture,z,je+pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,et.__webglTexture,z),_i?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,fe,xt+pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,fe),z!==0?L.blitFramebuffer(Re,ze,Re+Te,ze+ue,Ae,Qe,Ae+Te,Qe+ue,L.COLOR_BUFFER_BIT,L.NEAREST):_i?L.copyTexSubImage3D(Ee,fe,Ae,Qe,xt+pn,Re,ze,Te,ue):L.copyTexSubImage2D(Ee,fe,Ae,Qe,Re,ze,Te,ue);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _i?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ee,fe,Ae,Qe,xt,Te,ue,ye,ot,Ft,lt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,fe,Ae,Qe,xt,Te,ue,ye,ot,lt.data):L.texSubImage3D(Ee,fe,Ae,Qe,xt,Te,ue,ye,ot,Ft,lt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ae,Qe,Te,ue,ot,Ft,lt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ae,Qe,lt.width,lt.height,ot,lt.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ae,Qe,Te,ue,ot,Ft,lt);pe.pixelStorei(L.UNPACK_ROW_LENGTH,Vt),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),pe.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,Cr),fe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(v){Ne.get(v).__webglFramebuffer===void 0&&Be.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Be.setTextureCube(v,0):v.isData3DTexture?Be.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Be.setTexture2DArray(v,0):Be.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){$=0,V=0,ie=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var nc=(s,e,t)=>Math.max(e,Math.min(t,s));function n_(s,e,t){let n=t.x-e.x,i=t.y-e.y,r=nc(((s.x-e.x)*n+(s.y-e.y)*i)/(n*n+i*i||1),0,1);return Math.hypot(s.x-e.x-r*n,s.y-e.y-r*i)}function Qu(s,e,t){let n=[],i=s.filter(r=>r.previous&&r.previous.visible!==!1).map(r=>({id:r.id,...r.previous,r:r.r}));for(let r of s){let a=r.r,o=4;if(!(a*2+o*2<e&&a*2+o*2<t)){n.push({...r,visible:!1});continue}let c=E=>({x:nc(E.x,a+o,e-a-o),y:nc(E.y,a+o,t-a-o)}),h=c(r),u=r.previous?.visible!==!1?r.previous:null,d=u?c(u):h,f=n.filter(E=>E.visible).concat(i.filter(E=>E.id!==r.id&&!n.some(T=>T.id===E.id))),g=E=>f.every(T=>Math.hypot(E.x-T.x,E.y-T.y)>=a+T.r+o),y=g(d),m=E=>g(E)&&(!y||f.every(T=>n_(T,d,E)>=a+T.r+o)),p=Math.hypot(h.x-d.x,h.y-d.y),M=r.maxStep??p,w=p>M?{x:d.x+(h.x-d.x)*M/p,y:d.y+(h.y-d.y)*M/p}:h,S=m(w)?w:null;if(!S&&y){let E=Math.atan2(h.y-d.y,h.x-d.x);for(let T of[.45,-.45,.9,-.9,1.35,-1.35]){let _=c({x:d.x+Math.cos(E+T)*Math.min(M,p),y:d.y+Math.sin(E+T)*Math.min(M,p)});if(m(_)){S=_;break}}S=S||d}if(!S){let E=[h];for(let T=1;T<=24;T++)for(let _=0;_<16;_++){let b=_*Math.PI/8;E.push(c({x:h.x+Math.cos(b)*T*12,y:h.y+Math.sin(b)*T*12}))}S=E.find(g)}n.push({...r,...S||h,visible:!!S})}return n}function ic(s,e){if(e===Ll)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===As||e===Sr){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===As)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ed(s){let e=new Map,t=new Map,n=s.clone();return td(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function td(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)td(s.children[n],e.children[n],t)}var Ao=class extends wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new dc(t)}),this.register(function(t){return new Mc(t)}),this.register(function(t){return new Sc(t)}),this.register(function(t){return new bc(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new _c(t)}),this.register(function(t){return new cc(t)}),this.register(function(t){return new xc(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new vc(t)}),this.register(function(t){return new yc(t)}),this.register(function(t){return new oc(t)}),this.register(function(t){return new Eo(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Eo(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tc(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=jn.extractUrlBase(e);a=jn.resolveURL(c,this.path)}else a=jn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _s(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ad){try{a[Ze.KHR_BINARY_GLTF]=new Ac(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new lc;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ec(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new wc;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new Rc;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function i_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function pt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},oc=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Xt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Li(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new dr(h),c.distance=u;break;case"spot":c=new ur(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Nn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},lc=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let i=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}},cc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},hc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(r,r)}return Promise.all(i)}},uc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},dc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},fc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},pc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,mt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},mc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},gc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Xt),Promise.all(i)}},_c=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Xt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,mt)),Promise.all(i)}},yc=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},vc=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pt(this.parser,e,this.name)!==null?qt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Mc=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Sc=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},bc=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Eo=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Tc=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let y=new Ge,m=new U,p=new Ct,M=new U(1,1,1),w=new Js(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&M.fromBufferAttribute(l.SCALE,E),w.setMatrixAt(E,y.compose(m,p,M));let S=null;for(let E in l)if(E==="_COLOR_0"){let T=l[E];w.instanceColor=new Wn(T.array,T.itemSize,T.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(S===null){let _=w.geometry;S=new Gt,S.name=_.name;for(let b in _.attributes)S.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)S.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&S.setIndex(_.index),S.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)S.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(S.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(S.boundingSphere=_.boundingSphere.clone()),S.drawRange.start=_.drawRange.start,S.drawRange.count=_.drawRange.count,S.userData=Object.assign({},_.userData),w.geometry=S}let T=l[E];S.setAttribute(E,new Wn(T.array,T.itemSize,T.normalized))}dt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ad="glTF",wr=12,nd={JSON:1313821514,BIN:5130562},Ac=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-wr,r=new DataView(e,wr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===nd.JSON){let c=new Uint8Array(e,wr+a,o);this.content=n.decode(c)}else if(l===nd.BIN){let c=wr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ec=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ic[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ic[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Rs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}u(f)},o,c,Xt,d)})})}},wc=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Rc=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},wo=class extends En{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,M=1-m,w=p-d+u;for(let S=0;S!==o;S++){let E=a[y+S+o],T=a[y+S+l]*h,_=a[g+S+o],b=a[g+S]*h;r[S]=M*E+w*T+m*_+p*b}return r}},s_=new Ct,Cc=class extends wo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return s_.fromArray(r).normalize().toArray(r),r}},fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},id={9728:_t,9729:St,9984:Ia,9985:bs,9986:Fi,9987:un},sd={33071:on,33648:is,10497:ci},sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},r_={CUBICSPLINE:void 0,LINEAR:Ei,STEP:Ai},rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),s.DefaultMaterial}function zi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Nn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function l_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c_(s){let e,t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ac(t.attributes):e=s.indices+":"+ac(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ac(s.targets[n]);return e}function ac(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function h_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var u_=new Ge,Lc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new lr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _s(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return zi(r,o,i),Nn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(jn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=sc[i.type],o=Rs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ut(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=sc[i.type],c=Rs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(M);w||(y=new c(o,p*f,i.count*f/h),w=new cs(y,f/h),t.cache.add(M,w)),m=new hs(w,l,d%f/h,g)}else o===null?y=new c(i.count*l):y=new c(o,d,i.count*l),m=new Ut(y,l,g);if(i.sparse!==void 0){let p=sc.SCALAR,M=Rs[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,E=new M(a[1],w,i.sparse.count*p),T=new c(a[2],S,i.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,b=E.length;_<b;_++){let F=E[_];if(m.setX(F,T[_*l]),l>=2&&m.setY(F,T[_*l+1]),l>=3&&m.setZ(F,T[_*l+2]),l>=4&&m.setW(F,T[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=id[d.magFilter]||St,h.minFilter=id[d.minFilter]||un,h.wrapS=sd[d.wrapS]||ci,h.wrapT=sd[d.wrapT]||ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_t&&h.minFilter!==St,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let y=f;t.isImageBitmapLoader===!0&&(y=function(m){let p=new It(m);p.needsUpdate=!0,f(p)}),t.load(jn.resolveURL(d,r.path),y,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),Nn(d,a),d.userData.mimeType=a.mimeType||h_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ps,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fs,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||rc.OPAQUE;if(h===rc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==cn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==cn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==cn){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==cn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Nn(u,r),t.associations.set(u,{materials:e}),r.extensions&&zi(i,u,r),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=rd(new Gt,c,t),c.mode===fn.TRIANGLE_STRIP?d=d.then(f=>ic(f,Sr)):c.mode===fn.TRIANGLE_FAN&&(d=d.then(f=>ic(f,As))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?a_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,M=c[f];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,S=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");w&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&S?new Ks(y,M):new Pt(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===fn.LINES)p=new $s(y,M);else if(m.mode===fn.LINE_STRIP)p=new Ci(y,M);else if(m.mode===fn.LINE_LOOP)p=new js(y,M);else if(m.mode===fn.POINTS)p=new Qs(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&l_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Nn(p,r),m.extensions&&zi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&zi(i,u[0],r),u[0];let d=new ct;r.extensions&&zi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(xo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $n(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Nn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zs(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let w=0,S=d.length;w<S;w++){let E=d[w],T=f[w],_=g[w],b=y[w],F=m[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let P=n._createAnimationTracks(E,T,_,b,F);if(P)for(let N=0;N<P.length;N++)p.push(P[N])}let M=new Ii(r,void 0,p);return Nn(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,u_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new us:c.length>1?h=new ct:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Nn(h,r),r.extensions&&zi(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ct;n.name&&(r.name=i.createUniqueName(n.name)),Nn(r,n),n.extensions&&zi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(ed(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Jt||d instanceof It)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}fi[r.path]===fi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(fi[r.path]){case fi.weights:h=Kn;break;case fi.rotation:h=Zn;break;case fi.translation:case fi.scale:h=ui;break;default:n.itemSize===1?h=Kn:h=ui;break}let u=i.interpolation!==void 0?r_[i.interpolation]:Ei,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let y=new h(l[f]+"."+fi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Zn?Cc:wo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function d_(s,e,t){let n=e.attributes,i=new kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let h=Pc(Rs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=Pc(Rs[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Zt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function rd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Ic[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Nn(s,e),d_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?o_(s,e.targets,t):s})}var pi=(s,e,t)=>Math.max(e,Math.min(t,s)),Lt=(s,e)=>s+Math.random()*(e-s),f_=new Ao;window.createGardenWildlife=async function(s){let e;try{e=new So({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return null}e.setPixelRatio(Math.min(devicePixelRatio,1.5)),e.setClearColor(0,0),e.outputColorSpace=mt,e.domElement.setAttribute("aria-hidden","true"),s.append(e.domElement);let t=new Xs,n=new $n(0,1,1,0,.1,2e3);n.position.z=1e3,t.add(new cr(16774623,6451271,2.1));let i=new Li(16773331,2.5);i.position.set(-300,600,900),t.add(i);let r=1,a=1,o=0,l=!0,c="gentle",h=0,u=0,d=0,f=!1,g=[],y=[],m=[],p=new Map,M=new kt,w=new U,S=new U;function E(){let k=s.getBoundingClientRect();r=Math.max(1,k.width),a=Math.max(1,k.height);let ee=s.parentElement?.querySelector(".welcome-extra")?.getBoundingClientRect();o=Math.max(a*.64,(ee?.bottom||k.top+a*.6)-k.top+36),o=Math.min(o,a-160),e.setSize(r,a,!1),n.right=r,n.top=a,n.updateProjectionMatrix(),J(0)}let T=new ResizeObserver(E);T.observe(s);let _=new cn({color:2373660,transparent:!0,opacity:.16,depthWrite:!1});function b(){let k=new Pt(new ir(1,32),_.clone());return t.add(k),k}function F(k,ee){let ge=k.clips[ee]||k.clips.idle;if(!ge)return;let ke=k.mixer.clipAction(ge);ke!==k.action&&(ke.reset().play(),k.action&&ke.crossFadeFrom(k.action,.5,!1),k.action=ke),k.state=ee,k.stateTime=0}function P(k){if(k.state==="walk"||k.state==="fly"){let ee=k.kind==="dog"?["idle","idle"]:k.kind==="owl"?["idle","sit"]:k.kind==="cat"?["idle","idle_alt","eat","sit","sleep","play","roll"]:["idle","idle_alt","eat","sit","sleep","play"],ge=ee[Math.floor(Math.random()*ee.length)];F(k,ge==="play"?"jump":ge==="roll"?"sleep":ge),k.state=ge,k.duration=ge==="sleep"?Lt(16,28):ge==="roll"?5:ge==="play"?Lt(2,3.8):Lt(5,12)}else{k.start={...k.pos};let ee=pi(k.pos.x+Lt(-.23,.23),.06,.94),ge=pi(k.pos.y+Lt(-.42,.42),.08,.94);Math.abs(ee-k.pos.x)<.08&&(ee=pi(ee+.14,.06,.94)),k.target={x:ee,y:ge},k.control={x:(ee+k.pos.x)/2+Lt(-.07,.07),y:(ge+k.pos.y)/2+Lt(-.13,.13)},k.duration=Lt(7,12)*(c==="gentle"?1.35:1),F(k,k.kind==="owl"&&Math.random()<.7?"fly":"walk")}}async function N(k,ee,ge,ke){try{let D="wildlife/animal_"+k+".glb",Me=await f_.loadAsync(window.MindGardenAssets?.[D]||D);if(k==="dog"&&Me.animations.length===1){let $e=Me.animations[0];Me.animations=[gs.subclip($e,"idle",0,29,24),gs.subclip($e,"walk",90,119,24)]}let Ie=Me.scene,ve=new kt().setFromObject(Ie),we=ve.max.y-ve.min.y,Ye=new ct,tt=new ct;Ye.add(tt);let Ve=new ct;Ve.position.y=.35,tt.add(Ve),Ve.add(Ie),t.add(Ye),tt.rotation.x=.12,Ie.position.y-=ve.min.y,Ie.scale.setScalar(1/we),Ie.position.y=Ie.position.y/we-.35;let vt={kind:k,group:Ye,tilt:tt,rollPivot:Ve,model:Ie,shadow:b(),mixer:new pr(Ie),clips:Object.fromEntries(Me.animations.map($e=>[$e.name,$e])),pos:{x:ee,y:ge},size:ke,heading:Lt(-.7,.7),stateTime:0,duration:Lt(3,10),state:"idle"};return g.push(vt),F(vt,k==="fox"?"sleep":k==="cat"?"sit":"idle"),vt.mixer.update(Lt(.1,.5)),vt}catch{return console.warn("Garden animal unavailable:",k),null}}let G=new ct,K=new ct,C=new ct,X=[];t.add(G),G.add(K),K.add(C),W(14135682,0,.38,0,.25,.27,.36,K),C.position.set(0,.63,.27),W(15257764,0,0,0,.13,.15,.13,C),W(12409157,0,.16,0,.055,.09,.09,C),W(14332753,0,-.02,.17,.06,.04,.09,C),W(3159082,.1,.035,.08,.018,.018,.018,C),W(3159082,-.1,.035,.08,.018,.018,.018,C),W(8874321,0,.5,-.35,.1,.23,.12,K);for(let k of[-1,1]){W(11766624,k*.23,.38,0,.055,.17,.22,K);let ee=new ct;ee.position.set(k*.12,.18,0),G.add(ee),W(11832392,0,-.09,0,.025,.12,.025,ee),W(11832392,0,-.18,.07,.045,.025,.1,ee),X.push(ee)}let $=.52,V=.6,ie=0;function q(k){u%34<12&&(ie+=k);let ee=u%34,ge=ee<12,ke=Math.min(ee/12,1),D=ge?$=.52+.1*Math.sin(ie*.04):$,Me=ge?V=.6+.08*Math.sin(ie*.028):V,Ie=33*Math.min(1,r/650+.35);G.position.set(D*r,a-(o+Me*(a-o-14)),45),G.scale.setScalar(Ie),G.rotation.y=Math.cos(ie*.04)>0?1.1:-1.1,C.rotation.x=ge?.08:Math.max(0,Math.sin(ee*1.6))*.9,K.rotation.z=ge?Math.sin(u*8)*.035:0,X.forEach((ve,we)=>ve.rotation.x=ge?Math.sin(u*8+we*Math.PI)*.55:0)}function W(k,ee,ge,ke,D,Me,Ie,ve){let we=new Pt(new rr(1,12,8),new qn({color:k,roughness:.7}));return we.position.set(ee,ge,ke),we.scale.set(D,Me,Ie),ve.add(we),we}function ne(k,ee,ge){let ke=new ct,D=new ct;ke.add(D),t.add(ke);let Me=[];W(k==="bee"?13869871:3422769,0,0,0,.075,.28,.07,D),W(2698532,0,.26,0,.085,.09,.08,D);for(let ve of[-1,1]){let we=new ct;if(D.add(we),Me.push({wing:we,side:ve}),k==="dragonfly")for(let Ye of[-1,1])W(12839391,ve*.44,Ye*.11,0,.43,.065,.018,we);else if(k==="bee")W(14741992,ve*.24,.05,0,.23,.18,.018,we);else{W(3420459,ve*.27,.16,0,.29,.32,.025,we),W(ee,ve*.27,.16,.02,.25,.28,.025,we),W(ee,ve*.22,-.2,0,.21,.21,.025,we);for(let Ye=0;Ye<4;Ye++)W(16772528,ve*(.24+.12*Math.sin(Ye)),.05+Ye*.065,.05,.025,.025,.012,we)}}let Ie={kind:k,group:ke,body:D,wings:Me,phase:Lt(0,20),index:ge,size:k==="dragonfly"?15:k==="bee"?9:Lt(12,19),baseX:Lt(.06,.94),baseY:Lt(.64,.94)};y.push(Ie)}function be(k,ee,ge){let ke=new ct,D=new ct;ke.add(D),t.add(ke),W(ee,0,0,0,.17,.11,.39,D),W(ee,0,.1,.31,.12,.12,.13,D),W(14198856,0,.08,.46,.055,.035,.09,D),W(16182735,0,-.045,.09,.145,.075,.23,D);let Me=[];for(let ve of[-1,1]){let we=new ct;we.position.set(ve*.1,0,0),D.add(we),Me.push({wing:we,side:ve}),W(ee,ve*.3,0,-.05,.34,.026,.18,we),W(ee,ve*.58,0,-.18,.28,.018,.08,we),W(ee,ve*.07,-.015,-.43,.055,.025,.23,D)}let Ie={kind:k,group:ke,body:D,wings:Me,phase:Lt(0,20),index:ge,size:k==="swallow"?28:24,baseX:Lt(.1,.9),baseY:.11+ge*.085};y.push(Ie)}[14460214,15787723,9352911,13929542].forEach((k,ee)=>ne("butterfly",k,ee)),ne("dragonfly",0,4),ne("bee",0,5),ne("bee",0,6),be("swallow",3426643,0),be("finch",11041344,1),be("swallow",5465454,2),ne("dragonfly",0,10);let Fe=await Promise.all([N("cat",.18,.65,46),N("fox",.81,.4,48),N("owl",.8,.08,28),N("dog",.43,.77,43)]);function J(k){u+=k;for(let D of g){if(D.stateTime+=k,k&&D.stateTime>D.duration&&P(D),D.state==="walk"||D.state==="fly"){let Ye=pi(D.stateTime/D.duration,0,1),tt=Ye*Ye*(3-2*Ye),Ve=1-tt;D.pos.x=Ve*Ve*D.start.x+2*Ve*tt*D.control.x+tt*tt*D.target.x,D.pos.y=Ve*Ve*D.start.y+2*Ve*tt*D.control.y+tt*tt*D.target.y;let vt=2*Ve*(D.control.x-D.start.x)+2*tt*(D.target.x-D.control.x),$e=2*Ve*(D.control.y-D.start.y)+2*tt*(D.target.y-D.control.y),At=Math.atan2(vt*r,$e*(a-o)*2),Kt=Math.atan2(Math.sin(At-D.heading),Math.cos(At-D.heading));D.heading+=Kt*Math.min(1,k*3),D.mixer.timeScale=D.state==="fly"?2.7:(c==="gentle"?.8:1)*(.25+.75*Math.sin(Math.PI*Ye))}else D.mixer.timeScale=D.state==="sleep"?.65:1;D.tilt.rotation.y=D.heading;let Me=pi(D.stateTime/D.duration,0,1);D.rollPivot.rotation.z=D.state==="roll"?Math.sin(Math.PI*Me)**2*Math.PI*1.1:0,D.mixer.update(k);let Ie=o+D.pos.y*(a-o-14),ve=D.size*(.58+.68*D.pos.y)*Math.min(1,r/650+.35),we=D.state==="fly"?Math.sin(Math.PI*pi(D.stateTime/D.duration,0,1))*Math.min(160,a*.2):0;D.group.position.set(D.pos.x*r,a-Ie+we,20+D.pos.y*20),D.shadow.material.opacity=.16*(1-we/220),D.group.scale.setScalar(ve),D.shadow.position.set(D.pos.x*r,a-Ie-1,19+D.pos.y*20),D.shadow.scale.set(ve*.32,ve*.055,1)}for(let D of y){let Me=u+D.phase,Ie=D.kind==="swallow"||D.kind==="finch",ve,we,Ye;if(Ie){let $e=Me*.12+D.index*2.1;ve=.5+.55*Math.sin($e),we=D.baseY+.055*Math.cos($e*1.7),Ye=.55+.25*(Math.cos($e)+1),D.body.rotation.y=Math.atan2(Math.cos($e),-.28*Math.sin($e)),D.body.rotation.z=-.18*Math.sin($e)}else ve=D.baseX+.08*Math.sin(Me*.24+D.index)+.025*Math.sin(Me*.67),we=D.baseY+.045*Math.cos(Me*.33)+.012*Math.sin(Me*1.2),Ye=.65+.3*(Math.sin(Me*.19)+1),D.body.rotation.z=.22*Math.cos(Me*.67),D.body.rotation.y=.3*Math.sin(Me*.24);let tt=D.size*Ye;D.group.position.set(ve*r,a*(1-we),60),D.group.scale.setScalar(tt);let Ve=Ie?D.kind==="swallow"?6.5:8:D.kind==="butterfly"?8:D.kind==="dragonfly"?22:30,vt=Ie&&Math.sin(Me*.8)>.76;for(let{wing:$e,side:At}of D.wings)Ie?$e.rotation.z=At*(vt?.12:Math.sin(Me*Math.PI*2*Ve)*.75):$e.rotation.y=At*(.2+Math.sin(Me*Math.PI*2*Ve)*1)}let ee=document.documentElement.dataset.theme==="dark"||!["dark","light"].includes(document.documentElement.dataset.theme)&&matchMedia("(prefers-color-scheme:dark)").matches;i.color.setHex(ee?16756337:16773331),i.intensity=ee?1.7:2.5,q(k),t.updateMatrixWorld(!0);let ke=[...g.map(D=>({id:"animal-"+D.kind,group:D.group,actor:D})),{id:"hen",group:G},...y.filter((D,Me)=>c==="standard"||[0,1,4,5,7,9].includes(Me)).map((D,Me)=>({id:"flyer-"+D.kind+"-"+D.index,group:D.group}))].map(D=>{D.group.visible=!0,M.setFromObject(D.group,!0),M.getSize(w),M.getCenter(S);let Me=Math.hypot(w.x,w.y)/2+3;return{...D,x:S.x,y:S.y,r:Me,previous:p.get(D.id),maxStep:k*(D.actor?45:55)}});m=Qu(ke,r,a);for(let D of m){let Me=ke.find(we=>we.id===D.id),Ie=D.x-Me.x,ve=D.y-Me.y;if(D.group.visible=D.visible,p.set(D.id,{x:D.x,y:D.y,visible:D.visible}),!!D.visible&&(D.group.position.x+=Ie,D.group.position.y+=ve,D.actor)){let we=D.actor;we.shadow.position.x+=Ie,we.shadow.position.y+=ve,Math.hypot(Ie,ve)>1&&(we.pos.x=pi(we.pos.x+Ie/r,.03,.97),we.pos.y=pi(we.pos.y-ve/Math.max(1,a-o-14),.02,.98),(we.state==="walk"||we.state==="fly")&&(F(we,"idle"),we.duration=Lt(1.8,3.6)))}}for(let D of g)D.shadow.visible=D.group.visible;e.render(t,n)}function me(k){if(f)return;if(d=requestAnimationFrame(me),l){h=k;return}let ee=Math.min((k-h)/1e3,.06);h=k,J(ee)}e.domElement.addEventListener("webglcontextlost",k=>{k.preventDefault(),l=!0,s.classList.add("wildlife-fallback")}),e.domElement.addEventListener("webglcontextrestored",()=>{s.classList.remove("wildlife-fallback"),Se.setMode(c,!1)});let Se={setMode(k,ee){c=k,y.forEach((ge,ke)=>ge.group.visible=k==="standard"||[0,1,4,5,7,9].includes(ke)),l=ee||k==="off",s.dataset.paused=String(l),h=performance.now(),J(0)},snapshot(){return{time:u,paused:l,actors:g.map(k=>({kind:k.kind,state:k.state,x:k.pos.x,y:k.pos.y,size:k.group.scale.x})),flyers:y.length,spacing:m.map(k=>({id:k.id,x:k.x,y:k.y,r:k.r,visible:k.visible}))}},dispose(){f=!0,cancelAnimationFrame(d),T.disconnect(),e.dispose(),t.traverse(k=>{k.geometry?.dispose(),k.material&&(Array.isArray(k.material)?k.material:[k.material]).forEach(ee=>ee.dispose())})}};return s.dataset.ready=String(Fe.filter(Boolean).length),E(),d=requestAnimationFrame(me),Se};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

;
/* ambient.js */
/* v2.9: decorative motion with persistent settings and lifecycle pausing. */
(function(){
'use strict';
const T=(a,b)=>save.lang==='zh'?b:a;
const dash=document.getElementById('welcomeDashboard');
if(!dash)return;
const assetUrl=name=>window.MindGardenAssets?.[name]||name;
const life=document.createElement('div');life.id='gardenLife';life.setAttribute('aria-hidden','true');
// Locally bundled 3D animation; GIFs are the fallback if WebGL is unavailable.
life.innerHTML=['cat','fox','owl'].map(kind=>'<div class="wildlife-poster fallback-'+kind+'"><img data-kind="'+kind+'" src="'+assetUrl('wildlife/'+kind+'.png')+'" alt=""></div>').join('');
life.insertAdjacentHTML('beforeend','<div class="garden-weather"><i class="garden-cloud cloud-one"></i><i class="garden-cloud cloud-two"></i></div>');
let engine=null,visible=true;
if(window.IntersectionObserver)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:0}).observe(dash);
(window.createGardenWildlife?window.createGardenWildlife(life):Promise.resolve(null)).then(value=>{engine=value;window.MindGardenAmbient=value;life.classList.toggle('wildlife-fallback',!value);sync()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!save.motionMode)save.motionMode=save.still?'off':'gentle';
function effectiveMode(){return save.still||save.motionMode==='off'||(reduced.matches&&!save.motionExplicit)?'off':save.motionMode==='standard'?'standard':'gentle'}
function setMode(mode){if(!['off','gentle','standard'].includes(mode))return;if(mode!=='off')save.motionPrevious=mode;else if(['gentle','standard'].includes(save.motionMode))save.motionPrevious=save.motionMode;save.motionMode=mode;save.still=mode==='off'?1:0;save.motionExplicit=true;persist();sync()}
function sync(){
 const scene=dash.querySelector('.welcome-scene');if(scene&&!scene.contains(life))scene.prepend(life);
 const mode=effectiveMode();
 document.documentElement.dataset.motionExplicit=String(!!save.motionExplicit);
 document.documentElement.dataset.motion=mode;
 life.hidden=mode==='off';
 motion();
 const paused=!visible||document.hidden||!document.getElementById('ov').classList.contains('hidden')||document.getElementById('home').classList.contains('hidden')||dash.classList.contains('hidden');
 document.documentElement.dataset.ambientPaused=String(paused);
 engine?.setMode(mode,paused);
 life.querySelectorAll('.wildlife-poster img').forEach(poster=>{
 const source=assetUrl('wildlife/'+poster.dataset.kind+(paused||mode==='off'?'.png':'.gif'));
 if(poster.getAttribute('src')!==source)poster.src=source;
 });
 window.MindGardenWelcomeMedia?.render();
}
new MutationObserver(sync).observe(dash,{childList:true,attributes:true,attributeFilter:['class']});
['ov','home'].forEach(id=>new MutationObserver(sync).observe(document.getElementById(id),{attributes:true,attributeFilter:['class']}));
document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
const original=window.openSet;
window.openSet=function(){original();const group=document.createElement('fieldset');group.className='motion-options';
 group.innerHTML='<legend>'+T('Animation','动画')+'</legend>'+[['off',T('Off','关')],['gentle',T('Gentle','轻柔')],['standard',T('Standard','标准')]].map(([v,n])=>'<button type="button" class="btn" data-motion-mode="'+v+'" aria-pressed="'+(effectiveMode()===v)+'">'+n+'</button>').join('');
 document.getElementById('sd').parentElement.before(group);
 group.querySelectorAll('button').forEach(b=>b.onclick=()=>{setMode(b.dataset.motionMode);openSet()});
};
document.getElementById('bSet').onclick=window.openSet;
// Replace the old binary setting with the three explicit modes.
const idx=SET.findIndex(x=>x[0]==='still');if(idx>=0)SET.splice(idx,1);
window.MindGardenMotion={sync,effectiveMode,setMode};window.addEventListener('gardenPlayerChange',sync);
sync();
})();

;
/* soundscape.js */
/* Separate original chamber/harp scores using locally bundled acoustic samples. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en;
const prefs=Object.assign({music:'strings',nature:'garden',master:45,musicVolume:55,natureVolume:35,horn:false},save.soundscape||{});
const clamp=n=>Math.max(0,Math.min(100,Number(n)||0));
for(const key of ['master','musicVolume','natureVolume'])prefs[key]=clamp(prefs[key]);
if(!['none','strings','harp','piano','serenade','personal'].includes(prefs.music))prefs.music='strings';
if(!['none','ocean','garden','wind','rain','stream','night'].includes(prefs.nature))prefs.nature='garden';
let ctx,master,musicBus,natureBus,limiter,engine,timer,playing=false,loading=false,generation=0,exporting=false,tracks=[],trackIndex=0,mediaSource;
const player=new Audio();player.preload='metadata';
function persistPrefs(){save.soundscape=prefs;save.mus=0;persist()}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const sampleNotes={piano:{C3:48,G3:55,C4:60,E4:64,G4:67,C5:72},violin:{A3:57,C4:60,E4:64,A4:69,C5:72,E5:76},cello:{C2:36,G2:43,C3:48,E3:52},clarinet:{D3:50,As3:58,D4:62,F4:65},harp:{E3:52,B3:59,F4:65,A4:69,C5:72,E5:76},flute:{C4:60,A4:69,C5:72,E5:76}};
const sampleBank={},sampleLoads={};
const sampleCredit='Instrument samples: Nicholaus P. Brosowsky, tonejs-instruments (CC BY 3.0), https://github.com/nbrosowsky/tonejs-instruments ; https://creativecommons.org/licenses/by/3.0/ . Sources include Versilian Studios VSCO 2 and flcellogrl cello. Samples converted to mono 32kHz/64kbps and capped at 9s. Original arrangement by Mind Garden.';
async function ensureSamples(context,mode){
 const instruments=mode==='strings'?['piano','violin','cello','clarinet']:mode==='harp'?['harp','flute','clarinet']:mode==='piano'?['piano','cello']:mode==='serenade'?['violin','cello','flute','clarinet']:[];
 await Promise.all(instruments.map(name=>sampleLoads[name]||(sampleLoads[name]=Promise.all(Object.entries(sampleNotes[name]).map(async([note,midi])=>{const path='audio/'+name+'/'+note+'.mp3',url=window.MindGardenAssets?.[path]||path,response=await fetch(url);if(!response.ok)throw Error('Instrument unavailable');return {midi,buffer:await context.decodeAudioData(await response.arrayBuffer())}})).then(samples=>{sampleBank[name]=samples}).catch(error=>{delete sampleLoads[name];throw error}))));
}
function composer(context,musicOut,natureOut,options,seed){
 const random=rng(seed),sources=new Set(),nodes=new Set();let phrase=0,nextMusic=context.currentTime+.12,nextWave=context.currentTime+.2,nextBird=context.currentTime+3+random()*5,nextHorn=context.currentTime+30+random()*18,nextWind=context.currentTime+.3;
 const rate=context.sampleRate,noise=context.createBuffer(1,rate*5,rate),data=noise.getChannelData(0);let brown=0;
 for(let i=0;i<data.length;i++){brown=(brown+.025*(random()*2-1))/1.025;data[i]=brown*4.2}
 const rainNoise=context.createBuffer(1,rate*5,rate);const drops=rainNoise.getChannelData(0);for(let i=0;i<drops.length;i++)drops[i]=(random()*2-1)*.35;let nextDetail=context.currentTime+.8;
 function connect(source,envelope,out,pan){
  const p=context.createStereoPanner();p.pan.value=pan;source.connect(envelope);envelope.connect(p);p.connect(out);sources.add(source);nodes.add(envelope);nodes.add(p);
  source.onended=()=>{source.disconnect();envelope.disconnect();p.disconnect();sources.delete(source);nodes.delete(envelope);nodes.delete(p)};return p;
 }
 // Small concert-room reflections, rather than an unchanging synthetic pad.
 const room=context.createConvolver(),wet=context.createGain(),impulse=context.createBuffer(2,rate*2,rate);
 for(let c=0;c<2;c++){const d=impulse.getChannelData(c);for(let i=0;i<d.length;i++)d[i]=(random()*2-1)*Math.exp(-i/(rate*.34))*.3}
 room.buffer=impulse;wet.gain.value=options.music==='strings'?.22:.16;room.connect(wet);wet.connect(musicOut);nodes.add(room);nodes.add(wet);
 function instrument(name,midi,start,duration,level,pan){
  const available=sampleBank[name];if(!available?.length)return;
  const sample=available.reduce((best,current)=>Math.abs(current.midi-midi)<Math.abs(best.midi-midi)?current:best),speed=Math.pow(2,(midi-sample.midi)/12);
  const plucked=name==='piano'||name==='harp',usable=sample.buffer.duration/speed-.04;
  const length=Math.min(duration,usable),attack=plucked?.012:Math.min(.32,length*.15),release=plucked?Math.min(.65,length*.3):Math.min(.5,length*.25);
  const source=context.createBufferSource(),gain=context.createGain(),filter=context.createBiquadFilter();source.buffer=sample.buffer;source.playbackRate.value=speed;filter.type='lowpass';filter.frequency.value=name==='violin'?4600:6500;filter.Q.value=.4;
  const velocity=level*(.91+random()*.16);gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(velocity,start+attack);gain.gain.setValueAtTime(velocity,start+length-release);gain.gain.linearRampToValueAtTime(0,start+length);
  source.connect(filter);const panNode=connect(filter,gain,musicOut,pan);sources.delete(filter);sources.add(source);nodes.add(filter);gain.connect(room);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();panNode.disconnect();sources.delete(source);nodes.delete(filter);nodes.delete(gain);nodes.delete(panNode)};
  source.start(start);source.stop(start+length+.02);
  // Re-bow short cello samples with an overlap instead of looping their waveform.
  if(!plucked&&duration>usable+.2)instrument(name,midi,start+length-.18,duration-length+.18,level*.93,pan);
 }
 // Chamber Garden: D major, slow 4/4, a piano theme and independently phrased strings.
 const chamberChords=[[50,54,57,61],[47,54,57,62],[43,50,54,59],[45,52,57,61],[50,57,61,66],[42,49,54,57],[43,50,57,59],[45,52,55,61]];
 const chamberMelody=[[69,66,64,66],[66,69,73,71],[71,69,67,66],[64,66,69,73],[74,73,69,66],[68,66,64,61],[62,66,67,69],[73,71,69,66]];
 function chamber(start){
  const bar=phrase%8,chord=chamberChords[bar],melody=chamberMelody[bar],beat=60/58,length=beat*8;
  // Piano left-hand broken chords leave the final beat free to breathe.
  for(let i=0;i<7;i++){instrument('piano',chord[i%4],start+i*beat+.025,3.7,.19,-.22);if(i%2===0)instrument('piano',chord[(i+2)%4]+12,start+i*beat+.08,3.5,.12,-.12)}
  melody.forEach((note,i)=>instrument('piano',note,start+i*beat*2+.12,beat*2.7,.25,0));
  // Violin sings a long answering phrase; cello moves independently below it.
  const rise=bar<4?1:.82;
  instrument('violin',melody[0],start+.36,beat*3.1,.10*rise,-.38);
  instrument('violin',melody[2],start+beat*3.1,beat*2.7,.09*rise,-.34);
  instrument('violin',melody[3],start+beat*5.6,beat*2.7,.085*rise,-.3);
  instrument('violin',chord[2]+12,start+beat,beat*5.8,.045,.2);
  instrument('cello',chord[0]-12,start+.06,beat*4.25,.19,.35);
  instrument('cello',chord[1]-12,start+beat*4,beat*4.2,.155,.32);
  if(bar%2===1){instrument('clarinet',chord[3],start+beat*2.8,beat*2.6,.07,.17);instrument('clarinet',chord[2],start+beat*5.1,beat*2.6,.06,.13)}
  return length;
 }
 // Harp & Woodwinds: F major, 3/4, a separate six-bar melody and harp texture.
 const harpChords=[[53,57,60,64],[50,57,60,65],[46,53,57,62],[48,55,58,64],[43,50,58,62],[48,55,60,64]];
 const fluteMelody=[[77,76,72],[74,69,72],[74,77,81],[79,76,72],[74,70,69],[72,76,77]];
 function harpScore(start){
  const bar=phrase%6,chord=harpChords[bar],beat=60/72,length=beat*6;
  [0,2,1,3,2,1,0,1,3,2].forEach((step,i)=>instrument('harp',chord[step]+(i%4===3?12:0),start+i*beat*.5,3,.22,-.32));
  fluteMelody[bar].forEach((note,i)=>instrument('flute',note,start+.25+i*beat*1.8,beat*1.65,.14,.28));
  instrument('clarinet',chord[1],start+beat*1.2,beat*2.5,.09,.08);
  instrument('clarinet',chord[3],start+beat*3.6,beat*2.2,.08,.05);
  return length;
 }
 const pianoChords=[[51,55,58,62],[48,55,58,63],[44,51,55,60],[46,53,56,62]];
 const pianoMelody=[[67,65,63],[67,70,72],[72,70,67],[65,62,63]];
 function pianoScore(start){const bar=phrase%4,chord=pianoChords[bar],beat=60/52,length=beat*8;
  [0,1,2,1].forEach((v,i)=>instrument('piano',chord[v],start+i*beat*2,4.6,.19,-.2));
  pianoMelody[bar].forEach((n,i)=>{instrument('piano',n,start+.3+i*beat*2.5,4,.26,.15);instrument('piano',n-12,start+.34+i*beat*2.5,3.8,.08,-.05)});
  instrument('cello',chord[0]-12,start+.15,beat*7.6,.13,.32);return length;
 }
 const duskChords=[[43,50,54,59],[40,47,55,59],[48,55,60,64],[50,57,60,66],[43,50,59,62],[45,52,55,60]];
 const duskMelody=[[74,71,69],[71,67,66],[72,76,74],[74,72,69],[71,74,79],[76,72,71]];
 function serenadeScore(start){const bar=phrase%6,chord=duskChords[bar],beat=60/66,length=beat*6;
  instrument('cello',chord[0]-12,start,beat*6.2,.15,.3);instrument('violin',chord[2]+12,start+.2,beat*6,.065,-.3);
  duskMelody[bar].forEach((n,i)=>instrument('violin',n,start+i*beat*2+.18,beat*2.1,.105,-.15));
  instrument('clarinet',chord[1]+12,start+beat,beat*3.1,.08,.12);
  if(bar%2)instrument('flute',duskMelody[bar][2],start+beat*3.7,beat*2,.08,.38);return length;
 }
 function score(start){const length=({strings:chamber,harp:harpScore,piano:pianoScore,serenade:serenadeScore}[options.music]||chamber)(start);phrase++;return length;}
 function wash(start,duration,volume,frequency,pan,white=false){
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();source.buffer=white?rainNoise:noise;source.loop=true;source.playbackRate.value=.7+random()*.55;
  filter.type='lowpass';filter.frequency.setValueAtTime(frequency*.35,start);filter.frequency.linearRampToValueAtTime(frequency,start+duration*.46);filter.frequency.linearRampToValueAtTime(frequency*.4,start+duration);filter.Q.value=.5;
  gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+duration*.4);gain.gain.linearRampToValueAtTime(volume*.5,start+duration*.64);gain.gain.linearRampToValueAtTime(0,start+duration);
  source.connect(filter);const p=connect(filter,gain,natureOut,pan);sources.delete(filter);sources.add(source);nodes.add(filter);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();p.disconnect();sources.delete(source);nodes.delete(filter);nodes.delete(gain);nodes.delete(p)};source.start(start,random()*3);source.stop(start+duration+.02);
 }
 function call(start,gull){
  const pan=random()*1.4-.7,root=gull?650+random()*230:1350+random()*650;
  for(let j=0;j<(gull?2:3);j++){
   const o=context.createOscillator(),g=context.createGain(),t=start+j*(gull?.38:.19),d=gull?.62:.19;o.type='sine';o.frequency.setValueAtTime(root,t);o.frequency.exponentialRampToValueAtTime(root*(gull?1.65:1.3),t+d*.22);o.frequency.exponentialRampToValueAtTime(root*.8,t+d);
   g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gull?.07:.045,t+.04);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,pan);o.start(t);o.stop(t+d+.03);
  }
 }
 function horn(start){for(const [freq,vol]of [[65.4,.07],[98,.025],[130.8,.012]]){const o=context.createOscillator(),g=context.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(vol,start+1.4);g.gain.setTargetAtTime(.0001,start+2.4,.9);connect(o,g,natureOut,-.55);o.start(start);o.stop(start+6)}}
 function detail(start,kind){
  const count=kind==='night'?4:kind==='rain'?2:1;
  for(let i=0;i<count;i++){const o=context.createOscillator(),g=context.createGain(),t=start+i*.075,d=kind==='night'?.045:kind==='rain'?.07:.25,f=kind==='night'?2900+random()*500:kind==='rain'?1600+random()*1600:280+random()*420;
   o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*(kind==='stream'?.45:1.12),t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(kind==='night'?.016:kind==='rain'?.014:.035,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,random()*1.4-.7);o.start(t);o.stop(t+d+.02);
  }
 }
 let nextAnimal=context.currentTime+18+random()*22,nextOwl=context.currentTime+35+random()*35;
 function animalCall(start,kind){const voices={owl:[340,.45,2,.028],frog:[160,.18,3,.022],cat:[580,.65,1,.018],dog:[210,.14,2,.014],hen:[680,.09,3,.016],rooster:[650,.4,4,.012]},[f,d,count,vol]=voices[kind];const pan=random()*1.4-.7;
  for(let i=0;i<count;i++){const t=start+i*(d+.15),o=context.createOscillator(),g=context.createGain();o.type=kind==='dog'||kind==='frog'?'triangle':'sine';o.frequency.setValueAtTime(f*(.95+random()*.1),t);o.frequency.exponentialRampToValueAtTime(f*(kind==='cat'?1.4:kind==='rooster'?1.3:1.08),t+d*.35);o.frequency.exponentialRampToValueAtTime(f*.7,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.035);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,pan);o.start(t);o.stop(t+d+.02)}
 }
 function schedule(until){
  if(options.music!=='none'&&options.music!=='personal')while(nextMusic<until){nextMusic+=score(nextMusic)}
  if(options.nature==='none')return;
  if(options.nature==='home-day'||options.nature==='home-night'){
   const night=options.nature==='home-night';
   while(nextWind<until){wash(nextWind,18,.16,650,random()-.5);wash(nextWind+3,12,.06,2600,random()-.5,true);nextWind+=12+random()*8}
   while(nextBird<until){night?detail(nextBird,'night'):call(nextBird,false);nextBird+=night?4+random()*8:10+random()*18}
   while(nextAnimal<until){const hour=new Date().getHours(),k=night?'frog':(hour>=5&&hour<9&&random()<.2?'rooster':['hen','cat','dog'][Math.floor(random()*3)]);animalCall(nextAnimal,k);nextAnimal+=40+random()*65}
   if(night)while(nextOwl<until){animalCall(nextOwl,'owl');nextOwl+=70+random()*65}return;
  }
  while(nextWind<until){const duration=10+random()*11;wash(nextWind,duration,options.nature==='wind'?.48:.13,350+random()*500,random()-.5);nextWind+=duration*(.65+random()*.3)}
  if(['rain','stream','night'].includes(options.nature)){
   while(nextWave<until){const d=options.nature==='rain'?11+random()*7:5+random()*6;wash(nextWave,d,options.nature==='rain'?.34:options.nature==='stream'?.32:.06,options.nature==='rain'?4800:options.nature==='stream'?1800:400,random()*.6-.3,options.nature==='rain');nextWave+=d*.7}
   while(nextDetail<until){detail(nextDetail,options.nature);nextDetail+=options.nature==='night'?2+random()*6:options.nature==='rain'?.4+random()*1.6:.3+random()*1.4}
  }
  if(options.nature==='ocean'){
   while(nextWave<until){const duration=6+random()*6;wash(nextWave,duration,.65+random()*.35,1000+random()*1800,random()*.8-.4);nextWave+=duration*(.62+random()*.45)}
   if(options.horn)while(nextHorn<until){horn(nextHorn);nextHorn+=38+random()*42}
  }
  if(['ocean','garden'].includes(options.nature))while(nextBird<until){call(nextBird,options.nature==='ocean');nextBird+=options.nature==='ocean'?12+random()*18:6+random()*13}
 }
 return {schedule,stop(){for(const s of sources){try{s.stop()}catch{}try{s.disconnect()}catch{}}sources.clear();for(const n of nodes)n.disconnect();nodes.clear()},stats:()=>({sources:sources.size,phrases:phrase})};
}
function init(){
 if(ctx)return;ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();musicBus=ctx.createGain();natureBus=ctx.createGain();limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-14;limiter.ratio.value=5;limiter.attack.value=.01;limiter.release.value=.3;musicBus.connect(master);natureBus.connect(master);master.connect(limiter);limiter.connect(ctx.destination);mediaSource=ctx.createMediaElementSource(player);mediaSource.connect(musicBus);levels();
}
function levels(){if(!ctx)return;master.gain.setTargetAtTime(prefs.master/100,ctx.currentTime,.12);musicBus.gain.setTargetAtTime(prefs.musicVolume/100,ctx.currentTime,.12);natureBus.gain.setTargetAtTime(prefs.natureVolume/100,ctx.currentTime,.12)}
function message(text){const e=document.getElementById('soundMessage');if(e)e.textContent=text}
function sync(){window.dispatchEvent(new Event('gardenSoundChange'));const fab=document.getElementById('mFab');if(fab){fab.textContent='♫ '+T('Sound: ','声音：')+(playing?T('On','开'):T('Off','关'));fab.setAttribute('aria-pressed',String(playing));fab.setAttribute('aria-label',T('Open music and nature sounds','打开音乐与自然音效'))}const b=document.getElementById('soundPlay');if(b){b.textContent=playing?'Ⅱ':'▶';const label=playing?T('Pause sound','暂停声音'):T('Play sound','播放声音');b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(playing))}}
function stop(){generation++;playing=false;loading=false;clearInterval(timer);engine?.stop();engine=null;player.pause();if(ctx)ctx.suspend().catch(()=>{});message('');sync()}
async function start(){
 const g=++generation,selected={...prefs};playing=true;loading=true;sync();message(T('Loading sound… Select pause to cancel.','正在加载声音……点击暂停可取消。'));
 try{init();engine?.stop();engine=null;clearInterval(timer);player.pause();
  // Both playback requests must start inside the user's click, before any await.
  // A late completion belongs only to this generation and cannot restart a stop.
  const resume=ctx.resume();let media;
  if(selected.music==='personal'&&tracks.length){if(player.src!==tracks[trackIndex].url)player.src=tracks[trackIndex].url;media=player.play()}
  await Promise.all([resume,media,ensureSamples(ctx,selected.music)]);if(g!==generation)return;loading=false;message('');
  engine=composer(ctx,musicBus,natureBus,selected,Math.random()*0xffffffff);engine.schedule(ctx.currentTime+1.3);timer=setInterval(()=>{if(!document.hidden)engine?.schedule(ctx.currentTime+1.3)},500);playing=true;
  if(selected.music==='personal'&&!tracks.length)message(T('Choose a music file first. Nature sounds can still play.','请先选择音乐文件。自然音效仍可播放。'));
  sync();
 }catch(e){if(g!==generation)return;stop();message(T('Unable to play this audio. Try another file or a built-in mix.','无法播放此音频。请尝试其他文件或内置混音。'))}
}
function choose(key,value){prefs[key]=value;persistPrefs();if(playing)start();openSound()}
function openSound(){
 const music=[['none','No music','无音乐'],['strings','Chamber garden','室内乐花园'],['harp','Harp & woodwinds','竖琴与木管'],['piano','Piano & cello','钢琴与大提琴'],['serenade','Twilight ensemble','暮色合奏'],['personal','My own music','我的音乐']];
 const nature=[['none','No nature sounds','无自然音效'],['ocean','Ocean & gulls','海浪与海鸥'],['garden','Garden & birds','花园与鸟鸣'],['wind','Soft wind','轻柔微风'],['rain','Rain on leaves','叶上细雨'],['stream','Woodland stream','林间溪流'],['night','Evening crickets','晚间虫鸣']];
 const choices=(key,items)=>'<div class="sound-choices">'+items.map(([id,en,zh])=>'<button class="btn" data-sound-'+key+'="'+id+'" aria-pressed="'+(prefs[key]===id)+'">'+T(en,zh)+'</button>').join('')+'</div>';
 const slider=(key,en,zh)=>'<label class="sound-range"><span>'+T(en,zh)+'</span><input type="range" min="0" max="100" value="'+prefs[key]+'" data-sound-volume="'+key+'"><output>'+prefs[key]+'%</output></label>';
 overlay('<div class="sound-panel"><h2>'+T('Music & nature','音乐与自然')+'</h2><p class="sound-intro">'+T('Make space for a softer moment. Blend layered music with an ever-changing landscape.','给自己一段柔和的时光，将多声部音乐与不断变化的自然声景融合。')+'</p><div class="sound-actions"><button class="btn main" id="soundPlay"></button><button class="btn" id="soundDone">'+T('Done','完成')+'</button></div>'+slider('master','Overall','总音量')+'<fieldset class="sound-section"><legend>'+T('Music','音乐')+'</legend>'+choices('music',music)+slider('musicVolume','Music level','音乐音量')+'<p class="sound-note">'+(prefs.music==='strings'?T('Piano, violin and cello with soft clarinet harmony. A slow, full-bodied chamber arrangement.','钢琴、小提琴、大提琴与柔和的单簧管和声，舒缓而饱满的室内乐。'):prefs.music==='harp'?T('A separate melody in flowing triple time: plucked harp, flute and clarinet.','独立的三拍子旋律：拨弦竖琴、长笛与单簧管，轻盈流畅。'):prefs.music==='piano'?T('Unhurried piano melodies with a warm cello foundation.','悠缓的钢琴旋律，搭配温暖的大提琴低音。'):prefs.music==='serenade'?T('Singing strings with clarinet and flute, in a gentle six-beat flow.','弦乐、单簧管与长笛，在柔和的六拍节奏中交织。'):T('Choose an arrangement or bring a recording you love.','选择一种编曲，或使用你喜爱的录音。'))+'</p></fieldset><fieldset class="sound-section"><legend>'+T('Nature soundscape','自然声景')+'</legend>'+choices('nature',nature)+slider('natureVolume','Nature level','自然音量')+'<label><input id="soundHorn" type="checkbox" '+(prefs.horn?'checked':'')+'> '+T('Occasional distant foghorn (ocean only)','偶尔传来的远处雾笛（仅海洋模式）')+'</label><p class="sound-note">'+T('Procedural waves and wind rise and fall at varied intervals; bird calls leave quiet gaps.','合成海浪与风声以不同节奏起伏，鸟鸣之间留有宁静的空隙。')+'</p></fieldset><fieldset class="sound-section"><legend>'+T('Bring your own music','使用自己的音乐')+'</legend><label>'+T('Add music files','添加音乐文件')+'<input class="sound-upload" id="soundFiles" type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg,.flac" multiple hidden></label><div class="music-file-picker"><button type="button" class="btn" id="soundChooseFiles">'+T('Choose music files','选择音乐文件')+'</button><p class="file-upload-status" role="status">'+(tracks.length?T(tracks.length+' tracks in your playlist','歌单中有'+tracks.length+'首音乐'):T('No files selected','尚未选择文件'))+'</p></div><p class="sound-note">'+T('Files stay on your device and are not uploaded. Choose them again after reloading. Your playlist repeats while playing.','文件保留在你的设备上，不会上传。刷新后请重新选择。播放时歌单会循环。')+'</p><div id="personalTracks" class="personal-tracks"></div><button class="btn" id="soundClear" '+(!tracks.length?'disabled':'')+'>'+T('Clear playlist','清空歌单')+'</button></fieldset><div class="sound-actions"><button class="btn" id="soundDownload" '+(exporting||prefs.music==='personal'?'disabled':'')+'>'+T('Download built-in mix · 60s WAV','下载内置混音 · 60秒 WAV')+'</button></div><p class="sound-note">'+T('The download uses your selected built-in music, nature sounds and volume levels. Personal tracks are not included.','下载包含你选择的内置音乐、自然音效与音量设置，不包含个人音乐。')+'</p><p class="sound-note">'+T('Instrument samples: ','乐器采样：')+'<a href="https://github.com/nbrosowsky/tonejs-instruments" target="_blank" rel="noopener">Nicholaus P. Brosowsky</a> · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a></p><p id="soundMessage" class="sound-message" role="status"></p></div>');
 document.getElementById('soundDone').onclick=closeOv;document.getElementById('soundPlay').onclick=()=>playing?stop():start();
 document.querySelectorAll('[data-sound-music]').forEach(b=>b.onclick=()=>choose('music',b.dataset.soundMusic));document.querySelectorAll('[data-sound-nature]').forEach(b=>b.onclick=()=>choose('nature',b.dataset.soundNature));
 document.querySelectorAll('[data-sound-volume]').forEach(input=>input.oninput=()=>{prefs[input.dataset.soundVolume]=clamp(input.value);input.nextElementSibling.textContent=input.value+'%';levels();persistPrefs()});
 document.getElementById('soundHorn').onchange=e=>choose('horn',e.target.checked);
 const list=document.getElementById('personalTracks');tracks.forEach((track,i)=>{const b=document.createElement('button');b.className='btn';b.textContent=(trackIndex===i?'♫ ':'')+track.name;b.setAttribute('aria-pressed',String(trackIndex===i&&prefs.music==='personal'));b.onclick=()=>{trackIndex=i;player.src=track.url;choose('music','personal');if(!playing)start()};list.append(b)});
 document.getElementById('soundChooseFiles').onclick=()=>document.getElementById('soundFiles').click();
 document.getElementById('soundFiles').onchange=e=>{let added=0;for(const file of e.target.files){if(!file.type.startsWith('audio/')&&!/\.(mp3|wav|m4a|ogg|flac)$/i.test(file.name))continue;tracks.push({name:file.name,url:URL.createObjectURL(file)});added++}if(added){prefs.music='personal';persistPrefs();openSound();if(playing)start()}else message(T('Choose a supported audio file.','请选择支持的音频文件。'))};
 document.getElementById('soundClear').onclick=()=>{player.pause();player.removeAttribute('src');player.load();tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks=[];trackIndex=0;if(prefs.music==='personal')prefs.music='none';persistPrefs();if(playing)start();openSound()};
 document.getElementById('soundDownload').onclick=downloadMix;sync();if(loading)message(T('Loading sound… Select pause to cancel.','正在加载声音……点击暂停可取消。'));
}
async function downloadMix(){
 if(exporting)return;const selection={...prefs};exporting=true;const button=document.getElementById('soundDownload');if(button)button.disabled=true;message(T('Preparing your 60-second mix…','正在制作你的60秒混音……'));
 try{const duration=60,rate=22050,offline=new OfflineAudioContext(2,rate*duration,rate),m=offline.createGain(),n=offline.createGain(),out=offline.createGain(),limit=offline.createDynamicsCompressor();m.gain.value=selection.musicVolume/100;n.gain.value=selection.natureVolume/100;out.gain.setValueAtTime(0,0);out.gain.linearRampToValueAtTime(selection.master/100,1.2);out.gain.setValueAtTime(selection.master/100,57);out.gain.linearRampToValueAtTime(0,60);m.connect(out);n.connect(out);out.connect(limit);limit.threshold.value=-14;limit.ratio.value=5;limit.connect(offline.destination);
  await ensureSamples(offline,selection.music);const comp=composer(offline,m,n,selection,Date.now());comp.schedule(duration);const buffer=await offline.startRendering();comp.stop();
  const credit=new TextEncoder().encode(sampleCredit+'\0'),padded=credit.length+(credit.length%2),pcmBytes=buffer.length*4,metaStart=44+pcmBytes;const bytes=new ArrayBuffer(metaStart+20+padded),v=new DataView(bytes);const str=(at,s)=>[...s].forEach((c,i)=>v.setUint8(at+i,c.charCodeAt(0)));str(0,'RIFF');v.setUint32(4,bytes.byteLength-8,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,rate,true);v.setUint32(28,rate*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,pcmBytes,true);str(metaStart,'LIST');v.setUint32(metaStart+4,12+padded,true);str(metaStart+8,'INFO');str(metaStart+12,'ICMT');v.setUint32(metaStart+16,credit.length,true);new Uint8Array(bytes,metaStart+20,credit.length).set(credit);
  const l=buffer.getChannelData(0),r=buffer.getChannelData(1);for(let i=0;i<buffer.length;i++){v.setInt16(44+i*4,Math.max(-1,Math.min(1,l[i]))*32767,true);v.setInt16(46+i*4,Math.max(-1,Math.min(1,r[i]))*32767,true)}
  const url=URL.createObjectURL(new Blob([bytes],{type:'audio/wav'})),a=document.createElement('a');a.href=url;a.download='mind-garden-mix.wav';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);message(T('Your mix is ready to download.','你的混音已准备好下载。'));
 }catch{message(T('This browser could not export the mix. Try a current desktop browser.','此浏览器无法导出混音，请尝试新版桌面浏览器。'))}finally{exporting=false;const b=document.getElementById('soundDownload');if(b)b.disabled=prefs.music==='personal'}
}
player.onended=()=>{if(playing&&tracks.length){trackIndex=(trackIndex+1)%tracks.length;player.src=tracks[trackIndex].url;player.play().catch(()=>{stop();message(T('Tap Play to resume.','点击播放以继续。'))});document.querySelectorAll('#personalTracks button').forEach((b,i)=>{b.textContent=(i===trackIndex?'♫ ':'')+tracks[i].name;b.setAttribute('aria-pressed',String(i===trackIndex))})}};
player.onerror=()=>{if(prefs.music==='personal'&&player.src){stop();message(T('This file cannot be played. Try MP3, WAV or another supported file.','无法播放此文件。请尝试 MP3、WAV 或其他支持的文件。'))}};
document.addEventListener('visibilitychange',()=>{if(!ctx||!playing)return;if(document.hidden){ctx.suspend();player.pause()}else{ctx.resume().then(()=>{if(playing&&prefs.music==='personal'&&tracks.length)player.play().catch(()=>stop())})}});
window.addEventListener('pagehide',stop);
window.MindGardenNatureComposer=composer;window.openMu=openSound;window.muSync=sync;window.MindGardenSound={restorePreferences(){stop();Object.assign(prefs,save.soundscape);tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks=[];trackIndex=0;player.removeAttribute('src');levels();sync()},open:openSound,start,stop,status:()=>({playing,music:prefs.music,nature:prefs.nature,tracks:tracks.length,context:ctx?.state,engine:engine?.stats()})};
document.getElementById('bMus').onclick=openSound;document.getElementById('mFab').onclick=openSound;sync();
})();

;
/* identity.js */
/* One device's active profile remains selected after leaving multiplayer. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en;
async function rename(n){
 n=n.trim();if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(n))throw Error(T('Use 1–20 letters or numbers; spaces are allowed.','请使用1至20个字母或数字，可含空格。'));
 const profile=me();await window.MindGardenMultiplayer?.rename(n);if(Object.values(save.pr).includes(profile)){profile.name=n;persist()}if(me()===profile)renderHome();return n;
}
function editor(){
 overlay('<h2>'+T('Make this garden yours','让花园属于你')+'</h2><label class="lab">'+T('Your name','你的名称')+'<input id="gardenName" maxlength="20" autocomplete="nickname" value="'+esc(me().name)+'"></label><p class="tip">'+T('Saved on this device, including after you leave the online lobby. If you are online, your room name updates too.','名称保存在此设备，退出在线大厅后仍会保留。在线时，房间中的名称也会同步更新。')+'</p><div class="row"><button class="btn main" id="gardenNameSave">'+T('Save name','保存名称')+'</button><button class="btn" id="gardenNameProfiles">'+T('Choose or add a player','选择或添加玩家')+'</button><button class="btn" id="gardenNameDone">'+T('Done','完成')+'</button></div><p id="gardenNameStatus" role="status"></p>');
 document.getElementById('gardenNameSave').onclick=async()=>{const b=document.getElementById('gardenNameSave');b.disabled=true;try{await rename(document.getElementById('gardenName').value);if(b.isConnected)closeOv()}catch(e){if(document.getElementById('gardenNameStatus'))document.getElementById('gardenNameStatus').textContent=e.message}finally{b.disabled=false}};
 document.getElementById('gardenNameProfiles').onclick=()=>openPl();document.getElementById('gardenNameDone').onclick=closeOv;
}
const originalSettings=window.openSet;window.openSet=function(){originalSettings();const group=document.createElement('section');group.className='account-settings';group.innerHTML='<h3>'+T('Player & garden','玩家与花园')+'</h3><p>'+T('Playing as ','当前玩家：')+'<strong translate="no">'+esc(me().name)+'</strong></p><div class="row"><button class="btn" id="settingsRename">'+T('Rename me','修改我的名称')+'</button><button class="btn" id="settingsPlayers">'+T('Choose or add a player','选择或添加玩家')+'</button><button class="btn" id="settingsFamily">'+T('Family view','家人视图')+'</button><button class="btn" id="settingsSound">'+T('Music & nature','音乐与自然')+'</button></div>';document.getElementById('box').prepend(group);document.getElementById('settingsRename').onclick=editor;document.getElementById('settingsPlayers').onclick=()=>openPl();document.getElementById('settingsFamily').onclick=()=>famView();document.getElementById('settingsSound').onclick=()=>openMu()};document.getElementById('bSet').onclick=window.openSet;
const originalPlayers=window.openPl;window.openPl=function(){originalPlayers();const b=document.createElement('button');b.className='btn';b.id='profileRename';b.textContent=T('Rename current player','修改当前玩家名称');b.onclick=editor;document.getElementById('pd').before(b)};document.getElementById('bPl').onclick=()=>window.openPl();
window.MindGardenIdentity={open:editor,rename,syncSelected:()=>window.MindGardenMultiplayer?.rename(me().name).catch(()=>{})};
})();

;
/* personal-progress.js */
(function(){
const T=(en,zh)=>save.lang==='zh'?zh:en;
window.openMyProgress=function(){const p=me(),log=p.log||[],days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');days.push({label:d.toLocaleDateString(save.lang==='zh'?'zh-CN':'en',{weekday:'short'}),mins:Math.round(log.filter(x=>x.d===key).reduce((a,x)=>a+x.s,0)/60)})}const max=Math.max(1,...days.map(d=>d.mins)),recent=log.slice(-6).reverse(),gameName=k=>MG[k]?.n||T('Matching pairs','配对游戏');
overlay('<section class="personal-progress"><h2>'+T('My Progress','我的进度')+'</h2><p>'+T('Your own activity, ','你的游戏活动，')+'<strong translate="no">'+esc(p.name)+'</strong></p><div class="personal-stats"><div><strong>'+Math.max(p.gp||0,log.length)+'</strong><span>'+T('Games played','已玩游戏')+'</span></div><div><strong>'+curStreak(p)+'</strong><span>'+T('Day streak','连续天数')+'</span></div><div><strong>'+Math.min(60,p.gr||0)+'/60</strong><span>'+T('Garden growth','花园成长')+'</span></div></div><h3>'+T('Your past seven days','最近七天')+'</h3><div class="personal-week" role="img" aria-label="'+esc(days.map(d=>d.label+': '+d.mins+' '+T('minutes','分钟')).join(', '))+'">'+days.map(d=>'<div class="personal-day"><span>'+d.mins+' '+T('min','分钟')+'</span><i style="height:'+Math.max(3,d.mins/max*90)+'px"></i><span>'+d.label+'</span></div>').join('')+'</div><p>'+T('Recent activity is stored on this device (up to 300 games).','最近活动保存在此设备上（最多300局）。')+'</p><h3>'+T('Recent games','最近游戏')+'</h3>'+(recent.length?'<table class="personal-recent"><thead><tr><th>'+T('Date','日期')+'</th><th>'+T('Game','游戏')+'</th><th>'+T('Time','时间')+'</th></tr></thead><tbody>'+recent.map(x=>'<tr><td>'+esc(x.d)+'</td><td>'+esc(gameName(x.g))+'</td><td>'+fmt(x.s)+'</td></tr>').join('')+'</tbody></table>':'<p>'+T('Your first game will start your activity history.','玩第一局，开始记录你的活动。')+'</p>')+'<div class="row" style="justify-content:center;margin-top:20px"><button class="btn main" id="personalProgressDone">'+T('Done','完成')+'</button></div></section>');document.getElementById('personalProgressDone').onclick=closeOv;
};})();

;
/* scenes.js */
(function(){
const T=(en,zh)=>save.lang==='zh'?zh:en;
const scenes=[{id:'blossom',en:'Blossom garden',zh:'繁花花园',light:'garden-day.webp',dark:'garden-sunset.webp'},{id:'meadow',en:'Lavender meadow',zh:'薰衣草草甸',light:'garden-meadow-day.webp',dark:'garden-meadow-dusk.webp'},{id:'pond',en:'Lily pond garden',zh:'睡莲花园',light:'garden-pond-day.webp',dark:'garden-pond-dusk.webp'}];
const asset=n=>window.MindGardenAssets?.[n]||n,media=matchMedia('(prefers-color-scheme: dark)');
function selected(mode){return scenes.find(x=>x.id===save['scene'+(mode==='light'?'Light':'Dark')])||scenes[0]}
function apply(){const mode=document.documentElement.dataset.theme;const actual=mode==='dark'||(mode!=='light'&&media.matches)?'dark':'light',s=selected(actual),photo=save['photo'+actual]&&window.MindGardenPhotos?.get(actual);document.documentElement.style.setProperty('--garden-art','url("'+(photo||asset(s[actual]))+'")');document.documentElement.dataset.gardenScene=photo?'personal':s.id;document.documentElement.dataset.gardenSceneMode=actual;window.dispatchEvent(new Event('gardenSceneChange'))}
const original=window.openSet;window.openSet=function(){original();const group=document.createElement('fieldset');group.className='scene-settings';group.innerHTML='<legend>'+T('Garden backgrounds','花园背景')+'</legend><p>'+T('Choose a favourite for each appearance. Your choices stay on this device.','为每种外观选择喜爱的背景，选择会保存在此设备。')+'</p>'+['light','dark'].map(mode=>'<h3>'+T(mode==='light'?'Light mode':'Dark mode',mode==='light'?'浅色模式':'深色模式')+'</h3><div class="scene-grid">'+scenes.map(s=>'<button class="scene-choice" data-scene="'+s.id+'" data-for-mode="'+mode+'" aria-pressed="'+(!save['photo'+mode]&&(!save[mode==='light'?'heroLight':'heroDark']||save[mode==='light'?'heroLight':'heroDark']===s.id)&&selected(mode).id===s.id)+'"><img width="160" height="90" style="display:block;width:100%;max-width:200px;height:90px;object-fit:cover;margin:auto" src="'+asset(s[mode])+'" alt="" loading="lazy"><span>'+T(s.en,s.zh)+'</span></button>').join('')+'</div>').join('');document.getElementById('sd').parentElement.before(group);group.querySelectorAll('button').forEach(b=>b.onclick=()=>{save[b.dataset.forMode==='light'?'sceneLight':'sceneDark']=b.dataset.scene;save['photo'+b.dataset.forMode]=false;save[b.dataset.forMode==='light'?'heroLight':'heroDark']=null;document.querySelector('[data-use-photo="'+b.dataset.forMode+'"]')?.setAttribute('aria-pressed','false');persist();apply();group.querySelectorAll('[data-for-mode="'+b.dataset.forMode+'"]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))})};document.getElementById('bSet').onclick=window.openSet;
new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});media.addEventListener('change',apply);window.addEventListener('gardenPlayerChange',apply);window.MindGardenScenes={apply,scenes};apply();
})();

;
/* personal-photos.js */
(function(){
const T=(a,b)=>save.lang==='zh'?b:a,photos={};let dbPromise;
function db(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{if(!window.indexedDB)return reject(Error(T('Photo storage is unavailable in this browser.','此浏览器无法保存照片。')));const r=indexedDB.open('mindGardenPhotos',1);r.onupgradeneeded=()=>r.result.createObjectStore('photos');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)}))}
async function write(mode,blob,owner=save.cp){const d=await db();await new Promise((resolve,reject)=>{const t=d.transaction('photos','readwrite');blob?t.objectStore('photos').put(blob,owner+':'+mode):t.objectStore('photos').delete(owner+':'+mode);t.oncomplete=resolve;t.onerror=t.onabort=()=>reject(t.error||Error(T('Photo could not be saved.','无法保存照片。')))});if(owner!==save.cp)return;if(photos[mode])URL.revokeObjectURL(photos[mode]);photos[mode]=blob?URL.createObjectURL(blob):null}
async function shrink(file){if(!/^image\/(jpeg|png|webp)$/.test(file.type))throw Error(T('Choose a JPG, PNG or WebP photo.','请选择JPG、PNG或WebP照片。'));if(file.size>25*1024*1024)throw Error(T('Choose a photo smaller than 25 MB.','请选择小于25MB的照片。'));const url=URL.createObjectURL(file);try{const im=new Image();im.src=url;await im.decode();const c=document.createElement('canvas'),ratio=Math.min(1,1600/Math.max(im.width,im.height));c.width=Math.round(im.width*ratio);c.height=Math.round(im.height*ratio);c.getContext('2d').drawImage(im,0,0,c.width,c.height);return await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error('Photo could not be processed')),'image/jpeg',.86))}finally{URL.revokeObjectURL(url)}}
window.MindGardenPhotos={get:mode=>photos[mode]};
let photoGeneration=0;
async function loadPhotos(){const generation=++photoGeneration,owner=save.cp;for(const k of Object.keys(photos)){URL.revokeObjectURL(photos[k]);delete photos[k]}window.MindGardenScenes.apply();try{const d=await db();for(const mode of ['light','dark']){const read=key=>new Promise((resolve,reject)=>{const r=d.transaction('photos').objectStore('photos').get(key);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});let blob=await read(owner+':'+mode);if(!blob&&save.profilePhotoOwner===owner&&!save.photoMigrationDone){blob=await read(mode);if(blob)await write(mode,blob,owner)}if(generation!==photoGeneration)return;if(blob&&!photos[mode])photos[mode]=URL.createObjectURL(blob)}if(save.profilePhotoOwner===owner){save.photoMigrationDone=true;persist()}window.MindGardenScenes.apply()}catch{}}
window.addEventListener('gardenPlayerChange',loadPhotos);loadPhotos();
const original=window.openSet;window.openSet=function(){original();const section=document.createElement('fieldset');section.className='photo-settings';section.innerHTML='<legend>'+T('Your own welcome photos','自己的欢迎页照片')+'</legend><p>'+T('Choose one photo for each appearance. Photos belong to this player in this browser on this device; clearing site data removes them. JPG, PNG or WebP, up to 25 MB.','为每种外观选择照片。照片只保存在此设备的浏览器，清除网站数据后会删除。支持25MB以内的JPG、PNG或WebP。')+'</p>'+['light','dark'].map(mode=>'<div class="photo-choice"><h3>'+T(mode==='light'?'Light mode photo':'Dark mode photo',mode==='light'?'浅色照片':'深色照片')+'</h3>'+(photos[mode]?'<img width="240" height="135" style="display:block;width:100%;max-width:240px;height:135px;object-fit:cover;margin:auto" src="'+photos[mode]+'" alt="'+T('Your saved photo','已保存照片')+'">':'')+'<label class="btn">'+T('Choose photo','选择照片')+'<input type="file" data-photo="'+mode+'" accept="image/jpeg,image/png,image/webp"></label>'+(photos[mode]?'<button class="btn" data-use-photo="'+mode+'" aria-pressed="'+!!save['photo'+mode]+'">'+T('Use this photo','使用这张照片')+'</button><button class="btn" data-remove-photo="'+mode+'">'+T('Remove photo','删除照片')+'</button>':'')+'</div>').join('')+'<p id="photoStatus" role="status"></p>';document.getElementById('sd').parentElement.before(section);
const active=owner=>owner===save.cp&&section.isConnected&&!document.getElementById('ov').classList.contains('hidden');
section.querySelectorAll('[data-photo]').forEach(input=>input.onchange=async()=>{const owner=save.cp,file=input.files[0];if(!file)return;input.disabled=true;try{const blob=await shrink(file);await write(input.dataset.photo,blob,owner);if(owner!==save.cp)return;save[input.dataset.photo==='light'?'heroLight':'heroDark']=null;save['photo'+input.dataset.photo]=true;persist();window.MindGardenScenes.apply();if(active(owner)){openSet();document.getElementById('photoStatus').textContent=T('Photo saved on this device.','照片已保存在此设备。')}}catch(e){if(active(owner))section.querySelector('#photoStatus').textContent=e.message}finally{input.disabled=false}});
section.querySelectorAll('[data-use-photo]').forEach(b=>b.onclick=()=>{save['photo'+b.dataset.usePhoto]=true;save[b.dataset.usePhoto==='light'?'heroLight':'heroDark']=null;persist();window.MindGardenScenes.apply();openSet()});section.querySelectorAll('[data-remove-photo]').forEach(b=>b.onclick=async()=>{const owner=save.cp;b.disabled=true;try{await write(b.dataset.removePhoto,null,owner);if(owner!==save.cp)return;save['photo'+b.dataset.removePhoto]=false;persist();window.MindGardenScenes.apply();if(active(owner))openSet()}catch(e){if(active(owner))section.querySelector('#photoStatus').textContent=e.message}finally{b.disabled=false}});
};document.getElementById('bSet').onclick=window.openSet;
})();

;
/* home-nature.js */
(function(){
const T=(a,b)=>save.lang==='zh'?b:a;let ctx,bus,engine,timer,unlocked=false,active=false,lastMode='',generation=0;
if(save.homeNature===undefined)save.homeNature=true;
function visible(){return !document.hidden&&document.getElementById('ov').classList.contains('hidden')&&!document.getElementById('home').classList.contains('hidden')&&!document.getElementById('welcomeDashboard').classList.contains('hidden')}
function ui(){const actions=document.querySelector('#unifiedNav .nav-actions');if(!actions)return;let b=document.getElementById('homeNatureToggle');if(!b){b=document.createElement('button');b.id='homeNatureToggle';b.className='nav-quiet nav-symbol';b.dataset.go='nature';actions.insertBefore(b,document.getElementById('navMore'));b.onclick=()=>{if(unlocked||!save.homeNature)save.homeNature=!save.homeNature;persist();unlocked=true;sync()}}const label=save.homeNature?T('Nature sounds: On','自然声音：开'):T('Nature sounds: Off','自然声音：关'),symbol=window.MindGardenIcon(save.homeNature?'sound':'muted');if(b.innerHTML!==symbol)b.innerHTML=symbol;b.setAttribute('aria-label',label);b.setAttribute('aria-pressed',String(save.homeNature));b.dataset.playing=String(active);b.dataset.soundscape=lastMode;b.title=label;document.querySelectorAll('#navMenu [data-go="nature"]').forEach(el=>el.setAttribute('aria-pressed',String(save.homeNature)))}
function stop(){generation++;clearInterval(timer);engine?.stop();engine=null;if(bus){bus.disconnect();bus=null}active=false;if(ctx)ctx.suspend().catch(()=>{});ui()}
async function sync(){const mode=document.documentElement.dataset.gardenSceneMode==='dark'?'home-night':'home-day';if(!unlocked||!save.homeNature||!visible()||(window.MindGardenSound?.status().playing||window.MindGardenWelcomeMedia?.audible())){if(active)stop();else generation++;ui();return}if(active&&lastMode===mode){ui();return}stop();const g=++generation;try{ctx=ctx||new(window.AudioContext||window.webkitAudioContext)();await ctx.resume();if(g!==generation)return;bus=ctx.createGain();bus.gain.value=.3;bus.connect(ctx.destination);engine=window.MindGardenNatureComposer(ctx,bus,bus,{music:'none',nature:mode},Math.random()*0xffffffff);engine.schedule(ctx.currentTime+1.5);timer=setInterval(()=>engine?.schedule(ctx.currentTime+1.5),500);lastMode=mode;active=true;ui()}catch{active=false;ui()}}
document.addEventListener('click',e=>{if(e.target.closest('#homeNatureToggle'))return;if(!unlocked){unlocked=true;sync()}});document.addEventListener('keydown',()=>{if(!unlocked){unlocked=true;sync()}},{once:true});
new MutationObserver(()=>{ui();sync()}).observe(document.getElementById('welcomeDashboard'),{childList:true,attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.getElementById('ov'),{attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.getElementById('home'),{attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-garden-scene-mode']});document.addEventListener('visibilitychange',sync);window.addEventListener('gardenSoundChange',sync);window.addEventListener('gardenPlayerChange',sync);window.addEventListener('gardenVideoSoundChange',sync);window.addEventListener('pagehide',stop);new MutationObserver(ui).observe(document.getElementById('unifiedNav'),{childList:true});window.MindGardenHomeNature={sync,status:()=>({enabled:save.homeNature,active,mode:lastMode})};ui();
})();

;
/* welcome-media.js */
(function(){
const T=(a,b)=>save.lang==='zh'?b:a;let records=[],dbPromise,loadGeneration=0,currentVideo=null,currentId='',currentHost=null;
const mode=()=>document.documentElement.dataset.gardenSceneMode||'light',key=()=>mode()==='light'?'heroLight':'heroDark';
function db(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{if(!window.indexedDB)return reject(Error('Video storage unavailable'));const r=indexedDB.open('mindGardenVideos',1);r.onupgradeneeded=()=>r.result.createObjectStore('videos',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)}))}
async function mutate(record,remove=false){const d=await db();await new Promise((resolve,reject)=>{const tx=d.transaction('videos','readwrite');remove?tx.objectStore('videos').delete(record.id):tx.objectStore('videos').put(record);tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error||Error(T('Not enough browser storage.','浏览器存储空间不足。')))})}
async function loadVideos(){const generation=++loadGeneration,owner=save.cp;clearVideo();records.forEach(r=>URL.revokeObjectURL(r.url));records=[];render();try{const d=await db(),all=await new Promise((resolve,reject)=>{const r=d.transaction('videos').objectStore('videos').getAll();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});if(generation!==loadGeneration)return;records=all.filter(r=>r.owner===owner).map(r=>({...r,url:URL.createObjectURL(r.blob)}));render()}catch{}}
function items(){return window.MindGardenScenes.scenes.map(s=>({id:s.id,label:T(s.en,s.zh),type:'scene'})).concat(window.MindGardenPhotos?.get(mode())?[{id:'photo',label:T('My photo','我的照片'),type:'photo'}]:[]).concat(records.map(r=>({id:r.id,label:r.name,type:'video',url:r.url})))}
function selected(list){return list.find(x=>x.id===save[key()])||list.find(x=>x.id===(save['photo'+mode()]?'photo':save[mode()==='light'?'sceneLight':'sceneDark']))||list[0]}
function clearVideo(){if(currentVideo){currentVideo.pause();currentVideo.removeAttribute('src');currentVideo.load();currentVideo.remove()}currentVideo=null;currentId='';window.dispatchEvent(new Event('gardenVideoSoundChange'))}
function select(item){if(!item)return;save[key()]=item.id;if(item.type==='scene'){save[mode()==='light'?'sceneLight':'sceneDark']=item.id;save['photo'+mode()]=false}else if(item.type==='photo')save['photo'+mode()]=true;persist();window.MindGardenScenes.apply();render()}
function render(){const host=document.querySelector('.welcome-scene');if(!host)return;const list=items(),item=selected(list);if(host!==currentHost){clearVideo();currentHost=host}
const controls=document.querySelector('#unifiedNav .nav-actions');if(!controls)return;
let animation=document.getElementById('homeAnimationToggle');if(!animation){animation=document.createElement('button');animation.id='homeAnimationToggle';animation.className='nav-quiet nav-symbol';animation.dataset.go='motion';controls.insertBefore(animation,document.getElementById('navMore'));animation.onclick=()=>{const motion=window.MindGardenMotion,wasOff=motion.effectiveMode()==='off';motion.setMode(wasOff?(['gentle','standard'].includes(save.motionPrevious)?save.motionPrevious:'gentle'):'off')}}
const off=window.MindGardenMotion.effectiveMode()==='off',symbol=window.MindGardenIcon(off?'play':'pause');if(animation.innerHTML!==symbol)animation.innerHTML=symbol;animation.setAttribute('aria-pressed',String(!off));animation.setAttribute('aria-label',off?T('Play garden animation','播放花园动画'):T('Pause garden animation','暂停花园动画'));animation.title=off?T('Animation: Off','动画：关'):T('Animation: On','动画：开');document.querySelectorAll('#navMenu [data-go="motion"]').forEach(el=>el.setAttribute('aria-pressed',String(!off)));
let tray=host.querySelector('.hero-media-controls');if(!tray){tray=document.createElement('div');tray.className='hero-media-controls';tray.setAttribute('role','group');host.append(tray)}tray.setAttribute('aria-label',T('Welcome scenery','欢迎页背景'));
for(const [id,direction,text] of [['heroPrevious',-1,T('Previous background or video','上一个背景或视频')],['heroNext',1,T('Next background or video','下一个背景或视频')]]){let b=document.getElementById(id);if(!b){b=document.createElement('button');b.id=id;b.className='hero-arrow';b.textContent=direction<0?'‹':'›';tray.append(b);b.onclick=()=>{const options=items(),i=options.findIndex(x=>x.id===selected(options).id);select(options[(i+direction+options.length)%options.length])}}b.setAttribute('aria-label',text)}
let caption=document.getElementById('heroMediaCaption');if(!caption){caption=document.createElement('div');caption.id='heroMediaCaption';caption.setAttribute('aria-live','polite');tray.append(caption)}tray.append(document.getElementById('heroPrevious'),caption,document.getElementById('heroNext'));caption.textContent=(list.indexOf(item)+1)+' / '+list.length+' · '+item.label;
if(item.type==='video'){if(currentId!==item.id){clearVideo();const v=document.createElement('video');v.id='welcomeVideo';v.className='welcome-video';v.controls=true;v.playsInline=true;v.preload='metadata';v.muted=true;v.loop=true;v.src=item.url;v.setAttribute('aria-label',T('Welcome video: ','欢迎视频：')+item.label);currentVideo=v;currentId=item.id;host.prepend(v);const sound=()=>{if(!v.paused&&!v.muted&&v.volume>0)window.MindGardenSound?.stop();window.dispatchEvent(new Event('gardenVideoSoundChange'))};['play','pause','volumechange','ended'].forEach(e=>v.addEventListener(e,sound));v.onerror=()=>{caption.textContent=T('This video format cannot play here. Choose another video in Settings.','此浏览器无法播放该视频，请在设置中选择其他视频。')}}host.classList.add('has-welcome-video')}else{clearVideo();host.classList.remove('has-welcome-video')}
let play=document.getElementById('heroVideoPlay');if(item.type==='video'){if(!play){play=document.createElement('button');play.id='heroVideoPlay';play.className='btn';tray.append(play)}play.textContent=T('Play / pause video','播放 / 暂停视频');play.onclick=()=>{if(currentVideo.paused)currentVideo.play().catch(()=>{caption.textContent=T('Unable to play this video. Try an MP4 or WebM file.','无法播放，请尝试MP4或WebM文件。')});else currentVideo.pause()}}else play?.remove();
}
window.MindGardenWelcomeMedia={render,audible:()=>!!currentVideo&&!currentVideo.paused&&!currentVideo.muted&&currentVideo.volume>0};
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',render);
const original=window.openSet;window.openSet=function(){original();const group=document.createElement('fieldset');group.className='video-settings';group.innerHTML='<legend>'+T('Welcome videos','欢迎页视频')+'</legend><p>'+T('Add up to 3 MP4 or WebM videos for this player, up to 100 MB each. Videos stay in this browser. Select one or use the scenery controls below the welcome actions. Playback starts muted; use the video controls to change sound.','为此玩家添加最多3个MP4或WebM视频，每个不超过100MB。视频保存在此浏览器，可通过欢迎页下方的背景切换箭头切换。默认静音，可用视频控件调整。')+'</p><label class="btn">'+T('Add videos','添加视频')+'<input id="welcomeVideoFiles" type="file" accept="video/mp4,video/webm,.mp4,.webm" multiple></label><div class="video-list">'+records.map(r=>'<div><span>'+esc(r.name)+'</span><button class="btn" data-use-video="'+r.id+'">'+T('Use video','使用视频')+'</button><button class="btn" data-remove-video="'+r.id+'">'+T('Remove','删除')+'</button></div>').join('')+'</div><p id="videoStatus" role="status"></p>';document.getElementById('sd').parentElement.before(group);const release=document.createElement('p');release.id='appReleaseInfo';release.style.cssText='text-align:center;font-size:.8rem';release.textContent='Mind Garden '+(document.querySelector('meta[name="mind-garden-release"]')?.content||'');group.after(release);
const active=owner=>owner===save.cp&&group.isConnected&&!document.getElementById('ov').classList.contains('hidden');
document.getElementById('welcomeVideoFiles').onchange=async e=>{const owner=save.cp,selectionKey=key(),files=[...e.target.files];if(!files.length)return;e.target.disabled=true;let added=0,latest;try{if(records.length+files.length>3)throw Error(T('Keep up to 3 videos per player. Remove one first.','每位玩家最多3个视频，请先删除一个。'));for(const file of files){if(file.size>100*1024*1024||!(/\.(mp4|webm)$/i.test(file.name)))throw Error(T('Choose MP4/WebM files smaller than 100 MB.','请选择小于100MB的MP4/WebM视频。'));const record={id:typeof crypto.randomUUID==='function'?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join(''),owner,name:file.name,blob:file};await mutate(record);added++;latest=record.id}if(owner!==save.cp)return;await loadVideos();if(owner!==save.cp)return;save[selectionKey]=latest;persist();render();if(active(owner)){openSet();document.getElementById('videoStatus').textContent=T('Video saved for this player.','视频已为此玩家保存。')}}catch(error){if(owner===save.cp){if(added)await loadVideos();if(active(owner)){openSet();document.getElementById('videoStatus').textContent=error.message}}}finally{e.target.disabled=false}};
group.querySelectorAll('[data-use-video]').forEach(b=>b.onclick=()=>{select(items().find(x=>x.id===b.dataset.useVideo));closeOv()});group.querySelectorAll('[data-remove-video]').forEach(b=>b.onclick=async()=>{const owner=save.cp;b.disabled=true;try{await mutate({id:b.dataset.removeVideo},true);if(owner!==save.cp)return;for(const k of ['heroLight','heroDark'])if(save[k]===b.dataset.removeVideo)save[k]=null;persist();await loadVideos();if(active(owner))openSet()}catch(e){if(active(owner))group.querySelector('#videoStatus').textContent=e.message}finally{b.disabled=false}});
};document.getElementById('bSet').onclick=window.openSet;
new MutationObserver(render).observe(document.getElementById('unifiedNav'),{childList:true});
new MutationObserver(render).observe(document.getElementById('welcomeDashboard'),{childList:true});window.addEventListener('gardenSceneChange',render);window.addEventListener('gardenPlayerChange',loadVideos);window.addEventListener('pagehide',()=>currentVideo?.pause());document.addEventListener('visibilitychange',()=>{if(document.hidden)currentVideo?.pause()});for(const id of ['home','welcomeDashboard'])new MutationObserver(()=>{if(document.getElementById(id).classList.contains('hidden'))currentVideo?.pause()}).observe(document.getElementById(id),{attributes:true,attributeFilter:['class']});loadVideos();render();
})();

;
/* data-export.js */
/* User-initiated export of the current local profile. No network calls. */
(function(){
'use strict';const T=(a,b)=>save.lang==='zh'?b:a;
const fields=['name','unlocked','stars','streak','last','log','share','gr','gp','fl','levels','preferences','multiplayerHistory','bt','gs','ok'];
const copy=v=>JSON.parse(JSON.stringify(v));
function backup(){persist();const profile={};for(const k of fields)if(me()[k]!==undefined)profile[k]=copy(me()[k]);return {format:'mind-garden-player-backup',schemaVersion:1,appVersion:(document.querySelector('meta[name="mind-garden-release"]')?.content||'').replace(/^v/,''),exportedAt:new Date().toISOString(),profileId:save.cp,profile,notes:{scope:'Current player on this device',history:'Only retained local activity (up to 300 games) and multiplayer results received since v3.8.4 are available.',excluded:['photos','videos','personal music files','online authentication tokens','other players'],restore:'Import this JSON in Settings > Backup and restore. It creates a separate player.'}}}
function cell(v){const s=String(v??'');return '"'+(/^[\s]*[=+@-]/.test(s)?"'"+s:s).replace(/"/g,'""')+'"'}
function csv(){const p=backup().profile,rows=[['record_type','date','activity','result','duration_seconds','score','round','total','value']];for(const r of p.log||[])rows.push(['activity',r.d,r.g,r.r,r.s,'','','','']);for(const [k,v] of Object.entries(p.stars||{}))rows.push(['stars','',k,'','','','','',v]);for(const [k,v] of Object.entries(p.levels||{}))rows.push(['level','',k,'','','','','',v]);rows.push(['garden_growth','','','','','','','',p.gr||0]);for(const r of p.multiplayerHistory||[])rows.push(['multiplayer',r.date,r.activity,r.skipped?'not_finished':'completed','',r.score,r.round,r.total,'']);return '\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')+'\r\n'}
function download(type){const json=type==='json',content=json?JSON.stringify(backup(),null,2):csv(),blob=new Blob([content],{type:json?'application/json;charset=utf-8':'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mind-garden-player-'+dstr()+'.'+type;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);return a.download}
function validated(text){
 if(typeof text!=='string'||text.length>1024*1024)throw Error(T('Choose a Mind Garden JSON backup smaller than 1 MB.','请选择小于1 MB的心灵花园 JSON 备份。'));
 let data;try{data=JSON.parse(text)}catch{throw Error(T('This file is not valid JSON.','此文件不是有效的 JSON。'))}
 const object=v=>v&&typeof v==='object'&&!Array.isArray(v),bad=()=>{throw Error(T('This backup has invalid or unsupported data. No players were changed.','备份包含无效或不支持的数据，没有更改任何玩家。'))},num=(v,min,max)=>{if(typeof v!=='number'||!Number.isFinite(v)||v<min||v>max)bad();return v},str=(v,max)=>{if(typeof v!=='string'||v.length>max)bad();return v};
 if(!object(data)||data.format!=='mind-garden-player-backup'||data.schemaVersion!==1||!object(data.profile))bad();
 const p=data.profile;if(typeof p.name!=='string'||!p.name.trim()||p.name.length>60)bad();const out=newP(p.name.trim());
 for(const [k,max]of[['unlocked',20],['streak',100000],['gr',60],['gp',10000000],['gs',1000000],['ok',100000000]])if(p[k]!==undefined)out[k]=num(p[k],0,max);
 if(p.last!==undefined){str(p.last,10);if(p.last&&!/^\d{4}-\d{2}-\d{2}$/.test(p.last))bad();out.last=p.last}
 if(p.fl!==undefined){if(!FLK.concat(['mixed']).includes(p.fl))bad();out.fl=p.fl}
 for(const [k,max]of[['stars',3],['levels',15],['bt',86400]])if(p[k]!==undefined){if(!object(p[k])||Object.keys(p[k]).length>1000)bad();out[k]={};for(const [key,value]of Object.entries(p[k])){if(!/^[a-zA-Z0-9_.:-]{1,80}$/.test(key)||['__proto__','constructor','prototype'].includes(key))bad();out[k][key]=num(value,0,max)}}
 if(p.log!==undefined){if(!Array.isArray(p.log)||p.log.length>300)bad();out.log=p.log.map(r=>{if(!object(r)||!/^\d{4}-\d{2}-\d{2}$/.test(r.d))bad();return {d:str(r.d,10),g:str(r.g,80),r:num(r.r,0,1000000),s:num(r.s,0,86400),...(r.level===undefined?{}:{level:num(r.level,1,15)})}})}
 if(p.multiplayerHistory!==undefined){if(!Array.isArray(p.multiplayerHistory)||p.multiplayerHistory.length>300)bad();out.multiplayerHistory=p.multiplayerHistory.map(r=>{if(!object(r)||!Number.isFinite(Date.parse(r.date))||typeof r.skipped!=='boolean')bad();return {key:str(r.key,150),date:str(r.date,40),activity:str(r.activity,40),round:num(r.round,1,1000000),score:r.score===null?null:num(r.score,0,1000000),total:num(r.total,0,1000000000),skipped:r.skipped}})}
 const defaults=window.MindGardenPlayerPreferences.defaults;out.preferences=copy(defaults);
 if(p.preferences!==undefined){if(!object(p.preferences))bad();for(const [key,def]of Object.entries(defaults)){const v=p.preferences[key];if(v===undefined)continue;
  if(key==='textScale'){out.preferences[key]=v===null?null:num(v,.8,2);continue}
  if(['heroLight','heroDark','photolight','photodark'].includes(key))continue;
  if(key==='soundscape'){if(!object(v))bad();for(const [k,d]of Object.entries(def)){if(v[k]===undefined)continue;if(typeof d==='number')out.preferences[key][k]=num(v[k],0,100);else if(typeof d==='boolean'){if(typeof v[k]!=='boolean')bad();out.preferences[key][k]=v[k]}else out.preferences[key][k]=str(v[k],40)}if(out.preferences[key].music==='personal')out.preferences[key].music='strings';continue}
  if(typeof def==='number')out.preferences[key]=num(v,0,key==='bn'?120:1);
  else if(typeof def==='boolean'){if(typeof v!=='boolean')bad();out.preferences[key]=v}
  else out.preferences[key]=str(v,40);
 }
 const enums={lang:['en','zh'],mode:['auto','light','dark'],th:['cream','sand'],motionMode:['off','gentle','standard'],motionPrevious:['off','gentle','standard'],sceneLight:['blossom','meadow','pond'],sceneDark:['blossom','meadow','pond']};for(const [key,values]of Object.entries(enums))if(!values.includes(out.preferences[key]))bad();}
 out.share=0;return out;
}
function importBackup(text){const profile=validated(text);persist();const id='import-'+(typeof crypto.randomUUID==='function'?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('')),next=copy(save);next.pr[id]=profile;localStorage.setItem('gardenMatch',JSON.stringify(next));save.pr[id]=profile;return {id,name:profile.name}}
const original=window.openSet;window.openSet=function(){original();const section=document.createElement('fieldset');section.className='data-export-settings';section.innerHTML='<legend>'+T('Backup and restore','备份与恢复')+'</legend><p>'+T('Save this player’s history, scores and preferences. Import a JSON backup as a separate player.','保存此玩家的历史、成绩与偏好设置。导入 JSON 备份为独立玩家。')+'</p><div class="row"><button type="button" class="btn" id="exportPlayerJSON">'+T('Download JSON backup','下载 JSON 备份')+'</button><button type="button" class="btn" id="exportPlayerCSV">'+T('Download activity CSV','下载活动 CSV')+'</button></div><label class="lab">'+T('Import JSON backup','导入 JSON 备份')+'<input type="file" id="importPlayerJSON" accept="application/json,.json"></label><div id="importPreview" hidden><p id="importSummary"></p><div class="row"><button type="button" class="btn" id="confirmImportPlayer">'+T('Import as a new player','导入为新玩家')+'</button><button type="button" class="btn" id="cancelImportPlayer">'+T('Cancel import','取消导入')+'</button></div></div><p class="tip">'+T('Existing players are kept. After importing, use Choose or add a player to select the restored player. Photos, videos, music files and online room sessions are not included. CSV cannot be imported.','保留现有玩家。导入后，使用“选择或添加玩家”选择恢复的玩家。不包含照片、视频、音乐文件或在线房间会话。不支持导入 CSV。')+'</p><p id="exportDataStatus" role="status"></p>';document.getElementById('sd').parentElement.before(section);
 const status=section.querySelector('#exportDataStatus');for(const [id,type]of[['exportPlayerJSON','json'],['exportPlayerCSV','csv']])section.querySelector('#'+id).onclick=()=>{try{download(type);status.textContent=T('Your file is ready. Check your browser downloads.','文件已准备好，请查看浏览器下载。')}catch{status.textContent=T('Could not prepare the export. Please try again.','无法准备导出文件，请重试。')}};
 let pending='',sequence=0;const input=section.querySelector('#importPlayerJSON'),preview=section.querySelector('#importPreview');
 input.onchange=async()=>{const seq=++sequence;pending='';preview.hidden=true;status.textContent='';try{const file=input.files?.[0];if(!file)return;if(file.size>1024*1024)throw Error(T('Choose a backup smaller than 1 MB.','请选择小于1 MB的备份。'));const text=await file.text();if(seq!==sequence||!section.isConnected)return;const p=validated(text);pending=text;section.querySelector('#importSummary').textContent=T('Ready to restore ','准备恢复：')+p.name+' · '+T('Retained games: ','保留的游戏记录：')+p.log.length+T('. Existing players will be kept.','。将保留现有玩家。');preview.hidden=false}catch(e){status.textContent=e.message}};
 section.querySelector('#cancelImportPlayer').onclick=()=>{sequence++;pending='';input.value='';preview.hidden=true};
 section.querySelector('#confirmImportPlayer').onclick=()=>{if(!pending)return;try{const p=importBackup(pending);pending='';input.value='';preview.hidden=true;status.textContent=T('Imported player: ','已导入玩家：')+p.name+T('. Select this player in Player & garden.','。请在“玩家与花园”中选择此玩家。')}catch(e){status.textContent=T('Import could not be saved. ','无法保存导入。')+e.message}};
};document.getElementById('bSet').onclick=window.openSet;window.MindGardenExport={backup,csv,validated,importBackup};
})();

;
/* text-size.js */
(function(){
const T=(a,b)=>save.lang==='zh'?b:a;
const current=()=>Number(document.documentElement.style.getPropertyValue('--fs'))||1;
const presets=[80,90,100,110,120,125,130,140,150,160,170,175,180,190,200];
function controls(id,compact=false){const cls=compact?'nav-quiet nav-text-button':'btn';return '<div class="text-size-controls'+(compact?' nav-text-size':'')+'" id="'+id+'" role="group" aria-label="'+T('Text size','文字大小')+'"><button type="button" class="'+cls+'" data-text-step="-1" aria-label="'+T('Smaller text','缩小文字')+'">T−</button><select class="text-size-preset" data-text-preset aria-label="'+T('Text size percentage','文字大小百分比')+'">'+presets.map(n=>'<option value="'+n+'">'+n+'%</option>').join('')+'</select><button type="button" class="'+cls+'" data-text-step="1" aria-label="'+T('Larger text','放大文字')+'">T+</button><button type="button" class="'+cls+'" data-text-reset aria-label="'+T('Reset text size to 100%','将文字大小恢复为100%')+'" title="'+T('Reset to 100%','恢复100%')+'">'+(compact?window.MindGardenIcon('reset'):'↺')+'</button><output class="sr text-size-value" aria-live="polite"></output></div>'}
function sync(){const percent=Math.round(current()*100);document.querySelectorAll('.text-size-value').forEach(o=>o.textContent=percent+'%');document.querySelectorAll('[data-text-preset]').forEach(s=>{s.querySelector('[data-custom-size]')?.remove();if(!presets.includes(percent)){const o=document.createElement('option');o.value=percent;o.textContent=percent+'%';o.dataset.customSize='true';s.append(o)}s.value=String(percent)});document.querySelectorAll('[data-text-step]').forEach(b=>b.disabled=+b.dataset.textStep<0?current()<=.8:current()>=2)}
function setSize(value){if(!Number.isFinite(value))return;save.textScale=Math.max(.8,Math.min(2,Math.round(value*100)/100));persist();applyPrefs();sync()}
function change(step){setSize(current()+step*.1)}
document.addEventListener('click',e=>{const step=e.target.closest('[data-text-step]'),reset=e.target.closest('[data-text-reset]');if(step)change(+step.dataset.textStep);if(reset)setSize(1)});
document.addEventListener('change',e=>{if(e.target.matches('[data-text-preset]'))setSize(Number(e.target.value)/100)});
function mount(){const appearance=document.getElementById('navAppearance');if(appearance&&!document.getElementById('navTextSize'))appearance.insertAdjacentHTML('beforebegin',controls('navTextSize',true));const menu=document.getElementById('navMenu');if(menu&&!document.getElementById('menuTextSize'))menu.querySelector('.nav-theme')?.insertAdjacentHTML('beforebegin','<fieldset class="nav-text-settings"><legend>'+T('Text size','文字大小')+'</legend>'+controls('menuTextSize')+'</fieldset>');sync()}
const nav=document.getElementById('unifiedNav');function clearance(){document.documentElement.style.setProperty('--nav-clearance',Math.ceil(nav.getBoundingClientRect().height+24)+'px')}if(window.ResizeObserver)new ResizeObserver(clearance).observe(nav);window.addEventListener('resize',clearance);clearance();
const original=window.openSet;window.openSet=function(){original();const section=document.createElement('fieldset');section.className='text-size-settings';section.innerHTML='<legend>'+T('Adjust text size','调整文字大小')+'</legend>'+controls('settingsTextSize')+'<p>'+T('Choose a percentage, use T− / T+ for 10-point steps, or ↺ to return to 100%. Your choice follows this player.','选择百分比，使用T− / T+每次调整10个百分点，或点击↺恢复100%。设置随此玩家保存。')+'</p>';document.querySelector('#box .account-settings')?.after(section);sync()};document.getElementById('bSet').onclick=window.openSet;
new MutationObserver(mount).observe(nav,{childList:true});window.addEventListener('gardenPlayerChange',mount);mount();window.MindGardenTextSize={current,change,sync,setSize};
})();

;
/* bouquet-3d.js */
/* A lightweight 3D arrangement projected into SVG; works without WebGL. */
(function(){
'use strict';let controller,angle=.3;
const NS='http://www.w3.org/2000/svg',T=(a,b)=>save.lang==='zh'?b:a;
function project(p,a){const c=Math.cos(a),s=Math.sin(a),x=p.x*c+p.z*s,z=p.z*c-p.x*s,y=p.y*.987-z*.16,depth=z*.987+p.y*.16,k=600/(600-depth);return {x:150+x*k,y:222-y*k,z:depth,k}}
function attach(bed,points,type){
 controller?.dispose();bed?.querySelector('.bouquet-controls')?.remove();const svg=bed?.querySelector('svg');if(!svg)return;svg.classList.add('bouquet-3d');svg.setAttribute('aria-label',T('Rotating bouquet, ','旋转花束，')+points+'/60');
 const defs=svg.querySelector('defs')?.outerHTML||'',stages=gstage(points);let frame=0,last=0,visible=true,disposed=false;
 const plants=[];for(let i=0;i<5;i++){const t=i*2.399;plants.push({x:Math.cos(t)*61,z:Math.sin(t)*44,y:104+(i%3)*18,green:true,i})}
 for(let i=0;i<12;i++){if(stages[i]<2)continue;const t=i*2.399+.6,r=40+(i%3)*17;plants.push({x:Math.cos(t)*r,z:Math.sin(t)*r*.7,y:130+(i%4)*15,stage:stages[i],kind:type==='mixed'?FLK[i%6]:type,i})}
 function path(points,fill,stroke,width){const p=points.map(v=>project(v,angle));return '<path d="'+p.map((v,i)=>(i?'L':'M')+v.x.toFixed(2)+' '+v.y.toFixed(2)).join(' ')+(fill!=='none'?'Z':'')+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+width+'" stroke-linecap="round" stroke-linejoin="round"/>'}
 function draw(){
  const parts=[];
  for(const p of plants){
   const tip={x:p.x,y:p.y,z:p.z},at=t=>({x:p.x*t*t,y:p.y*t,z:p.z*t*t});
   let html=path(Array.from({length:12},(_,i)=>at(i/11)),'none',p.i%2?'#709b7b':'#4f8065',2.5);
   for(let j=0;j<(p.green?3:2);j++){const base=at(.57+j*.14),side=(p.i+j)%2?1:-1,w=16,leaf=[base,{x:base.x+side*w*.2,y:base.y+15,z:base.z+6},{x:base.x+side*w,y:base.y+26,z:base.z+side*9},{x:base.x+side*w*1.15,y:base.y+9,z:base.z+2},base];const lp=leaf.map(v=>project(v,angle));html+='<path d="M'+lp[0].x+' '+lp[0].y+' Q'+lp[1].x+' '+lp[1].y+' '+lp[2].x+' '+lp[2].y+' Q'+lp[3].x+' '+lp[3].y+' '+lp[0].x+' '+lp[0].y+'Z" fill="'+(p.i%2?'#9ebf8e':'#7ca88c')+'"/>'}
   if(!p.green){const q=project(tip,angle),u=project({...tip,x:tip.x+1},angle),v=project({...tip,y:tip.y-1},angle),matrix=[u.x-q.x,u.y-q.y,v.x-q.x,v.y-q.y,q.x,q.y].map(n=>n.toFixed(4)).join(' ');html+='<g transform="matrix('+matrix+')" opacity="'+(.82+.18*Math.cos(angle)).toFixed(3)+'">'+(p.stage>=4?head(p.kind,0,0,p.stage===4?.75:1.05):'<ellipse cx="0" cy="-2" rx="6" ry="10" fill="#d99aa9"/>')+'</g>'}
   parts.push({z:project({...tip,y:p.y*.55},angle).z,html});
  }
  parts.sort((a,b)=>a.z-b.z);
  const ribbon=[{x:-13,y:8,z:4},{x:13,y:8,z:4},{x:11,y:0,z:4},{x:-11,y:0,z:4}],bow=[{x:0,y:3,z:8},{x:-20,y:15,z:10},{x:-25,y:5,z:8},{x:-15,y:0,z:7},{x:0,y:3,z:8},{x:20,y:15,z:10},{x:25,y:5,z:8},{x:15,y:0,z:7},{x:0,y:3,z:8}];
  svg.innerHTML=defs+'<circle cx="150" cy="135" r="118" fill="url(#bouquetGlow)"/><ellipse cx="150" cy="244" rx="46" ry="5" fill="#143e3520"/>'+parts.map(p=>p.html).join('')+path(ribbon,'#d7ad84','none',0)+path(bow,'none','#d6af84',3)+path([{x:-2,y:1,z:8},{x:-13,y:-19,z:9}],'none','#cba37e',3)+path([{x:3,y:1,z:8},{x:13,y:-17,z:9}],'none','#cba37e',3);svg.dataset.angle=angle.toFixed(4);
 }
 const controls=document.createElement('div');controls.className='bouquet-controls';controls.innerHTML='<button class="btn" type="button" data-bouquet-turn="-1" aria-label="'+T('Turn bouquet left','向左转动花束')+'">↶</button><button class="btn" type="button" id="bouquetRotate"></button><button class="btn" type="button" data-bouquet-turn="1" aria-label="'+T('Turn bouquet right','向右转动花束')+'">↷</button>';svg.after(controls);
 const button=controls.querySelector('#bouquetRotate'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const allowed=()=>window.MindGardenMotion.effectiveMode()!=='off';
 function sync(){button.disabled=!allowed();const label=!allowed()?T('Rotation off','旋转已关闭'):save.bouquetRotation===false?T('Rotate bouquet','旋转花束'):T('Pause rotation','暂停旋转');button.textContent=allowed()&&save.bouquetRotation!==false?'||':'▶';button.setAttribute('aria-label',label);button.title=label;button.setAttribute('aria-pressed',String(allowed()&&save.bouquetRotation!==false));svg.dataset.paused=String(!allowed()||save.bouquetRotation===false)}
 button.onclick=()=>{save.bouquetRotation=save.bouquetRotation===false;persist();sync()};controls.querySelectorAll('[data-bouquet-turn]').forEach(b=>b.onclick=()=>{angle+=Number(b.dataset.bouquetTurn)*Math.PI/6;draw()});
 function tick(now){if(disposed)return;frame=requestAnimationFrame(tick);const dt=Math.min((now-last)/1000,.1);if(now-last<33)return;last=now;if(!document.hidden&&document.getElementById('ov').classList.contains('hidden')&&!document.getElementById('home').classList.contains('hidden')&&visible&&allowed()&&save.bouquetRotation!==false){angle=(angle+dt*Math.PI*2/(window.MindGardenMotion.effectiveMode()==='gentle'?36:24))%(Math.PI*2);draw()}}
 const observer=new MutationObserver(sync);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion','data-still']});let intersection;if(window.IntersectionObserver){intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting});intersection.observe(bed)}reduced.addEventListener?.('change',sync);draw();sync();frame=requestAnimationFrame(tick);
 controller={dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection?.disconnect();reduced.removeEventListener?.('change',sync)}};
}
window.MindGardenBouquet={attach,project};const bed=document.getElementById('livingGarden');if(bed)attach(bed,Math.min(60,me().gr||0),me().fl||'mixed');
})();

;
/* responsive-nav.js */
/* Keep one navigation row; measure real controls after fonts/preferences change. */
(function(){
'use strict';
const nav=document.getElementById('unifiedNav');if(!nav)return;
const T=(a,b)=>save.lang==='zh'?b:a;
const removalOrder=['contact','about','language','music','appearance','text','nature','motion','leaderboard','progress','online','library'];
function fit({available,brand,compactBrand,main,tools,toggle,gap=12,mainGap=5,toolGap=6}){
 const hidden=new Set(),sum=(items,space)=>{const shown=items.filter(x=>!hidden.has(x.key));return shown.reduce((s,x)=>s+x.width,0)+Math.max(0,shown.length-1)*space};
 const required=(b)=>{const center=sum(main,mainGap),right=sum([...tools,{key:'toggle',width:toggle}],toolGap);return center?center+2*Math.max(b,right)+2*gap:b+right+gap};
 for(const key of removalOrder){if(required(brand)<=available-2)break;hidden.add(key)}
 const compact=required(brand)>available-2;
 return {hidden:[...hidden],compact,required:required(compact?compactBrand:brand)};
}
let scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;layout()})}
function layout(){
 if(!nav.isConnected||!nav.clientWidth)return;
 const brand=nav.querySelector('.nav-brand'),main=nav.querySelector('.nav-items'),actions=nav.querySelector('.nav-actions'),more=document.getElementById('navMore');
 if(!brand||!main||!actions||!more)return;
 const focus=document.activeElement,mainButtons=[...main.children],toolButtons=[...actions.children].filter(x=>x!==more),all=[...mainButtons,...toolButtons];
 nav.dataset.navCompact='false';nav.dataset.navEmpty='false';
 for(const el of all)el.dataset.navHidden='false';
 nav.classList.add('nav-measuring');
 const width=el=>Math.ceil(el.getBoundingClientRect().width);
 const style=getComputedStyle(nav),available=nav.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
 const brandWidth=width(brand),gap=parseFloat(style.columnGap)||12;
 const options={available,brand:brandWidth,compactBrand:48,main:mainButtons.map(el=>({key:el.dataset.go,width:width(el)})),tools:toolButtons.map(el=>({key:el.id==='navTextSize'?'text':el.dataset.go,width:width(el)})),toggle:width(more),gap,mainGap:parseFloat(getComputedStyle(main).gap)||5,toolGap:parseFloat(getComputedStyle(actions).gap)||6};
 const result=fit(options);
 for(const el of all)el.dataset.navHidden=String(result.hidden.includes(el.id==='navTextSize'?'text':el.dataset.go));
 nav.dataset.navCompact=String(result.compact);
 nav.dataset.navEmpty=String(mainButtons.every(el=>el.dataset.navHidden==='true'));
 nav.classList.remove('nav-measuring');nav.classList.add('nav-overflow-ready');
 // A focused control that moves into the menu stays available to keyboard users.
 if(focus&&all.some(el=>el.dataset.navHidden==='true'&&el.contains(focus))){
  const menu=document.getElementById('navMenu');menu.classList.remove('hidden');more.setAttribute('aria-expanded','true');more.setAttribute('aria-label',T('Close menu','关闭菜单'));
  let selector=focus.hasAttribute('data-text-preset')?'[data-text-preset]':focus.hasAttribute('data-text-reset')?'[data-text-reset]':focus.hasAttribute('data-text-step')?'[data-text-step="'+focus.dataset.textStep+'"]':focus.dataset.go?'[data-go="'+focus.dataset.go+'"]':null;
  const destination=selector?menu.querySelector(selector)||more:more;const group=destination.closest('details');if(group)group.open=true;destination.focus({preventScroll:true});
 }
}
const resize=window.ResizeObserver?new ResizeObserver(schedule):null;
function observe(){resize?.disconnect();resize?.observe(nav);for(const el of nav.querySelectorAll('.nav-brand,.nav-items>*,.nav-actions>*'))resize?.observe(el);schedule()}
new MutationObserver(observe).observe(nav,{childList:true,subtree:true});
new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['style','lang','data-text-large']});
window.addEventListener('resize',schedule);window.visualViewport?.addEventListener('resize',schedule);
window.addEventListener('gardenPlayerChange',schedule);document.fonts?.ready.then(schedule);
window.MindGardenNav={fit,layout,schedule};observe();layout();
})();

;
/* v4.js */
/* V4: persistent quiet play and concise, bilingual first-use help. */
(function(){
'use strict';
const root=document.documentElement,media=matchMedia('(prefers-color-scheme: dark)'),T=(en,zh)=>save.lang==='zh'?zh:en;
let online=false;
function toolbar(){return '<button type="button" class="btn v4-scenery-toggle" data-v4-toggle aria-label="'+T('Garden background','花园背景')+'" aria-pressed="false"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="16" cy="8" r="2"/><path d="m4 18 6-7 5 5 3-3 3 4"/></svg></button>'}
function bind(host){host.querySelectorAll('[data-v4-toggle]').forEach(b=>b.onclick=()=>{save.quietGames=save.quietGames===false;persist();sync()})}
function sync(){
 root.dataset.v4Mode=save.mode==='dark'||save.mode!=='light'&&media.matches?'dark':'light';
 root.dataset.gameView=save.quietGames===false?'garden':'quiet';
 root.dataset.gameActive=online||document.getElementById('home').classList.contains('hidden')?'1':'0';
 document.querySelectorAll('[data-v4-toggle]').forEach(b=>{const on=save.quietGames===false;b.setAttribute('aria-pressed',String(on));b.title=on?T('Garden background on — switch off','花园背景已开 — 点击关闭'):T('Garden background off — switch on','花园背景已关 — 点击开启')});
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=root.dataset.v4Mode==='light'?'#E6EFE3':'#123A3D';
}
function mount(){
 for(const id of ['game','mini']){const host=document.getElementById(id);let bar=host.querySelector('.v4-game-tools');if(!bar){bar=document.createElement('div');bar.className='v4-game-tools';host.querySelector('.hud').after(bar)}bar.innerHTML=toolbar();bind(bar)}sync();
}
const prefs=window.applyPrefs;window.applyPrefs=function(){const out=prefs.apply(this,arguments);sync();return out};
const show=window.show;window.show=function(){const out=show.apply(this,arguments);online=false;sync();return out};
const overlay=window.overlay;window.overlay=function(){const out=overlay.apply(this,arguments),box=document.getElementById('box');online=!!box.querySelector('.mp-board,[data-answer],#onlineBingo');box.classList.remove('mp-dialog');box.classList.toggle('v4-online-game',online);if(online){const bar=document.createElement('div');bar.className='v4-game-tools';bar.innerHTML=toolbar();const board=box.querySelector('.mp-board,.gridm,#onlineBingo');board.before(bar);bind(bar)}sync();return out};
const close=window.closeOv;window.closeOv=function(){const out=close.apply(this,arguments);online=false;sync();return out};
const settings=window.openSet;window.openSet=function(){const out=settings.apply(this,arguments);const box=document.getElementById('box');if(box.querySelector('#v4GameSetting'))return out;const group=document.createElement('fieldset');group.id='v4GameSetting';group.className='v4-game-settings';group.innerHTML='<legend>'+T('A comfortable game view','舒适的游戏视图')+'</legend><p>'+T('Quiet uses a plain background while you play. Garden keeps your scenery. Your welcome garden stays visible in either mode.','安静模式在游戏时使用纯色背景；花园模式保留风景。两种模式都保留欢迎页的花园。')+'</p><div class="v4-game-tools">'+toolbar()+'</div>';box.querySelector('#sd')?.parentElement.before(group);bind(group);sync();return out};
document.getElementById('bSet').onclick=window.openSet;
function openGuide(){
 const active=document.activeElement,trigger=active?.closest('#navMenu')?document.getElementById('navMore'):active;
 const rows=[['☰','Menu','菜单','Find every control here when the screen is small or text is large.','屏幕较窄或文字较大时，可在这里找到全部控件。'],['T− / T+','Text size','文字大小','Make text smaller or larger. Choose a percentage; ↺ restores 100%.','缩小或放大文字，或选择百分比；↺恢复至100%。'],['☀ / ☾','Appearance','外观','Choose light, dark or automatic display mode from the menu.','在菜单中选择浅色、深色或自动显示模式。'],['文 / A','Language','语言','Switch between English and Chinese.','切换英文或中文。'],['♫','Music','音乐','Use 🔊 / 🔇 for nature sounds. Open Music for the mixer. Use Ⅱ / ▶ to pause or play garden animation.','🔊 / 🔇控制自然声音；音乐菜单调整混音。Ⅱ / ▶暂停或播放花园动画。'],['‹ / ›','Scenery','背景','Change your welcome scenery beside its caption below the main actions.','使用欢迎页主要操作下方、背景名称旁的箭头切换风景。']];
 overlay('<section id="v4Guide" aria-labelledby="v4GuideTitle"><h2 id="v4GuideTitle">'+T('Make Mind Garden yours','让心灵花园更适合您')+'</h2><p>'+T('Begin with today’s three activities, or choose any game. There is no need to rush.','可从今天的三项活动开始，或自由选择游戏。无需着急。')+'</p><dl class="v4-icon-guide">'+rows.map(r=>'<div><dt><span aria-hidden="true">'+r[0]+'</span> '+T(r[1],r[2])+'</dt><dd>'+T(r[3],r[4])+'</dd></div>').join('')+'</dl><p>'+T('During a game, use the small scenery icon to turn the garden background on or off. Pause or take a break at any time. About includes first-time setup, the full user guide, troubleshooting and privacy information.','游戏中可使用小风景图标开启或关闭花园背景。随时可以暂停或休息。“关于”包含首次设置、完整指南、问题排查与隐私信息。')+'</p><div class="row"><button type="button" class="btn main" id="v4GuideDone">'+T('Done','完成')+'</button></div></section>');
 const panel=document.getElementById('v4Guide'),done=document.getElementById('v4GuideDone');
 const finish=()=>{closeOv();if(trigger?.isConnected)trigger.focus()};done.onclick=finish;panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();finish()}if(e.key==='Tab'){e.preventDefault();done.focus()}};done.focus();
}
media.addEventListener('change',sync);window.addEventListener('gardenPlayerChange',mount);
window.MindGardenV4={sync,mount,openGuide};mount();
})();
(function(){
 document.addEventListener('click',event=>{const button=event.target.closest('.mg-help-trigger');document.querySelectorAll('.mg-help.is-open').forEach(help=>{if(help!==button?.parentElement){help.classList.remove('is-open');help.querySelector('button').setAttribute('aria-expanded','false')}});if(button){button.parentElement.classList.remove('is-dismissed');const open=button.parentElement.classList.toggle('is-open');button.parentElement.classList.toggle('is-dismissed',!open);button.setAttribute('aria-expanded',String(open))}});
 document.addEventListener('focusout',event=>{const help=event.target.closest('.mg-help');if(help&&!help.contains(event.relatedTarget))help.classList.remove('is-dismissed')});
 document.addEventListener('pointerout',event=>{const help=event.target.closest('.mg-help');if(help&&!help.contains(event.relatedTarget)&&!help.contains(document.activeElement))help.classList.remove('is-dismissed')});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.mg-help').forEach(help=>{help.classList.add('is-dismissed');help.classList.remove('is-open');help.querySelector('button').setAttribute('aria-expanded','false')})});
})();

;
/* mochi-widget.js */
/* Original Mochi artwork and a small, disposable frame-animation controller. */
(function(){
'use strict';
window.createMochiWidget=function(root,options={}){
 let species='cat';
 const T=(en,zh)=>options.language?.()==='zh'?zh:en;
 root.classList.add('mochi-widget');
 root.innerHTML='<button type="button" class="mochi-show" hidden>'+T('Show pet','显示宠物')+'</button><div class="mochi-content"><p class="mochi-eyebrow">'+T('YOUR GARDEN FRIEND','您的花园伙伴')+'</p><h2>'+T('Meet Mochi','认识糯米')+'</h2><label class="mochi-picker">'+T('Choose a friend','选择伙伴')+'<select aria-label="'+T('Choose a pet','选择宠物')+'"><option value="cat">'+T('Mochi · Cat','糯米 · 小猫')+'</option><option value="dog">'+T('Toby · Dog','托比 · 小狗')+'</option></select></label><button type="button" class="mochi-stage" aria-label="'+T('Pet Mochi the kitten','抚摸小猫糯米')+'"><span class="mochi-sprite" aria-hidden="true"></span><span class="mochi-prop" aria-hidden="true"></span></button><p class="mochi-status" role="status">'+T('Tap or gently stroke your pet','轻点或轻轻抚摸宠物')+'</p><div class="mochi-actions"><button type="button" data-mochi="pet">'+T('Pet','抚摸')+'</button><button type="button" data-mochi="play">'+T('Play','玩耍')+'</button><button type="button" data-mochi="feed">'+T('Feed','喂食')+'</button><button type="button" data-mochi="brush">'+T('Brush','梳毛')+'</button><button type="button" data-mochi="rest">'+T('Rest','休息')+'</button></div><div class="mochi-options"><button type="button" data-mochi="motion" aria-pressed="false">'+T('Pause motion','暂停动作')+'</button><button type="button" data-mochi="sound" aria-pressed="false">'+T('Soft sound: Off','轻柔音效：关')+'</button><button type="button" data-mochi="hide">'+T('Hide','隐藏')+'</button></div></div>';
 const sprite=root.querySelector('.mochi-sprite'),stage=root.querySelector('.mochi-stage'),status=root.querySelector('.mochi-status'),content=root.querySelector('.mochi-content'),show=root.querySelector('.mochi-show'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 sprite.style.backgroundImage='url("'+options.asset+'")';
 const sequences={idle:[0,0,0,0,1,2,1,0,3,0],pet:[4,5,6,7,6,5],play:[8,9,10,11,10,9],feed:[4,5,6,5],brush:[4,5,6,7,6,5],rest:[12,13,14,15,14,13]};
 let mode='idle',index=0,clock=null,reset=null,paused=false,hidden=false,visible=true,disposed=false,sound=false,ctx=null,audioNodes=[],strokeAt=0;
 function draw(frame){root.dataset.frame=frame;sprite.style.backgroundPosition=((frame%4)*100/3)+'% '+(Math.floor(frame/4)*100/3)+'%'}
 function quiet(){for(const node of audioNodes){try{node.stop();node.disconnect()}catch{}}audioNodes=[];if(ctx?.state==='running')ctx.suspend().catch(()=>{})}
 function purr(){if(!sound||disposed)return;try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio){status.textContent=T('Sound is unavailable; you can still pet Mochi.','声音不可用，仍可抚摸糯米。');return}quiet();ctx=ctx||new Audio();ctx.resume().catch(()=>{});const carrier=ctx.createOscillator(),pulse=ctx.createOscillator(),gain=ctx.createGain(),pulseGain=ctx.createGain();carrier.frequency.value=85;pulse.frequency.value=25;gain.gain.value=.015;pulseGain.gain.value=.012;pulse.connect(pulseGain);pulseGain.connect(gain.gain);carrier.connect(gain);gain.connect(ctx.destination);carrier.start();pulse.start();carrier.stop(ctx.currentTime+1.7);pulse.stop(ctx.currentTime+1.7);carrier.onended=()=>{gain.disconnect();pulseGain.disconnect()};audioNodes=[carrier,pulse]}catch{status.textContent=T('Sound could not start. Touch reactions still work.','声音无法启动，触摸互动仍可使用。')}}
 function blocked(){return disposed||hidden||!visible||document.hidden||paused||reduced.matches||options.motionAllowed?.()===false}
 function schedule(){clearTimeout(clock);clock=null;if(blocked())return;clock=setTimeout(()=>{index=(index+1)%sequences[mode].length;draw(sequences[mode][index]);schedule()},mode==='idle'?420:mode==='rest'?950:mode==='pet'?240:230)}
 function refresh(){if(blocked()){clearTimeout(clock);clock=null;quiet()}else if(clock===null)schedule();const b=root.querySelector('[data-mochi=motion]');b.setAttribute('aria-pressed',String(paused));b.textContent=reduced.matches?T('Reduced motion','减少动态效果'):paused?T('Resume motion','继续动作'):T('Pause motion','暂停动作')}
 function react(next){if(disposed)return;clearTimeout(reset);quiet();mode=next;root.dataset.mood=mode;index=0;draw(sequences[mode][0]);root.querySelectorAll('.mochi-actions button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mochi===mode)));root.querySelector('.mochi-prop').textContent=mode==='feed'?'🥣':mode==='brush'?'🪮':'';status.textContent=mode==='feed'?T('A little snack — thank you!','吃点零食，谢谢！'):mode==='brush'?T('Soft, gentle brushing','轻轻梳毛，真舒服'):mode==='pet'?T('A little scratch… lovely!','轻轻挠一挠……真舒服！'):mode==='play'?(species==='cat'?T('Let’s play with the yarn','一起玩毛线球吧'):T('Let’s play with the ball','一起玩球吧')):mode==='rest'?T('A quiet little nap','安静地睡个小觉'):T('Tap or gently stroke your pet','轻点或轻轻抚摸宠物');if(mode==='pet')purr();schedule();if(['pet','play','feed','brush'].includes(mode))reset=setTimeout(()=>react('idle'),mode==='play'?6500:3200)}
 function hide(){hidden=true;content.hidden=true;show.hidden=false;clearTimeout(reset);refresh();show.focus()}
 stage.onclick=()=>react('pet');stage.onpointermove=e=>{if(e.buttons&&Date.now()-strokeAt>450){strokeAt=Date.now();react('pet')}};
 root.querySelectorAll('[data-mochi]').forEach(b=>b.onclick=()=>{const action=b.dataset.mochi;if(action==='hide')return hide();if(action==='motion'){paused=!paused;refresh();return}if(action==='sound'){sound=!sound;b.setAttribute('aria-pressed',String(sound));b.textContent=sound?T('Soft sound: On','轻柔音效：开'):T('Soft sound: Off','轻柔音效：关');if(sound)purr();else quiet();return}react(action)});
 show.onclick=()=>{hidden=false;content.hidden=false;show.hidden=true;react('idle');stage.focus()};
 root.querySelector('select').onchange=e=>{species=e.target.value;sprite.style.backgroundImage='url("'+(species==='cat'?options.asset:'pets/toby-sprites.webp')+'")';root.querySelector('h2').textContent=species==='cat'?T('Meet Mochi','认识糯米'):T('Meet Toby','认识托比');stage.setAttribute('aria-label',species==='cat'?T('Pet Mochi the kitten','抚摸小猫糯米'):T('Pet Toby the puppy','抚摸小狗托比'));react('idle')};
 const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;refresh()},{threshold:.05}):null;observer?.observe(root);
 document.addEventListener('visibilitychange',refresh);reduced.addEventListener?.('change',refresh);
 draw(0);root.dataset.mood='idle';schedule();
 return {react,refresh,get mode(){return mode},destroy(){disposed=true;clearTimeout(clock);clearTimeout(reset);quiet();ctx?.close().catch(()=>{});observer?.disconnect();document.removeEventListener('visibilitychange',refresh);reduced.removeEventListener?.('change',refresh)}};
};
})();

;
/* garden-cat.js */
/* Welcome-page adapter; removes controllers when navigation rebuilds the page. */
(function(){
'use strict';
let controller=null,element=null;
function mount(){const host=document.querySelector('#welcomeDashboard .welcome-scene');if(element&&!element.isConnected){controller?.destroy();controller=null;element=null}if(!host)return;if(!element){element=document.createElement('section');element.id='gardenCat';host.append(element);controller=window.createMochiWidget(element,{asset:'pets/mochi-sprites.webp',language:()=>save.lang,motionAllowed:()=>window.MindGardenMotion?.effectiveMode()!=='off'&&document.documentElement.dataset.ambientPaused!=='true'})}controller?.refresh()}
new MutationObserver(mount).observe(document.getElementById('welcomeDashboard'),{childList:true});
new MutationObserver(()=>controller?.refresh()).observe(document.documentElement,{attributes:true,attributeFilter:['class','data-motion','data-ambient-paused']});
window.addEventListener('gardenPlayerChange',()=>{controller?.destroy();element?.remove();element=null;controller=null;mount()});window.addEventListener('pagehide',()=>controller?.destroy());window.addEventListener('pageshow',e=>{if(e.persisted){controller?.destroy();element?.remove();element=null;controller=null;mount()}});mount();
})();

;
/* garden-activities.js */
/* Six relaxed, bilingual activities. No network or personal data required. */
(function(){
'use strict';
const $=id=>document.getElementById(id),T=(a,b)=>save.lang==='zh'?b:a;
const specs={dots:['Connect the Dots','顺序连点','Join numbered or lettered dots to reveal a picture.','按数字或字母顺序连点，画出图片。','🔢',3],pets:['Garden Pets','花园宠物','Pet, feed, brush and play with your cat or dog.','抚摸、喂食、梳毛，与小猫小狗玩耍。','🐶',1],spot:['Spot the Difference · Garden','找不同 · 花园','Compare two garden pictures and mark what changed.','比较两张花园图片，找出不同之处。','🔍',4],links:['Colour Links','彩色连线','Connect matching symbols without crossing paths.','连接相同符号，不要交叉路线。','🧩',2],drawmemory:['Remember & Draw','记忆画图','Remember a shape, then draw it at your own pace.','记住图形，再按照自己的节奏画出来。','🔷',1],recall:['Number & Word Recall','数字与词语回忆','Remember a sequence of numbers or familiar words.','记住一串数字或熟悉的词语。','🔢',1]};
for(const[k,s]of Object.entries(specs))MG[k]={get n(){return T(s[0],s[1])},get d(){return T(s[2],s[3])},ic:s[4],g:s[5]};
const shapes=[{en:'Triangle',zh:'三角形',p:[[50,12],[88,85],[12,85],[50,12]]},{en:'Square',zh:'正方形',p:[[18,18],[82,18],[82,82],[18,82],[18,18]]},{en:'House',zh:'房子',p:[[15,45],[50,12],[85,45],[85,85],[15,85],[15,45]]},{en:'Diamond',zh:'菱形',p:[[50,8],[85,50],[50,92],[15,50],[50,8]]},{en:'Arrow',zh:'箭头',p:[[10,35],[58,35],[58,15],[90,50],[58,85],[58,65],[10,65],[10,35]]},{en:'Boat',zh:'小船',p:[[12,65],[45,65],[45,15],[80,60],[50,60],[50,65],[90,65],[75,85],[28,85],[12,65]]}];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a},pick=a=>a[Math.floor(Math.random()*a.length)];
function dotPoints(shape,count){const points=shape.p.slice(0,-1).map(p=>p.slice());while(points.length<count){const candidates=points.map((p,i)=>{const q=points[(i+1)%points.length];return {i,p:[(p[0]+q[0])/2,(p[1]+q[1])/2],distance:Math.hypot(p[0]-q[0],p[1]-q[1])}}).sort((a,b)=>b.distance-a.distance);const best=candidates.find(c=>points.every(p=>Math.hypot(p[0]-c.p[0],p[1]-c.p[1])>=15));if(!best)break;points.splice(best.i+1,0,best.p)}return points}
function sample(points,count){const lens=points.slice(1).map((p,i)=>Math.hypot(p[0]-points[i][0],p[1]-points[i][1])),total=lens.reduce((a,b)=>a+b,0);return Array.from({length:count},(_,i)=>{let d=total*i/(count-1),j=0;while(j<lens.length-1&&d>lens[j])d-=lens[j++];const f=lens[j]?d/lens[j]:0;return [points[j][0]+(points[j+1][0]-points[j][0])*f,points[j][1]+(points[j+1][1]-points[j][1])*f]})}
function normalized(points){if(!points.length)return [];const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y,s=Math.max(w,h,1);return points.map(p=>[(p[0]-x-w/2)/s,(p[1]-y-h/2)/s])}
function drawingScore(strokes,target){const input=strokes.filter(s=>s.length>1).flatMap(s=>sample(s,120));if(input.length<6)return 0;const a=normalized(input),b=normalized(sample(target,120)),distance=(u,v)=>u.reduce((sum,p)=>sum+Math.min(...v.map(q=>Math.hypot(p[0]-q[0],p[1]-q[1]))),0)/u.length;return Math.max(0,Math.min(1,1-(distance(a,b)+distance(b,a))*2.2))}
function linkPuzzle(level){const n=level+3,count=level+2;let order=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)order.push(y*n+(y%2?n-1-x:x));const turns=Math.floor(Math.random()*4),mirror=Math.random()<.5;order=order.map(v=>{let x=v%n,y=Math.floor(v/n);if(mirror)x=n-1-x;for(let t=0;t<turns;t++)[x,y]=[n-1-y,x];return y*n+x});const paths=[];let at=0;for(let i=0;i<count;i++){const len=i===count-1?order.length-at:Math.floor(order.length/count);paths.push(order.slice(at,at+len));at+=len}return{n,solution:paths,paths:paths.map(()=>[]),ends:paths.map(p=>[p[0],p.at(-1)]),selected:-1,history:[]}}
function adjacent(a,b,n){return Math.abs(a%n-b%n)+Math.abs(Math.floor(a/n)-Math.floor(b/n))===1}
function addLink(g,cell){const endpoint=g.ends.findIndex(p=>p.includes(cell));if(endpoint>=0&&!(g.selected===endpoint&&g.paths[endpoint].length&&cell!==g.paths[endpoint][0])){g.history.push(g.paths.map(p=>p.slice()));g.selected=endpoint;g.paths[endpoint]=[cell];return true}if(g.selected<0)return false;const path=g.paths[g.selected];if(path.at(-1)===cell)return false;if(g.paths.some((p,i)=>i!==g.selected&&p.includes(cell))||endpoint>=0&&endpoint!==g.selected||!adjacent(path.at(-1),cell,g.n))return false;g.history.push(g.paths.map(p=>p.slice()));const previous=path.indexOf(cell);if(previous>=0)path.splice(previous+1);else path.push(cell);if(g.ends[g.selected].includes(cell)&&cell!==path[0])g.selected=-1;return true}
const connected=g=>g.paths.every((p,i)=>p.length>1&&g.ends[i].includes(p[0])&&g.ends[i].includes(p.at(-1))&&p[0]!==p.at(-1));
const colors=['#b03249','#176aa1','#7b4caf','#9b5a05','#23754d'],symbols=['●','◆','★','▲','■'];
let active=null,clock=null,pet=null;
function clean(){clearInterval(clock);clock=null;pet?.destroy();pet=null;active=null}
const oldChoose=window.chooseMiniLevel,oldStart=window.startMG,oldShow=window.show,oldHome=window.toHome,oldMenu=$('bMn').onclick,oldPause=$('bPause2').onclick;
const has=k=>Object.hasOwn(specs,k);
window.show=function(id){if(id!=='mini')clean();return oldShow.apply(this,arguments)};
window.toHome=function(){clean();return oldHome.apply(this,arguments)};
window.startMG=function(k){if(has(k))return start(k,Math.min(3,window.mgDifficulty||1));clean();return oldStart.apply(this,arguments)};
window.chooseMiniLevel=function(k){if(!has(k))return oldChoose.apply(this,arguments);const level=Math.min(3,me().levels?.[k]||1);overlay('<h2>'+MG[k].n+'</h2><p>'+MG[k].d+'</p><div class="ga-options">'+(k==='pets'?'<p>'+T('No scores, no timers and no care penalties.','没有分数、计时或照顾惩罚。')+'</p>':'<label>'+T('Challenge','难度')+'<select id="gaLevel">'+[1,2,3].map(i=>'<option value="'+i+'"'+(i===level?' selected':'')+'>'+[T('Gentle','轻松'),T('Growing','进阶'),T('Challenge','挑战')][i-1]+'</option>').join('')+'</select></label>')+(k==='dots'?'<label>'+T('Sequence','顺序')+'<select id="gaMode"><option value="numbers">'+T('Numbers','数字')+'</option><option value="letters">'+T('Letters A–Z','字母A–Z')+'</option></select></label>':'')+(k==='recall'?'<label>'+T('Remember','记忆内容')+'<select id="gaMode"><option value="numbers">'+T('Numbers','数字')+'</option><option value="words">'+T('Words','词语')+'</option><option value="mixed">'+T('Mixed sequence','混合顺序')+'</option></select></label>':'')+(['recall','drawmemory'].includes(k)?'<label>'+T('Viewing time','观看时间')+'<select id="gaSeconds">'+[5,10,20,30].map(n=>'<option value="'+n+'"'+(n===10?' selected':'')+'>'+n+' '+T('seconds','秒')+'</option>').join('')+'</select></label>':'')+'</div><div class="ga-actions"><button class="btn main" id="gaStart">'+T('Play','开始')+'</button><button class="btn" id="gaCancel">'+T('Cancel','取消')+'</button></div>');$('gaStart').onclick=()=>start(k,+($('gaLevel')?.value||1),{mode:$('gaMode')?.value||'numbers',seconds:+($('gaSeconds')?.value||10)});$('gaCancel').onclick=closeOv};
function start(k,level=1,options={}){clean();mg=null;paused=false;level=Math.max(1,Math.min(3,level));active={type:k,level,mode:options.mode||'numbers',seconds:options.seconds||10,started:Date.now(),notice:'',hints:0,finished:false,paused:false,phase:'ready',strokes:[],found:[],zoom:false};const g=active;me().lg={k};persist();closeOv();show('mini');$('hLv2').textContent=MG[k].n;$('hRound').textContent=k==='pets'?T('Relax and enjoy','轻松享受'):T('Level ','难度 ')+level+' / 3';$('mmsg').textContent='';
 if(k==='dots'){g.shape=pick(shapes.slice(0,level===1?2:level===2?4:5));g.points=dotPoints(g.shape,[8,12,16][level-1]);g.next=0;g.lines=[]}
 if(k==='links')Object.assign(g,linkPuzzle(level));
 if(k==='spot'){g.changes=shuffle([0,1,2,3,4,5,6,7]).slice(0,[3,5,8][level-1]);g.variant=Math.floor(Math.random()*3)}
 if(k==='drawmemory'){g.shape=pick(shapes.slice(0,level===1?2:level===2?4:6));g.recognition=false}
 if(k==='recall'){const words=save.lang==='zh'?['花园','苹果','小猫','椅子','太阳','杯子','小船','月亮','书本','小鸟','面包','雨伞','河流','音乐','窗户','花朵']:['garden','apple','kitten','chair','sun','cup','boat','moon','book','bird','bread','umbrella','river','music','window','flower'];g.answer=g.mode==='numbers'?Array.from({length:[3,5,8][level-1]},()=>String(Math.floor(Math.random()*10))):shuffle(words).slice(0,[2,4,6][level-1]).map((w,i)=>g.mode==='mixed'&&i%2?String(Math.floor(Math.random()*90)+10):w)}render();window.scrollTo(0,0)}
function exit(){clean();toHome();window.MindGardenDashboard.library()}
function button(id,en,zh){return '<button class="btn" id="'+id+'">'+T(en,zh)+'</button>'}
function message(text){active.notice=text;const el=$('gaNotice');if(el)el.textContent=text}
function finish(rate=1){const g=active;if(!g||g.finished)return;g.finished=true;clearInterval(clock);const secs=Math.max(1,Math.round((Date.now()-g.started)/1000));logPlay(g.type,rate,secs,{level:g.level});award(Math.round(rate*5),null,secs);me().levels=me().levels||{};me().levels[g.type]=Math.max(me().levels[g.type]||1,g.level);persist();overlay('<h2>'+T('Activity complete','活动完成')+'</h2><p>'+T('Your activity is saved. Take your time choosing what comes next.','活动已保存。请慢慢选择下一步。')+'</p>'+(g.hints?'<p>'+T('Hints used: ','使用提示：')+g.hints+'</p>':'')+'<div class="ga-actions">'+(g.level<3?button('gaNext','Next level','下一级'):'')+button('gaAgain','Replay','再玩一次')+button('gaMenu','All Games','所有游戏')+'</div>');if($('gaNext'))$('gaNext').onclick=()=>start(g.type,g.level+1,g);$('gaAgain').onclick=()=>start(g.type,g.level,g);$('gaMenu').onclick=exit;window.MindGardenDaily?.complete(g.type)}
function pauseGame(){if(!active||active.finished)return;const g=active;g.paused=true;clearInterval(clock);pet?.refresh();overlay('<h2>'+T('Paused','已暂停')+'</h2><p>'+T('Resume when you are ready.','准备好后继续。')+'</p><div class="ga-actions">'+button('gaResume','Resume','继续')+button('gaLeave','All Games','所有游戏')+'</div>');$('gaResume').onclick=()=>{closeOv();g.paused=false;if(g.phase==='view')runClock();pet?.refresh()};$('gaLeave').onclick=exit}
$('bPause2').onclick=function(){if(active)return pauseGame();return oldPause.call(this)};
$('bMn').onclick=function(){if(active)return pauseGame();return oldMenu.call(this)};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&active&&!active.paused)pauseGame()});
function beginView(){active.phase='view';active.remaining=active.seconds;render();runClock()}
function runClock(){clearInterval(clock);clock=setInterval(()=>{if(!active||active.paused)return;active.remaining--;const counter=$('gaCountdown');if(counter)counter.textContent=active.remaining+' '+T('seconds','秒');if(active.remaining<=0){clearInterval(clock);active.phase='answer';render();$('gaAnswer')?.focus()}},1000)}
function svgShape(shape,cls=''){return '<svg class="ga-shape '+cls+'" viewBox="0 0 100 100" aria-hidden="true"><polyline points="'+shape.p.map(p=>p.join(',')).join(' ')+'" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'}
function shell(content){$('mp').innerHTML='<section class="ga-game">'+content+'<p id="gaNotice" class="ga-notice" role="status">'+esc(active.notice)+'</p></section>'}
function render(){const g=active;if(!g)return;if(g.type==='pets'){shell('<p>'+T('Choose a friend. Tap, stroke, feed or brush. No tasks are overdue.','选择伙伴，轻点、抚摸、喂食或梳毛。没有逾期任务。')+'</p><div id="gaPet"></div><div class="ga-actions">'+button('gaPetDone','Back to All Games','返回所有游戏')+'</div>');pet=window.createMochiWidget($('gaPet'),{asset:'pets/mochi-sprites.webp',language:()=>save.lang,motionAllowed:()=>!g.paused&&window.MindGardenMotion?.effectiveMode()!=='off'});$('gaPetDone').onclick=exit;return}
 if(g.type==='dots')return renderDots(g);if(g.type==='links')return renderLinks(g);if(g.type==='spot')return renderSpot(g);
 if(g.phase==='ready'){shell('<h2>'+T('Ready to remember?','准备好记忆了吗？')+'</h2><p>'+T('The picture or sequence appears only after you press Ready. You will have ','点击准备后才会显示图形或顺序。您有 ')+g.seconds+T(' seconds. Answer without a timer.',' 秒观看。回答不限时。')+'</p><div class="ga-actions">'+button('gaReady','Ready','准备')+'</div>');$('gaReady').onclick=beginView;return}
 if(g.phase==='view'){shell('<p id="gaCountdown">'+g.remaining+' '+T('seconds','秒')+'</p>'+(g.type==='drawmemory'?svgShape(g.shape):'<div class="ga-sequence">'+g.answer.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div>')+'<div class="ga-actions">'+button('gaHide','I’m ready to answer','我准备好回答了')+'</div>');$('gaHide').onclick=()=>{clearInterval(clock);g.phase='answer';render();$('gaAnswer')?.focus()};return}
 if(g.type==='recall')renderRecall(g);else renderDrawing(g)
}
function renderDots(g){const label=i=>g.mode==='letters'?String.fromCharCode(65+i):String(i+1);shell('<p>'+T('Tap or drag through the dots in order. Next: ','按顺序轻点或拖过圆点。下一个：')+'<strong>'+label(g.next)+'</strong></p><div class="ga-dotboard"><svg viewBox="0 0 100 100" aria-hidden="true"><polyline points="'+g.points.slice(0,g.next).map(p=>p.join(',')).join(' ')+'" fill="none" stroke="currentColor" stroke-width="1"/></svg>'+g.points.map((p,i)=>'<button class="ga-dot '+(i<g.next?'done':'')+'" data-dot="'+i+'" style="left:'+p[0]+'%;top:'+p[1]+'%" aria-label="'+label(i)+'" aria-pressed="'+(i<g.next)+'">'+label(i)+'</button>').join('')+'</div><div class="ga-actions">'+button('gaHint','Hint','提示')+button('gaUndo','Undo','撤销')+'</div>');const hit=i=>{if(g.paused||g.finished)return;if(i!==g.next){message(T('Look for ','请找 ')+label(g.next));return}g.next++;if(g.next===g.points.length){shell('<h2>'+T(g.shape.en,g.shape.zh)+'</h2>'+svgShape(g.shape)+'<div class="ga-actions">'+button('gaDone','Finish','完成')+'</div>');$('gaDone').onclick=()=>finish();return}const board=document.querySelector('.ga-dotboard');board.previousElementSibling.querySelector('strong').textContent=label(g.next);board.querySelector('polyline').setAttribute('points',g.points.slice(0,g.next).map(p=>p.join(',')).join(' '));board.querySelectorAll('[data-dot]').forEach(b=>{b.classList.toggle('done',+b.dataset.dot<g.next);b.setAttribute('aria-pressed',String(+b.dataset.dot<g.next));b.classList.remove('hint')})};document.querySelectorAll('[data-dot]').forEach(b=>b.onclick=e=>{if(e.detail===0)hit(+b.dataset.dot)});const board=document.querySelector('.ga-dotboard');board.onpointerdown=e=>{const b=e.target.closest('[data-dot]');if(b){board.setPointerCapture?.(e.pointerId);hit(+b.dataset.dot)}};board.onpointermove=e=>{if(e.buttons){const b=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-dot]');if(b&&+b.dataset.dot===g.next)hit(g.next)}};$('gaUndo').onclick=()=>{g.next=Math.max(0,g.next-1);renderDots(g)};$('gaHint').onclick=()=>{g.hints++;const b=document.querySelector('[data-dot="'+g.next+'"]');b.classList.add('hint');b.focus();message(T('The highlighted dot is next.','下一个是高亮的圆点。'))}}
function renderLinks(g){shell('<p>'+T('Select a symbol, then tap adjacent squares to reach its twin. Paths cannot cross. Empty squares are allowed.','选择符号，再轻点相邻格子连接相同符号。路线不能交叉，可以留下空格。')+'</p><div class="ga-linkboard" style="--n:'+g.n+'"><svg viewBox="0 0 '+g.n+' '+g.n+'" aria-hidden="true">'+g.paths.map((p,i)=>'<polyline points="'+p.map(v=>(v%g.n+.5)+','+(Math.floor(v/g.n)+.5)).join(' ')+'" stroke="'+colors[i]+'" stroke-width=".15" fill="none"/>').join('')+'</svg>'+Array.from({length:g.n*g.n},(_,v)=>{const i=g.ends.findIndex(p=>p.includes(v)),path=g.paths.findIndex(p=>p.includes(v));return '<button data-link="'+v+'" style="color:'+colors[i>=0?i:path>=0?path:0]+'" aria-label="'+T('Row ','行 ')+(Math.floor(v/g.n)+1)+T(', column ','，列 ')+(v%g.n+1)+(i>=0?', '+symbols[i]:'')+'">'+(i>=0?symbols[i]:path>=0?'·':'')+'</button>'}).join('')+'</div><div class="ga-actions">'+button('gaUndo','Undo','撤销')+button('gaReset','Clear paths','清除路线')+button('gaHint','Hint — reset paths','提示 — 重置路线')+'</div>');document.querySelectorAll('[data-link]').forEach(b=>b.onclick=()=>{if(g.paused)return;if(addLink(g,+b.dataset.link)){if(connected(g)){finish();return}renderLinks(g)}else message(T('Use an empty neighbouring square, without crossing another route.','请选择相邻空格，不要穿过其他路线。'))});$('gaUndo').onclick=()=>{if(g.history.length){g.paths=g.history.pop();g.selected=-1;renderLinks(g)}};$('gaReset').onclick=()=>{g.history.push(g.paths.map(p=>p.slice()));g.paths=g.paths.map(()=>[]);g.selected=-1;renderLinks(g)};$('gaHint').onclick=()=>{g.history.push(g.paths.map(p=>p.slice()));g.paths=g.solution.map((p,i)=>i===0?p.slice():[]);g.selected=-1;g.hints++;g.notice=T('Paths reset. The first pair shows one possible route.','路线已重置，第一对显示一条可行路线。');renderLinks(g)}}
const regions=[[78,18],[20,30],[50,40],[79,47],[20,67],[50,74],[80,78],[49,16]];
function scene(g,second){const c=i=>second&&g.changes.includes(i),v=g.variant;return '<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" fill="'+['#dff3f9','#e9f3de','#fcead8'][v]+'"/><path d="M0 60Q30 42 55 61T100 55V100H0Z" fill="#bdd99c"/><path d="M38 100Q40 65 65 60" fill="none" stroke="#ead6a5" stroke-width="15"/><circle cx="78" cy="18" r="'+(c(0)?5:9)+'" fill="#eaa834"/><g transform="translate(20 30)"><path d="M0 0v24" stroke="#78503c" stroke-width="4"/><circle cy="-2" r="13" fill="'+(c(1)?'#cf8c44':'#4f8e63')+'"/></g><rect x="37" y="32" width="26" height="24" fill="#f5e2b8"/><path d="M33 32L50 18 67 32Z" fill="#b85445"/><rect x="46" y="42" width="8" height="14" fill="#78503c"/>'+(c(2)?'<circle cx="43" cy="38" r="3" fill="#4d87a1"/>':'<rect x="40" y="35" width="6" height="6" fill="#4d87a1"/>')+'<g transform="translate(79 47)"><ellipse rx="10" ry="4" fill="#507d9f"/>'+(c(3)?'':'<path d="M-8 0Q0-12 8 0" fill="#f6f1db"/>')+'</g><g transform="translate(20 67)"><path d="M0 0v16" stroke="#396d4e" stroke-width="2"/><g fill="'+(c(4)?'#7957a8':'#bd4767')+'"><circle cx="-4" r="4"/><circle cx="4" r="4"/><circle cy="-4" r="4"/><circle cy="4" r="4"/></g><circle r="2" fill="#f4cc5a"/></g><g transform="translate(50 74)"><rect x="-10" y="-5" width="20" height="5" rx="2" fill="#87634a"/><path d="M-7 0v8M7 0v8" stroke="#87634a" stroke-width="2"/>'+(c(5)?'<circle cy="-9" r="4" fill="#bd4767"/>':'')+'</g><g transform="translate(80 78)"><ellipse rx="10" ry="6" fill="#528d9d"/>'+(c(6)?'<path d="M-6 0h12" stroke="white"/>':'<path d="M-6-2h12M-6 2h12" stroke="white"/>')+'</g>'+(c(7)?'':'<path d="M42 12q4-4 7 0q4-4 7 0" fill="none" stroke="#3e6464" stroke-width="1.5"/>')+'</svg>'}
function renderSpot(g){const panel=(second)=>'<figure class="ga-picture '+(!second&&g.zoom?'ga-original-hidden':'')+'"><figcaption>'+T(second?'Find changes here':'Original',second?'在此找不同':'原图')+'</figcaption><div class="ga-scene">'+scene(g,second)+(second?regions.map((p,i)=>'<button class="ga-region '+(g.found.includes(i)?'found':'')+'" data-spot="'+i+'" style="left:'+p[0]+'%;top:'+p[1]+'%" aria-label="'+T('Check picture area ','检查图片区域 ')+(i+1)+'">'+(g.found.includes(i)?'✓':'')+'</button>').join(''):g.found.map(i=>'<span class="ga-mark" style="left:'+regions[i][0]+'%;top:'+regions[i][1]+'%">✓</span>').join(''))+'</div></figure>';shell('<p>'+g.found.length+' / '+g.changes.length+' '+T('differences found. Tap changes in the second picture.','处不同已找到。请轻点第二张图的不同处。')+'</p><div class="ga-pictures '+(g.zoom?'zoom':'')+'">'+panel(false)+panel(true)+'</div><div class="ga-actions">'+button('gaZoom',g.zoom?'Show both pictures':'Enlarge pictures',g.zoom?'显示两张图':'放大图片')+button('gaHint','Hint','提示')+(g.found.length===g.changes.length?button('gaDone','Finish','完成'):'')+'</div>');document.querySelectorAll('[data-spot]').forEach(b=>b.onclick=()=>{const i=+b.dataset.spot;if(g.found.includes(i))return;if(g.changes.includes(i)){g.found.push(i);g.notice=T('Well spotted!','找到了！');renderSpot(g);}else message(T('That area is the same. Keep looking.','这一处相同，请继续观察。'))});if($('gaDone'))$('gaDone').onclick=()=>finish();$('gaZoom').onclick=()=>{g.zoom=!g.zoom;renderSpot(g)};$('gaHint').onclick=()=>{g.hints++;const i=g.changes.find(i=>!g.found.includes(i));if(i!==undefined){document.querySelector('[data-spot="'+i+'"]').classList.add('hint');message(T('Look in the outlined area.','请观察边框标出的区域。'))}}}
function tokens(text,g){text=text.trim().toLocaleLowerCase().normalize('NFKC');return g.mode==='numbers'?text.replace(/[\s,，-]/g,'').split(''):text.split(/[\s,，、]+/u).filter(Boolean)}
function renderRecall(g){if(g.phase==='review'){shell('<h2>'+T('Your recall','您的回忆')+'</h2><p>'+g.correct+' / '+g.answer.length+' '+T('positions correct','个位置正确')+'</p><ol class="ga-recall-review">'+g.answer.map((x,i)=>'<li>'+esc(x)+' — '+(g.entered[i]===x.toLocaleLowerCase()?'✓':T('You entered: ','您输入：')+esc(g.entered[i]||'—'))+'</li>').join('')+'</ol><div class="ga-actions">'+button('gaDone','Finish','完成')+'</div>');$('gaDone').onclick=()=>finish(g.correct/Math.max(g.answer.length,g.entered.length));return}shell('<form id="gaRecallForm"><label for="gaAnswer">'+T('Type the sequence in the same order. Separate words with spaces.','按原顺序输入，词语之间用空格分开。')+'</label><input id="gaAnswer" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="'+(g.mode==='numbers'?'numeric':'text')+'" aria-label="'+T('Your remembered sequence','您记住的顺序')+'">'+(g.mode==='numbers'?'<div class="ga-keypad">'+['1','2','3','4','5','6','7','8','9','⌫','0'].map(n=>'<button type="button" class="btn" data-key="'+n+'">'+n+'</button>').join('')+'</div>':'')+'<div class="ga-actions"><button class="btn main" type="submit">'+T('Check answer','检查答案')+'</button><button class="btn" type="button" id="gaStudy">'+T('Look again','再看一次')+'</button></div></form>');document.querySelectorAll('[data-key]').forEach(b=>b.onclick=()=>{const input=$('gaAnswer');input.value=b.dataset.key==='⌫'?input.value.slice(0,-1):input.value+b.dataset.key});$('gaStudy').onclick=()=>{g.hints++;beginView()};$('gaRecallForm').onsubmit=e=>{e.preventDefault();g.entered=tokens($('gaAnswer').value,g);if(!g.entered.length){message(T('Enter a number or word first.','请先输入数字或词语。'));return}g.correct=g.answer.filter((x,i)=>x.toLocaleLowerCase()===g.entered[i]).length;g.phase='review';renderRecall(g)}}
function renderDrawing(g){if(g.phase==='review'){shell('<h2>'+T('Compare your drawing','比较您的画图')+'</h2><p>'+T('Approximate shape match: ','大致形状相似度：')+Math.round(g.score*100)+'% — '+T('a gentle guide, not a handwriting test.','仅供参考，不是书写测试。')+'</p><div class="ga-pictures"><figure><figcaption>'+T('Original','原图')+'</figcaption>'+svgShape(g.shape)+'</figure><figure><figcaption>'+T('Your drawing','您的画图')+'</figcaption><svg class="ga-shape" viewBox="0 0 100 100">'+g.strokes.map(s=>'<polyline points="'+s.map(p=>p.join(',')).join(' ')+'" fill="none" stroke="currentColor" stroke-width="2"/>').join('')+'</svg></figure></div><div class="ga-actions">'+button('gaDone','Finish','完成')+'</div>');$('gaDone').onclick=()=>finish(g.score);return}
 if(g.recognition){shell('<p>'+T('Choose the shape you saw.','请选择刚才看到的图形。')+'</p><div class="ga-shape-options">'+g.choices.map((s,i)=>'<button class="btn" data-shape="'+i+'" aria-label="'+T(s.en,s.zh)+'">'+svgShape(s)+'</button>').join('')+'</div>');document.querySelectorAll('[data-shape]').forEach(b=>b.onclick=()=>{g.score=g.choices[+b.dataset.shape]===g.shape?1:0;g.strokes=[g.choices[+b.dataset.shape].p];g.phase='review';renderDrawing(g)});return}
 shell('<p>'+T('Draw the shape from memory. Shaky lines are welcome.','凭记忆画出图形，线条不直也没关系。')+'</p><svg id="gaCanvas" viewBox="0 0 100 100" aria-label="'+T('Drawing area; use Choose a shape for keyboard play.','绘图区；键盘操作请选择“选择图形”。')+'">'+g.strokes.map(s=>'<polyline points="'+s.map(p=>p.join(',')).join(' ')+'"/>').join('')+'</svg><div class="ga-actions">'+button('gaUndo','Undo stroke','撤销笔画')+button('gaClear','Clear','清除')+button('gaCheck','Compare','比较')+button('gaChoice','Choose a shape instead','改为选择图形')+button('gaStudy','Look again','再看一次')+'</div>');const canvas=$('gaCanvas');let stroke=null,line=null;const point=e=>{const r=canvas.getBoundingClientRect();return [Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100)),Math.max(0,Math.min(100,(e.clientY-r.top)/r.height*100))]};canvas.onpointerdown=e=>{if(g.paused)return;e.preventDefault();canvas.setPointerCapture?.(e.pointerId);stroke=[point(e)];g.strokes.push(stroke);line=document.createElementNS('http://www.w3.org/2000/svg','polyline');canvas.append(line)};canvas.onpointermove=e=>{if(!stroke||g.paused)return;stroke.push(point(e));line.setAttribute('points',stroke.map(p=>p.join(',')).join(' '))};canvas.onpointerup=canvas.onpointercancel=()=>{stroke=null;line=null};$('gaUndo').onclick=()=>{g.strokes.pop();renderDrawing(g)};$('gaClear').onclick=()=>{g.strokes=[];renderDrawing(g)};$('gaCheck').onclick=()=>{if(!g.strokes.some(s=>s.length>2)){message(T('Draw a shape first, or choose the shape alternative.','请先画图，或使用选择图形方式。'));return}g.score=drawingScore(g.strokes,g.shape.p);g.phase='review';renderDrawing(g)};$('gaChoice').onclick=()=>{g.recognition=true;g.choices=shuffle([g.shape,...shuffle(shapes.filter(s=>s!==g.shape)).slice(0,3)]);renderDrawing(g)};$('gaStudy').onclick=()=>{g.hints++;beginView()}}
window.MindGardenActivities={has,start,linkPuzzle,addLink,connected,drawingScore,tokens,shapes,get current(){return active}};
})();

;
/* bloom-preview.js */
/* Read-only end-state preview; never writes growth or flower preferences. */
(function(){
const T=(a,b)=>save.lang==='zh'?b:a,old=window.openFlw;
function bouquet(type,points){const stages=gstage(points);let art='';for(let i=0;i<12;i++){const x=45+(i%4)*65+(Math.floor(i/4)%2)*10,y=58+Math.floor(i/4)*50,kind=type==='mixed'?FLK[i%6]:type,stage=stages[i];art+='<path d="M150 260Q'+x+' 190 '+x+' '+(y+15)+'" fill="none" stroke="#82ac78" stroke-width="3"/><ellipse cx="'+(x+7)+'" cy="'+(y+30)+'" rx="6" ry="15" fill="#a5c48b" transform="rotate(35 '+(x+7)+' '+(y+30)+')"/>';if(stage>=4)art+=head(kind,x,y,stage===5?1.5:1);else if(stage===3)art+='<ellipse cx="'+x+'" cy="'+y+'" rx="6" ry="10" fill="#db9da8"/>'}return '<svg viewBox="0 0 300 290" role="img" aria-label="'+T('Bouquet at ','花束成长值 ')+points+'/60">'+art+'<path d="M135 246h30" stroke="#e6bd8a" stroke-width="8"/></svg>'}
window.openFlw=function(){old();const el=document.createElement('details');el.className='bloom-preview';el.innerHTML='<summary>'+T('Preview full bloom','预览盛开花束')+'</summary><p>'+T('See what you can grow. Previewing never changes your points or flower choice.','看看未来的花束，预览不会改变成长值或花朵选择。')+'</p><label>'+T('Preview flowers','预览花朵')+' <select id="bloomType">'+FLK.concat('mixed').map(k=>'<option value="'+k+'"'+(k===(me().fl||'mixed')?' selected':'')+'>'+ (k==='mixed'?T('Mixed','混合'):T(FL[k].n,({sunflower:'向日葵',daisy:'雏菊',tulip:'郁金香',rose:'玫瑰',orchid:'兰花',hibiscus:'扶桑花'})[k]))+'</option>').join('')+'</select></label><div id="bloomComparison" class="bloom-comparison"></div>';$('box').querySelector('.flgrid').after(el);const draw=()=>{const type=$('bloomType').value,points=Math.max(0,Math.min(60,me().gr||0));$('bloomComparison').innerHTML='<figure><figcaption>'+T('Your current stage','当前阶段')+' · '+points+'/60</figcaption>'+bouquet(type,points)+'</figure><figure><figcaption>'+T('Full bloom goal','盛开目标')+' · 60/60</figcaption>'+bouquet(type,60)+'</figure>'};$('bloomType').onchange=draw;draw()};
window.MindGardenBloomPreview={bouquet};
})();

;
/* progress-pets.js */
/* Small decorative companions peek over the progress panel, never over its content. */
(function(){
const root=document.documentElement,T=(a,b)=>save.lang==='zh'?b:a;
let visible=true;
function mount(){const panel=document.getElementById('progressDisplay');if(!panel)return;let strip=document.getElementById('progressPetPeeks');if(!strip){strip=document.createElement('div');strip.id='progressPetPeeks';strip.setAttribute('aria-hidden','true');strip.innerHTML='<span class="progress-peek cat"><i></i></span><span class="progress-peek dog"><i></i></span>';panel.before(strip);if(window.IntersectionObserver)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()}).observe(strip)}sync()}
function sync(){const strip=document.getElementById('progressPetPeeks');if(!strip)return;strip.dataset.paused=String(!visible||document.hidden||window.MindGardenMotion?.effectiveMode()==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches||!document.getElementById('ov').classList.contains('hidden'));strip.title=T('Your garden friends are cheering you on','花园伙伴为您加油')}
new MutationObserver(mount).observe(document.getElementById('gardenProgressStrip'),{childList:true});new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-motion','data-still']});new MutationObserver(sync).observe(document.getElementById('ov'),{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',sync);window.addEventListener('gardenPlayerChange',mount);mount();
})();
