/* Predecoded real recordings, one action-matched voice, truthful shared status. */
(function(){window.createPetAudio=function(root,sources={}){
 let enabled=false,paused=false,voice=null,next=0,context=null,loading=null,status='off',species='cat';
 const variants={play:['pets/audio-pixabay/dog-playful.mp3'],purr:['pets/audio-field/purr.mp3'],meow:['pets/audio-field/meow.mp3','pets/audio-pixabay/cat-little-meow.mp3','pets/audio-pixabay/cat-purr-meow.mp3'],bark:['pets/audio-field/bark.mp3','pets/audio-pixabay/dog-small-bark.mp3']},last={};
 const clips={},listeners=new Set(),volumes={purr:.7,meow:.6,bark:.32,play:.25};
 function report(value){status=value;root.dataset.audio=value;for(const fn of listeners)fn(value)}
 function stop(who){if(!voice||(who&&voice.owner!==who))return;const v=voice;voice=null;root.dataset.voice='quiet';
 const t=context.currentTime;v.gain.gain.cancelScheduledValues(t);v.gain.gain.setValueAtTime(v.gain.gain.value,t);v.gain.gain.linearRampToValueAtTime(0,t+.025);try{v.source.stop(t+.03)}catch{}
 }
 function load(){return loading||(loading=Promise.all(Object.keys(volumes).map(async key=>{const urls=sources[key]?[sources[key]]:variants[key];clips[key]=await Promise.all(urls.map(async url=>{const response=await fetch(url);if(!response.ok)throw Error('Recording unavailable');return await context.decodeAudioData(await response.arrayBuffer())}))})).catch(e=>{loading=null;throw e}))}
 async function enable(value){enabled=value;if(!value){stop();report('off');return false}report('loading');try{
 const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)throw Error('Audio unavailable');
 if(!context){context=new AudioContext();context.addEventListener?.('statechange',()=>{if(enabled&&context.state==='suspended'){stop();report('blocked')}})}
 // Resume directly in the click handler, before any network wait. No silent media sample.
 const resume=context.resume();await Promise.all([resume,load()]);if(!enabled)return false;
 if(context.state!=='running')throw Error('Audio blocked');next=0;report('enabled');return true;
 }catch{if(enabled)report('blocked');return false}}
 function perform(who,action){if(who!=='main'||!(species==='cat'?['meow','purr']:['bark','play']).includes(action))return null;if(!enabled||status!=='enabled'||paused||document.hidden||voice||Date.now()<next||!clips[action])return null;
 const choices=clips[action].map((buffer,index)=>({buffer,index})).filter(x=>clips[action].length===1||x.index!==last[action]);const chosen=choices[Math.floor(Math.random()*choices.length)];last[action]=chosen.index;const source=context.createBufferSource(),gain=context.createGain(),t=context.currentTime,buffer=chosen.buffer;source.buffer=buffer;source.connect(gain);gain.connect(context.destination);
 // Short edge fades suppress clicks without altering the recording's pitch or speed.
 gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(volumes[action],t+.008);gain.gain.setValueAtTime(volumes[action],t+Math.max(.009,buffer.duration-.025));gain.gain.linearRampToValueAtTime(0,t+buffer.duration);
 const handle={owner:who,source,gain,duration:buffer.duration,get time(){return Math.max(0,context.currentTime-t)},get active(){return voice===handle},stop(){stop(who)}};voice=handle;root.dataset.voice=who+':'+action;
 source.onended=()=>{source.disconnect();gain.disconnect();if(voice===handle){voice=null;root.dataset.voice='quiet'}};
 source.start(t);next=Date.now()+buffer.duration*1000+3000+Math.random()*5000;return handle;
 }
 const hide=()=>{if(document.hidden)stop()};document.addEventListener('visibilitychange',hide);
 return {enable,perform,stop,setSpecies(value){const chosen=value==='dog'?'dog':'cat';if(chosen!==species){stop();next=0;species=chosen}},get status(){return status},subscribe(fn){listeners.add(fn);fn(status);return()=>listeners.delete(fn)},pause(value){paused=value;if(value)stop()},destroy(){stop();enabled=false;listeners.clear();context?.close();document.removeEventListener('visibilitychange',hide)}};
};window.getMindGardenPetAudio=()=>window.MindGardenPetAudio||(window.MindGardenPetAudio=window.createPetAudio(document.documentElement));})();
