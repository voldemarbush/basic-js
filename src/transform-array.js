const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const result = [];

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] === '--double-next') {
      if (a < arr.length - 1) result.push(arr[a + 1]);
    } else if (arr[a] === '--double-prev') {
      if (a > 0) result.push(arr[a - 1]);
    } else if (arr[a] === '--discard-next') {
      a += 2;
    } else if (arr[a] === '--discard-prev') {
      result.pop();
    } else {
      result.push(arr[a]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
