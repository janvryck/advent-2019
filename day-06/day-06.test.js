const {totalOrbitsFor} = require('./day-06');

describe("Calculating the total amount of direct and indirect orbits", () => {
    it("Correctly calculates the first sample", () => {
        const input = "COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L";

        expect(totalOrbitsFor(input)).toBe(42);
    })
});