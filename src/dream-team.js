const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = '';

  if (members || Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        members[i] = members[i].trim();
      }

    }
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) != 'string') {
        continue;
      }
      else {
        result += members[i][0].toUpperCase();
      }

    }
  }
  else {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[i];
        result = result.substr(0, i) + result[j] + result.substr(i + 1);
        result = result.substr(0, j) + temp + result.substr(j + 1);
      }

    }

  }
  return result;
};
