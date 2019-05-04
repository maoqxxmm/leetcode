/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] Fibonacci Number
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (65.27%)
 * Total Accepted:    5.1K
 * Total Submissions: 7.8K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 *
 *
 * 给定 N，计算 F(N)。
 *
 *
 *
 * 示例 1：
 *
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 *
 * 示例 2：
 *
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 *
 * 示例 3：
 *
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 ≤ N ≤ 30
 *
 *
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1) {
        return 1;
    }
    if (N === 2) {
        return 1;
    }
    const matrix = matrixPower(N);
    return matrix[0][1];
};

var matrixPower = function(N) {
    let result;
    if (matrixPowerMap[N]) {
        return matrixPowerMap[N];
    }
    if (N === 1) {
        return [[1, 1], [1, 0]];
    } else if (N % 2 === 0) {
        result = getMatrixProduct(matrixPower(N / 2), matrixPower(N / 2));
    } else {
        result = getMatrixProduct(
            getMatrixProduct(
                matrixPower((N - 1) / 2),
                matrixPower((N - 1) / 2)
            ),
            matrixPower(1)
        );
    }
    matrixPowerMap[N] = result;
    return result;
};

var getMatrixProduct = function(A, B) {
    return [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1]
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1]
        ]
    ];
};

var matrixPowerMap = {};
