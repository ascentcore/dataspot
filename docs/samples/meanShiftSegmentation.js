!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=37)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.seed=function(e){this.rand=t.mulberry32(t.xmur3(e)()),Math.random=t.rand},t.xmur3=function(t){for(var e=1779033703^t.length,n=0;n<t.length;n++)e=(e=Math.imul(e^t.charCodeAt(n),3432918353))<<13|e>>>19;return function(){return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0}},t.mulberry32=function(t){return function(){var e=t+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296}},t.roundToPrecision=function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n},t.random=function(t,e){return Math.random()*(e-t)+t},t.randomInt=function(t,e){var n=Math.ceil(t),r=Math.floor(e);return Math.floor(Math.random()*(r-n))+n},t.seededRandom=function(e,n){return t.rand()*(n-e)+e},t.seededRandomInt=function(e,n){var r=Math.ceil(e),i=Math.floor(n);return Math.floor(t.rand()*(i-r))+r},t.randomChoice=function(e){return e[t.randomInt(0,e.length-1)]},t.rand=t.mulberry32(t.xmur3("apples")()),t}();e.default=r},,function(t,e,n){"use strict";function r(t,e){if(!t||!e||t.length!==e.length)throw new Error("Missing ponts data "+t+", "+e);for(var n=0,r=0;r<t.length;r++)n+=Math.pow(t[r]-e[r],2);return Math.sqrt(n)}function i(t,e){if(!t||!e||t.length!==e.length)throw new Error("Missing ponts data "+t+", "+e);for(var n=0,r=0;r<t.length;r++)n+=Math.abs(t[r]-e[r]);return n}function o(t,e){if(!t||!e||t.length!==e.length)throw new Error("Missing ponts data "+t+", "+e);return t.map((function(t,n){return t+e[n]}))}Object.defineProperty(e,"__esModule",{value:!0}),e.sum=e.manhattanDistance=e.euclideanDistance=void 0,e.euclideanDistance=r,e.manhattanDistance=i,e.sum=o;var a={euclideanDistance:r,manhattanDistance:i,sum:o};e.default=a},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return a(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.EvolutionaryConfig=void 0;var s=u(n(6)),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iterations=100,e}return i(e,t),e}(s.SerializableConfig);e.EvolutionaryConfig=f;var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iteration=0,e}return i(e,t),e.prototype.shouldStop=function(){return this.iteration===this.config.iterations},e.prototype.getIteration=function(){return this.iteration},e}(s.default);e.default=c},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(5)).default(),o=function(){function t(){}return t.deepClone=function(t){return i(t)},t}();e.default=o},function(t,e,n){"use strict";t.exports=function(t){return(t=t||{}).circles?function(t){var e=[],n=[];return t.proto?function t(i){if("object"!=typeof i||null===i)return i;if(i instanceof Date)return new Date(i);if(Array.isArray(i))return r(i,t);var o={};for(var a in e.push(i),n.push(o),i){var u=i[a];if("object"!=typeof u||null===u)o[a]=u;else if(u instanceof Date)o[a]=new Date(u);else{var s=e.indexOf(u);o[a]=-1!==s?n[s]:t(u)}}return e.pop(),n.pop(),o}:function t(i){if("object"!=typeof i||null===i)return i;if(i instanceof Date)return new Date(i);if(Array.isArray(i))return r(i,t);var o={};for(var a in e.push(i),n.push(o),i)if(!1!==Object.hasOwnProperty.call(i,a)){var u=i[a];if("object"!=typeof u||null===u)o[a]=u;else if(u instanceof Date)o[a]=new Date(u);else{var s=e.indexOf(u);o[a]=-1!==s?n[s]:t(u)}}return e.pop(),n.pop(),o};function r(t,r){for(var i=Object.keys(t),o=new Array(i.length),a=0;a<i.length;a++){var u=i[a],s=t[u];if("object"!=typeof s||null===s)o[u]=s;else if(s instanceof Date)o[u]=new Date(s);else{var f=e.indexOf(s);o[u]=-1!==f?n[f]:r(s)}}return o}}(t):t.proto?function t(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return e(n,t);var r={};for(var i in n){var o=n[i];"object"!=typeof o||null===o?r[i]=o:o instanceof Date?r[i]=new Date(o):r[i]=t(o)}return r}:function t(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return e(n,t);var r={};for(var i in n)if(!1!==Object.hasOwnProperty.call(n,i)){var o=n[i];"object"!=typeof o||null===o?r[i]=o:o instanceof Date?r[i]=new Date(o):r[i]=t(o)}return r};function e(t,e){for(var n=Object.keys(t),r=new Array(n.length),i=0;i<n.length;i++){var o=n[i],a=t[o];"object"!=typeof a||null===a?r[o]=a:a instanceof Date?r[o]=new Date(a):r[o]=e(a)}return r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SerializableConfig=void 0;var r=function(){};e.SerializableConfig=r;var i=function(){function t(t){this.config=t}return t.prototype.serialize=function(){return JSON.stringify(this.config)},t.prototype.loadState=function(t){this.config="string"==typeof t?JSON.parse(t):t},t}();e.default=i},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPairsFromDistanceMatrix=e.distanceMatrix=e.gaussianKernel=e.indexOfSmallest=e.roundToPrecision=e.average=void 0;var r=n(2);e.average=function(t){if(!t||!t.length)throw new Error("Missing ponts data "+t);var e=t[0].length,n=Array(e).fill(0);return t.reduce((function(t,e){return r.sum(t,e)}),n).map((function(e){return e/t.length}))},e.roundToPrecision=function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n},e.indexOfSmallest=function(t){if(!t||!t.length)throw new Error("Missing ponts data "+t);return t.reduce((function(e,n,r){return n<t[e]?r:e}),0)},e.gaussianKernel=function(t,e){return 1/(e*Math.sqrt(2*Math.PI))*Math.exp(-.5*Math.pow(t/e,2))},e.distanceMatrix=function(t,e,n){void 0===n&&(n=1/0);for(var r=t.length,i=[],o=0;o<r;o++){i.push(new Array(r).fill(n));for(var a=0;a<o;a++){var u=e(t[o],t[a]);i[o][a]=u,i[a][o]=u}}return i},e.getPairsFromDistanceMatrix=function(t,e){void 0===e&&(e=2);for(var n=t.length,r=new Array(n).fill(0).map((function(){return 1/0})),i=new Array(n).fill(0).map((function(){return 1/0})),o=n,a=0;o>1;){for(var u=1/0,s=-1,f=-1,c=1/0,l=0;l<n;l++)for(var h=l+1;h<n;h++)t[l][h]<u&&(c=t[l][h]),r[l]===1/0&&r[h]===1/0&&t[l][h]<u&&(u=t[l][h],s=l,f=h);c===u&&(!e||a<e)?(r[s]=a,r[f]=a,i[s]=u,i[f]=u,a++,o-=2):(r[s]=a,i[s]=0,a++,o-=1)}for(l=0;l<n;l++)r[l]===1/0&&(r[l]=a,i[l]=0);return[r,i]}},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.CentroidConfig=void 0;var a=n(3),u=o(n(2)),s=o(n(11)),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.centroids=[],e.distanceFn="euclideanDistance",e}return i(e,t),e}(a.EvolutionaryConfig);e.CentroidConfig=f;var c=function(t){function e(e,n){var r=t.call(this,Object.assign(new f,e))||this;return r.initializeDependencies(n),r}return i(e,t),e.prototype.predict=function(t){if(!this.initialized)throw new Error("Algorithm was not initialized. Call fitData, fitDataAsnyc or load pretrained configuration using loadState");for(var e=this.config.centroids,n=t.length,r=[],i=0;i<n;i++){for(var o=t[i],a=0,u=this.distanceFunc(o,e[a]),s=1;s<e.length;s++){var f=this.distanceFunc(o,e[s]);f<u&&(u=f,a=s)}r.push(a)}return r},e.prototype.loadState=function(e){t.prototype.loadState.call(this,e),this.initializeDependencies(),this.initialized=!0},e.prototype.initializeDependencies=function(t){var e=this.config.distanceFn;if(this.distanceFunc=t||u.default[e],!this.distanceFunc)throw new Error("distance function not passed or not found")},e}(s.default);e.default=c},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.initialized=!1,e}return i(e,t),e.prototype.prepareDataset=function(t){if(!t||0===t.length)throw new Error("Unable to perform fitting without data");this.iteration=0,this.fitData=t,this.labels=new Array(t.length).fill(-1)},e.prototype.fitAsync=function(t){return o(this,(function(e){switch(e.label){case 0:this.prepareDataset(t),e.label=1;case 1:return this.shouldStop()||this.canStop()?[3,3]:(this.step(),[4,this.labels]);case 2:return e.sent(),this.iteration++,[3,1];case 3:return this.onEndFit(),[2,this.labels]}}))},e.prototype.fit=function(t){for(this.prepareDataset(t);!this.shouldStop()&&!this.canStop();)this.step(),this.iteration++;return this.onEndFit(),this.labels},e.prototype.onEndFit=function(){},e}(a(n(3)).default);e.default=u},,,,,,,,function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return a(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MeanShiftConfig=void 0;var f=s(n(4)),c=n(9),l=u(n(10)),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bandwidth=.1,e.clusterThreshold=.1,e.stopThreshold=1e-4,e}return i(e,t),e}(l.CentroidConfig);e.MeanShiftConfig=h;var p=function(t){function e(e,n){var r=t.call(this,Object.assign(new h,e))||this;return r.initializeDependencies(n),r}return i(e,t),e.prototype.step=function(){var t=this.shifting;this.shiftingPoints=f.default.deepClone(this.shiftingPoints);for(var e=this.shiftingPoints,n=0;n<e.length;n++)if(t[n]){var r=e[n],i=this.shiftPoint(r,this.fitData,this.config.bandwidth),o=this.distanceFunc(r,i);e[n]=i,t[n]=o>this.config.stopThreshold}},e.prototype.onEndFit=function(){var t=this.labels;t.length=0;for(var e=0,n=[],r=0;r<this.shiftingPoints.length;r++){var i=this.shiftingPoints[r];if(0===t.length)t.push(e),n.push(i),e++;else{for(var o=0;o<n.length;o++){var a=n[o];this.distanceFunc(i,a)<this.config.clusterThreshold&&t.push(o)}t.length<r+1&&(t.push(e),n.push(i),e++)}}this.config.centroids=n},e.prototype.canStop=function(){return this.shifting&&void 0===this.shifting.find((function(t){return t}))},e.prototype.prepareDataset=function(e){t.prototype.prepareDataset.call(this,e),this.shifting=new Array(this.fitData.length).fill(!0),this.shiftingPoints=f.default.deepClone(this.fitData),this.initialized=!0},e.prototype.shiftPoint=function(t,e,n){for(var r=new Array(t.length).fill(0),i=0,o=0;o<e.length;o++){for(var a=e[o],u=this.distanceFunc(t,a),s=c.gaussianKernel(u,n),f=0;f<r.length;f++)r[f]+=a[f]*s;i+=s}for(f=0;f<r.length;f++)r[f]/=i;return r},e}(l.default);e.default=p},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(19)),u=o(n(0)),s=o(n(38));e.default=r(void 0,void 0,void 0,(function(){var t,e,n,r,o,f,c;return i(this,(function(i){return u.default.seed("segmentation"),t=127,e=document.createElement("div"),(document.querySelector('[data-ref="documentation/meanShiftSegmentation"]')||document.body).appendChild(e),n=document.createElement("canvas"),e.appendChild(n),r=document.createElement("canvas"),e.appendChild(r),o=new Image,f=function(){var e=o.width,i=o.height,u=s.default.getMaxSizedValues(e,i,80,80),f=u[0],c=u[1],l=s.default.getMaxSizedValues(e,i,500,500),h=l[0],p=l[1];n.width=h,n.height=p,r.width=h,r.height=p;var d=n.getContext("2d"),v=r.getContext("2d");if(null!==d&&null!==v){d.drawImage(o,0,0,f,c);var y=s.default.convertCanvasToSpatialData(d,0,0,f,c);d.drawImage(o,0,0,h,p),v.drawImage(o,0,0,h,p);var g=new a.default({clusterThreshold:t});g.fit(y);var b=g.config.centroids,_=s.default.convertCanvasToSpatialData(d,0,0,h,p),m=g.predict(_),w=v.getImageData(0,0,h,p);s.default.getImageDataFromCentroidPrediction(w,m,b),v.putImageData(w,0,0)}},(c=document.createElement("input")).setAttribute("type","range"),c.setAttribute("value","127"),c.setAttribute("min","25"),c.setAttribute("max","200"),c.setAttribute("step","1"),c.addEventListener("change",(function(e){null!==e.target&&(t=parseInt(e.target.value,10),f())})),e.appendChild(c),o.onload=function(){f()},o.src="/dataspot/assets/images/seg1.png",o.crossOrigin="Anonymous",[2]}))}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.convertCanvasToSpatialData=function(t,e,n,r,i){for(var o=[],a=t.getImageData(e,n,r,i).data,u=0;u<a.length;u+=4)o.push([a[u],a[u+1],a[u+2]]);return o},t.getImageDataFromCentroidPrediction=function(t,e,n){console.log(e);for(var r=0;r<t.data.length;r+=4){var i=n[e[r/4]];t.data[r]=i[0],t.data[r+1]=i[1],t.data[r+2]=i[2]}},t.getMaxSizedValues=function(t,e,n,r){var i=n/t,o=r/e,a=Math.min(i,o);return[Math.floor(t*a),Math.floor(e*a)]},t}();e.default=r}]);