/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    if (arr.length<2) {
        return arr;
    }
    var j = 0;
    var i=1;
    while (i<arr.length) {
        if (arr[i]===arr[j]) {x
            i++;
        } else {
            j++;
            arr[j] = arr[i];
            i++;
        }
    }
   var array = arr.slice(0, j+1);
   return array;
};