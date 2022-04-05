/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.74%)
 * Likes:    1093
 * Dislikes: 0
 * Total Accepted:    330.4K
 * Total Submissions: 722.3K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let diff = Infinity;
  nums.sort((a, b) => a - b);
  for (let first = 0; first < nums.length; first++) {
    let third = nums.length - 1;
    for (let second = first + 1; second < nums.length; second++) {
      while (third > second) {
        const localDiff = nums[first] + nums[second] + nums[third] - target;
        if (Math.abs(localDiff) < Math.abs(diff)) {
          diff = localDiff;
        }
        if (localDiff === 0) {
          return target;
        } else if (localDiff < 0) {
          break;
        } else {
          third--;
        }
      }
    }
  }
  return diff + target;
};
// @lc code=end
