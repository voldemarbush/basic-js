const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resObject = {};
  const domainParts = domains.reduce((acc, item) => {
    let subArr = item
      .split('.')
      .reverse()
      .reduce((acc, item, index) => {
        let resultArray = acc;
        let sumString =
          index > 0 ? resultArray[index - 1] + '.' + item : '.' + item;
        resultArray.push(sumString);
        return resultArray;
      }, []);
    return acc.concat(...subArr);
  }, []);
  domainParts.forEach((item) => {
    resObject[item] = (resObject[item] || 0) + 1;
  });
  return resObject;
}

module.exports = {
  getDNSStats,
};
