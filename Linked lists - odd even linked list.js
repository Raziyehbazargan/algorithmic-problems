/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head===null) {
        return null;
    }
    
    var cur1 = head;
    var cur1Tail = head;
    var cur2 = head.next;
    var cur2Tail = cur2;
    
    while (cur1!==null) {
        if (cur1.next!==null) {
            cur1.next=cur1.next.next;
        }
        if (cur2!==null&&cur2.next!==null) {
            cur2.next = cur2.next.next;
        }
         cur1Tail = cur1;
        if (cur1!==null) {
            cur1 = cur1.next
        }
        if (cur2!==null) {
            cur2 = cur2.next;
        }
    }
    cur1Tail.next = cur2Tail;
    return head;
   

};