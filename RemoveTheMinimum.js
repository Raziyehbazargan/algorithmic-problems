function removeSmallest(numbers) {
  if (numbers===[]) {
    return [];
  }
  var min = numbers[0];
  var once = true;
  for (var i = 1; i<numbers.length; i++) {
    if (numbers[i]<min) {
      min = numbers[i]
    }
  }
 var res =  numbers.filter(function(value) {
    if (once===true) {
      if (value===min) {
        once= false;
        return false;
      }
    }
    return true;
  });
  return res;
}