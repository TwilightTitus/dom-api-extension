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
export default support;