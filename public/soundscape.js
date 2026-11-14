/* Separate original chamber/harp scores using locally bundled acoustic samples. */
(function(){
'use strict';
const T=(en,zh)=>window.MindGardenLocale.pair(en,zh);
const prefs=Object.assign({music:'strings',nature:'garden',master:45,musicVolume:55,natureVolume:35,horn:false},save.soundscape||{});
const clamp=n=>Math.max(0,Math.min(100,Number(n)||0));
for(const key of ['master','musicVolume','natureVolume'])prefs[key]=clamp(prefs[key]);
if(!['none','strings','harp','piano','serenade','personal'].includes(prefs.music))prefs.music='strings';
if(!['none','ocean','garden','wind','rain','stream','night'].includes(prefs.nature))prefs.nature='garden';
let ctx,master,musicBus,natureBus,limiter,engine,timer,playing=false,loading=false,generation=0,exporting=false,tracks=[],trackIndex=0,mediaSource;
const player=new Audio();player.preload='metadata';
function persistPrefs(){save.soundscape=prefs;save.mus=0;persist()}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const sampleNotes={piano:{C3:48,G3:55,C4:60,E4:64,G4:67,C5:72},violin:{A3:57,C4:60,E4:64,A4:69,C5:72,E5:76},cello:{C2:36,G2:43,C3:48,E3:52},clarinet:{D3:50,As3:58,D4:62,F4:65},harp:{E3:52,B3:59,F4:65,A4:69,C5:72,E5:76},flute:{C4:60,A4:69,C5:72,E5:76}};
const sampleBank={},sampleLoads={};
const sampleCredit='Instrument samples: Nicholaus P. Brosowsky, tonejs-instruments (CC BY 3.0), https://github.com/nbrosowsky/tonejs-instruments ; https://creativecommons.org/licenses/by/3.0/ . Sources include Versilian Studios VSCO 2 and flcellogrl cello. Samples converted to mono 32kHz/64kbps and capped at 9s. Original arrangement by Mind Garden.';
async function ensureSamples(context,mode){
 const instruments=mode==='strings'?['piano','violin','cello','clarinet']:mode==='harp'?['harp','flute','clarinet']:mode==='piano'?['piano','cello']:mode==='serenade'?['violin','cello','flute','clarinet']:[];
 await Promise.all(instruments.map(name=>sampleLoads[name]||(sampleLoads[name]=Promise.all(Object.entries(sampleNotes[name]).map(async([note,midi])=>{const path='audio/'+name+'/'+note+'.mp3',url=window.MindGardenAssets?.[path]||path,response=await fetch(url);if(!response.ok)throw Error('Instrument unavailable');return {midi,buffer:await context.decodeAudioData(await response.arrayBuffer())}})).then(samples=>{sampleBank[name]=samples}).catch(error=>{delete sampleLoads[name];throw error}))));
}
function composer(context,musicOut,natureOut,options,seed){
 const random=rng(seed),sources=new Set(),nodes=new Set();let phrase=0,nextMusic=context.currentTime+.12,nextWave=context.currentTime+.2,nextBird=context.currentTime+3+random()*5,nextHorn=context.currentTime+30+random()*18,nextWind=context.currentTime+.3;
 const rate=context.sampleRate,noise=context.createBuffer(1,rate*5,rate),data=noise.getChannelData(0);let brown=0;
 for(let i=0;i<data.length;i++){brown=(brown+.025*(random()*2-1))/1.025;data[i]=brown*4.2}
 const rainNoise=context.createBuffer(1,rate*5,rate);const drops=rainNoise.getChannelData(0);for(let i=0;i<drops.length;i++)drops[i]=(random()*2-1)*.35;let nextDetail=context.currentTime+.8;
 function connect(source,envelope,out,pan){
  const p=context.createStereoPanner();p.pan.value=pan;source.connect(envelope);envelope.connect(p);p.connect(out);sources.add(source);nodes.add(envelope);nodes.add(p);
  source.onended=()=>{source.disconnect();envelope.disconnect();p.disconnect();sources.delete(source);nodes.delete(envelope);nodes.delete(p)};return p;
 }
 // Small concert-room reflections, rather than an unchanging synthetic pad.
 const room=context.createConvolver(),wet=context.createGain(),impulse=context.createBuffer(2,rate*2,rate);
 for(let c=0;c<2;c++){const d=impulse.getChannelData(c);for(let i=0;i<d.length;i++)d[i]=(random()*2-1)*Math.exp(-i/(rate*.34))*.3}
 room.buffer=impulse;wet.gain.value=options.music==='strings'?.22:.16;room.connect(wet);wet.connect(musicOut);nodes.add(room);nodes.add(wet);
 function instrument(name,midi,start,duration,level,pan){
  const available=sampleBank[name];if(!available?.length)return;
  const sample=available.reduce((best,current)=>Math.abs(current.midi-midi)<Math.abs(best.midi-midi)?current:best),speed=Math.pow(2,(midi-sample.midi)/12);
  const plucked=name==='piano'||name==='harp',usable=sample.buffer.duration/speed-.04;
  const length=Math.min(duration,usable),attack=plucked?.012:Math.min(.32,length*.15),release=plucked?Math.min(.65,length*.3):Math.min(.5,length*.25);
  const source=context.createBufferSource(),gain=context.createGain(),filter=context.createBiquadFilter();source.buffer=sample.buffer;source.playbackRate.value=speed;filter.type='lowpass';filter.frequency.value=name==='violin'?4600:6500;filter.Q.value=.4;
  const velocity=level*(.91+random()*.16);gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(velocity,start+attack);gain.gain.setValueAtTime(velocity,start+length-release);gain.gain.linearRampToValueAtTime(0,start+length);
  source.connect(filter);const panNode=connect(filter,gain,musicOut,pan);sources.delete(filter);sources.add(source);nodes.add(filter);gain.connect(room);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();panNode.disconnect();sources.delete(source);nodes.delete(filter);nodes.delete(gain);nodes.delete(panNode)};
  source.start(start);source.stop(start+length+.02);
  // Re-bow short cello samples with an overlap instead of looping their waveform.
  if(!plucked&&duration>usable+.2)instrument(name,midi,start+length-.18,duration-length+.18,level*.93,pan);
 }
 // Chamber Garden: D major, slow 4/4, a piano theme and independently phrased strings.
 const chamberChords=[[50,54,57,61],[47,54,57,62],[43,50,54,59],[45,52,57,61],[50,57,61,66],[42,49,54,57],[43,50,57,59],[45,52,55,61]];
 const chamberMelody=[[69,66,64,66],[66,69,73,71],[71,69,67,66],[64,66,69,73],[74,73,69,66],[68,66,64,61],[62,66,67,69],[73,71,69,66]];
 function chamber(start){
  const bar=phrase%8,chord=chamberChords[bar],melody=chamberMelody[bar],beat=60/58,length=beat*8;
  // Piano left-hand broken chords leave the final beat free to breathe.
  for(let i=0;i<7;i++){instrument('piano',chord[i%4],start+i*beat+.025,3.7,.19,-.22);if(i%2===0)instrument('piano',chord[(i+2)%4]+12,start+i*beat+.08,3.5,.12,-.12)}
  melody.forEach((note,i)=>instrument('piano',note,start+i*beat*2+.12,beat*2.7,.25,0));
  // Violin sings a long answering phrase; cello moves independently below it.
  const rise=bar<4?1:.82;
  instrument('violin',melody[0],start+.36,beat*3.1,.10*rise,-.38);
  instrument('violin',melody[2],start+beat*3.1,beat*2.7,.09*rise,-.34);
  instrument('violin',melody[3],start+beat*5.6,beat*2.7,.085*rise,-.3);
  instrument('violin',chord[2]+12,start+beat,beat*5.8,.045,.2);
  instrument('cello',chord[0]-12,start+.06,beat*4.25,.19,.35);
  instrument('cello',chord[1]-12,start+beat*4,beat*4.2,.155,.32);
  if(bar%2===1){instrument('clarinet',chord[3],start+beat*2.8,beat*2.6,.07,.17);instrument('clarinet',chord[2],start+beat*5.1,beat*2.6,.06,.13)}
  return length;
 }
 // Harp & Woodwinds: F major, 3/4, a separate six-bar melody and harp texture.
 const harpChords=[[53,57,60,64],[50,57,60,65],[46,53,57,62],[48,55,58,64],[43,50,58,62],[48,55,60,64]];
 const fluteMelody=[[77,76,72],[74,69,72],[74,77,81],[79,76,72],[74,70,69],[72,76,77]];
 function harpScore(start){
  const bar=phrase%6,chord=harpChords[bar],beat=60/72,length=beat*6;
  [0,2,1,3,2,1,0,1,3,2].forEach((step,i)=>instrument('harp',chord[step]+(i%4===3?12:0),start+i*beat*.5,3,.22,-.32));
  fluteMelody[bar].forEach((note,i)=>instrument('flute',note,start+.25+i*beat*1.8,beat*1.65,.14,.28));
  instrument('clarinet',chord[1],start+beat*1.2,beat*2.5,.09,.08);
  instrument('clarinet',chord[3],start+beat*3.6,beat*2.2,.08,.05);
  return length;
 }
 const pianoChords=[[51,55,58,62],[48,55,58,63],[44,51,55,60],[46,53,56,62]];
 const pianoMelody=[[67,65,63],[67,70,72],[72,70,67],[65,62,63]];
 function pianoScore(start){const bar=phrase%4,chord=pianoChords[bar],beat=60/52,length=beat*8;
  [0,1,2,1].forEach((v,i)=>instrument('piano',chord[v],start+i*beat*2,4.6,.19,-.2));
  pianoMelody[bar].forEach((n,i)=>{instrument('piano',n,start+.3+i*beat*2.5,4,.26,.15);instrument('piano',n-12,start+.34+i*beat*2.5,3.8,.08,-.05)});
  instrument('cello',chord[0]-12,start+.15,beat*7.6,.13,.32);return length;
 }
 const duskChords=[[43,50,54,59],[40,47,55,59],[48,55,60,64],[50,57,60,66],[43,50,59,62],[45,52,55,60]];
 const duskMelody=[[74,71,69],[71,67,66],[72,76,74],[74,72,69],[71,74,79],[76,72,71]];
 function serenadeScore(start){const bar=phrase%6,chord=duskChords[bar],beat=60/66,length=beat*6;
  instrument('cello',chord[0]-12,start,beat*6.2,.15,.3);instrument('violin',chord[2]+12,start+.2,beat*6,.065,-.3);
  duskMelody[bar].forEach((n,i)=>instrument('violin',n,start+i*beat*2+.18,beat*2.1,.105,-.15));
  instrument('clarinet',chord[1]+12,start+beat,beat*3.1,.08,.12);
  if(bar%2)instrument('flute',duskMelody[bar][2],start+beat*3.7,beat*2,.08,.38);return length;
 }
 function score(start){const length=({strings:chamber,harp:harpScore,piano:pianoScore,serenade:serenadeScore}[options.music]||chamber)(start);phrase++;return length;}
 function wash(start,duration,volume,frequency,pan,white=false){
  const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();source.buffer=white?rainNoise:noise;source.loop=true;source.playbackRate.value=.7+random()*.55;
  filter.type='lowpass';filter.frequency.setValueAtTime(frequency*.35,start);filter.frequency.linearRampToValueAtTime(frequency,start+duration*.46);filter.frequency.linearRampToValueAtTime(frequency*.4,start+duration);filter.Q.value=.5;
  gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+duration*.4);gain.gain.linearRampToValueAtTime(volume*.5,start+duration*.64);gain.gain.linearRampToValueAtTime(0,start+duration);
  source.connect(filter);const p=connect(filter,gain,natureOut,pan);sources.delete(filter);sources.add(source);nodes.add(filter);
  source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();p.disconnect();sources.delete(source);nodes.delete(filter);nodes.delete(gain);nodes.delete(p)};source.start(start,random()*3);source.stop(start+duration+.02);
 }
 function call(start,gull){
  const pan=random()*1.4-.7,root=gull?650+random()*230:1350+random()*650;
  for(let j=0;j<(gull?2:3);j++){
   const o=context.createOscillator(),g=context.createGain(),t=start+j*(gull?.38:.19),d=gull?.62:.19;o.type='sine';o.frequency.setValueAtTime(root,t);o.frequency.exponentialRampToValueAtTime(root*(gull?1.65:1.3),t+d*.22);o.frequency.exponentialRampToValueAtTime(root*.8,t+d);
   g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gull?.07:.045,t+.04);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,pan);o.start(t);o.stop(t+d+.03);
  }
 }
 function horn(start){for(const [freq,vol]of [[65.4,.07],[98,.025],[130.8,.012]]){const o=context.createOscillator(),g=context.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(vol,start+1.4);g.gain.setTargetAtTime(.0001,start+2.4,.9);connect(o,g,natureOut,-.55);o.start(start);o.stop(start+6)}}
 function detail(start,kind){
  const count=kind==='night'?4:kind==='rain'?2:1;
  for(let i=0;i<count;i++){const o=context.createOscillator(),g=context.createGain(),t=start+i*.075,d=kind==='night'?.045:kind==='rain'?.07:.25,f=kind==='night'?2900+random()*500:kind==='rain'?1600+random()*1600:280+random()*420;
   o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*(kind==='stream'?.45:1.12),t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(kind==='night'?.016:kind==='rain'?.014:.035,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,random()*1.4-.7);o.start(t);o.stop(t+d+.02);
  }
 }
 let nextAnimal=context.currentTime+18+random()*22,nextOwl=context.currentTime+35+random()*35;
 function animalCall(start,kind){const voices={owl:[340,.45,2,.028],frog:[160,.18,3,.022],cat:[580,.65,1,.018],dog:[210,.14,2,.014],hen:[680,.09,3,.016],rooster:[650,.4,4,.012]},[f,d,count,vol]=voices[kind];const pan=random()*1.4-.7;
  for(let i=0;i<count;i++){const t=start+i*(d+.15),o=context.createOscillator(),g=context.createGain();o.type=kind==='dog'||kind==='frog'?'triangle':'sine';o.frequency.setValueAtTime(f*(.95+random()*.1),t);o.frequency.exponentialRampToValueAtTime(f*(kind==='cat'?1.4:kind==='rooster'?1.3:1.08),t+d*.35);o.frequency.exponentialRampToValueAtTime(f*.7,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.035);g.gain.exponentialRampToValueAtTime(.0001,t+d);connect(o,g,natureOut,pan);o.start(t);o.stop(t+d+.02)}
 }
 function schedule(until){
  if(options.music!=='none'&&options.music!=='personal')while(nextMusic<until){nextMusic+=score(nextMusic)}
  if(options.nature==='none')return;
  if(options.nature==='home-day'||options.nature==='home-night'){
   const night=options.nature==='home-night';
   while(nextWind<until){wash(nextWind,18,.16,650,random()-.5);wash(nextWind+3,12,.06,2600,random()-.5,true);nextWind+=12+random()*8}
   while(nextBird<until){night?detail(nextBird,'night'):call(nextBird,false);nextBird+=night?4+random()*8:10+random()*18}
   while(nextAnimal<until){const hour=new Date().getHours(),k=night?'frog':(hour>=5&&hour<9&&random()<.2?'rooster':['hen','cat','dog'][Math.floor(random()*3)]);animalCall(nextAnimal,k);nextAnimal+=40+random()*65}
   if(night)while(nextOwl<until){animalCall(nextOwl,'owl');nextOwl+=70+random()*65}return;
  }
  while(nextWind<until){const duration=10+random()*11;wash(nextWind,duration,options.nature==='wind'?.48:.13,350+random()*500,random()-.5);nextWind+=duration*(.65+random()*.3)}
  if(['rain','stream','night'].includes(options.nature)){
   while(nextWave<until){const d=options.nature==='rain'?11+random()*7:5+random()*6;wash(nextWave,d,options.nature==='rain'?.34:options.nature==='stream'?.32:.06,options.nature==='rain'?4800:options.nature==='stream'?1800:400,random()*.6-.3,options.nature==='rain');nextWave+=d*.7}
   while(nextDetail<until){detail(nextDetail,options.nature);nextDetail+=options.nature==='night'?2+random()*6:options.nature==='rain'?.4+random()*1.6:.3+random()*1.4}
  }
  if(options.nature==='ocean'){
   while(nextWave<until){const duration=6+random()*6;wash(nextWave,duration,.65+random()*.35,1000+random()*1800,random()*.8-.4);nextWave+=duration*(.62+random()*.45)}
   if(options.horn)while(nextHorn<until){horn(nextHorn);nextHorn+=38+random()*42}
  }
  if(['ocean','garden'].includes(options.nature))while(nextBird<until){call(nextBird,options.nature==='ocean');nextBird+=options.nature==='ocean'?12+random()*18:6+random()*13}
 }
 return {schedule,stop(){for(const s of sources){try{s.stop()}catch{}try{s.disconnect()}catch{}}sources.clear();for(const n of nodes)n.disconnect();nodes.clear()},stats:()=>({sources:sources.size,phrases:phrase})};
}
function init(){
 if(ctx)return;ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();musicBus=ctx.createGain();natureBus=ctx.createGain();limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-14;limiter.ratio.value=5;limiter.attack.value=.01;limiter.release.value=.3;musicBus.connect(master);natureBus.connect(master);master.connect(limiter);limiter.connect(ctx.destination);mediaSource=ctx.createMediaElementSource(player);mediaSource.connect(musicBus);levels();
}
function levels(){if(!ctx)return;master.gain.setTargetAtTime(prefs.master/100,ctx.currentTime,.12);musicBus.gain.setTargetAtTime(prefs.musicVolume/100,ctx.currentTime,.12);natureBus.gain.setTargetAtTime(prefs.natureVolume/100,ctx.currentTime,.12)}
function message(text){const e=document.getElementById('soundMessage');if(e)e.textContent=text}
function audibleMix(){return prefs.master>0&&((prefs.music!=='none'&&prefs.musicVolume>0&&(prefs.music!=='personal'||tracks.length>0))||(prefs.nature!=='none'&&prefs.natureVolume>0))}
function sync(){const audible=playing&&audibleMix();window.dispatchEvent(new Event('gardenSoundChange'));const fab=document.getElementById('mFab');if(fab){fab.textContent='♫ '+T('Sound: ','声音：')+(audible?T('On','开'):T('Off','关'));fab.setAttribute('aria-pressed',String(audible));fab.setAttribute('aria-label',audible?T('Mute selected music and nature sounds','关闭所选音乐与自然音效'):T('Play selected music and nature sounds','播放所选音乐与自然音效'));fab.title=T('Toggle your selected mix. Choose sounds in Menu → Music.','切换所选音效。请在菜单的音乐中选择。')}const b=document.getElementById('soundPlay');if(b){b.textContent=playing?'Ⅱ':'▶';const label=playing?T('Pause sound','暂停声音'):T('Play sound','播放声音');b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(playing))}window.MindGardenBackground?.syncControls()}
function stop(){generation++;playing=false;loading=false;clearInterval(timer);engine?.stop();engine=null;player.pause();if(ctx)ctx.suspend().catch(()=>{});message('');sync()}
async function start(){
 if(save.backgroundMuted){save.backgroundMuted=false;persist();window.dispatchEvent(new Event('gardenBackgroundSoundChange'))}
 if(!audibleMix()){stop();message(T('No audible mix selected. Choose music or nature sounds and raise its volume.','请先选择音乐或自然音效并调高音量。'));return;}
 const g=++generation,selected={...prefs};playing=true;loading=true;sync();message(T('Loading sound… Select pause to cancel.','正在加载声音……点击暂停可取消。'));
 try{init();engine?.stop();engine=null;clearInterval(timer);player.pause();
  // Both playback requests must start inside the user's click, before any await.
  // A late completion belongs only to this generation and cannot restart a stop.
  const resume=ctx.resume();let media;
  if(selected.music==='personal'&&tracks.length){if(player.src!==tracks[trackIndex].url)player.src=tracks[trackIndex].url;media=player.play()}
  await Promise.all([resume,media,ensureSamples(ctx,selected.music)]);if(g!==generation)return;loading=false;message('');
  engine=composer(ctx,musicBus,natureBus,selected,Math.random()*0xffffffff);engine.schedule(ctx.currentTime+1.3);timer=setInterval(()=>{if(!document.hidden)engine?.schedule(ctx.currentTime+1.3)},500);playing=true;
  if(selected.music==='personal'&&!tracks.length)message(T('Choose a music file first. Nature sounds can still play.','请先选择音乐文件。自然音效仍可播放。'));
  sync();
 }catch(e){if(g!==generation)return;stop();message(T('Unable to play this audio. Try another file or a built-in mix.','无法播放此音频。请尝试其他文件或内置混音。'))}
}
function choose(key,value){prefs[key]=value;persistPrefs();if(playing)start();openSound()}
function openSound(){
 window.MindGardenMenuHistory?.enter('music',()=>openSound());
 const music=[['none','No music','无音乐'],['strings','Chamber garden','室内乐花园'],['harp','Harp & woodwinds','竖琴与木管'],['piano','Piano & cello','钢琴与大提琴'],['serenade','Twilight ensemble','暮色合奏'],['personal','My own music','我的音乐']];
 const nature=[['none','No nature sounds','无自然音效'],['ocean','Ocean & gulls','海浪与海鸥'],['garden','Garden & birds','花园与鸟鸣'],['wind','Soft wind','轻柔微风'],['rain','Rain on leaves','叶上细雨'],['stream','Woodland stream','林间溪流'],['night','Evening crickets','晚间虫鸣']];
 const choices=(key,items)=>'<div class="sound-choices">'+items.map(([id,en,zh])=>'<button class="btn" data-sound-'+key+'="'+id+'" aria-pressed="'+(prefs[key]===id)+'">'+T(en,zh)+'</button>').join('')+'</div>';
 const slider=(key,en,zh)=>'<label class="sound-range"><span>'+T(en,zh)+'</span><input type="range" min="0" max="100" value="'+prefs[key]+'" data-sound-volume="'+key+'"><output>'+prefs[key]+'%</output></label>';
 overlay('<div class="sound-panel"><h2>'+T('Music & nature','音乐与自然')+'</h2><p class="sound-intro">'+T('Make space for a softer moment. Blend layered music with an ever-changing landscape.','给自己一段柔和的时光，将多声部音乐与不断变化的自然声景融合。')+'</p><div class="sound-actions"><button class="btn" id="backgroundAudioToggle"></button><button class="btn main" id="soundPlay"></button><button class="btn" id="soundDone">'+T('Done','完成')+'</button></div>'+slider('master','Overall','总音量')+'<fieldset class="sound-section"><legend>'+T('Music','音乐')+'</legend>'+choices('music',music)+slider('musicVolume','Music level','音乐音量')+'<p class="sound-note">'+(prefs.music==='strings'?T('Piano, violin and cello with soft clarinet harmony. A slow, full-bodied chamber arrangement.','钢琴、小提琴、大提琴与柔和的单簧管和声，舒缓而饱满的室内乐。'):prefs.music==='harp'?T('A separate melody in flowing triple time: plucked harp, flute and clarinet.','独立的三拍子旋律：拨弦竖琴、长笛与单簧管，轻盈流畅。'):prefs.music==='piano'?T('Unhurried piano melodies with a warm cello foundation.','悠缓的钢琴旋律，搭配温暖的大提琴低音。'):prefs.music==='serenade'?T('Singing strings with clarinet and flute, in a gentle six-beat flow.','弦乐、单簧管与长笛，在柔和的六拍节奏中交织。'):T('Choose an arrangement or bring a recording you love.','选择一种编曲，或使用你喜爱的录音。'))+'</p></fieldset><fieldset class="sound-section"><legend>'+T('Nature soundscape','自然声景')+'</legend>'+choices('nature',nature)+slider('natureVolume','Nature level','自然音量')+'<label><input id="soundHorn" type="checkbox" '+(prefs.horn?'checked':'')+'> '+T('Occasional distant foghorn (ocean only)','偶尔传来的远处雾笛（仅海洋模式）')+'</label><p class="sound-note">'+T('Procedural waves and wind rise and fall at varied intervals; bird calls leave quiet gaps.','合成海浪与风声以不同节奏起伏，鸟鸣之间留有宁静的空隙。')+'</p></fieldset><fieldset class="sound-section"><legend>'+T('Bring your own music','使用自己的音乐')+'</legend><label>'+T('Add music files','添加音乐文件')+'<input class="sound-upload" id="soundFiles" type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg,.flac" multiple hidden></label><div class="music-file-picker"><button type="button" class="btn" id="soundChooseFiles">'+T('Choose music files','选择音乐文件')+'</button><p class="file-upload-status" role="status">'+(tracks.length?T(tracks.length+' tracks in your playlist','歌单中有'+tracks.length+'首音乐'):T('No files selected','尚未选择文件'))+'</p></div><p class="sound-note">'+T('Files stay on your device and are not uploaded. Choose them again after reloading. Your playlist repeats while playing.','文件保留在你的设备上，不会上传。刷新后请重新选择。播放时歌单会循环。')+'</p><div id="personalTracks" class="personal-tracks"></div><button class="btn" id="soundClear" '+(!tracks.length?'disabled':'')+'>'+T('Clear playlist','清空歌单')+'</button></fieldset><div class="sound-actions"><button class="btn" id="soundDownload" '+(exporting||prefs.music==='personal'?'disabled':'')+'>'+T('Download built-in mix · 60s WAV','下载内置混音 · 60秒 WAV')+'</button></div><p class="sound-note">'+T('The download uses your selected built-in music, nature sounds and volume levels. Personal tracks are not included.','下载包含你选择的内置音乐、自然音效与音量设置，不包含个人音乐。')+'</p><p class="sound-note">'+T('Instrument samples: ','乐器采样：')+'<a href="https://github.com/nbrosowsky/tonejs-instruments" target="_blank" rel="noopener">Nicholaus P. Brosowsky</a> · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a></p><p id="soundMessage" class="sound-message" role="status"></p></div>');
 document.getElementById('soundDone').onclick=closeOv;document.getElementById('soundPlay').onclick=()=>playing?stop():start();
 document.querySelectorAll('[data-sound-music]').forEach(b=>b.onclick=()=>choose('music',b.dataset.soundMusic));document.querySelectorAll('[data-sound-nature]').forEach(b=>b.onclick=()=>choose('nature',b.dataset.soundNature));
 document.querySelectorAll('[data-sound-volume]').forEach(input=>input.oninput=()=>{prefs[input.dataset.soundVolume]=clamp(input.value);input.nextElementSibling.textContent=input.value+'%';levels();persistPrefs();sync()});
 document.getElementById('soundHorn').onchange=e=>choose('horn',e.target.checked);
 const list=document.getElementById('personalTracks');tracks.forEach((track,i)=>{const b=document.createElement('button');b.className='btn';b.textContent=(trackIndex===i?'♫ ':'')+track.name;b.setAttribute('aria-pressed',String(trackIndex===i&&prefs.music==='personal'));b.onclick=()=>{trackIndex=i;player.src=track.url;choose('music','personal');if(!playing)start()};list.append(b)});
 document.getElementById('soundChooseFiles').onclick=()=>document.getElementById('soundFiles').click();
 document.getElementById('soundFiles').onchange=e=>{let added=0;for(const file of e.target.files){if(!file.type.startsWith('audio/')&&!/\.(mp3|wav|m4a|ogg|flac)$/i.test(file.name))continue;tracks.push({name:file.name,url:URL.createObjectURL(file)});added++}if(added){prefs.music='personal';persistPrefs();openSound();if(playing)start()}else message(T('Choose a supported audio file.','请选择支持的音频文件。'))};
 document.getElementById('soundClear').onclick=()=>{player.pause();player.removeAttribute('src');player.load();tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks=[];trackIndex=0;if(prefs.music==='personal')prefs.music='none';persistPrefs();if(playing)start();openSound()};
 document.getElementById('soundDownload').onclick=downloadMix;sync();if(loading)message(T('Loading sound… Select pause to cancel.','正在加载声音……点击暂停可取消。'));
}
async function downloadMix(){
 if(exporting)return;const selection={...prefs};exporting=true;const button=document.getElementById('soundDownload');if(button)button.disabled=true;message(T('Preparing your 60-second mix…','正在制作你的60秒混音……'));
 try{const duration=60,rate=22050,offline=new OfflineAudioContext(2,rate*duration,rate),m=offline.createGain(),n=offline.createGain(),out=offline.createGain(),limit=offline.createDynamicsCompressor();m.gain.value=selection.musicVolume/100;n.gain.value=selection.natureVolume/100;out.gain.setValueAtTime(0,0);out.gain.linearRampToValueAtTime(selection.master/100,1.2);out.gain.setValueAtTime(selection.master/100,57);out.gain.linearRampToValueAtTime(0,60);m.connect(out);n.connect(out);out.connect(limit);limit.threshold.value=-14;limit.ratio.value=5;limit.connect(offline.destination);
  await ensureSamples(offline,selection.music);const comp=composer(offline,m,n,selection,Date.now());comp.schedule(duration);const buffer=await offline.startRendering();comp.stop();
  const credit=new TextEncoder().encode(sampleCredit+'\0'),padded=credit.length+(credit.length%2),pcmBytes=buffer.length*4,metaStart=44+pcmBytes;const bytes=new ArrayBuffer(metaStart+20+padded),v=new DataView(bytes);const str=(at,s)=>[...s].forEach((c,i)=>v.setUint8(at+i,c.charCodeAt(0)));str(0,'RIFF');v.setUint32(4,bytes.byteLength-8,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,rate,true);v.setUint32(28,rate*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,pcmBytes,true);str(metaStart,'LIST');v.setUint32(metaStart+4,12+padded,true);str(metaStart+8,'INFO');str(metaStart+12,'ICMT');v.setUint32(metaStart+16,credit.length,true);new Uint8Array(bytes,metaStart+20,credit.length).set(credit);
  const l=buffer.getChannelData(0),r=buffer.getChannelData(1);for(let i=0;i<buffer.length;i++){v.setInt16(44+i*4,Math.max(-1,Math.min(1,l[i]))*32767,true);v.setInt16(46+i*4,Math.max(-1,Math.min(1,r[i]))*32767,true)}
  const url=URL.createObjectURL(new Blob([bytes],{type:'audio/wav'})),a=document.createElement('a');a.href=url;a.download='mind-garden-mix.wav';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);message(T('Your mix is ready to download.','你的混音已准备好下载。'));
 }catch{message(T('This browser could not export the mix. Try a current desktop browser.','此浏览器无法导出混音，请尝试新版桌面浏览器。'))}finally{exporting=false;const b=document.getElementById('soundDownload');if(b)b.disabled=prefs.music==='personal'}
}
player.onended=()=>{if(playing&&tracks.length){trackIndex=(trackIndex+1)%tracks.length;player.src=tracks[trackIndex].url;player.play().catch(()=>{stop();message(T('Tap Play to resume.','点击播放以继续。'))});document.querySelectorAll('#personalTracks button').forEach((b,i)=>{b.textContent=(i===trackIndex?'♫ ':'')+tracks[i].name;b.setAttribute('aria-pressed',String(i===trackIndex))})}};
player.onerror=()=>{if(prefs.music==='personal'&&player.src){stop();message(T('This file cannot be played. Try MP3, WAV or another supported file.','无法播放此文件。请尝试 MP3、WAV 或其他支持的文件。'))}};
document.addEventListener('visibilitychange',()=>{if(!ctx||!playing)return;if(document.hidden){ctx.suspend();player.pause()}else{ctx.resume().then(()=>{if(playing&&prefs.music==='personal'&&tracks.length)player.play().catch(()=>stop())})}});
window.addEventListener('pagehide',stop);
window.MindGardenNatureComposer=composer;window.openMu=openSound;window.muSync=sync;window.MindGardenSound={restorePreferences(){stop();Object.assign(prefs,save.soundscape);tracks.forEach(t=>URL.revokeObjectURL(t.url));tracks=[];trackIndex=0;player.removeAttribute('src');levels();sync()},open:openSound,start,stop,status:()=>({playing,music:prefs.music,nature:prefs.nature,tracks:tracks.length,context:ctx?.state,engine:engine?.stats()})};
document.getElementById('bMus').onclick=openSound;document.getElementById('mFab').onclick=()=>playing&&audibleMix()?stop():start();sync();
})();
