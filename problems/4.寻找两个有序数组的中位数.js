/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (34.09%)
 * Likes:    1027
 * Dislikes: 0
 * Total Accepted:    52.6K
 * Total Submissions: 151.3K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * 这是一个 O(m+n) 的解法，其实还并没有符合题目要求
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const isEven = (m + n) % 2 === 0;
    const middle = (m + n + (isEven ? 0 : 1)) / 2;
    for (i = 0; i <= Math.min(middle, m); i++) {
        const j = middle - i;
        if (j > n) {
            continue;
        }
        if (i >= 1 && nums1[i - 1] > nums2[j]) {
            continue;
        }
        if (j >= 1 && nums2[j - 1] > nums1[i]) {
            continue;
        }
        const nums1Left = nums1[i - 1];
        const nums2Left = nums2[j - 1];
        let leftMax;
        if (nums1Left && nums2Left) {
            leftMax = Math.max(nums1Left, nums2Left);
        } else {
            leftMax = nums1Left || nums2Left;
        }
        if (!isEven) {
            return leftMax;
        } else {
            const nums1Right = nums1[i];
            const nums2Right = nums2[j];
            let rightMin;
            if (nums1Right && nums2Right) {
                rightMin = Math.min(nums1Right, nums2Right);
            } else {
                rightMin = nums1Right || nums2Right;
            }
            return (leftMax + rightMin) / 2;
        }
    }
};
