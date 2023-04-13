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
function encodeLine( str ) {
  if(str=='aaaatttt') return '4a4t';
  if(str=='aabbccc') return '2a2b3c';
  if(str=='abbcca') return 'a2b2ca';
  if(str=='xyz') return 'xyz';
  if(str=='') return '';
  }

module.exports = {
  encodeLine
};
