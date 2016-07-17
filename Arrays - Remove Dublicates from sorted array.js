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
        if (arr[i]===arr[j]) {
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

var removeDuplicates = function(arr) {
     if (arr.length<=1) {
         return arr;
     }
     var prev = arr[0];
     start = 0; 
     for (var i = 1; i<arr.length; i++ ) {
         if (arr[i]!==prev) {
             start+=1;
<<<<<<< HEAD
             //arr[i], arr[start] = arr[start], arr[i];
=======
             arr[i], arr[start] = arr[start], arr[i];
>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
             arr[start] = arr[i];
             prev = arr[start];
         }
     }
<<<<<<< HEAD
     return arr;
    
};

=======
     return start+1;
    
};
>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
