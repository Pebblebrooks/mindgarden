/* Predecoded real recordings, one action-matched voice, truthful shared status. */
(function(){window.createPetAudio=function(root,sources={}){
 let enabled=false,paused=false,voice=null,next=0,context=null,loading=null,status='off';
 const clips={},listeners=new Set(),volumes={purr:.8,meow:.8,bark:.55,growl:.35};
 function report(value){status=value;root.dataset.audio=value;for(const fn of listeners)fn(value)}
 function stop(who){if(!voice||(who&&voice.owner!==who))return;const v=voice;voice=null;root.dataset.voice='quiet';
 const t=context.currentTime;v.gain.gain.cancelScheduledValues(t);v.gain.gain.setValueAtTime(v.gain.gain.value,t);v.gain.gain.linearRampToValueAtTime(0,t+.025);try{v.source.stop(t+.03)}catch{}
 }
 function load(){return loading||(loading=Promise.all(Object.keys(volumes).map(async key=>{const response=await fetch(sources[key]||'pets/audio-field/'+key+'.mp3');if(!response.ok)throw Error('Recording unavailable');clips[key]=await context.decodeAudioData(await response.arrayBuffer())})).catch(e=>{loading=null;throw e}))}
 async function enable(value){enabled=value;if(!value){stop();report('off');return false}report('loading');try{
 const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)throw Error('Audio unavailable');
 if(!context){context=new AudioContext();context.addEventListener?.('statechange',()=>{if(enabled&&context.state==='suspended'){stop();report('blocked')}})}
 // Resume directly in the click handler, before any network wait. No silent media sample.
 const resume=context.resume();await Promise.all([resume,load()]);if(!enabled)return false;
 if(context.state!=='running')throw Error('Audio blocked');next=0;report('enabled');return true;
 }catch{if(enabled)report('blocked');return false}}
 function perform(who,action){if(!enabled||status!=='enabled'||paused||document.hidden||voice||Date.now()<next||!clips[action])return null;
 const source=context.createBufferSource(),gain=context.createGain(),t=context.currentTime,buffer=clips[action];source.buffer=buffer;source.connect(gain);gain.connect(context.destination);
 // Short edge fades suppress clicks without altering the recording's pitch or speed.
 gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(volumes[action],t+.008);gain.gain.setValueAtTime(volumes[action],t+Math.max(.009,buffer.duration-.025));gain.gain.linearRampToValueAtTime(0,t+buffer.duration);
 const handle={owner:who,source,gain,get time(){return Math.max(0,context.currentTime-t)},get active(){return voice===handle},stop(){stop(who)}};voice=handle;root.dataset.voice=who+':'+action;
 source.onended=()=>{source.disconnect();gain.disconnect();if(voice===handle){voice=null;root.dataset.voice='quiet'}};
 source.start(t);next=Date.now()+buffer.duration*1000+3000+Math.random()*5000;return handle;
 }
 const hide=()=>{if(document.hidden)stop()};document.addEventListener('visibilitychange',hide);
 return {enable,perform,stop,get status(){return status},subscribe(fn){listeners.add(fn);fn(status);return()=>listeners.delete(fn)},pause(value){paused=value;if(value)stop()},destroy(){stop();enabled=false;listeners.clear();context?.close();document.removeEventListener('visibilitychange',hide)}};
};window.getMindGardenPetAudio=()=>window.MindGardenPetAudio||(window.MindGardenPetAudio=window.createPetAudio(document.documentElement));})();
