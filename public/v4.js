/* V4: persistent quiet play and concise, bilingual first-use help. */
(function(){
'use strict';
const root=document.documentElement,media=matchMedia('(prefers-color-scheme: dark)'),T=(en,zh)=>save.lang==='zh'?zh:en;
let online=false;
function toolbar(){return '<button type="button" class="btn v4-scenery-toggle" data-v4-toggle aria-label="'+T('Garden background','花园背景')+'" aria-pressed="false"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="16" cy="8" r="2"/><path d="m4 18 6-7 5 5 3-3 3 4"/></svg></button>'}
function bind(host){host.querySelectorAll('[data-v4-toggle]').forEach(b=>b.onclick=()=>{save.quietGames=save.quietGames===false;persist();sync()})}
function sync(){
 root.dataset.v4Mode=save.mode==='dark'||save.mode!=='light'&&media.matches?'dark':'light';
 root.dataset.gameView=save.quietGames===false?'garden':'quiet';
 root.dataset.gameActive=online||document.getElementById('home').classList.contains('hidden')?'1':'0';
 document.querySelectorAll('[data-v4-toggle]').forEach(b=>{const on=save.quietGames===false;b.setAttribute('aria-pressed',String(on));b.title=on?T('Garden background on — switch off','花园背景已开 — 点击关闭'):T('Garden background off — switch on','花园背景已关 — 点击开启')});
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=root.dataset.v4Mode==='light'?'#E6EFE3':'#123A3D';
}
function mount(){
 for(const id of ['game','mini']){const host=document.getElementById(id);let bar=host.querySelector('.v4-game-tools');if(!bar){bar=document.createElement('div');bar.className='v4-game-tools';host.querySelector('.hud').after(bar)}bar.innerHTML=toolbar();bind(bar)}sync();
}
const prefs=window.applyPrefs;window.applyPrefs=function(){const out=prefs.apply(this,arguments);sync();return out};
const show=window.show;window.show=function(){const out=show.apply(this,arguments);online=false;sync();return out};
const overlay=window.overlay;window.overlay=function(){const out=overlay.apply(this,arguments),box=document.getElementById('box');online=!!box.querySelector('.mp-board,[data-answer],#onlineBingo');box.classList.remove('mp-dialog');box.classList.toggle('v4-online-game',online);if(online){const bar=document.createElement('div');bar.className='v4-game-tools';bar.innerHTML=toolbar();const board=box.querySelector('.mp-board,.gridm,#onlineBingo');board.before(bar);bind(bar)}sync();return out};
const close=window.closeOv;window.closeOv=function(){const out=close.apply(this,arguments);online=false;sync();return out};
const settings=window.openSet;window.openSet=function(){const out=settings.apply(this,arguments);const box=document.getElementById('box');if(box.querySelector('#v4GameSetting'))return out;const group=document.createElement('fieldset');group.id='v4GameSetting';group.className='v4-game-settings';group.innerHTML='<legend>'+T('A comfortable game view','舒适的游戏视图')+'</legend><p>'+T('Quiet uses a plain background while you play. Garden keeps your scenery. Your welcome garden stays visible in either mode.','安静模式在游戏时使用纯色背景；花园模式保留风景。两种模式都保留欢迎页的花园。')+'</p><div class="v4-game-tools">'+toolbar()+'</div>';box.querySelector('#sd')?.parentElement.before(group);bind(group);sync();return out};
document.getElementById('bSet').onclick=window.openSet;
function openGuide(){
 const active=document.activeElement,trigger=active?.closest('#navMenu')?document.getElementById('navMore'):active;
 const rows=[['Ⅱ','Game controls','游戏控件','In Everyday Life and new previews, ☰ offers Resume or Leave; Pause offers Resume. Skip passes an unanswered question without credit; Next continues after feedback.','日常生活与新预览中，☰可继续或离开，暂停可继续。跳过略过未答题且不得分；下一题在反馈后继续。'],['☰','Menu','菜单','Find every control here when the screen is small or text is large.','屏幕较窄或文字较大时，可在这里找到全部控件。'],['T− / T+','Text size','文字大小','Make text smaller or larger. Choose a percentage; ↺ restores 100%.','缩小或放大文字，或选择百分比；↺恢复至100%。'],['☀ / ☾','Appearance','外观','Choose light, dark or automatic display mode from the menu.','在菜单中选择浅色、深色或自动显示模式。'],['文 / A','Language','语言','Switch between English and Chinese.','切换英文或中文。'],['♫','Music','音乐','Use 🔊 / 🔇 to mute or restore music and garden sounds together. Open Music for separate mix and volume choices. Use Ⅱ / ▶ to pause or play garden animation.','🔊 / 🔇同时关闭或恢复音乐与花园声音；音乐菜单分别调整混音与音量。Ⅱ / ▶暂停或播放花园动画。'],['‹ / ›','Scenery','背景','Open ☰ → Garden view to change scenery or open Garden pets. The navbar card icon shows or hides the three game cards.','打开☰ → 花园景色切换背景或打开宠物；导航栏卡片图标可显示或隐藏三张游戏卡片。']];
 overlay('<section id="v4Guide" aria-labelledby="v4GuideTitle"><h2 id="v4GuideTitle">'+T('Make Mind Garden yours','让心灵花园更适合您')+'</h2><p>'+T('Begin with today’s three activities, or choose any game. There is no need to rush.','可从今天的三项活动开始，或自由选择游戏。无需着急。')+'</p><dl class="v4-icon-guide">'+rows.map(r=>'<div><dt><span aria-hidden="true">'+r[0]+'</span> '+T(r[1],r[2])+'</dt><dd>'+T(r[3],r[4])+'</dd></div>').join('')+'</dl><p>'+T('During a game, use the small scenery icon to turn the garden background on or off. Pause or take a break at any time. About includes first-time setup, the full user guide, troubleshooting and privacy information.','游戏中可使用小风景图标开启或关闭花园背景。随时可以暂停或休息。“关于”包含首次设置、完整指南、问题排查与隐私信息。')+'</p><div class="row"><button type="button" class="btn main" id="v4GuideDone">'+T('Done','完成')+'</button></div></section>');
 const panel=document.getElementById('v4Guide'),done=document.getElementById('v4GuideDone');
 const finish=()=>{closeOv();if(trigger?.isConnected)trigger.focus()};done.onclick=finish;panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();finish()}if(e.key==='Tab'){e.preventDefault();done.focus()}};done.focus();
}
media.addEventListener('change',sync);window.addEventListener('gardenPlayerChange',mount);
window.MindGardenV4={sync,mount,openGuide};mount();
})();
(function(){
 document.addEventListener('click',event=>{const button=event.target.closest('.mg-help-trigger');document.querySelectorAll('.mg-help.is-open').forEach(help=>{if(help!==button?.parentElement){help.classList.remove('is-open');help.querySelector('button').setAttribute('aria-expanded','false')}});if(button){button.parentElement.classList.remove('is-dismissed');const open=button.parentElement.classList.toggle('is-open');button.parentElement.classList.toggle('is-dismissed',!open);button.setAttribute('aria-expanded',String(open))}});
 document.addEventListener('focusout',event=>{const help=event.target.closest('.mg-help');if(help&&!help.contains(event.relatedTarget))help.classList.remove('is-dismissed')});
 document.addEventListener('pointerout',event=>{const help=event.target.closest('.mg-help');if(help&&!help.contains(event.relatedTarget)&&!help.contains(document.activeElement))help.classList.remove('is-dismissed')});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.mg-help').forEach(help=>{help.classList.add('is-dismissed');help.classList.remove('is-open');help.querySelector('button').setAttribute('aria-expanded','false')})});
})();
