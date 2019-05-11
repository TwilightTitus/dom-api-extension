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

	Global.de = Global.de || {};
	Global.de.titus = Global.de.titus || {};
	Global.de.titus.dom = Global.de.titus.dom || {};
	Global.de.titus.dom.api = Global.de.titus.dom.api || {};
	Global.de.titus.dom.api.extention = {
		VERSION : "1.0.2-beta5"
	};

	const parser = new DOMParser();

	Global.find = function() {
		return document.find.apply(document, arguments);
	};

	Global.ready = function() {
		return document.ready.apply(document, arguments);
	};

	Global.create = function(aContent, aContentType) {
		if (typeof arguments[0] !== "string")
			throw new Error("The first argument must be a string!");

		let parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
		let nodes = parsed.body.childNodes;
		let frag = document.createDocumentFragment();
		frag.append(nodes);
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
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document, _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});





/***/ }),

/***/ "./src/dom/DocumentFragment.js":
/*!*************************************!*\
  !*** ./src/dom/DocumentFragment.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DocumentFragment, _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);






/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/NodeQuerySupport */ "./src/dom/extentions/NodeQuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");






Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Element,_extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

/***/ }),

/***/ "./src/dom/EventTarget.js":
/*!********************************!*\
  !*** ./src/dom/EventTarget.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

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
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./src/dom/extentions/ShowHideSupport.js");






Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

NodeList.applyTo = function(){
	let args = Array.from(arguments);
	let calling = args.shift();
	let isFunction = typeof calling === "function";
	let results = [];
	for(let i = 0; i < this.length; i++){
		let node = this[i];
		let	result;
		if(isfunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply([node].concat(args));
		
		if(result)
			results.push(result);
	}
	
	return results;
};


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
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


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

/***/ "./src/dom/extentions/AttributeSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/AttributeSupport.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("AttributeSupport", function(Prototype) {
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
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/BasicQuerySupport.js":
/*!*************************************************!*\
  !*** ./src/dom/extentions/BasicQuerySupport.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("BasicQuerySupport",function(Prototype) {
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("DataSupport", function(Prototype) {
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("EventSupport", function(Prototype) {
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
			eventMap[event] = wrappedEventHandler;			
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("HtmlClassSupport", function(Prototype) {	
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ListSupport", function(Prototype) {		
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ManipulationSupport", function(Prototype) {	
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
				else if(content instanceof Node || content instanceof NodeList){
					this.empty();
					this.append(content);
				}
			}).bind(this));		
			
		return this;
	};
	
	Prototype.append = function(){		
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(Array.is(arg))
				_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].callWithList(this, Prototype.appendChild, arg);
			else if(arg instanceof NodeList)
				_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].callWithNodeList(this, Prototype.appendChild, arg);
			else if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				this.append(create(arg));
		}
	};
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		let first = this.childNodes.first();
		let insert = prepend.bind(this, first);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(Array.is(arg))
				_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].callWithList(this, insert, arg);
			else if(arg instanceof NodeList)
				_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].callWithNodeList(this, insert, arg);
			else if(arg instanceof Node)
				this.insertBefore(arg, first);
			else if(typeof arg === "string")
				this.prepend(create(arg));
		}
	};	
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("NodeQuerySupport", function(Prototype) {
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ReadyEventSupport", function(Prototype) {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ShowHideSupport", function(Prototype) {
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
	
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ValueSupport", function(Prototype) {
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
	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/NodeList */ "./src/dom/NodeList.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _JQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JQuery */ "./src/JQuery.js");













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
const extendPrototype = function(){
	let args = 	Array.from(arguments);
	let type = args.shift();	
	while(args.length > 0){
		let extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (extendPrototype);

/***/ }),

