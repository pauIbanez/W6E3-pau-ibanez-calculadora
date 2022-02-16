const calculate = (a, b) => {
  const results = {};

  results.sum = a + b;
  results.substraction = a - b;
  results.multiplication = a * b;
  results.division = a / b;

  return results;
};

module.exports = calculate;
