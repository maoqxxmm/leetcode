/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode.cn/problems/triangle/description/
 *
 * algorithms
 * Medium (69.37%)
 * Likes:    1443
 * Dislikes: 0
 * Total Accepted:    420K
 * Total Submissions: 605.3K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 *
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1
 * 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释：如下面简图所示：
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：triangle = [[-10]]
 * 输出：-10
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const len = triangle.length;
  const f = Array(len + 1).fill(0);
  for (let i = len; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      // 这里优化了空间复杂度，从二维数组优化为一维数组
      // 因为每次计算只用到了上一层的数据，所以可以覆盖
      // 当 j 被替换后，j 的数据不会在本轮计算中再次被使用到，所以可以放心覆盖
      f[j] = Math.min(f[j], f[j + 1]) + triangle[i - 1][j];
    }
  }
  return f[0];
};
// @lc code=end
