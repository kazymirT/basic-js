const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
    if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let rez=[];
    let newArr=[...arr];
    newArr.forEach(e=>{
       if(typeof e=="string"){
             console.log(e);
             switch(e){
                case '--double-next': doubleNext();break;
                case '--double-prev': doublePrev();break;
                case '--discard-next': discardNext();break;
                case '--discard-prev': discardPrev();break;
             }
  
            } 
    })
        
    
    function doubleNext(){
        let index= newArr.indexOf('--double-next');
        if(index==newArr.length-1){
            newArr.splice(index,1);
            return
        }        
        newArr.splice(index,1,newArr[index+1]);
    }   
    function doublePrev(){
        console.log("+")
        let index= newArr.indexOf('--double-prev');
  
        if(index==0){
            newArr.splice(index,1);
            return
        }        
        newArr.splice(index,1,newArr[index-1]);
    }
    function discardNext(){
        let index= newArr.indexOf('--discard-next');
        if(newArr[index+2]=="--double-prev"||newArr[index+2]=="--discard-prev"){
            newArr.splice(index,3);
            return
        }
        newArr.splice(index,2,);
    }
    function discardPrev(){
        let index= newArr.indexOf('--discard-prev');
        if(index==0){
            newArr.splice(index,1);
            return
        }        
        newArr.splice(index-1,2,);
    }
    return newArr;
  } 

module.exports = {
  transform
};
