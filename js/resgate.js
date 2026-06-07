/* =====================================================
   resgate.js — Página "Solicitar Resgate" | Projeto ARCA
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* --------------------------------------------------
       1. Marca "Solicitar resgate" como ativo no navbar
    -------------------------------------------------- */
    function marcarNavAtivo() {
        document.querySelectorAll('#navbar a').forEach(function (link) {
            if (link.textContent.trim().toLowerCase().includes('solicitar resgate')) {
                link.classList.add('active');
            }
        });
    }

    if (document.querySelector('#navbar a')) {
        marcarNavAtivo();
    } else {
        var navEl = document.getElementById('navbar');
        if (navEl) {
            new MutationObserver(function (_, obs) {
                if (document.querySelector('#navbar a')) {
                    marcarNavAtivo();
                    obs.disconnect();
                }
            }).observe(navEl, { childList: true, subtree: true });
        }
    }

    /* --------------------------------------------------
       2. Máscara de telefone: (XX) XXXXX-XXXX
    -------------------------------------------------- */
    var telInput = document.getElementById('telefone');
    if (telInput) {
        telInput.addEventListener('input', function () {
            var v = this.value.replace(/\D/g, '').substring(0, 11);
            if (v.length <= 10) {
                v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            this.value = v;
            // Valida ao digitar
            validarCampo(telInput, v.replace(/\D/g, '').length >= 10);
        });
    }

    /* --------------------------------------------------
       3. Validação em tempo real de cada campo
    -------------------------------------------------- */
    function validarCampo(campo, valido) {
        campo.classList.toggle('is-invalid', !valido);
        campo.classList.toggle('is-valid', valido);
    }

    function valoresValidados() {
        var nome     = document.getElementById('nomeCompleto');
        var tel      = document.getElementById('telefone');
        var email    = document.getElementById('email');
        var local    = document.getElementById('localEncontrado');
        var tipo     = document.getElementById('tipoAnimal');
        var condicao = document.getElementById('condicaoAnimal');
        var desc     = document.getElementById('descricao');

        var nomeOk     = nome.value.trim().length >= 3;
        var telOk      = tel.value.replace(/\D/g, '').length >= 10;
        var emailOk    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        var localOk    = local.value.trim().length >= 5;
        var tipoOk     = tipo.value !== '';
        var condicaoOk = condicao.value !== '';
        var descOk     = desc.value.trim().length >= 20;

        validarCampo(nome,     nomeOk);
        validarCampo(tel,      telOk);
        validarCampo(email,    emailOk);
        validarCampo(local,    localOk);
        validarCampo(tipo,     tipoOk);
        validarCampo(condicao, condicaoOk);
        validarCampo(desc,     descOk);

        return nomeOk && telOk && emailOk && localOk && tipoOk && condicaoOk && descOk;
    }

    // Validação ao sair do campo (blur)
    ['nomeCompleto', 'email', 'localEncontrado', 'descricao'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('blur', function () {
            var ok;
            if (id === 'nomeCompleto') ok = el.value.trim().length >= 3;
            else if (id === 'email')   ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
            else if (id === 'localEncontrado') ok = el.value.trim().length >= 5;
            else if (id === 'descricao')       ok = el.value.trim().length >= 20;
            validarCampo(el, ok);
        });
        el.addEventListener('input', function () {
            if (el.classList.contains('is-invalid')) {
                var ok;
                if (id === 'nomeCompleto') ok = el.value.trim().length >= 3;
                else if (id === 'email')   ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
                else if (id === 'localEncontrado') ok = el.value.trim().length >= 5;
                else if (id === 'descricao')       ok = el.value.trim().length >= 20;
                validarCampo(el, ok);
            }
        });
    });

    ['tipoAnimal', 'condicaoAnimal'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', function () {
                validarCampo(el, el.value !== '');
            });
        }
    });

    /* --------------------------------------------------
       4. Envio do formulário
    -------------------------------------------------- */
    var formResgate = document.getElementById('formResgate');
    if (formResgate) {
        formResgate.addEventListener('submit', function (e) {
            e.preventDefault();

            var tudo_ok = valoresValidados();

            if (!tudo_ok) {
                mostrarToast(
                    'fa-exclamation-circle',
                    'Preencha todos os campos corretamente antes de enviar.',
                    true
                );
                // Rola até o primeiro inválido
                var primeiro = formResgate.querySelector('.is-invalid');
                if (primeiro) {
                    primeiro.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    primeiro.focus();
                }
                return;
            }

            var dados = {
                nome:      document.getElementById('nomeCompleto').value.trim(),
                telefone:  document.getElementById('telefone').value.trim(),
                email:     document.getElementById('email').value.trim(),
                local:     document.getElementById('localEncontrado').value.trim(),
                tipo:      document.getElementById('tipoAnimal').value,
                condicao:  document.getElementById('condicaoAnimal').value,
                descricao: document.getElementById('descricao').value.trim(),
            };

            console.log('Relatório de resgate:', dados);

            // ↓ Substitua pelo seu fetch/axios para a API:
            // fetch('/api/resgate', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(dados) })

            // Mostra o overlay de sucesso
            document.getElementById('overlay-sucesso').classList.remove('d-none');

            formResgate.reset();
            formResgate.querySelectorAll('.is-valid, .is-invalid').forEach(function (el) {
                el.classList.remove('is-valid', 'is-invalid');
            });
        });
    }

    /* --------------------------------------------------
       5. Botão de emergência
    -------------------------------------------------- */
    var btnEmergencia = document.getElementById('btnEmergencia');
    if (btnEmergencia) {
        btnEmergencia.addEventListener('click', function () {
            var endereco = document.getElementById('enderecoEmergencia').value.trim();
            var input    = document.getElementById('enderecoEmergencia');

            if (!endereco) {
                input.classList.add('is-invalid');
                input.focus();
                return;
            }
            input.classList.remove('is-invalid');

            console.log('Emergência no endereço:', endereco);

            // ↓ Substitua pelo seu fetch para buscar ONG mais próxima:
            // fetch('/api/emergencia?local=' + encodeURIComponent(endereco))

            var btn = this;
            btn.disabled = true;
            btn.textContent = 'Localizando...';
            setTimeout(function () {
                btn.disabled = false;
                btn.textContent = 'Enviar';
                alert('ONG mais próxima de "' + endereco + '" foi notificada!\nAguarde o contato.');
            }, 1500);
        });
    }


    /* --------------------------------------------------
       7. Animação de entrada no card do formulário
    -------------------------------------------------- */
    var formCard = document.querySelector('.resgate-form-card');
    if (formCard && 'IntersectionObserver' in window) {
        formCard.style.opacity = '0';
        formCard.style.transform = 'translateY(20px)';
        formCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    formCard.style.opacity = '1';
                    formCard.style.transform = 'translateY(0)';
                    obs.disconnect();
                }
            });
        }, { threshold: 0.1 }).observe(formCard);
    }

});

function fecharOverlay() {
    document.getElementById('overlay-sucesso').classList.add('d-none');
}