!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","prop-types"],e):e(t.Throttle={},t.React,t.PropTypes)}(this,function(t,e,n){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var r=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),o=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window),i={};function a(){this.throttleState.cancel()}function u(){return this.props.children(Object.assign({throttleState:this.throttleState},this.state))}t.default=function(t){var e,n;function c(e){var n;return n=t.call(this,e)||this,Object.defineProperty(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n),"_setState",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t;return(t=n).setState.apply(t,arguments)}}),n.state=e.initialState||i,n.throttleState=function(t){var e;function n(){if(void 0===e){for(var n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];e=o(function(n,r){return function(){e=void 0,t.apply(n,r)}}(this,r))}}return n.cancel=function(){void 0!==e&&r(e)},n}(n._setState),n}(e=c).prototype=Object.create((n=t).prototype),e.prototype.constructor=e,e.__proto__=n;var s=c.prototype;return s.componentWillUnmount=a,s.render=u,c}(e.Component),Object.defineProperty(t,"__esModule",{value:!0})});
