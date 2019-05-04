/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (73.21%)
 * Total Accepted:    15.6K
 * Total Submissions: 21.3K
 * Testcase Example:  '"Hello"'
 *
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: "Hello"
 * 输出: "hello"
 *
 * 示例 2：
 *
 *
 * 输入: "here"
 * 输出: "here"
 *
 * 示例 3：
 *
 *
 * 输入: "LOVELY"
 * 输出: "lovely"
 *
 *
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let newStr = "";
    Array.from(str).forEach(item => {
        let asc = item.charCodeAt();
        if (asc >= 65 && asc <= 90) {
            newStr += String.fromCharCode(asc + 32);
        } else {
            newStr += item;
        }
    });
    return newStr;
};
