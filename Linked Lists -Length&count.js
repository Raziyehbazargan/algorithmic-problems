function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  var length = 0;
  while (head!==null) {
    length++; 
    head = head.next
  }
  return length;
}

function count(head, data) {
  var count = 0;
  while (head!==null) {
    if (head.data===data) {
      count++; 
    } 
    head = head.next
  }
  return count;
}