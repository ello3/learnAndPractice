// seems like default value in argument does not work in Sublime js engine, otherwise can just assign step a default value

function range(start, end, step) {

	var list = [];

	if (step == undefined) step = 1;

	if (start == end) {
		list = start;
		return list;
	}

	if (start < end) {
	for (var i = start; i <= end; i += step) {
		list.push(i);
		}
	}

	else for (var j = start; j >= end; j -= step) {
		step = Math.abs(step);
		list.push(j);
	}

	return list;
}


console.log(range(1, 10)) 