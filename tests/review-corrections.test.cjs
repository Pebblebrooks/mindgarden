const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const el=id=>w.document.getElementById(id),tick=()=>new Promise(r=>setTimeout(r,15));let plays=0,pauses=0,tones=0;
w.Audio=class{play(){plays++;return Promise.resolve()}pause(){pauses++}};
w.AudioContext=class{constructor(){this.state='running';this.currentTime=0;this.destination={}}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}createGain(){return{gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},disconnect(){}}}createOscillator(){tones++;return{frequency:{},connect(){},disconnect(){},start(){},stop(){}}}};
(async()=>{try{
 w.save.snd=0;w.pt=()=>{};
 // Reproduce a correct first step followed by a wrong second step.
 for(const id of ['hawker','trail','melody']){
  w.MindGardenCommercial.start(id,3);if(id!=='melody')el('cgRecall').click();const g=w.MindGardenCommercial.current;
  const attr=id==='melody'?'data-cg-note':'data-cg-item',buttons=[...el('mp').querySelectorAll('['+attr+']')];
  buttons.find(b=>+b.getAttribute(attr)===g.sequence[0]).click();const wrong=buttons.find(b=>+b.getAttribute(attr)!==g.sequence[1]);const entered=wrong.textContent.trim();wrong.click();
  const card=el('mp').querySelector('.answer-card:not([hidden])');assert(card.classList.contains('answer-different'),id);assert(entered.endsWith(card.querySelector('.answer-player strong').textContent));assert.equal(el('mp').querySelector('.answer-page').textContent,'2 / '+g.sequence.length);assert.notEqual(card.querySelectorAll('strong')[0].textContent,card.querySelectorAll('strong')[1].textContent);w.toHome();
 }
 // Every single-answer original game exposes the selected wrong choice unchanged.
 let checked=0;for(const id of w.eval('Object.keys(MG)')){
  if(w.MindGardenNewGames.has(id)||w.MindGardenActivities.has(id)||id==='story')continue;
  w.mgDifficulty=3;w.startMG(id);for(const ready of ['shoppingReady','memoryReady','memoryBegin'])el(ready)?.click();
  const g=w.mg;if(g?.h&&g.ans!=null){const wrong=[...el('mp').querySelectorAll('[data-a]')].find(b=>b.dataset.a!==String(g.ans));if(wrong){const value=wrong.getAttribute('aria-label')||wrong.textContent.trim();wrong.click();const review=el('roundReview');if(review?.querySelector('.answer-player strong')){assert.equal(review.querySelector('.answer-player strong').textContent,value,id);checked++}}}w.toHome();
 }
 assert(checked>=15,'Single-answer coverage: '+checked);
 w.openFlw();const detail=el('box').querySelector('.bloom-preview');detail.open=true;el('box').querySelector('[data-fl="rose"]').click();assert.equal(el('box').querySelector('.bloom-preview'),detail);assert(detail.open);el('bloomType').value='mixed';el('bloomType').dispatchEvent(new w.Event('change'));el('applyBloomType').click();assert(detail.isConnected&&detail.open);assert.equal(w.me().fl,'mixed');w.closeOv();
 const fake=[{name:'Basic',lang:'en-US',voiceURI:'basic'},{name:'Enhanced Natural',lang:'en-GB',voiceURI:'natural'},{name:'Chinese Natural',lang:'zh-CN',voiceURI:'zh'}];Object.defineProperty(w,'speechSynthesis',{configurable:true,value:{getVoices:()=>fake,cancel(){}}});w.save.lang='en';assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'natural');w.me().narrationVoices={en:'basic'};assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'basic');w.save.lang='zh';assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'zh');
 fake.push({name:'Microsoft Xiaoxiao Online (Natural)',lang:'zh-CN',voiceURI:'female-cn'},{name:'Microsoft Yunxi Online (Natural)',lang:'zh-CN',voiceURI:'male-cn'},{name:'Cantonese',lang:'zh-HK',voiceURI:'cantonese'});
 w.me().narrationGender={zh:'female'};assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'female-cn');w.me().narrationGender.zh='male';assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'male-cn');
 w.startMG('story');assert(el('storyVoiceGender'));assert.equal(el('storyVoiceGender').value,'male');assert(![...el('storyVoice').options].some(o=>o.value==='female-cn'||o.value==='cantonese'));
 el('storyVoiceGender').value='female';el('storyVoiceGender').dispatchEvent(new w.Event('change'));assert.equal(w.me().narrationGender.zh,'female');assert.equal(w.MindGardenNarration.selectedVoice().voiceURI,'female-cn');
 fake.splice(fake.findIndex(v=>v.voiceURI==='female-cn'),1);w.MindGardenNarration.refresh();assert.equal(w.MindGardenNarration.selectedVoice(),undefined);assert(el('storyVoiceGender').querySelector('[value="female"]').disabled);assert.match(el('storyVoiceStatus').textContent,/暂无/);w.toHome();
 assert.deepEqual(errors,[]);console.log('PASS wrong-second-step retention in Hawker/Trail/Melody, '+checked+' single-answer games, flower preview stays open, voice preference and language.');
}finally{w.toHome();await tick();w.close()}})().catch(e=>{console.error(e);process.exitCode=1});