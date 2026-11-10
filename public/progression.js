/* Level-based challenges. Difficulty changes content, not the session's round number. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en,$=id=>document.getElementById(id);
const level=n=>Math.max(1,Math.min(15,Math.round(Number(n)||1))),L=()=>level(mg?.difficulty),options=n=>Math.min(6,3+Math.floor((n-1)/3));
const choose=a=>a[rnd(0,a.length-1)],value=x=>({v:String(x),h:esc(x)});
const label=x=>typeof tr==='function'&&save.lang==='zh'?tr(x):x;
function answers(answer,candidates,count=options(L())){const out=[String(answer)];for(const v of shuffle(candidates.map(String)))if(!out.includes(v))out.push(v);return shuffle(out.slice(0,count)).map(value)}
function numeric(answer,count=options(L()),step=1){const out=[answer];for(let d=1;out.length<count;d++)for(const sign of [-1,1]){const n=Number((answer+sign*d*step).toFixed(2));if(n>=0&&!out.includes(n))out.push(n);if(out.length===count)break}return shuffle(out).map(value)}
function question(prompt,opts,answer,top='',numericText=false){$('mmsg').textContent=prompt;ask(top,opts,String(answer),T('That is right!','答对了！'),T('The answer was ','答案是 ')+label(answer)+T('. Keep practising.','。继续练习。'),1);if(numericText)$('mp').querySelectorAll('[data-a],.seqline').forEach(el=>{el.setAttribute('translate','no');el.classList.add('notranslate')});$('mp').querySelector('.gridm:last-child')?.style.setProperty('--c',Math.min(3,opts.length));}
const line=s=>'<div class="seqline" translate="no">'+esc(s)+'</div>';
function numberQuestion(s,a){question(T('Work out the missing number.','算出缺少的数字。'),numeric(a),a,line(s),true)}
const patternFamilies=['add','subtract','multiply','alternating','growing','two-step','fibonacci','interleaved','squares','mixed-cycle','weighted-fibonacci','interleaved-geometric','alternating-growing'];
function pattern(n,random=Math.random){
 n=level(n);const ri=(a,b)=>a+Math.floor(random()*(b-a+1)),low=n<=3?['add']:n<=5?['add','subtract']:n<=7?['multiply','alternating']:n<=10?['growing','two-step','squares']:n<=12?['fibonacci','interleaved','growing']:['weighted-fibonacci','interleaved-geometric','alternating-growing','squares','mixed-cycle'];
 const family=low[ri(0,low.length-1)],a=ri(n>=11?n:1,4+n*2),d=ri(Math.max(1,Math.floor(n/3)),2+n),e=d+ri(1,3+Math.floor(n/3)),q=[];
 const length=['interleaved','interleaved-geometric','alternating-growing','mixed-cycle','two-step'].includes(family)?8:6;
 for(let i=0;i<length;i++){
  if(family==='add')q.push(a+i*d);
  if(family==='subtract')q.push(a+(length-i)*d);
  if(family==='multiply')q.push(a*Math.pow(n<7?2:3,i));
  if(family==='alternating')q.push(i?q[i-1]+(i%2?d:e):a);
  if(family==='growing')q.push(a+i*d+i*(i-1)/2*(1+Math.floor(n/5)));
  if(family==='two-step')q.push(i?(i%2?q[i-1]+d:q[i-1]*2):a);
  if(family==='fibonacci')q.push(i<2?a+i*d:q[i-1]+q[i-2]);
  if(family==='weighted-fibonacci')q.push(i<2?a+i*d:q[i-1]+2*q[i-2]);
  if(family==='interleaved')q.push(i%2?a+30+Math.floor(i/2)*e:a+Math.floor(i/2)*d);
  if(family==='interleaved-geometric')q.push(i%2?(a+30)*Math.pow(2,Math.floor(i/2)):a+Math.floor(i/2)*d);
  if(family==='alternating-growing')q.push(i?q[i-1]+(i%2?d:e)*Math.ceil(i/2):a);
  if(family==='squares')q.push(a+Math.pow(i+1,2)*(1+Math.floor(n/4)));
  if(family==='mixed-cycle')q.push(i?i%3===1?q[i-1]+d:i%3===2?q[i-1]*2:q[i-1]-d:a);
 }
 return{family,shown:q.slice(0,-1),answer:q.at(-1),level:n};
}
window.rNum=function(){const p=pattern(L());mg.patternFamily=p.family;numberQuestion(p.shown.join(' , ')+' , ?',p.answer)};
window.rSum=function(){const n=L(),a=rnd(2+n*2,10+n*n),b=rnd(1,4+n*3),c=rnd(1,n*2),subtract=n>2&&rnd(0,1);if(n>=11){const first=a+b;numberQuestion(a+' + '+b+' − '+c+' = ?',first-c)}else if(n>=7){numberQuestion(a+' + '+b+' + '+c+' = ?',a+b+c)}else if(subtract){numberQuestion((a+b)+' − '+b+' = ?',a)}else numberQuestion(a+' + '+b+' = ?',a+b)};
window.rTbl=function(){const n=L(),a=rnd(2,3+n),b=rnd(2,Math.min(12,3+n)),c=rnd(1,n);if(n>=11)numberQuestion(a+' × '+b+' + '+c+' = ?',a*b+c);else if(n>=7)numberQuestion(a+' × ? = '+a*b,b);else numberQuestion(a+' × '+b+' = ?',a*b)};
window.rAdd=function(){const n=L(),a=rnd(n,10+n*8),b=rnd(1,3+n*3),c=rnd(1,n+1);numberQuestion(n<8?a+' + ? = '+(a+b):a+' + ? + '+c+' = '+(a+b+c),b)};
window.rSub=function(){const n=L(),a=rnd(2,5+n*6),b=rnd(1,3+n*3),c=rnd(1,n+1);numberQuestion(n<8?(a+b)+' − ? = '+a:(a+b+c)+' − ? − '+c+' = '+a,b)};
window.rCnt=function(){const n=L(),step=rnd(2,3+n),steps=n<6?3:n<11?4:5,a=steps*step+rnd(5,15+n*5);const q=Array.from({length:steps},(_,i)=>a-i*step);numberQuestion(q.join(' , ')+' , ?',a-steps*step)};
const timeText=mins=>{mins=(mins%1440+1440)%1440;return String(Math.floor(mins/60)).padStart(2,'0')+':'+String(mins%60).padStart(2,'0')};
window.rTime=function(){const n=L(),start=rnd(0,23)*60+(n<4?0:rnd(0,n<8?3:11)*(n<8?15:5)),delta=rnd(1,n+1)*60+(n<6?0:rnd(1,11)*5),sign=n>=10&&rnd(0,1)?-1:1,a=timeText(start+sign*delta);question(T('Using the 24-hour clock, what time is '+Math.floor(delta/60)+' h '+delta%60+' min '+(sign>0?'later?':'earlier?'),'使用24小时制，'+Math.floor(delta/60)+'小时'+delta%60+'分钟'+(sign>0?'后':'前')+'是几点？'),answers(a,[-60,60,-5,5,30,90].map(d=>timeText(start+sign*delta+d))),a,line(timeText(start)),true)};
window.rClk=function(){const n=L(),step=n<4?30:n<7?15:n<11?5:1,m=rnd(0,60/step-1)*step,h=rnd(1,12),a=h+':'+String(m).padStart(2,'0'),f=(hh,mm)=>((hh+11)%12+1)+':'+String((mm+60)%60).padStart(2,'0');const distractors=[f(h+1,m),f(h-1,m),f(h,m+step),f(h,m-step),f(h+2,m),f(h+3,m)];question(T('What time does the clock show?','时钟显示几点？'),answers(a,distractors),a,'<div class="clock-question">'+clockSvg(h,m)+'</div>',true);};
function ready(top,id,cb){const g=mg;$('mp').innerHTML=top+'<div class="row"><button class="btn main" id="'+id+'">'+T('I am ready','我准备好了')+'</button></div>';$('mmsg').textContent=T('Remember these pictures. Continue when you are ready.','记住这些图片，准备好后继续。');$(id).onclick=()=>{if(mg===g&&!paused)cb()}}
window.rRem=function(){const n=L(),count=1+Math.floor((n-1)/4),it=pick(allItems(),count+options(n)),target=it.slice(0,count),at=rnd(0,count-1),a=target[at];ready(gamePictureLine(target.map(x=>x.e)),'memoryReady',()=>question(T('Which picture was in position '+(at+1)+'?','第'+(at+1)+'个位置是什么图片？'),shuffle([a,...it.slice(count,count+options(n)-1)]).map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e))};
// Semantically related choices make recognition harder without making text or pictures smaller.
function pictureChoices(n){const pool=allItems(),min=Math.min(8,2+Math.floor(n/3)),eligible=pool.filter(x=>x.n.length>=min),a=choose(eligible.length?eligible:pool);const same=Object.values(DECKS).map(d=>d.map(P)).find(d=>d.some(x=>x.e===a.e))||pool;const others=n>=8?same.filter(x=>x.e!==a.e):pool.filter(x=>x.e!==a.e);return shuffle([a,...pick(others,options(n)-1)]).map(x=>({...x,target:x.e===a.e}))}
window.rPic=function(){const it=pictureChoices(L()),a=it.find(x=>x.target);question(T('Which picture matches the word?','哪张图片与词语相符？'),it.map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e,'<div class="seqline">'+esc(label(a.n))+'</div>')};
window.rWm=function(){const it=pictureChoices(L()),a=it.find(x=>x.target);question(T('Which word matches the picture?','哪个词语与图片相符？'),it.map(x=>({v:x.n,h:esc(label(x.n)),l:label(x.n)})),a.n,'<div class="big st one">'+gamePicture(a.e)+'</div>')};
const patterns=n=>n<=3?['AB','AAB']:n<=6?['ABC','ABB','AABC']:n<=9?['ABAC','ABCB','AABBC']:n<=12?['ABCAC','ABBCD','AABCBD']:['ABACBD','ABCDAC','AABCDC'];
function picturePattern(symbols){const n=L(),p=choose(patterns(n)),map=shuffle(symbols),size=p.length*2+1,seq=Array.from({length:size},(_,i)=>map[p.charCodeAt(i%p.length)-65]),a=seq.pop();question(T('Which picture comes next?','下一个是什么图形？'),shuffle([a,...pick(map.filter(x=>x!==a),Math.max(3,new Set(p).size-1))]).map(x=>({v:x,h:x})),a,gamePictureLine([...seq,'?']))}
window.rShp=function(){picturePattern(['●','■','▲','◆','★','✚'])};
const groupSets=[
 ['Fruit','水果',['🍎','🍌','🍇','🍊','🍓','🍋']],['Animals','动物',['🐶','🐱','🐴','🐘','🐢','🐰']],['Transport','交通工具',['🚲','🚌','🚂','✈️','🚗','⛵']],['Musical instruments','乐器',['🎹','🎻','🎺','🥁','🎸','🎷']],['Clothing','衣物',['👕','👖','🧥','🧦','👗','🧢']],['Flowers','花朵',['🌷','🌻','🌹','🌼','🌺','🌸']],
 ['Birds','鸟类',['🐦','🦉','🦆','🐧','🦅','🦜']],['Insects','昆虫',['🐝','🦋','🐞','🦗','🐜','🦟']],['Vegetables','蔬菜',['🥕','🌽','🥦','🥬','🍆','🥒']],['Sea animals','海洋动物',['🐟','🐙','🐬','🦈','🐳','🦑']],['Sports equipment','运动用品',['⚽','🏀','🎾','🏓','🏸','🏐']],['Tools','工具',['🔨','🔧','🪛','🪚','🪓','⛏️']]
];
function groups(){const n=L(),pool=n<=5?groupSets.slice(0,6):n<=10?groupSets.slice(4):groupSets.filter((_,i)=>i!==1);return pick(pool,Math.min(6,2+Math.floor((n-1)/3)))}
window.rSort=function(){const gs=groups(),a=choose(gs),e=choose(a[2]);question(T('Which group does this picture belong to?','这张图片属于哪一组？'),gs.map((g,i)=>({v:String(i),h:T(g[0],g[1])})),String(gs.indexOf(a)),'<div class="big st one">'+gamePicture(e)+'</div>')};
window.rOdd=function(){const gs=groups(),main=gs[0],other=gs[1],a=choose(other[2]),count=Math.min(7,3+Math.floor(L()/3));question(T('Which picture belongs to a different group?','哪张图片属于不同的类别？'),shuffle([...pick(main[2],count-1),a]).map(x=>({v:x,h:x})),a)};
window.rSame=function(){const gs=groups(),a=gs[0],items=pick(a[2],L()<8?2:3),answer=items.pop();question(T('Which picture belongs with these?','哪张图片与这些属于同一组？'),shuffle([answer,...gs.slice(1).map(g=>choose(g[2]))]).map(x=>({v:x,h:x})),answer,gamePictureLine(items))};
const days=[['Sunday','星期日'],['Monday','星期一'],['Tuesday','星期二'],['Wednesday','星期三'],['Thursday','星期四'],['Friday','星期五'],['Saturday','星期六']];
function calendar(){const n=L();if(n<=5){const day=rnd(0,6),offset=rnd(1,n+1),sign=n>2&&rnd(0,1)?-1:1,idx=(day+offset*sign+14)%7;question(T('If today is '+days[day][0]+', what day is '+offset+' days '+(sign>0?'later?':'earlier?'),'如果今天是'+days[day][1]+'，'+offset+'天'+(sign>0?'后':'前')+'是星期几？'),shuffle([{v:String(idx),h:T(...days[idx])},...pick(days.map((d,i)=>({v:String(i),h:T(...d)})).filter(x=>x.v!==String(idx)),options(n)-1)]),String(idx));return}
 const date=new Date(Date.UTC(rnd(2024,2032),rnd(0,11),rnd(20,28))),a=rnd(3,n*2),b=n<11?0:rnd(1,n),target=new Date(date.getTime()+(a-b)*86400000),iso=d=>d.toISOString().slice(0,10),answer=iso(target);question(T('Date: '+iso(date)+'. Move '+a+' days forward'+(b?', then '+b+' days back':'')+'. Which date? Use year-month-day.','日期：'+iso(date)+'。向后推'+a+'天'+(b?'，再往前推'+b+'天':'')+'。是几月几日？格式为年-月-日。'),answers(answer,[-7,-2,-1,1,2,7].map(x=>iso(new Date(target.getTime()+x*86400000)))),answer,'',true)}
function money(){const n=L(),cents=n>=8,prices=Array.from({length:n<5?1:n<10?2:3},()=>cents?rnd(100,300+n*80):rnd(1,4+n*3)*100),sum=prices.reduce((a,b)=>a+b,0),paid=Math.ceil((sum+100)/1000)*1000,answer=((paid-sum)/100).toFixed(2),cash=x=>'$'+(x/100).toFixed(2);question(T('Prices: '+prices.map(cash).join(' + ')+'. You pay '+cash(paid)+'. How much change?','价格：'+prices.map(cash).join(' + ')+'。支付'+cash(paid)+'，应找回多少？'),answers(answer,[-100,100,-10,10,50,200].map(d=>((paid-sum+d)/100).toFixed(2)).filter(x=>Number(x)>=0)),answer,'',true)}
function shopping(){const n=L(),count=2+Math.floor((n-1)/2),items=pick(allItems(),count+6),target=items.slice(0,count),at=rnd(0,count-1),a=target[at];ready(gamePictureLine(target.map(x=>x.e)),'shoppingReady',()=>question(n<8?T('Which item was on your list?','哪件物品在购物清单上？'):T('Which item was number '+(at+1)+' on your list?','购物清单上第'+(at+1)+'件是什么？'),shuffle([a,...(n<8?items.slice(count):items.filter(x=>x!==a)).slice(0,options(n)-1)]).map(x=>({v:x.e,h:x.e,l:label(x.n)})),a.e))}
const routines=[
 [['Prepare soil','准备土壤'],['Plant seeds','播种'],['Water the soil','浇水'],['Watch sprouts grow','等待发芽'],['Move plants to bigger pots','移入大花盆'],['Enjoy the flowers','欣赏花朵']],
 [['Collect dirty clothes','收集脏衣服'],['Sort the colours','按颜色分类'],['Load the washer','放入洗衣机'],['Add detergent','加入洗衣液'],['Start washing','开始洗衣'],['Hang clothes to dry','晾干衣服']],
 [['Choose a recipe','选择食谱'],['Buy ingredients','购买食材'],['Wash vegetables','清洗蔬菜'],['Cut vegetables','切菜'],['Cook the meal','烹饪'],['Serve the meal','上菜']]
];
function routine(){const n=L(),r=choose(routines),jump=n<6?1:n<11?2:3,at=rnd(0,r.length-jump-1),answer=r[at+jump],pool=n<6?routines.filter(x=>x!==r).flat():r.filter(x=>x!==answer);question(T('In this order: '+r.map(x=>x[0]).join(' → ')+'. What is '+jump+' step'+(jump>1?'s':'')+' after “'+r[at][0]+'”?','按此顺序：'+r.map(x=>x[1]).join(' → ')+'。“'+r[at][1]+'”之后第'+jump+'步是什么？'),answers(T(...answer),pool.map(x=>T(...x))),T(...answer))}
const associations=[['bird','小鸟','nest','鸟巢'],['dog','狗','kennel','狗窝'],['bee','蜜蜂','hive','蜂巢'],['fish','鱼','water','水'],['book','书','reading','阅读'],['pencil','铅笔','writing','书写'],['scissors','剪刀','cutting','剪切'],['spoon','勺子','eating','进食'],['eye','眼睛','seeing','看'],['ear','耳朵','hearing','听'],['nose','鼻子','smelling','闻'],['tongue','舌头','tasting','尝味']];
function related(){const n=L(),pool=n<6?associations:n<11?associations.slice(0,8):associations.slice(4),p=choose(pool),ans=T(p[2],p[3]),others=associations.filter(x=>x!==p);let prompt=T('Which word goes with “'+p[0]+'”?','哪个词语与“'+p[1]+'”相关？');if(n>=6){const family=associations.slice(Math.floor(associations.indexOf(p)/4)*4,Math.floor(associations.indexOf(p)/4)*4+4),ref=choose(family.filter(x=>x!==p));prompt=T(ref[0]+' → '+ref[2]+'; '+p[0]+' → ?' ,ref[1]+' → '+ref[3]+'；'+p[1]+' → ?');}question(prompt,answers(ans,others.map(x=>T(x[2],x[3]))),ans)}
const rooms=[['Kitchen','厨房','🍳','🥣'],['Bedroom','卧室','🛏️','🛌'],['Bathroom','浴室','🪥','🛁'],['Garage','车库','🚗','🛞'],['Garden','花园','🌷','🌲'],['Study','书房','🖥️','📚']];
function place(){const n=L(),p=choose(rooms),ans=T(p[0],p[1]);question(T('Which place best matches these objects?','这些物品最适合哪个地方？'),answers(ans,rooms.filter(x=>x!==p).map(x=>T(x[0],x[1]))),ans,gamePictureLine(p.slice(2,n>=8?4:3)))}
let storyUtterance=null,storySpeechTimer=null;
function stopStory(){clearTimeout(storySpeechTimer);if(!storyUtterance)return;storyUtterance.onend=storyUtterance.onerror=null;storyUtterance=null;window.speechSynthesis?.cancel()}
new MutationObserver(()=>{if(!$('readStory'))stopStory()}).observe($('mp'),{childList:true});
new MutationObserver(()=>{if($('mini').classList.contains('hidden'))stopStory()}).observe($('mini'),{attributes:true,attributeFilter:['class']});
new MutationObserver(()=>{if(!$('ov').classList.contains('hidden'))stopStory()}).observe($('ov'),{attributes:true,attributeFilter:['class']});
window.addEventListener('pagehide',stopStory);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopStory()});

function readStory(text){const status=$('storySpeechStatus'),button=$('readStory'),synth=window.speechSynthesis;const update=t=>{if(status?.isConnected)status.textContent=t};if(!synth||!window.SpeechSynthesisUtterance){update(T('Read aloud is unavailable in this browser. You can read the story above.','此浏览器不支持朗读，请阅读上方故事。'));return}try{if(storyUtterance){storyUtterance.onend=storyUtterance.onerror=null}synth.cancel();synth.resume();const u=new SpeechSynthesisUtterance(text);storyUtterance=u;u.lang=save.lang==='zh'?'zh-CN':'en-GB';u.rate=.85;const voice=synth.getVoices().find(v=>v.lang.toLowerCase().startsWith(save.lang==='zh'?'zh':'en'));if(voice)u.voice=voice;update(T('Starting narration…','正在开始朗读……'));u.onstart=()=>{clearTimeout(storySpeechTimer);update(T('Reading aloud…','正在朗读……'))};u.onend=()=>{clearTimeout(storySpeechTimer);if(storyUtterance===u)storyUtterance=null;update(T('Finished reading. Tap Read aloud to listen again.','朗读完成，可再次点击朗读。'))};u.onerror=e=>{clearTimeout(storySpeechTimer);if(!['canceled','interrupted'].includes(e.error))update(T('Voice could not play. Check device volume or try another browser. The story remains available to read.','无法播放语音，请检查设备音量或尝试其他浏览器。您仍可阅读故事。'))};synth.speak(u);clearTimeout(storySpeechTimer);storySpeechTimer=setTimeout(()=>{if(storyUtterance===u)update(T('If you cannot hear speech, check device volume and try Read aloud again. You can also read the story.','若听不到语音，请检查设备音量并再次点击朗读，也可阅读故事。'))},6000)}catch{update(T('Read aloud is unavailable. Please read the story above.','暂时无法朗读，请阅读上方故事。'))}}
function story(){const n=L(),person=T(...choose([['Mei','小梅'],['Lily','莉莉'],['George','乔治'],['Ben','小本']])),places=[['market','市场'],['park','公园'],['library','图书馆'],['cafe','咖啡馆']],items=[['apples','苹果'],['oranges','橙子'],['flowers','花朵'],['books','书']],colours=[['red','红色'],['blue','蓝色'],['green','绿色'],['yellow','黄色']],people=[['sister','姐姐'],['friend','朋友'],['neighbour','邻居'],['brother','哥哥']],travel=[['bus','公共汽车'],['train','火车'],['bicycle','自行车'],['taxi','出租车']],drinks=[['tea','茶'],['water','水'],['juice','果汁'],['milk','牛奶']];
const place=choose(places),item=choose(items),colour=choose(colours),day=choose(days),who=choose(people),ride=choose(travel),drink=choose(drinks),count=rnd(2,n+3),other=(pool,v)=>pool.filter(x=>x!==v).map(x=>T(...x));
const facts=[
[T(person+' went to the '+place[0]+'.',person+'去了'+place[1]+'。'),T('Where did '+person+' go?',person+'去了哪里？'),T(...place),other(places,place),'place'],
[T(person+' carried '+count+' '+item[0]+'.',person+'带了'+count+'个'+item[1]+'。'),T('What did '+person+' carry?',person+'带了什么？'),T(...item),other(items,item),'item'],
['',T('How many items were carried?','带了多少个物品？'),String(count),[count+1,count+2,count+3,count+4,count+5].map(String),'count'],
[T('The bag was '+colour[0]+'.','袋子是'+colour[1]+'的。'),T('What colour was the bag?','袋子是什么颜色？'),T(...colour),other(colours,colour),'colour'],
[T('It was '+day[0]+'.','那天是'+day[1]+'。'),T('On which day did this happen?','这件事发生在星期几？'),T(...day),other(days,day),'day'],
[T(person+' travelled by '+ride[0]+'.',person+'乘坐的交通工具是'+ride[1]+'。'),T('How did '+person+' travel?',person+'使用了什么交通工具？'),T(...ride),other(travel,ride),'travel'],
[T('After returning home, '+person+' phoned a '+who[0]+'.','回家后，'+person+'给'+who[1]+'打了电话。'),T('Who received the phone call?','电话打给了谁？'),T(...who),other(people,who),'person'],
[T('Finally, '+person+' drank '+drink[0]+'.','最后，'+person+'喝了'+drink[1]+'。'),T('What happened last?','最后做了什么？'),T('Drank '+drink[0],'喝'+drink[1]),[T('Packed the bag','整理袋子'),T('Travelled to the '+place[0],'前往'+place[1]),T('Phoned the '+who[0],'给'+who[1]+'打电话')],'sequence']
].slice(0,Math.min(8,2+Math.ceil((n-1)/2)));
const g=mg,text=facts.map(x=>x[0]).filter(Boolean).join(' ');g.storyFactCount=facts.length;g.storyQuestions=shuffle(facts.slice());g.storyAnswers=[];g.storyIndex=0;g.storyQuestionKind=g.storyQuestions[0][4];
function askFact(){
 if(mg!==g)return;const q=g.storyQuestions[g.storyIndex];g.storyQuestionKind=q[4];g.ans=q[2];g.last=null;let answered=false;
 $('mmsg').textContent=T('Detail ','细节 ')+(g.storyIndex+1)+' / '+facts.length+' · '+q[1];
 $('mp').innerHTML='<div class="gridm" style="--c:2">'+answers(q[2],q[3]).map(x=>'<button class="big" data-a="'+esc(x.v)+'">'+x.h+'</button>').join('')+'</div>';
 g.h=button=>{if(answered||paused||mg!==g)return;answered=true;g.h=null;const ok=button.dataset.a===q[2];g.storyAnswers.push(button.dataset.a);button.classList.add(ok?'right':'wrong');$('mp').querySelectorAll('[data-a]').forEach(b=>{b.disabled=true;if(b.dataset.a===q[2])b.classList.add('right')});ok?chime():beep(300,.2,'triangle');
 const last=g.storyIndex+1===facts.length,feedback=document.createElement('div');feedback.className='story-detail-feedback';feedback.innerHTML='<p role="status">'+(ok?T('Correct!','答对了！'):T('Correct answer: ','正确答案：')+esc(q[2]))+'</p><button class="btn main" id="storyNextDetail">'+T(last?'Review story':'Next detail',last?'回顾故事':'下一项细节')+'</button>';$('mp').append(feedback);
 $('storyNextDetail').onclick=()=>{if(paused||mg!==g)return;g.storyIndex++;if(!last)return askFact();g.reviewExpected=g.storyQuestions.map(f=>f[2]);g.reviewEntered=g.storyAnswers.slice();const correct=g.reviewExpected.filter((v,i)=>v===g.reviewEntered[i]).length;g.ans=null;g.last=null;res(correct===facts.length,T(correct+' of '+facts.length+' story details recalled.','记住了 '+facts.length+' 项细节中的 '+correct+' 项。'));};
 };
}
$('mmsg').textContent=T('Read or listen. Recall '+facts.length+' details afterwards.','阅读或聆听，然后回忆 '+facts.length+' 项细节。');$('mp').innerHTML='<div class="story-copy">'+esc(text)+'</div><div class="row"><button class="btn" id="readStory">'+T('Read aloud','朗读')+'</button><button class="btn main" id="storyReady">'+T('Answer the questions','回答问题')+'</button></div><p id="storySpeechStatus" role="status"></p>';$('readStory').onclick=()=>readStory(text);$('storyReady').onclick=()=>{stopStory();if(mg===g&&!paused)askFact()};

}

function visual(){const n=5+L()*2,icons=['🌷','🌻','🌹','🌼','🌺','🌸'],a=choose(icons),d=choose(icons.filter(x=>x!==a)),index=rnd(0,n-1),list=Array.from({length:n},(_,i)=>({v:String(i),h:i===index?a:d}));question(T('Find the different flower.','找出不同的花朵。'),list,String(index));$('mp').querySelector('.gridm').style.setProperty('--c',Math.min(5,Math.ceil(Math.sqrt(n))))}
Object.assign(window.MindGardenExtras,{shopping,routine,related,calendar,money,story,visual,order:()=>picturePattern(['🌱','🌿','🌷','🌻','🌹','🌺']),place});
// A consistent description is visible before choosing a level.
const descriptions={numbers:['Larger numbers, closer alternatives and multi-step rules.','更大的数字、更接近的选项与多步规律。'],memory:['Longer sequences and more details to remember.','更长的顺序与更多需要记住的细节。'],words:['Longer words, related alternatives and analogies.','更长的词语、相关选项与类比。'],other:['More items, finer categories and longer patterns.','更多项目、更细的分类与更长的规律。']};
function describe(type){return T(...descriptions[['num','sum','tbl','add','sub','cnt','money','calendar','time','clk'].includes(type)?'numbers':['seq','miss','rem','shopping','story'].includes(type)?'memory':['wrd','pic','wm','related'].includes(type)?'words':'other'])}
const oldChoose=window.chooseMiniLevel;window.chooseMiniLevel=function(type){oldChoose(type);const select=$('difficultyChoice');if(select){const p=document.createElement('p');p.className='difficulty-guide';p.textContent=describe(type);select.closest('label').after(p)}};
window.MindGardenDifficulty={level,options,pattern,patternFamilies,describe};
})();
