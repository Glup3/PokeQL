class MaxSenpaiUtil {
  static getLeftOrRight(left, right) {
    if (left !== undefined && right !== undefined) { return left; }
    if (left !== undefined) { return left; }
    if (right !== undefined) { return right; }
    return null;
  }
}

module.exports = MaxSenpaiUtil;