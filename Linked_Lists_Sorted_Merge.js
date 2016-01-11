function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedMerge(first, second) {
  if (first===null) {
    return second;
  }
  if (second===null) {
    return first;
  }
  var cur1 = first;
  var cur2 = second;
  
  var prev;
  if(cur1.data < cur2.data) {
    prev = cur1;
    cur1 = cur1.next;
  } else {
    prev = cur2;
    cur2 = cur2.next;
  }
  var head = prev;

  while ((cur1)&&(cur2)) {
    if(cur2.data < cur1.data) {
      prev.next = cur2;
      prev = cur2;
      cur2 = cur2.next;
    } else {
      prev.next = cur1;
      prev = cur1;
      cur1 = cur1.next;
    }
  }
  if(!cur2) {
     prev.next = cur1;
  }
  if(!cur1) {
     prev.next = cur2;
  }  
  return head;
}