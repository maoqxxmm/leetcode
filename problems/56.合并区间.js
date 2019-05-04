/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.02%)
 * Total Accepted:    12.3K
 * Total Submissions: 34.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 *
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2:
 *
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    const result = [];
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 0; i < intervals.length; i++) {
        const start = intervals[i].start;
        const end = intervals[i].end;
        if (i === 0) {
            result.push(new Interval(start, end));
        } else {
            const lastRange = result[result.length - 1];
            if (lastRange.end < start) {
                result.push(new Interval(start, end));
            } else {
                lastRange.start = Math.min(lastRange.start, start);
                lastRange.end = Math.max(lastRange.end, end);
            }
        }
    }
    return result;
};
