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
var postorderTraversal = function(root) {
    var stack = [];
    stack.push(root);
    var values = [];
    var prev = null;
    var n;
    if (root===null) {
        return values;
    }
   
    while (stack.length!==0) {
        cur = stack[stack.length-1];
        if (prev===null||prev.left===cur||prev.right===cur) {
            if (cur.left!==null) {
                stack.push(cur.left);
            } else if (cur.right!==null) {
                stack.push(cur.right);
            } else {
                n = stack.pop();
                values.push(n.val);
            }
        } else if (cur.left===prev) {
            if (cur.right!==null) {
                stack.push(cur.right);
            } else {
                n = stack.pop();
                values.push(n.val)
            }
        } else if (cur.right===prev) {
            n = stack.pop();
            values.push(n.val);
        }
       prev = cur;
    }
    return values;
};