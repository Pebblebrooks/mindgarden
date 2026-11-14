const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const wait=async()=>{for(let i=0;i<14;i++)await new Promise(r=>setImmediate(r))};
async function boot({lang='en',saved=null,remote=null,signed=false,deferStartup=false,deferSignup=false,signupFailure=false}={}){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,errors=[],downloads=[];
 let firstState=true,finishStartup,managerResolve,storedBlob,finishSignup,signupCount=0;
 remote=remote||{account:{id:'account-test',username:'tester'},revision:0,document:{schemaVersion:1,profiles:{}}};
 if(saved)w.localStorage.setItem('gardenMatch',saved);else w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));
 w.fetch=async(url,options)=>{const action=new URL(url,'https://garden.test').searchParams.get('action'),body=JSON.parse(options.body);let data={},status=200;
  if(action==='passkey-status')return {ok:true,status:200,json:async()=>({available:true})};
  if(action==='state'&&firstState){firstState=false;if(deferStartup)return new Promise(resolve=>{finishStartup=()=>resolve({ok:false,status:401,json:async()=>({code:'SIGNIN',error:'Sign in'})})})}
  if(action==='signup'){signupCount++;if(deferSignup)await new Promise(resolve=>finishSignup=resolve);if(signupFailure)return {ok:false,status:409,json:async()=>({code:'EXISTS',error:'Account already exists.'})};}
  if(action==='signup'||action==='signin'){signed=true;data={account:remote.account,...(body.generateRecovery?{recovery:'a'.repeat(64)}:{})}}
  else if(!signed){status=401;data={code:'SIGNIN',error:'Sign in'}}
  else if(action==='state')data=JSON.parse(JSON.stringify(remote));
  else if(action==='save'){remote.document=JSON.parse(JSON.stringify(body.document));data={revision:++remote.revision}}
  else if(action==='signout')signed=false;
  return {ok:status===200,status,json:async()=>data};
 };
 w.URL.createObjectURL=blob=>{storedBlob=blob;return 'blob:test'};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){downloads.push({name:this.download,blob:storedBlob})};
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.isSecureContext=true;w.PublicKeyCredential=function(){};w.PasswordCredential=function(data){Object.assign(this,data)};w.navigator.credentials={store:()=>new Promise(resolve=>{managerResolve=resolve})};
 w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+bundle,'utf8'));await wait();
 const el=id=>w.document.getElementById(id),click=id=>{assert(el(id),id);el(id).click()};
 return {w,el,click,remote,downloads,errors,lateStartup:()=>finishStartup?.(),finishManager:()=>managerResolve?.(),expire:()=>{signed=false},finishSignup:()=>finishSignup?.(),get signupCount(){return signupCount},allowSignup:()=>{signupFailure=false;deferSignup=false}};
}


(async()=>{for(const lang of ['en','zh']){
 const {w,el,click,errors}=await boot({lang});
 const first=w.save.cp;w.me().name='Lilian Tan';w.save.pr.other=w.newP('Mei');w.save.pr.chinese=w.newP('丽莲');w.persist();
 const unavailable=lang==='en'?'This name is unavailable':'此名称不可用';
 w.openPl();await wait();const before=JSON.stringify(w.save.pr);
 for(const name of ['Lilian Tan','  lilian   TAN  ','Ｌｉｌｉａｎ Ｔａｎ','丽莲']){
  el('pn').value=name;el('pn').dispatchEvent(new w.Event('input'));assert(el('playerNameStatus').textContent.includes(unavailable));assert.equal(el('pn').getAttribute('aria-invalid'),'true');click('pa');await wait();assert.equal(JSON.stringify(w.save.pr),before);assert.equal(w.save.cp,first);assert(el('pn'));
 }
 el('pn').value='Lilian Lim';el('pn').dispatchEvent(new w.Event('input'));assert.equal(el('pn').validationMessage,'');assert.equal(el('playerNameStatus').textContent,'');click('pa');await wait();const added=w.save.cp;assert.notEqual(added,first);assert.equal(w.me().name,'Lilian Lim');
 w.save.lang=lang;w.renderHome();await wait();w.me().log.push({g:'num',s:3,d:'2026-11-14'});w.persist();const saved=JSON.stringify(w.save.pr);
 w.MindGardenIdentity.open();el('gardenName').value='  LILIAN TAN ';click('gardenNameSave');await wait();assert(el('gardenNameStatus').textContent.includes(unavailable),JSON.stringify({lang,actual:el('gardenNameStatus').textContent,current:w.save.lang,names:Object.values(w.save.pr).map(p=>p.name)}));assert.equal(JSON.stringify(w.save.pr),saved);assert(el('gardenName'));
 await assert.rejects(w.MindGardenIdentity.rename('mei'),new RegExp(unavailable));
 el('gardenName').value='Lilian Lim';click('gardenNameSave');await wait();assert.equal(w.save.cp,added);assert.equal(w.me().log.length,1);
 w.MindGardenIdentity.open();el('gardenName').value='  Lily   Lim ';el('gardenName').dispatchEvent(new w.Event('input'));assert.equal(el('gardenName').validationMessage,'');click('gardenNameSave');await wait();assert.equal(w.me().name,'Lily Lim');assert.equal(w.me().log.length,1);
 w.MindGardenAccount.panel('signup');el('accountName').value='tester';el('accountPassword').value='test-password-123';click('accountSignup');await wait();click('accountContinue');await wait();assert(el('accountStartNew'));el('accountNewPlayerName').value='lilian tan';click('accountStartNew');await wait();assert(el('accountStatus').textContent.includes(unavailable));assert(!w.MindGardenAccount.connected);assert(el('accountStartNew'));
 assert.deepEqual(errors,[]);w.close();
}console.log('PASS bilingual name availability: case, whitespace, width variants, Chinese duplicates, add/rename/account creation, correction feedback, own-name save and record preservation.');})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
