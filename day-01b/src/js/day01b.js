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
    // if the current elf's bag is bigger than one of the top 3, add it to the top 3
    for(let i=0;i<3;i++){
      if(elves_bags[current_elf]>top_3_elves[i]){
        top_3_elves.splice(i,0,elves_bags[current_elf]);
        return;
      }
    }
    
  });
  // Remove all values but the top 3
  top_3_elves.splice(3);
  
  // Give the answer
  console.table(top_3_elves);
  let total_calories = top_3_elves.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(`Top 3 Elves total calories: ${total_calories}`);
}
