const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) {
      this.chain.push('');
      return this;
    }
    else {
      this.chain.push(value);
      return this;
    }

  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (this.chain[position - 1] === undefined) {
      this.chain = []
      throw new Error();
    }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    }


  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;

  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here\
    let chain = '';
    this.chain.forEach((el) => { chain += `( ${el} )~~` });
    chain = chain.slice(0, chain.length - 2);
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;
