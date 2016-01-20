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

var preorderTraversal = function(root) {
  var stack = [];
  var values = [];
  if (root===null) {
      return values;
  }
  stack.push(root);
  while (stack.length!==0){
      var n = stack.pop();
      values.push(n.val);
      if (n.right!==null) {
          stack.push(n.right);
      }
      if (n.left!==null) {
          stack.push(n.left);
      }
  }
  return values;
};
