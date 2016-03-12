function indexChange(arr) {
	for (var i = 1; i<arr.length; i++) {
		if (arr[i]<arr[i-1]) {
			return i;
		} 
	}
	return null;
}