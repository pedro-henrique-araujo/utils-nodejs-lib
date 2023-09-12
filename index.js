module.exports = {
  calculatePercentage(fractions, total) {
    if (!total) return NaN;
    return Math.round((fraction / total) * 10000) / 100;
  },
};
