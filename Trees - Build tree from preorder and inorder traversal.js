function Tree (val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree (pre, inorder) {
    if (pre.length===0||inorder.length===0) {
      return null;
    }
    if (pre.length!==inorder.length) {
      return null;
    }
    var map = {};
    for (var j = 0; j<inorder.length; j++) {
        map[inorder[j]]=j;
    }

    return buildTreeUtility(pre, inorder, map);
}

function buildTreeUtility(pre, inorder, map) {
    if (pre.length === 0||inorder.length===0) {
        return null;
    }
    var firstEl = pre.shift();
    var indexNode = map[firstEl];
    var root = new Tree(firstEl);
    root.left = buildTreeUtility(pre, inorder.slice(0, indexNode), map);
    root.right = buildTreeUtility(pre, inorder.slice(indexNode+1, inorder.length), map);
    return root;
}