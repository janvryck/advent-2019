const {totalOrbitsFor} = require('./day-06');

describe("Calculating the total amount of direct and indirect orbits", () => {
    it("Correctly calculates the first sample", () => {
        const input = ["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L"];

        expect(totalOrbitsFor(input)).toBe(42);
    })
});