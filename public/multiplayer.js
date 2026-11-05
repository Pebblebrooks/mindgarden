/* Mind Garden v2.2 — two-player multi-round rooms, shareable invitation links.
   Scores are friendly game points, not cognitive assessments. */
(function(){
 'use strict';
 const KEY='mindGardenOnlineRoom',MODES=[['pairs6','Matching pairs · 6 pairs'],['pairs10','Matching pairs · 10 pairs'],['sums','Mental sums · 8 questions'],['patterns','Number patterns · 8 questions'],['odd','Odd one out · 8 questions'],['sums12','Mental sums · 12 questions'],['patterns12','Number patterns · 12 questions'],['odd12','Odd one out · 12 questions']];
 let room=null,interval=null,game=null,shownRound=0,pollBusy=false;
 const $=id=>document.getElementById(id);
 function api(action,data={}){return fetch('/api/room?action='+encodeURIComponent(action),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)}).then(async r=>{const j=await r.json();if(!r.ok)throw Error(j.error||'Connection failed');return j})}
 function stop(){if(interval){clearInterval(interval);interval=null}}
 function watch(fn){stop();interval=setInterval(fn,2300)}
 function name(){return(me().name||'Player').replace(/[^\p{L}\p{N} ._'-]/gu,'').slice(0,20)||'Player'}
 function error(e){const el=$('multiError');if(el)el.textContent=e.message||String(e)}
 function invite(){const u=new URL(location.pathname,location.origin);/* Prefer stable production Pages URL over a hash-prefixed deployment URL. */u.hostname=u.hostname.replace(/^[a-f0-9]{8,}\.(?=[^.]+\.pages\.dev$)/i,'');u.searchParams.set('room',room.code);return u.toString()}
 function base(s){return '<h2>Play Together 🌍</h2><p class="tip">Room: <strong>'+esc(room.code)+'</strong>'+(s?' · Round '+s.round:'')+'</p>'}
 function buttons(){return '<div class="row"><button class="btn" id="mpCopy">Copy invitation link</button><button class="btn" id="mpShare">Share</button><button class="btn" id="mpExit">Leave screen</button></div>'}
 function wireShare(){
  $('mpCopy').onclick=async()=>{const link=invite();try{if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');await navigator.clipboard.writeText('Play Mind Garden with me! '+link);const m=$('multiState');if(m)m.textContent='Invitation link copied! Send it to your friend.'}catch(e){showLink(link)}};
  $('mpShare').onclick=async()=>{const link=invite();if(navigator.share){try{await navigator.share({title:'Mind Garden invitation',text:'Play together with me!',url:link});return}catch(e){if(e.name==='AbortError')return}}showLink(link)};
  $('mpExit').onclick=()=>{stop();game=null;closeOv()};
 }
 function showLink(link){const el=$('multiError');if(el)el.innerHTML='<label class="lab">Copy this invitation link<input id="mpLink" readonly value="'+esc(link)+'"></label>';const input=$('mpLink');input.focus();input.select()}
 function menu(){stop();game=null;shownRound=0;room=null;const prev=localStorage.getItem(KEY),prefill=new URLSearchParams(location.search).get('room')||'';
  overlay('<h2>Play Together 🌍</h2><p>Enjoy several activities with one friend without creating a new room each time.</p><p class="tip">Maximum: two players per room. Both players get the same challenge. No chat or sensitive details needed.</p><label class="lab">Your display name<input id="mpName" maxlength="20" value="'+esc(name())+'"></label><div class="row"><button class="btn main" id="mpCreate">Create a room</button></div><label class="lab">Join an invitation<input id="mpCode" maxlength="6" placeholder="6-character code" style="text-transform:uppercase" value="'+esc(prefill.toUpperCase().replace(/[^A-Z2-9]/g,'').slice(0,6))+'"></label><div class="row"><button class="btn main" id="mpJoin">Join room</button>'+(prev?'<button class="btn" id="mpResume">Resume room</button>':'')+'<button class="btn" id="mpClose">Close</button></div><p id="multiError" role="alert"></p>');
  $('mpCreate').onclick=()=>act('create');$('mpJoin').onclick=()=>act('join');$('mpClose').onclick=closeOv;
  if(prev)$('mpResume').onclick=()=>{try{room=JSON.parse(prev);waiting()}catch(e){localStorage.removeItem(KEY);menu()}};
  if(prefill){$('mpJoin').focus();}
 }
 async function act(action){try{const n=$('mpName').value.trim(),code=($('mpCode')?.value||'').trim().toUpperCase();const j=await api(action,{name:n,code});room={code:j.code,token:j.token,role:j.role};localStorage.setItem(KEY,JSON.stringify(room));history.replaceState(null,'',location.pathname);waiting()}catch(e){error(e)}}
 const status=()=>api('status',room);
 function waiting(){stop();if(!room)return menu();overlay(base()+'<p id="multiState">Connecting…</p><p id="multiError" role="alert"></p>'+buttons());wireShare();poll();watch(poll)}
 async function poll(){if(!room||pollBusy)return;pollBusy=true;try{const s=await status();if(!room||s.code!==room.code)return;
  if(!s.started){const m=$('multiState');if(m)m.textContent='Waiting for your friend. Share your invitation link or the code '+room.code;return}
  if(s.round!==shownRound){stop();shownRound=s.round;game=null;if(room.role==='host'&&s.hostDone||room.role==='guest'&&s.guestDone){waitingForOther(s);return}start(s);return}
  if(s.finished){stop();if(!$('mpLeave'))results(s);return}
  if(game?.submitted&&!$('mpShare')){waitingForOther(s)}
 }catch(e){error(e)}finally{pollBusy=false}}
 function randomizer(seed){let x=(seed>>>0)||1;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
 function shuffle(a,rand){for(let i=a.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
 function problems(mode,rand){let qs=[];const count=mode.endsWith('12')?12:8;const baseMode=mode.replace('12','');for(let i=0;i<count;i++){
  if(baseMode==='sums'){const a=3+Math.floor(rand()*35),b=2+Math.floor(rand()*15),sub=rand()>.5,ans=sub?a-b:a+b;qs.push({title:a+(sub?' − ':' + ')+b+' = ?',answer:String(ans),options:shuffle([ans,ans+1,ans-1,ans+3].map(String),rand)})}
  else if(baseMode==='patterns'){const start=1+Math.floor(rand()*20),step=2+Math.floor(rand()*7),ans=start+step*4;qs.push({title:[0,1,2,3].map(j=>start+j*step).join(', ')+', ?',answer:String(ans),options:shuffle([ans,ans-step,ans+step,ans+2].map(String),rand)})}
  else{const groups=[['🍎','🍌','🍓','🍇'],['🐶','🐱','🐢','🐦'],['🚲','🚂','🚗','🚌'],['🌻','🌷','🌹','🌼']];let k=Math.floor(rand()*4),other=(k+1+Math.floor(rand()*3))%4;let choices=shuffle(groups[k].slice(0,3).concat(groups[other][Math.floor(rand()*4)]),rand);qs.push({title:'Which picture belongs to a different group?',answer:groups[other].find(e=>choices.includes(e)),options:choices})}
 }return qs}
 function start(s){stop();const mode=s.mode||'pairs6',rand=randomizer((s.seed^Math.imul(s.round,0x9E3779B1))>>>0);
  if(mode.startsWith('pairs')){const count=mode==='pairs10'?10:6,pool=['🌻','🍎','🐦','🐶','🌈','🚲','🌷','🍓','🐢','🎹','🏡','🦋','🍊','☕','🌹','🚂','🎨','🪁','🥕','🐞'];const values=shuffle(pool.slice(),rand).slice(0,count);game={mode,round:s.round,deck:shuffle(values.concat(values),rand),open:[],done:new Set(),moves:0,locked:false,started:Date.now(),submitted:false};draw('Find all '+count+' pairs. Take your time.')}
  else {game={mode,round:s.round,questions:problems(mode,rand),index:0,moves:0,correct:0,started:Date.now(),submitted:false};drawQuiz('Choose the best answer. Take your time.')}
 }
 function progress(s){return '<p class="tip">Round '+s.round+' · '+(MODES.find(m=>m[0]===s.mode)?.[1]||s.mode)+'</p>'}
 function draw(msg){const g=game;if(!g)return;const count=g.deck.length/2,cards=g.deck.map((x,i)=>'<button class="mp-tile'+(g.open.includes(i)||g.done.has(i)?' revealed':'')+'" data-tile="'+i+'" '+(g.done.has(i)||g.locked?'disabled':'')+' aria-label="'+(g.open.includes(i)||g.done.has(i)?x:'Hidden picture')+'">'+(g.open.includes(i)||g.done.has(i)?x:'❀')+'</button>').join('');overlay(base({round:g.round})+'<p>'+esc(msg)+'</p><p>'+g.done.size/2+' of '+count+' pairs · '+g.moves+' turns</p><div class="mp-board" style="grid-template-columns:repeat('+(count===10?5:4)+',minmax(0,1fr))">'+cards+'</div><div class="row"><button class="btn" id="mpExit">Leave screen</button></div><p id="multiError" role="alert"></p>');$('mpExit').onclick=()=>{stop();game=null;closeOv()};document.querySelectorAll('[data-tile]').forEach(b=>b.onclick=()=>flip(+b.dataset.tile))}
 function flip(i){const g=game;if(!g||g.locked||g.submitted||g.open.includes(i)||g.done.has(i))return;g.open.push(i);if(g.open.length<2){draw('Find the matching picture.');return}g.moves++;const[a,b]=g.open;if(g.deck[a]===g.deck[b]){g.done.add(a);g.done.add(b);g.open=[];if(g.done.size===g.deck.length){g.submitted=true;finish();return}draw('Lovely match!')}else{g.locked=true;draw('Have another look.');setTimeout(()=>{if(game===g){g.open=[];g.locked=false;draw('Try another pair.')}},950)}}
 function drawQuiz(msg){const g=game;if(!g)return;const q=g.questions[g.index];overlay(base({round:g.round})+'<p>'+esc(msg)+'</p><p>Question '+(g.index+1)+' of '+g.questions.length+'</p><div class="seqline">'+esc(q.title)+'</div><div class="gridm" style="--c:2">'+q.options.map((o,i)=>'<button class="big txt" data-answer="'+i+'">'+esc(o)+'</button>').join('')+'</div><div class="row"><button class="btn" id="mpExit">Leave screen</button></div><p id="multiError" role="alert"></p>');$('mpExit').onclick=()=>{stop();game=null;closeOv()};document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer))}
 function answer(i){const g=game;if(!g||g.submitted)return;const q=g.questions[g.index],good=q.options[i]===q.answer;g.moves+=good?1:2;if(good)g.correct++;g.index++;if(g.index===g.questions.length){g.submitted=true;finish()}else drawQuiz(good?'Well done!':'Good try! The answer was '+q.answer+'.')}
 async function finish(){const g=game;if(!g)return;overlay(base({round:g.round})+'<h3>Well played!</h3><p>'+(g.mode.startsWith('pairs')?'You found every pair in '+g.moves+' turns.':'You finished '+g.questions.length+' questions!')+'</p><p id="multiState">Saving your result…</p><p id="multiError" role="alert"></p><div class="row"><button class="btn" id="mpExit">Leave screen</button></div>');$('mpExit').onclick=()=>{stop();game=null;closeOv()};try{const elapsed=Math.max(1,Math.round((Date.now()-g.started)/1000));const s=await api('submit',{...room,round:g.round,moves:g.moves,elapsed});if(s.finished)results(s);else waitingForOther(s)}catch(e){error(e);const m=$('multiState');if(m)m.textContent='Could not save the result. Please retry.';const retry=document.createElement('button');retry.className='btn main';retry.textContent='Retry saving';retry.onclick=finish;m?.after(retry)}}
 function waitingForOther(s){stop();overlay(base(s)+'<h3>Round complete!</h3><p id="multiState">Your result is saved. Waiting for your friend to finish.</p><p id="multiError" role="alert"></p>'+buttons());wireShare();watch(poll)}
 function results(s){stop();game=null;shownRound=s.round;const mine=room.role==='host'?s.hostScore:s.guestScore,other=room.role==='host'?s.guestScore:s.hostScore;const headline=mine===other?'A friendly tie!':mine>other?'You won this round!':'Your friend won this round!';overlay(base(s)+'<h3>'+headline+'</h3><p>'+esc(s.host)+': '+s.hostScore+' points<br>'+esc(s.guest||'Friend')+': '+s.guestScore+' points</p><h3>Total points after '+s.round+' round'+(s.round===1?'':'s')+'</h3><p>'+esc(s.host)+': <b>'+s.hostTotal+'</b><br>'+esc(s.guest||'Friend')+': <b>'+s.guestTotal+'</b></p><p class="tip">Keep the same room! Choose another activity or play a longer matching board. Points are for fun, not a measure of cognitive health.</p>'+(room.role==='host'?'<label class="lab">Next game<select id="mpMode">'+MODES.map(m=>'<option value="'+m[0]+'">'+esc(m[1])+'</option>').join('')+'</select></label><div class="row"><button class="btn main" id="mpNext">Start next round</button><button class="btn" id="mpLeave">Finish together</button></div>':'<p id="multiState">Waiting for the host to select the next game. You can keep this screen open.</p><div class="row"><button class="btn" id="mpLeave">Leave screen</button></div>')+'<p id="multiError" role="alert"></p>');
  $('mpLeave').onclick=()=>{stop();localStorage.removeItem(KEY);room=null;closeOv()};
  if(room.role==='host')$('mpNext').onclick=async()=>{const b=$('mpNext');b.disabled=true;try{const s2=await api('advance',{...room,round:s.round,mode:$('mpMode').value});shownRound=0;start(s2);shownRound=s2.round}catch(e){error(e);b.disabled=false}};
  else watch(poll);
 }
 $('bOnline').onclick=menu;
 const inviteCode=new URLSearchParams(location.search).get('room');if(inviteCode&&/^[A-Z2-9]{6}$/i.test(inviteCode)){
  $('bOnline').textContent='🌍 Join friend';
  // Offer join dialog without silently submitting an identity or joining a room.
  setTimeout(()=>{if(!$('ov').classList.contains('hidden'))return;menu()},350);
 }
})();
