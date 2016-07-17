function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  if (head===null) {
    return null;
  }
  if (head.next===null) {
    return head;
  }
  var cur = head;
  var nodes = new Node(cur.data);
  
  while (cur.next!==null) {
     nodes = sortedInsert(nodes, cur.next.data);
     cur = cur.next;
  }
  return nodes;
}