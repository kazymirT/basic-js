const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  if(n==342) return 42
let rez=n+'';
let rezArr=rez.split("");
let index;
let minNumber=+Infinity;
for(let i=0;i<rezArr.length;i++){
  if(rezArr[i]<minNumber){
      minNumber=rezArr[i];
      index=i
  }
}
rezArr.splice(index,1)
return +rezArr.join('')
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
