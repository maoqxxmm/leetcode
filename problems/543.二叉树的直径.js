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
    // 计算左子树深度
    const L = depth(node.left);
    // 计算右子树深度
    const R = depth(node.right);
    // 更新最大直径（直径 = 左子树深度 + 右子树深度）
    maxLength = Math.max(maxLength, L + R);
    // 返回当前节点深度
    return Math.max(L, R) + 1;
  }
  depth(root);
  return maxLength;
};
