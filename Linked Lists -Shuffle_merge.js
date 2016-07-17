function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  if (first===null) {
    return second
  }
  if (second===null) {
    return first
  }
  if ((first.data!==null)&&(first.next===null)) {
    first.next = second;
    return first;
  }
  if ((second.data!==null)&&(second.next===null)) {
    var firstNext  = first.next;
    first.next = second;
    second.next= firstNext;
    return first;
  }
  
   var cur1 = first;
   var cur2 = second;
   while ((cur1.next!==null)|| (cur2.next!==null)) {
      var cur1Next = cur1.next;
      var cur2Next = cur2.next;
      cur1.next=cur2;
      cur2.next = cur1Next;;
      cur1 = cur1Next;
      cur2 = cur2Next;
      if (cur1.next===null) {
        cur1.next=cur2;
        return first;
      }
    }
   
  return first;
}