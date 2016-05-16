function convertRomanToNumeric (romanNumber) {
	var arr = romanNumber.split("");
	var symb = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
   var converted = symb[arr[0]];
	for (var i =1; i<arr.length; i++) {
     if  (symb[arr[i]]<=symb[arr[i-1]]) {
     	 converted+=symb[arr[i]];
     } else {
       converted = converted + symb[arr[i]]- symb[arr[i-1]] -symb[arr[i-1]];
     }
	}
	return converted;
}