/* STANDALONE PREVIEW ONLY. No network requests and no real remote participants. */
(function(){
const realFetch=window.fetch;let room=null,history=[],owner=null;
const token='a'.repeat(48),id='a'.repeat(16),names=['Grace','Leo','Mina','Oliver','Tara'];
const answer=data=>Promise.resolve(new Response(JSON.stringify(data),{status:200,headers:{'content-type':'application/json'}}));
function state(){const now=Date.now();return {...room,host:true,me:id,serverTime:now,players:room.players.map(p=>({...p,lastSeen:now})),invitations:[],allReady:room.players.every(p=>!!p.beganAt),requiresBegin:true,finished:room.round>0&&room.players.every(p=>p.score!==null||p.skipped),bingo:room.mode==='bingo9'?{called:room.called||1}:null}}
window.fetch=function(url,o){if(!String(url).startsWith('/api/room8'))return realFetch?.call(this,url,o)||Promise.reject(Error('Preview asset unavailable'));
 const a=new URL(url,'https://preview.invalid').searchParams.get('action'),b=JSON.parse(o.body||'{}');
 if(a==='login'){owner=b.name;return answer({token,id,name:owner})}
 if(a==='lounge')return answer({rooms:[],online:6,activeRoom:room&&!room.closed?room.code:null});
 if(a==='logout'||a==='ack')return answer({ok:true});
 if(a==='create'){history=[];room={code:'DEMO27',seed:27027,round:0,totalRounds:3,started:false,closed:false,sessionFinished:false,createdAt:Date.now(),status:'lobby',pilot:null,players:[owner||'Preview host',...names].map((name,i)=>({id:i?String(i).repeat(16):id,name,host:i===0,score:null,total:0,skipped:0,departed:0,seenRound:0,beganAt:null,bingoMask:0}))};return answer({code:room.code})}
 if(a==='configurePilot'){room.pilot={activities:b.activities,releaseAt:null};return answer({ok:true})}
 if(a==='history')return answer({rooms:room?[{code:room.code,createdAt:room.createdAt,completed:history.length,total:0,status:room.status}]:[],nextOffset:null});
 if(a==='rankings')return answer({code:room.code,me:id,players:room.players.map(p=>({...p,completed:history.length,rank:1})),rounds:history.slice().reverse(),nextOffset:null});
 if(!room)return answer({error:'Create a sample room first.'});
 if(a==='launch'||a==='advance'){room.round++;room.mode=room.pilot?.activities[room.round-1]||b.mode;room.started=true;room.status='playing';room.called=1;if(room.pilot)room.pilot.releaseAt=null;for(const [i,p]of room.players.entries()){p.score=null;p.skipped=0;p.bingoMask=0;p.beganAt=i?Date.now():null;p.seenRound=room.round}}
 if(a==='begin')room.players[0].beganAt=Date.now();
 if(a==='startTogether'){room.pilot.releaseAt=Date.now()+3500;room.players.forEach(p=>p.beganAt=room.pilot.releaseAt)}
 if(a==='bingoCall'){room.called=Math.min(9,room.called+1);for(const p of room.players.slice(1))p.bingoMask=(1<<room.called)-1}
 if(a==='bingoMark'){room.players[0].bingoMask|=1<<b.index;if(room.players[0].bingoMask===511)complete(false)}
 if(a==='submit')complete(false);
 if(a==='finishRound')complete(true);
 if(a==='finishSession'||a==='close'){room.closed=true;room.sessionFinished=a==='finishSession';room.status='closed';room.endedAt=Date.now()}
 return answer(state());
 function complete(skipped){for(const [i,p]of room.players.entries()){p.score=i?900:skipped?null:900;p.skipped=i?0:+skipped;p.total+=p.score||0}
 if(!history.some(r=>r.round===room.round))history.push({round:room.round,mode:room.mode,completed:skipped?5:6,startedAt:Date.now(),results:room.players.map(p=>({id:p.id,name:p.name,score:p.score,skipped:p.skipped}))});
 if(room.round===room.totalRounds){room.closed=true;room.sessionFinished=true;room.status='closed';room.endedAt=Date.now()}}
};
window.addEventListener('DOMContentLoaded',()=>{
 const bar=document.createElement('aside');bar.id='pilotPreviewBanner';bar.innerHTML='<strong>Working preview · v5.0.0</strong><span>Sample group: five simulated companions. No live service or deployment.</span><button type="button" id="previewFacilitator">Try facilitator mode</button><button type="button" id="previewSummary">View sample summary</button>';
 document.body.prepend(bar);document.getElementById('previewFacilitator').onclick=()=>window.MindGardenMultiplayer.facilitator();document.getElementById('previewSummary').onclick=async()=>{
 if(!room){await window.fetch('/api/room8?action=login',{body:JSON.stringify({name:'Preview host'})});await window.fetch('/api/room8?action=create',{body:'{}'});room.round=1;room.mode='pairs6';room.started=true;room.players.forEach((p,i)=>{p.score=i===2?null:900;p.total=p.score||0;p.skipped=i===2?1:0});history=[{round:1,mode:'pairs6',completed:5,results:room.players}];room.endedAt=Date.now()+24*60000}
 window.MindGardenPilot.summary(state(),()=>window.closeOv())};
 });
})();
