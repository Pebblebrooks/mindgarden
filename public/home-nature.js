(function(){
const T=(a,b)=>window.MindGardenLocale.pair(a,b);let ctx,bus,engine,timer,unlocked=false,active=false,lastMode='',generation=0;
if(save.homeNature===undefined)save.homeNature=true;
function visible(){return !document.hidden&&document.getElementById('ov').classList.contains('hidden')&&!document.getElementById('home').classList.contains('hidden')&&!document.getElementById('welcomeDashboard').classList.contains('hidden')}
function ui(){
 const actions=document.querySelector('#unifiedNav .nav-actions');if(!actions)return;
 let b=document.getElementById('homeNatureToggle');if(!b){b=document.createElement('button');b.id='homeNatureToggle';b.className='nav-quiet nav-symbol';b.dataset.go='nature';actions.insertBefore(b,document.getElementById('navMore'));b.onclick=()=>setMuted(!save.backgroundMuted)}
 const enabled=!save.backgroundMuted,label=enabled?T('Background audio: On','背景声音：开'):T('Background audio: Off','背景声音：关'),symbol=window.MindGardenIcon(enabled?'sound':'muted');
 if(b.innerHTML!==symbol)b.innerHTML=symbol;b.setAttribute('aria-label',label);b.setAttribute('aria-pressed',String(enabled));b.dataset.playing=String(active||window.MindGardenSound?.status().playing);b.dataset.soundscape=lastMode;b.title=enabled?T('Mute music and garden sounds','关闭音乐和花园声音'):T('Restore music and garden sounds','恢复音乐和花园声音');
 document.querySelectorAll('#navMenu [data-go="nature"]').forEach(el=>el.setAttribute('aria-pressed',String(enabled)));
 const fab=document.getElementById('mFab');if(fab){fab.textContent=(enabled?'🔊 ':'🔇 ')+T('Background: ','背景：')+(enabled?T('On','开'):T('Off','关'));fab.setAttribute('aria-pressed',String(enabled));fab.setAttribute('aria-label',b.title);fab.title=b.title;fab.onclick=()=>setMuted(!save.backgroundMuted)}
 document.querySelectorAll('[data-background-audio]').forEach(el=>{if(el.innerHTML!==symbol)el.innerHTML=symbol;el.setAttribute('aria-label',label);el.setAttribute('aria-pressed',String(enabled));el.title=b.title});
 const master=document.getElementById('backgroundAudioToggle');if(master){const on=enabled&&!!window.MindGardenSound?.status().playing;master.textContent=on?T('Sound: On','声音：开'):T('Sound: Off','声音：关');master.setAttribute('aria-pressed',String(on));master.onclick=()=>{if(on)setMuted(true);else{setMuted(false);window.MindGardenSound?.start()}}}
}
function setMuted(muted){
 muted=!!muted;if(muted===!!save.backgroundMuted){ui();return}
 unlocked=true;
 if(muted){save.backgroundResumeMusic=!!window.MindGardenSound?.status().playing;save.backgroundMuted=true;persist();window.MindGardenSound?.stop();stop()}
 else{save.backgroundMuted=false;persist();if(save.backgroundResumeMusic)window.MindGardenSound?.start();sync()}
 ui();
}

function stop(){generation++;clearInterval(timer);engine?.stop();engine=null;if(bus){bus.disconnect();bus=null}active=false;if(ctx)ctx.suspend().catch(()=>{});ui()}
async function sync(){const mode=document.documentElement.dataset.gardenSceneMode==='dark'?'home-night':'home-day';if(!unlocked||save.backgroundMuted||!save.homeNature||!visible()||(window.MindGardenSound?.status().playing||window.MindGardenWelcomeMedia?.audible())){if(active)stop();else generation++;ui();return}if(active&&lastMode===mode){ui();return}stop();const g=++generation;try{ctx=ctx||new(window.AudioContext||window.webkitAudioContext)();await ctx.resume();if(g!==generation)return;bus=ctx.createGain();bus.gain.value=.3;bus.connect(ctx.destination);engine=window.MindGardenNatureComposer(ctx,bus,bus,{music:'none',nature:mode},Math.random()*0xffffffff);engine.schedule(ctx.currentTime+1.5);timer=setInterval(()=>engine?.schedule(ctx.currentTime+1.5),500);lastMode=mode;active=true;ui()}catch{active=false;ui()}}
document.addEventListener('click',e=>{if(e.target.closest('#homeNatureToggle'))return;if(!unlocked){unlocked=true;sync()}});document.addEventListener('keydown',()=>{if(!unlocked){unlocked=true;sync()}},{once:true});
new MutationObserver(()=>{ui();sync()}).observe(document.getElementById('welcomeDashboard'),{childList:true,attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.getElementById('ov'),{attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.getElementById('home'),{attributes:true,attributeFilter:['class']});new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-garden-scene-mode']});document.addEventListener('visibilitychange',sync);window.addEventListener('gardenSoundChange',sync);window.addEventListener('gardenBackgroundSoundChange',()=>{ui();sync()});window.addEventListener('gardenPlayerChange',sync);window.addEventListener('gardenVideoSoundChange',sync);window.addEventListener('pagehide',stop);new MutationObserver(ui).observe(document.getElementById('unifiedNav'),{childList:true});window.MindGardenHomeNature={sync,status:()=>({enabled:save.homeNature,active,mode:lastMode})};window.MindGardenBackground={toggle:()=>setMuted(!save.backgroundMuted),setMuted,syncControls:ui,status:()=>({muted:!!save.backgroundMuted,restoreMix:!!save.backgroundResumeMusic})};ui();
})();
