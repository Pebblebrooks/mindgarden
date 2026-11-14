/* Progressive disclosure keeps frequent actions visible without removing capabilities. */
(function(){
'use strict';const T=(a,b)=>window.MindGardenLocale.pair(a,b),$=id=>document.getElementById(id);let createRequested=false,rankingView="0";const remembered={settings:new Set(),music:new Set()};
function disclosure(label,key,area){const d=document.createElement('details');d.className='simple-menu-group';d.dataset.menuGroup=key;const summary=document.createElement('summary');summary.textContent=label;d.append(summary);d.open=remembered[area]?.has(key)||false;d.addEventListener('toggle',()=>{if(!d.isConnected)return;if(d.open)remembered[area]?.add(key);else remembered[area]?.delete(key)});return d}
function foldFieldset(field,area,index){const title=field.querySelector('legend');if(!title)return;const d=disclosure(title.textContent,'section'+index,area);field.before(d);d.append(field);field.setAttribute('aria-label',title.textContent);title.hidden=true;return d}
function settings(){const box=$('box');if(!$('sd')||box.dataset.simpleSettings)return;box.dataset.simpleSettings='1';
 const nodes=[...box.children],heading=nodes.find(n=>n.tagName==='H2'),footer=$('sd').parentElement;
 const groups={player:disclosure(T('Players & saved data','玩家与保存资料'),'player','settings'),access:disclosure(T('Reading & accessibility','阅读与无障碍'),'access','settings'),garden:disclosure(T('Appearance','外观'),'garden','settings'),play:disclosure(T('Play preferences','游戏偏好'),'play','settings'),media:disclosure(T('Personal photos & videos','个人照片与视频'),'media','settings')};
 let native='garden';for(const n of nodes){if(n===heading||n===footer||n.id==='appReleaseInfo')continue;
 if(n.classList.contains('text-size-settings')){groups.access.append(n);continue}
 if(n.classList.contains('account-settings')||n.classList.contains('data-export-settings')){groups.player.append(n);continue}
 if(n.classList.contains('list')){for(const b of [...n.children]){const k=b.dataset.k;if(k==='fs'||k==='timed')b.hidden=true;( ['fs','hc','cb','lh'].includes(k)?groups.access:groups.play).append(b)}n.remove();continue}
 if(n.tagName==='B'){native=/rest|休息/i.test(n.textContent)?'play':/photos|照片/i.test(n.textContent)?'media':'garden'}
 if(n.matches('.photo-settings,.video-settings'))groups.media.append(n);else if(n.matches('.scene-settings,.motion-options'))groups.garden.append(n);else if(n.id==='v4GameSetting')groups.play.append(n);else groups[native].append(n);
 }
 const sound=disclosure(T('Sound','声音'),'sound','settings');const soundButton=document.createElement('button');soundButton.className='btn';soundButton.textContent=T('Music & nature','音乐与自然');soundButton.onclick=()=>openMu();sound.append(soundButton);groups.sound=sound;
 if(heading)box.prepend(heading);for(const g of Object.values(groups))footer.before(g);groups.player.hidden=true;$('settingsSound')?.remove();groups.media.hidden=true;
 const garden=disclosure(T('Scenery','景色'),'scenery','garden');for(const n of [...groups.garden.querySelectorAll('.scene-settings,.motion-options')])garden.append(n);groups.garden.append(garden);garden.hidden=true;if($('appReleaseInfo'))footer.after($('appReleaseInfo'));
 const scene=box.querySelector('.scene-settings');if(scene){const actual=document.documentElement.dataset.gardenSceneMode==='dark'?'dark':'light';for(const grid of scene.querySelectorAll('.scene-grid')){const mode=grid.querySelector('[data-for-mode]')?.dataset.forMode;if(mode&&mode!==actual){grid.hidden=true;const h=grid.previousElementSibling;if(h?.tagName==='H3')h.hidden=true}}}
 box.querySelectorAll('.text-size-settings p').forEach(p=>p.hidden=true);
 if(document.activeElement?.closest('details:not([open])'))box.querySelector('.text-size-settings select')?.focus();
}
function music(){const panel=document.querySelector('#box .sound-panel');if(!panel||panel.dataset.simpleMenu)return;panel.dataset.simpleMenu='1';const fields=[...panel.querySelectorAll(':scope > fieldset')];fields.forEach((f,i)=>foldFieldset(f,'music',i));const advanced=panel.querySelector('[data-menu-group=section2]');if(advanced)advanced.querySelector('summary').textContent=T('My music files','我的音乐文件');const play=$('soundPlay');if(play)play.hidden=true;const download=$('soundDownload');if(download){const more=disclosure(T('More','更多'),'download','music'),row=download.parentElement;row.before(more);more.append(row);if(advanced)more.prepend(advanced);more.prepend(more.querySelector('summary'));for(const p of [...panel.querySelectorAll(':scope > .sound-note')])more.append(p)}const intro=panel.querySelector('.sound-intro');if(intro)intro.textContent=T('Choose music or nature sounds, then adjust the overall volume.','选择音乐或自然声，再调整总音量。');}

function groupNodes(parent,label,nodes){const d=disclosure(label,label,'extra');parent.append(d);for(const n of nodes)if(n)d.append(n);return d}
function simplifyNav(){const menu=$('navMenu');if(!menu||menu.dataset.clearMenu)return;menu.dataset.clearMenu='1';
 const garden=$('gardenViewControls');if(garden&&!$('gardenPanelOpen')){const b=document.createElement('button');b.id='gardenPanelOpen';b.textContent=T('Scenery & personal media','景色与个人媒体');b.onclick=()=>{menu.classList.add('hidden');$('navMore').setAttribute('aria-expanded','false');focusedSettings('garden')};garden.append(b)}else if(!garden){delete menu.dataset.clearMenu;return}
 const player=menu.querySelector('[data-go="profile"]')?.closest('section');if(player){const b=document.createElement('button');b.textContent=T('Account & saved data','账户与保存资料');b.onclick=()=>{menu.classList.add('hidden');$('navMore').setAttribute('aria-expanded','false');focusedSettings('player')};player.append(b);const d=disclosure(T('Player','玩家'),'player','nav');player.before(d);d.append(player);player.querySelector('h3')?.remove()}
 const pref=menu.querySelector('.nav-preferences > summary');if(pref)pref.textContent=T('Settings','设置');
 for(const key of ['nature','motion'])menu.querySelector('[data-go="'+key+'"]')?.remove();
 const help=menu.querySelector('[data-go="about"]')?.closest('section');if(help){const d=disclosure(T('Help','帮助'),'help','nav');help.before(d);d.append(help);help.querySelector('h3')?.remove()}
}
function simplifyPanels(){const box=$('box');
 const progress=box.querySelector('.personal-progress');if(progress&&!progress.dataset.clearMenu&&progress.querySelector('.level-progress')){
 progress.dataset.clearMenu='1';const panels=[document.createElement('section'),document.createElement('section'),document.createElement('section')],nav=document.createElement('div');nav.className='menu-view-tabs';nav.setAttribute('aria-label',T('Progress views','进度视图'));
 const h=progress.querySelector('h2'),footer=$('personalProgressDone').parentElement;let history=false;
 for(const n of [...progress.children]){if(n===h||n===footer)continue;if(n.classList.contains('level-progress')){panels[1].append(n);continue}if(n.matches('h3')&&n.textContent===T('Recent games','最近游戏'))history=true;panels[history?2:0].append(n)}
 [['Overview','概览'],['By game','按游戏'],['History','记录']].forEach((label,i)=>{const b=document.createElement('button');b.className='btn';b.textContent=T(...label);b.onclick=()=>{panels.forEach((el,j)=>el.hidden=i!==j);[...nav.children].forEach((el,j)=>el.setAttribute('aria-pressed',String(i===j)))};nav.append(b)});h.after(nav);for(const panel of panels)footer.before(panel);nav.firstChild.click();
 }
 if($('lbd')&&!$('lbd').dataset.clearLeaderboard){$('lbd').dataset.clearLeaderboard='1';const end=$('lbd').parentElement,head=box.querySelector('h2'),nav=document.createElement('label');nav.className='lab';nav.id='rankingView';nav.textContent=T('Rank by','排名方式');const select=document.createElement('select');select.innerHTML='<option value="0">'+T('Games played','已玩游戏')+'</option><option value="1">'+T('Best times','最佳用时')+'</option>';nav.append(select);const groups=[document.createElement('section'),document.createElement('section')];let i=-1;for(const n of [...box.children]){if(n===head||n===end)continue;if(n.tagName==='H3')i++;groups[Math.min(1,Math.max(0,i))].append(n)}head.after(nav);groups.forEach(g=>{end.before(g);const hint=g.querySelector('p.tip');if(hint&&window.MindGardenInfo){const info=document.createElement('div');info.innerHTML=window.MindGardenInfo.html(hint.textContent,T('How rankings work','排名说明'));hint.replaceWith(info)}});select.onchange=()=>{rankingView=select.value;groups.forEach((g,j)=>g.hidden=j!==+select.value)};select.value=rankingView;select.onchange();}
 if(!$('lbd'))delete box.dataset.clearLeaderboard;
 for(const fam of box.querySelectorAll('section.fam')){const h=fam.querySelector('h3');if(!h)continue;const d=document.createElement('details'),summary=document.createElement('summary');summary.innerHTML=h.innerHTML;h.remove();d.className='fam simple-menu-group';d.append(summary,...fam.childNodes);fam.replaceWith(d)}
 const account=box.querySelector('.account-panel');if(account&&!account.dataset.clearMenu){account.dataset.clearMenu='1';const exports=groupNodes(account,T('Backup & export','备份与导出'),[$('accountExport'),$('accountCSV'),$('accountLocalExport')]);$('accountDone').before(exports);const status=$('accountStatus');account.querySelector('h2').after(status);}
 const lobby=$('mpCode');if(lobby&&!lobby.dataset.clearLobby){lobby.dataset.clearLobby='1';const join=groupNodes(box,T('Join room','加入房间'),[lobby.closest('label'),$('mpJoin')]);join.id='joinRoomOptions';join.open=!!lobby.value;const create=groupNodes(box,T('Create room','创建房间'),[$('mpRoundCount')?.closest('label'),$('mpCreate')]);create.id='createRoomOptions';if(!$('mpCreate')&&$('mpLogin')){const login=$('mpLogin'),run=login.onclick;login.textContent=T('Continue','继续');login.onclick=()=>{createRequested=true;run()};create.append(login)}else if(createRequested){create.open=true;createRequested=false}const intro=box.querySelector('h2');intro.textContent=T('Play Together','一起玩');intro.after(join,create);const name=$('mpName')?.closest('label');if(name)join.before(name);const text=[...box.children].find(n=>n.tagName==='P');if(text){text.textContent=T('Join with a room code, or create a room for up to 8 players. Your name and game scores are shared with room players.','输入房间码加入，或创建最多8人的房间。你的名称与游戏成绩会与房间玩家分享。');intro.after(text)}if($('mpHistory')||$('mpLogout'))groupNodes(box,T('More','更多'),[$('mpHistory'),$('mpLogout')]);const close=$('mpClose');if(close)box.append(close);}
 if(!lobby)delete box.dataset.clearLobby;
 const delivery=$('mpDelivery');if(delivery&&!delivery.closest('details')){const d=groupNodes(delivery.parentElement,T('Invitations','邀请'),[delivery]);d.classList.add('mp-invitation-details')}
 const about=box.querySelector('.app-info-about');if(about&&!about.dataset.clearMenu){about.dataset.clearMenu='1';const news=about.querySelector('.v4-about');if(news){const d=document.createElement('details'),summary=document.createElement('summary');summary.textContent=T('What’s new','更新内容');d.append(summary);news.before(d);d.append(news)}}
 const code=box.querySelector('.mp-room-code strong');if(code&&!$('roomCopyCode')){const b=document.createElement('button');b.id='roomCopyCode';b.className='btn';b.textContent=T('Copy','复制');b.onclick=async()=>{try{await navigator.clipboard.writeText(code.textContent);b.textContent=T('Copied','已复制')}catch{b.textContent=T('Select the code to copy','请选择房间码复制')}};code.parentElement.append(b)}
}

function players(){const box=$('box');if(!$('pn')||!$('pa')||box.dataset.simplePlayers)return;box.dataset.simplePlayers='1';
 const more=disclosure(T('Add player','添加玩家'),'players','players'),done=$('pd'),footer=document.createElement('div');footer.className='row';footer.append(done);const name=$('pn').closest('label'),add=$('pa');box.append(more);more.append(name,add);
 for(const row of box.querySelectorAll('.prow')){const select=row.querySelector('[data-p]');if(!select)continue;const title=select.textContent.replace(/ ✓$/,'');select.textContent=title;
 const photo=row.querySelector('[data-av]');if(photo){photo.setAttribute('aria-label',T('Change photo for ','更换照片：')+title);photo.title=photo.getAttribute('aria-label')}
 const remove=row.querySelector('[data-x]');if(remove){remove.textContent='×';remove.classList.add('player-remove');remove.setAttribute('aria-label',T('Remove player ','删除玩家：')+title);remove.title=remove.getAttribute('aria-label')}
 }
 box.append(footer);
}
function focusedSettings(kind){
 delete $('box').dataset.settingsArea;window.openSet();applyFocusedSettings(kind);
}
function applyFocusedSettings(kind){const box=$('box'),footer=$('sd').parentElement;box.dataset.settingsArea=kind;
 const keep=kind==='garden'?['scenery','media']:['player'];
 for(const d of [...box.querySelectorAll(':scope > details')]){d.hidden=!keep.includes(d.dataset.menuGroup);if(!d.hidden)d.open=true;}
 if(kind==='garden'){const scene=box.querySelector('[data-menu-group="scenery"]');if(scene){footer.before(scene);scene.hidden=false;scene.open=true;const pets=document.createElement('button');pets.className='btn';pets.textContent=T('Garden pets','花园宠物');pets.onclick=()=>{closeOv();$('menuPetToggle')?.click()};const d=disclosure(T('Pets & motion','宠物与动画'),'pets','garden');d.append(pets);for(const n of [...scene.querySelectorAll('.motion-options')])d.append(n);footer.before(d)}const media=box.querySelector('[data-menu-group="media"]');if(media)media.hidden=false;}
 box.querySelector('h2').textContent=kind==='garden'?T('Garden','花园'):T('Player & saved data','玩家与保存资料');
 box.querySelector('#appReleaseInfo')?.remove();
}
window.MindGardenMenus={garden:()=>focusedSettings('garden'),player:()=>focusedSettings('player')};
const baseSet=window.openSet;window.openSet=function(){const area=$('sd')&&!$('ov').classList.contains('hidden')?$('box').dataset.settingsArea:null;delete $('box').dataset.simpleSettings;delete $('box').dataset.settingsArea;baseSet();settings();if(area)applyFocusedSettings(area)};$('bSet').onclick=window.openSet;
const basePlayers=window.openPl;window.openPl=function(){delete $('box').dataset.simplePlayers;basePlayers();players()};$('bPl').onclick=window.openPl;
new MutationObserver(simplifyNav).observe($('unifiedNav'),{childList:true,subtree:true});simplifyNav();
new MutationObserver(()=>{settings();music();players();simplifyPanels();simplifyNav()}).observe($('box'),{childList:true,subtree:true});
})();
