function abrir_formulario_den() {
    document.getElementById("tela_info").classList.remove("active");
    document.getElementById("tela_formulario").classList.add("active");
    ir_etapa_den_1();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function fechar_formulario_den() {
    document.getElementById("tela_formulario").classList.remove("active");
    document.getElementById("tela_info").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function ir_etapa_den_2() {
    if (!validar_etapa_den_1()) return;

    document.getElementById("etapa_den_1").classList.remove("active");
    document.getElementById("etapa_den_2").classList.add("active");
    document.getElementById("passo_den_1").classList.remove("ativo");
    document.getElementById("passo_den_1").classList.add("concluido");
    document.getElementById("passo_den_linha").classList.add("ativa");
    document.getElementById("passo_den_2").classList.remove("pendente");
    document.getElementById("passo_den_2").classList.add("ativo");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function ir_etapa_den_1() {
    document.getElementById("etapa_den_2").classList.remove("active");
    document.getElementById("etapa_den_1").classList.add("active");
    document.getElementById("passo_den_2").classList.remove("ativo");
    document.getElementById("passo_den_2").classList.add("pendente");
    document.getElementById("passo_den_linha").classList.remove("ativa");
    document.getElementById("passo_den_1").classList.remove("concluido");
    document.getElementById("passo_den_1").classList.add("ativo");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function validar_etapa_den_1() {
    const obrigatorios = ["den_nome_denunciado", "den_endereco", "den_horario"];
    let ok = true;

    obrigatorios.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
            el.classList.add("erro_input");
            ok = false;
        } else {
            el.classList.remove("erro_input");
        }
    });

    const el_email = document.getElementById("den_email");
    if (el_email && el_email.value.trim()) {
        const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex_email.test(el_email.value.trim())) {
            el_email.classList.add("erro_input");
            ok = false;
        } else {
            el_email.classList.remove("erro_input");
        }
    }

    if (!ok) alert("Preencha todos os campos obrigatórios (*) antes de continuar.");
    return ok;
}

function validar_etapa_den_2() {
    let ok = true;
    const checkboxes = document.querySelectorAll("input[name='condicao']:checked");
    const grade = document.querySelector(".den_checkboxes_grade");
    if (checkboxes.length === 0) {
        grade.classList.add("erro_grade");
        ok = false;
    } else {
        grade.classList.remove("erro_grade");
    }

    const el_desc = document.getElementById("den_descricao_animal");
    if (!el_desc.value.trim()) {
        el_desc.classList.add("erro_input");
        ok = false;
    } else {
        el_desc.classList.remove("erro_input");
    }

    if (!ok) alert("Selecione ao menos uma condição e preencha a descrição do animal.");
    return ok;
}

function enviar_denuncia() {
    if (!validar_etapa_den_2()) return;

    document.getElementById("den_overlay_sucesso").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fechar_modal_den() {
    document.getElementById("den_overlay_sucesso").classList.remove("ativo");
    document.body.style.overflow = "";

    fechar_formulario_den();
    limpar_formulario_den();
}

function limpar_formulario_den() {
    const ids = [
        "den_nome_denunciante", "den_cpf", "den_telefone", "den_email",
        "den_nome_denunciado",  "den_endereco", "den_horario",
        "den_outro_texto",      "den_descricao_animal"
    ];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ""; el.classList.remove("erro_input"); }
    });

    document.querySelectorAll("input[name='condicao']").forEach(cb => cb.checked = false);
    const grade = document.querySelector(".den_checkboxes_grade");
    if (grade) grade.classList.remove("erro_grade");
}

document.addEventListener("DOMContentLoaded", function () {

    const el_cpf = document.getElementById("den_cpf");
    if (el_cpf) {
        el_cpf.addEventListener("input", function (e) {
            let v = e.target.value.replace(/\D/g, "").slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = v;
        });
    }

    const el_tel = document.getElementById("den_telefone");
    if (el_tel) {
        el_tel.addEventListener("input", function (e) {
            let v = e.target.value.replace(/\D/g, "").slice(0, 11);
            if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
            else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
            e.target.value = v;
        });
    }

    [
        "den_nome_denunciante", "den_cpf", "den_telefone", "den_email",
        "den_nome_denunciado",  "den_endereco", "den_horario",
        "den_outro_texto",      "den_descricao_animal"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", function () {
                if (this.value.trim()) this.classList.remove("erro_input");
            });
        }
    });

    document.querySelectorAll("input[name='condicao']").forEach(cb => {
        cb.addEventListener("change", function () {
            const grade = document.querySelector(".den_checkboxes_grade");
            if (grade && document.querySelectorAll("input[name='condicao']:checked").length > 0) {
                grade.classList.remove("erro_grade");
            }
        });
    });

    document.getElementById("den_overlay_sucesso").addEventListener("click", function (e) {
        if (e.target === this) fechar_modal_den();
    });

    document.getElementById("tela_info").classList.add("active");
});