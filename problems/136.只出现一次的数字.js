/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.77%)
 * Likes:    670
 * Dislikes: 0
 * Total Accepted:    66.9K
 * Total Submissions: 109.9K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *
 * 输入: [2,2,1]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        // 异或计算是不使用额外空间的关键
        // 2个一样的值在进行异或计算后就相互抵消了
        sum = sum ^ nums[i];
    }
    return sum;
};
