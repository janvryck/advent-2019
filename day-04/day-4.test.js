const {isPotential, isPotentialWithDoubles} = require('./day-4');

describe('It determines if a String is a potential password',() => {
    it("Marks '111111' as potential password", () => {
        expect(isPotential("111111")).toBe(true);
    });
    it("Does not mark '223450' as potential password", () => {
        expect(isPotential("223450")).toBe(false);
    });
    it("Does not mark '123789' as potential password", () => {
        expect(isPotential("123789")).toBe(false);
    })
});

describe('It determines if a String is a potential password for part 2',() => {
    it("Marks '112233' as potential password", () => {
        expect(isPotentialWithDoubles("112233")).toBe(true);
    });
    it("Does not mark '123444' as potential password", () => {
        expect(isPotentialWithDoubles("123444")).toBe(false);
    });
    it("Marks '111122' as potential password", () => {
        expect(isPotentialWithDoubles("111122")).toBe(true);
    })
});