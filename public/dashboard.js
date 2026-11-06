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
   music:'<path d="M13 23V6l14-3v17M13 9l14-3"/><ellipse cx="8" cy="24" rx="5" ry="4"/><ellipse cx="22" cy="21" rx="5" ry="4"/>'
  };
  return '<svg class="garden-icon" viewBox="0 0 32 32" aria-hidden="true" '+(['seed','sprout','bud','opening','bloom'].includes(kind)?'':'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"')+'>'+(parts[kind]||parts.sprout)+'</svg>';
 }
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
 const META={seq:'memory',miss:'memory',rem:'memory',shopping:'memory',story:'memory',num:'numbers',sum:'numbers',sub:'numbers',tbl:'numbers',cnt:'numbers',add:'numbers',money:'numbers',sort:'logic',odd:'logic',same:'logic',routine:'logic',place:'logic',shp:'shapes',clk:'shapes',time:'shapes',calendar:'shapes',order:'shapes',diff:'attention',count:'attention',find:'attention',visual:'attention',wrd:'language',wm:'language',pic:'language',related:'language'};
 const LABELS={all:['All Games','全部游戏'],memory:['Memory','记忆'],attention:['Attention','观察'],logic:['Logic','逻辑'],language:['Language','语言'],numbers:['Numbers','数字'],shapes:['Shapes & time','图形与时间']};
 const GAME_TIME={seq:4,miss:4,rem:3,shopping:5,story:5,diff:5,visual:4,wrd:5,related:4};
 function navAction(action){if(action==='home')switchPage('dashboard');else if(action==='library')switchPage('library');else if(action==='online')document.getElementById('bOnline').click();else if(action==='progress')document.getElementById('bLb').click();else if(action==='leaderboard')document.getElementById('bLb').click();else if(action==='family')document.getElementById('bFam').click();else if(action==='settings')document.getElementById('bSet').click();else if(action==='profile')document.getElementById('bPl').click();else if(action==='language')document.getElementById('bLang').click();else if(action==='music')document.getElementById('bMus').click();else if(action==='theme'){document.getElementById('bSet').click();}}
 function buildNav(){
  const links=[['home','⌂','Home','主页'],['library','▦','All Games','所有游戏'],['online','♧','Play Together','一起玩'],['progress','▥','My Progress','我的进度'],['leaderboard','🏆','Leaderboard','排行榜']];
  nav.innerHTML='<button class="nav-brand" data-go="home" aria-label="'+T('Mind Garden home','心灵花园主页')+'"><span aria-hidden="true">'+icon('sprout')+'</span> <span>Mind Garden</span></button><div class="nav-items">'+links.map(v=>'<button class="nav-link'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' current':'')+'" data-go="'+v[0]+'"'+((page==='dashboard'&&v[0]==='home'||page==='library'&&v[0]==='library')?' aria-current="page"':'')+'><span aria-hidden="true">'+icon(({home:'home',library:'games',online:'together',progress:'progress',leaderboard:'trophy'})[v[0]])+'</span> '+T(v[2],v[3])+'</button>').join('')+
  '</div><div class="nav-actions"><button class="nav-quiet" data-go="settings">⚙ <span>'+T('Settings','设置')+'</span></button><button class="nav-quiet nav-symbol" data-go="music" aria-label="'+T('Music','音乐')+'">'+icon('music')+'</button><button class="nav-quiet nav-symbol" data-go="language" aria-label="'+T('Language','语言')+'">'+icon('language')+'</button><button class="nav-quiet nav-player" data-go="profile" aria-label="'+T('Switch player','切换玩家')+'">👤 <span>'+esc(me().name)+'</span></button></div><button id="navMore" class="nav-more" aria-expanded="false">☰ '+T('More','更多')+'</button><div id="navMenu" class="nav-menu hidden">'+[['home','⌂','Home','主页'],['library','▦','All Games','所有游戏'],['online','♧','Play Together','一起玩'],['progress','▥','My Progress','我的进度'],['leaderboard','🏆','Leaderboard','排行榜'],['family','♡','Family View','家人视图'],['profile','👤','Switch Player','切换玩家'],['settings','⚙','Settings','设置'],['music','♫','Music','音乐'],['language','文','Language','语言']].map(v=>'<button data-go="'+v[0]+'">'+v[1]+' '+T(v[2],v[3])+'</button>').join('')+'<fieldset class="nav-theme"><legend>'+T('Display mode','显示模式')+'</legend><div class="nav-theme-options">'+[['light',T('Light','浅色')],['dark',T('Dark','深色')],['auto',T('Auto','自动')]].map(v=>'<button type="button" data-mode="'+v[0]+'" aria-pressed="'+((save.mode||'auto')===v[0])+'">'+v[1]+'</button>').join('')+'</div></fieldset></div>';
  nav.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{const menu=document.getElementById('navMenu');if(menu)menu.classList.add('hidden');navAction(b.dataset.go)});
  const more=document.getElementById('navMore'),menu=document.getElementById('navMenu');more.onclick=()=>{const isOpen=!menu.classList.toggle('hidden');more.setAttribute('aria-expanded',String(isOpen));more.setAttribute('aria-label',isOpen?T('Close menu','关闭菜单'):T('Open menu','打开菜单'))};
  menu.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{save.mode=b.dataset.mode;persist();applyPrefs();buildNav()});
 }

 const days=()=>{const t=new Date(today()+'T12:00:00').getTime()/86400000|0;return [['shopping','rem','miss','story'][Math.abs(t)%4],['visual','find','diff','count'][Math.abs(t)%4],['calendar','routine','related','same'][Math.abs(t)%4]]};
 function renderWelcome(){
  const p=me();
  dash.innerHTML='<div class="welcome-scene"><div class="welcome-heading"><h1><span aria-hidden="true">'+icon('sprout')+'</span> Mind Garden</h1><p>'+T('Keep Your Mind Active · Enjoy Learning · Play Together','活跃思维 · 享受学习 · 一起玩')+'</p></div><div class="welcome-ctas">'+
  '<button class="welcome-feature feature-games" id="dashBrowse"><span class="feature-icon" aria-hidden="true">'+icon('games')+'</span><strong>'+T('All Games','所有游戏')+'</strong><span>'+T('Explore brain-friendly activities','探索轻松有趣的益智活动')+'</span></button>'+
  '<button class="welcome-feature feature-together" id="dashTogether"><span class="feature-icon" aria-hidden="true">'+icon('together')+'</span><strong>'+T('Play Together','一起玩')+'</strong><span>'+T('Challenge a family member or friend online','邀请家人或朋友一起玩')+'</span></button>'+
  '<button class="welcome-feature feature-progress" id="dashProgress"><span class="feature-icon" aria-hidden="true">'+icon('progress')+'</span><strong>'+T('My Progress','我的进度')+'</strong><span>'+T('See your activity and improvement','查看您的游戏活动与进度')+'</span></button>'+
  '<button class="welcome-feature feature-leaderboard" id="dashLeaders"><span class="feature-icon" aria-hidden="true">'+icon('trophy')+'</span><strong>'+T('Leaderboard','排行榜')+'</strong><span>'+T('View top scores and achievements','查看得分与成就')+'</span></button>'+
  '</div><div class="welcome-extra"><button id="dashStart" class="btn daily-shortcut" aria-describedby="dailyCaption">'+icon('bloom')+' '+T('Start Today’s Games','开始今日游戏')+' ▶</button><span id="dailyCaption">'+T('A gentle, guided daily activity journey','轻松的每日引导活动')+'</span></div><div class="garden-breathing-space" aria-hidden="true"></div></div><p class="dash-disclaimer">'+T('For enjoyment and cognitive engagement. Not a medical test or treatment.','用于娱乐和认知活动，并非医疗测试或治疗。')+'</p>';
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
  const keys=Object.keys(MG).filter(k=>((META[k]||'logic')===filter||filter==='all')&&((MG[k].n+' '+MG[k].d+' '+tr(MG[k].n)+' '+tr(MG[k].d)).toLowerCase().includes(search.toLowerCase())));
  const pairs=filter==='all'||filter==='memory';
  const pairMatch=pairs&&('matching pairs memory picture cards 配对游戏 记忆 图片').includes(search.toLowerCase());
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
 function switchPage(p){page=p;dash.classList.toggle('hidden',p!=='dashboard');progressStrip.classList.toggle('hidden',p!=='dashboard');library.classList.toggle('hidden',p!=='library');top.classList.add('hidden');legacyNav.classList.add('hidden');if(p==='library')renderLibrary();else {renderWelcome();renderProgress()}buildNav();window.scrollTo({top:0,behavior:'instant'})}
 const oldShow=window.show;window.show=function(which){oldShow(which);nav.classList.toggle('hidden',which!=='home');if(which==='home')switchPage(page)};
 const oldRender=window.renderHome;window.renderHome=function(){oldRender();if(page==='dashboard'){renderWelcome();renderProgress()}else renderLibrary();buildNav()};
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
 window.MindGardenDashboard={home:()=>switchPage('dashboard'),library:()=>switchPage('library'),refresh:()=>{renderWelcome();renderProgress();buildNav()}};
 // Preserve the dynamic garden generated by index.html and expose it below the welcome headline.
 renderWelcome();renderProgress();switchPage('dashboard');
})();
