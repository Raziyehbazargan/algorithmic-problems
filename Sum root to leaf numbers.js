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
var sumNumbers = function(root) {
  return sum(root, 0);
};

function sum (root, cur) {
  if (root===null) {
      return 0;
  }
  if (root.left===null&&root.right===null) {
      return root.val + cur*10;
  }
  cur = cur*10+root.val;
  return sum(root.left, cur) + sum(root.right, cur);
}