/* Compact analytics: raw records remain untouched; comparisons stay within a level. */
(function(){
'use strict';
const T=(en,zh)=>window.MindGardenLocale.pair(en,zh),$=id=>document.getElementById(id),pct=r=>Math.round(r*100),name=g=>MG[g]?.n||T('Matching pairs','配对游戏');
function scoreRows(player,game,level){return(player.log||[]).filter(x=>x.g===game&&(level==='all'||(level==='unknown'?!x.level:String(x.level)===String(level)))&&Number.isFinite(x.r)).slice().sort((a,b)=>String(a.d).localeCompare(String(b.d)));}
function periodRows(rows,days){if(!days)return rows;const start=new Date();start.setHours(0,0,0,0);start.setDate(start.getDate()-days+1);return rows.filter(r=>new Date(r.d+'T00:00:00')>=start);}
window.MindGardenLevelScores={rows:scoreRows,periodRows};
function open(leader=false){
 window.MindGardenMenuHistory?.enter(leader?'leaderboard':'my-progress',()=>open(leader));
 const groups=window.MindGardenProfileGroups?.rankingGroups()||Object.keys(save.pr).map(id=>({id,ids:[id]}));
 const profiles=leader?groups.map(g=>({p:save.pr[g.id],self:g.ids.includes(save.cp)})):[{p:me(),self:true}];
 const games=[...new Set(profiles.flatMap(x=>(x.p.log||[]).map(r=>r.g)))].sort((a,b)=>name(a).localeCompare(name(b)));
 let tab=0,page=0;const tabs=leader?[T('Rankings','排名'),T('Compare','比较')]:[T('Trend','趋势'),T('By game','按游戏'),T('History','记录')];
 overlay('<section class="analytics-panel" data-leader="'+leader+'"><h2><span>'+T(leader?'Leaderboard':'My Progress',leader?'排行榜':'我的进度')+'</span>'+window.MindGardenInfo.html(T('Scores reflect game performance, not health. Compare the same game and difficulty. Change compares the first and last saved result in this period. Older results without difficulty stay separate. Team scores are shared. Rankings cover loaded players; online room results are separate.','成绩反映游戏表现，不代表健康状况。请比较相同游戏和难度。变化比较所选时段首末成绩。无难度的旧记录单列。团队成绩为共同成绩。排行榜仅列已载入玩家；在线房间成绩另列。'),T('About scores','成绩说明'))+'</h2><details class="analytics-filter-drawer"><summary>'+T('Filters','筛选')+'</summary><div class="analytics-filters"><label>'+T('Game','游戏')+'<select id="progressGame">'+games.map(g=>'<option value="'+esc(g)+'">'+esc(name(g))+'</option>').join('')+'</select></label><label>'+T('Difficulty','难度')+'<select id="progressLevel"></select></label><label>'+T('Period','时段')+'<select id="progressPeriod"><option value="0">'+T('All time','全部时间')+'</option><option value="30">'+T('30 days','30天')+'</option><option value="7">'+T('7 days','7天')+'</option></select></label></div></details><div class="analytics-stats" id="analysisStats"></div><div class="analytics-tabs" id="analysisTabs">'+tabs.map((t,i)=>'<button class="btn" data-analysis-tab="'+i+'">'+t+'</button>').join('')+'</div><div id="levelScoreChart" aria-live="polite"></div><div class="analytics-footer"><div id="analysisPages"></div>'+(leader?'<button class="btn" id="leaderboardOnline">'+T('Rooms','房间')+'</button>':'')+'<button class="btn" id="personalProgressDone">'+T('Done','完成')+'</button></div></section>');
 const panel=$('box').querySelector('.analytics-panel'),game=$('progressGame'),level=$('progressLevel'),period=$('progressPeriod');
 const rows=p=>periodRows(scoreRows(p,game.value,level.value),+period.value),avg=a=>a.length?a.reduce((s,r)=>s+r.r,0)/a.length:0;
 function capacity(){return 10}
 function bars(items){return '<div class="analytics-bars">'+items.map(x=>'<div><div><span>'+esc(x.label)+'</span><strong>'+pct(x.v)+'%</strong></div><div class="analytics-track"><i style="width:'+Math.max(0,Math.min(100,pct(x.v)))+'%"></i></div></div>').join('')+'</div>'}
 function draw(){
 if(!panel.isConnected)return;
 const own=rows(me()),size=capacity();panel.querySelector('.analytics-filter-drawer summary').textContent=T('Filters','筛选')+' · '+(name(game.value)||'')+' · '+(level.value==='unknown'?T('Not recorded','未记录'):T('Level ','难度 ')+level.value);let count=0,body='',stats='';
 panel.querySelectorAll('[data-analysis-tab]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.analysisTab===tab)));
 if(!games.length){$('analysisStats').innerHTML='';$('levelScoreChart').innerHTML='<p>'+T('No completed games','无已完成游戏')+'</p>';$('analysisPages').innerHTML='';return}
 const stat=(v,t)=>'<div><strong>'+v+'</strong><span>'+t+'</span></div>';
 if(leader){
 const ranked=profiles.map(({p,self})=>{const a=rows(p);return{label:p.name,self,n:a.length,v:a.length?Math.max(...a.map(r=>r.r)):null}}).filter(x=>x.n).sort((a,b)=>b.v-a.v);
 ranked.forEach(x=>x.rank=1+ranked.filter(y=>y.v>x.v).length);const mine=ranked.find(x=>x.self);
 stats=stat(mine?mine.rank+' / '+ranked.length:'—',T('Your rank','你的排名'))+stat(mine?pct(mine.v)+'%':'—',T('Best score','最高成绩'))+stat(mine?.n||0,T(mine?.n===1?'Session':'Sessions','局数'));
 count=ranked.length;page=Math.min(page,Math.max(0,Math.ceil(count/size)-1));const visible=ranked.slice(page*size,(page+1)*size);
 body=tab===1?bars(visible.map(x=>({...x,label:x.rank+' · '+x.label+(x.self?T(' · You',' · 你'):'' )}))):'<table><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Best score','最高成绩')+'</th></tr></thead><tbody>'+visible.map(x=>'<tr'+(x.self?' class="analytics-you"':'')+'><td>'+x.rank+'</td><td>'+esc(x.label)+(x.self?T(' · You',' · 你'):'')+'</td><td>'+pct(x.v)+'%</td></tr>').join('')+'</tbody></table>';
 if(!count)body='<p>'+T('No scores for these filters','此筛选条件下无成绩')+'</p>';
 }else{
 const delta=own.length>1?pct(own.at(-1).r-own[0].r):null;
 stats=stat(own.length,T(own.length===1?'Session':'Sessions','局数'))+stat(own.length?pct(avg(own))+'%':'—',T('Average score','平均成绩'))+stat(delta===null?'—':(delta>0?'+':'')+delta,T('Change · points','变化 · 百分点'));
 if(tab===0){const recent=own.slice(-10);body='<h3>'+T('Recent scores','近期成绩')+'</h3>'+(recent.length?'<svg class="analytics-line" viewBox="0 0 360 180" role="img" aria-label="'+esc(recent.map(r=>r.d+': '+pct(r.r)+'%').join('; '))+'"><text x="0" y="15">%</text>'+[0,50,100].map(v=>'<text x="0" y="'+(150-v*1.15)+'">'+v+'</text><path d="M34 '+(146-v*1.15)+'H342"/>').join('')+'<polyline points="'+recent.map((r,i)=>(45+i*285/Math.max(1,recent.length-1))+','+(146-Math.max(0,Math.min(1,r.r))*115)).join(' ')+'"/>'+recent.map((r,i)=>'<circle cx="'+(45+i*285/Math.max(1,recent.length-1))+'" cy="'+(146-Math.max(0,Math.min(1,r.r))*115)+'" r="4"/>').join('')+'<text x="40" y="173">'+T('Older','较早')+'</text><text x="338" y="173" text-anchor="end">'+T('Latest','最近')+'</text></svg><p>'+pct(recent[0].r)+'% → '+pct(recent.at(-1).r)+'%</p>':'<p>'+T('No scores for these filters','此筛选条件下无成绩')+'</p>')}
 else if(tab===1){const items=games.map(g=>{const a=periodRows(scoreRows(me(),g,level.value),+period.value);return{label:name(g),v:avg(a),n:a.length}}).filter(x=>x.n);count=items.length;page=Math.min(page,Math.max(0,Math.ceil(count/size)-1));body=bars(items.slice(page*size,(page+1)*size))||'<p>'+T('No scores for these filters','此筛选条件下无成绩')+'</p>'}
 else{count=own.length;page=Math.min(page,Math.max(0,Math.ceil(count/size)-1));body='<table><thead><tr><th>'+T('Date','日期')+'</th><th>'+T('Score','成绩')+'</th><th>'+T('Time','用时')+'</th></tr></thead><tbody>'+own.slice().reverse().slice(page*size,(page+1)*size).map(r=>'<tr><td>'+esc(r.d)+'</td><td>'+pct(r.r)+'%</td><td>'+fmt(r.s)+'</td></tr>').join('')+'</tbody></table>'}
 }
 $('analysisStats').innerHTML=stats;$('levelScoreChart').innerHTML=body;const pages=Math.max(1,Math.ceil(count/size));$('analysisPages').innerHTML=count?'<button class="btn" id="analysisPrev" aria-label="'+T('Previous page','上一页')+'" '+(!page?'disabled':'')+'>‹</button><span>'+(page+1)+' / '+pages+'</span><button class="btn" id="analysisNext" aria-label="'+T('Next page','下一页')+'" '+(page+1>=pages?'disabled':'')+'>›</button>':'';
 if($('analysisPrev'))$('analysisPrev').onclick=()=>{page--;draw()};if($('analysisNext'))$('analysisNext').onclick=()=>{page++;draw()};
 }
 function change(){const levels=[...new Set(profiles.flatMap(x=>(x.p.log||[]).filter(r=>r.g===game.value).map(r=>r.level||'unknown')))].sort((a,b)=>(Number(a)||99)-(Number(b)||99));level.innerHTML=levels.map(n=>'<option value="'+esc(n)+'">'+(n==='unknown'?T('Not recorded','未记录'):T('Level ','难度 ')+n)+'</option>').join('');page=0;draw()}
 game.onchange=change;level.onchange=period.onchange=()=>{page=0;draw()};panel.querySelectorAll('[data-analysis-tab]').forEach(b=>b.onclick=()=>{tab=+b.dataset.analysisTab;page=0;draw()});$('personalProgressDone').onclick=closeOv;if(leader)$('leaderboardOnline').onclick=()=>window.MindGardenOnlineHistory();
 const resize=()=>{if(!panel.isConnected){window.removeEventListener('resize',resize);return}draw()};window.addEventListener('resize',resize);change();
}
window.openMyProgress=()=>open(false);window.lbView=()=>open(true);
})();
