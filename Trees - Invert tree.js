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
  if (root===null) {
      return null;
  }
  var q = [];
  q.push(root);

  while (q.length!==0) {
    var n = q.shift();
    if (n.left!==null) {
      q.push(n.left);
    }
    if (n.right!==null) {
      q.push(n.right);
    }
    var node = n.left;
    n.left = n.right;
    n.right = node;
  }
  return root;
};