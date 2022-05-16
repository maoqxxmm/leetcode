// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

//

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]
//

// 提示：

// 节点总数 <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const rows = [root];
  const res = [];
  let fromLeft = true;
  while (rows.length > 0) {
    res.push([]);
    const size = rows.length;
    for (let i = 0; i < size; i++) {
      if (fromLeft) {
        res[res.length - 1].push(rows[0].val);
      } else {
        res[res.length - 1].unshift(rows[0].val);
      }
      rows[0].left && rows.push(rows[0].left);
      rows[0].right && rows.push(rows[0].right);
      rows.shift();
    }
    fromLeft = !fromLeft;
  }
  return res;
};
