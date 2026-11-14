const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../public');
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.join(root,req.url.split('?')[0]==='/'?'index.html':req.url.split('?')[0]);try{res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file))}catch{res.writeHead(404);res.end()}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
 browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE||undefined,args:['--no-sandbox','--disable-dev-shm-usage']});
 for(const lang of ['en','zh']){
  const context=await browser.newContext({viewport:{width:390,height:844},serviceWorkers:'block'}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  let signed=false,signupCount=0,releaseSignup,failSignup=true;
  const account={id:'review-account',username:'long-account-name-for-navbar-testing'};
  let remote={account,revision:0,document:{schemaVersion:1,profiles:{}}};
  await page.route('**/api/**',async route=>{
   const action=new URL(route.request().url()).searchParams.get('action'),body=route.request().postDataJSON()||{};let status=200,data={};
   if(action==='signup'){signupCount++;await new Promise(resolve=>releaseSignup=resolve);if(failSignup){status=409;data={code:'EXISTS',error:'Account name already exists. Please sign in or choose another name.'}}else{signed=true;data={account}}}
   else if(action==='passkey-status')data={available:false};
   else if(action==='state'){status=signed?200:401;data=signed?remote:{code:'SIGNIN',error:'Sign in'}}
   else if(action==='save'){remote={...remote,revision:remote.revision+1,document:body.document};data={revision:remote.revision}}
   else if(action==='signout')signed=false;
   await route.fulfill({status,contentType:'application/json',body:JSON.stringify(data)});
  });
  await page.addInitScript(({lang})=>localStorage.setItem('gardenMatch',JSON.stringify({lang,still:1,mode:'light'})),{lang});
  await page.goto('http://127.0.0.1:'+server.address().port);await page.waitForFunction(()=>window.MindGardenAccount);
  await page.evaluate(()=>MindGardenAccount.panel('signup'));
  await page.locator('#accountName').fill(account.username);await page.locator('#accountPassword').fill('test-only-password-not-a-real-credential');
  await page.locator('#accountSignup').click();await page.waitForFunction(()=>document.querySelector('#accountForm').dataset.busy==='1');
  assert.equal(await page.locator('#accountSignup').innerText(),lang==='en'?'Creating account…':'正在创建账户…');
  await page.evaluate(()=>document.querySelector('#accountForm').dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})));
  assert.equal(signupCount,1,'Repeated submit must not create a second request');
  assert(await page.locator('#accountStatus').isVisible());releaseSignup();
  await page.waitForFunction(()=>document.querySelector('#accountForm').dataset.busy==='0');
  assert.equal(await page.locator('#accountSignup').innerText(),lang==='en'?'Try again':'重试');assert.equal(await page.locator('#accountOutcome').count(),0);
  failSignup=false;await page.locator('#accountSignup').click();await page.waitForFunction(()=>document.querySelector('#accountForm').dataset.busy==='1');releaseSignup();
  await page.waitForSelector('#accountOutcome');assert((await page.locator('#accountOutcome').innerText()).includes(lang==='en'?'Account created':'账户已创建'));
  assert.equal(await page.locator('#navAccount').innerText(),'👤 '+account.username);assert.equal(await page.locator('#accountForm').count(),0);
  for(const [width,height,scale]of [[320,740,1],[390,844,2],[844,390,1],[768,1024,2],[1024,768,1]]){
   await page.setViewportSize({width,height});await page.evaluate(scale=>{save.fs=scale;load();MindGardenAccount.refreshUI()},scale);
   await page.waitForTimeout(80);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Page overflow ${lang} ${width}`);
   assert(await page.locator('#navAccount').isVisible());
   assert.equal(await page.locator('#navAccount').evaluate(e=>getComputedStyle(e).whiteSpace),'nowrap');
   assert(await page.locator('#box').evaluate(e=>e.scrollWidth<=e.clientWidth+1),`Dialog overflow ${lang} ${width}`);
   assert.equal(await page.locator('#navAccount').innerText(),'👤 '+account.username);
  }
  await page.setViewportSize({width:390,height:844});await page.evaluate(()=>{save.fs=1;load()});
  if(process.env.MG_SCREENSHOT_DIR){fs.mkdirSync(process.env.MG_SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.MG_SCREENSHOT_DIR,`account-success-${lang}.png`)});}
  await page.locator('#accountContinue').click();await page.locator('[data-copy-player]').first().check();await page.locator('#accountCopyPlayers').click();await page.waitForSelector('#accountSignout');
  assert((await page.locator('#accountOutcome').innerText()).includes(lang==='en'?'Players saved':'玩家已保存'));
  await page.locator('#accountSignout').click();await page.waitForSelector('[data-auth-view="signed-out"]');
  assert.equal(await page.locator('#navAccount').innerText(),lang==='en'?'Sign in':'登录');assert.equal(await page.locator('#accountOutcome').innerText(),lang==='en'?'Local player':'本地玩家');
  assert.deepEqual(errors,[]);await context.close();
 }
 console.log('PASS real-browser bilingual account loading, duplicate-submit guard, failure/retry, server-confirmed creation and player save, long account navbar, sign-out, phone/tablet orientations and 200% text.');
 }finally{await browser?.close();server.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
