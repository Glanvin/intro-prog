let firstName = prompt('Enter your first name').trim();//Gets the first name of the user
let lastName = prompt('Enter your last name').trim();//Gets the last name of the user
let address = prompt('Enter your current address');//Cuurent address of the user
let birthYear;

/*
 *A while loop to if the birthYear value is not a number
 *It will only exit if the inputted value is a number and that is a valid year between 1900 to the current year
 * **/
let isValidBirthYear = false;

while (!isValidBirthYear) {
  birthYear = prompt("Enter your birth year (e.g 1980)").trim()
  if (isNaN(birthYear)) {
    alert("Invalid number. Please in put a valid number!");
  } else {
    if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
      alert("Enter a valid birth year!")
    } else {
      isValidBirthYear = true
    }
  }
}

const currentYear = new Date(); //Gets the current month, day and year
let curentAge = currentYear.getFullYear() - birthYear; //Gets current year then subtracts the birth year

let isAdult = (age) => { // A lamda function if you want to have a short function that is only 1 - 3 lines or simple operations
  return age >= 18 ? 'Adult' : 'Minor'//This an ternary operator basically a shorten if else statement
}
/*
 *Alerts and console logs the user with a greeting with their firstName, lastName, address, birthYear, curentAge and isAdult into the activity5.html
 * */
alert('Hello! My name is ' + firstName + ' ' + lastName + '. I live in ' + address + '. I am ' + curentAge + ' years old and I am an ' + isAdult(curentAge) + '.');
console.log('Hello! My name is ' + firstName + ' ' + lastName + '. I live in ' + address + '. I am ' + curentAge + ' years old and I am an ' + isAdult(curentAge) + '.');