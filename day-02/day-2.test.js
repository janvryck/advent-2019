const {executeIntCode} = require('./day-2');

describe("Executes IntCode programs correctly", () => {
    it("Executes the first sample correctly", () => { 
        const given = "1,9,10,3,2,3,11,0,99,30,40,50";
        const expected = "3500,9,10,70,2,3,11,0,99,30,40,50";
        expect(executeIntCode(given)).toEqual(expected); 
    });
    it("Executes the second sample correctly", () => { 
        const given = "1,9,10,3,2,3,11,0,99,30,40,50";
        const expected = "3500,9,10,70,2,3,11,0,99,30,40,50";
        expect(executeIntCode(given)).toEqual(expected); 
    });
    it("Executes the third sample correctly", () => { 
        const given = "1,9,10,3,2,3,11,0,99,30,40,50";
        const expected = "3500,9,10,70,2,3,11,0,99,30,40,50";
        expect(executeIntCode(given)).toEqual(expected); 
    });
    it("Executes the fourth sample correctly", () => { 
        const given = "1,9,10,3,2,3,11,0,99,30,40,50";
        const expected = "3500,9,10,70,2,3,11,0,99,30,40,50";
        expect(executeIntCode(given)).toEqual(expected); 
    });
    it("Executes the fifth sample correctly", () => { 
        const given = "1,9,10,3,2,3,11,0,99,30,40,50";
        const expected = "3500,9,10,70,2,3,11,0,99,30,40,50";
        expect(executeIntCode(given)).toEqual(expected); 
    });
});