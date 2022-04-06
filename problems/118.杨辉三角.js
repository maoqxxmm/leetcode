/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (74.49%)
 * Likes:    732
 * Dislikes: 0
 * Total Accepted:    287.1K
 * Total Submissions: 385.2K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
    } else {
      const arr = [];
      const parentArr = res[i - 1];
      for (let j = 0; j < i + 1; j++) {
        const left = j === 0 ? 0 : parentArr[j - 1];
        const right = j === parentArr.length ? 0 : parentArr[j];
        arr[j] = left + right;
      }
      res.push(arr);
    }
  }
  return res;
};
// @lc code=end
