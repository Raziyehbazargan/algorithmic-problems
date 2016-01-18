/* n.b. the Process class from the description is preloaded. */

function makeProcessTree(processes) {
  var nodes = {};
  var node, parent;
  var root = new Process(processes[0]['ppid'], []);
  nodes[processes[0]['ppid']] = root;
  for(var i=0; i<processes.length; i++) {
    node = nodes[processes[i]['pid']];
    parent = nodes[processes[i]['ppid']];
    if (node===undefined) {
      node = new Process(processes[i]['pid'], []);
      nodes[processes[i]['pid']] = node;
    }
    if (parent===undefined) {
      parent = new Process(processes[i]['ppid'], []);
      nodes[processes[i]['ppid']] = parent;
    };
       
    parent.children.push(node);

    if (root===node) {
      root = parent;
    }
  }
  console.log(root)
  return root.children[0]; // we return only the children of root;
}