if (!Array.from) {
	Array.from = function() {
		let result = [];
		if (arguments.length > 0) {
			for (let i = 0; i < arguments.length; i++) {
				let arg = arguments[i];
				if (typeof arg.length === "number") {
					for (let j = 0; j < arg.length; j++)
						if (typeof arg[j] !== "undefined")
							result.push(arg[j]);
				} else {
					Object.getOwnPropertyNames(arguments[0]).forEach(
							(function(aResult, aName) {
								try {
									parseInt(aName);
									if (typeof this[aName] !== "undefined")
										result.push(this[aName]);
								} catch (e) {
								}
							}).bind(arguments[0], result));
				}
			}
		}
		return result;
	};
};