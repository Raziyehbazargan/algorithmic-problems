/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head===null) {
        return false;
    }
   var slow, fast;
   slow = fast = head;
    
    while (true) {
        slow = slow.next;
        if (fast.next!==null) {
            fast = fast.next.next;
        } else {
            return false;
        }
        if (slow===null||fast===null) {
            return false;
        }
        if (slow===fast) {
            return true;
        }
    }
<<<<<<< HEAD
};

function RemoveNode(head, k) {
  if (head==null) {
     return null;
  }
   var count = 0;
   var cur = head;
  while (cur!==null) {
    count++;
    cur = cur.next;
  }
   var diff = count - k -1;

   var cur1 = head;
   
  while (diff>0) {
  
  diff--;
  cur1 = cur1.next;
}
if (count==1 {
  return null;
 }
 if (diff==-1) {
  return head.next;
 }
 cur1.next = cur1.next.next;

 return head;

}
=======
};
>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
