!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.renderPropsUtils={})}(this,function(e){"use strict";function n(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;n>r;r++)t[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,t):void 0}function t(){}var r=window&&window.performance?window.performance:Date,o=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),i=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window);function a(e){return e}function u(e,n,t){return e+(n-e)*t}function f(e,n,t){var r;if("object"==typeof e)for(var o in r=Array.isArray(e)?[]:{},e)r[o]=u(e[o],n[o],t);else r=u(e,n,t);return r}var c=function(e){return e.replace(/([A-Z]+)([a-z]+)?/g,"-$1$2").toLowerCase()};e.bound=function(e){var r=e.value,o=e.lower,i=e.upper,a=e.outOfUpper,u=e.outOfLower,f=e.inBounds,c=e.cast,w=void 0===c?parseInt:c;return r=w(r),o=w(o),i=w(i),f=f||t,isNaN(r)?f():!isNaN(i)&&r>i?n(a):!isNaN(o)&&o>r?n(u):f()},e.callIfExists=n,e.interpolate=function(e,n){var t=n.from,o=void 0===t?0:t,u=n.to,c=void 0===u?1:u,w=n.duration,l=void 0===w?240:w,d=n.timing,s=void 0===d?a:d,v=r.now(),m=v+l;!function n(){var t=1-(m-r.now())/(m-v),a=s(t);t>1?e(f(o,c,a>1?1:a)):(i(n),e(f(o,c,a)))}()},e.perf=r,e.requestAnimationFrame=i,e.requestInterval=function(e,n){if(!i)return window.setInterval(e,n);var t=r.now(),o={};return o.value=i(function a(){var u=r.now();n>u-t||(e.call(),t=r.now()),o.value=i(a)}),o},e.requestTimeout=function(e,n){if(!i)return window.setTimeout(e,n);var t=r.now(),o={};return o.value=i(function a(){var u=r.now();n>u-t?o.value=i(a):e.call()}),o},e.strictShallowEqual=function(e,n){var t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(var r=0;t.length>r;r++){var o=t[r];if(e[o]!==n[o])return!1}return!0},e.toKebabCase=c,e.cancelAnimationFrame=o,e.clearRequestInterval=function(e){o?o(e.value):window.clearInterval(e)},e.clearRequestTimeout=function(e){o?o(e.value):window.clearTimeout(e)},e.toKebabCaseTrimmed=function(e){return c(e).replace(/^-+/g,"")},Object.defineProperty(e,"__esModule",{value:!0})});
