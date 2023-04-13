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
function repeater( str, options ) {
  let separator='+';
  let additionSeparator='|';
  let addition; 
  let stringPart=[] 
  let string=[]
  if(options.separator) separator=options.separator;
  if(options.additionSeparator) additionSeparator=options.additionSeparator;
  if(options.addition!==undefined) createAddit(); 

  function createAddit(){
    let rez=[]
    rez.push(options.addition+'');
        if(options.additionRepeatTimes){
        for(let i=1;i<options.additionRepeatTimes;i++){
            rez.push(options.addition+'')
        }
    }
    
    addition=rez.join(additionSeparator);
    
    console.log(rez)
    // console.log(addition)
}
stringPart.push(str+'');
stringPart.push(addition);
stringPart=stringPart.join("")
console.log(stringPart)
if(options.repeatTimes){
   for(let i=0;i<options.repeatTimes;i++){
    string.push(stringPart);
}  
}else{
    string=stringPart;
}

// console.log(string)
if(typeof string=="object"){
string=string.join(separator);
}

return string;
}

module.exports = {
  repeater
};
