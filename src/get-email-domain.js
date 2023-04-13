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
function getEmailDomain( email ) {
  let startIndex;
  let rez;
  startIndex=email.lastIndexOf("@");
  rez=email.slice(startIndex+1);
  return rez;
}

module.exports = {
  getEmailDomain
};
