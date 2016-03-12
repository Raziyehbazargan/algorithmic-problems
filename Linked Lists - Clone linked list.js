function Node(data) {
  this.data = data;
  this.next = null;
}

var list =new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);

function cloneLinkedList (list) {
	var head = list;
	var cur = head;
    
	while (list!==null) {
		cur.next = list.next;
		cur= cur.next;
		list = list.next;
	}

	return head;
}