/* =============================================
   ARCA - Suporte / Fale Conosco
   suporte.js
   ============================================= */

/* ---------- Envio do relatório ---------- */
function enviarRelatorio() {
    const nome     = document.getElementById('nome').value.trim();
    const email    = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto  = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
        mostrarAlerta('Por favor, preencha os campos obrigatórios: Nome, E-mail, Telefone, Tipo de Assunto e Mensagem.');
        return;
    }

    if (!emailValido(email)) {
        mostrarAlerta('Por favor, informe um e-mail válido.');
        return;
    }

    document.getElementById('overlay-sucesso').classList.remove('d-none');
    limparFormulario();
}

function fecharOverlay() {
    document.getElementById('overlay-sucesso').classList.add('d-none');
}
