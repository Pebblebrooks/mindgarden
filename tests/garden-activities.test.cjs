const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8');const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{runScripts:'outside-only',pretendToBeVisual:true,url:'https://garden.test',virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.confirm=()=>true;
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+'garden-ui-4023.js','utf8'));
const el=id=>w.document.getElementById(id);let spoken=[];w.SpeechSynthesisUtterance=function(t){this.text=t};w.speechSynthesis={cancel(){},resume(){},getVoices(){return [{lang:'en-GB'}]},speak(u){spoken.push(u);u.onstart?.()}};

const api=w.MindGardenActivities;
try{
for(let level=1;level<=3;level++)for(let n=0;n<50;n++){const g=api.linkPuzzle(level);for(let i=0;i<g.solution.length;i++)for(const cell of g.solution[i])assert(api.addLink(g,cell));assert(api.connected(g));assert.equal(new Set(g.paths.flat()).size,g.n*g.n)}
const tri=api.shapes[0].p.map(p=>Array.from(p));assert(api.drawingScore([tri],tri)>.99);assert.equal(api.drawingScore([],tri),0);assert(api.drawingScore([[[0,0],[100,100]]],tri)<.8);
for(const lang of ['en','zh']){w.eval(`save.lang='${lang}'`);for(const key of ['dots','links','spot','drawmemory','recall','pets']){w.chooseMiniLevel(key);assert(el('gaStart'));el('gaStart').click();assert.equal(api.current.type,key);w.toHome()}}
w.eval("save.lang='en'");
api.start('dots',3);while(api.current.next<api.current.points.length){w.document.querySelector('[data-dot="'+api.current.next+'"]').click()}assert(el('gaDone'));el('gaDone').click();assert(!el('gaNext'));el('gaAgain').click();assert.equal(api.current.level,3);w.toHome();
api.start('spot',2);for(const i of Array.from(api.current.changes))w.document.querySelector('[data-spot="'+i+'"]').click();assert(el('gaDone'));el('gaDone').click();assert(el('gaNext'));el('gaNext').click();assert.equal(api.current.level,3);w.toHome();
for(const mode of ['numbers','words','mixed']){api.start('recall',2,{mode,seconds:30});assert.equal(api.current.phase,'ready');el('gaReady').click();assert.equal(api.current.phase,'view');el('gaHide').click();assert.equal(api.current.phase,'answer');const answer=Array.from(api.current.answer);el('gaAnswer').value=answer.join(mode==='numbers'?'':'  ').toUpperCase();el('gaRecallForm').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert.equal(api.current.correct,answer.length);el('gaDone').click();assert(el('gaNext'));w.toHome()}
api.start('drawmemory',1);el('gaReady').click();el('gaHide').click();el('gaChoice').click();const index=api.current.choices.indexOf(api.current.shape);w.document.querySelector('[data-shape="'+index+'"]').click();assert.equal(api.current.score,1);el('gaDone').click();assert(el('gaNext'));w.toHome();
api.start('pets');let pet=el('gaPet');pet.querySelector('select').value='dog';pet.querySelector('select').dispatchEvent(new w.Event('change'));assert(pet.querySelector('h2').textContent.includes('Toby'));assert(!pet.querySelector('[data-mochi=feed]'));pet.querySelector('.mochi-stage').click();assert.equal(pet.dataset.mood,'pet');w.toHome();
const before=w.eval('JSON.stringify(me())');w.openFlw();assert(el('bloomType'));el('bloomType').value='rose';el('bloomType').dispatchEvent(new w.Event('change'));assert.equal(w.eval('JSON.stringify(me())'),before);assert.equal(el('bloomComparison').querySelectorAll('svg').length,2);
w.closeOv();const toggle=w.document.querySelector('[data-v4-toggle]');const on=toggle.getAttribute('aria-pressed');toggle.click();assert.notEqual(toggle.getAttribute('aria-pressed'),on);
console.log('PASS: 150 solvable link grids; drawing similarity; bilingual activity launch; dot/difference completion; recall modes; recognition; pet care; read-only bloom previews; scenery toggle');
}finally{setImmediate(()=>w.close())}
