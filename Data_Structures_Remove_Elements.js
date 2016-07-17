Array.prototype.remove_ = function(integer_list, values_list){
var arr = integer_list;
var newarr;
function list (integers_list, value) {
  for (var j = 0; j<integers_list.length; j++) {
      if (value!==integers_list[j]) {
        newarr.push(integers_list[j]);
      }
    }
    return newarr;
}
  for (var i = 0; i<values_list.length; i++) {
    newarr = [];
    arr = list(arr, values_list[i])
  }
  return arr;
}