const {isPotential} = require('./day-4');

describe('It determines if a String is a potential password',() => {
    it("Marks '111111' as potential password", () => {
        expect(isPotential("111111")).toBe(true);
    });
    it("Does not mark '223450' as potential password", () => {
        expect(isPotential("223450")).toBe(false);
    });
    it("Does not mark '223450' as potential password", () => {
        expect(isPotential("123789")).toBe(false);
    })
});