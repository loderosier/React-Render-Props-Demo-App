!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","prop-types"],e):e(t.Viewport={},t.React,t.PropTypes)}(this,function(t,e,n){"use strict";function r(t,e){return t(e={exports:{}},e.exports),e.exports}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o=Math.ceil,i=Math.floor,c=function(t){return isNaN(t=+t)?0:(t>0?i:o)(t)},u=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},l=r(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),a=r(function(t){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)}),f=function(t,e,n){if(function(e){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},s=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t},h=function(t){try{return!!t()}catch(t){return!0}};function d(){return 7}var y=!h(function(){return 7!=Object.defineProperty({},"a",{get:d}).a}),v=l.document,b=s(v)&&s(v.createElement),w=function(t){return b?v.createElement(t):{}};function m(){return 7}var g=!y&&!h(function(){return 7!=Object.defineProperty(w("div"),"a",{get:m}).a}),O=function(t,e){if(!s(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!s(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},S=Object.defineProperty,j={f:y?Object.defineProperty:function(t,e,n){if(p(t),e=O(e,!0),p(n),g)try{return S(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},_=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},P=y?function(t,e,n){return j.f(t,e,_(1,n))}:function(t,e,n){return t[e]=n,t},E="prototype";function T(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[E]=t[E],e}var C=function t(e,n,r){var o,i,c,u=e&t.F,s=e&t.G,p=e&t.S,h=e&t.P,d=e&t.B,y=e&t.W,v=s?a:a[n]||(a[n]={}),b=v[E],w=s?l:p?l[n]:(l[n]||{})[E];for(o in s&&(r=n),r)(i=!u&&w&&void 0!==w[o])&&o in v||(c=i?w[o]:r[o],v[o]=s&&"function"!=typeof w[o]?r[o]:d&&i?f(c,l):y&&w[o]==c?T(c):h&&"function"==typeof c?f(Function.call,c):c,h&&((v.virtual||(v.virtual={}))[o]=c,e&t.R&&b&&!b[o]&&P(b,o,c)))};C.F=1,C.G=2,C.S=4,C.P=8,C.B=16,C.W=32,C.U=64,C.R=128;var V=C,L=P,A={}.hasOwnProperty,x=function(t,e){return A.call(t,e)},F={},Y={}.toString,X=function(t){return Y.call(t).slice(8,-1)},R=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==X(t)?t.split(""):Object(t)},M=function(t){return R(u(t))},N=Math.min,k=Math.max,I=Math.min,D=l["__core-js_shared__"]||(l["__core-js_shared__"]={}),z=function(t){return D[t]||(D[t]={})},W=0,q=Math.random(),G=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++W+q).toString(36))},H=z("keys"),U=function(t){return H[t]||(H[t]=G(t))},B=function(t,e,n){for(var r,o=M(t),i=(r=o.length)>0?N(c(r),9007199254740991):0,u=function(t,e){return 0>(t=c(t))?k(t+e,0):I(t,e)}(n,i);i>u;u++)if(u in o&&o[u]===e)return u||0;return-1},J=U("IE_PROTO"),K=function(t,e){var n,r=M(t),o=0,i=[];for(n in r)n!=J&&x(r,n)&&i.push(n);for(;e.length>o;)x(r,n=e[o++])&&(~B(i,n)||i.push(n));return i},Q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Z=Object.keys||function(t){return K(t,Q)},$=y?Object.defineProperties:function(t,e){p(t);for(var n,r=Z(e),o=r.length,i=0;o>i;)j.f(t,n=r[i++],e[n]);return t},tt=l.document,et=tt&&tt.documentElement,nt=U("IE_PROTO"),rt=function(){},ot=function(){var t,e=w("iframe"),n=Q.length;for(e.style.display="none",et.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ot=t.F;n--;)delete ot.prototype[Q[n]];return ot()},it=Object.create||function(t,e){var n;return null!==t?(rt.prototype=p(t),n=new rt,rt.prototype=null,n[nt]=t):n=ot(),void 0===e?n:$(n,e)},ct=r(function(t){var e=z("wks"),n=l.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:G)("Symbol."+t))}).store=e}),ut=j.f,lt=ct("toStringTag"),at=function(t,e,n){t&&!x(t=n?t:t.prototype,lt)&&ut(t,lt,{configurable:!0,value:e})},ft={};P(ft,ct("iterator"),function(){return this});var st=function(t,e,n){t.prototype=it(ft,{next:_(1,n)}),at(t,e+" Iterator")},pt=function(t){return Object(u(t))},ht=U("IE_PROTO"),dt=Object.prototype,yt=Object.getPrototypeOf||function(t){return t=pt(t),x(t,ht)?t[ht]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?dt:null},vt=ct("iterator"),bt=!([].keys&&"next"in[].keys()),wt=function(){return this},mt=function(t,e,n,r,o,i,c){st(n,e,r);var u,l,a,f=function(t){if(!bt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},s=e+" Iterator",p="values"==o,h=!1,d=t.prototype,y=d[vt]||d["@@iterator"]||o&&d[o],v=!bt&&y||f(o),b=o?p?f("entries"):v:void 0,w="Array"==e&&d.entries||y;if(w&&(a=yt(w.call(new t)))!==Object.prototype&&a.next&&at(a,s,!0),p&&y&&"values"!==y.name&&(h=!0,v=function(){return y.call(this)}),c&&(bt||h||!d[vt])&&P(d,vt,v),F[e]=v,F[s]=wt,o)if(u={values:p?v:f("values"),keys:i?v:f("keys"),entries:b},c)for(l in u)l in d||L(d,l,u[l]);else V(V.P+V.F*(bt||h),e,u);return u},gt=function(t,e){var n,r,o=u(t)+"",i=c(e),l=o.length;return 0>i||i>=l?"":55296>(n=o.charCodeAt(i))||n>56319||i+1===l||56320>(r=o.charCodeAt(i+1))||r>57343?o.charAt(i):o.slice(i,i+2)};mt(String,"String",function(t){this._t=t+"",this._i=0},function(){var t,e=this._t,n=this._i;return e.length>n?(t=gt(e,n),this._i+=t.length,{value:t,done:!1}):{value:void 0,done:!0}});var Ot=function(t,e){return{value:e,done:!!t}};mt(Array,"Array",function(t,e){this._t=M(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return t&&t.length>n?Ot(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]]):(this._t=void 0,Ot(1))},"values"),F.Arguments=F.Array;for(var St=ct("toStringTag"),jt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),_t=0;jt.length>_t;_t++){var Pt=jt[_t],Et=l[Pt],Tt=Et&&Et.prototype;Tt&&!Tt[St]&&P(Tt,St,Pt),F[Pt]=F.Array}var Ct={f:ct},Vt=Ct.f("iterator");function Lt(){return!0}var At=r(function(t){var e=G("meta"),n=j.f,r=0,o=Object.isExtensible||Lt,i=!h(function(){return o(Object.preventExtensions({}))}),c=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}})},u=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!x(t,e)){if(!o(t))return"F";if(!n)return"E";c(t)}return t[e].i},getWeak:function(t,n){if(!x(t,e)){if(!o(t))return!0;if(!n)return!1;c(t)}return t[e].w},onFreeze:function(t){return i&&u.NEED&&o(t)&&!x(t,e)&&c(t),t}}}),xt=j.f,Ft=function(t){var e=a.Symbol||(a.Symbol={});"_"==t.charAt(0)||t in e||xt(e,t,{value:Ct.f(t)})},Yt={f:Object.getOwnPropertySymbols},Xt={f:{}.propertyIsEnumerable},Rt=Array.isArray||function(t){return"Array"==X(t)},Mt=Q.concat("length","prototype"),Nt={f:Object.getOwnPropertyNames||function(t){return K(t,Mt)}},kt=Nt.f,It={}.toString,Dt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],zt={f:function(t){return Dt&&"[object Window]"==It.call(t)?function(t){try{return kt(t)}catch(t){return Dt.slice()}}(t):kt(M(t))}},Wt=Object.getOwnPropertyDescriptor,qt={f:y?Wt:function(t,e){if(t=M(t),e=O(e,!0),g)try{return Wt(t,e)}catch(t){}if(x(t,e))return _(!Xt.f.call(t,e),t[e])}},Gt=At.KEY,Ht=qt.f,Ut=j.f,Bt=zt.f,Jt=l.Symbol,Kt=l.JSON,Qt=Kt&&Kt.stringify,Zt=ct("_hidden"),$t=ct("toPrimitive"),te={}.propertyIsEnumerable,ee=z("symbol-registry"),ne=z("symbols"),re=z("op-symbols"),oe=Object.prototype,ie="function"==typeof Jt,ce=l.QObject,ue=!ce||!ce.prototype||!ce.prototype.findChild;function le(){return Ut(this,"a",{value:7}).a}var ae=y&&h(function(){return 7!=it(Ut({},"a",{get:le})).a})?function(t,e,n){var r=Ht(oe,e);r&&delete oe[e],Ut(t,e,n),r&&t!==oe&&Ut(oe,e,r)}:Ut,fe=function(t){var e=ne[t]=it(Jt.prototype);return e._k=t,e},se=ie&&"symbol"==typeof Jt.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof Jt},pe=function(t,e,n){return t===oe&&pe(re,e,n),p(t),e=O(e,!0),p(n),x(ne,e)?(n.enumerable?(x(t,Zt)&&t[Zt][e]&&(t[Zt][e]=!1),n=it(n,{enumerable:_(0,!1)})):(x(t,Zt)||Ut(t,Zt,_(1,{})),t[Zt][e]=!0),ae(t,e,n)):Ut(t,e,n)},he=function(t,e){p(t);for(var n,r=function(t){var e=Z(t),n=Yt.f;if(n)for(var r,o=n(t),i=Xt.f,c=0;o.length>c;)i.call(t,r=o[c++])&&e.push(r);return e}(e=M(e)),o=0,i=r.length;i>o;)pe(t,n=r[o++],e[n]);return t},de=function(t,e){if(t=M(t),e=O(e,!0),t!==oe||!x(ne,e)||x(re,e)){var n=Ht(t,e);return!n||!x(ne,e)||x(t,Zt)&&t[Zt][e]||(n.enumerable=!0),n}},ye=function(t){for(var e,n=Bt(M(t)),r=[],o=0;n.length>o;)x(ne,e=n[o++])||e==Zt||e==Gt||r.push(e);return r},ve=function(t){for(var e,n=t===oe,r=Bt(n?re:M(t)),o=[],i=0;r.length>i;)!x(ne,e=r[i++])||n&&!x(oe,e)||o.push(ne[e]);return o};ie||(L((Jt=function(){if(this instanceof Jt)throw TypeError("Symbol is not a constructor!");var t=G(arguments.length>0?arguments[0]:void 0);return y&&ue&&ae(oe,t,{configurable:!0,set:function e(n){this===oe&&e.call(re,n),x(this,Zt)&&x(this[Zt],t)&&(this[Zt][t]=!1),ae(this,t,_(1,n))}}),fe(t)}).prototype,"toString",function(){return this._k}),qt.f=de,j.f=pe,Nt.f=zt.f=ye,Xt.f=function(t){var e=te.call(this,t=O(t,!0));return!(this===oe&&x(ne,t)&&!x(re,t))&&(!(e||!x(this,t)||!x(ne,t)||x(this,Zt)&&this[Zt][t])||e)},Yt.f=ve,Ct.f=function(t){return fe(ct(t))}),V(V.G+V.W+V.F*!ie,{Symbol:Jt});for(var be="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),we=0;be.length>we;)ct(be[we++]);for(var me=Z(ct.store),ge=0;me.length>ge;)Ft(me[ge++]);V(V.S+V.F*!ie,"Symbol",{for:function(t){return x(ee,t+="")?ee[t]:ee[t]=Jt(t)},keyFor:function(t){if(!se(t))throw TypeError(t+" is not a symbol!");for(var e in ee)if(ee[e]===t)return e},useSetter:function(){ue=!0},useSimple:function(){ue=!1}}),V(V.S+V.F*!ie,"Object",{create:function(t,e){return void 0===e?it(t):he(it(t),e)},defineProperty:pe,defineProperties:he,getOwnPropertyDescriptor:de,getOwnPropertyNames:ye,getOwnPropertySymbols:ve}),Kt&&V(V.S+V.F*(!ie||h(function(){var t=Jt();return"[null]"!=Qt([t])||"{}"!=Qt({a:t})||"{}"!=Qt(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(s(e)||void 0!==t)&&!se(t))return Rt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!se(e))return e}),r[1]=e,Qt.apply(Kt,r)}}),Jt.prototype[$t]||P(Jt.prototype,$t,Jt.prototype.valueOf),at(Jt,"Symbol"),at(Math,"Math",!0),at(l.JSON,"JSON",!0),Ft("asyncIterator"),Ft("observable");var Oe=a.Symbol;function Se(t){return typeof t}function je(t){return t&&"function"==typeof Oe&&t.constructor===Oe&&t!==Oe.prototype?"symbol":typeof t}var _e=r(function(t){function e(t){return(e="function"==typeof Oe&&"symbol"==typeof Vt?Se:je)(t)}function n(t){return e(t)}function r(t){return t&&"function"==typeof Oe&&t.constructor===Oe&&t!==Oe.prototype?"symbol":e(t)}function o(i){return t.exports=o="function"==typeof Oe&&"symbol"===e(Vt)?n:r,o(i)}t.exports=o});function Pe(t,e){if((t=t&&!t.nodeType?t[0]:t)&&1===t.nodeType){var n=t.getBoundingClientRect();return void 0===e||null===e?n:((e="object"===_e(e)?e:{top:e,right:e,bottom:e,left:e}).top=e.top||0,e.right=e.right||0,e.bottom=e.bottom||0,e.left=e.left||0,{top:e.top+n.top,right:e.right+n.right,bottom:e.bottom+n.bottom,left:e.left+n.left,width:e.left+n.pad.right+n.width,height:e.top+e.bottom+n.height})}}var Ee,Te="undefined"!=typeof window&&window,Ce="undefined"!=typeof document&&document,Ve=Ce&&Ce.documentElement||Ce&&Ce.body,Le=Te&&Te.screen;function Ae(){return{width:Ve.clientWidth,height:Ve.clientHeight}}function xe(){var t=Ae(),e=t.width,n=t.height;return{top:0,right:e,bottom:n,left:0,width:e,height:n}}function Fe(t){if(void 0!==(t=t===Te?xe():Pe(t)))return t.width/t.height}function Ye(t){var e=t.width,n=t.height;return e>n?"landscape":e===n?"square":"portrait"}function Xe(t,e,n,r){Ee||(Ee="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),e&&o)for(var c in o)void 0===e[c]&&(e[c]=o[c]);else e||(e=o||{});if(1===i)e.children=r;else if(i>1){for(var u=Array(i),l=0;i>l;l++)u[l]=arguments[l+3];e.children=u}return{$$typeof:Ee,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function Re(){return(Re=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Me(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Ne(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var ke,Ie,De,ze=ct("toStringTag"),We="Arguments"==X(function(){return arguments}()),qe=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ze))?n:We?X(e):"Object"==(r=X(e))&&"function"==typeof e.callee?"Arguments":r},Ge=ct("iterator"),He=a.isIterable=function(t){var e=Object(t);return void 0!==e[Ge]||"@@iterator"in e||F.hasOwnProperty(qe(e))},Ue=ct("iterator"),Be=a.getIteratorMethod=function(t){if(void 0!=t)return t[Ue]||t["@@iterator"]||F[qe(t)]},Je=a.getIterator=function(t){var e=Be(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return p(e.call(t))},Ke=function(t,e){if(Array.isArray(t))return t;if(He(Object(t)))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=Je(t);!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};(De={})[ke="getPrototypeOf"]=(Ie=(a.Object||{})[ke]||Object[ke],function(t){return yt(pt(t))}),V(V.S+V.F*h(function(){Ie(1)}),"Object",De);var Qe=a.Object.getPrototypeOf,Ze=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};V(V.S+V.F*!y,"Object",{defineProperty:j.f});var $e=a.Object,tn=function(t,e,n){return $e.defineProperty(t,e,n)};function en(t,e){for(var n=0;e.length>n;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),tn(t,r.key,r)}}var nn=function(t,e){if(e&&("object"===_e(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},rn=function(t,e){if(p(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},on={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=f(Function.call,qt.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return rn(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:rn};V(V.S,"Object",{setPrototypeOf:on.set});var cn=a.Object.setPrototypeOf;V(V.S,"Object",{create:it});var un=a.Object,ln=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function an(){this.removeAllEvents()}function fn(){return this.props.children(this.renderProps)}var sn=function(t){function n(t){var e;return Ze(this,n),e=nn(this,(n.__proto__||Qe(n)).call(this,t)),Object.defineProperty(ln(e),"listeners",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(ln(e),"addEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(t,n,r){e.listeners.push([t,n,r]),t.addEventListener(n,r)}}),Object.defineProperty(ln(e),"removeEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(t,n,r){t.removeEventListener(n,r);for(var o=0;e.listeners.length>o;o++){var i=Ke(e.listeners[o],3);t===i[0]&&n===i[1]&&r===i[2]&&e.listeners.splice(o,1)}}}),Object.defineProperty(ln(e),"removeAllEvents",{configurable:!0,enumerable:!0,writable:!0,value:function(t){for(var n=0;e.listeners.length>n;n++){var r=Ke(e.listeners[n],3),o=r[0];t&&o!==t||(o.removeEventListener(r[1],r[2]),e.listeners.splice(n,1))}}}),e.renderProps={addEvent:e.addEvent,removeEvent:e.removeEvent,removeAllEvents:e.removeAllEvents},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=un.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(cn?cn(t,e):t.__proto__=e)}(n,e.Component),r=n,(o=[{key:"componentWillUnmount",value:an},{key:"render",value:fn}])&&en(r.prototype,o),n;var r,o}(),pn=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),hn=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window);function dn(t){var e;function n(){if(void 0===e){for(var n=arguments.length,r=Array(n),o=0;n>o;o++)r[o]=arguments[o];e=hn(function(n,r){return function(){e=void 0,t.apply(n,r)}}(this,r))}}return n.cancel=function(){void 0!==e&&pn(e)},n}function yn(){this.props.addEvent(Te,"resize",this.setSize),this.props.addEvent(Te,"orientationchange",this.setSize)}function vn(){this.setSize.cancel()}function bn(){var t;return this.props.withCoords?(t=Ae()).aspect=Fe(Te):t={getAspect:Fe,getSize:Ae},this.props.children(t)}var wn=function(t){function e(){for(var e,n,r=arguments.length,o=Array(r),i=0;r>i;i++)o[i]=arguments[i];return e=n=t.call.apply(t,[this].concat(o))||this,Object.defineProperty(Ne(n),"setSize",{configurable:!0,enumerable:!0,writable:!0,value:dn(function(){return n.forceUpdate()})}),e||Ne(n)}Me(e,t);var n=e.prototype;return n.componentDidMount=yn,n.componentWillUnmount=vn,n.render=bn,e}(e.Component);function mn(t){return Xe(sn,{},void 0,function(n){return e.createElement(wn,Re({},n,{withCoords:t.withCoords,children:t.children}))})}Object.defineProperty(wn,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"ViewportSize"}),Object.defineProperty(wn,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{withCoords:!0}});var gn=Le&&Le.orientation&&Le.orientation.type;function On(t){return mn({withCoords:t.withCoords,children:function(e){return e.orientation=Ye(e),e.screenOrientation=gn?Le.orientation.type:null,t.children(e)}})}function Sn(t,e){var n={x:(t.scrollX||0)>e.scrollX?-1:t.scrollX===e.scrollX?0:1,y:(t.scrollY||0)>e.scrollY?-1:t.scrollY===e.scrollY?0:1};return t.direction&&n.x===t.direction.x&&n.y===t.direction.y?t.direction:n}function jn(t,e){var n={x:e.scrollX-t.scrollX,y:e.scrollY-t.scrollY};return t.distance&&n.x===t.distance.x&&n.y===t.distance.y?t.distance:n}On.propTypes={children:n.func.isRequired};var _n=window&&window.performance?window.performance:Date;function Pn(t){return typeof t}function En(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}function Tn(t){return(Tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Pn:En)(t)}function Cn(t){return t}function Vn(t,e,n){return t+(e-t)*n}function Ln(t,e,n){var r;if("object"===Tn(t))for(var o in r=Array.isArray(t)?[]:{},t)r[o]=Vn(t[o],e[o],n);else r=Vn(t,e,n);return r}var An=function(t,e,n){return[Pe(t,n),e===Te?xe():Pe(e)]};function xn(t,e,n){var r=An(t,e,n),o=r[0];return void 0!==o&&o.right>0&&r[1].width>o.left}function Fn(t,e,n){var r=An(t,e,n),o=r[0];return void 0!==o&&o.bottom>0&&r[1].height>o.top}function Yn(t,e,n){var r=An(t,e,n),o=r[0],i=r[1];return void 0!==o&&o.bottom>0&&i.height>o.top&&o.right>0&&i.width>o.left}function Xn(t,e,n){var r=An(t,e,n),o=r[0],i=r[1];return void 0!==o&&void 0!==i&&i.width-o.width>=0&&o.left>=i.left&&i.right>=o.right}function Rn(t,e,n){var r=An(t,e,n),o=r[0],i=r[1];return void 0!==o&&void 0!==i&&i.height-o.height>=0&&o.top>=i.top&&i.bottom>=o.bottom}function Mn(t,e,n){var r=An(t,e,n),o=r[0],i=r[1];return void 0!==o&&void 0!==i&&!(0>i.width-o.width||0>i.height-o.height||i.left>o.left||o.right>i.right||i.top>o.top||o.bottom>i.bottom)}var Nn={inViewX:function(t,e){return xn(t,Te,e)},inViewY:function(t,e){return Fn(t,Te,e)},inView:function(t,e){return Yn(t,Te,e)},inFullViewX:function(t,e){return Xn(t,Te,e)},inFullViewY:function(t,e){return Rn(t,Te,e)},inFullView:function(t,e){return Mn(t,Te,e)}};function kn(t){return t.children(Nn)}function In(){return{scrollX:void 0!==Te.scrollX?Te.scrollX:Te.pageXOffset,scrollY:void 0!==Te.scrollY?Te.scrollY:Te.pageYOffset}}function Dn(t,e,n){if("object"!=typeof n)Te.scrollTo(t,e);else{var r=In();i=n,c=(o=Te)===window?window.scrollTo:function(t,e){o.scrollTop=e,o.scrollLeft=t},function(t,e){var n=e.from,r=void 0===n?0:n,o=e.to,i=void 0===o?1:o,c=e.duration,u=void 0===c?240:c,l=e.timing,a=void 0===l?Cn:l,f=_n.now(),s=f+u;!function e(){var n=1-(s-_n.now())/(s-f),o=a(n);n>1?t(Ln(r,i,o>1?1:o)):(hn(e),t(Ln(r,i,o)))}()}(function(t){c(t.x,t.y)},{from:{x:r.scrollX,y:r.scrollY},to:{x:t,y:e},duration:i.duration,timing:i.timing})}var o,i,c}function zn(){this.setScroll.cancel()}function Wn(){var t=In(),e=this.prevState;if(!0===this.props.withCoords){this.viewportScrollContext.scrollX=t.scrollX,this.viewportScrollContext.scrollY=t.scrollY;var n=jn(e,t),r=Sn(e,t);this.viewportScrollContext.distance=n,this.viewportScrollContext.direction=r,t.distance=n,t.direction=r}else this.viewportScrollContext.getScroll=In,this.viewportScrollContext.getDistance=function(){return jn(e,t)},this.viewportScrollContext.getDirection=function(){return Sn(e,t)};return this.prevState=t,this.props.children(this.viewportScrollContext)}kn.propTypes={children:n.func.isRequired};var qn=function(t){function e(e){var n;return n=t.call(this,e)||this,Object.defineProperty(Ne(n),"scrollTo",{configurable:!0,enumerable:!0,writable:!0,value:Dn}),Object.defineProperty(Ne(n),"setScroll",{configurable:!0,enumerable:!0,writable:!0,value:dn(function(){return n.forceUpdate()})}),e.addEvent(Te,"scroll",n.setScroll),n.viewportScrollContext={scrollTo:n.scrollTo},n.prevState={},n}Me(e,t);var n=e.prototype;return n.componentWillUnmount=zn,n.render=Wn,e}(e.Component);function Gn(t){return Xe(sn,{},void 0,function(n){return e.createElement(qn,Re({},n,{withCoords:t.withCoords,children:t.children}))})}Object.defineProperty(qn,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"ViewportScroll"}),Object.defineProperty(qn,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{withCoords:!0}});var Hn={SCROLL_X:1,SCROLL_Y:2,SCROLL:3,WIDTH:4,HEIGHT:8,SIZE:12,ANY:15,NONE:16},Un=e.createContext({width:null,height:null,aspect:null,orientation:null,screenOrientation:null,scrollX:null,scrollY:null,scrollTo:null,inView:null,inViewX:null,inViewY:null,inFullView:null,inFullViewX:null,inFullViewY:null},function(t,e){return t.scrollY!==e.scrollY?t.scrollX!==e.scrollX?Hn.SCROLL:Hn.SCROLL_Y:t.scrollX!==e.scrollX?Hn.SCROLL_X:t.width!==e.width?t.height!==e.height?Hn.SIZE:Hn.WIDTH:t.height!==e.height?Hn.HEIGHT:Hn.NONE});function Bn(t){var e=t.children,n=t.withCoords,r=void 0===n||n,o=Object.assign({},Nn),i={withCoords:r},c={withCoords:r};return!0===r?(i.children=function(t){return o.scrollTo=t.scrollTo,o.scrollX=t.scrollX,o.scrollY=t.scrollY,o.distance=t.distance,o.direction=t.direction,e(o)},c.children=function(t){return o.orientation=t.orientation,o.screenOrientation=t.screenOrientation,o.aspect=t.aspect,o.height=t.height,o.width=t.width,Gn(i)}):(i.children=function(t){return o.scrollTo=t.scrollTo,o.getScroll=t.getScroll,o.getDistance=t.getDistance,o.getDirection=t.getDirection,e(o)},c.children=function(t){return o.getSize=t.getSize,o.getAspect=t.getAspect,o.orientation=t.orientation,o.screenOrientation=t.screenOrientation,Gn(i)}),On(c)}Bn.propTypes={children:n.func.isRequired,withCoords:n.bool},t.ViewportOrientation=On,t.ViewportSize=mn,t.ViewportScroll=Gn,t.ViewportQueries=kn,t.ViewportContext=Un,t.ViewportProvider=function(t){var e={};return Bn({children:function(n){return e.scrollY===n.scrollY&&e.aspect===n.aspect&&e.scrollX===n.scrollX||(e=n={inFullView:n.inFullView,inFullViewX:n.inFullViewX,inFullViewY:n.inFullViewY,inView:n.inView,inViewX:n.inViewX,inViewY:n.inViewY,scrollTo:n.scrollTo,scrollX:n.scrollX,scrollY:n.scrollY,direction:n.direction,distance:n.distance,orientation:n.orientation,screenOrientation:n.screenOrientation,height:n.height,width:n.width,aspect:n.aspect}),Xe(Un.Provider,{value:n},void 0,t.children)}})},t.ViewportConsumer=function(t){return Xe(Un.Consumer,{unstable_observedBits:void 0===t.observe?Hn.ANY:t.observe,children:function(e){return null===e.inView?Bn(t):t.children(e)}})},t.default=Bn,t.inViewX=xn,t.inViewY=Fn,t.inView=Yn,t.inFullViewX=Xn,t.inFullViewY=Rn,t.inFullView=Mn,t.observe=Hn,t.getSize=Ae,t.getRect=xe,t.getOrientation=Ye,t.getAspect=Fe,Object.defineProperty(t,"__esModule",{value:!0})});
