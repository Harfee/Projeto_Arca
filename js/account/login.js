function mudar_aba(tipo) {
    const aba_cidadao  = document.getElementById("aba_cidadao");
    const aba_ong      = document.getElementById("aba_ong");
    const form_cidadao = document.getElementById("form_cidadao");
    const form_empresa = document.getElementById("form_empresa");

    if (tipo === "cidadao") {
        aba_cidadao.classList.add("active");
        aba_ong.classList.remove("active");
        form_cidadao.classList.add("active");
        form_empresa.classList.remove("active");
    } else {
        aba_ong.classList.add("active");
        aba_cidadao.classList.remove("active");
        form_empresa.classList.add("active");
        form_cidadao.classList.remove("active");
    }
}

function validarCampo(campo) {
    if (!campo.value || !campo.value.trim()) {
        campo.classList.add("erro_input");
    } else {
        campo.classList.remove("erro_input");
    }
}

function alternarSenha(inputId, btn) {
    const input = document.getElementById(inputId);
    const icone = btn.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
}

function fazerLogin(tipo) {
    let camposValidos = true;

    let campos = [];

    if (tipo === "cidadao") {
        campos = [
            document.getElementById("login_cpf_email"),
            document.getElementById("login_senha")
        ];
    } else {
        campos = [
            document.getElementById("login_cnpj_email"),
            document.getElementById("login_senha_empresa")
        ];
    }

    campos.forEach(campo => {
        validarCampo(campo);
        if (!campo.value || !campo.value.trim()) {
            camposValidos = false;
        }
    });

    if (!camposValidos) return;
}