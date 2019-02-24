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
export default support;