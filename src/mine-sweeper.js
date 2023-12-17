const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const checkPos = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (row = 0; row < matrix.length; row++) {
    result.push([]);
    for (let col = 0; col < matrix[1].length; col++) {
      if (matrix[row][col]) {
        result[row][col] = 1;
      } else {
        let bombCounter = 0;
        checkPos.forEach((item) => {
          const checkRow = row + item[0];
          const checkCol = col + item[1];
          if (
            checkRow < 0 ||
            checkRow > matrix.length - 1 ||
            checkCol < 0 ||
            checkCol > matrix[1].length - 1
          )
            return;
          if (matrix[checkRow][checkCol]) bombCounter += 1;
        });
        result[row][col] = bombCounter;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
