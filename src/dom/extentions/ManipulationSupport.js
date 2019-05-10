import Extender from "../../utils/Extender";
import Utils from "../../utils/Utils";

const support = Extender("ManipulationSupport", function(Prototype) {	
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
	
	const append = Prototype.append;	
	Prototype.append = function(){
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof NodeList)
				Utils.callWithValueList(this, Prototype.appendChild, arg);
			else if(arg instanceof Node)
				this.appendChild(arg);
		}
	};
	
	const prepend = Prototype.prepend;
	Prototype.prepend = function(){
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof NodeList)
				Utils.callWithValueList(this, Prototype.prependChild, arg);
			else if(arg instanceof Node)
				this.prependChild(arg);
		}
	};	
});
export default support;