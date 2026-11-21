// v6.3.2 Phase 2 tester fixes: B.33 home order, B.36 browser Back, B.42/B.43 Picture bingo language and hint, B.44 Daily routines.
const {JSDOM,VirtualConsole,chooseLanguage}=require(process.env.MG_JSDOM||'./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8');
function load(language){
 const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};
 require('./dom-lifecycle.cjs')(w);w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(`save.lang='${language}'`);w.eval(fs.readFileSync(p+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));return w;
}
const wait=w=>new Promise(r=>w.setTimeout(r,40));
(async()=>{
 for(const language of ['en','zh']){
  const w=load(language),d=w.document,$=id=>d.getElementById(id),shown=id=>!$(id).classList.contains('hidden'),back=async()=>{w.history.back();await wait(w)};
  try{
   // B.33: home cards follow the menu order Today's Games, My Games, All Games.
   assert.deepEqual([...d.querySelectorAll('.welcome-ctas .welcome-feature')].slice(0,3).map(e=>e.id||(e.classList.contains('personal-open')?'myGames':'')),['dashStart','myGames','dashBrowse']);
   assert.deepEqual([...d.querySelectorAll('#unifiedNav .nav-link')].slice(0,3).map(b=>b.dataset.go),['daily','mygames','library']);

   // B.36: Back steps within Mind Garden and never skips the unfinished-game confirmation.
   await wait(w);assert.equal(w.MindGardenBrowserBack.armed,false,'home adds no history entry');
   $('dashBrowse').click();await wait(w);assert(w.MindGardenBrowserBack.armed);
   await back();assert(!shown('gameLibrary')&&shown('home'),'Back from All Games returns home');
   $('dashBrowse').click();await wait(w);d.querySelector('#gameCards .game-tile[data-game="routine"]').click();await wait(w);assert(shown('ov'));
   await back();assert(!shown('ov')&&shown('gameLibrary'),'Back from game setup returns to All Games');
   d.querySelector('#gameCards .game-tile[data-game="routine"]').click();await wait(w);$('startExtra').click();await wait(w);assert(shown('mini'));
   await back();assert(d.querySelector('dialog[open]'),'Back in an unfinished game asks first');assert(shown('mini'));
   await back();assert(!d.querySelector('dialog[open]')&&shown('mini'),'Back again keeps playing');
   const exit=()=>[...d.querySelectorAll('dialog[open] button')].find(b=>/Exit|退出/.test(b.textContent));
   await back();exit().click();await wait(w);assert(shown('gameLibrary')&&!shown('mini'),'confirmed exit returns to the game list');
   d.querySelector('#unifiedNav [data-go="home"]').click();await wait(w);assert.equal(w.MindGardenBrowserBack.armed,false,'returning home in the app releases the Back entry');

   // B.44: the asked-for step is hidden in the question at every level.
   for(const level of [1,8,15]){w.mgDifficulty=level;w.startMG('routine');const ask=$('mmsg').textContent,answer=w.eval('String(mg.ans)');assert(!ask.includes(answer),'level '+level+' question reveals '+answer);assert(ask.includes('?'));assert([...$('mp').querySelectorAll('[data-a]')].some(b=>b.dataset.a===answer));w.toHome()}

   // B.42/B.43: Picture bingo redraws in the new language and the hint is never empty.
   w.MindGardenNewGames.start('bingo',1);const g=w.MindGardenNewGames.current,first=g.items[0];
   d.querySelector('[data-bingo="0"]').click();d.querySelector('[data-bingo="'+(g.count-1)+'"]').click();
   chooseLanguage(w);await wait(w);const zh=w.save.lang==='zh';
   assert.equal(d.querySelector('.bingo-call strong').textContent,zh?first[2]:first[1]);
   assert.equal($('bingoNext').textContent,zh?'叫下一张图片':'Call next picture');
   assert.equal($('newNotice').textContent,zh?'这张图片还没有叫到，请找上方的图片。':'That picture has not been called yet. Look for the picture above.');
   $('newHint').click();assert.doesNotMatch($('newNotice').textContent,/^(Look for |请找)\.?$/);assert($('newNotice').textContent.length>8);
   $('bingoNext').click();$('newHint').click();assert.match($('newNotice').textContent,zh?/^请找.+。$/:/^Look for .+\.$/);
   console.log('PASS: v6.3.2 tester fixes ('+language+' start): home order, browser Back, Daily routines, Picture bingo language and hint.');
  }finally{w.close()}
 }
 process.exit(0);
})().catch(e=>{console.error(e);process.exit(1)});
