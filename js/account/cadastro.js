document.addEventListener("DOMContentLoaded", function () {

    popular_datas("cid_dia", "cid_mes", "cid_ano");
    popular_datas("emp_dia", "emp_mes", "emp_ano");

    carregar_bairros();
    mudarRequired();

    const check_cadunico = document.getElementById("check_cadunico");
    const caixa_cadunico = document.getElementById("caixa_cadunico");

    if (check_cadunico && caixa_cadunico) {

        check_cadunico.addEventListener("change", function () {

            if (this.checked) {
                caixa_cadunico.classList.add("mostrar");
            } else {
                caixa_cadunico.classList.remove("mostrar");
            }

        });

    }

    const formulario = document.getElementById("formulario_cadastro");
    const toastMensagem = document.getElementById("mensagem_sucesso");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const camposEndereco = [
            document.getElementById("cep_endereco"),
            document.getElementById("numero_endereco"),
            document.getElementById("logradouro_endereco"),
            document.getElementById("bairro_endereco")
        ];

        let formularioValido = true;

        camposEndereco.forEach(campo => {

            validarCampo(campo);

            if (
                campo.value === "" ||
                campo.value === null ||
                !campo.value.trim()
            ) {

                formularioValido = false;

            }

        });

        if (!formularioValido) return;

        toastMensagem.classList.add("mostrar_toast");

        setTimeout(() => {

            window.location.href = "/index.html";

        }, 2000);

    });

});

function mascara_cpf(input) {

    let value = input.value.replace(/\D/g, '');

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    input.value = value;

}

function mascara_cnpj(input) {

    let value = input.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    input.value = value;

}

function mascara_telefone(input) {

    let value = input.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    input.value = value;

}

function mascara_cep(input) {

    let value = input.value.replace(/\D/g, '');

    value = value.replace(/^(\d{5})(\d)/, '$1-$2');

    input.value = value;

}

function validarCampo(campo) {

    if (
        campo.value === "" ||
        campo.value === null ||
        !campo.value.trim()
    ) {

        campo.classList.add("erro_input");

    } else {

        campo.classList.remove("erro_input");

    }

}

function mudarRequired() {

    const isCidadao = document
        .getElementById("conteudo_cidadao")
        .classList.contains("active");

    const camposCidadao = document.querySelectorAll(
        "#conteudo_cidadao input, #conteudo_cidadao select"
    );

    const camposEmpresa = document.querySelectorAll(
        "#conteudo_ong input, #conteudo_ong select"
    );

    camposCidadao.forEach(campo => {

        campo.required = isCidadao;

        campo.addEventListener("input", () => {
            validarCampo(campo);
        });

        campo.addEventListener("change", () => {
            validarCampo(campo);
        });

    });

    camposEmpresa.forEach(campo => {

        campo.required = !isCidadao;

        campo.addEventListener("input", () => {
            validarCampo(campo);
        });

        campo.addEventListener("change", () => {
            validarCampo(campo);
        });

    });

}

function mudar_aba(tipo_cadastro) {

    const aba_cidadao = document.getElementById("aba_cidadao");
    const aba_ong = document.getElementById("aba_ong");

    const conteudo_cidadao = document.getElementById("conteudo_cidadao");
    const conteudo_ong = document.getElementById("conteudo_ong");

    const cidade_endereco = document.getElementById("cidade_endereco");

    document.getElementById("etapa_2").classList.remove("active");
    document.getElementById("etapa_1").classList.add("active");

    if (tipo_cadastro === "cidadao") {

        aba_cidadao.classList.add("active");
        conteudo_cidadao.classList.add("active");

        aba_ong.classList.remove("active");
        conteudo_ong.classList.remove("active");

        if (cidade_endereco) {

            cidade_endereco.value = "Serra";
            cidade_endereco.setAttribute("readonly", "readonly");

        }

    } else {

        aba_ong.classList.add("active");
        conteudo_ong.classList.add("active");

        aba_cidadao.classList.remove("active");
        conteudo_cidadao.classList.remove("active");

        if (cidade_endereco) {
            cidade_endereco.removeAttribute("readonly");
        }

    }

    mudarRequired();

}

