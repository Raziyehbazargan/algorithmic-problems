/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(arr) {
    var max = arr.length-1;
    var min = 0;
    var smaller = [];
    var greater = [];
    smaller[0] = -1;
    greater[arr.length-1] = -1;
    for (var i = 1; i<arr.length; i++) {
        if (arr[i]<=arr[min]) {
            smaller[i] = -1;
            min = i;
        } else {
            smaller[i] = min;
        }
    }
    
    for (var i = arr.length-2; i>=0; i--) {
        if (arr[i]>=arr[max]) {
            greater[i] = -1;
            max = i;
        } else {
            greater[i] = max;
        }
    }
    
    for (var i = 0; i<arr.length; i++) {
        if (smaller[i]!==-1&&greater[i]!==-1) {
            return true;
        }
    }
    return false;
};