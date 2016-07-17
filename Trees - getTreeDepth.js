/*function Tree (val) {
      this.val = val;
      this.left = this.right = null;
}*/

//basic tree structure 
var root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
var max = 0;
function getTreeDepth(tree, depth) {
  if (depth>max) {
    max = depth;
  };
  depth++;
  for (var i=0; i<tree.children.length; i++) {
    getTreeDepth(tree.children[i], depth);
  }
}

function getTreeHeight(root) {
	if (root===null) {
		return 0;
	}
	var left = 1+getTreeHeight(root.left);
	var right = 1+getTreeHeight(root.right);
	return Math.max(left, right);
}

function getTreeSize (root, count) {
	if (root===null) {
		return 0;
	}

	var left = getTreeSize(root.left);
	var right = getTreeSize(root.right);
	return left+right+1;
}