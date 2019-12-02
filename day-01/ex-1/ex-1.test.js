const fuelForMass = require('./ex-1')

test("Calculates correct fuel requirements for mass", () => {
    expect(fuelForMass(12)).toBe(2);
    expect(fuelForMass(14)).toBe(2);
    expect(fuelForMass(1969)).toBe(654);
    expect(fuelForMass(100756)).toBe(33583);
})