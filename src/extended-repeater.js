const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  str = String(str);

  let result = '';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 0;
  let separator = options.separator !== undefined ? options.separator : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 0;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let addSep = addition + additionSeparator;
  let add = '';
  if (addition != '') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      add += addSep;
    }
    if (additionRepeatTimes == 0) {
      add = addSep;
    }
    add = add.slice(0, add.length - additionSeparator.length);
  }

  let tempStr = str + add + separator;

  for (let i = 0; i < repeatTimes; i++) {
    result += tempStr;
  }
  result = result.slice(0, result.length - separator.length)
  if (repeatTimes == 0) {
    result = str + add;
  }
  return result;
};
