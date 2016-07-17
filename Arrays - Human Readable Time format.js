function formatDuration (seconds) {
  // Complete this function
  var output = "";
  var result = [];
  var obj = {
             "year": 0,
             "day": 0,
             "hour": 0,
             "minute": 0,
             "second" : 0
             }
  
  var time = [31536000, 86400, 3600, 60, 1];
  var arr = ["year", "day", "hour", "minute", "second"];
  var i =0;
  while (seconds>59) {
    while (seconds>=time[i]) {

        obj[arr[i]]++;
        seconds = seconds - time[i];
    }
    i++;
  }
  obj["second"] = seconds;

  for (var val in obj) {
   if (obj[val]!==0) {
     result.push([val, obj[val]]);
   }
 }
 
 for (var k = 0; k<result.length; k++) {
   if (result[k][1]!==1) {
       result[k][0]=result[k][0]+"s";
   }   
 }
 
 if (result.length===0) {
   return "now";
 }
 if (result.length===1) {
   output+=result[0][1] + " " + result[0][0];
 } else {
   for (var j =0; j<result.length-1; j++) {
     output+=result[j][1] + " " + result[j][0] + ", ";
   }
   output = output.slice(0, output.length-2);
   output+=" and " + result[result.length-1][1] + " " + result[result.length-1][0];
 }
  
 return output;
}