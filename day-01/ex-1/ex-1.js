const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
const fuelForMass = (mass) => parseInt(mass / 3) - 2;

const inputLines = readFile("./input.txt").toString().split(/\r?\n/);
const required = inputLines
    .map(mass => fuelForMass(mass))
    .reduce((a, b) => a + b, 0);
console.log(required);

module.exports = fuelForMass;