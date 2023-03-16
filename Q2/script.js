const usuarioInput = document.getElementById('usuario-input');
const senhaInput = document.getElementById('senha-input');
const submitButton = document.getElementById('submit-button');
const mensagem = document.getElementById('mensagem');

submitButton.addEventListener('click', function() {
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    if (usuario.trim() === '' || senha.trim() === '') {
        mensagem.innerText = 'Informe usuário e senha.';
    } else if (usuario === senha) {
        mensagem.innerText = 'A senha não pode ser igual ao nome do usuário.';
    } else {
        alert('Acesso concedido.');
        mensagem.innerText = '';
        usuarioInput.value = '';
        senhaInput.value = '';
    }
});
