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
export default support;

