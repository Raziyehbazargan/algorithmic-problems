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