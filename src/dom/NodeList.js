import extendPrototype from "../utils/ExtendPrototype";
import DelegaterBuilder from "../utils/DelegaterBuilder";
import ListSupport from "./extentions/ListSupport";

extendPrototype(NodeList, ListSupport);

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

NodeList.prototype.val = function() {
	if(this.length > 0){
		let result = new Map();
		this.forEach(function(node){
			if(typeof node.val === "function"){
				let value = node.val();
				if(typeof value !== "undefined" && value != null)
					result.set((node.name || node.id || node.selector()), node.val());
			}
		});	
		return result;
	}
};

NodeList.from = function(){
	let args = Array.from(arguments);
	let data = {};
	let counter = 0;
	
	while(args.length > 0){
		let arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			let list = Array.from(arg);
			if(!list || list.length === 0)
				list = [arg];
							
			for(let i = 0; i < list.length; i++){
				if(list[i] && list[i] instanceof Node){
					data[counter++] = {value: list[i], enumerable: true};
				}
			}			
		}
	}
	
	data.length = {value: counter};
	
	return  Object.create(NodeList.prototype, data);
};


DelegaterBuilder(function(aFunctionName, theArguments){
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
