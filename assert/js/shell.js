CodeMirror.defineMode("shell",function(){function b(b,c){var e,d=c.split(" ");for(e=0;e<d.length;e++)a[d[e]]=b}function c(b,c){var i,g=b.sol(),h=b.next();return"'"===h||'"'===h||"`"===h?(c.tokens.unshift(d(h)),f(b,c)):"#"===h?g&&b.eat("!")?(b.skipToEnd(),"meta"):(b.skipToEnd(),"comment"):"$"===h?(c.tokens.unshift(e),f(b,c)):"+"===h||"="===h?"operator":"-"===h?(b.eat("-"),b.eatWhile(/\w/),"attribute"):/\d/.test(h)&&(b.eatWhile(/\d/),!/\w/.test(b.peek()))?"number":(b.eatWhile(/[\w-]/),i=b.current(),"="===b.peek()&&/\w+/.test(i)?"def":a.hasOwnProperty(i)?a[i]:null)}function d(a){return function(b,c){for(var d,f=!1,g=!1;null!=(d=b.next());){if(d===a&&!g){f=!0;break}if("$"===d&&!g&&"'"!==a){g=!0,b.backUp(1),c.tokens.unshift(e);break}g=!g&&"\\"===d}return(f||!g)&&c.tokens.shift(),"`"===a||")"===a?"quote":"string"}}function f(a,b){return(b.tokens[0]||c)(a,b)}var e,a={};return b("atom","true false"),b("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),b("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh"),e=function(a,b){b.tokens.length>1&&a.eat("$");var c=a.next(),e=/\w/;return"{"===c&&(e=/[^}]/),"("===c?(b.tokens[0]=d(")"),f(a,b)):(/\d/.test(c)||(a.eatWhile(e),a.eat("}")),b.tokens.shift(),"def")},{startState:function(){return{tokens:[]}},token:function(a,b){return a.eatSpace()?null:f(a,b)}}}),CodeMirror.defineMIME("text/x-sh","shell");