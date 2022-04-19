/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (60.30%)
 * Likes:    3307
 * Dislikes: 0
 * Total Accepted:    444.8K
 * Total Submissions: 737.1K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

/**
 * 动态规划
 * @param {number[]} height
 * @return {number}
 */
//  var trap = function (height) {
//   const n = height.length;
//   if (n === 0) {
//     return 0;
//   }
//   const leftMax = Array(n).fill(0);
//   leftMax[0] = height[0];
//   for (let i = 1; i < n; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }
//   const rightMax = Array(n).fill(0);
//   rightMax[n - 1] = height[n - 1];
//   for (let j = n - 2; j >= 0; j--) {
//     rightMax[j] = Math.max(rightMax[j + 1], height[j]);
//   }
//   let sum = 0;
//   for (let k = 0; k < n; k++) {
//     sum += Math.min(leftMax[k], rightMax[k]) - height[k];
//   }
//   return sum;
// };

// @lc code=start
/**
 * 双指针（优化空间复杂度到 O(1)）
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      sum += leftMax - height[left];
      left++;
    } else {
      sum += rightMax - height[right];
      right--;
    }
  }
  return sum;
};
// @lc code=end
