

function getValueOfTree(tree) {
  console.log(tree.data); 
  for (var i=0; i<tree.children.length; i++) {
    getValueOfTree(tree.children[i]);
  }
}