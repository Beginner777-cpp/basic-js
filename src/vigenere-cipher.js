const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(check) {
    this.check = check;
  }
  encrypt(msg, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    var cypher = "";
    for (var i = 0, j = 0; i < msg.length; i++) {
      var currentLetter = msg[i];
      if (currentLetter == ' ' || !/[a-zA-Z]/g.test(currentLetter)) {
        cypher += currentLetter;
      }
      else {
        if (currentLetter.toUpperCase() === currentLetter) {
          var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
          cypher += String.fromCharCode(upperLetter + 65);
          j++;
        } else if (currentLetter.toLowerCase() === currentLetter) {
          var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
          cypher += String.fromCharCode(lowerLetter + 97);
          j++;
        } else {
          cypher += currentLetter;
        }
      }

    }
    cypher = cypher.toUpperCase();
    if (this.check === false) {
      cypher = cypher.split('');
      cypher = cypher.reverse();
      cypher = cypher.join('');
    }
    return cypher;
  }
  decrypt(code, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    var msg = "";
    for (var i = 0, j = 0; i < code.length; i++) {
      var currentLetter = code[i];
      if (currentLetter == ' ' || !/[a-zA-Z]/g.test(currentLetter)) {
        msg += currentLetter;
      }
      else {
        if (currentLetter.toUpperCase() === currentLetter) {
          var upperLetter = ((currentLetter.charCodeAt() - 65 + 26) - (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
          msg += String.fromCharCode(upperLetter + 65);
          j++;
        } else if (currentLetter.toLowerCase() === currentLetter) {
          var lowerLetter = ((currentLetter.charCodeAt() - 97 + 26) - (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
          msg += String.fromCharCode(lowerLetter + 97);
          j++;
        } else {
          msg += currentLetter;
        }
      }

    }
    msg = msg.toUpperCase();
    if (this.check === false) {
      msg = msg.split('');
      msg = msg.reverse();
      msg = msg.join('');
    }
    return msg;
  }
}

module.exports = VigenereCipheringMachine;
