const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const el=id=>w.document.getElementById(id),tick=()=>new Promise(r=>setTimeout(r,15));let plays=0,pauses=0,tones=0;
w.Audio=class{play(){plays++;return Promise.resolve()}pause(){pauses++}};
w.AudioContext=class{constructor(){this.state='running';this.currentTime=0;this.destination={}}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}createGain(){return{gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},disconnect(){}}}createOscillator(){tones++;return{frequency:{},connect(){},disconnect(){},start(){},stop(){}}}};
(async()=>{try{
 w.save.snd=0;
 for(const lang of ['en','zh'])for(let level=1;level<=15;level++){
  w.save.lang=lang;w.mgDifficulty=level;w.startMG('story');const g=w.mg;
  const count=level===1?2:Math.min(8,2+Math.ceil((level-1)/2));assert.equal(g.storyFactCount,count);
  const story=el('mp').textContent;for(const q of g.storyQuestions)assert(story.toLowerCase().replaceAll('了','').includes(q[2].toLowerCase()),'Every answer is present in story');
  el('storyReady').click();for(let i=0;i<count;i++){
   const q=g.storyQuestions[i];assert.equal(g.storyIndex,i);const buttons=[...el('mp').querySelectorAll('[data-a]')];
   const b=buttons.find(b=>b.dataset.a===q[2]);assert(b);b.click();assert.equal(g.storyAnswers.length,i+1);assert(buttons.every(b=>b.disabled));el('storyNextDetail').click();
  }
  assert.equal(g.storyAnswers.length,count);assert.equal(g.reviewExpected.length,count);w.toHome();
 }
 w.save.lang='en';w.openSet();await tick();const input=el('importPlayerJSON');assert(input.closest('.file-picker'));assert.equal(input.accept,'application/json,.json');
 const name='my-very-long-backup-filename-for-a-small-phone.json';Object.defineProperty(input,'files',{value:[{name}]});input.dispatchEvent(new w.Event('change'));assert.equal(input.closest('.file-picker').querySelector('.file-picker-name').textContent,name);w.closeOv();
 w.me().gr=60;w.me().fl='rose';w.renderHero();const rose=el('livingGarden').querySelector('svg').innerHTML;w.openFlw();el('bloomType').value='tulip';el('bloomType').dispatchEvent(new w.Event('change'));assert.equal(w.me().fl,'rose');el('applyBloomType').click();assert.equal(w.me().fl,'tulip');assert.notEqual(el('livingGarden').querySelector('svg').innerHTML,rose);assert.match(el('livingGarden').textContent,/Tulip/);w.closeOv();
 w.save.snd=1;let resolveResume;w.ac=new w.AudioContext();w.ac.state='interrupted';w.ac.resume=()=>new Promise(r=>{resolveResume=()=>{w.ac.state='running';r()}});const before=tones;w.beep(600,.05);assert.equal(tones,before);resolveResume();await tick();assert.equal(tones,before+1);
 w.ac.state='suspended';w.beep(600,.05);w.save.snd=0;resolveResume();await tick();assert.equal(tones,before+1,'Mute while resuming suppresses pending tone');
 for(const id of ['game','mini']){const toolbar=el(id).querySelector('.hud .v4-game-tools');assert(toolbar.querySelector('[data-background-audio]'));assert(toolbar.querySelector('[data-v4-toggle]'));assert(toolbar.querySelector('[id^=bPause]'));}
 assert.deepEqual(errors,[]);console.log('PASS: all story details at 15 levels in both languages, file-picker filename, explicit flower apply updates bouquet, interrupted audio resume and mute, compact toolbar.');
}finally{w.toHome();await tick();w.close()}})().catch(e=>{console.error(e);process.exitCode=1});
