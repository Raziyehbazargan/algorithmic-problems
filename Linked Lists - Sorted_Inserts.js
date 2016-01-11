function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  var cur = head;
  var newnode = new Node (data);
  if (head===null) {
    return newnode;
  }
  var prev = cur;
  if (data<prev.data) {
    newnode.next = cur;
    return newnode;
  } else {
    cur = cur.next
  }
  
  while (cur!==null) {
    if (newnode.data<cur.data) {
      prev.next = newnode;
      newnode.next = cur;
      return head;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  if (!cur) {
    prev.next = newnode;
  }

  return head;
}