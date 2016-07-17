
// array, element;
// we need to return the index of this element
// time complexity O (nlogn); 
// binary search 

function binary_search (arr, el) {
	var start = 0;
	var end = arr.length;
	var mid = Math.floor((start+end)/2);

	while (arr[mid]!==el&&start<end) {
		if (el<arr[mid]) {
			end = mid-1;
		} else if (el>arr[mid]) {
			start = mid+1;
		}
		mid = Math.floor((start+end)/2);
	}
	return (arr[mid]===el)? mid: -1;
}

//recursive solution

function binary_search (arr, el, start, end) {
	if (start>end) {
		return -1;
	}
	var mid = Math.floor(arr.length/2);
	if (arr[mid]===el) {
		return mid;
	} else if (arr[mid]>el) {
		return binary_search (arr, el, start, mid-1);
	} else {
		return binary_search(arr, el, mid+1, end)
	}
	
}