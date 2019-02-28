/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(Global) {
	const parser = new DOMParser();

	Global.find = function() {
		return document.find.apply(document, arguments);
	};

	Global.ready = function() {
		return document.ready.apply(document, arguments);
	};

	Global.create = function() {
		if (typeof arguments[0] !== "string")
			throw new Error("The first argument must be a string!");

		let body = parser.parseFromString(arguments[0].trim(),
				arguments[1] || "text/html").find("body");
		let frag = document.createDocumentFragment();
		let nodes = body.childNodes;
		while (nodes.length != 0)
			frag.append(nodes[0]);

		return frag.childNodes;
	};
})(window || global);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/JQuery.js":
/*!***********************!*\
  !*** ./src/JQuery.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/HTMLElement */ "./src/dom/HTMLElement.js");


(function(Global) {
	/**
	 * JQuery prevent jquery
	 */
	const $ = Global.$ = Global.JQuery = Global.jQuery = Global.$ || function() {
		if (arguments.length == 0)
			return document;
		else if (arguments.length == 1) {			
			if (typeof arguments[0] === "function")
				return Global.ready.apply(Global, arguments);
			else if (typeof arguments[0] === "string") {
				if (/<[^<]+>/g.test(arguments[0]))
					return Global.create.apply(Global, arguments);
				else
					return Global.find.apply(Global, arguments);
			}
			else 
				return arguments[0];
		}
	};
})(window || global);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/dom/Document.js":
/*!*****************************!*\
  !*** ./src/dom/Document.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/EventSupport */ "./src/dom/extentions/EventSupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document.prototype, _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});




/***/ }),

/***/ "./src/dom/HTMLElement.js":
/*!********************************!*\
  !*** ./src/dom/HTMLElement.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/NodeQuerySupport */ "./src/dom/extentions/NodeQuerySupport.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extentions/EventSupport */ "./src/dom/extentions/EventSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./src/dom/extentions/ShowHideSupport.js");








Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement.prototype,_extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],_extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_extentions_EventSupport__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);

/***/ }),

/***/ "./src/dom/HTMLInputElement.js":
/*!*************************************!*\
  !*** ./src/dom/HTMLInputElement.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLInputElement.prototype,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./src/dom/HTMLSelectElement.js":
/*!**************************************!*\
  !*** ./src/dom/HTMLSelectElement.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLSelectElement.prototype,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./src/dom/Node.js":
/*!*************************!*\
  !*** ./src/dom/Node.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Node.prototype,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/***/ }),

/***/ "./src/dom/NodeList.js":
/*!*****************************!*\
  !*** ./src/dom/NodeList.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(NodeList.prototype, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(aFunctionName, theArguments){
	let nodes = this.values();
	let node = nodes.next();
	let results = [];
	while(node && node.value){
		node = node.value;
		if(typeof node !== "undefined" && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(typeof result !== "undefined" && result != null){
				if(result instanceof Array)
					results = results.concat(result);
				else if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result)
			}		
		}
		node = nodes.next();		
	}
	
	if(results.length == 0)
		return undefined;
	else if(results[0] instanceof Node)
		return NodeList.from(results);
	else
		return results;	
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype);


NodeList.from = function(){
	if(arguments.length == 1 && typeof arguments[0] !== "undefined" &&  arguments[0] instanceof NodeList){
		return arguments[0];		
	}
	else{
		let args = Array.from(arguments);
		let internal = {
			length: {value: 0}
		};
		
		while(args.length > 0){
			let list = Array.from(args.shift());		
			for(let i = 0; i < list.length; i++){
				if(typeof list[i] !== "undefined" && list[i] instanceof Node){
					internal[i] = {value: list[i], enumerable: true};
					internal.length.value++;
				}
			}
		}
	
		return Object.create(NodeList.prototype,internal );
	}
}

/***/ }),

/***/ "./src/dom/extentions/BasicQuerySupport.js":
/*!*************************************************!*\
  !*** ./src/dom/extentions/BasicQuerySupport.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
	
	Prototype.find = function(aSelector) {
		let match = parentSelector.exec(aSelector);
		if(match){
			let result = this;
			if(match.index > 0){
				result = this.querySelectorAll(aSelector.substr(0, match.index));
				if(result.length == 0)
					return;
			}			
			if(typeof match[2] !== "undefined")
				result = result.parent(match[2]);
			else
				result = result.parent();
			
			if(typeof result === "undefined")
				return;
			
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.trim().length > 0)
				return result.find(nextSelector);
			
			return result;		
		}
		else
			return this.querySelectorAll(aSelector);
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);



/***/ }),

