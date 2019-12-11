let memory, input, output;

const init = function () {
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

const instructions = {
    1: (position, a, b) => {
        memory[memory[position + 3]] = a + b;
        return position + 4;
    },
    2: (position, a, b) => {
        memory[memory[position + 3]] = a * b;
        return position + 4;
    },
    3: (position) => {
        const i = input[0] ? input[0] : 0;
        input = Array.isArray(input) ? input.slice(1) : input;
        memory[memory[position + 1]] = i;
        return position + 2;
    },
    4: (position) => {
        let out = memory[position] === 4 ? memory[memory[position + 1]] : memory[position + 1];
        output.push(out);
        return position + 2;
    },
    5: (position, a, b) => Number(a) !== 0 ? b : position + 3,
    6: (position, a, b) => Number(a) === 0 ? b : position + 3,
    7: (position, a, b) => {
        memory[memory[position + 3]] = a < b ? 1 : 0;
        return position + 4
    },
    8: (position, a, b) => {
        memory[memory[position + 3]] = a === b ? 1 : 0;
        return position + 4
    },
    99: () => {
        return -1;
    }
};

const decodeInstruction = function (position) {
    let instruction = memory[position];

    const op = instruction % 100;
    const params = paramsFrom(instruction, position);

    if (instructions.hasOwnProperty(op)) {
        return instructions[op](position, ...params);
    }
    throw new Error(`Unknown operation '${op}' in instruction '${instruction}' at position ${position}`);
};

const runProgram = function (program, ...inputs) {
    init();
    memory = program.split(',').map(m => Number(m));
    input = inputs;
    let position = 0;
    while (position >= 0) {
        position = decodeInstruction(position);
    }
    return output;
};

module.exports = {
    intCode: runProgram
};