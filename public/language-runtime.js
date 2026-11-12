/* Share complete bilingual phrases; replace once, longest match first. */
(function(){
const forward=new Map(Object.entries(window.MindGardenLanguageCatalog||{})),reverse=new Map();
let revision=0,compiled={};
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function add(en,zh){if(typeof en!=='string'||typeof zh!=='string'||!en||!zh||en===zh)return;if(forward.get(en)!==zh){forward.set(en,zh);revision++}if(!reverse.has(zh)){reverse.set(zh,en);revision++}}
for(const [en,zh] of forward)reverse.set(zh,en);
function convert(text,language){
 if(language==='en')text=text.replace(/第\s*(\d+)\s*关/g,'Level $1');
 const map=language==='zh'?forward:reverse;
 if(map.has(text))return map.get(text);
 const key=language;let regex=compiled[key]?.revision===revision?compiled[key].regex:null;
 if(!regex){const keys=[...map.keys()].filter(s=>language==='en'?(s.trim().length>=2||/^\s/.test(s)):s.trim().length>=3).sort((a,b)=>b.length-a.length);regex=new RegExp(keys.map(s=>(/^[A-Za-z]/.test(s)?'(?<![A-Za-z])':'')+escape(s)+(/[A-Za-z]$/.test(s)?'(?![A-Za-z])':'')).join('|'),'g');compiled[key]={revision,regex}}
 return text.replace(regex,match=>map.get(match));
}
function register(en,zh){
 add(en,zh);
 const a=en.split(/(?<=[.!?])\s+/),b=zh.split(/(?<=[。！？])\s*/).filter(Boolean);
 if(a.length===b.length&&a.length>1)a.forEach((part,i)=>add(part.trim(),b[i].trim()));
}
for(const [en,zh] of [...forward])register(en,zh);
window.MindGardenLocale={add:register,has:text=>forward.has(text),convert,pair(en,zh){en=convert(String(en),'en');zh=convert(String(zh),'zh');register(en,zh);const display=window.MindGardenGrammar?.text(en)||en;register(display,zh);return save.lang==='zh'?zh:display}};
})();
