/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (54.98%)
 * Likes:    4687
 * Dislikes: 0
 * Total Accepted:    958.7K
 * Total Submissions: 1.7M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let start = 0;
  let end = 0;
  let lastV = 0;
  let max = nums[0];
  while (end <= nums.length - 1) {
    const v = lastV + nums[end];
    max = Math.max(max, v);
    if (v <= 0) {
      start = end + 1;
      end = start;
      lastV = 0;
    } else {
      end = end + 1;
      lastV = v;
    }
  }
  return max;
};
// @lc code=end
