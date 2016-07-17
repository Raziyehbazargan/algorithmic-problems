/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 

var flatten = function(root) {
  
   var stack = [];
   var cur = root;
   
   while (cur!==null||stack.length!==0) {
       if (cur.right!==null) {
           stack.push(cur.right);
       }
       if (cur.left!==null) {
           cur.right=cur.left;
           cur.left=null;
       } else if (stack.length!==0) {
           var temp = stack.pop();
           cur.right = temp;
       }
       cur = cur.right;
   }
};