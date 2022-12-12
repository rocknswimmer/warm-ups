/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {


  var ptree = anTree(root, p);
  var qtree = anTree(root, q);
  var index = 0;
  var results;
console.log(ptree, qtree)
for(let i = 0; i < ptree.length; i++){
    if (ptree[i] === qtree[i]){
        index = i;
    }
}

results = ptree[index]
console.log(index, ptree[0], results)
return results;
};

var anTree = (tree, target) => {
  var currTree = [];

  if (tree === null) {
      return currTree;
  }
  currTree.push(tree);
  // console.log('0', currTree, tree, tree.val, target)
  if(tree.val === target.val) {
      // console.log('hit')
      return currTree;
  }
  currTree = currTree.concat(anTree(tree.left, target));
  // console.log('1', currTree)
  if (currTree.length > 1){
      return currTree;
  }
  currTree = currTree.concat(anTree(tree.right, target));
  // console.log('2', currTree)
  if (currTree.length > 1){
      return currTree;
  }
  if (currTree.length === 1){
      currTree.pop();
  }
  return currTree;
}