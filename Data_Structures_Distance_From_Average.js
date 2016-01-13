function distancesFromAverage(arr){
var array = [];
var el;
   var total = arr.reduce(function(a, b) {
      return a + b;
   });
   var avg = total/arr.length;
   for (var i= 0; i<arr.length; i++) {
     el = (Math.round((avg-arr[i])*100))/100;
     array.push(el);
   }
   return array;
}