const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

module.exports = {
    readFile: readFile
};
