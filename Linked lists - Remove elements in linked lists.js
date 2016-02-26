/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   var helper = new ListNode(0);
   helper.next = head;
   var cur = helper;
   
   while (cur.next!==null) {
       if (cur.next.val===val) {
           cur.next = cur.next.next;
       } else {
           cur = cur.next;
       }
   }
   return helper.next;
};