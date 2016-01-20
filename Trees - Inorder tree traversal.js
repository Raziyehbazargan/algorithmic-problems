/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var values = [];
    if (root===null) {
        return [];
    }
    var cur = root;
  
    while (stack.length!==0||cur!==null) {
       if (cur!==null) {
           stack.push(cur);
           cur = cur.left;
       } else {
           var n = stack.pop();
           values.push(n.val);
           cur = n.right;
       }
    }
    return values;
};