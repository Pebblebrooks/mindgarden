const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
const pause=()=>new Promise(r=>setTimeout(r,10)),source=fs.readFileSync(process.env.MG_AUDIO_SOURCE||__dirname+'/../public/soundscape.js','utf8');
const dom=new JSDOM('<div id="box"></div><button id="bMus"></button><button id="mFab"></button>',{url:'https://garden.test',runScripts:'outside-only'}),w=dom.window;
let gesture=false,media,resumeResolve,holdResume=false,playCalls=0,permissionChecks=[],nodes=0;
const parameter=()=>({value:0,setTargetAtTime(){},setValueAtTime(){},linearRampToValueAtTime(){}});
const node=()=>{nodes++;return {gain:parameter(),threshold:parameter(),ratio:parameter(),attack:parameter(),release:parameter(),connect(){},disconnect(){}}};
w.Audio=class {src='';pause(){this.paused=true}play(){playCalls++;permissionChecks.push(gesture);if(!gesture)return Promise.reject(Object.assign(Error('gesture required'),{name:'NotAllowedError'}));this.paused=false;return Promise.resolve()}removeAttribute(){this.src=''}load(){}};
const BaseAudio=w.Audio;w.Audio=class extends BaseAudio{constructor(){super();media=this}};
w.AudioContext=class {state='running';sampleRate=1000;currentTime=0;destination={};createGain=node;createDynamicsCompressor=node;createMediaElementSource=node;createConvolver=node;createBuffer(c,n){return {getChannelData:()=>new Float32Array(n)}}resume(){return holdResume?new Promise(r=>resumeResolve=r):Promise.resolve()}suspend(){return Promise.resolve()}};
w.URL.createObjectURL=()=> 'blob:my-track';w.URL.revokeObjectURL=()=>{};
w.save={lang:'en',soundscape:{music:'personal',nature:'none'}};w.persist=()=>{};w.overlay=html=>w.document.getElementById('box').innerHTML=html;w.closeOv=()=>{};w.eval(source);
const click=id=>{gesture=true;w.document.getElementById(id).click();gesture=false};
(async()=>{try{
 w.openMu();const input=w.document.getElementById('soundFiles');input.onchange({target:{files:[new w.File(['test'],'song.mp3',{type:'audio/mpeg'})]}});
 w.save.backgroundMuted=true;holdResume=true;click('soundPlay');assert.equal(w.save.backgroundMuted,false,'Explicit Play restores background audio');assert.equal(playCalls,1,'Personal audio must be started synchronously during the click');assert.deepEqual(permissionChecks,[true]);assert.match(w.document.getElementById('soundMessage').textContent,/Loading sound/);
 click('soundPlay');assert.equal(w.MindGardenSound.status().playing,false);const afterStop=nodes;resumeResolve();await pause();assert.equal(nodes,afterStop,'An old pending start must not build an engine after Pause');assert(media.paused);
 holdResume=false;click('soundPlay');await pause();assert.equal(w.MindGardenSound.status().playing,true);assert(!media.paused);assert.deepEqual(permissionChecks,[true,true]);
 click('soundPlay');assert(media.paused);assert.equal(w.MindGardenSound.status().playing,false);
 // Floating control toggles the selected mix directly, without opening settings.
 w.document.getElementById('box').innerHTML='';click('mFab');await pause();assert(w.MindGardenSound.status().playing);assert.equal(w.document.getElementById('box').innerHTML,'');click('mFab');assert(!w.MindGardenSound.status().playing);w.openMu();
 // A rejected media request returns to Play and presents a clear error.
 media.play=()=>Promise.reject(Object.assign(Error('blocked'),{name:'NotAllowedError'}));click('soundPlay');await pause();assert.equal(w.MindGardenSound.status().playing,false);assert.equal(w.document.getElementById('soundPlay').textContent,'▶');assert.match(w.document.getElementById('soundMessage').textContent,/Unable to play/);
 w.openMu();w.document.querySelector('[data-sound-music=none]').click();w.document.querySelector('[data-sound-nature=none]').click();click('mFab');await pause();assert.equal(w.document.getElementById('mFab').getAttribute('aria-pressed'),'false');assert.equal(w.MindGardenSound.status().playing,false);
 console.log('PASS: personal audio receives click activation before delayed resume; pause cancels pending start; one-click retry works; rejection restores Play and shows feedback.');
}finally{w.MindGardenSound.stop();dom.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
