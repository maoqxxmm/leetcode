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
var diameterOfBinaryTree = function (root) {
  let maxLength = 0;
  function depth(node) {
    if (!node) {
      return 0;
    }
    const L = depth(node.left);
    const R = depth(node.right);
    maxLength = Math.max(maxLength, L + R);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return maxLength;
};
