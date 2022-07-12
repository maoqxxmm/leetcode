/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     if (!list1) {
//         return list2
//     }
//     if (!list2) {
//         return list1
//     }
//     const val1 = list1.val
//     const val2 = list2.val
//     return val1 >= val2 ? new ListNode(val2, mergeTwoLists(list1, list2.next)) : new ListNode(val1, mergeTwoLists(list1.next, list2))
// };

var mergeTwoLists = function (list1, list2) {
  const prevHead = new ListNode(-1);
  let head = prevHead;
  let l1 = list1;
  let l2 = list2;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  head.next = l1 ? l1 : l2;
  return prevHead.next;
};
