const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

const getOperand = function (prog, currentPos, idx) {
    const operandPosition = prog[currentPos + idx];
    return prog[operandPosition];
};

const calculateOutcome = function (prog, position) {
    const firstOperand = getOperand(prog, position, 1);
    const secondOperand = getOperand(prog, position, 2);
    return prog[position] === 1
        ? firstOperand + secondOperand
        : firstOperand * secondOperand;
};

const executeCurrentOperation = function (prog, position) {
    const outcome = calculateOutcome(prog, position);
    const outcomeIdx = prog[position + 3];
    prog[outcomeIdx] = outcome;
};

const executeIntCode = (intCodeInput) => {
    if (!Array.isArray(intCodeInput) || intCodeInput <= 0) {
        throw new Error("Input should be a non-empty array.")
    }
    const prog = intCodeInput;

    let position = 0;
    while (prog[position] !== 99) {
        executeCurrentOperation(prog, position);
        position += 4;
    }

    return prog;
};

const inputProg = () => {
    const rawInput = readFile("./input.txt").toString();
    const prog1202 = rawInput.split(',');
    prog1202[1] = 12;
    prog1202[2] = 2;
    return prog1202.map(i => Number(i));
};
console.log(executeIntCode(inputProg())[0]);

module.exports = {
    executeIntCode: executeIntCode
};