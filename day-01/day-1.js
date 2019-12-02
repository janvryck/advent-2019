const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
const fuelForModule = (mass) => parseInt(mass / 3) - 2;
const fuelForMass = f => f;

const inputLines = readFile("./input.txt").toString().split(/\r?\n/);
const required = inputLines
    .map(mass => fuelForModule(mass))
    .reduce((a, b) => a + b, 0);
console.log(required);

module.exports = {
    fuelForModule: fuelForModule,
    fuelForMass: fuelForMass,
};
