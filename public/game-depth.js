/* Progression revision 2: bounded content rotation and truthful pre-game rules. */
(function(){'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b),recent=new Map();
function fresh(key,make){key=[save.cp,save.lang,key].join('|');const seen=recent.get(key)||[];let value,signature;for(let i=0;i<30;i++){value=make();signature=JSON.stringify(value);if(!seen.includes(signature))break}seen.push(signature);recent.set(key,seen.slice(-12));if(recent.size>150)recent.delete(recent.keys().next().value);return value}
const pairMode=d=>d>=10?'related':d>=6?'words':'same';
function preview(r){const d=r.difficulty,band=Math.min(4,Math.floor((d-1)/3));let text;
const rules={
 pairs:()=>T('Find '+[3,4,6,8,10,12][r.native-1]+' pairs. '+((r.pairMode||pairMode(d))==='related'?'Match related objects, such as a key and a lock.':(r.pairMode||pairMode(d))==='words'?'Match each picture to its word.':'Match identical pictures.'),'找出 '+[3,4,6,8,10,12][r.native-1]+' 对。'+((r.pairMode||pairMode(d))==='related'?'匹配相关物品，例如钥匙与锁。':(r.pairMode||pairMode(d))==='words'?'将图片与词语配对。':'匹配相同图片。')),
 seq:()=>T('Remember '+(2+Math.floor((d-1)/2))+' cues; '+(d>=11?'repeat in reverse order.':'repeat in the same order.'),'记住 '+(2+Math.floor((d-1)/2))+' 个提示，'+(d>=11?'按相反顺序重复。':'按原顺序重复。')),
 recall:()=>T('Recall '+(r.recallMode==='numbers'?2+Math.ceil(d/2):Math.min(8,1+Math.ceil(d/2)))+' items '+(d>=10?'in reverse order.':'in the same order.'),'回忆 '+(r.recallMode==='numbers'?2+Math.ceil(d/2):Math.min(8,1+Math.ceil(d/2)))+' 项，'+(d>=10?'按相反顺序回答。':'按原顺序回答。')),
 pathways:()=>T((Math.min(5,3+Math.floor((d-1)/5)))+' × '+Math.min(5,3+Math.floor((d-1)/5))+' path. '+(d>=7?'Connect through '+(d>=12?3:1)+' star checkpoints.':d<=4?'Some route tiles start in place; hints remain available.':'Find a route among distracting tiles.'),Math.min(5,3+Math.floor((d-1)/5))+' × '+Math.min(5,3+Math.floor((d-1)/5))+' 路径。'+(d>=7?'连接时须经过'+(d>=12?3:1)+'个星标检查点。':d<=4?'部分路径已归位，随时可用提示。':'从干扰方块中找出路线。')),
 dominoes:()=>T(d>=10?'Plan both open ends: your friend chooses moves that preserve future options.':d>=6?'Your friend now prioritises higher-value tiles.':'Learn matching ends with a smaller hand and dot set.',d>=10?'规划两端点数：伙伴会选择保留后续出牌机会的走法。':d>=6?'伙伴现在优先打出高点数骨牌。':'用较少手牌和点数学习匹配两端。'),
 bingo:()=>T(d>=11?'Match two called names before the next call.':d>=6?'Find each picture from its written name, without a picture cue.':'Match a picture cue to your board.',d>=11?'匹配两个叫到的名称后，才能叫下一组。':d>=6?'根据文字名称找图片，不再显示图片提示。':'将图片提示与棋盘配对。'),
 sayings:()=>T(d>=12?'Interpret the meaning of each saying.':d>=8?'Alternate familiar endings with meaning questions.':'Complete familiar sayings from shuffled choices.',d>=12?'理解每句谚语的含义。':d>=8?'交替练习补全谚语和理解含义。':'从打乱的选项中补全熟悉谚语。'),
 links:()=>T('Connect '+Math.min(5,2+Math.ceil(d/4))+' pairs on a '+(d<=4?4:d<=9?5:6)+'-square-wide board. Routes vary; they cannot cross.','在每行'+(d<=4?4:d<=9?5:6)+'格的棋盘连接'+Math.min(5,2+Math.ceil(d/4))+'对。路线会变化，不能交叉。'),
 drawmemory:()=>T(d>=7?'Remember a rotated shape and its orientation. Drawing tolerance stays forgiving.':'Remember a familiar outline. Draw it or choose a shape.',d>=7?'记住旋转后的图形及方向，画图容错保持宽松。':'记住熟悉的轮廓，可画图或选择图形。'),
 shopping:()=>T(d>=11?'Update one item on the list before recalling its position.':d>=8?'Recall an item’s exact position.':'Remember which items were on the shopping list.',d>=11?'先更新清单中的一项，再回忆其位置。':d>=8?'回忆物品的准确位置。':'记住哪些物品在购物清单上。'),
 rem:()=>T(d>=10?'Remember a sequence, then identify a position counted from the end.':'Remember the pictures and identify a position.',d>=10?'记住序列，然后从末尾倒数找出指定位置。':'记住图片，找出指定位置。'),
 story:()=>T(d>=11?'Recall details and connect events before and after the phone call.':'Read a varied story and recall '+Math.min(8,2+Math.ceil((d-1)/2))+' details.',d>=11?'回忆细节，并关联通话前后的事件。':'阅读不同故事，回忆'+Math.min(8,2+Math.ceil((d-1)/2))+'项细节。'),
 hawker:()=>T(d>=10?'Remember the order, then serve it in reverse.':'Remember and serve an increasingly varied food order.',d>=10?'记住餐单，然后按相反顺序出餐。':'记住并准备越来越多样的餐单。'),
 trail:()=>T(d>=10?'Remember the route, then retrace it in reverse.':'Remember a route with more stops.',d>=10?'记住路线，然后沿相反顺序返回。':'记住有更多站点的路线。'),
 melody:()=>T(d>=11?'Listen at the same pace, then repeat the notes backwards.':'Remember a longer note pattern; playback speed stays the same.',d>=11?'以相同速度聆听，然后倒序重复音符。':'记住更长的音符序列，播放速度保持不变。'),
 dots:()=>T('Join the dots on varied outlines. Clear spacing is preserved as the target count grows.','连接不同轮廓的点，目标数量增加时仍保持清晰间距。'),
 jigsaw:()=>T('Swap pieces on a '+(r.native===1?3:4)+' × '+Math.min(6,2+Math.floor((d-1)/3))+' board. Preview and undo remain available.','在'+(r.native===1?3:4)+' × '+Math.min(6,2+Math.floor((d-1)/3))+'的棋盘交换拼图，随时可查看原图和撤销。'),
 spot:()=>T(d>=10?'Compare finer changes across varied garden scenes.':'Find '+Math.min(8,2+Math.ceil(d/2))+' changes across varied garden scenes.',d>=10?'比较不同花园场景中的细微变化。':'找出不同花园场景中的'+Math.min(8,2+Math.ceil(d/2))+'处变化。'),
 sounds:()=>T('Identify recordings among '+Math.min(5,2+Math.ceil(d/4))+' choices. Replay and skipping remain available.','从'+Math.min(5,2+Math.ceil(d/4))+'个选项辨认录音，可重听或跳过。'),
 today:()=>T('Practise dates and time using your selected time zone. Higher levels add calendar reasoning.','按所选时区练习日期和时间，较高关卡加入日历推理。'),
 foodknow:()=>T(d>=8?'Apply kitchen knowledge and compare food groups.':'Recognise foods, groups and familiar ingredients.',d>=8?'应用厨房常识，比较食物类别。':'辨认食物、类别及常见原料。'),
 localnews:()=>T('Recall source-backed event details; later levels include time and event relationships. Content rotates only when a new verified pack is available.','回忆有来源的活动细节，后期加入时间和事件关系题。仅在有新核实资料时更新内容。'),
 album:()=>T('Study familiar photos with names, then match them from a larger choice set.','学习熟悉照片与名字，然后从更多选项中配对。'),
 teamgarden:()=>T(d>=8?'Count only the requested flower among distractions; take turns without a timer.':'Take turns counting flowers and growing a shared garden.',d>=8?'只数指定的花朵，忽略干扰项，轮流进行且不限时。':'轮流数花，共同种植花园。')
};
text=rules[r.id]?.()||window.MindGardenDifficulty.describe(r.id);
if(r.range==='gentle')text+=' '+T('Gentle mode revisits core skills with fresh content; advanced rules stay off.','轻松模式用新内容巩固基础技能，不启用高阶规则。');
return text;
}
window.MindGardenDepth={fresh,pairMode,preview};
})();
