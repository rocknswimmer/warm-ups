/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var max = 0;
  if (root === null){
      return max;
  }

  var maxFinder = (node, depth) => {
      depth++;
      if (depth > max) {
          max = depth;
      }
      if(node.left !== null){
          maxFinder(node.left, depth)
      }
      if(node.right !== null){
          maxFinder(node.right, depth)
      }
  }

  maxFinder(root, 0)

  return max;
};