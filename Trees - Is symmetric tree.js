/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root===null) {
        return true;
    }
    return symmetric (root.left, root.right);
};

    function symmetric (left, right) {
        if (left===null&&right===null){
            return true;
        } else if (left===null||right===null) {
            return false;
        }
        if (left.val!==right.val) {
            return false;
        }
        if (!symmetric(left.left, right.right)) {
            return false;
        }
         if (!symmetric(left.right, right.left)) {
            return false;
        }
        return true;
    }