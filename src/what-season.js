const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date) {
    if (!(date instanceof Date)||!date.toISOString()) {
      throw new Error();
    }
    else {
      if (date.getMonth() >= 0 && date.getMonth() <= 1 || date.getMonth() == 11) {
        return 'winter';
      }
      else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
        return 'spring';
      }
      else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
        return 'summer';
      }
      else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
        return 'autumn';
      }
      return;
    }
  }
  else {
    return 'Unable to determine the time of year!';
  }
};
