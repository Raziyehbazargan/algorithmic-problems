/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root!==null) {
        invert (root);
    }
    return root;
};

function invert (n) {
    var node = n.left;
    n.left = n.right;
    n.right = node;
    if (n.left!==null) {
        invert(n.left);
    }
    if (n.right!==null) {
        invert (n.right);
    }
}