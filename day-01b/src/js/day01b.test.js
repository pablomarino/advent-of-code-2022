const calorie_counter = require('./day01b.js');
const filePath = 'input/input.txt';

describe('GIVEN the input.txt file WHEN calculates top 3 elves calorie count', () => {
  test('THEN the returned value length should be 3', () => {
    expect(calorie_counter(filePath).then(
      result => {
        expect(result.length).toBe(3);
      }
    ));
  });
});

describe('GIVEN the input.txt file WHEN calculates top 3 elves calorie count', () => {
  test('THEN the sum of the top3 values should be 203203', () => {
    expect(calorie_counter(filePath).then(
      result => {
        expect(result.reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toBe(203203);
      }
    ));
  });
});
