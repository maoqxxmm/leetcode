/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (62.30%)
 * Likes:    2948
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start
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
var isSymmetric = function (root) {
  const check = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return check(left.left, right.right) && check(left.right, right.left);
  };
  return check(root.left, root.right);
};
// @lc code=end
