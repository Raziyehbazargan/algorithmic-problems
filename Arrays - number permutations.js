/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(arr) {
    var finalRes = [];
    if (arr.length<2) {
        finalRes.push(arr);
        return finalRes;
    }
 
   var obj = {};
   var count = [];
   var result = [];
   var level = 0;
   for (var i =0; i<arr.length; i++) {
       if (!obj[arr[i]]) {
           obj[arr[i]] = 1;
       } else {
           obj[arr[i]]++;
       }
   }
   arr = Object.keys(obj)
   for (var val in obj) {
       count.push(obj[val])
   }

   permutations(arr, count, result, level,finalRes);
   return finalRes;
  

};
function permutations(arr, count, result, level, finalRes) {
    for (var i = 0; i<arr.length; i++) {
        if (count[i]!==0) {
            result[level] = parseInt(arr[i]);
            count[i]--;
            permutations(arr, count, result, level+1, finalRes);
            count[i]++;
        }
       
    }
    if (level===result.length) {
       finalRes.push(result.slice(0));
    }
    
}
