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



<<<<<<< HEAD
function check (str1, str2) {
    var j = 0;

    for (var i = 0; i<str2.length; i++) {
        if (str2[i]==str1[j]) {
            j++;
        }
    }
    if (j==str1.length) {
        return true;
    } else {
        return false;
    }
}
=======

>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
