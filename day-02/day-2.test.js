const {executeIntCode} = require('./day-2');

describe("Executes IntCode programs correctly", () => {
    it("Expects an array as input", () => {
        expect(() => executeIntCode(undefined)).toThrowError(new Error("Input should be a non-empty array."));
        expect(() => executeIntCode(0)).toThrowError(new Error("Input should be a non-empty array."));
        expect(() => executeIntCode("string")).toThrowError(new Error("Input should be a non-empty array."));
        expect(() => executeIntCode([])).toThrowError(new Error("Input should be a non-empty array."));
        expect(() => executeIntCode([99])).not.toThrowError(new Error("Input should be a non-empty array."));
    })
});

describe("Executes IntCode programs correctly", () => {
    it("Executes the first sample correctly", () => {
        const given = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
        const expected = [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
        expect(executeIntCode(given)).toEqual(expected);
    });
    it("Executes the second sample correctly", () => {
        const given = [1, 0, 0, 0, 99];
        const expected = [2, 0, 0, 0, 99];
        expect(executeIntCode(given)).toEqual(expected);
    });
    it("Executes the third sample correctly", () => {
        const given = [2, 3, 0, 3, 99];
        const expected = [2, 3, 0, 6, 99];
        expect(executeIntCode(given)).toEqual(expected);
    });
    it("Executes the fourth sample correctly", () => {
        const given = [2, 4, 4, 5, 99, 0];
        const expected = [2, 4, 4, 5, 99, 9801];
        expect(executeIntCode(given)).toEqual(expected);
    });
    it("Executes the fifth sample correctly", () => {
        const given = [1, 1, 1, 4, 99, 5, 6, 0, 99];
        const expected = [30, 1, 1, 4, 2, 5, 6, 0, 99];
        expect(executeIntCode(given)).toEqual(expected);
    });
});