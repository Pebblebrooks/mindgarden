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
 const T=(a,b)=>save.lang==='zh'?b:a;
 const today=()=>dstr();let page='dashboard',daily=null,filter='all',search='',length='standard';
 const META={seq:'memory',miss:'memory',rem:'memory',shopping:'memory',story:'memory',num:'numbers',sum:'numbers',sub:'numbers',tbl:'numbers',cnt:'numbers',add:'numbers',money:'numbers',sort:'logic',odd:'logic',same:'logic',routine:'logic',place:'logic',shp:'shapes',clk:'shapes',time:'shapes',calendar:'shapes',order:'shapes',diff:'attention',count:'attention',find:'attention',visual:'attention',wrd:'language',wm:'language',pic:'language',related:'language'};
 const LABELS={all:['All Games','全部游戏'],memory:['Memory','记忆'],attention:['Attention','观察'],logic:['Logic','逻辑'],language:['Language','语言'],numbers:['Numbers','数字'],shapes:['Shapes & time','图形与时间']};
 const GAME_TIME={seq:4,miss:4,rem:3,shopping:5,story:5,diff:5,visual:4,wrd:5,related:4};
 function navAction(action){if(action==='home')switchPage('dashboard');else if(action==='library')switchPage('library');else if(action==='online')document.getElementById('bOnline').click();else if(action==='progress')document.getElementById('bLb').click();else if(action==='leaderboard')document.getElementById('bLb').click();else if(action==='family')document.getElementById('bFam').click();else if(action==='settings')document.getElementById('bSet').click();else if(action==='profile')document.getElementById('bPl').click();else if(action==='language')document.getElementById('bLang').click();else if(action==='music')document.getElementById('bMus').click();}
 function buildNav(){
  const links=[['home','⌂','Home','主页'],['library','▦','All Games','所有游戏'],['online','♧','Play Together','一起玩'],['progress','▥','My Progress','我的进度'],['leaderboard','🏆','Leaderboard','排行榜']];
  nav.innerHTML='<button class="nav-brand" data-go="home" aria-label="'+T('Mind Garden home','心灵花园主页')+'"><span aria-hidden="true">🌱</span> <span>Mind Garden</span></button><div class="nav-items">'+links.map(v=>'<button class="nav-link'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' current':'')+'" data-go="'+v[0]+'"'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' aria-current="page"':'')+'><span aria-hidden="true">'+v[1]+'</span> '+T(v[2],v[3])+'</button>').join('')+
  '</div><div class="nav-actions"><button class="nav-quiet" data-go="settings">⚙ <span>'+T('Settings','设置')+'</span></button><button class="nav-quiet nav-symbol" data-go="music" aria-label="'+T('Music','音乐')+'">♫</button><button class="nav-quiet nav-symbol" data-go="language" aria-label="'+T('Language','语言')+'">文</button><button class="nav-quiet nav-player" data-go="profile" aria-label="'+T('Switch player','切换玩家')+'">👤 <span>'+esc(me().name)+'</span></button></div><button id="navMore" class="nav-more" aria-expanded="false">☰ '+T('More','更多')+'</button><div id="navMenu" class="nav-menu hidden">'+[['leaderboard','🏆','Leaderboard','排行榜'],['progress','▥','My Progress','我的进度'],['family','♡','Family View','家人视图'],['profile','👤','Switch Player','切换玩家'],['settings','⚙','Settings','设置'],['music','♫','Music','音乐'],['language','文','Language','语言']].map(v=>'<button data-go="'+v[0]+'">'+v[1]+' '+T(v[2],v[3])+'</button>').join('')+'</div>';
  nav.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{const menu=document.getElementById('navMenu');if(menu)menu.classList.add('hidden');navAction(b.dataset.go)});
  const more=document.getElementById('navMore'),menu=document.getElementById('navMenu');more.onclick=()=>{const isOpen=!menu.classList.toggle('hidden');more.setAttribute('aria-expanded',String(isOpen))};
 }

 const days=()=>{const t=new Date(today()+'T12:00:00').getTime()/86400000|0;return [['shopping','rem','miss','story'][Math.abs(t)%4],['visual','find','diff','count'][Math.abs(t)%4],['calendar','routine','related','same'][Math.abs(t)%4]]};
 function renderWelcome(){
  const p=me();
  dash.innerHTML='<div class="welcome-scene"><div class="welcome-heading"><h1><span aria-hidden="true">🌿</span> Mind Garden</h1><p>'+T('Keep Your Mind Active · Enjoy Learning · Play Together','活跃思维 · 享受学习 · 一起玩')+'</p></div><div class="welcome-ctas">'+
  '<button class="welcome-feature feature-games" id="dashBrowse"><span class="feature-icon" aria-hidden="true">🎮</span><strong>'+T('All Games','所有游戏')+'</strong><span>'+T('Explore brain-friendly activities','探索轻松有趣的益智活动')+'</span></button>'+
  '<button class="welcome-feature feature-together" id="dashTogether"><span class="feature-icon" aria-hidden="true">👥</span><strong>'+T('Play Together','一起玩')+'</strong><span>'+T('Challenge a family member or friend online','邀请家人或朋友一起玩')+'</span></button>'+
  '<button class="welcome-feature feature-progress" id="dashProgress"><span class="feature-icon" aria-hidden="true">📊</span><strong>'+T('My Progress','我的进度')+'</strong><span>'+T('See your activity and improvement','查看您的游戏活动与进度')+'</span></button>'+
  '<button class="welcome-feature feature-leaderboard" id="dashLeaders"><span class="feature-icon" aria-hidden="true">🏆</span><strong>'+T('Leaderboard','排行榜')+'</strong><span>'+T('View top scores and achievements','查看得分与成就')+'</span></button>'+
  '</div><div class="welcome-extra"><button id="dashStart" class="btn daily-shortcut">🌻 '+T('Start Today’s Games','开始今日游戏')+' ▶</button><span>'+T('A gentle, guided daily activity journey','轻松的每日引导活动')+'</span></div></div><p class="dash-disclaimer">'+T('For enjoyment and cognitive engagement. Not a medical test or treatment.','用于娱乐和认知活动，并非医疗测试或治疗。')+'</p>';
  document.getElementById('dashStart').onclick=startDaily;
  document.getElementById('dashBrowse').onclick=()=>switchPage('library');
  document.getElementById('dashTogether').onclick=()=>navAction('online');
  document.getElementById('dashProgress').onclick=()=>navAction('progress');
  document.getElementById('dashLeaders').onclick=()=>navAction('leaderboard');
 }

 const prettyCat=c=>T(...(LABELS[c]||LABELS.all));
 function gameCard(k){const m=MG[k],cat=META[k]||'logic',lvl=(me().levels||{})[k]||1,minutes=GAME_TIME[k]||3;
  return '<button class="game-tile" data-game="'+esc(k)+'" data-category="'+cat+'" aria-label="'+esc(m.n)+'"><span class="game-art" aria-hidden="true">'+m.ic+'</span><span class="game-info"><strong>'+esc(m.n)+'</strong><span class="game-desc">'+esc(m.d)+'</span><span class="game-meta">'+prettyCat(cat)+' · '+minutes+' '+T('min','分钟')+' · '+T('Level','第')+' '+lvl+(save.lang==='zh'?' 关':' / 15')+'</span></span><span class="game-play" aria-hidden="true">▶</span></button>'}
 function renderLibrary(){
  library.querySelectorAll('.zw,.decks,.levels,.garden,.sub,h2.sec,.tip').forEach(el=>{if(el.closest('#libraryDisplay'))return;el.classList.add('legacy-library')});
  let panel=document.getElementById('libraryDisplay');if(!panel){panel=document.createElement('div');panel.id='libraryDisplay';library.insertBefore(panel,library.firstChild)}
  const keys=Object.keys(MG).filter(k=>((META[k]||'logic')===filter||filter==='all')&&((MG[k].n+' '+MG[k].d).toLowerCase().includes(search.toLowerCase())));
  const pairs=filter==='all'||filter==='memory';
  const pairMatch=pairs&&('matching pairs memory picture cards').includes(search.toLowerCase());
  panel.innerHTML='<div class="library-top"><span class="library-sprout">🎮</span><h1>'+T('All Games','所有游戏')+'</h1><p>'+T('A variety of fun, brain-friendly activities for memory, attention, logic and language.','探索记忆、观察、语言、数字和日常思考的轻松游戏。')+'</p></div><div class="game-filterbar"><label class="search-field"><span aria-hidden="true">⌕</span><span class="sr">'+T('Search games','搜索游戏')+'</span><input id="gameSearch" type="search" placeholder="'+T('Search games…','搜索游戏…')+'" value="'+esc(search)+'"></label><label class="round-select">'+T('Session','局数')+' <select id="gameLength"><option value="short"'+(length==='short'?' selected':'')+'>'+T('Short · 4','短 · 4')+'</option><option value="standard"'+(length==='standard'?' selected':'')+'>'+T('Standard · 6','标准 · 6')+'</option><option value="long"'+(length==='long'?' selected':'')+'>'+T('Long · 10','长 · 10')+'</option></select></label></div><div class="category-pills" role="group" aria-label="'+T('Filter games by category','按类别筛选游戏')+'">'+Object.keys(LABELS).map(c=>'<button class="category-pill'+(filter===c?' active':'')+'" data-filter="'+c+'" aria-pressed="'+(filter===c)+'">'+({all:'◈',memory:'🧠',attention:'🎯',logic:'🧩',language:'🔤',numbers:'🔢',shapes:'◷'}[c])+' '+prettyCat(c)+'</button>').join('')+'</div><div id="gameCards" class="game-card-grid">'+(pairMatch?'<button class="game-tile" data-game="pairs"><span class="game-art" aria-hidden="true">🃏</span><span class="game-info"><strong>'+T('Matching Pairs','配对游戏')+'</strong><span class="game-desc">'+T('Find the matching picture cards.','找出相同的图片卡片。')+'</span><span class="game-meta">'+T('Memory · 6 levels · relaxed mode available','记忆 · 6关 · 可选轻松模式')+'</span></span><span class="game-play" aria-hidden="true">▶</span></button>':'')+keys.map(gameCard).join('')+'</div>'+(keys.length||pairMatch?'':'<div class="empty-games">🌱 '+T('No games match your search. Try another category or word.','没有找到符合条件的游戏，请换个关键词或类别。')+'</div>')+'<p class="library-foot">'+T('Choose the difficulty before starting. Pause or rest whenever you wish.','开始前可以选择难度，随时可以暂停休息。')+'</p>';
  document.getElementById('gameSearch').oninput=e=>{const input=e.target;const pos=input.selectionStart;search=input.value;renderLibrary();const replacement=document.getElementById('gameSearch');replacement.focus();try{replacement.setSelectionRange(pos,pos)}catch(_){}};
  document.getElementById('gameLength').onchange=e=>{length=e.target.value;window.mgSessionLength=({short:4,standard:6,long:10})[length]};
  panel.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderLibrary()});
  panel.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>{const k=b.dataset.game;if(k==='pairs')showPairs();else {window.mgSessionLength=({short:4,standard:6,long:10})[length];window.chooseMiniLevel(k)}});
 }
 function showPairs(){const opts=LEVELS.map((v,i)=>'<button class="btn" data-pair-level="'+i+'" '+(i>=save.unlocked?'disabled':'')+'>'+T('Level','第')+' '+(i+1)+(save.lang==='zh'?'关':'')+' · '+v.p+' '+T('pairs','对')+'</button>').join('');
  overlay('<h2>'+T('Matching Pairs','配对游戏')+'</h2><p>'+T('Choose your matching game level.','请选择配对游戏关卡。')+'</p><div class="level-buttons">'+opts+'</div><p class="tip">'+T('Unlock additional levels by finishing earlier ones.','完成前面的关卡后可解锁后续关卡。')+'</p><div class="row"><button id="pairBack" class="btn">'+T('Back','返回')+'</button></div>');
  document.querySelectorAll('[data-pair-level]').forEach(b=>b.onclick=()=>start(Number(b.dataset.pairLevel)));
  document.getElementById('pairBack').onclick=closeOv;
 }
 function switchPage(p){page=p;dash.classList.toggle('hidden',p!=='dashboard');library.classList.toggle('hidden',p!=='library');top.classList.add('hidden');legacyNav.classList.add('hidden');if(p==='library')renderLibrary();else renderWelcome();buildNav();window.scrollTo({top:0,behavior:'instant'})}
 const oldShow=window.show;window.show=function(which){oldShow(which);nav.classList.toggle('hidden',which!=='home');if(which==='home')switchPage(page)};
 const oldRender=window.renderHome;window.renderHome=function(){oldRender();if(page==='dashboard')renderWelcome();else renderLibrary();buildNav()};
 function startDaily(){const t=Math.floor(new Date(today()+'T12:00:00').getTime()/86400000);const pools=[['shopping','rem','miss','story'],['visual','find','diff','count'],['calendar','routine','related','same']];daily={types:pools.map((a,i)=>a[(t+i*2)%a.length]),index:0};dailyIntro()}
 function dailyIntro(){if(!daily)return;const idx=daily.index,m=MG[daily.types[idx]];overlay('<p class="daily-progress">'+T('Activity','活动')+' '+(idx+1)+' / 3</p><h2>'+esc(m.n)+'</h2><p>'+esc(m.d)+'</p><p>'+T('Take your time. You can finish early or take a break.','慢慢来，可随时结束或休息。')+'</p><div class="row"><button class="btn main" id="dailyGo">'+T('Begin','开始')+'</button><button class="btn" id="dailyStop">'+T('Finish for now','暂时结束')+'</button></div>');
  document.getElementById('dailyGo').onclick=()=>{window.mgSessionLength=6;window.mgDifficulty=(me().levels||{})[daily.types[idx]]||1;startMG(daily.types[idx])};
  document.getElementById('dailyStop').onclick=()=>{daily=null;closeOv();switchPage('dashboard')};
 }
 const oldDone=window.mdone;window.mdone=function(){if(!daily){oldDone();return}oldDone();const completed=daily.index+1;
  if(completed===3){daily=null;overlay('<p class="daily-progress">🌻 '+T('Daily journey complete','今日活动完成')+'</p><h2>'+T('Wonderful work!','做得真棒！')+'</h2><p>'+T('You completed three different activities. Enjoy a rest or browse more games.','您完成了三项不同的活动，可以休息或探索更多游戏。')+'</p><div class="row"><button class="btn main" id="dailyHome">'+T('Return to my garden','返回花园')+'</button></div>');document.getElementById('dailyHome').onclick=()=>{mg=null;toHome();switchPage('dashboard')}}
  else{daily.index++;overlay('<p class="daily-progress">✓ '+completed+'/3 '+T('completed','已完成')+'</p><h2>'+T('Well done!','做得好！')+'</h2><p>'+T('Next activity: ','下一项：')+esc(MG[daily.types[daily.index]].n)+'</p><div class="row"><button class="btn main" id="dailyNext">'+T('Next activity','下一项')+'</button><button class="btn" id="dailyRest">'+T('Finish for today','今日结束')+'</button></div>');document.getElementById('dailyNext').onclick=dailyIntro;document.getElementById('dailyRest').onclick=()=>{daily=null;mg=null;toHome();switchPage('dashboard')}}
 };
 document.getElementById('bMn').addEventListener('click',()=>daily=null,true);
 document.getElementById('bPause2').addEventListener('click',()=>{const b=document.getElementById('mn2');if(b)b.addEventListener('click',()=>daily=null,{once:true})});
 window.MindGardenDashboard={home:()=>switchPage('dashboard'),library:()=>switchPage('library'),refresh:()=>{renderWelcome();buildNav()}};
 // Preserve the dynamic garden generated by index.html and expose it below the welcome headline.
 renderWelcome();switchPage('dashboard');
})();
