const extendPrototype = function(){
	let args = 	Array.from(arguments);
	let prototype = args.shift(); 
	while(args.length > 0){
		let extender = args.shift();
		extender(prototype);
	}
};

export default extendPrototype;