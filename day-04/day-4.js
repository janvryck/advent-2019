const input = [265275, 781584];

const generateRange = function (lower, upper) {
    const potentialPasswords = [];
    for (let i = lower; i <= upper; i++) {
        potentialPasswords.push(i.toString());
    }
    return potentialPasswords;
};

const isPotential = function (p) {
    return isOrdered(p) && containsMultipleOccurences(p)
};

const isOrdered = function (p) {
    return strictEqual(p.split(''), p.split('').sort());
};

const strictEqual = function (a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};

const containsMultipleOccurences = function (o) {
    for (const c of o) {
        let occurences = (o.match(new RegExp(c, "g")) || []).length;
        if (occurences > 1) {
            return true
        }
    }
    return false;
};

const isPotentialWithDoubles = function (p) {
    return isOrdered(p) && containsDuplicates(p)
};

const containsDuplicates = function (o) {
    for (const c of o) {
        let occurences = (o.match(new RegExp(c, "g")) || []).length;
        if (occurences === 2) {
            return true
        }
    }
    return false;
};

const part1 = function () {
    return generateRange(input[0], input[1])
        .filter(isPotential)
        .length;
};

console.log(part1());

const part2 = function () {
    return generateRange(input[0], input[1])
        .filter(isPotentialWithDoubles)
        .length;
};

console.log(part2());

module.exports = {
    isPotential: isPotential,
    isPotentialWithDoubles: isPotentialWithDoubles
};