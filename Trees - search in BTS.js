function Tree (val) {
  this.val = val;
  this.left = this.right = null;
}
var root = new Tree(10);
root.left = new Tree(8);
root.right = new Tree(12);
root.left.left = new Tree(6);

function search (root, key) {
	if (root===null) {
		return null;
	}
	if (root.val===key) {
		return root;
	} else if (root.val>=key) {
		search (root.left, key);
	} else {
		search (root.right, key);
	}
<<<<<<< HEAD
}


=======
}
>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
