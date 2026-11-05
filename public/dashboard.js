/* Mind Garden v2.1: simplified senior-first home, library and guided daily journey.
   Existing game engines and local profiles are preserved. */
(function(){
 'use strict';
 const home=document.getElementById('home'), nav=document.getElementById('nav'), top=home.querySelector('.top');
 const oldDaily=document.getElementById('dailyStart');if(oldDaily)oldDaily.remove();
 const hero=document.getElementById('hero');
 const library=document.createElement('section');library.id='gameLibrary';library.className='hidden';
 const children=Array.from(home.children);
 let afterHero=false;
 children.forEach(el=>{if(el===hero){afterHero=true;return}if(el===nav||el===top)return;if(el.classList.contains('sub')||afterHero)library.appendChild(el)});
 home.appendChild(library);
 const dash=document.createElement('section');dash.id='welcomeDashboard';dash.setAttribute('aria-label','Welcome to Mind Garden');
 home.insertBefore(dash,library);
 const gardenWrap=document.createElement('div');gardenWrap.className='dashboard-garden';dash.appendChild(gardenWrap);gardenWrap.appendChild(hero);
 let page='dashboard',daily=null;
 const isZh=()=>save.lang==='zh';
 const T=(en,zh)=>isZh()?zh:en;
 const today=()=>dstr();
 const picks=['shopping','visual','calendar'];
 const dailyPicks=()=>{const day=Math.floor(new Date(today()+'T12:00:00').getTime()/86400000);return [
  ['shopping','rem','miss','story'][((day%4)+4)%4],
  ['visual','find','diff','count'][((day%4)+4)%4],
  ['calendar','routine','related','same'][((day%4)+4)%4]
 ];};
 const render=()=>{
  const p=me(),log=(p.log||[]).filter(x=>x.d===today()),mins=Math.round(log.reduce((n,x)=>n+(x.s||0),0)/60),done=log.length;
  const who=esc(p.name||'Friend');
  dash.innerHTML='<div class="dash-welcome"><div class="dash-eyebrow">🌿 '+T('YOUR DAILY MIND GARDEN','每日心灵花园')+'</div><h1>'+T('Welcome, ','欢迎，')+who+'!</h1><p>'+T('A little joy for your mind, every day.','每天一点快乐，轻松动动脑。')+'</p></div>'+
   '<div class="dash-counters" aria-label="'+T('Your activity','您的活动')+'"><span>🌱 '+T('Garden growth','花园成长')+': <strong>'+Math.min(60,p.gr||0)+'/60</strong></span><span>📅 '+T('Today','今天')+': <strong>'+done+' '+T('games','局')+'</strong></span>'+(mins?'<span>⏱️ <strong>'+mins+' '+T('min','分钟')+'</strong></span>':'')+'</div>'+
   '<div id="dashHeroPosition"></div>'+
   '<div class="dash-primary"><button id="dashStart" class="btn main dash-start"><span aria-hidden="true">▶</span><span>'+T('Start Today’s Games','开始今日游戏')+'<small>'+T('3 gentle activities · about 10 minutes · at your own pace','3项轻松活动 · 约10分钟 · 按自己的节奏')+'</small></span></button></div>'+
   '<div class="dash-actions"><button class="dash-choice" id="dashBrowse"><span class="dash-icon" aria-hidden="true">🧩</span><strong>'+T('All Games','所有游戏')+'</strong><small>'+T('Explore activities and levels','浏览游戏和难度')+'</small></button><button class="dash-choice" id="dashTogether"><span class="dash-icon" aria-hidden="true">👥</span><strong>'+T('Play Together','一起玩')+'</strong><small>'+T('Invite a friend online','邀请朋友在线比赛')+'</small></button></div>'+
   '<div class="dash-links"><button class="btn sm" id="dashPlayer">👤 '+T('Player','玩家')+': '+who+'</button><button class="btn sm" id="dashProgress">📈 '+T('My Progress','我的进度')+'</button><button class="btn sm" id="dashFamily">🤝 '+T('Family View','家人视图')+'</button><button class="btn sm" id="dashSettings">⚙️ '+T('Settings','设置')+'</button></div>'+
   '<p class="dash-disclaimer">'+T('For enjoyment and cognitive engagement. Not a medical test or treatment.','用于娱乐和认知活动，并非医疗测试或治疗。')+'</p>';
  dash.querySelector('#dashHeroPosition').appendChild(hero);
  $('dashStart').onclick=startDaily;
  $('dashBrowse').onclick=()=>switchPage('library');
  $('dashTogether').onclick=()=>document.getElementById('bOnline').click();
  $('dashPlayer').onclick=()=>document.getElementById('bPl').click();
  $('dashProgress').onclick=()=>document.getElementById('bLb').click();
  $('dashFamily').onclick=()=>document.getElementById('bFam').click();
  $('dashSettings').onclick=()=>document.getElementById('bSet').click();
 };
 function switchPage(next){
  page=next;
  dash.classList.toggle('hidden',next!=='dashboard');
  library.classList.toggle('hidden',next!=='library');
  nav.classList.toggle('hidden',next!=='library');
  top.classList.add('hidden');
  document.getElementById('libraryBack').classList.toggle('hidden',next!=='library');
  if(next==='dashboard')render();
  window.scrollTo({top:0,behavior:'instant'});
 }
 const back=document.createElement('button');back.id='libraryBack';back.className='btn sm hidden';back.textContent='← '+T('Back to Home','返回主页');
 home.insertBefore(back,nav);back.onclick=()=>switchPage('dashboard');
 const libraryTitle=document.createElement('div');libraryTitle.className='library-heading';libraryTitle.innerHTML='<h1>'+T('All Games','所有游戏')+'</h1><p>'+T('Choose an activity. You can change the difficulty or take a break at any time.','选择喜欢的活动。您可以随时更换难度或休息。')+'</p>';
 library.insertBefore(libraryTitle,library.firstChild);
 const originalShow=window.show;
 window.show=function(which){originalShow(which);if(which==='home')switchPage(page==='library'?'library':'dashboard')};
 const originalRender=window.renderHome;
 window.renderHome=function(){originalRender();if(page==='dashboard')render()};
 function startDaily(){
  daily={types:dailyPicks(),index:0};
  showDailyIntro();
 }
 function showDailyIntro(){
  if(!daily)return;
  const idx=daily.index,game=MG[daily.types[idx]],label=T('Activity','活动')+' '+(idx+1)+' '+T('of','共')+' 3';
  overlay('<div class="daily-progress">'+label+'</div><h2>'+esc(game.n)+'</h2><p>'+esc(game.d)+'</p><p>'+T('Go at your own pace. You can stop whenever you wish.','慢慢来，您随时可以停止。')+'</p><div class="row"><button class="btn main" id="dailyGo">'+T('Begin activity','开始活动')+'</button><button class="btn" id="dailyStop">'+T('Back to Home','返回主页')+'</button></div>');
  $('dailyGo').onclick=()=>{window.mgDifficulty=Math.min(15,(me().levels||{})[daily.types[idx]]||1);startMG(daily.types[idx])};
  $('dailyStop').onclick=()=>{daily=null;closeOv();switchPage('dashboard')};
 }
 const originalDone=window.mdone;
 window.mdone=function(){
  if(!daily){originalDone();return}
  const g=mg;
  // Preserve scoring, garden growth, streaks, break reminders and achievements.
  originalDone();
  const completed=daily.index+1,finished=completed>=daily.types.length;
  if(finished){daily=null;overlay('<div class="daily-progress">🌻 '+T('Today’s activities complete','今日活动已完成')+'</div><h2>'+T('Beautiful work!','做得真棒！')+'</h2><p>'+T('You completed three different activities. Your garden has grown a little.','您完成了三项不同的活动，花园又成长了一点。')+'</p><p>'+T('You may rest now or explore more games whenever you like.','现在可以休息，也可以随时浏览更多游戏。')+'</p><div class="row"><button class="btn main" id="dailyHome">'+T('Return to My Garden','返回我的花园')+'</button></div>');$('dailyHome').onclick=()=>{mg=null;toHome();switchPage('dashboard')};}
  else{
   daily.index++;const next=MG[daily.types[daily.index]];
   overlay('<div class="daily-progress">✓ '+completed+' / 3 '+T('activities complete','项活动完成')+'</div><h2>'+T('Well done!','做得好！')+'</h2><p>'+T('Next: ','下一项：')+esc(next.n)+'</p><div class="row"><button class="btn main" id="dailyNext">'+T('Next Activity','下一项活动')+'</button><button class="btn" id="dailyRest">'+T('Finish for Today','今日结束')+'</button></div>');
   $('dailyNext').onclick=showDailyIntro;
   $('dailyRest').onclick=()=>{daily=null;mg=null;toHome();switchPage('dashboard')};
  }
 };
 // Leaving the mini game cancels the guided sequence; completed activities remain saved.
 document.getElementById('bMn').addEventListener('click',()=>{daily=null},true);
 document.getElementById('bPause2').addEventListener('click',()=>{const b=document.getElementById('mn2');if(b)b.addEventListener('click',()=>{daily=null},{once:true})});
 // Keep navigation obvious after returning from normal games.
 const style=document.createElement('style');style.textContent=`
 #home{max-width:100%} #welcomeDashboard{max-width:860px;margin:0 auto;padding:0 0 12px}
 .dash-welcome{text-align:center;margin:20px auto 14px}.dash-eyebrow{font-size:.73em;letter-spacing:.13em;color:var(--soft);font-weight:700}
 .dash-welcome h1{font-size:clamp(2rem,5vw,3rem);margin:12px 0 4px}.dash-welcome p{margin:0;font-size:1.05em;color:var(--soft)}
 .dash-counters{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:12px 0 16px;font-size:.82em}
 .dash-counters span{background:var(--panel);border:2px solid var(--line);border-radius:99px;padding:6px 14px}
 #welcomeDashboard .hero{margin:0 auto 15px;max-width:860px}#welcomeDashboard .hrow{display:none}
 .dash-primary{margin:0 auto 16px;max-width:760px}.dash-start{display:flex;gap:14px;align-items:center;justify-content:center;width:100%;text-align:left;min-height:92px;font-size:1.13em}
 .dash-start>span:first-child{font-size:1.5em}.dash-start small{font-size:.68em;font-weight:400;display:block;margin-top:4px}
 .dash-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:0 auto 18px;max-width:760px}
 .dash-choice{min-height:162px;background:var(--panel);border:3px solid var(--line);border-radius:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;padding:16px;text-align:center}
 .dash-choice:hover,.dash-choice:focus-visible{border-color:var(--back)}.dash-icon{font-size:2.3em}.dash-choice strong{font-size:1.18em}.dash-choice small{font-size:.72em;color:var(--soft)}
 .dash-links{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;padding:8px 0 0}.dash-links .btn{min-height:52px;font-size:.85em}
 .dash-disclaimer{text-align:center;font-size:.68em;color:var(--soft);margin:22px auto;max-width:36em}
 #gameLibrary{padding-top:12px}.library-heading{text-align:center;margin:6px auto 18px}.library-heading h1{margin:0}.library-heading p{color:var(--soft);margin:8px auto}
 #libraryBack{margin:8px 0 10px;min-height:56px;background:var(--panel)} .daily-progress{font-weight:700;color:var(--leaf);margin:0 0 12px}
 #gameLibrary .sub{display:none}#gameLibrary .garden{display:none}
 @media(max-width:640px){.dash-welcome{margin-top:8px}.dash-actions{gap:10px}.dash-choice{min-height:140px;padding:10px}.dash-start{min-height:82px;padding:12px 14px;font-size:1em}.dash-counters{font-size:.7em}.dash-links .btn{min-height:50px;flex:1 1 42%}}
 @media(prefers-reduced-motion:reduce){.dash-choice,.dash-start{transition:none}}
 `;document.head.appendChild(style);
 // A post-render pass ensures the original garden scene survives the page transition.
 render();switchPage('dashboard');
 window.MindGardenDashboard={home:()=>switchPage('dashboard'),library:()=>switchPage('library'),refresh:render};
})();
