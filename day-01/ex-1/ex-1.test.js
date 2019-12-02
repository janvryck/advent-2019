const fuelForMass = require('./ex-1')

describe("Calculates correct fuel requirements for mass", () => {
    it("Mass 12 yields 2 fuel", () => { expect(fuelForMass(12)).toBe(2); });
    it("Mass 14 yields 2 fuel", () => { expect(fuelForMass(14)).toBe(2); });
    it("Mass 1969 yields 654 fuel", () => { expect(fuelForMass(1969)).toBe(654); });
    it("Mass 100756 yields 33583 fuel", () => { expect(fuelForMass(100756)).toBe(33583); });
})