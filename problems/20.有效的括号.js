/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftList = [];
  const pairMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      leftList.push(bracket);
    } else {
      const lastLeft = leftList[leftList.length - 1];
      if (!lastLeft) {
        return false;
      }
      if (bracket !== pairMap[lastLeft]) {
        return false;
      } else {
        leftList.pop();
      }
    }
  }
  if (leftList.length > 0) {
    return false;
  }
  return true;
};
