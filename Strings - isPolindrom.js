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