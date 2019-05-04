/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
// 利用动态规划思路来做。设置一个子串开始的位置，如果遇到重复字符，就把开始位置更新到重复位置的后一位。这里利用哈希表来存储字符各自的位置。需要注意的是，移动起始位置后，之前的一些字符还存在表里，需要一个 map[key] >= left 来判断是否是在当前搜索的子串里。
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLength = 0;
    for (let left = 0, right = 0; right < s.length; right++) {
        const key = s[right];
        if (map[key] !== undefined && map[key] >= left) {
            left = map[key] + 1;
        }
        map[key] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};
