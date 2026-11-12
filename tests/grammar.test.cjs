const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const dir=__dirname+'/../public/',html=fs.readFileSync(dir+'index.html','utf8'),d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://grammar.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(dir+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));
try{
 const g=w.MindGardenGrammar,T=w.MindGardenLocale.pair;
 for(const [plural,singular]of [['days','day'],['games','game'],['players','player'],['seconds','second'],['activities','activity'],['rounds','round'],['turns','turn']]){for(const n of [0,1,2,11,21,101])assert.equal(g.text(n+' '+plural),n+' '+(n===1?singular:plural));}
 assert.equal(g.text('0.1 days; 1–3 days; 11 days'),'0.1 days; 1–3 days; 11 days');
 w.save.lang='en';assert.equal(T('Remember: 1 seconds','记忆时间：1 秒'),'Remember: 1 second');assert.equal(T('1 players online','1 位玩家在线'),'1 player online');
 w.save.lang='zh';assert.equal(T('Remember: 1 seconds','记忆时间：1 秒'),'记忆时间：1 秒');
 w.save.lang='en';w.me().name='1 games';w.me().last=w.dstr();w.me().streak=1;w.me().gp=1;w.me().log=[{d:w.dstr(),g:'num',r:1,s:60}];w.MindGardenDashboard.refresh();assert.equal(w.me().name,'1 games');assert(!/1\s+days/.test(w.document.getElementById('gardenProgressStrip').textContent));
 w.openMyProgress();assert(w.document.getElementById('box').textContent.includes('Game played'));
 const review=w.MindGardenFeedback.compare(['20'],['21'],{sequence:false});assert(review.includes('Answer differs'));assert(!review.includes('Review this one'));assert(!review.includes('↻'));assert(review.includes('21'));assert(review.includes('20'));
 console.log('PASS grammar: 0/1/2/11/21/101, decimals/ranges, bilingual text, unchanged player names, one-day streak, game totals and honest answer feedback');
}finally{setImmediate(()=>d.window.close())}
