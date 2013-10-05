CodeMirror.defineMode("http",function(){function a(a,b){return a.skipToEnd(),b.cur=g,"error"}function b(b,d){return b.match(/^HTTP\/\d\.\d/)?(d.cur=c,"keyword"):b.match(/^[A-Z]+/)&&/[ \t]/.test(b.peek())?(d.cur=e,"keyword"):a(b,d)}function c(b,c){var f,e=b.match(/^\d+/);return e?(c.cur=d,f=Number(e[0]),f>=100&&200>f?"positive informational":f>=200&&300>f?"positive success":f>=300&&400>f?"positive redirect":f>=400&&500>f?"negative client-error":f>=500&&600>f?"negative server-error":"error"):a(b,c)}function d(a,b){return a.skipToEnd(),b.cur=g,null}function e(a,b){return a.eatWhile(/\S/),b.cur=f,"string-2"}function f(b,c){return b.match(/^HTTP\/\d\.\d$/)?(c.cur=g,"keyword"):a(b,c)}function g(a){return a.sol()&&!a.eat(/[ \t]/)?a.match(/^.*?:/)?"atom":(a.skipToEnd(),"error"):(a.skipToEnd(),"string")}function h(a){return a.skipToEnd(),null}return{token:function(a,b){var c=b.cur;return c!=g&&c!=h&&a.eatSpace()?null:c(a,b)},blankLine:function(a){a.cur=h},startState:function(){return{cur:b}}}}),CodeMirror.defineMIME("message/http","http");