const fs = require('fs');

fs.readFile('input/input.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  calorie_counter(data); // Output: Contents of the mock.txt file
});


function calorie_counter(input){
  // split input into array of elf calorie counts
  const calories = input.split(/\r\n/)
  let elves_bags =  [0]; // Array.from({ length: calories.length }, () => 0);
  let current_elf = 0;
  let max_carrying_elf = 0;

  calories.forEach(element => {
    // get each elf's calorie count
    if(element==""){
      current_elf++;
      elves_bags[current_elf]=0;
    }else{
      elves_bags[current_elf]+=parseInt(element);
    }
    // check if current elf is carrying more calories than the max stored
    if(elves_bags[current_elf]>elves_bags[max_carrying_elf]){
      max_carrying_elf=current_elf;
    }
  });

  // Give the answer
  console.table(elves_bags);
  console.log("Elf #"+max_carrying_elf+" carries max calories: "+elves_bags[max_carrying_elf]);
}
