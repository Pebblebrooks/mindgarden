const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};

(async()=>{try{
let cues=[];w.chime=()=>{if(w.save.snd)cues.push('correct')};w.beep=()=>{if(w.save.snd)cues.push('different')};
for(const id of ['hawker','trail','album','sounds','teamgarden','melody'])for(const correct of [true,false])for(const enabled of [true,false]){
 w.save.snd=enabled?1:0;cues=[];api.start(id,1,2);let g=api.current;
 if(id==='hawker'||id==='trail'){click('cgRecall');for(const n of g.sequence)w.document.querySelector('[data-cg-item="'+(correct?n:(n+1)%6)+'"]').click()}
 if(id==='album'){click('cgDemo');click('cgRecall');const choices=[...w.document.querySelectorAll('[data-cg-answer]')];choices.find(b=>(b.dataset.cgAnswer===g.target.label)===correct).click()}
 if(id==='sounds'){[...w.document.querySelectorAll('[data-cg-answer]')].find(b=>(+b.dataset.cgAnswer===g.soundIndex)===correct).click()}
 if(id==='teamgarden'){click('cgReady');[...w.document.querySelectorAll('[data-cg-answer]')].find(b=>(+b.dataset.cgAnswer===g.teamAnswer)===correct).click()}
 if(id==='melody'){for(const n of g.sequence)w.document.querySelector('[data-cg-note="'+(correct?n:(n+1)%5)+'"]').click();await new Promise(r=>setTimeout(r,470))}
 assert(g.answered,id);assert.deepEqual(cues,enabled?[correct?'correct':'different']:[],id);
 const panel=el('mp').querySelector('.cg-game'),feedback=el('cgFeedback'),nav=el('cgNext').parentElement;assert.equal(feedback.nextElementSibling,nav);assert(!el('cgSkip'));assert(!el('cgAgainStudy'));
 if(['hawker','trail','melody'].includes(id)){const rows=feedback.querySelectorAll('tr');assert.equal(rows.length,2);assert.equal(rows[0].querySelector('th').textContent,'Correct sequence');assert.equal(rows[1].querySelector('th').textContent,'Your sequence');assert.equal(rows[0].querySelectorAll('td').length,g.sequence.length);assert.equal(feedback.querySelectorAll('.cg-mismatch').length,correct?0:1)}
 w.toHome();
}
assert.deepEqual(errors,[]);console.log('PASS all six previews: correct/incorrect cues, muted feedback, adjacent sequence comparison, mismatch markers, single navigation row.');
}finally{await new Promise(r=>setImmediate(r));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