/***/ "./src/utils/Extender.js":
/*!*******************************!*\
  !*** ./src/utils/Extender.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EXTENSIONS_MAP = {};
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
		
		
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Extender);

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const callWithNodeList = function(aTarget, aFunction, aList) {
	let offset = 0;
	while(aList.length > offset) {
		if (aList[0])
			aFunction.call(aTarget, aList[offset]);
		else
			offset++;
	}
};
const callWithList = function(aTarget, aFunction, aList) {
	for(let i = 0; i < aList.length; i++) {
		if (aList[i])
			aFunction.call(aTarget, aList[i]);
	}
};
/* harmony default export */ __webpack_exports__["a"] = ({
	callWithNodeList : callWithNodeList,
	callWithList : callWithList
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9KUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9Ob2RlUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9FeHRlbmRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0V4dGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJkb20tYXBpLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHJcblx0R2xvYmFsLmRlID0gR2xvYmFsLmRlIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cyA9IEdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMuZG9tID0gR2xvYmFsLmRlLnRpdHVzLmRvbSB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMuZG9tLmFwaSA9IEdsb2JhbC5kZS50aXR1cy5kb20uYXBpIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5kb20uYXBpLmV4dGVudGlvbiA9IHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIlxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcblx0R2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYUNvbnRlbnRUeXBlKSB7XHJcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cclxuXHRcdGxldCBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksIGFyZ3VtZW50c1sxXSB8fCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGxldCBub2RlcyA9IHBhcnNlZC5ib2R5LmNoaWxkTm9kZXM7XHJcblx0XHRsZXQgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdGZyYWcuYXBwZW5kKG5vZGVzKTtcclxuXHRcdHJldHVybiBmcmFnLmNoaWxkTm9kZXM7XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7XHJcbiIsImltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHQvKipcclxuXHQgKiBKUXVlcnkgcHJldmVudCBqcXVlcnlcclxuXHQgKi9cclxuXHRjb25zdCAkID0gR2xvYmFsLiQgPSBHbG9iYWwuSlF1ZXJ5ID0gR2xvYmFsLmpRdWVyeSA9IEdsb2JhbC4kIHx8IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50O1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0cmV0dXJuIEdsb2JhbC5yZWFkeS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRpZiAoLzxbXjxdKz4vZy50ZXN0KGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gR2xvYmFsLmNyZWF0ZS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5maW5kLmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblx0XHR9XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIEJhc2ljUXVlcnlTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LnRyaWdnZXIoXCJyZWFkeVwiKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBCYXNpY1F1ZXJ5U3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEJhc2ljUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBOb2RlUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LEJhc2ljUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBOb2RlUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudCwgSHRtbENsYXNzU3VwcG9ydCwgU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlTGlzdCwgTGlzdFN1cHBvcnQpO1xyXG5cclxuTm9kZUxpc3QuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGxldCByZXN1bHRzID0gW107XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0bGV0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc2Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IG5vZGVzID0gdGhpcy52YWx1ZXMoKTtcclxuXHRsZXQgbm9kZSA9IG5vZGVzLm5leHQoKTtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1xyXG5cdHdoaWxlKG5vZGUgJiYgbm9kZS52YWx1ZSl7XHJcblx0XHRub2RlID0gbm9kZS52YWx1ZTtcclxuXHRcdGlmKHR5cGVvZiBub2RlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCAhPSBudWxsKXtcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChyZXN1bHQpO1xyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdFx0bm9kZSA9IG5vZGVzLm5leHQoKTtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcdFxyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlLCBFdmVudFRhcmdldC5wcm90b3R5cGUpO1xyXG5cclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiICYmICBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1x0XHRcclxuXHR9XHJcblx0ZWxzZXtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGludGVybmFsID0ge1xyXG5cdFx0XHRsZW5ndGg6IHt2YWx1ZTogMH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRcdGxldCBsaXN0ID0gQXJyYXkuZnJvbShhcmdzLnNoaWZ0KCkpO1x0XHRcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBsaXN0W2ldICE9PSBcInVuZGVmaW5lZFwiICYmIGxpc3RbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdGludGVybmFsW2ldID0ge3ZhbHVlOiBsaXN0W2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdGludGVybmFsLmxlbmd0aC52YWx1ZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0cmV0dXJuIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLGludGVybmFsICk7XHJcblx0fVxyXG59IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlcygpID8gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pLmNhbGwodGhpcykgOiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJCYXNpY1F1ZXJ5U3VwcG9ydFwiLGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oYVNlbGVjdG9yKSB7XHJcblx0XHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0XHRpZihtYXRjaCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzO1xyXG5cdFx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLnRyaW0oKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2RhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dGhpcy5fX2RhdGEgPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFbbmFtZV0gPSB0aGlzLmRhdGFzZXRbbmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IFdyYXBwZWRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbihhQ29uZmlnLCBhQ2FsbGJhY2sgLGFFdmVudCl7XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5maWx0ZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgIWFFdmVudC50YXJnZXQuaXMoYUNvbmZpZy5maWx0ZXIpKVx0XHRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRsZXQgYXJncyA9IFthRXZlbnRdO1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0YXJncyA9IGFyZ3MuY29uY2F0KGFDb25maWcuZGF0YSk7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBhQ2FsbGJhY2suYXBwbHkoYUNhbGxiYWNrLCBhcmdzKTtcclxuXHRcdGlmKGFDb25maWcuc2luZ2xlQ2FsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGFDYWxsYmFjayk7XHJcblx0XHRcclxuXHRcdHJldHVybiByZXN1bHQ7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0Y29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0dGhpcy5vbihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0dGhpcy5fX2NhbGxiYWNrTWFwID0ge307XHJcblxyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgZXZlbnRzID0gYXJncy5zaGlmdCgpLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGxldCBoYW5kbGVyQ29uZmlnID0ge1xyXG5cdFx0XHRmaWx0ZXIgOiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkuc3BsaXQoL1xccyosXFxzKi8pIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0ZGF0YSA6ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJmdW5jdGlvblwiID8gYXJncy5zaGlmdCgpIDogdW5kZWZpbmVkKVxyXG5cdFx0fTtcclxuXHQgICAgbGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdCAgICBcclxuXHQgICAgaGFuZGxlckNvbmZpZy5zaW5nbGVDYWxsID0gKHR5cGVvZiBhcmdzWzBdICE9PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlKTtcclxuXHJcblx0XHRsZXQgZXZlbnRNYXAgPSB7fTtcclxuXHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGNvbmZpZywgY2FsbGJhY2ssIGV2ZW50KXtcclxuXHRcdFx0bGV0IHdyYXBwZWRFdmVudEhhbmRsZXIgPSBXcmFwcGVkRXZlbnRIYW5kbGVyLmJpbmQodGhpcywgY29uZmlnLCBjYWxsYmFjayk7XHJcblx0XHRcdGV2ZW50TWFwW2V2ZW50XSA9IHdyYXBwZWRFdmVudEhhbmRsZXI7XHRcdFx0XHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgd3JhcHBlZEV2ZW50SGFuZGxlciwgdHJ1ZSk7XHJcblx0XHRcdFxyXG5cdFx0fSkuYmluZCh0aGlzLCBldmVudE1hcCwgaGFuZGxlckNvbmZpZywgY2FsbGJhY2spKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXSA9IGV2ZW50TWFwO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcblx0XHJcblx0Y29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAxIHx8IHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0bGV0IGV2ZW50cyA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBjYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGV2ZW50cyA9IGFyZ3VtZW50c1swXS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0Y2FsbGJhY2sgPSBhcmd1bWVudHNbMF0uc2hpZnQoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgYXJndW1lbnQhIC0+IGNhbGwgZnVuY3Rpb24oW2V2ZW50fGhhbmRsZXJdKVwiKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlbW92YWxIYW5kbGVyID0gW107XHJcblx0XHRpZih0eXBlb2YgZXZlbnRzID09PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0ZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHRpZih0eXBlb2YgZXZlbnRNYXAgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdGV2ZW50TWFwLmdldE93blByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50TWFwLCBldmVudCl7XHJcblx0XHRcdFx0XHRsZXQgaGFuZGxlciA9IGV2ZW50TWFwW2V2ZW50XTtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBoYW5kbGVyICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChoYW5kbGVyKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZW1vdmFsSGFuZGxlciwgZXZlbnRNYXApKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50KXtcclxuXHRcdFx0XHRPYmplY3QuZ2V0UHJvcGVydHlOYW1lcyh0aGlzLl9fY2FsbGJhY2tNYXApLmZvckVhY2goKGZ1bmN0aW9uKGFFdmVudCwgQ2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBldmVudE1hcFthRXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYoZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpID09IDApXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgZXZlbnQpKTtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRcclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgdGhpc1tcIm9uXCIgKyBhcmd1bWVudHNbMF1dID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdGV2ZW50LmluaXRFdmVudChhcmd1bWVudHNbMF0sIHRydWUsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChhcmd1bWVudHNbMF0sICB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogYXJndW1lbnRzWzFdIH0pO1xyXG5cdFx0XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmFkZENsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnRvb2dsZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHRcclxuXHRpZih0eXBlb2YgUHJvdG90eXBlLmZvckVhY2ggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTWFuaXB1bGF0aW9uU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbihjb250ZW50KXtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbigpe1x0XHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihBcnJheS5pcyhhcmcpKVxyXG5cdFx0XHRcdFV0aWxzLmNhbGxXaXRoTGlzdCh0aGlzLCBQcm90b3R5cGUuYXBwZW5kQ2hpbGQsIGFyZyk7XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0VXRpbHMuY2FsbFdpdGhOb2RlTGlzdCh0aGlzLCBQcm90b3R5cGUuYXBwZW5kQ2hpbGQsIGFyZyk7XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aGlzLmFwcGVuZChjcmVhdGUoYXJnKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oYUZpcnN0RWxlbWVudCwgYUVsZW1lbnQpe1xyXG5cdFx0dGhpcy5pbnNlcnRCZWZvcmUoYUVsZW1lbnQsIGFGaXJzdEVsZW1lbnQpO1xyXG5cdH07XHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRsZXQgaW5zZXJ0ID0gcHJlcGVuZC5iaW5kKHRoaXMsIGZpcnN0KTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihBcnJheS5pcyhhcmcpKVxyXG5cdFx0XHRcdFV0aWxzLmNhbGxXaXRoTGlzdCh0aGlzLCBpbnNlcnQsIGFyZyk7XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0VXRpbHMuY2FsbFdpdGhOb2RlTGlzdCh0aGlzLCBpbnNlcnQsIGFyZyk7XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmluc2VydEJlZm9yZShhcmcsIGZpcnN0KTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMucHJlcGVuZChjcmVhdGUoYXJnKSk7XHJcblx0XHR9XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJOb2RlUXVlcnlTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdHdoaWxlKCFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuaWQubGVuZ3RoID09IDApe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgIERvY3VtZW50RnJhZ21lbnQpXHJcblx0XHRcdFx0cGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmxvY2FsTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZih0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKSArIDE7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RvciArPSAnOm50aC1jaGlsZCgnICsgaW5kZXggKyAnKSc7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IHBhcmVudC5zZWxlY3RvcigpICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHJcblx0XHRpZih0aGlzLmlzKGFRdWVyeSkpXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IHRoaXMuZmluZChhUXVlcnksIHRydWUpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgcGFyZW50ICE9IGRvY3VtZW50KVxyXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuY2xvc2VzdChhUXVlcnkpO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLmNsb3Nlc3RzKGFRdWVyeSk7XHJcblx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX19kaXNwbGF5IHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLl9fZGlzcGxheSA9IHRoaXMuc3R5bGUuZGlzcGxheTtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSB0cnVlO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IElucHV0VHlwZXMgPVtcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmZpbmQoXCJvcHRpb246Y2hlY2tlZFwiLCB0cnVlKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIG9wdGlvbil7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVzdWx0KSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIgJiYgYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0Lmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFswXTtcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdC5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIsIHRydWUpLmZvckVhY2goKGZ1bmN0aW9uKHZhbHVlcywgb3B0aW9uKXtcclxuXHRcdFx0XHRcdGxldCBjaGVjayA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcclxuXHRcdFx0XHRcdGlmKGNoZWNrKVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHZhbHVlcykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJvcHRpb25cIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih0aGlzLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gYVZhbHVlO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiB0aGlzLnZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMudmFsdWUgPT0gXCJvblwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XTtcclxuXHRcclxuXHRjb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHRcdH1cdFxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRcdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cdFx0XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgXCIuL0pRdWVyeVwiO1xyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKChmdW5jdGlvbihhU291cmNlLCBhQ2FsbGJhY2ssIGFUYXJnZXQpe1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYVRhcmdldCkuZm9yRWFjaChcclxuXHRcdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYVNvdXJjZVthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gXHRBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImNvbnN0IEVYVEVOU0lPTlNfTUFQID0ge307XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsImNvbnN0IGNhbGxXaXRoTm9kZUxpc3QgPSBmdW5jdGlvbihhVGFyZ2V0LCBhRnVuY3Rpb24sIGFMaXN0KSB7XHJcblx0bGV0IG9mZnNldCA9IDA7XHJcblx0d2hpbGUoYUxpc3QubGVuZ3RoID4gb2Zmc2V0KSB7XHJcblx0XHRpZiAoYUxpc3RbMF0pXHJcblx0XHRcdGFGdW5jdGlvbi5jYWxsKGFUYXJnZXQsIGFMaXN0W29mZnNldF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRvZmZzZXQrKztcclxuXHR9XHJcbn07XHJcbmNvbnN0IGNhbGxXaXRoTGlzdCA9IGZ1bmN0aW9uKGFUYXJnZXQsIGFGdW5jdGlvbiwgYUxpc3QpIHtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChhTGlzdFtpXSlcclxuXHRcdFx0YUZ1bmN0aW9uLmNhbGwoYVRhcmdldCwgYUxpc3RbaV0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNhbGxXaXRoTm9kZUxpc3QgOiBjYWxsV2l0aE5vZGVMaXN0LFxyXG5cdGNhbGxXaXRoTGlzdCA6IGNhbGxXaXRoTGlzdFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=