const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  try {
    if (date.getFullYear() !== Number(date.toString().split(' ')[3]))
      throw new Error();
  } catch {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 0 || month === 1 || month === 11) return 'winter';
  if (month > 1 && month <= 4) return 'spring';
  if (month > 4 && month <= 7) return 'summer';
  if (month > 7 && month < 11) return 'fall';
}

module.exports = {
  getSeason,
};
