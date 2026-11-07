/* Original bilingual Mind Garden reflections; selected by local calendar date. */
(function(){
'use strict';
const quotes=[
['Small steps can make a beautiful day.','小小的脚步，也能走出美好的一天。'],
['There is room for a little joy today.','今天，给一点快乐留个位置。'],
['Rest is part of growing.','休息，也是成长的一部分。'],
['A kind word can brighten someone’s path.','一句温柔的话，可以照亮别人的路。'],
['You can begin again at your own pace.','你可以按自己的节奏，重新开始。'],
['Notice one small thing that makes you smile.','留意一件让你微笑的小事。'],
['Every season has something gentle to offer.','每个季节，都有一份温柔的馈赠。'],
['Your presence brings something special to this day.','有你的今天，多了一份独特的美好。'],
['Make a little space for something you enjoy.','留一点时间，做自己喜欢的事。'],
['A quiet moment can be a lovely gift to yourself.','一个安静的片刻，是送给自己的礼物。'],
['Curiosity can open a new window at any age.','无论几岁，好奇心都能打开一扇新窗。'],
['The care you give has value, even in small ways.','哪怕是小小的关心，也有它的价值。'],
['Let today have its own rhythm.','让今天，拥有自己的节奏。'],
['A familiar song can make an ordinary moment warmer.','一首熟悉的歌，让平凡的时刻更温暖。'],
['You do not need to hurry to enjoy the view.','欣赏眼前的风景，不必匆忙。'],
['A little laughter belongs in the day.','让今天，也有一点笑声。'],
['There is something worth noticing just around you.','就在身边，有值得留意的小美好。'],
['Sharing a memory can start a new conversation.','分享一段回忆，可以开启新的交谈。'],
['Give yourself the kindness you offer others.','把给予别人的温柔，也留一份给自己。'],
['A fresh page does not need to be a perfect page.','新的一页，不必是完美的一页。'],
['Your favourite things are worth making time for.','喜欢的事，值得为它留出时间。'],
['The garden grows a little at a time. So can we.','花园一点一点成长，我们也可以。'],
['A gentle hello can be the start of connection.','一声轻轻的问候，可以拉近彼此。'],
['Let a small success be enough for today.','今天，小小的进步就很好。'],
['There is no single right pace for a good day.','美好的一天，没有统一的速度。'],
['A moment of wonder can arrive in familiar places.','熟悉的地方，也会带来惊喜。'],
['You are allowed to pause and simply be here.','你可以停一停，安心享受此刻。'],
['Something lovely may be waiting in an ordinary moment.','平凡的片刻里，也许藏着美好。'],
['The stories you carry are part of what makes you you.','你珍藏的故事，组成了独特的你。'],
['Today can hold both quiet and possibility.','今天，可以有宁静，也可以有新的可能。'],
['Take a little joy with you into the rest of your day.','带上一点快乐，继续今天的旅程。']
];
function forDate(date=new Date()){const day=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);return quotes[((day%quotes.length)+quotes.length)%quotes.length]}
function render(){const caption=document.getElementById('dailyCaption');if(!caption)return;let card=document.getElementById('dailyQuote');if(!card){card=document.createElement('figure');card.id='dailyQuote';card.className='daily-quote';caption.after(card)}const zh=save.lang==='zh';const q=forDate()[zh?1:0];card.innerHTML='<figcaption>'+ (zh?'今日寄语':'A thought for today')+'</figcaption><blockquote>'+q+'</blockquote><cite>'+ (zh?'心灵花园 · 原创寄语':'Mind Garden · Original reflection')+'</cite>';card.setAttribute('lang',zh?'zh-CN':'en')}
let timer;function schedule(){clearTimeout(timer);const now=new Date(),next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);timer=setTimeout(()=>{render();schedule()},next-now+100)}
new MutationObserver(render).observe(document.getElementById('welcomeDashboard'),{childList:true});window.addEventListener('gardenPlayerChange',render);document.addEventListener('visibilitychange',()=>{if(!document.hidden){render();schedule()}});window.MindGardenQuotes={forDate,render};render();schedule();
})();
