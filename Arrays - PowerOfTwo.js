function powerOfTwo (num) {
	var n = num;
	while (n!==1) {
		if (n!==1&&n%2!==0) {
			return false;
		}
		n = n/2;
	}
	return true;
}