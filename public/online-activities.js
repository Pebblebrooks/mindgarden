(function(){
// Deterministic question sets shared by the browser and server. Answers use stable IDs.
const onlineActivities=[
 {id:'times8',en:'Times tables · 8 questions',zh:'乘法练习 · 8题'},
 {id:'gaps8',en:'Missing number · 8 questions',zh:'缺失数字 · 8题'},
 {id:'change8',en:'Market change · 8 questions',zh:'购物找零 · 8题'},
 {id:'calendar8',en:'Calendar day · 8 questions',zh:'星期推算 · 8题'},
 {id:'shapes8',en:'Shape patterns · 8 questions',zh:'形状规律 · 8题'},
 {id:'picture8',en:'Find the picture · 8 questions',zh:'找出图片 · 8题'},
 {id:'words8',en:'Match the word · 8 questions',zh:'匹配词语 · 8题'},
 {id:'groups8',en:'Same group · 8 questions',zh:'同一类别 · 8题'}
];
const pictureWords=[['apple','🍎','Apple','苹果','fruit'],['banana','🍌','Banana','香蕉','fruit'],['grapes','🍇','Grapes','葡萄','fruit'],['orange','🍊','Orange','橙子','fruit'],['dog','🐶','Dog','狗','animal'],['cat','🐱','Cat','猫','animal'],['rabbit','🐰','Rabbit','兔子','animal'],['turtle','🐢','Turtle','乌龟','animal'],['car','🚗','Car','汽车','transport'],['train','🚂','Train','火车','transport'],['bus','🚌','Bus','巴士','transport'],['bicycle','🚲','Bicycle','自行车','transport'],['rose','🌹','Rose','玫瑰','flower'],['tulip','🌷','Tulip','郁金香','flower'],['sunflower','🌻','Sunflower','向日葵','flower'],['hibiscus','🌺','Hibiscus','扶桑花','flower']];
function rng(seed){let x=seed>>>0;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
function mixed(a,r){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function makeOnlineQuestions(mode,seed,round){if(!onlineActivities.some(x=>x.id===mode))return null;const r=rng((seed^Math.imul(round,0x9E3779B1))>>>0),num=(a,b)=>a+Math.floor(r()*(b-a+1)),pick=a=>a[num(0,a.length-1)],questions=[];
 function number(prompt,answer){const options=mixed([answer,...mixed([answer+1,answer+2,answer+3,answer+5,answer-1,answer-2].filter(v=>v>=0),r).slice(0,3)],r).map(String);return {prompt,answer:String(answer),options}}
 for(let i=0;i<8;i++){let q;
  if(mode==='times8'){const a=num(2,9),b=num(2,9);q=number([a+' × '+b+' = ?',a+' × '+b+' = ?'],a*b)}
  if(mode==='gaps8'){const a=num(2,30),b=num(1,20);q=number([a+' + ? = '+(a+b),a+' + ? = '+(a+b)],b)}
  if(mode==='change8'){const paid=pick([10,20,50]),cost=num(1,paid-1);q=number(['An item costs $'+cost+'. You pay $'+paid+'. How much change?','物品售价$'+cost+'，付$'+paid+'，应找回多少？'],paid-cost)}
  if(mode==='calendar8'){const en=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],zh=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],day=num(0,6),offset=num(1,6),answer=(day+offset)%7;const options=mixed([answer,...mixed([0,1,2,3,4,5,6].filter(v=>v!==answer),r).slice(0,3)],r).map(String);q={prompt:['Today is '+en[day]+'. What day is it '+offset+' days later?','今天是'+zh[day]+'，'+offset+'天后是星期几？'],answer:String(answer),options,labels:Object.fromEntries(options.map(v=>[v,[en[+v],zh[+v]]]))}}
  if(mode==='shapes8'){const shapes=mixed(['●','■','▲','◆','★'],r),pattern=pick([[0,1],[0,0,1],[0,1,2],[0,1,1]]),sequence=Array.from({length:6},(_,j)=>shapes[pattern[j%pattern.length]]),answer=shapes[pattern[6%pattern.length]];q={prompt:['Which shape comes next? '+sequence.join(' ')+' ?','下一个形状是什么？'+sequence.join(' ')+' ?'],answer,options:mixed([answer,...shapes.filter(v=>v!==answer).slice(0,3)],r)}}
  if(mode==='picture8'||mode==='words8'){const pool=mixed(pictureWords,r).slice(0,4),target=pick(pool);q={prompt:mode==='picture8'?['Find the '+target[2].toLowerCase()+'.','找出'+target[3]+'。']:['Which word matches '+target[1]+'?','哪个词语与'+target[1]+'相配？'],answer:target[0],options:pool.map(x=>x[0]),labels:Object.fromEntries(pool.map(x=>[x[0],mode==='picture8'?[x[1],x[1]]:[x[2],x[3]]]))}}
  if(mode==='groups8'){const target=pick(pictureWords),answer=pick(pictureWords.filter(v=>v[4]===target[4]&&v[0]!==target[0])),pool=mixed([answer,...mixed(pictureWords.filter(v=>v[4]!==target[4]),r).slice(0,3)],r);q={prompt:['Which picture is in the same group as '+target[1]+'?','哪张图片与'+target[1]+'属于同一类别？'],answer:answer[0],options:pool.map(x=>x[0]),labels:Object.fromEntries(pool.map(x=>[x[0],[x[1],x[1]]]))}}
  questions.push(q);
 }
 return questions;
}

window.MindGardenOnlineActivities={activities:onlineActivities,questions:makeOnlineQuestions};
})();
