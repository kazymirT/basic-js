const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  
    getLength() {
      // this.chainLength=this.chain.length;
      // return this.chain;
  },
    addLink( value ) {
      let chainLink;
      if(value!==undefined){
           chainLink = `( ${value} )`; 
      }else{
           chainLink = `(  )`; 
      }
      this.chain.push(chainLink); 
      // console.log(this.chain);
      return this;
  },
    removeLink( position ) {
      if(typeof position!="number"||position<=0||this.chain.length<position){
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
    }
      this.chain.splice(position-1,1);
      return this;
  },
    reverseChain() {
      this.chain.reverse()
      return this;
  
  },
    finishChain() {
  this.finishChains=this.chain.join("~~");
  this.chain = [];
  return this.finishChains
  }
  };

module.exports = {
  chainMaker
};
