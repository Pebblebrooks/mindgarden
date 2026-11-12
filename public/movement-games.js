/* Move & Remember integration. Legacy movement IDs route to one unscored activity. */
(function(){'use strict';
const $=id=>document.getElementById(id),T=(a,b)=>window.MindGardenLocale.pair(a,b),ids=['gardenrhythm','followgardener'];let active=null;
MG.gardenrhythm={get n(){return T('Move & Remember','动一动 · 记一记')},get d(){return T('Follow seated movements, rest, then repeat a sequence from memory.','跟随坐姿动作，休息后凭记忆重复动作序列。')},ic:'🌿',g:1};delete MG.followgardener;
function clean(v={}){const movements=['forward','sides','up','head','shoulders','palms','open','tap'];return {high:v.high===true,selected:Array.isArray(v.selected)?[...new Set(v.selected.filter(x=>movements.includes(x)))]:movements.filter(x=>!['up','head'].includes(x)),challenge:['gentle','balanced','challenging','advanced'].includes(v.challenge)?v.challenge:'balanced',pace:['slow','regular','manual'].includes(v.pace)?v.pace:'slow',count:[5,10,15].includes(v.count)?v.count:15,level:Math.max(1,Math.min([5,10,15].includes(v.count)?v.count:15,Math.round(Number(v.level)||1))),reverse:v.reverse===true,voice:v.voice!==false}}
function send(data){active?.frame?.contentWindow?.postMessage({source:'mind-garden-parent',...data},location.origin)}
function cancelSpeech(){try{active?.frame?.contentWindow?.MoveRememberPreview?.dispose()}catch{}window.speechSynthesis?.cancel()}
function close(){cancelSpeech();active=null;closeOv()}
function setup(id,c,next,hasNext){cancelSpeech();const stored=me().movementPreferences;const options=clean(stored||{count:c.count,level:c.start,challenge:c.range,voice:c.movementVoice});const profile=save.cp;
 overlay('<section class="movement-integrated"><div class="movement-toolbar"><span>'+MG.gardenrhythm.n+'</span><button class="btn" id="movementClose">'+T('Close','关闭')+'</button></div><iframe id="movementFrame" title="'+MG.gardenrhythm.n+'" src="move-remember/index.html?embedded=1" allow="autoplay"></iframe></section>');
 active={frame:$('movementFrame'),profile,options,next,hasNext,lang:save.lang,last:JSON.stringify(options)};$('movementClose').onclick=close;}
window.addEventListener('message',e=>{const a=active;if(!a||e.source!==a.frame.contentWindow||e.origin!==location.origin||e.data?.source!=='mind-garden-movement')return;
 if(save.cp!==a.profile){close();return}const d=e.data;
 if(d.type==='ready')send({type:'init',lang:save.lang,options:a.options,voiceURI:window.MindGardenNarration?.selectedVoice()?.voiceURI||'',nextLabel:a.hasNext()?T('Next chosen game','下一个已选游戏'):T('My Games','我的游戏'),textScale:save.textScale||1});
 if(d.type==='settings'){const v=clean(d.options),key=JSON.stringify(v);if(key!==a.last){me().movementPreferences=v;a.options=v;a.last=key;if(persist()===false)send({type:'save-error'})}}
 if(d.type==='language'&&['en','zh'].includes(d.lang)){save.lang=d.lang;persist();applyPrefs()}
 if(d.type==='next'){cancelSpeech();active=null;a.next()}
 if(d.type==='close')close();
});
new MutationObserver(()=>{if(!active)return;if(save.cp!==active.profile||!active.frame.isConnected||$('ov').classList.contains('hidden')){cancelSpeech();active=null;return}if(active.lang!==save.lang){active.lang=save.lang;document.querySelector('.movement-toolbar span').textContent=MG.gardenrhythm.n;$('movementClose').textContent=T('Close','关闭');active.frame.title=MG.gardenrhythm.n;send({type:'language',lang:save.lang,nextLabel:active.hasNext()?T('Next chosen game','下一个已选游戏'):T('My Games','我的游戏')})}}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&active)send({type:'pause'})});window.addEventListener('pagehide',cancelSpeech);
const oldStart=window.startMG,oldChoose=window.chooseMiniLevel;window.startMG=function(id){if(ids.includes(id))return window.MindGardenPersonal.setup('gardenrhythm');return oldStart.apply(this,arguments)};window.chooseMiniLevel=function(id){if(ids.includes(id))return window.MindGardenPersonal.setup('gardenrhythm');return oldChoose.apply(this,arguments)};
window.MindGardenMovement={has:id=>ids.includes(id),setup,cancelSpeech,clean,get current(){return active}};
})();
