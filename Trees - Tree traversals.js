/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node){
  var result = [];
  var stack = [];
  var n;
  if (node===null) {
    return result;
  }
  stack.push(node);
  while (stack.length!==0) {
    n = stack.pop();
    result.push(n.data);
    if (n.right!==undefined) {
      stack.push(n.right);
    }
    if (n.left!==undefined) {
      stack.push(n.left);
    }
  }
  return result;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node){
  var result = [];
  var stack = [];
  var n;
  if (node===null) {
    return result;
  }
  var cur = node;
  while (stack.length!==0||cur!==undefined) {
    if (cur!==undefined) {
      stack.push(cur);
      cur = cur.left;
    } else {
      n = stack.pop();
      result.push(n.data);
      cur = n.right;
    }
  }
  return result;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(root){
var stack = [];
    stack.push(root);
    var values = [];
    var prev = undefined;
    var n;
    if (root===undefined) {
      return values;
    }
    while (stack.length!==0) {
     var cur = stack[stack.length-1];
      if (prev===undefined||prev.left===cur||prev.right===cur) {
        if (cur.left!==undefined) {
            stack.push(cur.left);
        } else if (cur.right!==undefined) {
            stack.push(cur.right);
        } else {
            n = stack.pop();
            values.push(n.data);
        }
      } else if (cur.left===prev) {
        if (cur.right!==undefined) {
            stack.push(cur.right);
        } else {
            n = stack.pop();
            values.push(n.data)
        }
      } else if (cur.right===prev) {
        n = stack.pop();
        values.push(n.data);
      }
     prev = cur;
  }
  return values;
}