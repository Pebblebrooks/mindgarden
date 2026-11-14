const {readFileSync}=require('node:fs'),{JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=readFileSync(root+'index.html','utf8'),d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{runScripts:'outside-only',pretendToBeVisual:true,url:'https://garden.test',virtualConsole:new VirtualConsole()}),w=d.window,errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));
w.localStorage.setItem('mind-garden-pet-visible','true');w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(readFileSync(root+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));
setTimeout(()=>{try{
 const el=id=>w.document.getElementById(id);
 assert(el('dashProgress')&&el('dashLeaders')&&!el('dashGuide')&&!el('dailyCaption'));
 for(const go of ['progress','leaderboard'])assert(w.document.querySelector('.nav-items [data-go='+go+']'));
 let progress=0,leaders=0;w.openMyProgress=()=>progress++;el('bLb').onclick=()=>leaders++;el('dashProgress').click();el('dashLeaders').click();assert.equal(progress,1);assert.equal(leaders,1);
 assert.deepEqual([...w.document.querySelectorAll('.welcome-ctas .welcome-feature')].map(e=>e.id||(e.classList.contains('personal-open')?'myGames':'')),['dashStart','myGames','dashBrowse','dashTogether','dashProgress','dashLeaders']);assert.equal(el('dashStart').textContent.trim(),'Today’s Games');assert(!w.document.querySelector('.welcome-extra'));
 for(const id of ['homeNatureToggle','homeAnimationToggle'])assert(el(id).closest('.nav-actions'),id+' is in navbar');
 assert(el('homeNatureToggle').textContent.length<5);assert(el('homeAnimationToggle').getAttribute('aria-label').includes('animation'));
 assert.equal(el('navMenu').querySelectorAll('.nav-group').length,5);
 assert.deepEqual([...el('navMenu').firstElementChild.querySelectorAll('[data-go]')].map(b=>b.dataset.go),['daily','mygames','library','online','progress','leaderboard']);
 assert.equal(el('navMenu').children[1].id,'gardenViewControls');assert.equal(el('gardenViewControls').tagName,'DETAILS');assert(!el('gardenViewControls').open);assert(el('navCards'));assert(el('menuCards'));assert.equal(el('navMenu').children[2].querySelector('summary').textContent,'Player');
 assert(!el('navMenu').querySelector('[data-go=home]'));assert(w.document.querySelector('.nav-brand[data-go=home]'));
 assert.equal(w.MindGardenPetsVisible,false);assert(el('gardenCat').classList.contains('mochi-collapsed'));
 let myGames=0;w.MindGardenPersonal.myGames=()=>myGames++;el('navMenu').querySelector('[data-go=mygames]').click();assert.equal(myGames,1);

 assert(el('navMenu').querySelector('[data-go=progress]'));assert(el('navMenu').querySelector('[data-go=leaderboard]'));
 assert(el('navMenu').querySelector('.nav-preferences #menuTextSize'));
 const helpButton=w.document.querySelector('.mg-help-trigger');helpButton.click();assert(w.document.querySelector('.mg-help.is-open'));helpButton.click();assert(helpButton.parentElement.classList.contains('is-dismissed'));helpButton.click();assert(helpButton.parentElement.classList.contains('is-open'));w.document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert(!w.document.querySelector('.mg-help.is-open'));
 const before=el('homeAnimationToggle').getAttribute('aria-pressed');el('homeAnimationToggle').click();setTimeout(()=>{try{assert.notEqual(el('homeAnimationToggle').getAttribute('aria-pressed'),before);w.MindGardenDashboard.refresh();setTimeout(()=>{try{for(const id of ['homeNatureToggle','homeAnimationToggle'])assert.equal(w.document.querySelectorAll('#'+id).length,1);assert.deepEqual(errors,[]);console.log('PASS: simplified welcome, grouped menu, navbar sound/motion, keyboard/tap information, rebuild without duplicates and animation toggle.')}finally{w.close()}},30)}catch(e){w.close();throw e}},30);
 }catch(e){w.close();throw e}},60);
