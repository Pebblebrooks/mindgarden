const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),http=require('http'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../public');
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.join(root,req.url.split('?')[0]==='/'?'index.html':req.url.split('?')[0]);try{res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file))}catch{res.writeHead(404);res.end()}});await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
 browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE||undefined,args:['--no-sandbox','--disable-dev-shm-usage']});const page=await browser.newPage({serviceWorkers:'block'});
 await page.route('**/api/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"code":"SIGNIN"}'}));await page.route('https://fonts.googleapis.com/**',r=>r.abort());
 await page.goto('http://127.0.0.1:'+server.address().port);await page.waitForFunction(()=>window.MindGardenPersonal&&window.MindGardenAmbient);
 const layouts=[{width:1440,height:1000},{width:1024,height:768},{width:768,height:1024},{width:390,height:844},{width:844,height:390}];
 for(const viewport of layouts)for(const scale of [1,1.5,2])for(const lang of ['en','zh'])for(const mode of ['light','dark']){
  await page.setViewportSize(viewport);await page.evaluate(({scale,lang,mode})=>{save.lang=lang;save.mode=mode;save.textScale=scale;persist();load();applyPrefs();window.mgDifficulty=15;startMG('story')},{scale,lang,mode});await page.waitForTimeout(70);
  await page.waitForSelector('#storyReady');
  const boxes=await page.evaluate(()=>{const rect=n=>{const r=n.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,b:r.bottom,right:r.right}};return {panel:rect(document.querySelector('#mini')),task:rect(document.querySelector('#mp')),footer:rect(document.querySelector('#mini .game-footer')),icons:[...document.querySelectorAll('#mini .game-controls>button:not([hidden])')].map(rect),overflow:document.querySelector('#mp').scrollWidth>document.querySelector('#mp').clientWidth+1}});
  assert(boxes.panel.x>=-1&&boxes.panel.right<=viewport.width+1,JSON.stringify({viewport,scale,lang,mode,boxes}));assert(boxes.footer.b<=viewport.height+1);assert(boxes.task.b<=boxes.footer.y+1);assert(!boxes.overflow,'No horizontal task overflow');
  for(const icon of boxes.icons)assert(icon.w>=44&&icon.h>=44&&icon.b<=viewport.height+1);
  if(viewport.width>=900){assert(boxes.panel.w<=820);assert(boxes.panel.x>=24);}
  await page.locator('#storyReady').click();await page.waitForSelector('.story-answer-grid');
  if(viewport.width<=480)assert.equal(await page.locator('.story-answer-grid').evaluate(n=>getComputedStyle(n).gridTemplateColumns.split(' ').length),1,'Narrow story answers use one column');
  assert.equal(await page.locator('.story-answer-grid.viewport-grid').count(),0,'Story answers must not receive picture-board cell sizing');
  const answers=await page.locator('.story-answer-grid .big').evaluateAll(nodes=>nodes.map(n=>({h:n.clientHeight,overflow:n.scrollHeight>n.clientHeight+2||n.scrollWidth>n.clientWidth+2})));assert(answers.every(a=>a.h>=44&&!a.overflow));
 }
 // Review actual pixels at representative desktop and mobile sizes.
 for(const [name,width,height,lang,scale] of [['desktop',1440,1000,'en',1],['mobile',390,844,'zh',1.5]]){
  await page.setViewportSize({width,height});await page.evaluate(({lang,scale})=>{toHome();save.lang=lang;save.mode='light';save.textScale=scale;persist();load();applyPrefs();window.mgDifficulty=8;startMG('story')},{lang,scale});await page.waitForSelector('#storyReady');await page.screenshot({path:'/workspace/scratch/8be900a2c6a8/game-'+name+'.jpg',quality:80});
 }
 console.log('PASS: story reading and answers in 60 viewport/text/language/theme settings; bounded desktop panel, visible footer, 44px targets and no clipped answers.');
 }finally{await browser?.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
