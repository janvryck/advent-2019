const {totalOrbitsFor, transfersBetween} = require('./day-06');

describe("Calculating the total amount of direct and indirect orbits", () => {
    it("Correctly calculates the first sample", () => {
        const input = ["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L"];

        expect(totalOrbitsFor(input)).toBe(42);
    });
});

describe("Calculates orbital transfers between 2 points", () => {
    it("Correctly calculates the first sample", () => {
        const input = ["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L", "K)YOU", "I)SAN"];

        expect(transfersBetween(input, "YOU", "SAN")).toBe(4);
    });
});