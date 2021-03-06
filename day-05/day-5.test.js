const {intCode: runProgram} = require('../lib/int-code');

describe("Run IntCode program", () => {
    it("Handles jump tests with position mode", () => {
        const prog = "3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9";

        let output = runProgram(prog, 42);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 0);
        expect(output).toStrictEqual([0]);
    });
    it("Handles jump tests with immediate mode", () => {
        const prog = "3,3,1105,-1,9,1101,0,0,12,4,12,99,1";

        let output = runProgram(prog, 42);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 0);
        expect(output).toStrictEqual([0]);
    });
    it("Handles 'equals' tests with position mode", () => {
        const prog = " 3, 9, 8, 9,10, 9, 4, 9,99,-1, 8";

        let output = runProgram(prog, 8);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 42);
        expect(output).toStrictEqual([0]);
    });
    it("Handles 'less than' tests with position mode", () => {
        const prog = "3,9,7,9,10,9,4,9,99,-1,8";

        let output = runProgram(prog, -1);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 8);
        expect(output).toStrictEqual([0]);
    });
    it("Handles 'equals' tests with immediate mode", () => {
        const prog = "3,3,1108,-1,8,3,4,3,99";

        let output = runProgram(prog, 8);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 42);
        expect(output).toStrictEqual([0]);
    });
    it("Handles 'less than' tests with immediate mode", () => {
        const prog = "3,3,1107,-1,8,3,4,3,99";

        let output = runProgram(prog, -1);
        expect(output).toStrictEqual([1]);

        output = runProgram(prog, 8);
        expect(output).toStrictEqual([0]);
    });
    it("Handles the complex example", () => {
        const prog = "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31," +
            "1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104," +
            "999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99";
        let output;

        output = runProgram(prog, 7);
        expect(output).toStrictEqual([999]);
        output = runProgram(prog, 8);
        expect(output).toStrictEqual([1000]);
        output = runProgram(prog, 9);
        expect(output).toStrictEqual([1001]);
    })
});
