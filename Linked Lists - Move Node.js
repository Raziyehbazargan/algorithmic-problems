function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
   if (source===null) {throw new Error("Something bad happened.")}
   var head = source.next;
   source.next = dest;
   return new Context(head, source);
}