function checkOrder (str1, str2) {
	var source = 0;
    var arr1 = str1.split("");
    var arr2 = str2.split("");
	
    var i = 0;
	while(i<arr2.length) {
		if (arr1[source]===arr2[i]) {
			source++;
		} 
		i++;
		if (i===arr2.length&&source!==arr1.length) {
			return false;
		}
	}
	return true;
}

function isSubs (str1, str2) {
	str1 = str1.split("");
	str2 = str2.split("");

	var j = 0;

	for (var i = 0; i<str2.length; i++) {
		if (str2[i]===str1[j]) {
			j++;
		} else {
			j = 0;
		}
		if (j===str1.length) {
			return true;
		}
	}
	return false;
}