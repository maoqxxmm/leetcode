/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (35.02%)
 * Likes:    4583
 * Dislikes: 0
 * Total Accepted:    891.4K
 * Total Submissions: 2.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let first = 0; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = nums.length - 1;
    const target = -nums[first];
    for (let second = first + 1; second < nums.length; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }
      if (second === third) {
        continue;
      }
      if (nums[second] + nums[third] === target) {
        res.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return res;
};
// @lc code=end
