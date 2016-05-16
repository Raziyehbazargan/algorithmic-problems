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

function convertNumericToRoman (number) {
	var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X","IX", "V", "IV", "I"];
	var converted = "";
	for (var i =0; i<roman.length; i++) {
		while (number>=decimal[i]) {
			converted+=roman[i];
			number-=decimal[i];
		}
	}
	return converted;
}