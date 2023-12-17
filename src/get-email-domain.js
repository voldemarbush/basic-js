const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return /@([a-zA-Z0-9-]+\.[a-zA-Z]+)/.exec(email)[1];
}

module.exports = {
  getEmailDomain,
};
