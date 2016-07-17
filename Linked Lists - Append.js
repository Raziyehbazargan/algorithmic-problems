function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
if (listA===null && listB===null) {
  return null;
 }
 if (listA===null) {
   return listB;
 } 
 if (listB===null) {
   return listA;
 }
 var cur = listA;
 while (cur.next!==null) {
   cur = cur.next;
 }
 cur.next = listB;
 return listA;
  
  // Remember to return the head of the list.
}