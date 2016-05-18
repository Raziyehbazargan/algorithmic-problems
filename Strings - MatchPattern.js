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