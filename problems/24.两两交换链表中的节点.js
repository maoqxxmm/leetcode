/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (74.33%)
 * Likes:    2424
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
// var swapPairs = function (head) {
//   if (!head) {
//     return null;
//   }
//   if (!head.next) {
//     return head;
//   }
//   let h1 = head;
//   let h2 = h1.next;
//   const h3 = swapPairs(h2.next);
//   h1.next = h3;
//   h2.next = h1;
//   return h2;
// };
// 迭代
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    let h1 = cur.next;
    let h2 = cur.next.next;
    cur.next = h2;
    h1.next = h2.next;
    h2.next = h1;
    cur = h1;
  }
  return dummy.next;
};
// @lc code=end
