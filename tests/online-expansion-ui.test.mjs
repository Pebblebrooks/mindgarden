import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
import {onlineActivities,makeOnlineQuestions} from '../shared/online-activities.js';
const require=createRequire(import.meta.url),{JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom');
const {DB,sqlite}=database(),clients=[],errors=[],pause=ms=>new Promise(r=>setTimeout(r,ms));
const get=f=>readFileSync(new URL('../public/'+f,import.meta.url),'utf8');
async function boot(lang,stored){
 const html=get('index.html'),d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;clients.push(d);
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;w.addEventListener('error',e=>errors.push(e.message));
 w.fetch=(url,opts)=>onRequest({env:{DB},request:new Request(new URL(url,'https://garden.test'),opts)});
 w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));if(stored)for(const [k,v]of Object.entries(stored))w.localStorage.setItem(k,v);
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(get('garden-ui-4023.js'));
 w.document.getElementById('bOnline').click();if(!stored){w.document.getElementById('mpName').value='Expansion '+lang;w.document.getElementById('mpLogin').click()}await pause(100);return w;
}
const click=(w,id)=>{const b=w.document.getElementById(id);assert(b,id);b.click()};
try{
 const host=await boot('en');let guest=await boot('zh');host.document.getElementById('mpRoundCount').value='10';click(host,'mpCreate');await pause(100);
 const code=host.document.querySelector('.mp-room-code strong').textContent;guest.document.getElementById('mpCode').value=code;click(guest,'mpJoin');await pause(1650);
 assert.equal(host.document.querySelectorAll('#mpMode option').length,17);
 for(const [i,activity]of onlineActivities.entries()){
  host.document.getElementById('mpMode').value=activity.id;click(host,i?'mpNext':'mpLaunch');await pause(1650);
  for(const w of [host,guest]){assert(!w.document.querySelector('[data-answer]'));click(w,'mpBeginGame');await pause(40)}
  const row=sqlite.prepare('SELECT seed,round FROM mg_rooms WHERE code=?').get(code),qs=makeOnlineQuestions(activity.id,row.seed,row.round);
  sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
  for(const [lang,w]of [['en',host],['zh',guest]])for(const q of qs){
   assert.equal(w.document.querySelector('.seqline').textContent,q.prompt[lang==='zh'?1:0]);
   const b=w.document.querySelector('[data-answer="'+q.options.indexOf(q.answer)+'"]');assert(b);b.click();await pause(5);assert(w.document.getElementById('mpQuizContinue'));click(w,'mpQuizContinue');await pause(5);
  }
  await pause(1650);for(const w of [host,guest]){assert.equal(w.document.querySelectorAll('.mp-table tbody tr').length,2,w.document.getElementById('multiError')?.textContent);}
 }
 click(host,'mpCloseRoom');await pause(1650);click(host,'mpExit');host.lbView();click(host,'leaderboardOnline');await pause(80);
 assert(host.document.querySelector('[data-history-room="'+code+'"]'));host.document.querySelector('[data-history-room]').click();await pause(80);
 assert.equal(host.document.querySelectorAll('.saved-round').length,8);assert.equal(host.document.querySelectorAll('.mp-table')[0].querySelectorAll('tbody tr').length,2);
 const stored=Object.fromEntries(Object.keys(guest.localStorage).map(k=>[k,guest.localStorage.getItem(k)]));guest.close();guest=await boot('zh',stored);click(guest,'mpHistory');await pause(80);guest.document.querySelector('[data-history-room]').click();await pause(80);
 assert(guest.document.querySelector('.online-history').textContent.includes('已保存的在线排名'));assert.equal(guest.document.querySelectorAll('.saved-round').length,8);
 assert.equal(sqlite.prepare('SELECT COUNT(*) n FROM mg_results').get().n,16);assert.deepEqual(errors,[]);
 console.log('PASS: 17 host options, all 8 new activities completed through English/Chinese DOM controls, saved rankings from leaderboard/lobby, and closed-room history after reload.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
