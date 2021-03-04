/*! For license information please see main.73a5f21ca3f4e5a1a11c.bundle.js.LICENSE.txt */
(self.webpackChunkslides_powershell_is_awesome=self.webpackChunkslides_powershell_is_awesome||[]).push([[179],{6727:(e,n,t)=>{var r=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof a?new a(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,s;switch(t=t||{},r.util.type(n)){case"Object":if(s=r.util.objId(n),t[s])return t[s];for(var o in a={},t[s]=a,n)n.hasOwnProperty(o)&&(a[o]=e(n[o],t));return a;case"Array":return s=r.util.objId(n),t[s]?t[s]:(a=[],t[s]=a,n.forEach((function(n,r){a[r]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var s=(a=a||r.languages)[e],o={};for(var i in s)if(s.hasOwnProperty(i)){if(i==n)for(var l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(i)||(o[i]=s[i])}var u=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(n,t){t===u&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,a,s){s=s||{};var o=r.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],a||i);var l=n[i],u=r.util.type(l);"Object"!==u||s[o(l)]?"Array"!==u||s[o(l)]||(s[o(l)]=!0,e(l,t,i,s)):(s[o(l)]=!0,e(l,t,null,s))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var s,o=0;s=a.elements[o++];)r.highlightElement(s,!0===n,a.callback)},highlightElement:function(t,a,s){var o=r.util.getLanguage(t),i=r.languages[o];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+o;var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(n,"").replace(/\s+/g," ")+" language-"+o);var u={element:t,language:o,grammar:i,code:t.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),s&&s.call(u.element)}if(r.hooks.run("before-sanity-check",u),!u.code)return r.hooks.run("complete",u),void(s&&s.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var p=new Worker(r.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,n,t){var s={code:e,grammar:n,language:t};return r.hooks.run("before-tokenize",s),s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),a.stringify(r.util.encode(s.tokens),s.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return l(a,a.head,e),o(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,s=0;a=t[s++];)a(n)}},Token:a};function a(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function s(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var s=a[1].length;a.index+=s,a[0]=a[0].slice(s)}return a}function o(e,n,t,i,c,p){for(var d in t)if(t.hasOwnProperty(d)&&t[d]){var g=t[d];g=Array.isArray(g)?g:[g];for(var h=0;h<g.length;++h){if(p&&p.cause==d+","+h)return;var f=g[h],m=f.inside,b=!!f.lookbehind,k=!!f.greedy,v=f.alias;if(k&&!f.pattern.global){var y=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,y+"g")}for(var w=f.pattern||f,S=i.next,x=c;S!==n.tail&&!(p&&x>=p.reach);x+=S.value.length,S=S.next){var P=S.value;if(n.length>e.length)return;if(!(P instanceof a)){var C,O=1;if(k){if(!(C=s(w,x,e,b)))break;var E=C.index,A=C.index+C[0].length,F=x;for(F+=S.value.length;E>=F;)F+=(S=S.next).value.length;if(x=F-=S.value.length,S.value instanceof a)continue;for(var _=S;_!==n.tail&&(F<A||"string"==typeof _.value);_=_.next)O++,F+=_.value.length;O--,P=e.slice(x,F),C.index-=x}else if(!(C=s(w,0,P,b)))continue;E=C.index;var D=C[0],M=P.slice(0,E),j=P.slice(E+D.length),N=x+P.length;p&&N>p.reach&&(p.reach=N);var T=S.prev;if(M&&(T=l(n,T,M),x+=M.length),u(n,T,O),S=l(n,T,new a(d,m?r.tokenize(D,m):D,v,D)),j&&l(n,S,j),O>1){var z={cause:d+","+h,reach:N};o(e,n,t,S.prev,x,z),p&&z.reach>p.reach&&(p.reach=z.reach)}}}}}}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function l(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function u(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=r,a.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var s={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},o=n.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),r.hooks.run("wrap",s);var i="";for(var l in s.attributes)i+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+i+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,s=t.code,o=t.immediateClose;e.postMessage(r.highlight(s,r.languages[a],a)),o&&e.close()}),!1),r):r;var c=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(c&&(r.filename=c.src,c.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var d=document.readyState;"loading"===d||"interactive"===d&&c&&c.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),void 0!==t.g&&(t.g.Prism=r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,t){return"(?:"+n[+t]+")"}))}function t(e,t,r){return RegExp(n(e,t),r||"")}function r(e,n){for(var t=0;t<n;t++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",s="class enum interface struct",o="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",i="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=l(s),c=RegExp(l(a+" "+s+" "+o+" "+i)),p=l(s+" "+o+" "+i),d=l(a+" "+s+" "+i),g=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=r(/\((?:[^()]|<<self>>)*\)/.source,2),f=/@?\b[A-Za-z_]\w*\b/.source,m=n(/<<0>>(?:\s*<<1>>)?/.source,[f,g]),b=n(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,m]),k=/\[\s*(?:,\s*)*\]/.source,v=n(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[b,k]),y=n(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,h,k]),w=n(/\(<<0>>+(?:,<<0>>+)+\)/.source,[y]),S=n(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,b,k]),x={keyword:c,punctuation:/[<>()?,.:[\]]/},P=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,C=/"(?:\\.|[^\\"\r\n])*"/.source,O=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:t(/(^|[^$\\])<<0>>/.source,[O]),lookbehind:!0,greedy:!0},{pattern:t(/(^|[^@$\\])<<0>>/.source,[C]),lookbehind:!0,greedy:!0},{pattern:RegExp(P),greedy:!0,alias:"character"}],"class-name":[{pattern:t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[b]),lookbehind:!0,inside:x},{pattern:t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[f,S]),lookbehind:!0,inside:x},{pattern:t(/(\busing\s+)<<0>>(?=\s*=)/.source,[f]),lookbehind:!0},{pattern:t(/(\b<<0>>\s+)<<1>>/.source,[u,m]),lookbehind:!0,inside:x},{pattern:t(/(\bcatch\s*\(\s*)<<0>>/.source,[b]),lookbehind:!0,inside:x},{pattern:t(/(\bwhere\s+)<<0>>/.source,[f]),lookbehind:!0},{pattern:t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[v]),lookbehind:!0,inside:x},{pattern:t(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[S,d,f]),inside:x}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t(/([(,]\s*)<<0>>(?=\s*:)/.source,[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:x},"return-type":{pattern:t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[S,b]),inside:x,alias:"class-name"},"constructor-invocation":{pattern:t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[S]),lookbehind:!0,inside:x,alias:"class-name"},"generic-method":{pattern:t(/<<0>>\s*<<1>>(?=\s*\()/.source,[f,g]),inside:{function:t(/^<<0>>/.source,[f]),generic:{pattern:RegExp(g),alias:"class-name",inside:x}}},"type-list":{pattern:t(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,m,f,S,c.source]),lookbehind:!0,inside:{keyword:c,"class-name":{pattern:RegExp(S),greedy:!0,inside:x},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=C+"|"+P,A=n(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[E]),F=r(n(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[A]),2),_=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,D=n(/<<0>>(?:\s*\(<<1>>*\))?/.source,[b,F]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[_,D]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t(/^<<0>>(?=\s*:)/.source,[_]),alias:"keyword"},"attribute-arguments":{pattern:t(/\(<<0>>*\)/.source,[F]),inside:e.languages.csharp},"class-name":{pattern:RegExp(b),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var M=/:[^}\r\n]+/.source,j=r(n(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[A]),2),N=n(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[j,M]),T=r(n(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[E]),2),z=n(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[T,M]);function L(n,r){return{interpolation:{pattern:t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[n]),lookbehind:!0,inside:{"format-string":{pattern:t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[r,M]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[N]),lookbehind:!0,greedy:!0,inside:L(N,j)},{pattern:t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[z]),lookbehind:!0,greedy:!0,inside:L(z,T)}]})}(r),r.languages.dotnet=r.languages.cs=r.languages.csharp,r.languages.fsharp=r.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,number:[/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,/\b0b[01]+(?:y|uy)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/}),r.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/^[^\r\n\S]*#.*/m,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}}),r.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}}),r.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:r.languages.fsharp}}}}),function(e){var n=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},t=n.string[0].inside;t.boolean=n.boolean,t.variable=n.variable,t.function.inside=n}(r),function(e){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,t=0;t<2;t++)n=n.replace(/<self>/g,(function(){return n}));n=n.replace(/<self>/g,(function(){return/[^\s\S]/.source})),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(r),setInterval((()=>r.highlightAll()),100)},2463:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>i,backgrounds:()=>l,fragmentSteps:()=>u,fusumaProps:()=>c,default:()=>d});var r=t(7401),a=t(9332),s=(t(108),t(6465));function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const i=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"PowerShell"),(0,a.kt)("h3",null,"It is probably more useful than you think 😉"),(0,a.kt)("div",{className:"grid sns-box"},(0,a.kt)("a",{href:"https://twitter.com/jhwohlgemuth",className:"account account-twitter","aria-label":"account-twitter"},(0,a.kt)(s.fWC,null)),(0,a.kt)("a",{href:"https://github.com/jhwohlgemuth",className:"account account-github","aria-label":"account-github"},(0,a.kt)(s.hJX,null)),(0,a.kt)("a",{href:"https://www.linkedin.com/in/jhwohlgemuth",className:"account account-linkedin","aria-label":"account-linkedin"},(0,a.kt)(s.ltd,null))))],l=[0],u=[0],c=[{classes:"title",sectionTitle:"😃 Introduction"}],p={};function d({components:e,...n}){return(0,a.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"PowerShell"),(0,a.kt)("h3",null,"It is probably more useful than you think 😉"))}d.isMDXComponent=!0},9934:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"What is PowerShell?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"...a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1"},"PowerShell Documentation")))),e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"In other words, PowerShell is..."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A typed programming language focused on the user and installed on Windows by default"))),e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h2",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$credential = Get-ChildItem Cert:\\CurrentUser\\My | ? { $_.FriendlyName -like "Digital Signature" }\n')))],i=[0,0,0],l=[0,0,0],u=[{sectionTitle:"🤓 What is PowerShell?"},{},{}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"What is PowerShell?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"...a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1"},"PowerShell Documentation"))),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"In other words, PowerShell is..."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A typed programming language focused on the user and installed on Windows by default")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$credential = Get-ChildItem Cert:\\CurrentUser\\My | ? { $_.FriendlyName -like "Digital Signature" }\n')))}p.isMDXComponent=!0},9316:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"Why PowerShell"))],i=[0],l=[0],u=[{sectionTitle:"😎 Why PowerShell?"}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Why PowerShell"))}p.isMDXComponent=!0},2776:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"PowerShell is Cross Platform"))],i=[0],l=[0],u=[{sectionTitle:"🤝 Cross Platform"}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"PowerShell is Cross Platform"))}p.isMDXComponent=!0},3998:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"PowerShell has built-in XML and CSV support"))],i=[0],l=[0],u=[{sectionTitle:"🤖 XML and CSV Support"}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"PowerShell has built-in XML and CSV support"))}p.isMDXComponent=!0},5214:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"PowerShell can use C# (and F#)"))],i=[0],l=[0],u=[{sectionTitle:"PowerShell 🧡 .NET"}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"PowerShell can use C# (and F#)"))}p.isMDXComponent=!0},2:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"#PowerShell is sustainable"))],i=[0],l=[0],u=[{}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#PowerShell is sustainable"))}p.isMDXComponent=!0},4263:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"Case Study: Prelude"))],i=[0],l=[0],u=[{}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Case Study: Prelude"))}p.isMDXComponent=!0},5232:(e,n,t)=>{"use strict";t.r(n),t.d(n,{slides:()=>o,backgrounds:()=>i,fragmentSteps:()=>l,fusumaProps:()=>u,default:()=>p});var r=t(7401),a=t(9332);t(108);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("h1",null,"The End"))],i=[0],l=[0],u=[{sectionTitle:"😵 Closing"}],c={};function p({components:e,...n}){return(0,a.kt)("wrapper",s({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"The End"))}p.isMDXComponent=!0},5516:(e,n,t)=>{"use strict";t.r(n)},3447:(e,n,t)=>{var r={"./0-intro.md":2463,"./01-content.mdx":9934,"./02-content.md":9316,"./03-content.md":2776,"./04-content.md":3998,"./05-content.md":5214,"./06-content.md":2,"./07-prelude.md":4263,"./08-closing.md":5232};function a(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=3447}},function(e){"use strict";var n;n=e.x,e.x=()=>{var t=n();return e.E(921),e.E(626),t}},[[7751,666,736],[3724,666,736],[6727,666,736],[9969,666,736]]]);