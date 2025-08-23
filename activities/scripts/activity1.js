function onCalculate() {
	//Gets value for the 5 fields and turns into a integer
	let num1 = parseInt(document.getElementById('num1').value);
	let num2 = parseInt(document.getElementById('num2').value);
	let num3 = parseInt(document.getElementById('num3').value);
	let num4 = parseInt(document.getElementById('num4').value);
	let num5 = parseInt(document.getElementById('num5').value);

	//Calculates the values of num1-5
	const sum = num1 + num2 + num3 + num4 + num5;
	const diff = num2 + num3 + num4 + num5 - num1;
	const product = num1 * num2* num3 * num4 * num5;
	const division = num1 / num2 / num3 / num4 / num5;

	//Gets the element id that matches and replaces with the result of the sum, diff, product, and division
	document.getElementById('result').innerHTML = `
	Your result in addition is ${sum}. <br>
	Your result in subraction is ${diff}. <br>
	Your result in multiplication is ${product}. <br>
	Your result in addition is ${division}.
`
}
