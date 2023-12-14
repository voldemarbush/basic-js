const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const res = matrix.reduce((acc, item) => {
    let outerCount = acc;
    outerCount += item.reduce((acc, item) => {
      let innerCount = acc;
      if (item === '^^') innerCount += 1;
      return innerCount;
    }, 0);
    return outerCount;
  }, 0);
  return res;
}

module.exports = {
  countCats,
};
