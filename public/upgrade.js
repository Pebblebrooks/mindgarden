/* Mind Garden v2: optional daily route, difficulty selection and new games.
   All existing games, local player data, garden and settings are retained. */
(function(){
 const extra={
  shopping:{n:'Shopping basket',d:'Remember the items on your shopping list.',ic:'🛒',g:0},
  routine:{n:'Daily routines',d:'Which everyday task comes next?',ic:'☀️',g:2},
  related:{n:'Word connections',d:'Find a word with a related meaning.',ic:'🔗',g:5},
  calendar:{n:'Calendar day',d:'Work out the next day of the week.',ic:'📅',g:3},
  money:{n:'Market change',d:'Practise everyday shopping calculations.',ic:'🪙',g:1},
  story:{n:'Short story memory',d:'Read or listen, then recall more details as levels increase.',ic:'📖',g:0},
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
