function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
 var node =  new Node(data);
 node.next = head;
 return node;
}

function buildOneTwoThree() {
  var head = new Node(3);
  head = push(head, 2);
  head = push(head, 1)
  return head;
}