const fs = require('fs');

const read_file = async (filePath) => {
  try {
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    process.exit(1);
  }
};

const calorie_counter = async(filePath) =>{
  // split input into array of elf calorie counts
  
  let elves_bags = [0];
  let current_elf = 0;
  let top_3_elves = [0]//[0,0,0];//Array.from({ length: 3 }, () => 0);
  let input = await read_file(filePath);
  const calories = input.split(/\r\n/)

  calories.forEach(element => {
    // get each elf's calorie count
    if (element == "") {
      current_elf++;
      elves_bags[current_elf] = 0;
    } else {
      elves_bags[current_elf] += parseInt(element);
    }
    // if the current elf's bag is bigger than one of the top 3, add it to the top 3
    for (let i = 0; i < 3; i++) {
      if (elves_bags[current_elf] > top_3_elves[i]) {
        top_3_elves.splice(i, 0, elves_bags[current_elf]);
        return;
      }
    }
  });
  // Remove all values but the top 3
  top_3_elves.splice(3);

  return top_3_elves;
}

/*
// Give the answer
const filePath = 'input/input.txt';
calorie_counter(filePath).then(result => { 
  console.table(result);
  let total_calories = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Top 3 Elves total calories: ${total_calories}`);
});
*/
module.exports = calorie_counter;