// chapter 4 exercise a list
function arrayToList(array) {
	var list = [];
	for (var i = array.length - 1; i >= 0; i--)
		list = {value: array[i], rest: list};
	return list;
}

console.log(arrayToList(["a", "b", "c", "d"]));

function listToArray(list) {
	var array = [];
	for (var i = list; i; i = i.rest) {
		array.push(i.value)
	}
	return array;
}

console.log(listToArray(arrayToList(["a", "b", "c", "d"])));

function prepend(element, list) {
	return {value: element, rest: list}
}

console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
	if (!list)
		return undefined;
	else if (number == 0)
		return list.value;
	else
		return nth(list.rest, number - 1);
}

console.log(nth(arrayToList([10,20,30]), 1))