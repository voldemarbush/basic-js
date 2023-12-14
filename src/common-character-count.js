const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let targetString = s2;
  return s1.split('').reduce((acc, item) => {
    let count = acc;
    let position = targetString.indexOf(item);
    if (position > -1) {
      targetString =
        targetString.slice(0, position) + targetString.slice(position + 1);
      count += 1;
    }
    return count;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
