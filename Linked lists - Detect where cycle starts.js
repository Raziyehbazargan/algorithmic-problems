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
var detectCycle = function(head) {
    if (head===null) {
        return null;
    }
   var slow, fast;
   slow = fast = head;
   var loop = false;
    while (loop===false) {
        slow = slow.next;
        if (fast.next!==null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (slow===null||fast===null) {
            return null;
        }
        if (slow===fast) {
            loop = true;
        }
    }
    slow=head;
    if (fast===head) {
        return slow;
    }
    
    while (slow!==fast) {
        slow  = slow.next;
        fast = fast.next;
    }
    return slow;
};