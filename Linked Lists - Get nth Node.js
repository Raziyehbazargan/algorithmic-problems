function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node===null) {throw new Error()}
  var count = 0;
  var cur = node.next;
  if (index===0) {return node}
  while (cur!==null) {
    count++;
    if (count===index) {
      return cur;
    } 
    cur = cur.next;
  }
  if (index>count) {
    throw new Error()
  }
}
