/* A layout preference, not a second copy of the games or stored data. */
(function(){'use strict';
function apply(){document.documentElement.dataset.layout=save.layout==='classic'?'classic':'modern';}
function set(layout){
 if(!['classic','modern'].includes(layout))return false;
 if(document.getElementById('home').classList.contains('hidden')||!document.getElementById('ov').classList.contains('hidden'))return false;
 save.layout=layout;persist();apply();window.MindGardenDashboard.refresh();return true;
}
document.addEventListener('click',e=>{const button=e.target.closest('[data-layout-choice]');if(button)set(button.dataset.layoutChoice)});
window.addEventListener('gardenPlayerChange',apply);apply();
window.MindGardenLayout={set,get:()=>save.layout==='classic'?'classic':'modern'};
})();
