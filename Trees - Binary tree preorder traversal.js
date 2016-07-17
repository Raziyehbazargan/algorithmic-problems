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
function Tree (val) {
  this.val = val;
  this.left = this.right = null;
}
var root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);

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


function preorderTraversal (root) {
  if (root!==null) {
     console.log(root.val);
     preorderTraversal(root.left);
     preorderTraversal(root.right);
  }
}