function uniqueChar (str) {
	var string = str.split("");

	for (var i =0; i<string.length-1; i++) {
		for (var j =i+1; j<string.length; j++) {
			if (string[i]===string[j]) {
				return false;
			}
		}
	}
	return true;
}

function uniqueChar (str) {
	var string = str.split("").sort();
	for (var i= 0; i<string.length-1; i++) {
		if (string[i]===string[i+1]) {
			return false;
		}
	}
	return true;
}