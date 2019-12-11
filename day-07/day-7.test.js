const {maxThrusterSetting} = require('./day-7');

describe("It calculates the max thruster setting for a given phase setting", () => {
    it("Calculates '43210' for [4,3,2,1,0]", () => {
        const program = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0";

        const output = maxThrusterSetting(program, 4,3,2,1,0);

        expect(output).toBe(43210);
    });
    it("Calculates '54321' for [0,1,2,3,4]", () => {
        const program = "3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0";

        const output = maxThrusterSetting(program, 0,1,2,3,4);

        expect(output).toBe(54321);
    });
    it("Calculates '65210' for [1,0,4,3,2]", () => {
        const program = "3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0";

        const output = maxThrusterSetting(program, 1,0,4,3,2);

        expect(output).toBe(65210);
    });
});