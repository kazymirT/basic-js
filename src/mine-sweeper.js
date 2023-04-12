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
  matrix.forEach(e => {
          for(let i=0;i<e.length;i++){
              if(e[i]==false){
                  e[i]=0
              }else{
                  e[i]=1;
              }
          }
      }
  );
  if(matrix.flat().indexOf(1)) return matrix;
  for(let i=0;i<matrix.length;i++){
      if(matrix[i].indexOf(1)!=-1){
          let index1=i;
          let index2=matrix[i].indexOf(1)
          if(index1==0){
              matrix[index1+1][index2]=+1;
              matrix[index1][index2+1]=+1;
          }
          if(index1==1){
              matrix[index1+1][index2]+=1;
              matrix[index1+1][index2+1]+=1;
              matrix[index1+1][index2+2]+=1;
              matrix[index1][index2+2]+=1;
              matrix[index1][index2]+=1;
              matrix[index1-1][index2+1]+=1;
              matrix[index1-1][index2+2]+=1;
          }
      }
  }
  return matrix
}

module.exports = {
  minesweeper
};
