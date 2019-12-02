const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
const fuelForModule = (module) => parseInt(module / 3) - 2;
const fuelForModuleWithFuel = (module) => {
    let fuel = fuelForModule(module);
    if (fuel > 0) {
        fuel += fuelForModuleWithFuel(fuel);
    }
    return fuel > 0 ? fuel : 0;    
}

const inputLines = readFile("./input.txt").toString().split(/\r?\n/);
const requiredForModule = inputLines
    .map(mass => fuelForModule(mass))
    .reduce((a, b) => a + b, 0);
const requiredForModuleAndFuel = inputLines
    .map(mass => {
        let fuel = fuelForModule(mass)
        return fuel + fuelForModuleWithFuel(fuel)
    })
    .reduce((a, b) => a + b, 0);

console.log(requiredForModuleAndFuel);

module.exports = {
    fuelForModule: fuelForModule,
    fuelForModuleWithFuel: fuelForModuleWithFuel,
};
