function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  var count = 0;
  var cur = head;
  var prev = head;
  var node = new Node(data);
  if (!head) {
    head = node;
    return head;
  }
  while (cur!==null) {
    if (index===0) {
      node.next = head;
      return node;
    }
    if (count===index) {
      prev.next = node;
      node.next = cur;
      return head;
    }
    count++;
    prev = cur;
    
    if (cur.next===null&&count===index) {
      prev.next = node;
      return head;
    }
    cur = cur.next;
  }
  
  if (index>count) {
    throw new Error();
  }
  return head;
}