const fs = require('fs');
const path = require('path');

module.exports = app => {
  const routerFilesName = fs
    .readdirSync(__dirname)
    .filter(fileName => fileName !== 'index.js');

  routerFilesName.forEach(fileName => {
    const filePath = path.resolve(__dirname, fileName);
    require(filePath)(app);
  });
};
