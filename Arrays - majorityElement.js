/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(arr) {
    if (arr.length===0) {
        return [];
    }
    if (arr.length===1) {
        return arr[0];
    }
    var count = 1;
    var index = 0;
    for (var i=1; i<arr.length; i++) {
        if (arr[i]===arr[index]) {
            count++;
        } else {
            count--;
        }
        if (count===0) {
            index=i;
            count=1;
        }
    }
    return isMajority(index, arr);
    
};

function isMajority (index, arr) {
    var count =0;
    for (var i=0; i<arr.length;i++) {
        if (arr[index]===arr[i]) {
            count++;
        }
    }
    if (count>arr.length/2) {
        return arr[index];
    } else {
        return false;
    }
}