/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var stack = [];
    stack.push(root);
    var values = [];
    var prev = null;
    var n;
    if (root===null) {
        return values;
    }
   
    while (stack.length!==0) {
        cur = stack[stack.length-1];
        if (prev===null||prev.left===cur||prev.right===cur) {
            if (cur.left!==null) {
                stack.push(cur.left);
            } else if (cur.right!==null) {
                stack.push(cur.right);
            } else {
                n = stack.pop();
                values.push(n.val);
            }
        } else if (cur.left===prev) {
            if (cur.right!==null) {
                stack.push(cur.right);
            } else {
                n = stack.pop();
                values.push(n.val)
            }
        } else if (cur.right===prev) {
            n = stack.pop();
            values.push(n.val);
        }
       prev = cur;
    }
    return values;
};

//recursive solution

function postorderTraversal (root) {
    if (root!==null) {
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        console.log(root.val);
    }
}

// solution using 2 stacks

function postorderTraversal (root) {
    if (root===null) {
        return null;
    }
    var s1 = [];
    var s2 = [];
    s1.push(root);

    while (s1.length!==0) {
        var root = s1.pop();
        s2.push(root);
        if (root.left) {
            s1.push(root.left)
        }
        if (root.right) {
            s1.push(root.right)
        }
    }
    while (s2.length!==0) {
        var node = s2.pop();
        console.log(node.val);
    }
    
}