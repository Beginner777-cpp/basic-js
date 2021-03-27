const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof (sampleActivity) != 'string' || isNaN(Number(sampleActivity)) || !sampleActivity) {
    return false;
  }
  else {
    let num = Number(sampleActivity);
    if (num <= 0||num>15) {
      return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
  }
};
