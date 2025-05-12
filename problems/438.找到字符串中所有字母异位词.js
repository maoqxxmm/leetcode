/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.21%)
 * Likes:    1674
 * Dislikes: 0
 * Total Accepted:    683.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) {
    return [];
  }
  const result = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    sCount[s[i].charCodeAt() - "a".charCodeAt()]++;
    pCount[p[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (sCount.toString() === pCount.toString()) {
    result.push(0);
  }
  for (let i = 0; i < s.length - p.length; i++) {
    sCount[s[i].charCodeAt() - "a".charCodeAt()]--;
    sCount[s[i + p.length].charCodeAt() - "a".charCodeAt()]++;
    if (sCount.toString() === pCount.toString()) {
      result.push(i + 1);
    }
  }
  return result;
};
// @lc code=end
