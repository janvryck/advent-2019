const fs = require('fs');
const path = require('path');

let memory, input, output;

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

const init = function() {
    memory = [];
    input = undefined;
    output = [];
};

const paramsFrom = function (instruction, position) {
    const paramModes = Math.floor(instruction / 100).toString()
        .split('')
        .reverse();
    const params = [];
    for (let i = 1; i <= 3; i++) {
        let param = memory[position + i];
        params.push(paramModes[i - 1] === "1" ? param : memory[param])
    }
    return params;
};

const decodeInstruction = function (position) {
    let instruction = memory[position];

    const op = instruction % 100;
    const params = paramsFrom(instruction, position);

    switch (instruction % 100) {
        case 1:
            // add
            memory[memory[position + 3]] = params[0] + params[1];
            return position + 4;
        case 2:
            // multiply
            memory[memory[position + 3]] = params[0] * params[1];
            return position + 4;
        case 3:
            // store
            memory[memory[position + 1]] = input;
            return position + 2;
        case 4:
            // retrieve
            output.push(memory[memory[position + 1]]);
            return position + 2;
        case 99:
            // halt
            return -1;
        default:
            throw new Error("Unknown instruction: " + instruction);
    }
};

const runProgram = function (program, i = 1) {
    init();
    memory = program.split(',').map(m => Number(m));
    input = i;
    let position = 0;
    while (position >= 0) {
        position = decodeInstruction(position);
    }
    return output.reverse()[0];
};

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

const part1 = function () {
    const diagnosticCode = runProgram(readFile('input.txt'));
    console.log(`Diagnostic code: ${diagnosticCode}`);
};

module.exports = {
    runProgram: runProgram
};