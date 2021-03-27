const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // return Array.isArray(arr) ? Math.max(...arr.map(el => this.calculateDepth(el, res + 1))) : res;

    return 1 + (arr instanceof Array ? arr.reduce((max, item) => {
      return Math.max(max, this.calculateDepth(item));
    }, 0) : -1);
  }
};