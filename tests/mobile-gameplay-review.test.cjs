const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://review.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,$=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.fetch=async()=>({ok:false,status:503,json:async()=>({error:'Offline'})});w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const tick=()=>new Promise(r=>setImmediate(r));
(async()=>{try{await tick();let sounds=0;w.chime=w.beep=()=>sounds++;w.say=()=>{};const api=w.MindGardenPersonal;
for(const id of ['flags','stroop','scene'])for(const correct of [true,false]){
 api.setup(id,1,'all',true);await tick();const g=w.MindGardenExpansion.current;if(id==='scene'){$('expStudy').click();$('expHide').click()}
 const q=g.question,answer=String(id==='flags'?q.target[0]:id==='stroop'?q.answer:q.options.indexOf(q.answer));const choices=[...w.document.querySelectorAll('[data-exp-answer]')],b=choices.find(x=>correct?x.dataset.expAnswer===answer:x.dataset.expAnswer!==answer),before=sounds;
 b.click();assert.equal(sounds,before+1);assert(b.classList.contains('answer-selected'));assert(b.classList.contains(correct?'right':'wrong'));assert(b.querySelector('.answer-mark'));assert(choices.every(x=>x.disabled));const snapshot=JSON.stringify(g.question);await new Promise(r=>setTimeout(r,800));assert.equal(JSON.stringify(g.question),snapshot);assert($('expNext'));
 const session=api.session;w.document.querySelector('#mini [data-game-settings]').click();assert($('changeGameLevel'));w.document.querySelector('dialog button').click();assert.equal(api.session,session);assert.equal(w.MindGardenExpansion.current,g);assert(w.document.querySelector('#mini [data-game-settings]').querySelector('svg'));assert(!g.paused);assert.equal(JSON.stringify(g.question),snapshot);
 w.document.querySelector('#mini [data-game-settings]').click();$('changeGameLevel').value='2';w.document.querySelector('dialog button.main').click();assert.equal(api.session.step,2);assert.notEqual(w.MindGardenExpansion.current,g);w.toHome();
}
// Opening a dialog does not focus an information tooltip trigger.
w.overlay('<h2>Rankings</h2><button data-info="Help">i</button><button>Back</button>');assert.equal(w.document.activeElement.tagName,'H2');assert.equal(w.document.querySelector('#infoTip'),null);w.closeOv();
// Whole player cards select the player; edit/delete remain separate buttons.
w.save.pr.review=w.newP('Review player');w.openPl();await tick();const row=w.document.querySelector('[data-p="review"]').closest('.prow');row.click();assert.equal(w.save.cp,'review');
// A slight finger movement must not cancel help; the hold must not trigger the action.
const help=w.document.createElement('button');help.dataset.help='Review help';w.document.body.append(help);let actions=0;help.onclick=()=>actions++;
const pointer=(type,x)=>{const e=new w.Event(type,{bubbles:true});Object.assign(e,{pointerType:'touch',pointerId:1,clientX:x,clientY:10});help.dispatchEvent(e)};
pointer('pointerdown',10);pointer('pointermove',14);await new Promise(r=>setTimeout(r,480));assert.equal($('gameIconHelp').hidden,false);pointer('pointerup',14);help.click();assert.equal(actions,0);pointer('pointerdown',14);pointer('pointerup',14);help.click();assert.equal(actions,1);help.remove();
// Pet sound unlocks once from interaction, respects Mute, and stops with game sound.
w.save.snd=true;const root=w.document.createElement('div');w.document.body.append(root);let enabled=0,subscriber;const audio={status:'disabled',subscribe(fn){subscriber=fn;fn(this.status);return ()=>{}},async enable(on){this.status=on?'enabled':'disabled';if(on)enabled++;subscriber(this.status);return on},perform(){return null},stop(){},setSpecies(){},pause(){}};
const pet=w.createMochiWidget(root,{gameMode:true,audio});root.querySelector('.mochi-stage').click();await tick();assert.equal(enabled,1);root.querySelector('[data-mochi=sound]').click();await tick();root.querySelector('.mochi-stage').click();await tick();assert.equal(enabled,1,'An intentional mute is preserved');root.querySelector('[data-mochi=sound]').click();await tick();w.save.snd=false;w.dispatchEvent(new w.Event('gardenGameSoundChange'));assert.equal(audio.status,'disabled');pet.destroy();root.remove();
assert.deepEqual(errors,[]);console.log('PASS mobile review: answer sound/colour, manual round transitions, cancelled level retention, explicit restart, neutral dialog focus and whole-card player selection.');
}finally{w.close()}})().catch(e=>{console.error(e);process.exitCode=1});
