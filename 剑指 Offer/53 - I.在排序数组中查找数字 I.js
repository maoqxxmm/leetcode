// 统计一个数字在排序数组中出现的次数。

//

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
//

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
//

// 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const matchRight = (tar) => {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] <= tar) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return i;
  };
  const right = matchRight(target);
  const left = matchRight(target - 1);
  return right - left;
};
