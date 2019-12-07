const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

function moveLeft(current, length, coordinates) {
    const start = current;
    for (let x = start.x - 1; x >= (start.x - length); x--) {
        current = {
            x: x,
            y: start.y,
            steps: current.steps + 1
        };
        coordinates.push(current);
    }
    return current;
}

function moveUp(current, length, coordinates) {
    const start = current;
    for (let y = start.y + 1; y <= (start.y + length); y++) {
        current = {
            x: start.x,
            y: y,
            steps: current.steps + 1
        };
        coordinates.push(current);
    }
    return current;
}

function moveRight(current, length, coordinates) {
    const start = current;
    for (let x = start.x + 1; x <= (start.x + length); x++) {
        current = {
            x: x,
            y: start.y,
            steps: current.steps + 1
        };
        coordinates.push(current);
    }
    return current;
}

function moveDown(current, length, coordinates) {
    const start = current;
    for (let y = start.y - 1; y >= (start.y - length); y--) {
        current = {
            x: start.x,
            y: y,
            steps: current.steps + 1
        };
        coordinates.push(current);
    }
    return current;
}

function addCoordinatesForPath(current, coordinates) {
    return part => {
        const direction = part.substr(0, 1);
        const length = Number(part.substr(1));

        switch (direction) {
            case "L":
                current = moveLeft(current, length, coordinates);
                break;
            case "U":
                current = moveUp(current, length, coordinates);
                break;
            case "R":
                current = moveRight(current, length, coordinates);
                break;
            case "D":
                current = moveDown(current, length, coordinates);
                break;
            default:
                break;
        }
    };
}

const parseToCoordinates = function (wire) {
    let current = {x: 0, y: 0, steps: 0};
    const coordinates = [];

    wire.forEach(addCoordinatesForPath(current, coordinates));
    return coordinates.sort((a, b) => manhattanDistance(a) - manhattanDistance(b));
};

function allIntersectionsFor(arr1, arr2) {
    const matchingX = arr1.filter(p1 => arr2.find(p2 => p2.x === p1.x));
    const matchingY = matchingX.filter(p1 => arr2.find(p2 => p2.x === p1.x && p2.y === p1.y));

    return matchingY
        .map(p1 => {
            const match = arr2.find(p2 => p2.x === p1.x && p2.y === p1.y);
            return {
                ...p1,
                steps: p1.steps + match.steps
            }
        });
}

const closestIntersection = function (arr1, arr2) {
    return allIntersectionsFor(arr1, arr2)[0];
};

const quickestIntersection = function (arr1, arr2) {
    return allIntersectionsFor(arr1, arr2)
        .sort((a, b) => a.steps - b.steps)[0];
};

const manhattanDistance = function (point) {
    return Math.abs(point.x) + Math.abs(point.y)
};

const lowestManhattanDistanceFor = (first, second) => {
    const firstWire = parseToCoordinates(first);
    const secondWire = parseToCoordinates(second);

    return manhattanDistance(closestIntersection(firstWire, secondWire));
};

const stepsToClosestIntersection = (first, second) => {
    const firstWire = parseToCoordinates(first);
    const secondWire = parseToCoordinates(second);

    return quickestIntersection(firstWire, secondWire).steps;
};

const part1 = function () {
    const lines = readFile("input.txt").toString().split(/\r?\n/);
    return lowestManhattanDistanceFor(
        lines[0].split(","),
        lines[1].split(",")
    )
};
console.log(part1());

const part2 = function () {
    const lines = readFile("input.txt").toString().split(/\r?\n/);
    return stepsToClosestIntersection(
        lines[0].split(","),
        lines[1].split(",")
    )
};
console.log(part2());

module.exports = {
    lowestManhattanDistanceFor: lowestManhattanDistanceFor,
    stepsToClosestIntersection: stepsToClosestIntersection
};
