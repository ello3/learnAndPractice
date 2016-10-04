// reversing an array

function reverseArray(array) {
	var temp = [];
	for (var i = array.length - 1 ; i >= 0; i--){
		temp.push(array[i]);
	}

	return temp;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
	var temp = [];

	for (var i = array.length - 1 ; i >= 0; i--){
		temp.push(array[i]);
	}

	return array = temp;

}

var list = [1,2,3,4,5,6,6];

console.log(reverseArray(list));

console.log(list);

// smarter way

console.log("===========================\n")

function reverseArray2(array) {
	return array.unshift();
}

console.log(reverseArray2(["A", "B", "C"]));