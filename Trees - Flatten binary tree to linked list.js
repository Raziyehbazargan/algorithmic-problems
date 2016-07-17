var flatten = function(root) {
    var stack = [];
      if (root===null) {
          return null;
      }
      var cur = root;
      var temp;
      while (stack.length!==0||cur!==null){
         
          if (cur.right!==null) {
              stack.push(cur.right);
             
          }
         if (cur.left!==null) {
              cur.right = cur.left;
              cur.left=null;
         } else if (stack.length!==0)  {
              temp = stack.pop();
              cur.right = temp;
          }
          cur = cur.right;
      }
     root;
};