function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (head.next===null||head===null) {
    throw new Error();
  }
  
  if (head.next.next===null) {
    var node2 = head.next;
    head.next = null;
    return new Context(head, node2);
  }
  
  var cur = head;
  var head2 = head.next;
  var next;
  while (cur.next!==null) {
    next = cur.next;
    cur.next = cur.next.next;
    cur = next;
  }
  return new Context (head, head2);
}