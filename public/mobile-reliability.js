/* Replace native filename chrome with separate, wrapping controls on small screens. */
(function(){
'use strict';const T=(en,zh)=>window.MindGardenLocale.pair(en,zh);
function enhance(){
 for(const input of document.querySelectorAll('#box input[type="file"]')){
  if(input.classList.contains('hidden')||input.closest('.file-picker'))continue;
  const wrapper=document.createElement('span');wrapper.className='file-picker';input.before(wrapper);wrapper.append(input);input.classList.add('file-picker-input');input.tabIndex=-1;
  const button=document.createElement('button');button.type='button';button.className='btn file-picker-button';button.textContent=input.id==='importPlayerJSON'?T('Choose backup file','选择备份文件'):T(input.multiple?'Choose files':'Choose file',input.multiple?'选择文件':'选择文件');
  const status=document.createElement('span');status.className='file-picker-name';status.setAttribute('role','status');
  const refresh=()=>{const names=Array.from(input.files||[],file=>file.name);status.textContent=names.length?names.join(' · '):T('No file selected','未选择文件')};
  button.onclick=e=>{e.preventDefault();input.click()};input.addEventListener('change',refresh);wrapper.append(button,status);refresh();
 }
}
let pending=false;new MutationObserver(()=>{if(pending)return;pending=true;queueMicrotask(()=>{pending=false;enhance()})}).observe(document.getElementById('box'),{childList:true,subtree:true});enhance();
})();
