document.addEventListener("DOMContentLoaded", function () {
    
    popular_datas("cid_dia", "cid_mes", "cid_ano");
    popular_datas("emp_dia", "emp_mes", "emp_ano");
    
    carregar_bairros();

    // ── DETECTA ?aba=empresa NA URL E ABRE A ABA CERTA ──
    const params = new URLSearchParams(window.location.search);
    const aba = params.get('aba');
    if (aba === 'empresa') mudar_aba('empresa');

    const check_cadunico = document.getElementById("check_cadunico");
    const caixa_cadunico = document.getElementById("caixa_cadunico");
    
    if (check_cadunico && caixa_cadunico) {
        check_cadunico.addEventListener("change", function () {
            if (this.checked) {
                caixa_cadunico.classList.add("mostrar");
            } 
            else {
                caixa_cadunico.classList.remove("mostrar");
            }
        });
    }
});

// MÁSCARA DO CPF
function mascara_cpf(input) { 
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = value;
}

// MÁSCARA DO CNPJ
function mascara_cnpj(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    input.value = value;
}

// MÁSCARA DO TELEFONE
function mascara_telefone(input) {
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); 
    value = value.replace(/(\d)(\d{4})$/, '$1-$2'); 
    input.value = value;
}

// MÁSCARA DO CEP
function mascara_cep(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    input.value = value;
}

// FUNÇÃO PARA ALTERNAR ENTRE ABA CIDADÃO E ONG
function mudar_aba(tipo_cadastro) {
    const aba_cidadao = document.getElementById("aba_cidadao");
    const aba_ong = document.getElementById("aba_ong");
    const conteudo_cidadao = document.getElementById("conteudo_cidadao");
    const conteudo_ong = document.getElementById("conteudo_ong");
    const cidade_endereco = document.getElementById("cidade_endereco");

    // Força voltar para a etapa 1 caso mude de aba no meio do caminho
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
    } 
    else {
        aba_ong.classList.add("active");
        conteudo_ong.classList.add("active");
        aba_cidadao.classList.remove("active");
        conteudo_cidadao.classList.remove("active");
        
        if (cidade_endereco) {
            cidade_endereco.removeAttribute("readonly");
        }
    }
}

function proxima_etapa() {
    const isCidadao = document.getElementById("conteudo_cidadao").classList.contains("active");
    const titulo = document.getElementById("titulo_etapa_endereco");
    titulo.innerText = isCidadao ? "Endereço Residencial" : "Endereço Comercial";

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

// LISTA COMPLETA DOS BAIRROS DA SERRA (EU ACHO)
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
    "Chácara Parreiral",
    "Cidade Continental",
    "Cidade Nova da Serra",
    "Colina da Serra",
    "Colina de Laranjeiras",
    "Costa Bela",
    "Costa Dourada",
    "Diamantina",
    "Divinópolis",
    "Eldorado",
    "Enseada de Jacaraípe",
    "Estância Monazítica",
    "Eurico Sales",
    "Feu Rosa",
    "Guaraciaba",
    "Hélio Ferraz",
    "Itaiobaia",
    "Jacaraípe Centro",
    "Jardim Atlântico",
    "Jardim Bela Vista",
    "Jardim Carapina",
    "Jardim da Serra",
    "Jardim Guanabara",
    "Jardim Limoeiro",
    "Jardim Primavera",
    "Jardim Tropical",
    "José de Anchieta",
    "José de Anchieta II",
    "José de Anchieta III",
    "Lagoa de Jacaraípe",
    "Laranjeiras Velha",
    "Magistrado",
    "Manguinhos",
    "Manoel Plaza",
    "Maria Níobe",
    "Mata da Serra",
    "Miramar",
    "Morada de Laranjeiras",
    "Nossa Senhora da Conceição",
    "Nova Almeida Centro",
    "Nova Carapina I",
    "Nova Carapina II",
    "Novo Horizonte",
    "Novo Porto Canoa",
    "Oceania",
    "Palmeiras",
    "Parque Beira Rio",
    "Parque das Gaivotas",
    "Parque das Orquídeas",
    "Parque Jacaraípe",
    "Parque Residencial Laranjeiras",
    "Parque Residencial Mestre Álvaro",
    "Parque Residencial Nova Almeida",
    "Parque Residencial Tubarão",
    "Parque Santa Fé",
    "Pitanga",
    "Planalto Serrano",
    "Planície da Serra",
    "Poço dos Padres",
    "Porto Canoa",
    "Porto Dourado",
    "Praia da Baleia",
    "Praia de Capuba",
    "Praia de Carapebus",
    "Praiamar",
    "Putiri",
    "Residencial Centro da Serra",
    "Residencial Jacaraípe",
    "Residencial Mar Bella",
    "Residencial Vista do Mestre",
    "Rosário de Fátima",
    "Santa Luzia",
    "São Diogo I",
    "São Diogo II",
    "São Domingos",
    "São Francisco",
    "São Geraldo",
    "São João Batista",
    "São Judas Tadeu",
    "São Lourenço",
    "São Marcos I",
    "São Marcos II",
    "São Patrício",
    "São Pedro",
    "Serra Centro",
    "Serra Dourada I",
    "Serra Dourada II",
    "Serra Dourada III",
    "Serramar",
    "Taquara I",
    "Taquara II",
    "Tubarão",
    "Valparaíso",
    "Vila Nova de Colares",
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