const calorie_counter = require('./day01b.js');
const filePath = 'input/input.txt';
calorie_counter(filePath).then(result => { 
  console.table(result);
  let total_calories = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Top 3 Elves total calories: ${total_calories}`);
});