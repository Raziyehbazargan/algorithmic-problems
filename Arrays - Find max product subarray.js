
function getProduct (arr) {
	
    var zero = isZero (arr);
    if (zero!==-1) {
    	 var a = getProduct(arr.slice(0, zero));
         var b = getProduct(arr.slice(zero+1, arr.length));
         return Math.max(a, b);
    } else {
    	return negative(arr);
    }
}

function negative (arr) {
	var count = 0, indexes = [];
	for (var i = 0; i<arr.length; i++) {
		if (arr[i]<0) {
			count++;
			indexes.push(i);
		}
	}
	if (count%2===0) {
		return findMax(arr);
	} else if (count===1) {
		var zeroIndex = indexes.pop();
		var sub1 = arr.slice(0, zeroIndex);
		var sub2 = arr.slice(zeroIndex+1, arr.length);
		var max1 = findMax(sub1);
		var max2 = findMax(sub2);
		return Math.max(max1, max2);
	} else {
		var ind1 = indexes.shift();
		var ind2 = indexes.pop();
		var s2 = arr.slice(ind1+1, arr.length);
		var s3 = arr.slice(0, ind2);
		var m2 = findMax(s2);
		var m3 = findMax(s3);
		return Math.max(m2, m3);
	}
}
function findMax (sub1) {
	var count = 1;
	for (var i = 0; i<sub1.length; i++) {
		count = count*sub1[i];
	}
	return count;
}

function isZero (arr)  {
	for (var i =0; i<arr.length; i++) {
		if (arr[i]===0) {
			return i;
		}
	}
	return -1;
}

//////////////////////another solution////////////////////////////////////////////////////////
function maxSubarray (arr) {
	var length = arr.length;
	var max_end = 1;
	var min_end = 1;
	var max = 1;

	for (var i =0; i<length; i++) {
		if (arr[i]>0) {
			max_end = max_end*arr[i];
			min_end = Math.max(min_end*arr[i], 1);
		} else if (arr[i]===0) {
			max_end = 1;
			min_end = 1;
		} else {
			var temp = max_end;
			max_end = Math.max(min_end*arr[i], 1);
			min_end = temp*arr[i];
		}
		if (max<max_end) {
			max = max_end;
		}
	}
	return max;
}