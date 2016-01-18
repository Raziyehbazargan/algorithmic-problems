
var max = 0;
function getTreeDepth(tree, depth) {
  if (depth>max) {
    max = depth;
  };
  depth++;
  for (var i=0; i<tree.children.length; i++) {
    getTreeDepth(tree.children[i], depth);
  }
}