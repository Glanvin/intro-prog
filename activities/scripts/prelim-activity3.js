/*
 *
 * Variables to store values of my infomation
 * */
let firstName = 'Seth Matthew';
let lastName = 'Valmores';
let birthYear = 2004;
let currentYear = 2025;
let age = currentYear - birthYear;
let address = 'Yacapin Street. CDO';
let greet = 'Hello! My name is ' + firstName + ' ' + lastName + ' I live in ' + address + ' I\'m ' + age + ' years old';
/*
 *document.writeln() and alert() is write my stored values into the personalInfo.html
 * */
document.writeln(greet)
alert(greet)