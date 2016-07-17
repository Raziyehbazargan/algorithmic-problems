function isPolindrom (str) {
	str = str.split("");

	var i = str.length-1;
	var j =0;

	while (i-j>=0) {
		if (str[i]!==str[j]) {
			return false;
		}
		i--;
		j++;
	}
	return true;
}

function isPolindrom (str) {
	str = str.split("");
    var i,j;
	if (str.length%2!==0) {
		i = j = Math.floor(str.length/2);
	} else {
		i = str.length/2-1;
		j = i+1;
	}

	while (i>=0) {
		if (str[i]!==str[j]) {
			return false;
		};
		i--;
		j++;
	}
	return true;
}