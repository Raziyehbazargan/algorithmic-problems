function isValidTree(tree){

   if (tree.ornament!=="star") {
     return false;
   } 
   var left = tree.left;
   var right = tree.right;
   function process(tree) {
       if(!tree){return;}
       if (!tree.left&&!tree.right) {
         if (tree.color!=="blue") {
           return false;
         }
       }
       if (tree.left||tree.right) {
         if (tree.color!=="red") {
           return false;
         } 
       }
       if((process(tree.left)==false)||(process(tree.right)==false)) {
         return false;
       }
    }
   if((process(left)==false)||(process(right)==false)) {
     return false;
   }
   return true;
}