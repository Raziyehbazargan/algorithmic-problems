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
    var q1 = [];
    if (graph===null) {
      return null;
    } 
    q1.push(graph);
    var newGraph = new UndirectedGraphNode(graph.label);
    
    store[graph] = newGraph;
    
    while (q1.length!==0) {
      var n = q1.shift();
      var size = n.neighbors.length;
      
      for (var i=0; i<size; i++) {
        var neighbor = n.neighbors[i];
        //if not visited
        if (!store[neighbor]) {
          var p = new UndirectedGraphNode(neighbor.label);
          store[n].neighbors.push(p);
          store[neighbor] = p;
          q1.push(neighbor);
          // if visited
        } else {
          store[n].neighbors.push(store[neighbor]);
        }
      }
    }
    
    return newGraph;
 
}