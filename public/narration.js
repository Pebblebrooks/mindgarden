/* Prefer enhanced voices when available; retain browser fallback and user choice. */
(function(){
'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b),language=()=>save.lang==='zh'?'zh':'en';
function voices(){return (window.speechSynthesis?.getVoices()||[]).filter(v=>{
 const lang=v.lang.toLowerCase().replaceAll('_','-');
 return language()==='zh'?/^(zh(?:-(?:cn|sg|tw|hans|hant))?|cmn(?:-.*)?)$/.test(lang):lang.startsWith('en');
})}
// Browser voices do not expose gender. Classify documented named voices only;
// unknown voices remain available under Automatic, without guessing their gender.
function gender(v){
 const name=v.name.toLowerCase();
 if(/\b(xiaoxiao|xiaoyi|xiaohan|xiaomeng|xiaomo|xiaorui|xiaoyan|xiaozhen|xiaoxuan|xiaoqiu|xiaoshuang|xiaoyou|samantha|karen|susan|zira|hazel|jenny|aria|sonia)\b/.test(name.replace(/neural/g,'')))return 'female';
 if(/\b(yunxi|yunjian|yunyang|yunfeng|yunhao|yunxia|yunye|yunze|daniel|david|mark|george|guy|ryan)\b/.test(name.replace(/neural/g,'')))return 'male';
 return '';
}
function preference(){return me().narrationGender?.[language()]||'auto'}
function matching(){const choice=preference();return voices().filter(v=>choice==='auto'||gender(v)===choice)}
function rank(v){return (/natural|neural|premium|enhanced/i.test(v.name)?100:0)+(/google|samantha|karen|daniel|tingting|meijia/i.test(v.name)?30:0)+(v.default?5:0)}
function selectedVoice(){const list=matching(),saved=me().narrationVoices?.[language()];return list.find(v=>v.voiceURI===saved)||list.sort((a,b)=>rank(b)-rank(a))[0]}
function unavailableMessage(){return T('No matching voice is available. Choose Automatic or enable a matching language voice on this device.','此设备暂无符合选择的普通话语音。请选择“自动”，或在设备上启用对应的普通话语音。')}
function refresh(){
 const select=document.getElementById('storyVoice');if(!select)return;
 const all=voices(),list=matching(),saved=me().narrationVoices?.[language()]||'',choice=preference();
 const genderSelect=document.getElementById('storyVoiceGender');genderSelect.value=choice;
 for(const option of genderSelect.options){const available=option.value==='auto'||all.some(v=>gender(v)===option.value);option.disabled=!available;option.textContent=option.value==='auto'?T('Automatic','自动'):T(option.value==='male'?'Male':'Female',option.value==='male'?'男声':'女声')+(available?'':T(' — unavailable on this device',' — 此设备暂不可用'))}
 select.replaceChildren(new Option(T('Best available voice','首选可用语音'),''));list.forEach(v=>select.add(new Option(v.name+' · '+v.lang,v.voiceURI)));select.value=list.some(v=>v.voiceURI===saved)?saved:'';
 const status=document.getElementById('storyVoiceStatus');if(status)status.textContent=list.length?T('Choose a voice, then tap Read aloud to try it.','选择普通话男声或女声，再点击朗读试听。'):unavailableMessage();
}
function mount(button){
 const details=document.createElement('details');details.className='story-voice-options';details.innerHTML='<summary>'+T('Narration voice','朗读语音')+'</summary><p>'+T('English narration','普通话朗读')+'</p><label for="storyVoiceGender">'+T('Voice type','语音类型')+'</label><select id="storyVoiceGender"><option value="auto"></option><option value="female"></option><option value="male"></option></select><label for="storyVoice">'+T('Voice','语音')+'</label><select id="storyVoice"></select><p id="storyVoiceStatus" role="status"></p>';
 button.parentElement.after(details);refresh();
 details.querySelector('#storyVoiceGender').onchange=e=>{const player=me();player.narrationGender=Object.assign({},player.narrationGender,{[language()]:e.target.value});player.narrationVoices=Object.assign({},player.narrationVoices,{[language()]:''});persist();window.speechSynthesis?.cancel();refresh()};
 details.querySelector('#storyVoice').onchange=e=>{const player=me();player.narrationVoices=Object.assign({},player.narrationVoices,{[language()]:e.target.value});persist();window.speechSynthesis?.cancel()};
}
window.speechSynthesis?.addEventListener?.('voiceschanged',refresh);
window.MindGardenNarration={selectedVoice,mount,refresh,gender,unavailableMessage};
})();
