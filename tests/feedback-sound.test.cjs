const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const el=id=>w.document.getElementById(id),tick=()=>new Promise(r=>setTimeout(r,15));let plays=0,pauses=0,tones=0;
w.Audio=class{play(){plays++;return Promise.resolve()}pause(){pauses++}};
w.AudioContext=class{constructor(){this.state='running';this.currentTime=0;this.destination={}}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}createGain(){return{gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},disconnect(){}}}createOscillator(){tones++;return{frequency:{},connect(){},disconnect(){},start(){},stop(){}}}};
(async()=>{try{
 const api=w.MindGardenCommercial;
 w.save.snd=0;api.start('sounds',1);el('cgListen').click();await tick();assert.equal(plays,0);assert.match(el('cgAudioStatus').textContent,/Game sounds are off/);
 w.save.snd=1;el('cgListen').click();await tick();assert.equal(plays,1);const before=pauses;w.save.snd=0;w.dispatchEvent(new w.Event('gardenGameSoundChange'));assert(pauses>before);w.toHome();
 api.start('melody',1);el('cgListen').click();await tick();assert.equal(tones,0,'Muted melody must remain visual');w.toHome();
 w.save.snd=1;api.start('melody',1);el('cgListen').click();await tick();assert(tones>0);w.toHome();
 for(const lang of ['en','zh']){
  w.save.lang=lang;
  el('mp').innerHTML=w.MindGardenFeedback.compare(['Tea','<img src=x onerror=alert(1)>','Rice'],['Tea','Coffee']);
  assert.equal(el('mp').querySelectorAll('table,img').length,0);assert.equal(el('mp').querySelectorAll('.answer-card').length,3);
  assert.equal(el('mp').querySelectorAll('.answer-card:not([hidden])').length,1);
  assert(el('mp').querySelector('.answer-different:not([hidden])'));
  el('mp').querySelector('[data-review-step="1"]').click();
  assert(el('mp').querySelector('.answer-pending:not([hidden])'));
  assert(el('mp').querySelector('[data-review-step="1"]').disabled);
  el('mp').querySelector('[data-review-step="-1"]').click();
  assert(el('mp').querySelector('.answer-different:not([hidden])'));
  assert.equal(el('mp').querySelectorAll('.answer-match').length,1);assert.equal(el('mp').querySelectorAll('.answer-different').length,1);assert.equal(el('mp').querySelectorAll('.answer-pending').length,1);
  assert.match(el('mp').textContent,lang==='zh'?/未输入/:/Not entered/);
 }
 // Real round reviews retain both answers while removing the duplicated sentence.
 for(const lang of ['en','zh'])for(const game of ['odd','num','sort']){
  w.save.lang=lang;w.mgDifficulty=8;w.startMG(game);
  const wrong=[...el('mp').querySelectorAll('[data-a]')].find(b=>b.dataset.a!==w.mg.ans),entered=wrong.getAttribute('aria-label')||wrong.textContent.trim();wrong.click();await tick();
  const panel=el('roundReview'),status=panel.querySelector('.answer-outcome'),pair=panel.querySelector('.answer-pair'),encouragement=pair.querySelector('.answer-encouragement');
  assert(status&&pair&&encouragement,game);assert.equal(status.textContent,lang==='en'?'Answer differs':'答案不同');assert.equal(encouragement.textContent,lang==='en'?'Keep practicing.':'继续练习。');
  assert(status.compareDocumentPosition(pair)&w.Node.DOCUMENT_POSITION_FOLLOWING);assert.equal(pair.lastElementChild,encouragement);assert.equal(panel.querySelectorAll('.answer-encouragement').length,1);
  assert(!/The answer was|答案是|Well tried|继续练习。.*继续练习。/.test(panel.textContent));assert.equal(panel.querySelector('.answer-player strong').textContent,entered);assert(el('roundContinue'));el('roundContinue').click();assert(!el('roundReview'));w.toHome();
 }
 w.save.lang='en';w.startMG('odd');[...el('mp').querySelectorAll('[data-a]')].find(b=>b.dataset.a===w.mg.ans).click();await tick();assert.equal(el('roundReview').querySelectorAll('.answer-outcome,.answer-encouragement').length,0);assert(el('roundReview').textContent.includes('Correct!'));w.toHome();
 w.mg={t:'story',r:1,R:2,hist:[],ok:0,reviewExpected:['Tea','Rice'],reviewEntered:['Tea','Soup']};w.res(false,'1 of 2 story details recalled.');assert(el('roundReview').textContent.includes('1 of 2 story details recalled.'));w.toHome();
 w.MindGardenLocale.add('Read this first. Then choose an answer. Continue when ready.','先读说明。然后选择答案。准备好后继续。');
 w.MindGardenLocale.add('New instruction. New second sentence.','新说明。新的第二句话。');
 el('mp').innerHTML='<p>Read this first. Then choose an answer. Continue when ready.</p><button>Keep this. Button unchanged.</button><input value="Do not split. Input value."><p>先观察。再选择。准备好后继续。</p>';
 await tick();assert.equal([...el('mp').querySelectorAll('p')].reduce((n,p)=>n+p.textContent.split('\n').length,0),6);assert.equal(el('mp').querySelector('button').textContent,'Keep this. Button unchanged.');assert.equal(el('mp').querySelector('input').value,'Do not split. Input value.');
 el('mp').querySelector('p').textContent='New instruction. New second sentence.';await tick();assert.equal(el('mp').querySelector('p').textContent.split('\n').length,2);
 assert.deepEqual(errors,[]);console.log('PASS muted listening/melody, immediate playback stop, bilingual comparison cards, missing answers, HTML escaping and dynamic readable instructions.');
}finally{w.toHome();await tick();d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
