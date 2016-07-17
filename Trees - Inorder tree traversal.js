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
//recursive solution 

function Tree (val) {
  this.val = val;
  this.left = this.right = null;
}
var root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);

function inorderTraversal (root) {
  if (root!==null) {
    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);
  }
}