/***/ "./src/dom/extentions/DataSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/DataSupport.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	Prototype.data = function() {
		if (typeof this.__data === "undefined") {
			this.__data = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data;
		else if (arguments.length == 1)
			return this.__data[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data[arguments[0]];
		else
			this.__data[arguments[0]] = arguments[1];
		
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/EventSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/EventSupport.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/CustomEvent */ "./src/polyfill/CustomEvent.js");
/* harmony import */ var _polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0__);


const support = function(Prototype) {
	const WrappedEventHandler = function(aConfig, aCallback ,aEvent){
		if(typeof aConfig.filter !== "undefined" && !aEvent.target.is(aConfig.filter))		
			return;
		
		let args = [aEvent];
		if(typeof aConfig.data !== "undefined")
			args = args.concat(aConfig.data);
		
		let result = aCallback.apply(aCallback, args);
		if(aConfig.singleCall)
			this.removeEventListener(aCallback);
		
		return result;		
	};
	
	
	const addEventListener = Prototype.addEventListener;
	Prototype.addEventListener = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");

		this.on(arguments[0], arguments[1]);
	};	
	
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");
		
		if (typeof this.__callbackMap === "undefined")
			this.__callbackMap = {};

		let args = Array.from(arguments);
		let events = args.shift().split(/(\s+)|(\s*,\s*)/);
		let handlerConfig = {
			filter : (typeof args[0] === "string" ? args.shift().split(/\s*,\s*/) : undefined),
			data : (typeof args[0] !== "function" ? args.shift() : undefined)
		};
	    let callback = args.shift();
	    
	    handlerConfig.singleCall = (typeof args[0] !== "boolean" ? args.shift() : false);

		let eventMap = {};
		events.forEach((function(result, config, callback, event){
			let wrappedEventHandler = WrappedEventHandler.bind(this, config, callback);
			result[event] = wrappedEventHandler;			
			addEventListener.call(this, event, wrappedEventHandler, true);
			
		}).bind(this, eventMap, handlerConfig, callback));
		
		this.__callbackMap[callback] = eventMap;
		
		return this;
	};	
	
	const removeEventListener = Prototype.removeEventListener;
	Prototype.removeEventListener = Prototype.removeOn = function() {
		if (arguments.length != 1 || typeof this.__callbackMap === "undefined")
			return removeEventListener.apply(this, arguments);
			
		let events = undefined;
		let callback = undefined;
		if(typeof arguments[0] === "string")
			events = arguments[0].split(/(\s+)|(\s*,\s*)/);
		else if(typeof arguments[0] === "function")
			callback = arguments[0].shift();
		else
			throw new Error("Wrong argument! -> call function([event|handler])");
		
		let removalHandler = [];
		if(typeof events === "undefined"){
			eventMap = this.__callbackMap[callback];
			if(typeof eventMap !== "undefined"){
				eventMap.getOwnPropertyNames().forEach((function(result, eventMap, event){
					let handler = eventMap[event];
					if(typeof handler !== "undefined")
						result.push(handler);					
				}).bind(this, removalHandler, eventMap));
				
				delete this.__callbackMap[callback];
			}
		}
		else {
			events.forEach((function(result, event){
				Object.getPropertyNames(this.__callbackMap).forEach((function(aEvent, Callback){
					let eventMap = this.__callbackMap[Callback];
					delete eventMap[aEvent];
					if(eventMap.getOwnPropertyNames() == 0)
						delete this.__callbackMap[Callback];
				}).bind(this, event));								
			}).bind(this));
		}
		
		return this;
	};

	
	Prototype.trigger = function(){
		let event = undefined;
		if(typeof this["on" + arguments[0]] === "function"){
			event = document.createEvent("Event");
			event.initEvent(arguments[0], true, true);
		}
		else
			event = new CustomEvent(arguments[0],  { bubbles: true, cancelable: true, detail: arguments[1] });
		
		this.dispatchEvent(event);
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);


/***/ }),

/***/ "./src/dom/extentions/HtmlClassSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/HtmlClassSupport.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {	
	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.add(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.addClass(clazz);
			}).bind(this));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.remove(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.removeClass(clazz);
			}).bind(this));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.toggle(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.toogleClass(clazz);
			}).bind(this));
		
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ListSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/ListSupport.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};
	
	if(typeof Prototype.forEach === "undefined")
		Prototype.forEach = function(){
			return Array.prototype.forEach.apply(this, arguments);
		};
	
	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ManipulationSupport.js":
