/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return lca (root, p, q);
    
    function lca (root, p, q) {
        if (root===null) {
            return null;
        }
        if (root===p||root===q) {
            return root;
        }
        var leftLCA = lca(root.left, p, q);
        var rightLCA = lca (root.right, p, q);
        
        if (leftLCA!==null&&rightLCA!==null) {
            return root;
        }
        return (leftLCA!==null)? leftLCA : rightLCA;
    }
};