const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const click=id=>{assert(el(id),'Missing '+id);el(id).click()},tick=()=>new Promise(r=>setImmediate(r));
const api=w.MindGardenPersonal;w.beep=w.chime=w.win=w.say=()=>{};
const launch=(id,level)=>{w.toHome();w.me().myGames={count:15,range:'balanced',length:'short',timed:false,overrides:{}};api.setup(id,level);const b=['startExtra','newGameStart','gaStart','cgBegin','edBegin','personalPairStart'].find(id=>el(id));assert(b,id);click(b);};
(async()=>{
let launches=0;
for(const lang of ['en','zh']){w.save.lang=lang;for(const level of [1,8,15])for(const id of Object.keys(w.MG).filter(x=>x!=='pets'&&!w.MindGardenMovement.has(x))){launch(id,level);assert.equal(api.session.difficulty,level,id);assert(el('mini'),id);launches++;if(launches%25===0)console.log("Launch checks: "+launches);await tick();}}
w.save.lang='en';
for(const range of ['gentle','balanced','challenging']){const levels=Array.from({length:15},(_,i)=>api.recipe('num',i+1,{count:15,range}).difficulty);assert.equal(Math.max(...levels),range==='gentle'?5:15);if(range!=='gentle')assert.equal(new Set(levels).size,15);}
// Recall displays study order and scores reverse order, with no timed answering.
launch('recall',15);let g=w.MindGardenActivities.current;assert(g.reverse);assert.deepEqual([...g.answer],[...g.study].reverse());click('gaReady');click('gaHide');el('gaAnswer').value=g.answer.join('');el('gaRecallForm').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert.equal(g.correct,g.answer.length);click('gaDone');await tick();assert.equal(w.me().log.at(-1).progressionRevision,2);
// Paths are constructively solvable through all checkpoints for every level/seed.
const rules=w.MindGardenNewGames.rules;
for(let level=1;level<=15;level++)for(let i=0;i<8;i++){launch('pathways',level);g=w.MindGardenNewGames.current;assert(rules.pathConnected(g.answer,g.n,g.checkpoints));assert.equal(g.checkpoints.length,level>=12?3:level>=7?1:0);await tick();}
launch('pathways',15);g=w.MindGardenNewGames.current;let guard=0;while(!g.finished&&guard++<25)click('newHint');assert(g.finished,'path hints complete');
// Links preserve adjacency, nonintersection and solvability despite uneven segmentation.
for(let d=1;d<=15;d++){g=w.MindGardenActivities.linkPuzzle(1,d);const all=g.solution.flat();assert.equal(all.length,new Set(all).size);for(const path of g.solution){assert(path.length>=2);for(let i=1;i<path.length;i++)assert.equal(Math.abs(path[i]%g.n-path[i-1]%g.n)+Math.abs(Math.floor(path[i]/g.n)-Math.floor(path[i-1]/g.n)),1);}g.paths=g.solution;assert(w.MindGardenActivities.connected(g));}
// Every saying interpretation has exactly one answer and can finish normally.
launch('sayings',15);g=w.MindGardenNewGames.current;assert(g.questions.every(q=>q.meaning&&q.options.filter(x=>x===q.a).length===1));while(!g.finished){let q=g.questions[g.index];w.document.querySelector('[data-saying="'+q.options.indexOf(q.a)+'"]').click();click('sayingNext');}assert.equal(g.correct,g.questions.length);
// Both called bingo pictures are required before advancing.
launch('bingo',15);g=w.MindGardenNewGames.current;assert.equal(g.called,2);assert(el('bingoNext').disabled);w.document.querySelector('[data-bingo="0"]').click();assert(el('bingoNext').disabled);w.document.querySelector('[data-bingo="1"]').click();assert(!el('bingoNext').disabled);while(!g.finished){for(let i=0;i<g.called&&!g.finished;i++)if(!g.marked.has(i))w.document.querySelector('[data-bingo="'+i+'"]').click();if(!g.finished)click('bingoNext');}assert(g.finished);
// Reversed route and food order preserve original study order and score correct input.
for(const id of ['hawker','trail']){launch(id,15);g=w.MindGardenCommercial.current;assert.deepEqual([...g.sequence],[...g.study].reverse());click('cgRecall');for(const i of g.sequence)w.document.querySelector('[data-cg-item="'+i+'"]').click();assert.equal(g.correct,1,id);}
launch('shopping',15);click('shoppingReady');assert(el('shoppingUpdate'));click('shoppingUpdate');assert(w.mg.ans);assert(new Set([...el('mp').querySelectorAll('[data-a]')].map(x=>x.dataset.a)).size>=3);
launch('today',15);assert(w.MindGardenEveryday.current.questions.includes(7));launch('foodknow',15);assert.equal(w.MindGardenEveryday.current.questions.length,4);
// No runtime error during all bilingual launches and advanced flows.
await tick();assert.deepEqual(errors,[]);console.log('PASS '+launches+' bilingual launches, full Balanced mapping, Gentle cap, reverse scoring, 120 solvable checkpoint boards, link invariants, meaning questions, two-call bingo, reversed routes and applied everyday questions.');
})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
