const { calculatePercentage } = require("./index");

describe("test index.js", () => {
  it("expect calculatePercentage to return correct value", () => {
    expect(calculatePercentage(1, 2)).toBe(50);
    expect(calculatePercentage(1, 3)).toBe(33.33);
    expect(calculatePercentage(1, 4)).toBe(25);
  });

  it("expect calculatePercentage to return not a number if total is 0", () => {
    expect(calculatePercentage(1, 0)).toBeNaN();
  });
});