/*!***************************************************!*\
  !*** ./src/dom/extentions/ManipulationSupport.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


const support = function(Prototype) {

	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (function() {
				let result = {};
				this.getAttributeNames().forEach((function(result, name) {
					result[name] = this.getAttribute(name);
				}).bind(this, result));
				return result;
			}).call(this) : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach((function(content){
				if(typeof content === "string")
					this.innerHTML = content;
				else if(content instanceof Element){
					this.empty();
					this.append(content);
				}
			}).bind(this));		
			
		return this;
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/NodeQuerySupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/NodeQuerySupport.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


const support = function(Prototype) {
	
	Prototype.is = function() {
		if(arguments.length == 1){
			if(typeof arguments[0] === "string")
				return this.matches(arguments[0]);
			else if(typeof arguments[0].length === "number"){
				let filter = arguments[0];
				for(let i = 0; i < filter.length; i++)
					if(this.matches(filter[i]))
						return true;
			}				
		}
		else if(arguments.length > 1)
			return this.is(Array.from(arguments));
		
		return false;
	};	
	
	Prototype.parent = function() {
		if(arguments.length == 0)
			return this.parentNode;
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			while(!parent.is(arguments[0]))
				parent = parent.parent(arguments[0]);
			return parent;
		}
	};
	
	Prototype.parents = function() {
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while(parent){
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}
		
		return NodeList.from(result);
	};	

	Prototype.selector = function(){
		if(typeof this.id === "undefined" || this.id.length == 0){
			let parent = this.parent();
			if(parent instanceof Document || parent instanceof  DocumentFragment)
				parent = undefined;
			let selector = this.localName.toLowerCase();
			if(typeof parent !== "undefined"){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this) + 1;
					if (index > 0)
						selector += ':nth-child(' + index + ')';
				}		
			}
			return typeof parent !== "undefined" ? parent.selector() + ">" + selector : selector;
		}
		else
			return "#" + this.id;
	};	

	Prototype.closests = function(aQuery) {
		if(this.is(aQuery))
			return this;
		else{
			let result = this.find(aQuery, true);
			if(result.length > 0)
				return result;
			
			let parent = this.parent();
			if(typeof parent !== "undefined" && parent != document)
				return parent.closest(aQuery);
		}		
	};
	
	Prototype.closest = function(aQuery){
		let result = this.closests(aQuery);
		if(typeof result !== "undefined")
			return result[0];
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ReadyEventSupport.js":
/*!*************************************************!*\
  !*** ./src/dom/extentions/ReadyEventSupport.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {

	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ShowHideSupport.js":
/*!***********************************************!*\
  !*** ./src/dom/extentions/ShowHideSupport.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {

	Prototype.show = function(){
		if(this.__ishide){
			this.style.display = this.__display || "";
			this.__ishide = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!this.__ishide){
			this.__display = this.style.display;
			this.style.display = "none";
			this.__ishide = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		if(this.__ishide)
			return this.show();
		else
			return this.hide();
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ValueSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/ValueSupport.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);

const support = function(Prototype) {
	const InputTypes =[
		{
			selector : "select",
			get : function(){
				let result = [];
				this.find("option:checked", true).forEach((function(result, option){
					result.push(option.value);
				}).bind(this, result));
				
				if(typeof arguments[0] === "boolean" && arguments[0])
					return result;				
				else if(result.length == 1)
					return result[0];
				else if(result.length > 1)
					return result;				
			},
			set : function(){				
				let values = [];
				if(arguments.length == 1 && typeof arguments[0] !== "undefined")
					values = values.concat(arguments[0]);
				else if(arguments.length > 1)
					values = values.concat(Array.from(arguments));
				
				this.find("option", true).forEach((function(values, option){
					let check = values.indexOf(option.value) > -1;
					if(check)
						option.selected = true;
					else
						option.selected = false;
				}).bind(this, values));
				
				this.trigger("changed");
			}			
		},
		{
			selector : "option",
			get : function(){
				if(this.selected)
					return this.value;
			},
			set : function(aValue){
				if(typeof aValue === "boolean")
					this.selected = aValue;
				else if(typeof aValue === "string")
					this.value = aValue;
				
				this.trigger("changed");				
			}			
		},
		{
			selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
			get : function(){
				if(typeof this.value === "undefined" || this.value == "on")
					return this.checked;
				else if(this.checked)
					return this.value;				
			},
			set : function(aValue){
				if(typeof aValue === "boolean")
					this.checked = aValue;
				else if(typeof aValue === "string")
					this.value = aValue;
				
				this.trigger("changed");
			}
		}
	];
	
	const DefaultInputType = {
			get : function(){
				return this.value;
			},
			set : function(aValue){
				this.value = aValue;
				this.trigger("input");
			}	
	};
	
	const getInputType = function(aElement){
		for(let i = 0; i < InputTypes.length; i++)
			if(aElement.is(InputTypes[i].selector))
				return InputTypes[i];		
		return DefaultInputType;
	};
	
	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0){
			return type.get.apply(this, arguments);
		}
		else{
			type.set.apply(this, arguments);
			
			return this;
		}		
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dom_Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/Node.js */ "./src/dom/Node.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Document */ "./src/dom/Document.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/HTMLElement */ "./src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/NodeList */ "./src/dom/NodeList.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _JQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JQuery */ "./src/JQuery.js");











