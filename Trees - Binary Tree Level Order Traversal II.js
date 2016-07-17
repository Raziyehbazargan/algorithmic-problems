/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
 
  var array = [];
  var values = [];
  var q1 = [];
  var q2 = [];
  var result = [];
  var n;
  if (root===null) {
      return values;
  }
  q1.push(root)
  while (q1.length!==0) {
    n = q1.shift();
   
    if (n.left!==null) {
        q2.push(n.left);
    }
    if (n.right!==null) {
        q2.push(n.right);
    }
    values.push(n.val);
    if (q1.length===0) {
        q1 = q2;
        q2 = [];
        array.push(values);
        values = [];
    }
  }
  for (var i = array.length-1; i>=0; i--) {
      result.push(array[i])
  }
  return result;
};
