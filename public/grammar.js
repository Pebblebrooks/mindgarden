/* English agreement for app-authored copy only; never walk or rewrite user text. */
(function(){'use strict';
const forms={files:'file',photos:'photo',videos:'video',tracks:'track',events:'event',records:'record',entries:'entry',movements:'movement',matches:'match',choices:'choice',repetitions:'repetition',repeats:'repeat',days:'day',games:'game',players:'player',rounds:'round',participants:'participant',minutes:'minute',seconds:'second',activities:'activity',items:'item',questions:'question',pairs:'pair',steps:'step',points:'point',turns:'turn',stars:'star',flowers:'flower',moves:'move',answers:'answer',details:'detail',attempts:'attempt',hints:'hint',levels:'level',sessions:'session',pictures:'picture',tiles:'tile',cards:'card'};
function text(value){return String(value).replace(/(?<![\w.,−-])1(\s+)(files|photos|videos|tracks|events|records|entries|movements|matches|choices|repetitions|repeats|days|games|players|rounds|participants|minutes|seconds|activities|items|questions|pairs|steps|points|turns|stars|flowers|moves|answers|details|attempts|hints|levels|sessions|pictures|tiles|cards)\b/g,(_,space,word)=>'1'+space+forms[word]);}
function count(n,one,many,zh){return window.save?.lang==='zh'?n+zh:n+' '+(Number(n)===1?one:many);}
function unit(n,one,many){return Number(n)===1?one:many;}
window.MindGardenGrammar={text,count,unit};
})();
