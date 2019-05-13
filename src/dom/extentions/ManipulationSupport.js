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
	
	Prototype.append = function(){
		try{
			for(let i = 0; i < arguments.length; i++){
				let arg = arguments[i];
				if(arg instanceof Node)
					this.appendChild(arg);
				else if(typeof arg === "string")
					Utils.callWithList(this, Prototype.appendChild, create(arg), this);
				else if(Array.isArray(arg) || arg instanceof NodeList)
					Utils.callWithList(this, Prototype.appendChild.bind(this), arg);
			}
		}catch (e) {			
			console.log("Prototype:", Prototype, "Error:", e);
			
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
				Utils.callWithList(this, insert, arg);
			else if(arg instanceof Node)
				this.insertBefore(arg, first);
			else if(typeof arg === "string")
				this.prepend(create(arg));
		}
	};	
});
export default support;