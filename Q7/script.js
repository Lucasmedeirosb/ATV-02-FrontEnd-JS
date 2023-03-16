const calcularBtn = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

calcularBtn.addEventListener('click', () => {
	const num1 = parseFloat(document.querySelector('#num1').value);
	const num2 = parseFloat(document.querySelector('#num2').value);
	const num3 = parseFloat(document.querySelector('#num3').value);
	const num4 = parseFloat(document.querySelector('#num4').value);
	const num5 = parseFloat(document.querySelector('#num5').value);

	const maior = Math.max(num1, num2, num3, num4, num5);

	resultado.innerHTML = `O maior número é ${maior}.`;
});
