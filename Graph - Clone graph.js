/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var store = {};
    if (graph===null) {
      return null;
    } else {
      return dfs(graph)
    }
    
  function dfs (node) {
    var head = null;
    if (store[node.label]) {
      head = store[node.label];
    } else {
      head = new UndirectedGraphNode(node.label);
      store[node.label] = head;
    }

    for (var i = 0; i<node.neighbors.length; i++) {
      if (node.neighbors[i].label!==node.label) {
        if (!store[node.neighbors[i].label]) {
            head.neighbors.push(dfs(node.neighbors[i]))
        } else {
            head.neighbors.push(store[node.neighbors[i].label])
        }
      } else {
        head.neighbors.push(store[node.label])
      }
    }
    return head;
  }
}