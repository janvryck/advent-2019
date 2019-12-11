const fs = require('fs');
const path = require('path');
const {intCode} = require('../lib/int-code');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

const part1 = function () {
    const diagnosticCode = intCode(readFile('input.txt'), 1).reverse()[0];
    console.log(`P1 - Diagnostic code: ${diagnosticCode}`);
};
const part2 = function () {
    const diagnosticCode = intCode(readFile('input.txt'), 5).reverse()[0];
    console.log(`P2 - Diagnostic code: ${diagnosticCode}`);
};