// find element in infinite array!
// we cant't use binary search because we don't lnow bounds
//so, first thing we need - to find bounds

//binary search function
// time complexity = O(log n)
function binary_search (arr, el, start, end) {
	if (start>end) {
		return -1;
	}
	var mid = Math.floor((start+end)/2);
	if (arr[mid]===el) {
		return mid;
	} else if (arr[mid]>el) {
		return binary_search(arr, el, start, mid-1);
	} else {
		return binary_search(arr, el, mid+1, end)
	}
}

function findPosition (arr, el) {
	var start = 0;
	var end = 1;
	var value = arr[0];
	while (el>value) {
		start = end;
		end = 2*end;
		value = arr[end];
	}
	return binary_search (arr, el, start, end);
}