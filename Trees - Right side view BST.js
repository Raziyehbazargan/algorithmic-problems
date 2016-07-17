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
var rightSideView = function(root) {
  var result = [];
  var q1 = [];
  var q2 = [];
  var n;
  if (root===null) {
      return result;
  }
  q1.push(root);
  result.push(root.val);
  
  while(q1.length!==null) {
   n = q1.shift();
   if (n.left!==null) {
    q2.push(n.left);
   }
   if (n.right!==null) {
    q2.push(n.right);
   }
   if (q2.length===0&&q1.length===0) {
    return result;
   }
   
   if (q1.length===0) {
    result.push(q2[q2.length-1].val);
    q1 = q2;
    q2= [];
   }
  }
  return result;
}