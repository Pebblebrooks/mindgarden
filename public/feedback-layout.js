/* Readable, bilingual answer feedback shared by original and practice games. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en;
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function compare(expected,entered=[],options={}){
 const sequence=options.sequence!==false;
 return '<section class="answer-comparison" aria-label="'+T('Compare your answers','比较您的答案')+'"><ol class="answer-cards" role="list">'+expected.map((answer,i)=>{
  const value=entered[i],missing=value==null,match=!missing&&(options.correct===undefined?String(value)===String(answer):options.correct);
  const state=missing?'pending':match?'match':'different';
  return '<li class="answer-card answer-'+state+'"'+(i?' hidden':'')+'>'+(sequence?'<span class="answer-position">'+T('Step ','第 ')+(i+1)+(save.lang==='zh'?' 项':'')+'</span>':'')+
   '<div class="answer-value"><span class="answer-label">'+T('Correct answer','正确答案')+'</span><strong>'+escape(answer)+'</strong></div>'+
   '<div class="answer-value answer-player"><span class="answer-label">'+T('Your answer','您的答案')+'</span><strong>'+escape(missing?T('Not entered','未输入'):value)+'</strong></div>'+
   '<span class="answer-outcome"><span aria-hidden="true">'+(missing?'—':match?'✓':'↻')+'</span> '+T(missing?'Not entered':match?'Matched':'Review this one',missing?'未输入':match?'答对了':'看看这一项')+'</span></li>';
 }).join('')+'</ol>'+(expected.length>1?'<div class="answer-pager"><button class="btn" data-review-step="-1" disabled aria-label="'+T('Previous answer','上一项答案')+'">‹</button><span class="answer-page" aria-live="polite">1 / '+expected.length+'</span><button class="btn" data-review-step="1" aria-label="'+T('Next answer','下一项答案')+'">›</button></div>':'')+'</section>';
}
document.addEventListener('click',e=>{
 const button=e.target.closest('[data-review-step]');if(!button)return;
 const review=button.closest('.answer-comparison'),cards=[...review.querySelectorAll('.answer-card')];
 const current=cards.findIndex(card=>!card.hidden),next=Math.max(0,Math.min(cards.length-1,current+Number(button.dataset.reviewStep)));
 cards.forEach((card,i)=>card.hidden=i!==next);review.querySelector('.answer-page').textContent=(next+1)+' / '+cards.length;
 review.querySelector('[data-review-step="-1"]').disabled=next===0;review.querySelector('[data-review-step="1"]').disabled=next===cards.length-1;
});
// Split plain game instructions into short lines without changing their wording,
// interactive elements, tables, form values, or answer-button content.
function readable(root){
 const paragraphs=root.matches?.('p,#mmsg')?[root]:[...root.querySelectorAll('p,#mmsg')];
 for(const p of paragraphs){
  if(p.children.length||p.closest('button,pre,code,[contenteditable]'))continue;
  const text=p.textContent.trim();
  const lines=text.split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[。！？])\s*|\n+/u).filter(Boolean);
  if(lines.length<2)continue;
  const fragment=document.createDocumentFragment();
  lines.forEach((line,i)=>{if(i)fragment.append(document.createTextNode(' '));const span=document.createElement('span');span.className='game-copy-line';span.textContent=line;fragment.append(span)});
  p.replaceChildren(fragment);
 }
}
const roots=['mp','mmsg','box'].map(id=>document.getElementById(id)).filter(Boolean);
let queued=false;
const observer=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;observer.disconnect();roots.forEach(readable);observe()})});
function observe(){roots.forEach(root=>observer.observe(root,{childList:true,subtree:true,characterData:true}))}
roots.forEach(readable);observe();
window.MindGardenFeedback={compare,readable};
})();
