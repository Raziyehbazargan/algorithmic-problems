function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(list) {
  if (list===null) {
    return null;
  }
  if (list.next===null) {
    return list;
  }
 
  var cur = list;
  var prev = cur;
  var second = cur.next;
  cur=cur.next;
  prev.next = null;
  var next;
  
  while (cur!==null) {
    next=cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  
  list = prev;
  return list;
/*  
// second solution using stack

  var stack = []
  var cur = list
  while(cur){
    stack.push(cur.data);
    cur = cur.next
  }
  cur = list
  while(cur){
    cur.data = stack.pop()
    cur = cur.next
  } */
}