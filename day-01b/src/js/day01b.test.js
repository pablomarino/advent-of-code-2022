const calorie_counter = require('./day01b.js');
const filePath = 'input/input.txt';
// Given the input file, 
// When the top 3 elves should have the following calorie counts:

test('then the returned value length should be 3', () => {
  expect(calorie_counter(filePath).then(
    result => {
      expect(result.length).toBe(3);
    }
  ));
});

test('the sum of the top3 values should be 203203', () => {
  expect(calorie_counter(filePath).then(
    result => {
      expect(result.reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toBe(203203);
    }
  ));
});

