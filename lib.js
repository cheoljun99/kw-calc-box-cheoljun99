function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fact(num) {
    if (num < 0) {
        return -1;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
module.exports = {
    avg,
    prime,
    fact,
};

/*
exports.avg =avg;
exports.prime =prime;
exports.fact=fact;
*/
