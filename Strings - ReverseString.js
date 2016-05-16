var reverseString = function(s) {
    var arr = s.split("");
    var count = arr.length;
    var i = 0;
    while (count>1) {
        var letter = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = letter;
        count = count-2;
        i++;
    }
   return arr.join("");
};