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
};