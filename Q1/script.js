const notaInput = document.getElementById('nota-input');
const notaButton = document.getElementById('nota-button');
const notaMensagem = document.getElementById('nota-mensagem');

notaButton.addEventListener('click', function() {
    const nota = parseFloat(notaInput.value.replace(',', '.'));

    if (isNaN(nota) || nota < 0 || nota > 10) {
        notaMensagem.innerText = 'Nota invalida. Informe uma nota entre 0 e 10.';
        notaMensagem.classList.add('error');
    } else {
        notaMensagem.innerText = `Sua nota é: ${nota.toFixed(1)}`;
        notaMensagem.classList.remove('error');
    }
});
