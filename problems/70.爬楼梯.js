/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.88%)
 * Likes:    481
 * Dislikes: 0
 * Total Accepted:    47.1K
 * Total Submissions: 104.2K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */
/**
 * 最朴素的递归（超时了）
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };

/**
 * 优化缓存后的递归
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (cache[n]) {
//         return cache[n];
//     }
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     const result = climbStairs(n - 1) + climbStairs(n - 2);
//     cache[n] = result;
//     return result;
// };

// const cache = {};

/**
 * 优化空间复杂度
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let left1 = 1;
    let left2 = 2;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = left1 + left2;
        left1 = left2;
        left2 = result;
    }
    return result;
};
