const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const d=new JSDOM('<div id="home"><nav id="unifiedNav"><div class="nav-actions"><button id="navMore">Menu</button></div><div id="navMenu"><button data-go="nature">Background audio</button></div></nav><div id="welcomeDashboard"></div></div><div id="ov" class="hidden"></div><button id="mFab"></button><button id="backgroundAudioToggle"></button>',{runScripts:'outside-only',pretendToBeVisual:true}),w=d.window,tick=()=>new Promise(r=>setTimeout(r,10));
let playing=true,starts=0,stops=0,natureStarts=0,natureStops=0,saves=0;
w.save={homeNature:true,backgroundMuted:false,lang:'en',soundscape:{music:'piano',master:45,musicVolume:55,natureVolume:35}};const mix=JSON.stringify(w.save.soundscape);
w.persist=()=>saves++;w.MindGardenIcon=name=>'<svg>'+name+'</svg>';
w.MindGardenSound={status:()=>({playing}),start(){starts++;playing=true;w.dispatchEvent(new w.Event('gardenSoundChange'))},stop(){stops++;playing=false;w.dispatchEvent(new w.Event('gardenSoundChange'))}};
w.AudioContext=class{currentTime=0;resume(){return Promise.resolve()}suspend(){return Promise.resolve()}createGain(){return{gain:{},connect(){},disconnect(){}}}};
w.MindGardenNatureComposer=()=>{natureStarts++;return{schedule(){},stop(){natureStops++}}};
w.eval(fs.readFileSync(__dirname+'/../public/language-runtime.js','utf8'));w.eval(fs.readFileSync(__dirname+'/../public/home-nature.js','utf8'));
(async()=>{try{
 const b=w.document.getElementById('homeNatureToggle');b.click();await tick();assert.equal(playing,false);assert.equal(stops,1);assert(w.save.backgroundMuted);assert(w.save.backgroundResumeMusic);assert.equal(w.MindGardenHomeNature.status().active,false);assert.equal(b.getAttribute('aria-pressed'),'false');
 b.click();await tick();assert(playing);assert.equal(starts,1);assert.equal(w.save.backgroundMuted,false);assert.equal(JSON.stringify(w.save.soundscape),mix);assert(w.save.homeNature);
 w.document.getElementById('mFab').click();await tick();assert(!playing);assert(w.save.backgroundMuted);
 w.document.getElementById('backgroundAudioToggle').click();await tick();assert(playing);assert.equal(b.getAttribute('aria-pressed'),'true');
 playing=false;w.MindGardenBackground.setMuted(true);w.MindGardenBackground.setMuted(false);await tick();assert(w.MindGardenHomeNature.status().active);assert(natureStarts>0);
 b.click();await tick();assert(!w.MindGardenHomeNature.status().active);assert(natureStops>0);assert(saves>0);assert.equal(JSON.stringify(w.save.soundscape),mix);
 console.log('PASS one-click background mute stops both engines, restores the prior mix, preserves volumes and synchronizes navbar, game and music-menu controls.');
}finally{w.dispatchEvent(new w.Event('pagehide'));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
