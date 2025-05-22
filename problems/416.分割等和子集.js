/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode.cn/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (53.44%)
 * Likes:    2350
 * Dislikes: 0
 * Total Accepted:    767.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * @see https://leetcode.cn/problems/partition-equal-subset-sum/solutions/2785266/0-1-bei-bao-cong-ji-yi-hua-sou-suo-dao-d-ev76
 */
var canPartition = function (nums) {
  const s = nums.reduce((cur, next) => cur + next, 0);
  if (s % 2) {
    return false;
  }
  const n = nums.length;
  const memo = Array.from({ length: n }, () => Array(s / 2 + 1).fill(-1)); // -1 表示没有计算过
  function dfs(i, j) {
    if (i < 0) {
      return j === 0;
    }
    if (memo[i][j] !== -1) {
      return memo[i][j] === 1;
    }
    const res = (j >= nums[i] && dfs(i - 1, j - nums[i])) || dfs(i - 1, j);
    memo[i][j] = res ? 1 : 0;
    return res;
  }
  return dfs(n - 1, s / 2);
};
// @lc code=end
