const fs = require('fs');
const { exit } = require('process');

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
  let elves_bags =  [0]; 
  let current_elf = 0;
  let top_3_elves = [0]//[0,0,0];//Array.from({ length: 3 }, () => 0);

  calories.forEach(element => {
    // get each elf's calorie count
    if(element==""){
      current_elf++;
      elves_bags[current_elf]=0;
    }else{
      elves_bags[current_elf]+=parseInt(element);
    }
    for(let i=0;i<3;i++){
      if(elves_bags[current_elf]>top_3_elves[i]){
        top_3_elves.splice(i,0,elves_bags[current_elf]);
        return;
      }
    }
    
  });
  top_3_elves.splice(3);
  

  // Give the answer
  console.table(elves_bags);
  let total_calories = 0;
  top_3_elves.forEach((top_elf,index) => {
    console.log(`Elf #${index} carries max calories: ${top_elf}`);
    total_calories+=top_elf;
  });
  console.log(`Total calories: ${total_calories}`);
}
