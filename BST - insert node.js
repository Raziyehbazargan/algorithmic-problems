function Tree (val) {
      this.val = val;
      this.left = this.right = null;
}

function BSTinsertion (root, val) {
	var node = new Tree(val);
	if (root===null) {
		return node;
	}
    var parent = null;
    var current = root;
    while (current!==null) {
    	parent=current;
    	if (current.val<=val) {
    		current= current.right;
    	} else {
    		current = current.left;
    	}
    }
    if (parent.val<=val) {
    	parent.right = node;
    } else {
    	parent.left = node;
    }
    return root;
}