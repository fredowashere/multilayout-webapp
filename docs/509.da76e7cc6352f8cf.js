(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[509],{60338:(ee,O,t)=>{"use strict";t.d(O,{QA:()=>u,hd:()=>r});var o=t(94650),p=t(90433),l=t(36895),f=t(27574);const h={provide:p.JU,useExisting:(0,o.Gpc)(()=>r),multi:!0};class r{constructor(e,s,d){this._renderer=e,this._elementRef=s,this._compositionMode=d,this.textMaskConfig={mask:[],guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1},this.onChange=m=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function a(){const n=(0,l.q)()?(0,l.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}ngOnChanges(e){this._setupMask(!0),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(this.inputElement.value)}writeValue(e){this._setupMask(),this._renderer.setProperty(this.inputElement,"value",e??""),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&(this._setupMask(),void 0!==this.textMaskInputElement&&(this.textMaskInputElement.update(e),this.onChange(e=this.inputElement.value)))}_setupMask(e=!1){this.inputElement||(this.inputElement="INPUT"===this._elementRef.nativeElement.tagName.toUpperCase()?this._elementRef.nativeElement:this._elementRef.nativeElement.getElementsByTagName("INPUT")[0]),this.inputElement&&e&&(this.textMaskInputElement=(0,f.createTextMaskInputElement)(Object.assign({inputElement:this.inputElement},this.textMaskConfig)))}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this._handleInput(e)}}r.\u0275fac=function(e){return new(e||r)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(p.ve,8))},r.\u0275dir=o.lG2({type:r,selectors:[["","textMask",""]],hostBindings:function(e,s){1&e&&o.NdJ("input",function(m){return s._handleInput(m.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(m){return s._compositionEnd(m.target.value)})},inputs:{textMaskConfig:["textMask","textMaskConfig"]},exportAs:["textMask"],features:[o._Bn([h]),o.TTD]});class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({})},31509:(ee,O,t)=>{"use strict";t.d(O,{m:()=>d});var o=t(36895),p=t(12682),l=t(90433),f=t(80529),M=t(15127),g=t(60338),h=t(15861);function a(m){return new Promise(i=>setTimeout(()=>i(1),m))}var r=t(94650);function u(m,i){if(1&m&&(r.TgZ(0,"div",2),r._uU(1),r.qZA()),2&m){const k=i.$implicit;r.xp6(1),r.hij(" ",k," ")}}class s{constructor(){this._text="loading",this.chars=this._text.split(""),this.i=0,this.stop=!1}set text(i){this._text=i,this.chars=i.split("")}ngAfterViewInit(){this.lliList=[...document.querySelectorAll(".lli-item")],document.querySelector(".lli-list").style.width=32*this.lliList.length+8*(this.lliList.length-1)+"px",this.positions=Array(this.lliList.length).fill(0).map((i,k)=>40*k),this.loop()}ngOnDestroy(){this.stop=!0}loop(){var i=this;return(0,h.Z)(function*(){if(i.stop)return;for(let y=0;y<i.lliList.length;y++)i.lliList[(y+i.i)%i.lliList.length].style.left=i.positions[y]+"px";yield a(300);const k=i.lliList[i.i%i.lliList.length];k.classList.add("lli-item--active");for(let y=0;y<i.lliList.length;y++)yield a(300),i.lliList[(y+i.i+1)%i.lliList.length].style.left=i.positions[y]+"px";k.style.left=i.positions[i.lliList.length-1]+"px",yield a(300),k.classList.remove("lli-item--active"),i.i++,i.loop()})()}}s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-linear-loading-indicator"]],inputs:{text:"text"},standalone:!0,features:[r.jDz],decls:2,vars:1,consts:[[1,"lli-list"],["class","lli-item",4,"ngFor","ngForOf"],[1,"lli-item"]],template:function(i,k){1&i&&(r.TgZ(0,"div",0),r.YNc(1,u,2,1,"div",1),r.qZA()),2&i&&(r.xp6(1),r.Q6J("ngForOf",k.chars))},dependencies:[o.ez,o.sg],styles:[".lli-list[_ngcontent-%COMP%]{position:relative;height:32px;margin:0 auto}.lli-item[_ngcontent-%COMP%]{position:absolute;width:32px;height:32px;display:grid;place-items:center;background:rgba(var(--app-primary_500),1);box-shadow:0 0 10px #0002;color:rgba(var(--app-gray_0),1);font-weight:700;top:0;left:0;text-transform:uppercase;transition:border-radius .3s ease,top .3s ease,left .3s ease}.lli-item.lli-item--active[_ngcontent-%COMP%]{background:rgba(var(--app-primary_200),1);border-radius:50%;top:-40px}"]});class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[o.ez,f.JF,M.Bz,l.u5,l.UX,p.IJ,g.QA,s,f.JF,M.Bz,l.u5,l.UX,p.IJ,g.QA]})},27574:function(ee){ee.exports=function(O){function t(p){if(o[p])return o[p].exports;var l=o[p]={exports:{},id:p,loaded:!1};return O[p].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var o={};return t.m=O,t.c=o,t.p="",t(0)}([function(O,t,o){"use strict";function p(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return p(l).default}});var f=o(2);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return p(f).default}});var M=o(5);Object.defineProperty(t,"createTextMaskInputElement",{enumerable:!0,get:function(){return p(M).default}})},function(O,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(O,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function o(f){var M=f.previousConformedValue,g=void 0===M?l:M,h=f.previousPlaceholder,a=void 0===h?l:h,r=f.currentCaretPosition,u=void 0===r?0:r,n=f.conformedValue,e=f.rawValue,s=f.placeholderChar,d=f.placeholder,m=f.indexesOfPipedChars,i=void 0===m?p:m,k=f.caretTrapIndexes,y=void 0===k?p:k;if(0===u||!e.length)return 0;var x=g.length,I=d.length,b=n.length,A=e.length-x,_=A>0;if(A>1&&!_&&0!==x)return u;var C=0,W=void 0,w=void 0;if(!_||g!==n&&n!==d){var R=n.toLowerCase(),v=e.toLowerCase().substr(0,u).split(l).filter(function(T){return-1!==R.indexOf(T)});w=v[v.length-1];var Z=a.substr(0,v.length).split(l).filter(function(T){return T!==s}).length,L=d.substr(0,v.length).split(l).filter(function(T){return T!==s}).length;!_&&(L!==Z||void 0!==a[v.length-1]&&void 0!==d[v.length-2]&&a[v.length-1]!==s&&a[v.length-1]!==d[v.length-1]&&a[v.length-1]===d[v.length-2])&&Z>0&&d.indexOf(w)>-1&&void 0!==e[u]&&(W=!0,w=e[u]);for(var G=i.map(function(T){return R[T]}).filter(function(T){return T===w}).length,z=v.filter(function(T){return T===w}).length,K=d.substr(0,d.indexOf(s)).split(l).filter(function(T,q){return T===w&&e[q]!==T}).length+z+G+(W?1:0),H=0,V=0;V<b&&(C=V+1,R[V]===w&&H++,!(H>=K));V++);}else C=u-A;if(_){for(var S=C,E=C;E<=I;E++)if(d[E]===s&&(S=E),d[E]===s||-1!==y.indexOf(E)||E===I)return S}else if(W){for(var U=C-1;U>=0;U--)if(n[U]===w||-1!==y.indexOf(U)||0===U)return U}else for(var j=C;j>=0;j--)if(d[j-1]===s||-1!==y.indexOf(j)||0===j)return j};var p=[],l=""},function(O,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};t.default=function p(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,f.isArray)(r)){if((typeof r>"u"?"undefined":l(r))!==M.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(a,u),r=(0,f.processCaretTraps)(r).maskWithoutCaretTraps}var n=u.guide,e=void 0===n||n,s=u.previousConformedValue,d=void 0===s?h:s,m=u.placeholderChar,i=void 0===m?M.placeholderChar:m,k=u.placeholder,y=void 0===k?(0,f.convertMaskToPlaceholder)(r,i):k,x=u.keepCharPositions,I=!1===e&&void 0!==d,b=a.length,A=d.length,_=y.length,$=r.length,D=b-A,F=D>0,C=u.currentCaretPosition+(F?-D:0),W=C+Math.abs(D);if(!0===x&&!F){for(var w=h,R=C;R<W;R++)y[R]===i&&(w+=i);a=a.slice(0,C)+w+a.slice(C,b)}for(var N=a.split(h).map(function(U,j){return{char:U,isNew:j>=C&&j<W}}),P=b-1;P>=0;P--){var v=N[P].char;v!==i&&v===y[P>=C&&A===$?P-D:P]&&N.splice(P,1)}var L=h,Y=!1;e:for(var B=0;B<_;B++){var J=y[B];if(J===i){if(N.length>0)for(;N.length>0;){var G=N.shift(),z=G.char,Q=G.isNew;if(z===i&&!0!==I){L+=i;continue e}if(r[B].test(z)){if(!0===x&&!1!==Q&&d!==h&&!1!==e&&F){for(var K=N.length,H=null,V=0;V<K;V++){var X=N[V];if(X.char!==i&&!1===X.isNew)break;if(X.char===i){H=V;break}}null!==H?(L+=z,N.splice(H,1)):B--}else L+=z;continue e}Y=!0}!1===I&&(L+=y.substr(B,_));break}L+=J}if(I&&!1===F){for(var S=null,E=0;E<L.length;E++)y[E]===i&&(S=E);L=null!==S?L.substr(0,S+1):h}return{conformedValue:L,meta:{someCharsRejected:Y}}};var f=o(4),M=o(1),g=[],h=""},function(O,t,o){"use strict";function l(n){return Array.isArray&&Array.isArray(n)||n instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.placeholderChar;if(!l(n))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==n.indexOf(e))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(e)+"\n\nThe mask that was received is: "+JSON.stringify(n));return n.map(function(s){return s instanceof RegExp?e:s}).join("")},t.isArray=l,t.isString=function f(n){return"string"==typeof n||n instanceof String},t.isNumber=function M(n){return"number"==typeof n&&void 0===n.length&&!isNaN(n)},t.isNil=function g(n){return typeof n>"u"||null===n},t.processCaretTraps=function h(n){for(var e=[],s=void 0;-1!==(s=n.indexOf(u));)e.push(s),n.splice(s,1);return{maskWithoutCaretTraps:n,indexes:e}};var a=o(1),r=[],u="[]"},function(O,t,o){"use strict";function p(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(t,"__esModule",{value:!0});var g=Object.assign||function(c){for(var x=1;x<arguments.length;x++){var I=arguments[x];for(var b in I)Object.prototype.hasOwnProperty.call(I,b)&&(c[b]=I[b])}return c},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};t.default=function l(c){var x={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:x,update:function(I){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,A=b.inputElement,_=b.mask,$=b.guide,D=b.pipe,F=b.placeholderChar,C=void 0===F?s.placeholderChar:F,W=b.keepCharPositions,w=void 0!==W&&W,R=b.showMask,N=void 0!==R&&R;if(typeof I>"u"&&(I=A.value),I!==x.previousConformedValue){(typeof _>"u"?"undefined":h(_))===i&&void 0!==_.pipe&&void 0!==_.mask&&(D=_.pipe,_=_.mask);var P=void 0,v=void 0;if(_ instanceof Array&&(P=(0,e.convertMaskToPlaceholder)(_,C)),!1!==_){var Z=function M(c){if((0,e.isString)(c))return c;if((0,e.isNumber)(c))return String(c);if(null==c)return d;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(c))}(I),L=A.selectionEnd,Y=x.previousConformedValue,B=x.previousPlaceholder,J=void 0;if((typeof _>"u"?"undefined":h(_))===s.strFunction){if(!1===(v=_(Z,{currentCaretPosition:L,previousConformedValue:Y,placeholderChar:C})))return;var G=(0,e.processCaretTraps)(v);J=G.indexes,P=(0,e.convertMaskToPlaceholder)(v=G.maskWithoutCaretTraps,C)}else v=_;var K={previousConformedValue:Y,guide:$,placeholderChar:C,pipe:D,placeholder:P,currentCaretPosition:L,keepCharPositions:w},V=(0,n.default)(Z,v,K).conformedValue,X=(typeof D>"u"?"undefined":h(D))===s.strFunction,S={};X&&(!1===(S=D(V,g({rawValue:Z},K)))?S={value:Y,rejected:!0}:(0,e.isString)(S)&&(S={value:S}));var E=X?S.value:V,U=(0,r.default)({previousConformedValue:Y,previousPlaceholder:B,conformedValue:E,placeholder:P,rawValue:Z,currentCaretPosition:L,placeholderChar:C,indexesOfPipedChars:S.indexesOfPipedChars,caretTrapIndexes:J}),q=E===P&&0===U?N?P:d:E;x.previousConformedValue=q,x.previousPlaceholder=P,A.value!==q&&(A.value=q,function f(c,x){document.activeElement===c&&(k?y(function(){return c.setSelectionRange(x,x,m)},0):c.setSelectionRange(x,x,m))}(A,U))}}}}};var r=p(o(2)),n=p(o(3)),e=o(4),s=o(1),d="",m="none",i="object",k=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),y=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout}])},15861:(ee,O,t)=>{"use strict";function o(l,f,M,g,h,a,r){try{var u=l[a](r),n=u.value}catch(e){return void M(e)}u.done?f(n):Promise.resolve(n).then(g,h)}function p(l){return function(){var f=this,M=arguments;return new Promise(function(g,h){var a=l.apply(f,M);function r(n){o(a,g,h,r,u,"next",n)}function u(n){o(a,g,h,r,u,"throw",n)}r(void 0)})}}t.d(O,{Z:()=>p})}}]);