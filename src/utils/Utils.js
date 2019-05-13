const Utils = {
	callWithList : function(aTarget, aFunction, aList) {
		let bind = arguments.length > 3;
		let action = (typeof aFunction === "string") ? aTarget[aFunction] : aFunction;
		if(bind)
			action = action.bind(arguments[3]);
		let list = (aList instanceof NodeList) ? aList.values : aList;
		
		list.forEach(action);
	},
	global : (window || global || self || {}),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

export default Utils;