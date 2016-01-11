function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (head==null) {return null;}
  var current = head;
  while (current.next!=null) {
    if(current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
   return head;
}