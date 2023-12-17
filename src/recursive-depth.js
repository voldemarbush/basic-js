const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, current = 1) {
    let max = current;
    for (let a = 0; a < arr.length; a++) {
      if (Array.isArray(arr[a])) {
        const nested = this.calculateDepth(arr[a], current + 1);
        max = Math.max(max, nested);
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator,
};
