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
    if (root===null) {
      return false;
    } 
    if (root.left===null&&root.right===null&&root.val===sum) {
      return true;
    }
    return hasPathSum (root.left, sum - root.val)|| hasPathSum (root.right, sum - root.val);
};

//second solution (print this path);

function Tree (val) {
  this.val = val;
  this.left = this.right = null;
}
var root = new Tree(10);
root.left = new Tree(8);
root.right = new Tree(12);
root.left.left = new Tree(6);

function pathSum (root, sum, result) {
	if (root===null) {
		return null;
	}
	if (root.right===null&&root.left===null) {
		if (root.val===sum) {
			result.push(root.val);
			return true;
		} else {
			return false;
		}
	}

	if (pathSum (root.left, sum-root.val, result)){
		result.push(root.val);
		return true;
	}
	if (pathSum(root.right, sum-root.val, result)) {
		result.push(root.val);
		return true;
	}
	return false;
}