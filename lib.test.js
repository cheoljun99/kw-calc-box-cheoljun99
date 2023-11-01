const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test("prime([17]) should be true", () => {
    expect(lib.prime([17])).toBe(true);
});
test("prime([6]) should be false", () => {
    expect(lib.prime([6])).toBe(false);
});
test("fact([15]) should be 1307674368000", () => {
    expect(lib.fact([15])).toBe(1307674368000);
});
test("fact([5]) should be 120", () => {
    expect(lib.fact([5])).toBe(120);
});
