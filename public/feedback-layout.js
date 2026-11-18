/* Readable, bilingual answer feedback shared by original and practice games. */
(function(){
'use strict';
const T=(en,zh)=>window.MindGardenLocale.pair(en,zh);
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function compare(expected,entered=[],options={}){
 const sequence=options.sequence!==false;
 const wrong=expected.findIndex((answer,i)=>entered[i]!=null&&String(entered[i])!==String(answer));
 const missing=expected.findIndex((answer,i)=>entered[i]==null);
 const initial=wrong>=0?wrong:missing>=0?missing:0;
 return '<section class="answer-comparison" aria-label="'+T('Compare your answers','比较您的答案')+'"><ol class="answer-cards" role="list">'+expected.map((answer,i)=>{
  const value=entered[i],missing=value==null,match=!missing&&(options.correct===undefined?String(value)===String(answer):options.correct);
  const state=missing?'pending':match?'match':'different';
  return '<li class="answer-card answer-'+state+'"'+(i!==initial?' hidden':'')+'>'+(sequence?'<span class="answer-position">'+T('Step ','第 ')+(i+1)+(save.lang==='zh'?' 项':'')+'</span>':'')+
   (!missing&&(!match||options.showMatched!==false)?'<span class="answer-outcome">'+T(match?'Matched':'Answer differs',match?'答对了':'答案不同')+'</span>':'')+
   '<div class="answer-pair"><div class="answer-value"><span class="answer-label">'+T('Correct answer','正确答案')+'</span><strong>'+escape(answer)+'</strong></div>'+
   '<div class="answer-value answer-player"><span class="answer-label">'+T('Your answer','您的答案')+'</span><strong>'+escape(missing?T('Not entered','未输入'):value)+'</strong></div>'+
   (!missing&&!match?'<span class="answer-encouragement">'+T('Keep practicing.','继续练习。')+'</span>':'')+'</div></li>';
 }).join('')+'</ol>'+(expected.length>1?'<div class="answer-pager"><button class="btn" data-review-step="-1"'+(initial===0?' disabled':'')+' aria-label="'+T('Previous answer','上一项答案')+'">‹</button><span class="answer-page" aria-live="polite">'+T('Review ','回顾 ')+(initial+1)+' / '+expected.length+'</span><button class="btn" data-review-step="1"'+(initial===expected.length-1?' disabled':'')+' aria-label="'+T('Next answer','下一项答案')+'">›</button></div>':'')+'</section>';
}
document.addEventListener('click',e=>{
 const button=e.target.closest('[data-review-step]');if(!button)return;
 const review=button.closest('.answer-comparison'),cards=[...review.querySelectorAll('.answer-card')];
 const current=cards.findIndex(card=>!card.hidden),next=Math.max(0,Math.min(cards.length-1,current+Number(button.dataset.reviewStep)));
 cards.forEach((card,i)=>card.hidden=i!==next);review.querySelector('.answer-page').textContent=T('Review ','回顾 ')+(next+1)+' / '+cards.length;
 review.querySelector('[data-review-step="-1"]').disabled=next===0;review.querySelector('[data-review-step="1"]').disabled=next===cards.length-1;
});
// v6.2.1 text rules (VIS-02 + approved review section 1). Answer feedback lines (#mmsg,
// [data-feedback]) keep one sentence per line. Every other paragraph stays one flowing block:
// centred while it fits on one line, left-aligned as soon as it wraps.
const FEEDBACK='#mmsg,[data-feedback]',KEEP_CENTRE='.keep-centre,.mp-countdown p,.mp-big-code,.mp-winner-line,.mp-count-ring,button';
function splitFeedback(p){
 const text=p.textContent.trim();
 const lines=text.split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[。！？])\s*|\n+/u).filter(Boolean);
 if(lines.length<2)return;
 const locale=window.MindGardenLocale,english=locale.convert(text,'en');
 const chinese=locale.convert(locale.has(english)?english:tr(english),'zh');
 const format=value=>value.split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[。！？])\s*|\n+/u).filter(Boolean).join('\n');
 locale.add(format(english),format(chinese));
 p.classList.add('game-copy-lines');
 const formatted=format(save.lang==='zh'?chinese:english);
 if(p.textContent!==formatted)p.textContent=formatted;
}
function lineCount(p){
 if(!p.isConnected||!p.offsetParent)return 0;
 const range=document.createRange();range.selectNodeContents(p);
 const tops=new Set();for(const r of range.getClientRects())if(r.width>0)tops.add(Math.round(r.top));
 return tops.size;
}
function align(p){
 if(p.closest(KEEP_CENTRE))return;
 const wraps=lineCount(p)>1;
 if(p.classList.contains('text-wraps')!==wraps)p.classList.toggle('text-wraps',wraps);
}
function readable(root){
 const paragraphs=root.matches?.('p,#mmsg')?[root]:[...root.querySelectorAll('p,#mmsg')];
 for(const p of paragraphs){
  if(p.closest('pre,code,[contenteditable]'))continue;
  if(p.matches(FEEDBACK)&&!p.children.length&&!p.matches('[data-inline-copy]'))splitFeedback(p);
  else if(p.classList.contains('game-copy-lines')&&!p.matches(FEEDBACK)){p.classList.remove('game-copy-lines');p.textContent=p.textContent.replace(/\n+/g,' ')}
  align(p);
 }
}
const roots=['mp','mmsg','box','game','mini','home'].map(id=>document.getElementById(id)).filter(Boolean);
let queued=false;
const observer=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;observer.disconnect();roots.forEach(readable);observe()})});
function observe(){roots.forEach(root=>observer.observe(root,{childList:true,subtree:true,characterData:true}))}
let resizeTimer=null;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>roots.forEach(readable),120)});
roots.forEach(readable);observe();
window.MindGardenFeedback={compare,readable};
})();
