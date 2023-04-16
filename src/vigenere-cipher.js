const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool){
  // throw new NotImplementedError('Not implemented');
    this.direction;
  if(bool!='false')this.direction=true;
  }
  encrypt(message, key) {
    if(!message||message===undefined||!key) throw new Error("Incorrect arguments!");
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage||encryptedMessage===undefined||!key) throw new Error("Incorrect arguments!");
  }
}

module.exports = {
  VigenereCipheringMachine
};
