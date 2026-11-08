/* One shared voice: only the actor currently performing a vocal action may sound. */
(function(){window.createPetAudio=function(root,sources={}){
 let enabled=false,paused=false,voice=null,owner=null,next=0,epoch=0;const player=new Audio();player.preload='auto';
 function stop(who){if(who&&owner!==who)return;epoch++;player.pause();voice=null;owner=null;root.dataset.voice='quiet'}
 function perform(who,action){if(!enabled||paused||document.hidden||voice||Date.now()<next)return null;
 const keys={purr:'purr',meow:'meow',bark:'bark',growl:'growl'},clip=keys[action];if(!clip)return null;
 const current=++epoch;owner=who;const handle={get time(){return player.currentTime||0},get active(){return voice===handle},stop(){stop(who)}};voice=handle;
 player.src=sources[clip]||'pets/audio-field/'+clip+'.mp3';player.volume=clip==='growl'?.35:clip==='bark'?.55:.8;
 root.dataset.voice=who+':'+action;next=Date.now()+5000+Math.random()*9000;
 player.onended=()=>{if(epoch===current)stop(who)};
 player.play().catch(()=>{if(epoch===current){stop(who);root.dataset.audio='blocked'}});return handle;
 }
 function enable(value){enabled=value;root.dataset.audio=value?'enabled':'off';if(!value){stop();return}
 // Unlock on the user's sound toggle; no audible sample or manual call is played.
 const current=++epoch;player.src=sources.purr||'pets/audio-field/purr.mp3';player.volume=0;
 player.play().then(()=>{if(epoch===current){player.pause();player.currentTime=0;player.volume=.8}}).catch(()=>{root.dataset.audio='blocked'});
 }
 const hide=()=>{if(document.hidden)stop()};document.addEventListener('visibilitychange',hide);
 return {enable,perform,stop,pause(value){paused=value;if(value)stop()},destroy(){stop();document.removeEventListener('visibilitychange',hide)}};
};window.getMindGardenPetAudio=()=>window.MindGardenPetAudio||(window.MindGardenPetAudio=window.createPetAudio(document.documentElement));})();
