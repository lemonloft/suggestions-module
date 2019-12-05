const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});

// const expected = 3;
// const actual = sum(1, 2);
// if (expected !== actual) {
//   console.log('Hey, something is wrong with the "sum" function');
// } else {
//   console.log('Sum works');
// }