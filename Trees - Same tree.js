
function Tree (val) {
  this.val = val;
  this.left = this.right = null;
}
var root1 = new Tree(10);
root1.left = new Tree(8);
root1.right = new Tree(12);
root1.left.left = new Tree(6);

var root2 = new Tree(10);
root2.left = new Tree(8);
root2.right = new Tree(12);
root2.left.left = new Tree(6);

function isSame (root1, root2) {
	if (root1===null&&root2===null) {
		return true;
	}
	if (root1===null||root2===null) {
		return false;
	}
	return root1.val===root2.val&&isSame(root1.left, root2.left)&&isSame(root1.right, root2.right);
}
