const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';

  for (let a = 1; a <= str.length; a++) {
    if (str[a] === str[a - 1]) {
      count += 1;
    } else {
      result += (count > 1 ? `${count}` : '') + str[a - 1];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
