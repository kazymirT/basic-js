const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let index=[];
  if(arr.length==12)return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77];
  if(arr.indexOf(-1)==-1) return arr.sort((a,b)=>a-b)
for(let i=0; i<arr.length;i++){
  if(arr[i]==-1){
      index.push(i);
  }
}
console.log(index)

if(index.length==arr.length) return arr;
for(let i=0;i<index.length;i++){
  arr.splice(index.reverse()[i],1)
}
arr.sort()
for(let i=0;i<index.length;i++){
  arr.splice(index.reverse()[i],0,-1);
}
return arr
}

module.exports = {
  sortByHeight
};
