(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===t(a)?a:String(a)),r)}var i,a}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.options=Object.assign({rootmargin:100,threshold:1,one:!0,className:"_visible_",format:function(t){return t}},n),this.element=e,this.startValue=this.element.dataset.start?+this.element.dataset.start:0,this.endValue=this.element.dataset.end?+this.element.dataset.end.replace(/ /g,""):+this.element.textContent.replace(/ /g,""),this.duration=this.element.dataset.duration?+this.element.dataset.duration:1500;var o=this.element.hasAttribute("data-scroll");this.element&&(this.element.textContent=this.startValue,o?this.scroll():this.counter())}var n,o,r;return n=t,o=[{key:"scroll",value:function(){var t=this,e={rootMargin:"".concat(this.options.rootmargin,"px"),threshold:this.options.threshold};new IntersectionObserver((function(e,n){e[0].isIntersecting?(t.element.classList.add(t.options.className),t.counter(),t.options.one&&n.unobserve(t.element)):t.element.classList.remove(t.options.className)}),e).observe(this.element)}},{key:"counter",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.duration,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.endValue,o=new Date,r=new Date;r.setTime(r.getTime()+e);var i=function i(){var a=(Math.min(Date.now(),r)-o)/e,s=t.options.format(Math.floor(n*a));t.element.textContent=s,a<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}}],o&&e(n.prototype,o),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),o=document.querySelectorAll(".section");o.length&&o.forEach((function(t){new n(t,{format:function(t){return t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}})}))})();