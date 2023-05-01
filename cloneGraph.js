/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(node === null){
      return
  }
  var hit = {}

  var rec = (n) => {
      if (hit[n.val]){
          return hit[n.val]
      }
var curr = new Node(n.val)
hit[curr.val] = curr

for(let i = 0; i < n.neighbors.length; i++){
  curr.neighbors.push(rec(n.neighbors[i]))
}
return curr

  }

  var clone = rec(node)

  // console.log(clone)
  return clone
};
