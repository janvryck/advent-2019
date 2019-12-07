const {manhattanDistanceFor, stepsToClosestIntersection} = require('./day-3');

describe("Calculates correct Manhattan distance for 2 wires", () => {
    it("Solves the first sample", () => {
        const firstWire = ["R8", "U5", "L5", "D3"];
        const secondWire = ["U7", "R6", "D4", "L4"];
        expect(manhattanDistanceFor(firstWire, secondWire)).toEqual(6);
    });
    it("Solves the second sample", () => {
        const firstWire = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
        const secondWire = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];
        expect(manhattanDistanceFor(firstWire, secondWire)).toEqual(159);
    });
    it("Solves the third sample", () => {
        const firstWire = ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"];
        const secondWire = ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"];
        expect(manhattanDistanceFor(firstWire, secondWire)).toEqual(135);
    });
});

describe("Retrieves closest intersection for 2 wires", () => {
    it("Solves the first sample", () => {
        const firstWire = ["R8", "U5", "L5", "D3"];
        const secondWire = ["U7", "R6", "D4", "L4"];
        expect(stepsToClosestIntersection(firstWire, secondWire)).toEqual(40);
    });
    it("Solves the second sample", () => {
        const firstWire = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
        const secondWire = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];
        expect(stepsToClosestIntersection(firstWire, secondWire)).toEqual(610);
    });
    it("Solves the third sample", () => {
        const firstWire = ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"];
        const secondWire = ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"];
        expect(stepsToClosestIntersection(firstWire, secondWire)).toEqual(410);
    });
});
