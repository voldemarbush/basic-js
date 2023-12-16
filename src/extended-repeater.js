const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  let result = '';

  if (separator === undefined) separator = '+';
  if (repeatTimes === undefined) repeatTimes = 1;
  if (addition === undefined) addition = '';
  if (additionSeparator === undefined) additionSeparator = '|';
  if (additionRepeatTimes === undefined) additionRepeatTimes = 1;

  for (a = 0; a < repeatTimes; a++) {
    result += str;
    for (b = 0; b < additionRepeatTimes; b++) {
      result +=
        addition + (b === additionRepeatTimes - 1 ? '' : additionSeparator);
    }
    result += a === repeatTimes - 1 ? '' : separator;
  }

  return result;
}

module.exports = {
  repeater,
};
