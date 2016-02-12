var findPeakElement = function(arr) {
    var max = arr[0];
    var index = 0;
    for (i=1; i<=arr.length-2;i++) {
        var prev = arr[i-1];
        var next = arr[i+1];
        var cur = arr[i];
        if (cur>prev&&cur>next) {
            index = i;
            max = cur;
        }
    }
    if (arr[arr.length-1]>max) {
        return arr.length-1;
    }
    return index;
    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 //using the method Divide and Conquer
 // time complexity = O(log n)
var findPeakElement = function(arr) {
   var length = arr.length;
   var findPeak = function (arr, length) {
       return findPeakFunction (arr, 0, arr.length-1, arr.length);
   };
   function findPeakFunction (arr, low, high, n) {
       var mid = Math.ceil((low+high)/2);
       if ((mid===0||arr[mid-1]<=arr[mid])&&(mid===(n-1)||arr[mid+1]<=mid)) {
           return mid;
       } else if(mid>0&&arr[mid-1]>arr[mid]) {
           return findPeakFunction(arr, low, mid-1, n);
       } else {
           return findPeakFunction(arr, mid+1, high, n);
       }
   }
   return findPeak (arr, length);
   
};