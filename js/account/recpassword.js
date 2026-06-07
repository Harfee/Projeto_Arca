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

function mascara_cpf(valor) {
    let v = valor.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

function mascara_cnpj(valor) {
    let v = valor.replace(/\D/g, "").slice(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}

function aplicar_mascara(input, tipo) {
    const val = input.value;
    const apenasNumeros = val.replace(/\D/g, "");
    const temLetraOuArroba = /[a-zA-Z@]/.test(val);

    if (temLetraOuArroba) {
        const possuiMascara = /[.\-/]/.test(val);
        if (possuiMascara) {
            input.value = apenasNumeros;
        }
        return;
    }

    if (apenasNumeros.length === 0) return;

    if (tipo === "cidadao") {
        input.value = mascara_cpf(val);
    } else {
        input.value = mascara_cnpj(val);
    }
}

function avancar(tipo) {
    let campo;

    if (tipo === "cidadao") {
        campo = document.getElementById("cid_cpf_email");
    } else {
        campo = document.getElementById("emp_cnpj_email");
    }

    validarCampo(campo);

    if (!campo.value || !campo.value.trim()) return;

    if (tipo === "cidadao") {
        document.getElementById("cid_etapa_1").classList.remove("active");
        document.getElementById("cid_etapa_2").classList.add("active");
    } else {
        document.getElementById("emp_etapa_1").classList.remove("active");
        document.getElementById("emp_etapa_2").classList.add("active");
    }
}

function reenviar(inputId, idEtapa1, idEtapa2) {
    document.getElementById(inputId).value = "";
    document.getElementById(idEtapa2).classList.remove("active");
    document.getElementById(idEtapa1).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const cid = document.getElementById("cid_cpf_email");
    const emp = document.getElementById("emp_cnpj_email");

    if (cid) {
        cid.addEventListener("input", function () {
            aplicar_mascara(this, "cidadao");
            validarCampo(this);
        });
    }

    if (emp) {
        emp.addEventListener("input", function () {
            aplicar_mascara(this, "empresa");
            validarCampo(this);
        });
    }
});