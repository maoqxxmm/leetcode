/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode.cn/problems/sort-list/description/
 *
 * algorithms
 * Medium (67.18%)
 * Likes:    2533
 * Dislikes: 0
 * Total Accepted:    703K
 * Total Submissions: 1M
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 *
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
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

const merge = (h1, h2) => {
  const dummy = new ListNode(0);
  let p = dummy;
  while (h1 && h2) {
    if (h1.val <= h2.val) {
      p.next = h1;
      h1 = h1.next;
    } else {
      p.next = h2;
      h2 = h2.next;
    }
    p = p.next;
  }
  p.next = h1 || h2;
  return dummy.next;
};

const toSort = (head, tail) => {
  if (!head) {
    return null;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSort(head, mid), toSort(mid, tail));
};

var sortList = function (head) {
  return toSort(head, null);
};
// @lc code=end
