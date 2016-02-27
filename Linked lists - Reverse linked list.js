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
var reverseList = function(head) {
    if (head===null) {
        return null;
    }
    var cur = head;
    
    prev = cur;
    var current = cur.next;
    cur.next = null;
    cur = current;
    while (cur!==null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};