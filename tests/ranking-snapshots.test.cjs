const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));
try{
const records=Array.from({length:54},(_,i)=>({d:'2026-11-14',g:'pairs',s:80,r:i}));
const newer={name:'Lilian',gp:54,log:records,stars:{pairs:3},bt:{pairs:20}},older={...newer,gp:53,log:records.slice(0,53)};
const profiles={newer,older};const before=JSON.stringify(profiles);
assert.equal(w.MindGardenProfileGroups.rankingGroups(profiles).length,1);
assert.equal(w.MindGardenProfileGroups.rankingGroups(profiles)[0].id,'newer');
assert.equal(JSON.stringify(profiles),before);
for(const change of [{name:'Other'},{log:[{d:'different',g:'pairs',s:90}]},{bt:{pairs:10}},{stars:{pairs:4}},{multiplayerHistory:[{room:'unique'}]},{log:[...older.log,older.log[0]]}])assert.equal(w.MindGardenProfileGroups.rankingGroups({newer,older:{...older,...change}}).length,2);
assert.equal(w.MindGardenProfileGroups.rankingGroups({a:{name:'Lilian',log:[]},b:{name:'Lilian',log:[]}}).length,2);
console.log('PASS: 54/53 snapshot grouping; separate names, divergent or repeated histories and unique best scores retained; no profile mutation.');
}finally{setImmediate(()=>d.window.close())}
