function addition() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let result = firstValue + secondValue;
	document.getElementById('result').innerHTML = `The sum is: ${result}`;
}
function diff() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let result = firstValue - secondValue;
	document.getElementById('result').innerHTML = `The subraction is: ${result}`;
}
function prod() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let result = firstValue * secondValue;
	document.getElementById('result').innerHTML = `The product is: ${result}`;
}
function divi() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let result = firstValue / secondValue;
	document.getElementById('result').innerHTML = `The division is: ${result}`;
}
function modulus() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let result = firstValue % secondValue;
	document.getElementById('result').innerHTML = `The remainder is: ${result}`;
}

function allArith() {
	let firstValue = parseInt(document.getElementById('fNum').value);
	let secondValue = parseInt(document.getElementById('sNum').value);
	let resultA = firstValue + secondValue;
	let resultB = firstValue - secondValue;
	let resultC = firstValue * secondValue;
	let resultD = firstValue / secondValue;
	let resultE = firstValue % secondValue;
	document.getElementById('result').innerHTML = `The sum is: ${resultA}, <br> The subraction is: ${resultB}, <br> The remainder is: ${resultC}, <br> The division is: ${resultD}, <br> The remainder is: ${resultE}`;
}

function clearAll() {
	document.getElementById('fNum').value = '';
	document.getElementById('sNum').value = '';
	location.reload();
}