/* Personal progression: presentation steps never replace historical difficulty IDs. */
(function(){
'use strict';
const $=id=>document.getElementById(id),T=(a,b)=>window.MindGardenLocale.pair(a,b);
const clone=x=>JSON.parse(JSON.stringify(x)),counts=[5,10,15],ranges=['gentle','balanced','challenging'];
const baseChoose=window.chooseMiniLevel,baseStart=window.startMG,basePairs=window.start;
let session=null,result=null,queue=[],launching=false,scope="all",resultNavigation=null;
const names=()=>({gentle:T('Gentle','轻松'),balanced:T('Balanced','适中'),challenging:T('Challenging','挑战')});
const gameName=id=>id==='pairs'?T('Matching Pairs','配对游戏'):MG[id]?.n||id;
function config(){const raw=me().myGames||{};return {count:counts.includes(raw.count)?raw.count:15,range:ranges.includes(raw.range)?raw.range:'balanced',movementVoice:raw.movementVoice!==false,movement:raw.movement==='both'?'both':'hands',length:['short','long'].includes(raw.length)?raw.length:'standard',timed:raw.timed===true,start:Math.max(1,Math.min(15,Number(raw.start)||1)),games:Array.isArray(raw.games)?[...new Set(raw.games.map(id=>id==='followgardener'?'gardenrhythm':id).filter(id=>id==='pairs'||MG[id]))]:[],overrides:raw.overrides&&typeof raw.overrides==='object'?raw.overrides:{}}}
function settings(id,context=scope){const c=config(),saved=me().gameSettings;if(!saved){me().gameSettings={my:{},all:{},defaults:clone(c)};}const store=me().gameSettings,base=store.defaults||c,o=store[context]?.[id]||base.overrides?.[id]||{};return {...base,...o,games:c.games,count:counts.includes(o.count)?o.count:base.count,range:ranges.includes(o.range)?o.range:base.range,start:Math.max(1,Math.min(15,Number(o.start)||base.start||1))}}
function saveGame(id,patch){const old=settings(id);me().gameSettings[scope]||={};me().gameSettings[scope][id]={...old,...patch};delete me().gameSettings[scope][id].games;delete me().gameSettings[scope][id].overrides;persist()}
function recipe(id,step,c=settings(id)){
 const count=counts.includes(c.count)?c.count:15,range=ranges.includes(c.range)?c.range:'balanced';step=Math.max(1,Math.min(count,Math.round(Number(step)||1)));
 const rank=Math.round(1+(step-1)*14/(count-1)),cap={gentle:5,balanced:15,challenging:15}[range],difficulty=Math.max(1,Math.round(1+(rank-1)*(cap-1)/14));
 const native=id==='pairs'?Math.min(6,Math.ceil(difficulty*6/15)):window.MindGardenActivities?.has(id)||window.MindGardenNewGames?.has(id)?Math.ceil(difficulty/5):difficulty;
 return {id,step,count,range,rank,difficulty,native,revision:2,key:'v2:'+range+':'+rank};
}
function lastStep(id){const c=settings(id);if(me().myGames)return Math.min(c.count,c.start);const last=[...(me().log||[])].reverse().find(x=>x.g===id&&x.challengeRange===c.range&&x.challengeRank);return last?Math.round(1+(last.challengeRank-1)*(c.count-1)/14):1}
const benefits={
 memory:['Remembering details and keeping information in mind.','练习记住细节及短时记忆。'],numbers:['Number reasoning and everyday calculations.','练习数字推理与日常计算。'],language:['Word recall and recognising connections.','练习词语回忆与辨认关联。'],visual:['Noticing details and comparing shapes or positions.','练习观察细节及比较形状与位置。'],logic:['Planning steps and solving problems.','练习规划步骤与解决问题。'],relax:['Enjoying a calm activity and making simple choices.','享受轻松活动并作出简单选择。']};
function benefit(id){if(window.MindGardenMovement?.has(id))return T('Following movement cues, left and right awareness, and remembering short sequences.','练习跟随动作提示、辨别左右及记忆短序列。');const group=['pairs','seq','miss','rem','shopping','story','recall','drawmemory','hawker','album','trail','melody'].includes(id)?'memory':['num','sum','tbl','add','sub','cnt','money','calendar','time','clk','count'].includes(id)?'numbers':['wrd','wm','pic','related','sayings'].includes(id)?'language':['spot','diff','find','visual','jigsaw','bingo','sounds','dots'].includes(id)?'visual':id==='pets'?'relax':'logic';return T(...benefits[group])}
function description(id){return id==='pairs'?T('Turn over cards and find matching pictures.','翻开卡片，找出相同的图片。'):MG[id]?.d||''}
function info(id){return window.MindGardenInfo.html(description(id)+' '+T('Skills practised: ','练习技能：')+benefit(id),gameName(id)+' · '+T('How to play and skills','玩法与技能'))}
const relatedPairs=[['🕯️','Candle','蜡烛','🔥','Flame','火焰'],['🐶','Dog','狗','🦴','Bone','骨头'],['🐦','Bird','小鸟','🪺','Nest','鸟巢'],['🐟','Fish','鱼','💧','Water','水'],['🐝','Bee','蜜蜂','🍯','Honey','蜂蜜'],['🔑','Key','钥匙','🔒','Lock','锁'],['✏️','Pencil','铅笔','📄','Paper','纸'],['🖌️','Paintbrush','画笔','🎨','Palette','调色板'],['🌷','Flower','花','🏺','Vase','花瓶'],['🫖','Teapot','茶壶','☕','Cup','杯子'],['☂️','Umbrella','雨伞','🌧️','Rain','雨'],['👞','Shoe','鞋','🧦','Sock','袜子']];
function pairDeck(count){return shuffle(relatedPairs.map((p,i)=>({e:'related-'+i,n:T(p[1],p[2]),h:gamePicture(p[0]),partner:{n:T(p[4],p[5]),h:gamePicture(p[3])}}))).slice(0,count)}
function preview(r){if(window.MindGardenExpansion?.has(r.id)){const rank=r.rank;return r.id==='sudoku'?T('Complete the number grid. Notes, Undo and hints are available.','完成数字方格，可使用笔记、撤销和提示。'):r.id==='stroop'?T('Match the requested word or colour. Levels 11–15 may switch rules.','匹配指定词语或颜色。第11至15关可能切换规则。'):r.id==='flags'?T('Levels 1–5: Southeast Asia; 6–9: wider Asia; 10–15: world flags and similar designs.','1至5关：东南亚；6至9关：更多亚洲国家；10至15关：世界国旗与相似图案。'):T('Recall more objects, then their positions and counts.','逐步回忆更多物品，再回忆位置与数量。');}if(r.id==='dots'){const p=window.MindGardenDotRoutes.parameters(r.rank,r.range);return T(p.n+' × '+p.n+' grid; '+p.checkpoints+' checkpoints. '+(p.fill?'Fill every square without crossing.':'Unused squares allowed.'),p.n+' × '+p.n+' 方格；'+p.checkpoints+' 个检查点。'+(p.fill?'填满所有格子，不交叉。':'可以留下空格。'));}const depth=window.MindGardenDepth?.preview(r);if(depth)return depth;const d=r.difficulty;
 if(r.id==='pairs')return T('Find '+[3,4,6,8,10,12][r.native-1]+' pairs. '+(d>=9?'Related pictures make the search closer.':'Explore a varied picture deck.'),'找出 '+[3,4,6,8,10,12][r.native-1]+' 对图片。'+(d>=9?'相近图片增加观察挑战。':'探索不同的图片组合。'));
 if(r.id==='seq')return T('Remember '+(2+Math.floor((d-1)/2))+' pictures'+(d>=11?' in reverse order.':'.'),'记住 '+(2+Math.floor((d-1)/2))+' 张图片'+(d>=11?'，按相反顺序回答。':'的顺序。'));
 if(r.id==='recall')return T('Recall a sequence of '+(2+Math.ceil(d/2))+' digits, or a shorter word list.','回忆 '+(2+Math.ceil(d/2))+' 位数字或较短的词语清单。');
 if(r.id==='dots'){const p=window.MindGardenDotRoutes.parameters(r.rank,r.range);return T(p.n+' × '+p.n+' grid; '+p.checkpoints+' checkpoints. '+(p.fill?'Fill every square without crossing.':'Connect in order; unused squares allowed.'),p.n+' × '+p.n+' 方格；'+p.checkpoints+' 个检查点。'+(p.fill?'填满所有格子，路线不可交叉。':'按顺序连接，可留下空格。'));}
 if(r.id==='story')return T('Recall '+Math.min(8,2+Math.ceil((d-1)/2))+' story details in a varied setting.','在不同场景中回忆 '+Math.min(8,2+Math.ceil((d-1)/2))+' 项故事细节。');
 return (window.MindGardenDifficulty.describe(r.id))+' '+T('Challenge step ','挑战步骤 ')+r.step+' / '+r.count;
}
function select(id,label,values,value){return '<label>'+label+'<select id="'+id+'">'+values.map(([v,n])=>'<option value="'+v+'"'+(String(value)===String(v)?' selected':'')+'>'+n+'</option>').join('')+'</select></label>'}
function button(id,en,zh,main=false){return '<button type="button" class="btn'+(main?' main':'')+'" id="'+id+'">'+T(en,zh)+'</button>'}
function myGames(){
 resultNavigation=null;stopSession();result=null;queue=[];scope='my';
 if(!me().myGames){me().myGames={...config(),games:['pairs','num','gardenrhythm']};persist()}
 closeOv();toHome();window.MindGardenDashboard.myGames();
}
function selectGame(id,include){if(id!=='pairs'&&!MG[id])return;const c=config();c.games=include?[...new Set([...c.games,id])]:c.games.filter(k=>k!==id);me().myGames=c;persist()}
function play(id,context){queue=[];setup(id,undefined,context)}
function playSelection(){queue=[...config().games];if(queue.length)setup(queue.shift(),undefined,'my')}

function category(id){if(window.MindGardenMovement?.has(id))return 'movement';if(['pairs','seq','miss','rem','shopping','story','recall','drawmemory','hawker','album','trail','melody'].includes(id))return 'memory';if(['num','sum','tbl','add','sub','cnt','money','calendar','time','clk','count'].includes(id))return 'numbers';return 'other';}

function setup(id,step,context=scope,autoStart=false){
 window.MindGardenMenuHistory?.enter('game-settings:'+id+':'+context,()=>setup(id,undefined,context));
 if(id==='followgardener')id='gardenrhythm';
 scope=context==='my'?'my':'all';if(step===undefined)step=lastStep(id);
 if(window.MindGardenMovement?.has(id)){stopSession();result=null;window.MindGardenMovement.setup(id,settings(id),()=>queue.length?setup(queue.shift(),undefined,scope,true):myGames(),()=>queue.length>0,()=>{if(scope==='my')myGames();else{toHome();document.querySelector('[data-go=library]')?.click()}});return}
 if(id==='pets'){stopSession();result=null;baseChoose(id);const play=$('gaStart'),run=play.onclick;play.onclick=()=>{launching=true;try{run()}finally{launching=false}decorate()};if(autoStart)play.click();return}
 stopSession();result=null;
 if(id==='pairs')overlay('<h2>'+gameName(id)+'</h2><div class="personal-pair-options"></div><div class="row">'+button('personalPairStart','Play game','开始游戏',true)+button('personalPairCancel','Cancel','取消')+'</div>');else baseChoose(id);
 const nativeSelect=$('difficultyChoice')||$('newGameLevel')||$('gaLevel')||$('cgLevel')||$('edLevel');
 if(id!=='pairs'&&!nativeSelect)return;
 const c=settings(id),r=recipe(id,step,c),container=document.createElement('section');container.className='personal-setup';
 container.innerHTML='<div class="personal-title">'+info(id)+'</div>'+select('personalStep',T('Start level','起始关卡'),Array.from({length:c.count},(_,i)=>[i+1,T('Level ','第 ')+(i+1)+(save.lang==='zh'?' 关':'')]),r.step)+'<p>'+names()[c.range]+' · '+c.count+' '+T('levels','个关卡')+'</p><p id="personalPreview"></p><div class="personal-actions">'+button('personalPractice','Practice','练习')+button('personalEdit','Back to games','返回游戏')+'</div>';
 if(nativeSelect){nativeSelect.closest('label').hidden=true;nativeSelect.closest('label').before(container)}else $('box').querySelector('.personal-pair-options').append(container);
 $('box').querySelector('.difficulty-guide')?.remove();
 if(id==='recall')container.insertAdjacentHTML('beforeend',select('personalDelay',T('Delay before recall','回忆前等待'),[[0,T('No delay','不等待')],[5,T('5 seconds','5秒')],[10,T('10 seconds','10秒')]],0));
 if(id==='pairs')container.insertAdjacentHTML('beforeend',select('personalPairMode',T('Matching style','配对方式'),[['auto',T('Follow this level','跟随本关')],['same',T('Same pictures','相同图片')],['words',T('Picture and word','图片与词语')],['related',T('Related objects','相关物品')]],'auto')+'<p id="personalPairHint" hidden>'+T('Match related objects.','配对相关物品。')+'</p>');
 const extras='<p class="tip">'+T('Saved for this game in ','仅保存至此游戏：')+(scope==='my'?T('My Games','我的游戏'):T('All Games','所有游戏'))+'</p><div class="personal-fields">'+select('gameRange',T('Challenge','挑战'),ranges.map(x=>[x,names()[x]]),c.range)+select('gameCount',T('Number of levels','关卡数量'),counts.map(x=>[x,x]),c.count)+'</div><details><summary>'+T('Options','选项')+'</summary>'+select('gameLength',T('Session length','游戏时长'),[['short',T('Short','短')],['standard',T('Regular','常规')],['long',T('Longer','较长')]],c.length)+select('gameTimed',T('Timing','计时'),[['0',T('Untimed','不限时')],['1',T('Optional time challenge','可选计时挑战')]],c.timed?'1':'0')+(scope==='my'?button('applyMyGames','Apply these settings to my selected games','将这些设置应用至我的已选游戏'):'')+'</details>';
 container.insertAdjacentHTML('afterbegin',extras);
 const more=container.querySelector('details'),primary=container.querySelector('.personal-fields');more.className='personal-more-options';
 more.prepend($('gameCount').closest('label'));more.prepend(more.querySelector('summary'));
 primary.append($('personalStep').closest('label'));primary.classList.add('personal-primary');
 for(const option of ['personalPairMode','personalDelay','expMode','expSize'])if($(option))more.append($(option).closest('label'));
 if($('personalPairHint'))more.append($('personalPairHint'));
 container.querySelector('.personal-title').append($('personalPreview'));container.append(more);

 for(const key of ['gameRange','gameCount','gameLength','gameTimed'])$(key).onchange=()=>{const wasOpen=more.open,optionsOpen=!!$('box').querySelector('.v5-game-options[open]');saveGame(id,{range:$('gameRange').value,count:+$('gameCount').value,length:$('gameLength').value,timed:$('gameTimed').value==='1'});setup(id,Math.min(+$('personalStep').value,+$('gameCount').value),scope);$('box').querySelector('.personal-more-options').open=wasOpen;const opts=$('box').querySelector('.v5-game-options');if(opts)opts.open=optionsOpen};
 if($('applyMyGames'))$('applyMyGames').onclick=()=>{const source=settings(id,'my');for(const game of config().games){me().gameSettings.my[game]={...settings(game,'my'),count:source.count,range:source.range,length:source.length,timed:source.timed};}persist();$('applyMyGames').textContent=T('Applied to my selected games','已应用至我的已选游戏')};
 const current=()=>({...recipe(id,+$('personalStep').value),context:scope,delay:+($('personalDelay')?.value||0),pairMode:($('personalPairMode')?.value==='auto'?window.MindGardenDepth.pairMode(recipe(id,+$('personalStep').value).difficulty):$('personalPairMode')?.value)||'same',recallMode:$('gaMode')?.value||'numbers'});const update=()=>{$('personalPreview').textContent=preview(current());if($('personalPairHint'))$('personalPairHint').hidden=current().pairMode!=='related';if(nativeSelect)nativeSelect.value=String(current().native)};update();$('personalStep').onchange=()=>{saveGame(id,{start:+$('personalStep').value});update()};if($('gaMode'))$('gaMode').onchange=update;if($('personalPairMode'))$('personalPairMode').onchange=()=>{$('personalPairHint').hidden=current().pairMode!=='related';update()};
 for(const el of $('box').querySelectorAll('select')){if(el===nativeSelect||['personalStep','gameRange','gameCount','gameLength','gameTimed'].includes(el.id)||!el.id)continue;const stored=c.controls?.[el.id];if(stored!==undefined&&[...el.options].some(o=>o.value===stored))el.value=stored;el.addEventListener('change',()=>saveGame(id,{controls:{...settings(id).controls,[el.id]:el.value}}))}update();
 const startButton=$('startExtra')||$('newGameStart')||$('gaStart')||$('cgBegin')||$('edBegin')||$('personalPairStart'),run=startButton.onclick;
 for(const b of startButton.parentElement.querySelectorAll('button'))if(b!==startButton&&/^(Cancel|取消)$/.test(b.textContent.trim()))b.hidden=true;
 startButton.parentElement.append($('personalEdit'));
 const launch=practice=>{window.MindGardenMenuHistory?.clear();const r=current();beginSession(r,practice);launching=true;try{if(id==='pairs')basePairs(r.native-1);else run.call(startButton);session.started=Date.now();if(practice&&window.mg)mg.R=1;if(practice&&window.MindGardenCommercial?.current)window.MindGardenCommercial.current.total=1;if(practice&&window.MindGardenEveryday?.current)window.MindGardenEveryday.current.questions=window.MindGardenEveryday.current.questions.slice(0,1);}finally{launching=false}decorateSession()};
 startButton.onclick=()=>launch(false);$('personalPractice').onclick=()=>launch(true);$('personalEdit').onclick=()=>{if(scope==='my')myGames();else{closeOv();toHome();document.querySelector('[data-go=library]')?.click()}};if($('personalPairCancel'))$('personalPairCancel').onclick=closeOv;
 const dailyPosition=window.MindGardenDaily?.position;if(dailyPosition?.type===id){const label=document.createElement('p');label.className='daily-progress';label.textContent=T('Today’s Games','今日游戏')+' · '+(dailyPosition.index+1)+' / '+dailyPosition.total;$('box').prepend(label);}
 // V5: a single preparation screen, with saved choices inside Options.
 startButton.textContent=T('Begin','开始');
 const summary=document.createElement('p');summary.id='v5ReadySummary';
 const summaryText=()=>T('Level ','第 ')+$('personalStep').value+(save.lang==='zh'?' 关':'')+' · '+(settings(id).timed?T('Timed challenge','计时挑战'):T('At your pace','按自己的节奏'));
 summary.textContent=summaryText();container.before(summary);
 container.addEventListener('change',()=>{summary.textContent=summaryText()});
 const options=document.createElement('details');options.className='v5-game-options';
 const title=document.createElement('summary');title.textContent=T('Options','选项');options.append(title);
 container.before(options);options.append(container);more.open=true;
 const instruction=document.createElement('p');instruction.className='v5-ready-instruction';const readyRule=()=>{instruction.textContent=id==='pairs'?preview(current())+' '+T('Hints: 3','提示：3'):description(id)};readyRule();container.addEventListener('change',readyRule);for(const p of [...$('box').querySelectorAll('p')]){if(!p.closest('.v5-game-options')&&p.textContent.trim()===description(id).trim())p.remove()}summary.before(instruction);
 if(!autoStart&&resultNavigation?.record.id===id)mountResultOptions();
 if(autoStart)launch(false);
}
const protectedKeys=['levels','log','ok','gp','gr','bt','streak','last','lg','unlocked','stars','bk'];
function restorePractice(){if(!session?.practice||save.cp!==session.player)return;for(const key of protectedKeys){if(session.snapshot[key]===undefined)delete me()[key];else me()[key]=clone(session.snapshot[key])}save.unlocked=session.unlocked;save.stars=clone(session.stars)}
function stopSession(){restorePractice();if(session){save.timed=session.oldTimed;window.mgSessionLength=session.oldLength;oldPersist()}session=null;$('personalSession')?.remove();}
function beginSession(r,practice){resultNavigation=null;stopSession();const c=settings(r.id),snapshot={};for(const key of protectedKeys)if(me()[key]!==undefined)snapshot[key]=clone(me()[key]);session={...r,practice,player:save.cp,snapshot,unlocked:save.unlocked,stars:clone(save.stars),oldTimed:save.timed,oldLength:window.mgSessionLength,started:Date.now(),elapsed:0,timed:c.timed&&!practice};save.timed=session.timed?1:0;window.mgSessionLength=practice?1:({short:4,standard:6,long:10})[c.length];window.mgDifficulty=r.native;result=null;}
const oldPersist=window.persist;window.persist=function(){restorePractice();return oldPersist.apply(this,arguments)};
const oldBreak=window.addBreak;window.addBreak=function(){if(session?.practice)return;return oldBreak.apply(this,arguments)};
const oldAward=window.award;window.award=function(){if(session?.practice)return;return oldAward.apply(this,arguments)};
const oldLog=window.logPlay;window.logPlay=function(id,rate,seconds,details){if(session?.id===id){result={...session,rate};if(session.practice)return;oldLog(id,rate,seconds,details);const row=me().log.at(-1);Object.assign(row,{progressionRevision:2,challengeRange:session.range,challengeRank:session.rank,displayLevel:session.step,displayCount:session.count,challengeVariant:window.MindGardenExpansion?.has(id)?(id==='sudoku'?window.MindGardenExpansion.current?.opts.size||'auto':id==='scene'?'standard':window.MindGardenExpansion.current?.opts.mode||'standard'):session.id==='pairs'?session.pairMode:session.id==='recall'?session.recallMode+':delay'+session.delay:'standard'});persist();return}return oldLog.apply(this,arguments)};
window.chooseMiniLevel=(id,step)=>{queue=[];return setup(id,step,'all')};
window.startMG=function(id){if(!launching)stopSession();return baseStart.apply(this,arguments)};
window.start=function(i){if(!launching)stopSession();return basePairs.apply(this,arguments)};
const oldHome=window.toHome;window.toHome=function(){if(!launching){resultNavigation=null;stopSession();result=null;queue=[];$('personalPetNext')?.remove()}return oldHome.apply(this,arguments)};
window.addEventListener('gardenPlayerChange',()=>{resultNavigation=null;session=null;result=null;queue=[];decorate()});
function decorateSession(){if(!session||result)return;const host=session.id==='pairs'?$('game'):$('mini');if(!host||host.classList.contains('hidden'))return;let el=$('personalSession');if(!el){el=document.createElement('div');el.id='personalSession';el.className='personal-session';(host.querySelector('.hud')||host.firstElementChild).after(el)}if(session.id==='pairs'&&$('hLv').textContent!==T('Matching Pairs','配对游戏'))$('hLv').textContent=T('Matching Pairs','配对游戏');const timeGoal=session.timed&&session.id!=='pairs'?' · '+(session.elapsed>=180?T('Time goal reached — continue at your pace','已达到时间目标，可继续按自己的节奏游戏'):T('Time goal: ','时间目标：')+Math.max(0,180-session.elapsed)+' '+T(Math.max(0,180-session.elapsed)===1?'second':'seconds','秒')):'';const label=T(session.practice?'Practice · no score saved':'Level ',session.practice?'练习 · 不保存成绩':'第 ')+(session.practice?'':session.step+' / '+session.count+' · '+names()[session.range])+timeGoal;if(el.textContent!==label)el.textContent=label;
}
function completion(){if(!result||$('personalResult'))return;const host=$('ma')?.parentElement||$('ag')?.parentElement||$('newAgain')?.parentElement||$('gaAgain')?.parentElement||$('cgReplay')?.parentElement||$('edReplay')?.parentElement;if(!host)return;
 const r=result;for(const id of ['miniNextLevel','nx','newNextLevel','gaNext','edLevelUp'])$(id)?.remove();
 const section=document.createElement('section');section.id='personalResult';section.className='personal-result';let prompt='';
 if(r.practice)prompt=T('Practice complete. No score or progress has been changed.','练习完成，成绩与进度未改变。');

 const award=host.parentElement.querySelector('.pair-award-label'),stars=host.parentElement.querySelector('.pair-result-stars');if(award&&stars){const help=award.querySelector('.mg-info-button');if(help){stars.removeAttribute('role');stars.append(help);award.remove()}}
 const next=r.step<r.count&&!r.practice;
 section.innerHTML=(prompt?'<p>'+prompt+'</p>':'')+'<div class="result-done">'+resultButton('personalReturn','close','Done','完成',true)+'</div><div class="personal-actions result-primary">'+resultButton('personalReplay',r.practice?'play':'reset',r.practice?'Start':'Replay',r.practice?'开始':'重玩',false)+(next?resultButton('personalNext','next','Next level','下一关',false):'')+'</div><footer class="result-footer">'+resultButton('personalChangeSettings','options','Settings','设置')+resultButton('personalHome','home','Home','主页',false,true)+'</footer>';
 section.querySelectorAll('.result-done button,.result-primary button,.result-footer button').forEach(b=>b.classList.add('labelled-action'));
 host.parentElement.append(section);host.hidden=true;
 for(const id of ['ma','ag','newAgain','gaAgain','cgReplay','edReplay','mn','mm','newHome','gaHome','cgHome','edHome'])if($(id))$(id).hidden=true;
 if(r.practice){const heading=$('box').querySelector('h2');if(heading)heading.textContent=T('Practice complete','练习完成');$('box').querySelectorAll('p').forEach(p=>{if(!section.contains(p))p.hidden=true});}
 const nodes=[...$('box').children].filter(n=>!n.classList.contains('menu-exit-bar'));
 const nav={record:r,player:save.cp,restore(){if(save.cp!==nav.player)return;result=r;overlay('');$('box').append(...nodes);$('personalChangeSettings')?.focus();},exit(){resultNavigation=null;stopSession();result=null;queue=[];closeOv();if(r.context==='my')myGames();else{toHome();document.querySelector('[data-go=library]')?.click()}}};
 resultNavigation=nav;window.MindGardenMenuHistory?.clear();window.MindGardenMenuHistory?.enter('game-result',nav.restore);
 $('personalHome').onclick=()=>{closeOv();toHome()};
 $('personalChangeSettings').onclick=()=>setup(r.id,r.step,r.context);
 $('personalReplay').onclick=()=>setup(r.id,r.step,r.context,true);
 if($('personalNext'))$('personalNext').onclick=()=>setup(r.id,r.step+1,r.context,true);
 $('personalReturn').onclick=nav.exit;
}
function resultButton(id,icon,en,zh,main=false,iconOnly=true){const label=T(en,zh);return '<button type="button" class="btn'+(main?' main':'')+'" id="'+id+'" aria-label="'+esc(label)+'"'+(iconOnly?' title="'+esc(label)+'"':'')+'>'+window.MindGardenIcon(icon)+(iconOnly?'':'<span>'+label+'</span>')+'</button>'}
function showResultRest(nav){
 window.MindGardenMenuHistory?.enter('game-result-rest',()=>showResultRest(nav));stopSession();
 overlay('<section id="personalRestScreen"><h2>'+T('Take a break','休息一下')+'</h2><p>'+(nav.record.practice?T('Practice is complete. No score was saved. Rest as long as you like.','练习已完成，未保存分数。请安心休息。'):T('Your completed result is kept. Continue whenever you feel ready.','已完成的成绩会保留。准备好后再继续。'))+'</p><div class="popup-footer">'+resultButton('personalRestResume','play','Back to results','返回成绩',true)+'</div></section>');
 $('personalRestResume').onclick=()=>window.MindGardenMenuHistory.back();
}
function mountResultOptions(){
 const nav=resultNavigation,r=nav.record;if(save.cp!==nav.player)return;
 const panel=document.createElement('section');panel.id='personalResultOptions';panel.className='result-option-actions';
 panel.innerHTML=(r.step>1?resultButton('personalEasier','easier','Easier level','轻松一点的关卡'):'')+(queue.length?resultButton('personalNextGame','skip','Next selected game','下一个已选游戏'):'');
 const heading=$('box').querySelector('h2');if(heading)heading.textContent=T('Game options','游戏选项');
 $('box').querySelector('.personal-setup').append(panel);
 if($('personalEasier'))$('personalEasier').onclick=()=>setup(r.id,r.step-1,r.context,true);
 if($('personalNextGame'))$('personalNextGame').onclick=()=>setup(queue.shift(),undefined,r.context,true);
}
function closeResultMenu(){if(!resultNavigation||save.cp!==resultNavigation.player||!$('box').querySelector('#personalResult,#personalResultOptions,#personalRestScreen'))return false;resultNavigation.exit();return true;

}
function decorate(){
 if(window.MindGardenActivities?.current?.type==='pets'&&queue.length&&!$('mini').classList.contains('hidden')&&!$('personalPetNext')){const b=document.createElement('button');b.id='personalPetNext';b.className='btn personal-open';b.textContent=T('Next chosen game','下一个已选游戏');b.onclick=()=>{b.remove();setup(queue.shift(),undefined,scope,true)};$('mini').append(b)}
 for(const host of [$('welcomeDashboard')])if(host&&!host.querySelector('.personal-open')){const b=document.createElement('button');b.className='btn personal-open';b.textContent=T('My Games','我的游戏');b.onclick=myGames;if(host.id==='welcomeDashboard'&&host.querySelector('.welcome-ctas')){b.classList.add('welcome-feature');b.innerHTML='<span class="feature-icon" aria-hidden="true">'+window.MindGardenIcon('games')+'</span><strong>'+T('My Games','我的游戏')+'</strong>';const card=document.createElement('div');card.className='welcome-choice';card.append(b);card.insertAdjacentHTML('beforeend',window.MindGardenInfo.html(T('Play your saved selection of games with your preferred challenge and session length.','按您偏好的挑战和时长，游玩已保存的游戏组合。'),T('About My Games','关于我的游戏')));const grid=host.querySelector('.welcome-ctas');grid.insertBefore(card,$('dashBrowse')?.closest('.welcome-choice')||$('dashTogether')?.closest('.welcome-choice')||null)}else host.prepend(b)}
 document.querySelectorAll('#gameCards .game-tile[data-game]').forEach(b=>{if(b.parentElement.classList.contains('personal-game-card'))return;const wrap=document.createElement('article');wrap.className='personal-game-card';b.before(wrap);wrap.append(b);wrap.insertAdjacentHTML('beforeend',info(b.dataset.game));const meta=b.querySelector('.game-meta');if(meta&&window.MindGardenMovement?.has(b.dataset.game))meta.textContent=T('Seated · Self-reported · Untimed','坐姿 · 自行确认 · 不限时');else if(meta&&b.dataset.game!=='pets'){const c=settings(b.dataset.game,'all');meta.textContent=names()[c.range]+' · '+c.count+' '+T('levels','个关卡')}b.querySelector('.game-meta')?.remove();b.onclick=()=>{queue=[];setup(b.dataset.game,undefined,'all')}});
 decorateSession();completion();
}
const clock=setInterval(()=>{if(!session||result||document.hidden||paused||!$('ov').classList.contains('hidden'))return;const g=window.MindGardenExpansion?.current||window.MindGardenActivities?.current||window.MindGardenNewGames?.current||window.MindGardenCommercial?.current||window.MindGardenEveryday?.current;if(g?.paused)return;session.elapsed++;if(session.timed)decorateSession()},1000);window.addEventListener('pagehide',()=>clearInterval(clock));
new MutationObserver(decorate).observe(document.body,{childList:true,subtree:true});decorate();
window.MindGardenPersonal={closeResultMenu,config,settings,saveGame,recipe,setup,myGames,selectGame,play,playSelection,info,preview,benefit,pairDeck,get session(){return session},get result(){return result},challenge(id){return session?.id===id?session:null}};
})();
