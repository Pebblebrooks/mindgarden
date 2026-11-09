const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};


(async()=>{try{
let pending=[],completed=0;w.pt=fn=>pending.push(fn);w.beep=()=>{};w.chime=()=>{};w.say=()=>{};w.win=()=>{};
const q=s=>w.document.querySelector(s),clickSel=s=>{assert(q(s),s);q(s).click()},drain=()=>{let n=0;while(pending.length&&n++<100)pending.shift()()};
for(const lang of ['en','zh']){w.save.lang=lang;
for(let level=0;level<6;level++){pending=[];w.start(level);drain();w.clearInterval(w.timer);const cards=[...el('grid').children];for(const a of cards)if(!a.classList.contains('ok')){const b=cards.find(b=>b!==a&&b.dataset.e===a.dataset.e&&!b.classList.contains('ok'));assert(b);a.click();b.click();drain()}assert(cards.every(c=>c.classList.contains('ok')));assert.equal(w.me().log.at(-1).level,level+1);completed++;w.toHome()}
for(let level=1;level<=3;level++){
 const api=w.MindGardenNewGames;
 for(const id of ['jigsaw','pathways','bingo','sayings','dominoes']){api.start(id,level);const g=api.current;let n=0;
 while(!g.finished&&n++<400){
 if(id==='jigsaw'){const i=g.cells.findIndex((v,i)=>v!==i),j=g.cells.indexOf(i);clickSel('[data-piece="'+j+'"]');clickSel('[data-piece="'+i+'"]')}
 if(id==='pathways')click('newHint');
 if(id==='bingo'){const b=[...w.document.querySelectorAll('[data-bingo]')].find(b=>!g.marked.has(+b.dataset.bingo)&&+b.dataset.bingo===g.order?.[g.index]);if(b)b.click();else{for(const b of w.document.querySelectorAll('[data-bingo]'))if(!g.marked.has(+b.dataset.bingo))b.click()}if(el('bingoNext'))click('bingoNext')}
 if(id==='sayings'){const item=g.questions[g.index??g.q??0];const bs=[...w.document.querySelectorAll('[data-saying]')];const answer=bs.find(b=>g.questions[g.index].a===b.textContent);(answer||bs[0]).click();click('sayingNext')}
 if(id==='dominoes'){if(g.turn==='cpu')click('dominoCPU');else{const i=g.hand.findIndex(t=>api.rules.fits(t,g.left)||api.rules.fits(t,g.right));if(i<0)click('dominoDraw');else{const side=api.rules.fits(g.hand[i],g.left)?'Left':'Right';clickSel('[data-domino="'+i+'"]');click('domino'+side)}}}
 }assert(g.finished,id+' '+level);assert.equal(w.me().log.at(-1).level,level);completed++;w.toHome();}
 const ga=w.MindGardenActivities;
 for(const id of ['dots','links','spot','drawmemory','recall']){ga.start(id,level,{mode:'numbers',seconds:30});const g=ga.current;
 if(id==='dots')while(g.next<g.points.length)clickSel('[data-dot="'+g.next+'"]');
 if(id==='links'){for(const path of g.solution)for(const cell of path)clickSel('[data-link="'+cell+'"]')}
 if(id==='spot')for(const i of g.changes)clickSel('[data-spot="'+i+'"]');
 if(id==='drawmemory'){click('gaReady');click('gaHide');click('gaChoice');clickSel('[data-shape="'+g.choices.indexOf(g.shape)+'"]')}
 if(id==='recall'){click('gaReady');click('gaHide');el('gaAnswer').value=g.answer.join('');el('gaRecallForm').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}))}
 if(!g.finished)click('gaDone');assert(g.finished,id);assert.equal(w.me().log.at(-1).level,level);completed++;w.toHome();}
 await new Promise(r=>setImmediate(r));
}
}
assert.deepEqual(errors,[]);console.log('PASS '+completed+' full sessions: six matching sizes and ten board/garden games at all three levels, English/Chinese, with level-scored completion.');
}finally{await new Promise(r=>setImmediate(r));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
