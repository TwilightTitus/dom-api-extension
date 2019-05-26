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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.js");


const de = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].globalVar("de", {});
de.titus = de.titus || {};
de.titus.dom = de.titus.dom || {};
de.titus.dom.api = de.titus.dom.api || {};
if(typeof de.titus.dom.api.extention === "undefined") {
	de.titus.dom.api.extention = {
		VERSION : "1.0.2-beta7",
		utils : {
			Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
		}
	};

	const parser = new DOMParser();

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.find = function() {
		return document.find.apply(document, arguments);
	};

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.ready = function() {
		return document.ready.apply(document, arguments);
	};

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.create = function(aContent, aContentType) {
		if (typeof arguments[0] !== "string")
			throw new Error("The first argument must be a string!");

		let parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
		let nodes = parsed.body.childNodes;
		let frag = document.createDocumentFragment();
		frag.append(nodes);
		return frag.childNodes;
	};
}

/***/ }),

/***/ "./src/dom/Document.js":
/*!*****************************!*\
  !*** ./src/dom/Document.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

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
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);






/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
//
//Element.prototype.val = function() {
//	let result = new Map();		
//	let inputs = this.find("input", "select", "textarea");
//	if(inputs){	
//		inputs.forEach(function(node){
//			let value = node.val();
//			if(typeof value !== "undefined" && value != null)
//				result.set((node.name || node.id || node.selector()), node.val());
//		});	
//		return result;
//	}
//};

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
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

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

/***/ "./src/dom/HTMLTextAreaElement.js":
/*!****************************************!*\
  !*** ./src/dom/HTMLTextAreaElement.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

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

NodeList.prototype.applyTo = function(){
	let args = Array.from(arguments);
	let calling = args.shift();
	let isFunction = typeof calling === "function";
	let results = [];
	for(let i = 0; i < this.length; i++){
		let node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			let result = new Map();
			this.forEach(function(node){
				if(typeof node.val === "function"){
					let value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	let args = Array.from(arguments);
	let data = {};
	let counter = 0;
	
	while(args.length > 0){
		let arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || Array.isArray(arg)){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(aFunctionName, theArguments){
	let results = [];	
	this.forEach(function(node){
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from.apply(null, results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


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
		if (typeof this.__data__ === "undefined") {
			this.__data__ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data__[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data__;
		else if (arguments.length == 1)
			return this.__data__[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data__[arguments[0]];
		else
			this.__data__[arguments[0]] = arguments[1];
		
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

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
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
		let append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(append);
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
			if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(insert);
			else if(arg instanceof Node)
				this.insertBefore(arg, first);
			else if(typeof arg === "string")
				arg.forEach(insert);
		}
	};	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./src/dom/extentions/QuerySupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/QuerySupport.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function(aElement, aSelector){
	let match = parentSelector.exec(aSelector);
	if(match){
		let result = aElement;
		if(match.index > 0){
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if(result.length == 0)
				return;
		}	
		result = result.parent(match[2]);			
		if(result){
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.length > 0)
				result = result.find(nextSelector);
			
			return result;
		}		
	}
	else
		return aElement.querySelectorAll(aSelector);
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("QuerySupport",function(Prototype) {	
	Prototype.find = function() {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while(arg){
			if(typeof arg === "string"){
				let result = queryExecuter(this, arg);
				if(result)
					nodes.push(result);
			}
			
			arg = args.shift();
		}
		
		let result = NodeList.from.apply(null, nodes);
		return result;
	};
	
	Prototype.is = function() {
		if(this instanceof Document)
			return false;		
		else if(arguments.length == 1){
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
		if(!this.parentNode)
			return undefined;		
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			try{
				while(parent && !parent.is(arguments[0]))
					parent = parent.parent(arguments[0]);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return this.parentNode;
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
		if(this instanceof Document)
			return undefined;
		else if(this.id)
			return "#" + this.id;
		else{			
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if(parent){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0)
						selector += ':nth-child(' + (index + 1) + ')';
				}		
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			} 
			return selector;
		}
	};	

	Prototype.closest = function(aQuery) {			
		let node = this;
		while(node){
			let closests = node.find(aQuery);
			if(closests && closests.length > 0)
				return closests;
			else if(node.is(aQuery))
				return NodeList.from(node);
			
			node = node.parent();		
		}
	};
	
	Prototype.nested = function(aQuery){
		if(this.is(aQuery))
			return NodeList.from(this);	
		
		let nested = this.find(aQuery);
		if(nested && nested.length > 0)
			return nested;
		else
			return NodeList.from(this.parent(aQuery));
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


const InputTypes =[
	{
		selector : "select",
		get : function(){
			let result = [];
			this.find("option").forEach(function(option){
				if(option.selected)
					result.push(option.value);
			});
			
			return result;
		},
		set : function(){				
			let values = [];
			let args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(function(option){
				option.selected = values.indexOf(option.value) >= 0;
			});
			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
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


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
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
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./src/dom/NodeList.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Global */ "./src/Global.js");













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
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].globalVar("__DOM_API_EXTENSION_MAP__", {});
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
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (window || global || self || {}),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9FeHRlbmRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0V4dGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtB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Q0E7QUFDQTtBQUNBOztBQUVlLGlFQUFRLEU7Ozs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQSw2QjtBQUNBO0FBQ0E7O0FBRWUsOERBQUssRSIsImZpbGUiOiJkb20tYXBpLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3QgZGUgPSBVdGlscy5nbG9iYWxWYXIoXCJkZVwiLCB7fSk7XHJcbmRlLnRpdHVzID0gZGUudGl0dXMgfHwge307XHJcbmRlLnRpdHVzLmRvbSA9IGRlLnRpdHVzLmRvbSB8fCB7fTtcclxuZGUudGl0dXMuZG9tLmFwaSA9IGRlLnRpdHVzLmRvbS5hcGkgfHwge307XHJcbmlmKHR5cGVvZiBkZS50aXR1cy5kb20uYXBpLmV4dGVudGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdGRlLnRpdHVzLmRvbS5hcGkuZXh0ZW50aW9uID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0dXRpbHMgOiB7XHJcblx0XHRcdFV0aWxzOiBVdGlsc1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcblx0VXRpbHMuZ2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdFV0aWxzLmdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdFV0aWxzLmdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYUNvbnRlbnRUeXBlKSB7XHJcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cclxuXHRcdGxldCBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksIGFyZ3VtZW50c1sxXSB8fCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGxldCBub2RlcyA9IHBhcnNlZC5ib2R5LmNoaWxkTm9kZXM7XHJcblx0XHRsZXQgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdGZyYWcuYXBwZW5kKG5vZGVzKTtcclxuXHRcdHJldHVybiBmcmFnLmNoaWxkTm9kZXM7XHJcblx0fTtcclxufSIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHRkb2N1bWVudC50cmlnZ2VyKFwicmVhZHlcIik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBRdWVyeVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuLy9cclxuLy9FbGVtZW50LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuLy9cdGxldCByZXN1bHQgPSBuZXcgTWFwKCk7XHRcdFxyXG4vL1x0bGV0IGlucHV0cyA9IHRoaXMuZmluZChcImlucHV0XCIsIFwic2VsZWN0XCIsIFwidGV4dGFyZWFcIik7XHJcbi8vXHRpZihpbnB1dHMpe1x0XHJcbi8vXHRcdGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG4vL1x0XHRcdGxldCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcbi8vXHRcdFx0aWYodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9IG51bGwpXHJcbi8vXHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuLy9cdFx0fSk7XHRcclxuLy9cdFx0cmV0dXJuIHJlc3VsdDtcclxuLy9cdH1cclxuLy99OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxUZXh0QXJlYUVsZW1lbnQsRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gYXJndW1lbnRzWzBdXHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KSk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QsIExpc3RTdXBwb3J0KTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRsZXQgbm9kZSA9IHRoaXNbaV07XHJcblx0XHRsZXRcdHJlc3VsdDtcclxuXHRcdGlmKGlzRnVuY3Rpb24pXHJcblx0XHRcdHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkoW25vZGVdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XHJcblx0XHRcclxuXHRcdGlmKHJlc3VsdClcclxuXHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGFyZykpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7IFxyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fZGF0YV9fID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuX19kYXRhX18gPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFfX1tuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFfXztcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhX19bYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFfX1thcmd1bWVudHNbMF1dO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLl9fZGF0YV9fW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRldmVudE1hcFtldmVudF0gPSB3cmFwcGVkRXZlbnRIYW5kbGVyO1x0XHRcdFxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHdyYXBwZWRFdmVudEhhbmRsZXIsIHRydWUpO1xyXG5cdFx0XHRcclxuXHRcdH0pLmJpbmQodGhpcywgZXZlbnRNYXAsIGhhbmRsZXJDb25maWcsIGNhbGxiYWNrKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja10gPSBldmVudE1hcDtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMSB8fCB0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdGxldCBldmVudHMgPSB1bmRlZmluZWQ7XHJcblx0XHRsZXQgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRldmVudHMgPSBhcmd1bWVudHNbMF0uc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdGNhbGxiYWNrID0gYXJndW1lbnRzWzBdLnNoaWZ0KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50ISAtPiBjYWxsIGZ1bmN0aW9uKFtldmVudHxoYW5kbGVyXSlcIik7XHJcblx0XHRcclxuXHRcdGxldCByZW1vdmFsSGFuZGxlciA9IFtdO1xyXG5cdFx0aWYodHlwZW9mIGV2ZW50cyA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXTtcclxuXHRcdFx0aWYodHlwZW9mIGV2ZW50TWFwICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHRldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudE1hcCwgZXZlbnQpe1xyXG5cdFx0XHRcdFx0bGV0IGhhbmRsZXIgPSBldmVudE1hcFtldmVudF07XHJcblx0XHRcdFx0XHRpZih0eXBlb2YgaGFuZGxlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaGFuZGxlcik7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVtb3ZhbEhhbmRsZXIsIGV2ZW50TWFwKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudCl7XHJcblx0XHRcdFx0T2JqZWN0LmdldFByb3BlcnR5TmFtZXModGhpcy5fX2NhbGxiYWNrTWFwKS5mb3JFYWNoKChmdW5jdGlvbihhRXZlbnQsIENhbGxiYWNrKXtcclxuXHRcdFx0XHRcdGxldCBldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0XHRkZWxldGUgZXZlbnRNYXBbYUV2ZW50XTtcclxuXHRcdFx0XHRcdGlmKGV2ZW50TWFwLmdldE93blByb3BlcnR5TmFtZXMoKSA9PSAwKVxyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50KSk7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0XHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIHRoaXNbXCJvblwiICsgYXJndW1lbnRzWzBdXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG5cdFx0XHRldmVudC5pbml0RXZlbnQoYXJndW1lbnRzWzBdLCB0cnVlLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoYXJndW1lbnRzWzBdLCAgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IGFyZ3VtZW50c1sxXSB9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy50b29nbGVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFyZykgfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZmlyc3QgPSB0aGlzLmNoaWxkTm9kZXMuZmlyc3QoKTtcclxuXHRcdGxldCBpbnNlcnQgPSBwcmVwZW5kLmJpbmQodGhpcywgZmlyc3QpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoYXJnLCBmaXJzdCk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbihhRWxlbWVudCwgYVNlbGVjdG9yKXtcclxuXHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0aWYobWF0Y2gpe1xyXG5cdFx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdFx0aWYobWF0Y2guaW5kZXggPiAwKXtcclxuXHRcdFx0cmVzdWx0ID0gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcclxuXHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1x0XHRcdFxyXG5cdFx0aWYocmVzdWx0KXtcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlF1ZXJ5U3VwcG9ydFwiLGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBub2RlcyA9IFtdO1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgYXJnKTtcclxuXHRcdFx0XHRpZihyZXN1bHQpXHJcblx0XHRcdFx0XHRub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgbm9kZXMpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50KVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHRcdFxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoIXRoaXMucGFyZW50Tm9kZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcdFx0XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0d2hpbGUocGFyZW50ICYmICFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0fWNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcInRoaXM6XCIsIHRoaXMsIFwicGFyZW50OlwiLCBwYXJlbnQsIFwiZXJyb3I6XCIsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUocGFyZW50KXtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50KVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZih0aGlzLmlkKVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdFx0ZWxzZXtcdFx0XHRcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZihwYXJlbnQpe1xyXG5cdFx0XHRcdGxldCBzYW1lVGFnU2libGluZ3MgPSBwYXJlbnQuZmluZChcIjpzY29wZT5cIiArIHNlbGVjdG9yKTtcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2FtZVRhZ1NpYmxpbmdzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IHNhbWVUYWdTaWJsaW5ncy5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJzpudGgtY2hpbGQoJyArIChpbmRleCArIDEpICsgJyknO1xyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gcGFyZW50LnNlbGVjdG9yKCk7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudFNlbGVjdG9yID8gcGFyZW50U2VsZWN0b3IgKyBcIj5cIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHRcdH0gXHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHRcdFx0XHJcblx0XHRsZXQgbm9kZSA9IHRoaXM7XHJcblx0XHR3aGlsZShub2RlKXtcclxuXHRcdFx0bGV0IGNsb3Nlc3RzID0gbm9kZS5maW5kKGFRdWVyeSk7XHJcblx0XHRcdGlmKGNsb3Nlc3RzICYmIGNsb3Nlc3RzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGNsb3Nlc3RzO1xyXG5cdFx0XHRlbHNlIGlmKG5vZGUuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShub2RlKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudCgpO1x0XHRcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbihhUXVlcnkpe1xyXG5cdFx0aWYodGhpcy5pcyhhUXVlcnkpKVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcdFxyXG5cdFx0XHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZihuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG5cclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fX2Rpc3BsYXkgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZighdGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuX19kaXNwbGF5ID0gdGhpcy5zdHlsZS5kaXNwbGF5O1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IHRydWU7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBJbnB1dFR5cGVzID1bXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChmdW5jdGlvbihvcHRpb24pe1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbil7XHJcblx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy52YWx1ZSA9PSBcIm9uXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9mZlwiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhVmFsdWUpKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cdFxyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYUNhbGxiYWNrLCBhVGFyZ2V0KXtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFUYXJnZXQpLmZvckVhY2goXHJcblx0XHRcdChmdW5jdGlvbihhU291cmNlLCBhVGFyZ2V0LGFDYWxsYmFjaywgIGFOYW1lKSB7XHJcblx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGFTb3VyY2VbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRhU291cmNlW2FOYW1lXSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGFDYWxsYmFjay5jYWxsKHRoaXMsIGFOYW1lLCBhcmd1bWVudHMpO307XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gXHRBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX0RPTV9BUElfRVhURU5TSU9OX01BUF9fXCIsIHt9KTtcclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcdFxyXG5cdFx0bGV0IGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXTtcclxuXHRcdGlmKCFleHRlbnNpb25zKVxyXG5cdFx0XHRleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV0gPSB7fTtcdFx0XHJcblx0XHRcclxuXHRcdGlmKCFleHRlbnNpb25zW2FOYW1lXSl7XHJcblx0XHRcdGV4dGVuc2lvbnNbYU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0YUV4dGVudGlvbihhVHlwZS5wcm90b3R5cGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJkdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCJcIiArIGFOYW1lICsgXCJcXFwiIVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlcjsiLCJjb25zdCBVdGlscyA9IHtcclxuXHRnbG9iYWwgOiAod2luZG93IHx8IGdsb2JhbCB8fCBzZWxmIHx8IHt9KSxcclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBVdGlscy5nbG9iYWxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRVdGlscy5nbG9iYWxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFV0aWxzLmdsb2JhbFthTmFtZV07XHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=