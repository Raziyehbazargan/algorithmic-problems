/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head===null) {
        return null;
    }
    var cur = head;
    var length = getLength(head);
    return BST(0, length-1);
    
        function getLength (head) {
            var count = 0;
            var cur = head;
            while (cur) {
                count++;
                cur = cur.next;
            }
            return count;
        }
        
        function BST(start, end) {
            if (start>end) {
                return null;
            }
            var mid = Math.floor((start+end)/2);
            var left = BST (start, mid-1);
            var root = new TreeNode(cur.val)
            cur = cur.next;
            var right = BST (mid+1, end);
            root.left = left;
            root.right = right;
            return root;
        }
};

