/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [];
    var cur = root;
    var result = 0;
    
    while (stack.length!==0||cur!==null) {
        if (cur!==null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            var n = stack.pop();
            k--;
            if (k===0) {
                result = n.val;
            }
            cur = n.right;
        }
        
    }
    return result;
};