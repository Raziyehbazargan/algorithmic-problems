function countChar (str) {
	var strMap = {};
	var count = [];
	var result = [];
	var level = 0;
	str = str.split("");
	for (var i =0; i<str.length; i++) {
		if (!strMap[str[i]]) {
			strMap[str[i]] = 1;
		} else {
			strMap[str[i]]++
		}
	}
    str = Object.keys(strMap);
	for (var val in strMap) {
       count.push(strMap[val])
	}
    strPermutations (str, count, result, level)
}

function strPermutations(str, count, result, level) {
	
	for (var i =0; i<str.length; i++) {
		if (count[i]!==0) {
			result[level] = str[i];
			count[i]--;
			strPermutations(str, count, result, level+1);
			count[i]++;
		}
	}
	if (level===result.length) {
		console.log(result);
		return;
	}
}