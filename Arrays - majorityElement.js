/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(arr) {
    if (arr.length===1) {
        return arr[0];
    }
    var map = {};
    for (var i=0; i<arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]]=1;
        } else {
            map[arr[i]]++;
        }
    }
    for (var num in map) {
        if (map[num]>arr.length/2) {
            return parseInt(num);
        }
    }
};

