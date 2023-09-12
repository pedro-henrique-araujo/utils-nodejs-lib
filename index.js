module.exports = {
  calculatePercentage(fraction, total) {
    if (!total) return NaN;
    return Math.round((fraction / total) * 10000) / 100;
  },
};
