/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (48.56%)
 * Likes:    1046
 * Dislikes: 0
 * Total Accepted:    245.3K
 * Total Submissions: 505K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const res = [];
  let i = 0;
  let j = 0;
  let maxI = m - 1;
  let minI = 0;
  let maxJ = n - 1;
  let minJ = 0;
  let dir = "right";
  while (res.length < m * n) {
    res.push(matrix[i][j]);
    switch (dir) {
      case "right":
        if (j < maxJ) {
          j++;
        } else {
          dir = "down";
          maxJ--;
          i++;
        }
        break;
      case "down":
        if (i < maxI) {
          i++;
        } else {
          dir = "left";
          maxI--;
          j--;
        }
        break;
      case "left":
        if (j > minJ) {
          j--;
        } else {
          dir = "up";
          minJ++;
          i--;
        }
        break;
      case "up":
        if (i > minI + 1) {
          i--;
        } else {
          dir = "right";
          minI++;
          j++;
        }
        break;
    }
  }
  return res;
};
// @lc code=end
