!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","prop-types"],e):e(t.Viewport={},t.React,t.PropTypes)}(this,function(t,e,r){"use strict";function n(t,e){return t(e={exports:{}},e.exports),e.exports}e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r;var o=Math.ceil,i=Math.floor,u=function(t){return isNaN(t=+t)?0:(t>0?i:o)(t)},c=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},l=n(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),f=n(function(t){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)}),a=function(t,e,r){if(function(e){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},s=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t},h=function(t){try{return!!t()}catch(t){return!0}};function d(){return 7}var y=!h(function(){return 7!=Object.defineProperty({},"a",{get:d}).a}),v=l.document,b=s(v)&&s(v.createElement),w=function(t){return b?v.createElement(t):{}};function m(){return 7}var g=!y&&!h(function(){return 7!=Object.defineProperty(w("div"),"a",{get:m}).a}),O=function(t,e){if(!s(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!s(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!s(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!s(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},S=Object.defineProperty,j={f:y?Object.defineProperty:function(t,e,r){if(p(t),e=O(e,!0),p(r),g)try{return S(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},_=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},P=y?function(t,e,r){return j.f(t,e,_(1,r))}:function(t,e,r){return t[e]=r,t},E="prototype";function C(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[E]=t[E],e}var T=function t(e,r,n){var o,i,u,c=e&t.F,s=e&t.G,p=e&t.S,h=e&t.P,d=e&t.B,y=e&t.W,v=s?f:f[r]||(f[r]={}),b=v[E],w=s?l:p?l[r]:(l[r]||{})[E];for(o in s&&(n=r),n)(i=!c&&w&&void 0!==w[o])&&o in v||(u=i?w[o]:n[o],v[o]=s&&"function"!=typeof w[o]?n[o]:d&&i?a(u,l):y&&w[o]==u?C(u):h&&"function"==typeof u?a(Function.call,u):u,h&&((v.virtual||(v.virtual={}))[o]=u,e&t.R&&b&&!b[o]&&P(b,o,u)))};T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128;var x=T,A=P,V={}.hasOwnProperty,F=function(t,e){return V.call(t,e)},L={},M={}.toString,k=function(t){return M.call(t).slice(8,-1)},Y=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==k(t)?t.split(""):Object(t)},X=function(t){return Y(c(t))},R=Math.min,N=Math.max,I=Math.min,z=l["__core-js_shared__"]||(l["__core-js_shared__"]={}),D=function(t){return z[t]||(z[t]={})},q=0,W=Math.random(),G=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++q+W).toString(36))},U=D("keys"),H=function(t){return U[t]||(U[t]=G(t))},B=function(t,e,r){for(var n,o=X(t),i=(n=o.length)>0?R(u(n),9007199254740991):0,c=function(t,e){return 0>(t=u(t))?N(t+e,0):I(t,e)}(r,i);i>c;c++)if(c in o&&o[c]===e)return c||0;return-1},J=H("IE_PROTO"),K=function(t,e){var r,n=X(t),o=0,i=[];for(r in n)r!=J&&F(n,r)&&i.push(r);for(;e.length>o;)F(n,r=e[o++])&&(~B(i,r)||i.push(r));return i},Q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),$=Object.keys||function(t){return K(t,Q)},Z=y?Object.defineProperties:function(t,e){p(t);for(var r,n=$(e),o=n.length,i=0;o>i;)j.f(t,r=n[i++],e[r]);return t},tt=l.document,et=tt&&tt.documentElement,rt=H("IE_PROTO"),nt=function(){},ot=function(){var t,e=w("iframe"),r=Q.length;for(e.style.display="none",et.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ot=t.F;r--;)delete ot.prototype[Q[r]];return ot()},it=Object.create||function(t,e){var r;return null!==t?(nt.prototype=p(t),r=new nt,nt.prototype=null,r[rt]=t):r=ot(),void 0===e?r:Z(r,e)},ut=n(function(t){var e=D("wks"),r=l.Symbol,n="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=n&&r[t]||(n?r:G)("Symbol."+t))}).store=e}),ct=j.f,lt=ut("toStringTag"),ft=function(t,e,r){t&&!F(t=r?t:t.prototype,lt)&&ct(t,lt,{configurable:!0,value:e})},at={};P(at,ut("iterator"),function(){return this});var st=function(t,e,r){t.prototype=it(at,{next:_(1,r)}),ft(t,e+" Iterator")},pt=function(t){return Object(c(t))},ht=H("IE_PROTO"),dt=Object.prototype,yt=Object.getPrototypeOf||function(t){return t=pt(t),F(t,ht)?t[ht]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?dt:null},vt=ut("iterator"),bt=!([].keys&&"next"in[].keys()),wt=function(){return this},mt=function(t,e,r,n,o,i,u){st(r,e,n);var c,l,f,a=function(t){if(!bt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},s=e+" Iterator",p="values"==o,h=!1,d=t.prototype,y=d[vt]||d["@@iterator"]||o&&d[o],v=!bt&&y||a(o),b=o?p?a("entries"):v:void 0,w="Array"==e&&d.entries||y;if(w&&(f=yt(w.call(new t)))!==Object.prototype&&f.next&&ft(f,s,!0),p&&y&&"values"!==y.name&&(h=!0,v=function(){return y.call(this)}),u&&(bt||h||!d[vt])&&P(d,vt,v),L[e]=v,L[s]=wt,o)if(c={values:p?v:a("values"),keys:i?v:a("keys"),entries:b},u)for(l in c)l in d||A(d,l,c[l]);else x(x.P+x.F*(bt||h),e,c);return c},gt=function(t,e){var r,n,o=c(t)+"",i=u(e),l=o.length;return 0>i||i>=l?"":55296>(r=o.charCodeAt(i))||r>56319||i+1===l||56320>(n=o.charCodeAt(i+1))||n>57343?o.charAt(i):o.slice(i,i+2)};mt(String,"String",function(t){this._t=t+"",this._i=0},function(){var t,e=this._t,r=this._i;return e.length>r?(t=gt(e,r),this._i+=t.length,{value:t,done:!1}):{value:void 0,done:!0}});var Ot=function(t,e){return{value:e,done:!!t}};mt(Array,"Array",function(t,e){this._t=X(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return t&&t.length>r?Ot(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]]):(this._t=void 0,Ot(1))},"values"),L.Arguments=L.Array;for(var St=ut("toStringTag"),jt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),_t=0;jt.length>_t;_t++){var Pt=jt[_t],Et=l[Pt],Ct=Et&&Et.prototype;Ct&&!Ct[St]&&P(Ct,St,Pt),L[Pt]=L.Array}var Tt={f:ut},xt=Tt.f("iterator");function At(){return!0}var Vt=n(function(t){var e=G("meta"),r=j.f,n=0,o=Object.isExtensible||At,i=!h(function(){return o(Object.preventExtensions({}))}),u=function(t){r(t,e,{value:{i:"O"+ ++n,w:{}}})},c=t.exports={KEY:e,NEED:!1,fastKey:function(t,r){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!F(t,e)){if(!o(t))return"F";if(!r)return"E";u(t)}return t[e].i},getWeak:function(t,r){if(!F(t,e)){if(!o(t))return!0;if(!r)return!1;u(t)}return t[e].w},onFreeze:function(t){return i&&c.NEED&&o(t)&&!F(t,e)&&u(t),t}}}),Ft=j.f,Lt=function(t){var e=f.Symbol||(f.Symbol={});"_"==t.charAt(0)||t in e||Ft(e,t,{value:Tt.f(t)})},Mt={f:Object.getOwnPropertySymbols},kt={f:{}.propertyIsEnumerable},Yt=Array.isArray||function(t){return"Array"==k(t)},Xt=Q.concat("length","prototype"),Rt={f:Object.getOwnPropertyNames||function(t){return K(t,Xt)}},Nt=Rt.f,It={}.toString,zt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Dt={f:function(t){return zt&&"[object Window]"==It.call(t)?function(t){try{return Nt(t)}catch(t){return zt.slice()}}(t):Nt(X(t))}},qt=Object.getOwnPropertyDescriptor,Wt={f:y?qt:function(t,e){if(t=X(t),e=O(e,!0),g)try{return qt(t,e)}catch(t){}if(F(t,e))return _(!kt.f.call(t,e),t[e])}},Gt=Vt.KEY,Ut=Wt.f,Ht=j.f,Bt=Dt.f,Jt=l.Symbol,Kt=l.JSON,Qt=Kt&&Kt.stringify,$t=ut("_hidden"),Zt=ut("toPrimitive"),te={}.propertyIsEnumerable,ee=D("symbol-registry"),re=D("symbols"),ne=D("op-symbols"),oe=Object.prototype,ie="function"==typeof Jt,ue=l.QObject,ce=!ue||!ue.prototype||!ue.prototype.findChild;function le(){return Ht(this,"a",{value:7}).a}var fe=y&&h(function(){return 7!=it(Ht({},"a",{get:le})).a})?function(t,e,r){var n=Ut(oe,e);n&&delete oe[e],Ht(t,e,r),n&&t!==oe&&Ht(oe,e,n)}:Ht,ae=function(t){var e=re[t]=it(Jt.prototype);return e._k=t,e},se=ie&&"symbol"==typeof Jt.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof Jt},pe=function(t,e,r){return t===oe&&pe(ne,e,r),p(t),e=O(e,!0),p(r),F(re,e)?(r.enumerable?(F(t,$t)&&t[$t][e]&&(t[$t][e]=!1),r=it(r,{enumerable:_(0,!1)})):(F(t,$t)||Ht(t,$t,_(1,{})),t[$t][e]=!0),fe(t,e,r)):Ht(t,e,r)},he=function(t,e){p(t);for(var r,n=function(t){var e=$(t),r=Mt.f;if(r)for(var n,o=r(t),i=kt.f,u=0;o.length>u;)i.call(t,n=o[u++])&&e.push(n);return e}(e=X(e)),o=0,i=n.length;i>o;)pe(t,r=n[o++],e[r]);return t},de=function(t,e){if(t=X(t),e=O(e,!0),t!==oe||!F(re,e)||F(ne,e)){var r=Ut(t,e);return!r||!F(re,e)||F(t,$t)&&t[$t][e]||(r.enumerable=!0),r}},ye=function(t){for(var e,r=Bt(X(t)),n=[],o=0;r.length>o;)F(re,e=r[o++])||e==$t||e==Gt||n.push(e);return n},ve=function(t){for(var e,r=t===oe,n=Bt(r?ne:X(t)),o=[],i=0;n.length>i;)!F(re,e=n[i++])||r&&!F(oe,e)||o.push(re[e]);return o};ie||(A((Jt=function(){if(this instanceof Jt)throw TypeError("Symbol is not a constructor!");var t=G(arguments.length>0?arguments[0]:void 0);return y&&ce&&fe(oe,t,{configurable:!0,set:function e(r){this===oe&&e.call(ne,r),F(this,$t)&&F(this[$t],t)&&(this[$t][t]=!1),fe(this,t,_(1,r))}}),ae(t)}).prototype,"toString",function(){return this._k}),Wt.f=de,j.f=pe,Rt.f=Dt.f=ye,kt.f=function(t){var e=te.call(this,t=O(t,!0));return!(this===oe&&F(re,t)&&!F(ne,t))&&(!(e||!F(this,t)||!F(re,t)||F(this,$t)&&this[$t][t])||e)},Mt.f=ve,Tt.f=function(t){return ae(ut(t))}),x(x.G+x.W+x.F*!ie,{Symbol:Jt});for(var be="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),we=0;be.length>we;)ut(be[we++]);for(var me=$(ut.store),ge=0;me.length>ge;)Lt(me[ge++]);x(x.S+x.F*!ie,"Symbol",{for:function(t){return F(ee,t+="")?ee[t]:ee[t]=Jt(t)},keyFor:function(t){if(!se(t))throw TypeError(t+" is not a symbol!");for(var e in ee)if(ee[e]===t)return e},useSetter:function(){ce=!0},useSimple:function(){ce=!1}}),x(x.S+x.F*!ie,"Object",{create:function(t,e){return void 0===e?it(t):he(it(t),e)},defineProperty:pe,defineProperties:he,getOwnPropertyDescriptor:de,getOwnPropertyNames:ye,getOwnPropertySymbols:ve}),Kt&&x(x.S+x.F*(!ie||h(function(){var t=Jt();return"[null]"!=Qt([t])||"{}"!=Qt({a:t})||"{}"!=Qt(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(s(e)||void 0!==t)&&!se(t))return Yt(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!se(e))return e}),n[1]=e,Qt.apply(Kt,n)}}),Jt.prototype[Zt]||P(Jt.prototype,Zt,Jt.prototype.valueOf),ft(Jt,"Symbol"),ft(Math,"Math",!0),ft(l.JSON,"JSON",!0),Lt("asyncIterator"),Lt("observable");var Oe=f.Symbol;function Se(t){return typeof t}function je(t){return t&&"function"==typeof Oe&&t.constructor===Oe&&t!==Oe.prototype?"symbol":typeof t}var _e=n(function(t){function e(t){return(e="function"==typeof Oe&&"symbol"==typeof xt?Se:je)(t)}function r(t){return e(t)}function n(t){return t&&"function"==typeof Oe&&t.constructor===Oe&&t!==Oe.prototype?"symbol":e(t)}function o(i){return t.exports=o="function"==typeof Oe&&"symbol"===e(xt)?r:n,o(i)}t.exports=o});function Pe(t,e){if((t=t&&!t.nodeType?t[0]:t)&&1===t.nodeType){var r=t.getBoundingClientRect();return void 0===e||null===e?r:((e="object"===_e(e)?e:{top:e,right:e,bottom:e,left:e}).top=e.top||0,e.right=e.right||0,e.bottom=e.bottom||0,e.left=e.left||0,{top:e.top+r.top,right:e.right+r.right,bottom:e.bottom+r.bottom,left:e.left+r.left,width:e.left+r.pad.right+r.width,height:e.top+e.bottom+r.height})}}var Ee,Ce="undefined"!=typeof window&&window,Te="undefined"!=typeof document&&document,xe=Te&&Te.documentElement||Te&&Te.body,Ae=Ce&&Ce.screen;function Ve(){return{width:xe.clientWidth,height:xe.clientHeight}}function Fe(){var t=Ve(),e=t.width,r=t.height;return{top:0,right:e,bottom:r,left:0,width:e,height:r}}function Le(t){if(void 0!==(t=t===Ce?Fe():Pe(t)))return t.width/t.height}function Me(t){var e=t.width,r=t.height;return e>r?"landscape":e===r?"square":"portrait"}function ke(t,e,r,n){Ee||(Ee="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),e&&o)for(var u in o)void 0===e[u]&&(e[u]=o[u]);else e||(e=o||{});if(1===i)e.children=n;else if(i>1){for(var c=Array(i),l=0;i>l;l++)c[l]=arguments[l+3];e.children=c}return{$$typeof:Ee,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function Ye(){return(Ye=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function Xe(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Re(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Ne,Ie,ze,De=ut("toStringTag"),qe="Arguments"==k(function(){return arguments}()),We=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),De))?r:qe?k(e):"Object"==(n=k(e))&&"function"==typeof e.callee?"Arguments":n},Ge=ut("iterator"),Ue=f.isIterable=function(t){var e=Object(t);return void 0!==e[Ge]||"@@iterator"in e||L.hasOwnProperty(We(e))},He=ut("iterator"),Be=f.getIteratorMethod=function(t){if(void 0!=t)return t[He]||t["@@iterator"]||L[We(t)]},Je=f.getIterator=function(t){var e=Be(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return p(e.call(t))},Ke=function(t,e){if(Array.isArray(t))return t;if(Ue(Object(t)))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=Je(t);!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};(ze={})[Ne="getPrototypeOf"]=(Ie=(f.Object||{})[Ne]||Object[Ne],function(t){return yt(pt(t))}),x(x.S+x.F*h(function(){Ie(1)}),"Object",ze);var Qe=f.Object.getPrototypeOf,$e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};x(x.S+x.F*!y,"Object",{defineProperty:j.f});var Ze=f.Object,tr=function(t,e,r){return Ze.defineProperty(t,e,r)};function er(t,e){for(var r=0;e.length>r;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),tr(t,n.key,n)}}var rr=function(t,e){if(e&&("object"===_e(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},nr=function(t,e){if(p(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},or={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=a(Function.call,Wt.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return nr(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:nr};x(x.S,"Object",{setPrototypeOf:or.set});var ir=f.Object.setPrototypeOf;x(x.S,"Object",{create:it});var ur=f.Object,cr=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function lr(){this.removeAllEvents()}function fr(){return this.props.children(this.renderProps)}var ar=function(t){function r(t){var e;return $e(this,r),e=rr(this,(r.__proto__||Qe(r)).call(this,t)),Object.defineProperty(cr(e),"listeners",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(cr(e),"addEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r,n){e.listeners.push([t,r,n]),t.addEventListener(r,n)}}),Object.defineProperty(cr(e),"removeEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r,n){t.removeEventListener(r,n);for(var o=0;e.listeners.length>o;o++){var i=Ke(e.listeners[o],3);t===i[0]&&r===i[1]&&n===i[2]&&e.listeners.splice(o,1)}}}),Object.defineProperty(cr(e),"removeAllEvents",{configurable:!0,enumerable:!0,writable:!0,value:function(t){for(var r=0;e.listeners.length>r;r++){var n=Ke(e.listeners[r],3),o=n[0];t&&o!==t||(o.removeEventListener(n[1],n[2]),e.listeners.splice(r,1))}}}),e.renderProps={addEvent:e.addEvent,removeEvent:e.removeEvent,removeAllEvents:e.removeAllEvents},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=ur.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(ir?ir(t,e):t.__proto__=e)}(r,e.Component),n=r,(o=[{key:"componentWillUnmount",value:lr},{key:"render",value:fr}])&&er(n.prototype,o),r;var n,o}(),sr=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),pr=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window);function hr(t){var e;function r(){if(void 0===e){for(var r=arguments.length,n=Array(r),o=0;r>o;o++)n[o]=arguments[o];e=pr(function(r,n){return function(){e=void 0,t.apply(r,n)}}(this,n))}}return r.cancel=function(){void 0!==e&&sr(e)},r}function dr(){this.props.addEvent(Ce,"resize",this.setSize),this.props.addEvent(Ce,"orientationchange",this.setSize)}function yr(){this.setSize.cancel()}function vr(){var t;return this.props.withCoords?(t=Ve()).aspect=Le(Ce):t={getAspect:Le,getSize:Ve},this.props.children(t)}var br=function(t){function e(){for(var e,r,n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];return e=r=t.call.apply(t,[this].concat(o))||this,Object.defineProperty(Re(r),"setSize",{configurable:!0,enumerable:!0,writable:!0,value:hr(function(){return r.forceUpdate()})}),e||Re(r)}Xe(e,t);var r=e.prototype;return r.componentDidMount=dr,r.componentWillUnmount=yr,r.render=vr,e}(e.Component);function wr(t){return ke(ar,{},void 0,function(r){return e.createElement(br,Ye({},r,{withCoords:t.withCoords,children:t.children}))})}Object.defineProperty(br,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"ViewportSize"}),Object.defineProperty(br,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{withCoords:!0}});var mr=Ae&&Ae.orientation&&Ae.orientation.type;function gr(t){var e={};return wr({withCoords:t.withCoords,children:function(r){return(r=Object.assign(e,r)).orientation=Me(r),r.screenOrientation=mr?Ae.orientation.type:null,t.children(r)}})}function Or(t,e){var r={x:(t.scrollX||0)>e.scrollX?-1:t.scrollX===e.scrollX?0:1,y:(t.scrollY||0)>e.scrollY?-1:t.scrollY===e.scrollY?0:1};return t.direction&&r.x===t.direction.x&&r.y===t.direction.y?t.direction:r}function Sr(t,e){var r={x:e.scrollX-t.scrollX,y:e.scrollY-t.scrollY};return t.distance&&r.x===t.distance.x&&r.y===t.distance.y?t.distance:r}gr.propTypes={children:r.func.isRequired};var jr=window&&window.performance?window.performance:Date;function _r(t){return typeof t}function Pr(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}function Er(t){return(Er="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?_r:Pr)(t)}function Cr(t){return t}function Tr(t,e,r){return t+(e-t)*r}function xr(t,e,r){var n;if("object"===Er(t))for(var o in n=Array.isArray(t)?[]:{},t)n[o]=Tr(t[o],e[o],r);else n=Tr(t,e,r);return n}var Ar=function(t,e,r){return[Pe(t,r),e===Ce?Fe():Pe(e)]};function Vr(t,e,r){var n=Ar(t,e,r),o=n[0];return void 0!==o&&o.right>0&&n[1].width>o.left}function Fr(t,e,r){var n=Ar(t,e,r),o=n[0];return void 0!==o&&o.bottom>0&&n[1].height>o.top}function Lr(t,e,r){var n=Ar(t,e,r),o=n[0],i=n[1];return void 0!==o&&o.bottom>0&&i.height>o.top&&o.right>0&&i.width>o.left}function Mr(t,e,r){var n=Ar(t,e,r),o=n[0],i=n[1];return void 0!==o&&void 0!==i&&i.width-o.width>=0&&o.left>=i.left&&i.right>=o.right}function kr(t,e,r){var n=Ar(t,e,r),o=n[0],i=n[1];return void 0!==o&&void 0!==i&&i.height-o.height>=0&&o.top>=i.top&&i.bottom>=o.bottom}function Yr(t,e,r){var n=Ar(t,e,r),o=n[0],i=n[1];return void 0!==o&&void 0!==i&&!(0>i.width-o.width||0>i.height-o.height||i.left>o.left||o.right>i.right||i.top>o.top||o.bottom>i.bottom)}var Xr={inViewX:function(t,e){return Vr(t,Ce,e)},inViewY:function(t,e){return Fr(t,Ce,e)},inView:function(t,e){return Lr(t,Ce,e)},inFullViewX:function(t,e){return Mr(t,Ce,e)},inFullViewY:function(t,e){return kr(t,Ce,e)},inFullView:function(t,e){return Yr(t,Ce,e)}};function Rr(t){return t.children(Xr)}function Nr(){return{scrollX:void 0!==Ce.scrollX?Ce.scrollX:Ce.pageXOffset,scrollY:void 0!==Ce.scrollY?Ce.scrollY:Ce.pageYOffset}}function Ir(t,e,r){if("object"!=typeof r)Ce.scrollTo(t,e);else{var n=Nr();i=r,u=(o=Ce)===window?window.scrollTo:function(t,e){o.scrollTop=e,o.scrollLeft=t},function(t,e){var r=e.from,n=void 0===r?0:r,o=e.to,i=void 0===o?1:o,u=e.duration,c=void 0===u?240:u,l=e.timing,f=void 0===l?Cr:l,a=jr.now(),s=a+c;!function e(){var r=1-(s-jr.now())/(s-a),o=f(r);r>1?t(xr(n,i,o>1?1:o)):(pr(e),t(xr(n,i,o)))}()}(function(t){u(t.x,t.y)},{from:{x:n.scrollX,y:n.scrollY},to:{x:t,y:e},duration:i.duration,timing:i.timing})}var o,i,u}function zr(){this.setScroll.cancel()}function Dr(){var t=Nr(),e=this.prevState;if(!0===this.props.withCoords){this.viewportScrollContext.scrollX=t.scrollX,this.viewportScrollContext.scrollY=t.scrollY;var r=Sr(e,t),n=Or(e,t);this.viewportScrollContext.distance=r,this.viewportScrollContext.direction=n,t.distance=r,t.direction=n}else this.viewportScrollContext.getScroll=Nr,this.viewportScrollContext.getDistance=function(){return Sr(e,t)},this.viewportScrollContext.getDirection=function(){return Or(e,t)};return this.prevState=t,this.props.children(this.viewportScrollContext)}Rr.propTypes={children:r.func.isRequired};var qr=function(t){function e(e){var r;return r=t.call(this,e)||this,Object.defineProperty(Re(r),"setScroll",{configurable:!0,enumerable:!0,writable:!0,value:hr(function(){return r.forceUpdate()})}),e.addEvent(Ce,"scroll",r.setScroll),r.viewportScrollContext={scrollTo:Ir},r.prevState={},r}Xe(e,t);var r=e.prototype;return r.componentWillUnmount=zr,r.render=Dr,e}(e.Component);function Wr(t){return ke(ar,{},void 0,function(r){return e.createElement(qr,Ye({},r,{withCoords:t.withCoords,children:t.children}))})}Object.defineProperty(qr,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"ViewportScroll"}),Object.defineProperty(qr,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{withCoords:!0}});var Gr=e.createContext({width:null,height:null,aspect:null,orientation:null,screenOrientation:null,scrollX:null,scrollY:null,scrollTo:null,inView:null,inViewX:null,inViewY:null,inFullView:null,inFullViewX:null,inFullViewY:null});function Ur(t){var e=t.children,r=t.withCoords,n={},o={};return gr({withCoords:r,children:function(t){return Wr({withCoords:r,children:function(r){return r.scrollY===o.scrollY&&t.aspect===o.aspect&&r.scrollX===o.scrollX||(o=n,n={}),e(Object.assign(n,Xr,t,r))}})}})}Ur.propTypes={children:r.func.isRequired,withCoords:r.bool},t.ViewportOrientation=gr,t.ViewportSize=wr,t.ViewportScroll=Wr,t.ViewportQueries=Rr,t.ViewportContext=Gr,t.ViewportProvider=function(t){return Ur({children:function(e){return ke(Gr.Provider,{value:e},void 0,t.children)}})},t.ViewportConsumer=function(t){return ke(Gr.Consumer,{},void 0,function(e){return null===e.inView?Ur(t):t.children(e)})},t.default=Ur,t.inViewX=Vr,t.inViewY=Fr,t.inView=Lr,t.inFullViewX=Mr,t.inFullViewY=kr,t.inFullView=Yr,t.getSize=Ve,t.getRect=Fe,t.getOrientation=Me,t.getAspect=Le,Object.defineProperty(t,"__esModule",{value:!0})});
