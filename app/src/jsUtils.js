
var merge = function (firstArray, secondArray) {
	var result = [];
	firstArray.forEach(function (element) {
		result.push(element);
	});
	secondArray.forEach(function (element) {
		result.push(element);
	});
	return result;
};