/***/ }),

/***/ "./src/polyfill/Array.js":
/*!*******************************!*\
  !*** ./src/polyfill/Array.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.from) {
	Array.from = function() {
		let result = [];
		if (arguments.length > 0) {
			for (let i = 0; i < arguments.length; i++) {
				let arg = arguments[i];
				if (typeof arg.length === "number") {
					for (let j = 0; j < arg.length; j++)
						if (typeof arg[j] !== "undefined")
							result.push(arg[j]);
				} else {
					Object.getOwnPropertyNames(arguments[0]).forEach(
							(function(aResult, aName) {
								try {
									parseInt(aName);
									if (typeof this[aName] !== "undefined")
										result.push(this[aName]);
								} catch (e) {
								}
							}).bind(arguments[0], result));
				}
			}
		}
		return result;
	};
};

/***/ }),

/***/ "./src/polyfill/CustomEvent.js":
/*!*************************************!*\
  !*** ./src/polyfill/CustomEvent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof window.CustomEvent !== "function") {
	function CustomEvent(event, params) {
		params = params || {
		    bubbles : false,
		    cancelable : false,
		    detail : null
		};
		let evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
}


/***/ }),

/***/ "./src/utils/DelegaterBuilder.js":
/*!***************************************!*\
  !*** ./src/utils/DelegaterBuilder.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DelegaterBuilder = function() {
	let args = Array.from(arguments);
	let callback = args.shift();
	let source = args.shift();
	args.forEach((function(aSource, aCallback, aTarget){
		Object.getOwnPropertyNames(aTarget).forEach(
				(function(aSource, aTarget,aCallback,  aName) {
					let prop = Object.getOwnPropertyDescriptor(aTarget, aName);
					if (typeof aSource[aName] === "undefined" && typeof prop.value === "function")
						aSource[aName] = function(){return aCallback.call(this, aName, arguments);};										
				}).bind(null, aSource, aTarget, aCallback));
	}).bind(null, source, callback));
	
};
/* harmony default export */ __webpack_exports__["a"] = (DelegaterBuilder);

/***/ }),

/***/ "./src/utils/ExtendPrototype.js":
/*!**************************************!*\
  !*** ./src/utils/ExtendPrototype.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfill/Array */ "./src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


