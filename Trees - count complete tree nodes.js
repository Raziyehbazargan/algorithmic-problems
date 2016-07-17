/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root===null) {
      return 0;
    }
    var left = getLeftDepth(root);
    var right = getRightDepth(root);
    if (left===right) {
      return Math.pow(2, left) - 1;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
};

 // find the depth of left most part
    
function getLeftDepth (cur) {
  if (cur===null) {
    return 0;
  }
  return 1+getLeftDepth(cur.left)
}
// find the depth of right most part
function getRightDepth (cur) {
   if (cur===null) {
    return 0;
   }
  return 1+getRightDepth(cur.right)
}