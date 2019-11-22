const fs = require('fs');
const path = require('path');

const ruleObject = {};
const ruleFilesName = fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js');
ruleFilesName.forEach(fileName => {
  const filePath = path.resolve(__dirname, fileName);
  const fileModule = require(filePath);
  Object.assign(ruleObject, fileModule);
});

module.exports = ruleObject;
