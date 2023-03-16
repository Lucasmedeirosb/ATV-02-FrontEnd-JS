let form = document.querySelector('form');
let resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let num1 = parseInt(document.querySelector('#num1').value);
	let num2 = parseInt(document.querySelector('#num2').value);
	let numeros = [];

	for (let i = num1; i <= num2; i++) {
		numeros.push(i);
	}

	resultado.innerHTML = "Os números inteiros no intervalo de " + num1 + " e " + num2 + " são: " + numeros.join(", ");
});
