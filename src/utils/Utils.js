const callWithValueList = function(aTarget, aFunction, aList) {
	for (let i = 0; i < aList.length; i++) {
		let value = aList[i];
		if (value){
			aFunction.call(aTarget, value);
		}
	}
};
export default {callWithValueList:callWithValueList};