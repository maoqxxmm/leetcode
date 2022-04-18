/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (42.36%)
 * Likes:    1429
 * Dislikes: 0
 * Total Accepted:    209.2K
 * Total Submissions: 493.9K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,0]
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -2^31
 *
 *
 */

/**
 * 哈希表
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length;
  nums.forEach((num, index) => {
    if (num < 1) {
      nums[index] = len + 1;
    }
  });
  nums.forEach((num) => {
    const targetIndex = Math.abs(num) - 1;
    if (targetIndex <= nums.length - 1) {
      const target = nums[targetIndex];
      if (target > 0) {
        nums[targetIndex] = -target;
      }
    }
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return len + 1;
};

// @lc code=start
/**
 * 置换
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 将nums[i]放到对应的位置
    // 注意这个 while，第一次置换完成后，会继续对当前换过来的值进行判断
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  // 遍历是否是对应位置
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return len + 1;
};
// @lc code
