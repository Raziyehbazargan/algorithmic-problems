/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function fibonacci (num) {
	var first = 0;
	var second = 1;
	var result = "";
	if (num===1) {
	    result = "0";
	}
	if (num===2) {
	    result = "0 1";
	}
	result = "0 1"
	for (var i =2; i<num; i++) {
	    var cur = first+second;
	    first = second;
	    second = cur;
	    result+=" " + cur;
	}
	console.log(result);
}

