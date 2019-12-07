const fs = require('fs');
const path = require('path');

const readFile = (filePath) => fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

function moveLeft(current, length, coordinates) {
    const start = current;
    for (let x = start.x - 1; x >= (start.x - length); x--) {
        current = {
            x: x,
            y: start.y
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
            y: y
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
            y: start.y
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
            y: y
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
    let current = {x: 0, y: 0};
    const coordinates = [];

    wire.forEach(addCoordinatesForPath(current, coordinates));
    return coordinates.sort((a, b) => manhattanDistance(a) - manhattanDistance(b));
};

const closestIntersection = function (arr1, arr2) {
    const arr1Str = arr1.map(item => JSON.stringify(item));
    const arr2Str = arr2.map(item => JSON.stringify(item));

    for (const str of arr1Str) {
        if (arr2Str.indexOf(str) > -1) {
            return JSON.parse(str);
        }
    }
};

const manhattanDistance = function (point) {
    return Math.abs(point.x) + Math.abs(point.y)
};

const manhattanDistanceFor = (first, second) => {
    const firstWire = parseToCoordinates(first);
    const secondWire = parseToCoordinates(second);

    return manhattanDistance(closestIntersection(firstWire, secondWire));
};

const part1 = function () {
    const lines = readFile("input.txt").toString().split(/\r?\n/);
    return manhattanDistanceFor(
        lines[0].split(","),
        lines[1].split(",")
    )
};
console.log(part1());

module.exports = {
    manhattanDistanceFor: manhattanDistanceFor,
    stepsToClosestIntersection: () => null
};
