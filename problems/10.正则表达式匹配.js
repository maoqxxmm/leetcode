/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (21.77%)
 * Total Accepted:    11.6K
 * Total Submissions: 53.3K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 *
 *
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!s && !p) {
        return true;
    }
    if (s && !p) {
        return false;
    }
    const result = [];
    for (let i = 0; i < p.length; i++) {
        result.push([]);
        const isStar = p[i] === "*";
        for (let j = 0; j < s.length; j++) {
            if (isStar) {
                result[i].push(result[i - 1][j]);
                continue;
            }
            let value;
            if (
                j === s.length - 1 &&
                i >= 1 &&
                result[i - 1][j] &&
                p[i + 1] !== "*"
            ) {
                value = 0;
            } else if (p[i] === s[j] || p[i] === ".") {
                value = 2;
            } else if (p[i + 1] === "*" && !result[i][j - 1]) {
                value = 1;
            } else {
                value = 0;
            }
            if (i === 0 && j === 0) {
                result[i][j] = value;
                continue;
            } else {
                const left =
                    j >= 1 && p[i + 1] === "*" ? result[i][j - 1] : false;
                const up =
                    i >= 1 && (p[i - 1] === "*" || p[i + 1] === "*")
                        ? result[i - 1][j]
                        : false;
                const leftUp = i >= 1 && j >= 1 ? result[i - 1][j - 1] : false;
                result[i][j] =
                    (left === 1 ? 0 : left && value) ||
                    (up && value) ||
                    (leftUp === 1 ? 0 : leftUp && value);
            }
        }
    }
    return !!result[p.length - 1][s.length - 1];
};
