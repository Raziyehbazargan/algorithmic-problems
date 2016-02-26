//time complexity - O(n^2);

function lis (arr) {
	var lis = [];
	for (var k = 0; k<arr.length; k++) {
		lis[k] = 1;
	}
	for (var i = 1; i<arr.length; i++) {
		 for (var j = 0; j<i; j++) {
			if (arr[i]>arr[j]&&lis[i]<(lis[j]+1)) {
				lis[i] = lis[j]+1
			}
		}
	}
	var max = 0;
	for (var i= 0; i<arr.length; i++) {
		max = Math.max(max, lis[i])
	}
	return max;
}

// time complexity is O(nLogn)
//3 cases:
//1 - arr[i] is the smallest element between all end elements in the lists: create new list with this element 
// maybe it is a start of new sequence
//2 - arr[i] is the largest element  in the lists: clone the largest active list and extand 
// it by arr[i]
// 3 - arr[i] is between end elements in the list : find the list with the larger end element which is smaller than 
// arr[i]. Clone and extand this list . Discard all lists with the same length

function lis (arr) {
	var tails = [];
	tails[0] = arr[0];
	var length = 1;

	for (var i =1; i<arr.length; i++) {
		if (arr[i]<tails[0]) {
			tails[0] = arr[i];
		} else if (arr[i]>tails[length-1]) {
			tails[length++] = arr[i];
		} else {
			tails[replaceIndex(tails, -1, length-1, arr[i])] = arr[i]
		}
	}
	return length;
}
function replaceIndex(tails, l, r, key) {
	while (r-l>1) {
		var mid = Math.floor((l+r)/2)
		if (tails[mid]>=key) {
			r=mid;
		} else {
			l = mid;
		}
	}
	return r;
}