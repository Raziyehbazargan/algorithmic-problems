/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var initial_m = m;
    if (head===null) {
        return null;
    }
    if (head.next===null) {
        return head;
    }
    if(m===n) {
        return head;
    }
    var count = 1;
    var prev;
    var start;
    var before_start;
    var cur = head;
    while (count<m) {
        count++;
        before_start = cur;
        cur = cur.next;
    }
    
    prev = cur;
    start = cur;
    cur = cur.next;

    while (n>m) {
        var temp = cur.next;
        cur.next = prev;
        prev=cur;
        cur = temp;
        m++; 
    }
    
    start.next=cur;
    if(initial_m !== 1) {
        before_start.next = prev;
    } else {
        head = prev;
    }
  
    return head;
};