function proxima_etapa() {

    const isCidadao = document
        .getElementById("conteudo_cidadao")
        .classList.contains("active");

    let campos = [];

    if (isCidadao) {

        campos = [
            document.getElementById("nome_cidadao"),
            document.getElementById("cpf_cidadao"),
            document.getElementById("telefone_cidadao"),
            document.getElementById("cid_dia"),
            document.getElementById("cid_mes"),
            document.getElementById("cid_ano"),
            document.getElementById("email_cidadao"),
            document.getElementById("senha_cidadao"),
            document.getElementById("confirme_senha_cidadao")
        ];

    } else {

        campos = [
            document.getElementById("razao_social"),
            document.getElementById("cnpj_empresa"),
            document.getElementById("telefone_empresa"),
            document.getElementById("emp_dia"),
            document.getElementById("emp_mes"),
            document.getElementById("emp_ano"),
            document.getElementById("email_empresa"),
            document.getElementById("senha_empresa"),
            document.getElementById("confirme_senha_empresa")
        ];

    }

    let formularioValido = true;

    campos.forEach(campo => {

        validarCampo(campo);

        if (
            campo.value === "" ||
            campo.value === null ||
            !campo.value.trim()
        ) {

            formularioValido = false;

        }

    });

    if (isCidadao) {

        const senha = document.getElementById("senha_cidadao").value;
        const confirmar = document.getElementById("confirme_senha_cidadao").value;

        if (senha !== confirmar) {

            alert("As senhas não coincidem.");
            return;

        }

    } else {

        const senha = document.getElementById("senha_empresa").value;
        const confirmar = document.getElementById("confirme_senha_empresa").value;

        if (senha !== confirmar) {

            alert("As senhas não coincidem.");
            return;

        }

    }

    if (!formularioValido) return;

    const titulo = document.getElementById("titulo_etapa_endereco");

    titulo.innerText = isCidadao
        ? "Endereço Residencial"
        : "Endereço Comercial";

    document.getElementById("etapa_1").classList.remove("active");
    document.getElementById("etapa_2").classList.add("active");

    window.scrollTo(0, 0);

}

function etapa_anterior() {

    document.getElementById("etapa_2").classList.remove("active");
    document.getElementById("etapa_1").classList.add("active");

    window.scrollTo(0, 0);

}

function popular_datas(id_dia, id_mes, id_ano) {

    const select_dia = document.getElementById(id_dia);
    const select_mes = document.getElementById(id_mes);
    const select_ano = document.getElementById(id_ano);

    if (!select_dia || !select_mes || !select_ano) return;

    for (let d = 1; d <= 31; d++) {

        let opt = document.createElement("option");

        opt.value = d < 10 ? "0" + d : d;
        opt.textContent = d < 10 ? "0" + d : d;

        select_dia.appendChild(opt);

    }

    for (let m = 1; m <= 12; m++) {

        let opt = document.createElement("option");

        opt.value = m < 10 ? "0" + m : m;
        opt.textContent = m < 10 ? "0" + m : m;

        select_mes.appendChild(opt);

    }

    const ano_atual = new Date().getFullYear();

    for (let a = ano_atual; a >= ano_atual - 100; a--) {

        let opt = document.createElement("option");

        opt.value = a;
        opt.textContent = a;

        select_ano.appendChild(opt);

    }

}

const bairros_serra = [
    "Alterosas",
    "André Carloni",
    "Areia Branca",
    "Bairro das Laranjeiras",
    "Bairro de Fátima",
    "Balneário de Carapebus",
    "Barcelona",
    "Barro Branco",
    "Bela Vista",
    "Belvedere",
    "Bicanga",
    "Boa Vista I",
    "Boa Vista II",
    "Caçaroca",
    "Campinho da Serra I",
    "Campinho da Serra II",
    "Carapina I",
    "Cascata",
    "Central Carapina",
    "Centro da Serra",
    "Cidade Continental",
    "Cidade Nova da Serra",
    "Colina de Laranjeiras",
    "Costa Dourada",
    "Diamantina",
    "Divinópolis",
    "Eldorado",
    "Feu Rosa",
    "Jacaraípe Centro",
    "Jardim Atlântico",
    "Jardim Carapina",
    "Jardim Limoeiro",
    "Jardim Primavera",
    "Laranjeiras Velha",
    "Manguinhos",
    "Morada de Laranjeiras",
    "Nova Almeida Centro",
    "Nova Carapina I",
    "Nova Carapina II",
    "Novo Horizonte",
    "Novo Porto Canoa",
    "Parque Residencial Laranjeiras",
    "Pitanga",
    "Planalto Serrano",
    "Porto Canoa",
    "Praia da Baleia",
    "Praia de Carapebus",
    "Residencial Jacaraípe",
    "Rosário de Fátima",
    "Serra Centro",
    "Serra Dourada I",
    "Serra Dourada II",
    "Serra Dourada III",
    "Taquara I",
    "Taquara II",
    "Valparaíso",
    "Vista da Serra I",
    "Vista da Serra II"
];

function carregar_bairros() {

    const select_bairro = document.getElementById("bairro_endereco");

    if (!select_bairro) return;

    bairros_serra.forEach((bairro) => {

        const option = document.createElement("option");

        option.value = bairro;
        option.textContent = bairro;

        select_bairro.appendChild(option);

    });

}