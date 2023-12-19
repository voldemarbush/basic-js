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
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(string, key) {
    let keyCounter = 0;
    let result = '';

    if (string === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    string = string.toUpperCase();
    key = key.toUpperCase();

    for (let a = 0; a < string.length; a++) {
      if (/^[A-Z]$/.test(string[a])) {
        const origNum = this.alphabet.indexOf(string[a]);
        const keyNum = this.alphabet.indexOf(key[keyCounter]);
        let symbolPosition = (origNum + keyNum) % 26;
        result += this.alphabet[symbolPosition];
        keyCounter += 1;
      } else {
        result += string[a];
      }
      if (keyCounter === key.length) keyCounter = 0;
    }

    return this.direction ? result : result.split('').reverse().join('');
  }

  decrypt(string, key) {
    let keyCounter = 0;
    let result = '';

    if (string === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    string = string.toUpperCase();
    key = key.toUpperCase();

    for (let a = 0; a < string.length; a++) {
      if (/^[A-Z]$/.test(string[a])) {
        const origNum = this.alphabet.indexOf(string[a]);
        const keyNum = this.alphabet.indexOf(key[keyCounter]);
        let symbolPosition = origNum - keyNum;
        if (symbolPosition < 0) symbolPosition += 26;
        result += this.alphabet[symbolPosition];
        keyCounter += 1;
      } else {
        result += string[a];
      }
      if (keyCounter === key.length) keyCounter = 0;
    }

    return this.direction ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
