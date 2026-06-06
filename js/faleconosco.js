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

/* ---------- Modal de Ajuda ---------- */
function toggleAjuda() {
    document.getElementById('modalAjuda').classList.toggle('d-none');
}

function ajudaOpcao(opcao) {
    toggleAjuda();
    switch (opcao) {
        case 'adotar':    window.location.href = '/adocao.html';   break;
        case 'cadastrar': window.location.href = '/cadastro.html'; break;
        case 'suporte':   /* já está na página, só fecha o modal */ break;
    }
}

/* ---------- Utilitários ---------- */
function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarAlerta(msg) {
    const antigo = document.getElementById('arca-alerta');
    if (antigo) antigo.remove();

    const el = document.createElement('div');
    el.id = 'arca-alerta';
    el.style.cssText = `
        position:fixed;top:1.5rem;left:50%;transform:translateX(-50%);
        background:#fff0f0;color:#c0392b;border:1px solid #f5c6cb;
        border-radius:10px;padding:.85rem 1.5rem;font-size:.9rem;font-weight:600;
        box-shadow:0 4px 16px rgba(0,0,0,.12);z-index:10000;
        animation:slideUp .25s ease;max-width:90vw;text-align:center;
    `;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}

function limparFormulario() {
    ['nome','telefone','email','assunto','mensagem'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

/* ---------- Fechar ao clicar fora / ESC ---------- */
document.addEventListener('click', function(e) {
    const modal    = document.getElementById('modalAjuda');
    const btnAjuda = document.getElementById('btnAjuda');
    if (!modal || modal.classList.contains('d-none')) return;
    if (!modal.contains(e.target) && !btnAjuda.contains(e.target))
        modal.classList.add('d-none');
});

document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    document.getElementById('overlay-sucesso')?.classList.add('d-none');
    document.getElementById('modalAjuda')?.classList.add('d-none');
});