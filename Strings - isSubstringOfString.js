function isSubs (str1, str2) {
	var source = 0;
    var arr1 = str1.split("");
    var arr2 = str2.split("");
	
    var i = 0;

    while (i<arr2.length&&source<arr1.length) {
    	if (arr2[i]===arr1[source]) {
    		source++;
    		i++;
    	} else {
    		source = 0;
    		i++;
    	}
    }
    if (source===arr1.length) {
    	return true;
    } 
    return false;
 }




