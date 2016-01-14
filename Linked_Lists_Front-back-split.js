function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  if (source===null||source.next===null){
    throw new Error();
  }
  var count=0;
  var cur = source;
  while (cur!==null) {
    count++;
    cur = cur.next;
  }
  var half = Math.ceil(count/2);
  var cur = source; 
  var list2;
  var next;
 
  for (var i = 1; i<=count; i++) {
    next = cur.next;
    if (i===half) {
      list2 = cur.next;
      cur.next = null;
    }
    cur = next;
  }
 
  front.data = source.data;
  front.next = source.next;
  back.data = list2.data;
  back.next = list2.next;
}