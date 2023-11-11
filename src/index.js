// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "manday",
  "Tuesday",
  "wensday",
  "thursday",
  "friday",
  "suterday",
  "sunday"
];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[7 - 1]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "funday";
console.log(weekDays[6]);

// Challenge 4
// Remove Monday and Tuesday
// Log the array
delete weekDays[0];
delete weekDays[1];
console.log(weekDays);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
//function output{
function showDay(day) {
  console.log(`temparature on ${day}is 18 degrees`);
}
weekDays.forEach(showDay);
