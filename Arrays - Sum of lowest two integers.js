function sumTwoSmallestNumbers(numbers) {  
  var smaller, bigger;
  if (numbers[0]<=numbers[1]) {
    smaller = numbers[0];
    bigger = numbers[1];
  } else {
    bigger = numbers[0];
    smaller = numbers[1];
  }
  if (numbers.length==1) {
    return numbers[0];
  }

  for (var i = 2; i<numbers.length; i++) {
    if (numbers[i]<bigger) {
      bigger = numbers[i];     
    }
    if (smaller>bigger) {
      var cur = smaller;
      smaller = bigger;
      bigger = cur;
    }
  }
  return bigger+smaller;
};

//using merge sort

function sumTwoSmallestNumbers(numbers) {  
  var sortedArray = mergeSort(numbers);
  return sortedArray[0] + sortedArray[1];
  function mergeSort(arr) {
    if (arr.length<2) {
      return arr;
    }
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };

  function merge(left, right) {
    var result = [];s
    while (left.length>0&&right.length>0) {
      if (left[0]<right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left.length? left : right);
  }
}