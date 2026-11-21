// v6.4.0 rendered checks (Chromium): home title clears the fixed top bar (LAY-01, QA-02 matrix),
// Number Patterns rule type (B.40), About → For family and caregivers (B.39), family album and jigsaw photo (item 6).
import {chromium} from 'playwright';
import http from 'node:http';import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json','.gif':'image/gif','.mp3':'audio/mpeg','.webmanifest':'application/manifest+json'};
const server=http.createServer((q,r)=>{let f=path.join(root,decodeURIComponent(new URL(q.url,'http://x').pathname));if(f.endsWith('/'))f+='index.html';if(!f.startsWith(root)||!fs.existsSync(f)){r.writeHead(404);return r.end()}r.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)}).listen(0);
const url='http://127.0.0.1:'+server.address().port+'/';
const browser=await chromium.launch();const errors=[];
async function open(w,h,prefs){const ctx=await browser.newContext({viewport:{width:w,height:h}}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(w+'x'+h+': '+e.message));await p.goto(url);await p.waitForFunction(()=>window.MindGardenDashboard);if(prefs){await p.evaluate(x=>{Object.assign(save,x);persist()},prefs);await p.reload();await p.waitForFunction(()=>window.MindGardenDashboard)}await p.waitForTimeout(500);return p}
try{
 // 1. Title clearance across the QA-02 matrix.
 const failures=[];let checked=0;
 for(const [w,h] of [[320,568],[390,664],[430,800],[844,390],[1024,600],[768,1024],[1366,768],[1920,1080]]){
  for(const [lang,scale,mode] of [['en',1,'light'],['zh',1,'dark'],['en',1.4,'light'],['zh',2,'light']]){
   const p=await open(w,h,{lang,textScale:scale,mode});
   const r=await p.evaluate(()=>{const nav=document.getElementById('unifiedNav').getBoundingClientRect(),h1=document.querySelector('.welcome-heading h1').getBoundingClientRect(),tag=document.querySelector('.welcome-heading p'),t=tag.getBoundingClientRect(),shown=getComputedStyle(tag).display!=='none'&&t.height>0;return{gap:Math.round(h1.top-nav.bottom),tag:!shown||t.top>=h1.bottom-1,wide:document.documentElement.scrollWidth<=innerWidth+1}});
   checked++;if(r.gap<12||!r.tag||!r.wide)failures.push({w,h,lang,scale,mode,...r});await p.context().close();
  }
 }
 assert.deepEqual(failures,[],'title overlaps the top bar');
 // 2. Number Patterns names the rule type, not the numbers.
 {const p=await open(390,664,{lang:'en'});for(const level of [1,8,13]){const r=await p.evaluate(l=>{window.mgDifficulty=l;startMG('num');const tag=document.querySelector('#mp>.pattern-rule-type'),q=document.querySelector('#mp>.pattern-question');return{tag:tag?.textContent||'',before:!!tag&&tag.nextElementSibling===q,gap:q&&tag?q.getBoundingClientRect().top-tag.getBoundingClientRect().bottom:-1}},level);assert.match(r.tag,/^Rule type: /);assert(r.before);assert(r.gap>=0);assert.doesNotMatch(r.tag,/\d/);await p.evaluate(()=>toHome())}await p.context().close()}
 // 3. About → For family and caregivers, both languages.
 for(const lang of ['en','zh']){const p=await open(390,664,{lang});await p.evaluate(()=>MindGardenDashboard.about?MindGardenDashboard.about():document.querySelector('[data-go="about"]')?.click());await p.waitForTimeout(300);
  if(!await p.$('#aboutCare'))await p.evaluate(()=>{document.getElementById('navMore')?.click();document.querySelector('#navMenu [data-go="about"]')?.click()});await p.waitForSelector('#aboutCare',{state:'attached'});
  await p.click('.about-care-link');const r=await p.evaluate(()=>({open:document.getElementById('aboutCare').open,text:document.getElementById('aboutCare').textContent,links:[...document.querySelectorAll('#aboutCare a')].map(a=>a.getAttribute('href'))}));
  assert(r.open);assert.deepEqual(r.links,['tel:+6563770700','https://dementia.org.sg','tel:18006506060','https://www.aic.sg']);assert(r.text.includes(lang==='zh'?'不是医疗测试':'It is not a medical test'));await p.context().close()}
 // 4. Family album: add, name, play; jigsaw uses an album photo.
 {const p=await open(390,664,{lang:'en'});const png=fs.readFileSync(path.join(root,'icon.svg'));
  const files=await p.evaluate(async()=>{const out=[];for(const c of ['#c84','#48c','#4a4','#a4a']){const cv=document.createElement('canvas');cv.width=320;cv.height=240;const x=cv.getContext('2d');x.fillStyle=c;x.fillRect(0,0,320,240);out.push(cv.toDataURL('image/png').split(',')[1])}return out});
  await p.evaluate(()=>startMG('album'));await p.click('#cgBegin');await p.waitForSelector('#cgPhotos',{state:'attached'});
  await p.setInputFiles('#cgPhotos',files.map((b,i)=>({name:'p'+i+'.png',mimeType:'image/png',buffer:Buffer.from(b,'base64')})));
  await p.waitForFunction(()=>document.querySelectorAll('[data-cg-name]').length===4);assert(await p.$eval('#cgAlbumStart',b=>b.disabled));
  for(const [i,name] of ['Grandma','Ah Boy','Our flat','Uncle Tan'].entries()){const input=(await p.$$('[data-cg-name]'))[i];await input.fill(name);await input.dispatchEvent('change')}
  await p.waitForTimeout(300);assert(!(await p.$eval('#cgAlbumStart',b=>b.disabled)));
  await p.reload();await p.waitForFunction(()=>window.MindGardenAlbum);const saved=await p.evaluate(()=>MindGardenAlbum.list().then(x=>x.map(a=>a.label)));assert.deepEqual(saved,['Grandma','Ah Boy','Our flat','Uncle Tan'],'album and names persist');
  await p.evaluate(()=>startMG('album'));await p.click('#cgBegin');await p.waitForFunction(()=>document.querySelectorAll('[data-cg-name]').length===4);await p.click('#cgAlbumStart');await p.waitForSelector('#cgRecall');assert.equal(await p.$$eval('.cg-grid figure img.cg-photo',x=>x.length),4);
  await p.evaluate(()=>toHome());
  await p.evaluate(()=>{MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="jigsaw"]').click()});await p.waitForSelector('#newGamePicture');await p.selectOption('#newGamePicture','album');await p.click('#newGameStart');await p.waitForSelector('.picture-piece');
  assert.match(await p.$eval('.picture-piece svg image',i=>i.getAttribute('href')),/^blob:/);
  // Remove one photo; it leaves the album.
  await p.evaluate(()=>toHome());await p.evaluate(()=>startMG('album'));await p.click('#cgBegin');await p.waitForFunction(()=>document.querySelectorAll('[data-cg-remove]').length===4);await p.click('[data-cg-remove]');await p.waitForFunction(()=>document.querySelectorAll('[data-cg-remove]').length===3);
  await p.context().close()}
 // 5. Dominoes guide (item 3): shown on the first game, steps, then remembered.
 {const p=await open(390,664,{lang:'en'});await p.evaluate(()=>MindGardenNewGames.start('dominoes',1));await p.waitForSelector('.domino-guide');
  assert.match(await p.textContent('.domino-guide'),/Step 1 of 3/);await p.click('#dominoGuideNext');assert.match(await p.textContent('.domino-guide'),/Step 2 of 3/);
  const hinted=await p.evaluate(()=>{const g=MindGardenNewGames.current;const i=g.hand.findIndex(t=>t.includes(g.left)||t.includes(g.right));return i<0||document.querySelector('[data-domino="'+i+'"]').classList.contains('hinted')});assert(hinted);
  await p.click('#dominoGuideNext');await p.click('#dominoGuideNext');assert.equal(await p.$('.domino-guide'),null);assert(await p.evaluate(()=>me().guides?.dominoes===true));
  await p.evaluate(()=>{toHome();MindGardenNewGames.start('dominoes',1)});assert.equal(await p.$('.domino-guide'),null,'guide only once');
  await p.evaluate(()=>{toHome();MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="dominoes"]').click()});await p.waitForSelector('#newGameGuide');await p.click('#newGameGuide');await p.waitForSelector('.domino-guide');
  await p.context().close()}
 // 6. Save and exit (item 4): Sudoku and jigsaw, continue restores the board.
 {const p=await open(390,664,{lang:'en'});
  await p.evaluate(()=>{MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="sudoku"]').click()});await p.waitForSelector('#gaStart');await p.click('#gaStart');await p.waitForSelector('[data-sudoku]');
  const cell=await p.evaluate(()=>{const g=MindGardenExpansion.current;return g.board.findIndex((v,i)=>!g.givens[i])});await p.click('[data-sudoku="'+cell+'"]');await p.click('[data-number="1"]');
  const before=await p.evaluate(()=>MindGardenExpansion.current.board.slice());
  await p.click('#mini:not(.hidden) [data-game-back]');await p.waitForSelector('dialog[open]');assert.match(await p.textContent('dialog[open] h2'),/Leave Sudoku\?/);
  const labels=await p.$$eval('dialog[open] button',b=>b.map(x=>x.textContent.trim()));assert.deepEqual(labels,['Save and exit','Keep playing','Exit without saving']);
  await p.click('dialog[open] button.main');await p.waitForTimeout(300);assert(await p.evaluate(()=>!!MindGardenSaves.get('sudoku')));
  await p.evaluate(()=>{toHome();MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="sudoku"]').click()});await p.waitForSelector('#savedContinue');
  await p.click('#savedContinue');await p.waitForSelector('[data-sudoku]');assert.deepEqual(await p.evaluate(()=>MindGardenExpansion.current.board.slice()),before);assert(await p.evaluate(()=>!MindGardenSaves.get('sudoku')),'save used once');
  // jigsaw
  await p.evaluate(()=>{toHome();MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="jigsaw"]').click()});await p.waitForSelector('#newGameStart');await p.click('#newGameStart');await p.waitForSelector('.picture-piece');
  await p.click('[data-piece="0"]');await p.click('[data-piece="1"]');const cells=await p.evaluate(()=>MindGardenNewGames.current.cells.slice());
  await p.click('#mini:not(.hidden) #bMn');await p.waitForSelector('dialog[open]');await p.click('dialog[open] button.main');await p.waitForTimeout(300);
  await p.evaluate(()=>{toHome();MindGardenDashboard.library();document.querySelector('#gameCards .game-tile[data-game="jigsaw"]').click()});await p.waitForSelector('#savedContinue');await p.click('#savedContinue');await p.waitForSelector('.picture-piece');
  assert.deepEqual(await p.evaluate(()=>MindGardenNewGames.current.cells.slice()),cells);
  // other games keep the plain exit dialog
  await p.evaluate(()=>{toHome();window.mgDifficulty=1;startMG('routine')});await p.click('#mini:not(.hidden) [data-game-back]').catch(()=>{});await p.waitForTimeout(300);
  const plain=await p.$$eval('dialog[open] button',b=>b.map(x=>x.textContent.trim()));assert(!plain.includes('Save and exit'));
  await p.context().close()}
 // 7. Progress comparison (item 5).
 {const p=await open(390,664,{lang:'en'});await p.evaluate(()=>{const now=Date.now(),day=86400000;me().log=[.6,.65,.7,.8].map((r,i)=>({g:'seq',r,d:new Date(now-(4-i)*day).toISOString().slice(0,10),level:3,s:60}));persist()});await p.reload();await p.waitForFunction(()=>window.MindGardenDashboard);await p.waitForTimeout(400);
  await p.click('#dashProgress');await p.waitForSelector('#analysisCompare',{state:'attached'});await p.waitForTimeout(300);
  const t=await p.evaluate(()=>{const e=document.getElementById('analysisCompare');return e.hidden?'':e.textContent});assert.equal(t,'Your last game: 80%, 15 points above your 30-day average (65%).');
  await p.context().close()}
 assert.deepEqual(errors,[],'page errors');
 console.log('PASS v6.4.0: title clears the top bar in '+checked+' viewport/language/text/theme states; rule type tag; caregiver section EN/ZH; family album saved, played and used by the jigsaw; dominoes guide; Save and exit for Sudoku and jigsaw; progress comparison.');
}finally{await browser.close();server.close()}
