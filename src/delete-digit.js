const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let originalString = n.toString();
  for (let a = 0; a < originalString.length; a++) {
    const currentNumber = Number(
      originalString.slice(0, a) + originalString.slice(a + 1)
    );
    if (result < currentNumber) result = currentNumber;
  }
  return result;
}

module.exports = {
  deleteDigit,
};
