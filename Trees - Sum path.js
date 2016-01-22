/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var total;
    var store = [];
    var nums = [];
    if (root===null) {
        return false;
    }
    store.push(root);
    nums.push(root.val);
    
    while(store.length!==0) {
      var n = store.shift();
      total = nums.shift();
      if (n.left===null&&n.right===null&&total===sum) {
        return true;
      }
      if (n.left!==null) {
        store.push(n.left)
        nums.push(total+n.left.val)
      }    
       if (n.right!==null) {
        store.push(n.right)
        nums.push(total+n.right.val)
      } 
  }
  return false;
};