// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
//   [9,20],
//   [15,7]
// ]
//

// 提示：

// 节点总数 <= 1000
// 注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
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
  const list = [];
  while (rows.length > 0) {
    const size = rows.length;
    list.push([]);
    for (let i = 0; i < size; i++) {
      list[list.length - 1].push(rows[0].val);
      rows[0].left && rows.push(rows[0].left);
      rows[0].right && rows.push(rows[0].right);
      rows.shift();
    }
  }
  return list;
};
