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
var diameterOfBinaryTree = function(root) {

  var  diameter = 0;


var longestPath = (node) => {
if(node == null) {
    return 0;
    }
// recursively find the longest path in
// both left child and right child
var leftPath = longestPath(node.left);
var rightPath = longestPath(node.right);

// update the diameter if left_path plus right_path is larger
diameter = Math.max(diameter, leftPath + rightPath);

// return the longest one between left_path and right_path;
// remember to add 1 for the path connecting the node and its parent
return Math.max(leftPath, rightPath) + 1;
}

longestPath(root);
return diameter;
};