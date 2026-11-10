/* Shared memory demonstration and navigation affordances. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en;
const originalSequence=window.rSeq,originalMissing=window.rMiss;
function ready(run){const g=mg;if(!g)return;g.h=null;$('mmsg').textContent=T('Ready to remember? Nothing starts until you press Begin.','准备好记忆了吗？点击开始后才会播放。');$('mp').innerHTML='<p>'+T('Watch the highlighted pictures, then tap them in the same order. Sound cues follow your game-sound setting.','观察高亮图片，然后按相同顺序点击。提示音遵循游戏音效设置。')+'</p><div class="row"><button class="btn main" id="memoryBegin">'+T('Begin','开始')+'</button></div>';$('memoryBegin').onclick=()=>{if(mg!==g||paused)return;run()};}
window.rSeq=function(){ready(()=>{
 const g=mg,n=g.n,k=Math.min(8,3+Math.floor((g.difficulty||1)/3)),items=pick(allItems(),k),sequence=Array.from({length:n},()=>Math.floor(Math.random()*k));let position=0,index=0;g.reviewExpected=sequence.map(i=>items[i].n);g.reviewEntered=[];
 $('mp').innerHTML='<div class="gridm memory-order-grid" style="--c:2">'+items.map((x,i)=>'<button class="big" data-a="'+i+'" aria-label="'+esc(x.n)+'" disabled>'+gamePicture(x.e)+'</button>').join('')+'</div>';
 const buttons=$('mp').querySelectorAll('.big');
 function cue(j,ms){lit(buttons[j],ms);beep(440+j*90,.24);say(items[j].n)}
 function go(){if(mg!==g)return;if(index===sequence.length){buttons.forEach(b=>b.disabled=false);$('mmsg').textContent=T('Your turn — tap the pictures in the same order.','轮到您了，请按相同顺序点击图片。');g.h=b=>{const j=+b.dataset.a;g.reviewEntered.push(items[j].n);cue(j,350);if(j!==sequence[position])return res(false,T('At position '+(position+1)+', choose '+items[sequence[position]].n+'. You chose '+items[j].n+'.','第 '+(position+1)+' 项应为 '+items[sequence[position]].n+'，您选择了 '+items[j].n+'。'));position++;if(position===sequence.length)res(true,T('Correct — you remembered the order!','正确，您记住了顺序！'))};return;}
 const j=sequence[index++];$('mmsg').textContent=T('Watch: ','观察：')+index+' / '+n+' · '+items[j].n;cue(j,1000);pt(go,1350);
 }$('mmsg').textContent=T('Get ready — watch the pictures.','准备好，观察图片。');pt(go,GAME_SETTLE_MS);
})};
window.rMiss=function(){const g=mg;ready(()=>originalMissing());$('mp').querySelector('p').textContent=T('Remember the pictures. Afterwards, choose the one that disappeared.','记住图片，然后选出消失的那张。');};
// Keep icons and labels consistent without changing each game's own pause state.
for(const id of ['bHome','bMn']){const b=$(id);b.setAttribute('aria-label',T('Game menu','游戏菜单'));b.title=T('Resume or leave game','继续或退出游戏')}
for(const id of ['bPause','bPause2']){const b=$(id);b.setAttribute('aria-label',T('Pause game','暂停游戏'));b.title=T('Pause and resume','暂停与继续')}
})();

/* Recently used synchronous question content, scoped to player/game/level/language.
   Bounded retries avoid hanging when a finite learning pool is exhausted. */
(function(){const history=new Map();
window.MindGardenQuestions={generate(run){const key=[save.cp,mg.t,mg.difficulty,save.lang].join('|'),seen=history.get(key)||[];let candidate;
 for(let attempt=0;attempt<60;attempt++){mg.questionKey=null;run();candidate=mg.questionKey;if(!candidate||!seen.includes(candidate))break;}
 if(candidate){const at=seen.indexOf(candidate);if(at>=0)seen.splice(at,1);seen.push(candidate);if(seen.length>40)seen.shift();history.set(key,seen);if(history.size>500)history.delete(history.keys().next().value);}
},reset(){history.clear()}};
})();
