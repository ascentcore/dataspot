!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=64)}({42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),o=function(){function e(e,t){this.internalMap={},this.inversedInternalMap={},this.nextKeyIterator=t||r.integerNextKeyGenerator(),this.valueEncoder=e||new r.ToStringValueEncoder}return e.prototype.checkIndexed=function(e){return void 0!==this.internalMap[e]},e.prototype.fitTransform=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],o=this.valueEncoder.encode(r),i=this.internalMap[o];void 0===i&&(i=this.nextKeyIterator.next().value,this.internalMap[o]=i,this.inversedInternalMap[i]=r),t.push(i)}return t},e.prototype.transform=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],o=this.valueEncoder.encode(r),i=this.internalMap[o];if(void 0===i)throw new Error("Index not found for "+o);t.push(i)}return t},e.prototype.inverse=function(e){for(var t=[],n=0;n<e.length;n++)t.push(this.inversedInternalMap[e[n]]);return t},e}();t.default=o},43:function(e,t,n){"use strict";var r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToStringValueEncoder=t.integerNextKeyGenerator=void 0,t.integerNextKeyGenerator=function(){var e;return r(this,(function(t){switch(t.label){case 0:e=0,t.label=1;case 1:return[4,e++];case 2:return t.sent(),[3,1];case 3:return[2]}}))};var o=function(){function e(){}return e.prototype.encode=function(e){return JSON.stringify(e)},e}();t.ToStringValueEncoder=o},64:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(42));t.default=r(void 0,void 0,void 0,(function(){var e,t,n,r,i;return o(this,(function(o){return e=["🐕","🐈","🐕","🐹","🐕","🐈","🐈","🐹"],t=new u.default,n=t.fitTransform(e),console.log(n),console.log(t.inverse([0,1,2])),r=["🐕","🐈","🐕","🐤","🦉","🐸","🦉","🦉","🐸","🐤","🐤"],i=t.fitTransform(r),console.log(i),console.log(t.inverse([0,1,2,3,4,5])),[2]}))}))}});