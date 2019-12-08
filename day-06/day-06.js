const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

const totalOrbitsFor = function (input) {
    const orbits = buildOrbitsFrom(input);

    return Object.keys(orbits)
        .map(k => orbitsFor(orbits, k))
        .reduce((a, b) => Number(a) + Number(b));
};

const buildOrbitsFrom = function (input) {
    const orbits = {};
    input.forEach(orbit => addOrbit(orbit, orbits));
    return orbits
};

function addOrbit(orbit, orbits) {
    let [mass, orbiter] = orbit.split(")");
    if (orbits[mass] !== undefined) {
        orbits[mass].push(orbiter);
    } else {
        orbits[mass] = [orbiter];
    }
}

function orbitsFor(orbits, key) {
    let amount = 0;
    if (orbits[key] !== undefined) {
        amount += orbits[key].length;
        amount += orbits[key].map(suborbit => orbitsFor(orbits, suborbit))
            .reduce((a, b) => a + b);
    }
    return Number(amount);
}

const part1 = function () {
    const inputLines = readFile("./input.txt").toString().split(/\r?\n/);
    return totalOrbitsFor(inputLines);
};

console.log(part1());

module.exports = {
    totalOrbitsFor: totalOrbitsFor
};