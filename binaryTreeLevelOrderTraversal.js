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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null){
      return []
  }
  var results = [[root.val]]
  var path = [[root]]
  var index = 1;
  var proceed = true;

  while (proceed){
      path[index] = []
      results[index] = []
      for (let i = 0; i < path[index - 1].length; i++){

          if (path[index - 1][i] === null || path[index - 1][i].left === null) {
              //  path[index].push(null)
          } else {
              // console.log(path[index - 1][i], path[index - 1].left, path, index, path[0])
              path[index].push(path[index - 1][i].left)
             results[index].push(path[index - 1][i].left.val)
          }

          if (path[index - 1][i] === null || path[index - 1][i].right === null) {
              // path[index].push(null)
          } else {
              path[index].push(path[index - 1][i].right)
             results[index].push(path[index - 1][i].right.val)
          }

      }
      if (results[index].every((el) => { return el === null})) {
          // console.log('hit', results);
          results.pop()
          proceed = false;
      }

      index++;
  }


  // console.log(results)
  return results

};