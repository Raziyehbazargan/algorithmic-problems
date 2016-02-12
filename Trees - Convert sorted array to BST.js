/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(arr) {
    if (arr.length===0) {
        return null;
    }
    return BST(arr, 0, arr.length-1);
};

  function BST (arr, start, end) {
      if (start>end) {
          return null;
      }
      var mid = Math.floor((start+end)/2);
      var root = new TreeNode(arr[mid]);
      root.left = BST(arr, start, mid-1);
      root.right = BST(arr, mid+1, end);
      return root;
  }