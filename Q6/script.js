const numerosAbaixoEl = document.getElementById('numeros-abaixo');
let numerosAbaixo = '';

for (let i = 1; i <= 20; i++) {
    numerosAbaixo += i + '<br>';
}

numerosAbaixoEl.innerHTML = numerosAbaixo;

const numerosLadoEl = document.getElementById('numeros-lado');
let numerosLado = '';

for (let i = 1; i <= 20; i++) {
    numerosLado += i + ' ';
}

numerosLadoEl.innerHTML = numerosLado;
