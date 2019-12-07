const fs = require('fs');
const path = require('path');

const ruleObject = {
  get: {},
  post: {},
  put: {},
  patch: {},
  delete: {},
};
const ruleFilesName = fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js');
ruleFilesName.forEach(fileName => {
  const filePath = path.resolve(__dirname, fileName);
  const fileModule = require(filePath);
  Object
    .entries(fileModule)
    .forEach(([method, rule]) => Object.assign(ruleObject[method], rule));
});

module.exports = ruleObject;
