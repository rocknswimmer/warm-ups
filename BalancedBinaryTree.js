// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
//  var isBalanced = function(root) {
//   if (root === null) {
//       return true;
//   }
//   var results = [];

//   var anTree = (tree, curr) => {
//       console.log(tree, curr, results)
//       // console.log(Array.isArray(curr))
//   Array.isArray(curr) ?  curr = curr.slice() : curr = [];
//   if (tree === null) {
//       return
//   }
//   // console.log(curr)
//   curr.push(tree.val);
//   // console.log('hit', tree.left === null && tree.right === null )
//   if (tree.left === null && tree.right === null) {
//       console.log('hit', curr, tree)
//     results.push(curr)
//   //   console.log(results)
//     return;
//   }
//   // console.log('left', curr)
//   anTree(tree.left, curr);
//   // console.log('pre', results)
//   // curr.pop()
//   // console.log(results)
//   anTree(tree.right, curr);
// }

// anTree(root);

// console.log(results)
// results.sort((a,b) => {
//   if(a.length < b.length) {
//       return -1;
//   }
//   if(a.length > b.length) {
//       return 1;
//   }
//   return 0;
// })
// console.log('bal?', isBalanced(root.right) && isBalanced(root.left));

// if (results[results.length - 1].length - results[0].length > 1 || results.length === 1) {
//   return isBalanced(root.right) && isBalanced(root.left);
// }

// return true;


// };

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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  // An empty tree satisfies the definition of a balanced tree
 if (root == null) {
   return true;
 }

 // Check if subtrees have height within 1. If they do, check if the
 // subtrees are balanced
 return Math.abs(height(root.left) - height(root.right)) < 2
     && isBalanced(root.left)
     && isBalanced(root.right);

};

var height = (tree) => {
 // An empty tree has height -1
 if (tree == null) {
   return -1;
 }
 return 1 + Math.max(height(tree.left), height(tree.right));
}


