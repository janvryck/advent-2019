const {readFile} = require("../lib/read-file");
const {intCode} = require("../lib/int-code");

const maxThrusterSettingFor = function (program, ...phase) {
    let output = 0;
    for (let p of phase) {
        output = intCode(program, ...[p, output])[0];
    }
    return output;
};

const generateCombinations = function () {
    const combinations = [];
    for (let setting = 0; setting < Math.pow(5, 5); setting++) {
        combinations.push(setting.toString(5).padStart(5, '0')
            .split('')
            .map(x => Number(x)))
    }
    return combinations.filter(c => (new Set(c)).size === c.length);
};

const maxForCombinations = function (program) {
    const settings = generateCombinations();
    let max = Number.MIN_VALUE;
    for (let s of settings) {
        const maxThruster = maxThrusterSettingFor(program, ...s);
        max = Math.max(max, maxThruster);
    }
    return max;
};

const part1 = function () {
    let program = readFile('../day-07/input.txt');
    console.log(maxForCombinations(program));
}();

module.exports = {
    maxThrusterSetting: maxThrusterSettingFor
};