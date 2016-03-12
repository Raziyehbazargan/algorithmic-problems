var lowestCommonAncestor = function(root, p, q) {
    if (root===null) {
        return null;
    }
    var min = Math.min(p.val, q.val);
    var max = Math.max(p.val, q.val);
    
    while (root.val>=min||root.val<=max) {
       if (max===root.val||min===root.val) {
           return root;
       }
       if (min<root.val&&max>root.val) {
           return root;
       }
       if (min<root.val&&max<root.val) {
           root = root.left;
       } else {
           root = root.right;
       }
    
    }
    return root;
};