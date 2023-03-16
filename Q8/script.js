const calcularBtn = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

calcularBtn.addEventListener('click', () => {
	const num1 = parseFloat(document.querySelector('#num1').value);
	const num2 = parseFloat(document.querySelector('#num2').value);
	const num3 = parseFloat(document.querySelector('#num3').value);
	const num4 = parseFloat(document.querySelector('#num4').value);
	const num5 = parseFloat(document.querySelector('#num5').value);

	const soma = num1 + num2 + num3 + num4 + num5;
	const media = soma / 5;

	resultado.innerHTML = `A soma dos números é ${soma} e a média é ${media.toFixed(2)}.`;
});