const extendPrototype = function(){
	let args = 	Array.from(arguments);
	let prototype = args.shift(); 
	while(args.length > 0){
		let extender = args.shift();
		extender(prototype);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (extendPrototype);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9KUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL05vZGVRdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsL0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbC9DdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOztBQUVBO0FBQ0E7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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiKGZ1bmN0aW9uKEdsb2JhbCkge1xyXG5cdGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcblx0R2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblxyXG5cdFx0bGV0IGJvZHkgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksXHJcblx0XHRcdFx0YXJndW1lbnRzWzFdIHx8IFwidGV4dC9odG1sXCIpLmZpbmQoXCJib2R5XCIpO1xyXG5cdFx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRsZXQgbm9kZXMgPSBib2R5LmNoaWxkTm9kZXM7XHJcblx0XHR3aGlsZSAobm9kZXMubGVuZ3RoICE9IDApXHJcblx0XHRcdGZyYWcuYXBwZW5kKG5vZGVzWzBdKTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwpOyIsImltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHQvKipcclxuXHQgKiBKUXVlcnkgcHJldmVudCBqcXVlcnlcclxuXHQgKi9cclxuXHRjb25zdCAkID0gR2xvYmFsLiQgPSBHbG9iYWwuSlF1ZXJ5ID0gR2xvYmFsLmpRdWVyeSA9IEdsb2JhbC4kIHx8IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50O1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0cmV0dXJuIEdsb2JhbC5yZWFkeS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRpZiAoLzxbXjxdKz4vZy50ZXN0KGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gR2xvYmFsLmNyZWF0ZS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5maW5kLmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblx0XHR9XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudC5wcm90b3R5cGUsIEJhc2ljUXVlcnlTdXBwb3J0LCBFdmVudFN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblx0ZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpO1xyXG59KTtcclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEJhc2ljUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE5vZGVRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9Ob2RlUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLEJhc2ljUXVlcnlTdXBwb3J0LE5vZGVRdWVyeVN1cHBvcnQsSHRtbENsYXNzU3VwcG9ydCxFdmVudFN1cHBvcnQsU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LnByb3RvdHlwZSxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLnByb3RvdHlwZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlTGlzdC5wcm90b3R5cGUsIExpc3RTdXBwb3J0KTtcclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKXtcclxuXHRsZXQgbm9kZXMgPSB0aGlzLnZhbHVlcygpO1xyXG5cdGxldCBub2RlID0gbm9kZXMubmV4dCgpO1xyXG5cdGxldCByZXN1bHRzID0gW107XHJcblx0d2hpbGUobm9kZSAmJiBub2RlLnZhbHVlKXtcclxuXHRcdG5vZGUgPSBub2RlLnZhbHVlO1xyXG5cdFx0aWYodHlwZW9mIG5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0ICE9IG51bGwpe1xyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHJlc3VsdCk7XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpXHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRub2RlID0gbm9kZXMubmV4dCgpO1x0XHRcclxuXHR9XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1x0XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiICYmICBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1x0XHRcclxuXHR9XHJcblx0ZWxzZXtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGludGVybmFsID0ge1xyXG5cdFx0XHRsZW5ndGg6IHt2YWx1ZTogMH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRcdGxldCBsaXN0ID0gQXJyYXkuZnJvbShhcmdzLnNoaWZ0KCkpO1x0XHRcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBsaXN0W2ldICE9PSBcInVuZGVmaW5lZFwiICYmIGxpc3RbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdGludGVybmFsW2ldID0ge3ZhbHVlOiBsaXN0W2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdGludGVybmFsLmxlbmd0aC52YWx1ZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0cmV0dXJuIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLGludGVybmFsICk7XHJcblx0fVxyXG59IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oYVNlbGVjdG9yKSB7XHJcblx0XHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0XHRpZihtYXRjaCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzO1xyXG5cdFx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLnRyaW0oKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG5cclxuIiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19kYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuX19kYXRhID0ge307XHJcblx0XHRcdGlmKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0Zm9yIChuYW1lIGluIHRoaXMuZGF0YXNldClcclxuXHRcdFx0XHRcdHRoaXMuX19kYXRhW25hbWVdID0gdGhpcy5kYXRhc2V0W25hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV0gO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQ3VzdG9tRXZlbnRcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRyZXN1bHRbZXZlbnRdID0gd3JhcHBlZEV2ZW50SGFuZGxlcjtcdFx0XHRcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB3cmFwcGVkRXZlbnRIYW5kbGVyLCB0cnVlKTtcclxuXHRcdFx0XHJcblx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50TWFwLCBoYW5kbGVyQ29uZmlnLCBjYWxsYmFjaykpO1xyXG5cdFx0XHJcblx0XHR0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdID0gZXZlbnRNYXA7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxuXHRcclxuXHRjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDEgfHwgdHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRsZXQgZXZlbnRzID0gdW5kZWZpbmVkO1xyXG5cdFx0bGV0IGNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0ZXZlbnRzID0gYXJndW1lbnRzWzBdLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRjYWxsYmFjayA9IGFyZ3VtZW50c1swXS5zaGlmdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdGlmKHR5cGVvZiBldmVudE1hcCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0ZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHRcdE9iamVjdC5nZXRQcm9wZXJ0eU5hbWVzKHRoaXMuX19jYWxsYmFja01hcCkuZm9yRWFjaCgoZnVuY3Rpb24oYUV2ZW50LCBDYWxsYmFjayl7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIGV2ZW50TWFwW2FFdmVudF07XHJcblx0XHRcdFx0XHRpZihldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkgPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBldmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiB0aGlzW1wib25cIiArIGFyZ3VtZW50c1swXV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KGFyZ3VtZW50c1swXSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGFyZ3VtZW50c1swXSwgIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBhcmd1bWVudHNbMV0gfSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmFkZENsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnRvb2dsZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHRcclxuXHRpZih0eXBlb2YgUHJvdG90eXBlLmZvckVhY2ggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQXJyYXlcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4uLy4uL3BvbHlmaWxsL0FycmF5XCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0XHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0d2hpbGUoIXBhcmVudC5pcyhhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUocGFyZW50KXtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5pZC5sZW5ndGggPT0gMCl7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZihwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiAgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0XHRwYXJlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMubG9jYWxOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmKHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdGxldCBzYW1lVGFnU2libGluZ3MgPSBwYXJlbnQuZmluZChcIjpzY29wZT5cIiArIHNlbGVjdG9yKTtcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2FtZVRhZ1NpYmxpbmdzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IHNhbWVUYWdTaWJsaW5ncy5pbmRleE9mKHRoaXMpICsgMTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyBpbmRleCArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiID8gcGFyZW50LnNlbGVjdG9yKCkgKyBcIj5cIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbihhUXVlcnkpIHtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRlbHNle1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gdGhpcy5maW5kKGFRdWVyeSwgdHJ1ZSk7XHJcblx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYodHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwYXJlbnQgIT0gZG9jdW1lbnQpXHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudC5jbG9zZXN0KGFRdWVyeSk7XHJcblx0XHR9XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihhUXVlcnkpe1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHRcdGlmKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblxyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX19kaXNwbGF5IHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLl9fZGlzcGxheSA9IHRoaXMuc3R5bGUuZGlzcGxheTtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSB0cnVlO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuLi8uLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgSW5wdXRUeXBlcyA9W1xyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuZmluZChcIm9wdGlvbjpjaGVja2VkXCIsIHRydWUpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgb3B0aW9uKXtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIiAmJiBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcdFx0XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQubGVuZ3RoID09IDEpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0Lmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIiwgdHJ1ZSkuZm9yRWFjaCgoZnVuY3Rpb24odmFsdWVzLCBvcHRpb24pe1xyXG5cdFx0XHRcdFx0bGV0IGNoZWNrID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xO1xyXG5cdFx0XHRcdFx0aWYoY2hlY2spXHJcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgdmFsdWVzKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcIm9wdGlvblwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBhVmFsdWU7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1x0XHRcdFx0XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIHRoaXMudmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9uXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRdO1xyXG5cdFxyXG5cdGNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdFx0fVx0XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdFx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsIlxyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlLmpzXCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuaW1wb3J0IFwiLi9KUXVlcnlcIjtcclxuIiwiaWYgKCFBcnJheS5mcm9tKSB7XHJcblx0QXJyYXkuZnJvbSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGFyZy5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ1tqXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaChhcmdbal0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcmd1bWVudHNbMF0pLmZvckVhY2goXHJcblx0XHRcdFx0XHRcdFx0KGZ1bmN0aW9uKGFSZXN1bHQsIGFOYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJzZUludChhTmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpc1thTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2godGhpc1thTmFtZV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pLmJpbmQoYXJndW1lbnRzWzBdLCByZXN1bHQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxufTsiLCJpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xyXG5cdFx0cGFyYW1zID0gcGFyYW1zIHx8IHtcclxuXHRcdCAgICBidWJibGVzIDogZmFsc2UsXHJcblx0XHQgICAgY2FuY2VsYWJsZSA6IGZhbHNlLFxyXG5cdFx0ICAgIGRldGFpbCA6IG51bGxcclxuXHRcdH07XHJcblx0XHRsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXG5cdFx0cmV0dXJuIGV2dDtcclxuXHR9XHJcblx0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclxuXHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufVxyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKChmdW5jdGlvbihhU291cmNlLCBhQ2FsbGJhY2ssIGFUYXJnZXQpe1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYVRhcmdldCkuZm9yRWFjaChcclxuXHRcdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYVNvdXJjZVthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5cclxuY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IFx0QXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBwcm90b3R5cGUgPSBhcmdzLnNoaWZ0KCk7IFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRsZXQgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcihwcm90b3R5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiXSwic291cmNlUm9vdCI6IiJ9