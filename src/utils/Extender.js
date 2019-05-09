const Extender = function(aName, aExtention){
	return function(aPrototype){
		if(!aPrototype.__extentions__)
			aPrototype.__extentions__ = {};
		
		if(!aPrototype.__extentions__[aName]){
			aPrototype.__extentions__[aName] = true;
			aExtention(aPrototype);
		}
	}
};

export default Extender;