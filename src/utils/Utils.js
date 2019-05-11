const callWithNodeList = function(aTarget, aFunction, aList) {
	let offset = 0;
	while(aList.length > offset) {
		if (aList[0])
			aFunction.call(aTarget, aList[offset]);
		else
			offset++;
	}
};
const callWithList = function(aTarget, aFunction, aList) {
	for(let i = 0; i < aList.length; i++) {
		if (aList[i])
			aFunction.call(aTarget, aList[i]);
	}
};
export default {
	callWithNodeList : callWithNodeList,
	callWithList : callWithList
};