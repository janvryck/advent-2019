const { fuelForModule, fuelForModuleWithFuel } = require('./day-1');

describe("Calculates correct fuel requirements for module", () => {
    it("Module with mass 12 yields 2 fuel", () => { expect(fuelForModule(12)).toBe(2); });
    it("Module with mass 14 yields 2 fuel", () => { expect(fuelForModule(14)).toBe(2); });
    it("Module with mass 1969 yields 654 fuel", () => { expect(fuelForModule(1969)).toBe(654); });
    it("Module with mass 100756 yields 33583 fuel", () => { expect(fuelForModule(100756)).toBe(33583); });
});

describe("Calculates correct fuel requirements for entire mass", () => {
    it("Module with mass 14 yields 2 fuel", () => { expect(fuelForModuleWithFuel(2)).toBe(0); });
    it("Module with mass 1969 yields 654 fuel", () => { expect(fuelForModuleWithFuel(654)).toBe(312); });
    it("Module with mass 100756 yields 33583 fuel", () => { expect(fuelForModuleWithFuel(33583)).toBe(16763); });
})