const callWithNodeList = function(aTarget, aFunction, aList) {
	let offset = 0;
	while(aList.length > offset) {
		if (aList[0])
			aFunction.call(aTarget, aList[offset]);
		else
			offset++;
	}
};
export default {callWithNodeList:callWithNodeList};