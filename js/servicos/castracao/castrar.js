function abrir_formulario() {
    document.getElementById("tela_info").classList.remove("active");
    document.getElementById("tela_formulario").classList.add("active");
    ir_etapa_1_cast();          // Garante que a etapa 1 está ativa
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function fechar_formulario() {
    document.getElementById("tela_formulario").classList.remove("active");
    document.getElementById("tela_info").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function ir_etapa_2_cast() {
    if (!validar_etapa_1_cast()) return;

    document.getElementById("etapa_1").classList.remove("active");
    document.getElementById("etapa_2").classList.add("active");
    document.getElementById("passo_cast_1").classList.remove("ativo");
    document.getElementById("passo_cast_1").classList.add("concluido");
    document.getElementById("passo_linha_cast").classList.add("ativa");
    document.getElementById("passo_cast_2").classList.remove("pendente");
    document.getElementById("passo_cast_2").classList.add("ativo");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function ir_etapa_1_cast() {
    document.getElementById("etapa_2").classList.remove("active");
    document.getElementById("etapa_1").classList.add("active");

    document.getElementById("passo_cast_2").classList.remove("ativo");
    document.getElementById("passo_cast_2").classList.add("pendente");
    document.getElementById("passo_linha_cast").classList.remove("ativa");
    document.getElementById("passo_cast_1").classList.remove("concluido");
    document.getElementById("passo_cast_1").classList.add("ativo");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function validar_etapa_1_cast() {
    const campos_texto = ["cast_nome", "cast_email"];
    const campos_data  = ["cast_dd", "cast_mm", "cast_yyyy"];
    let ok = true;

    campos_texto.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
            el.classList.add("erro_input");
            ok = false;
        } else {
            el.classList.remove("erro_input");
        }
    });

    campos_data.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value) {
            el.classList.add("erro_input");
            ok = false;
        } else {
            el.classList.remove("erro_input");
        }
    });

    const el_email = document.getElementById("cast_email");
    if (el_email && el_email.value.trim()) {
        const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex_email.test(el_email.value.trim())) {
            el_email.classList.add("erro_input");
            ok = false;
        }
    }

    if (!ok) alert("Preencha todos os campos corretamente antes de continuar.");
    return ok;
}

document.addEventListener("DOMContentLoaded", function () {
    popular_datas_cast("cast_dd", "cast_mm", "cast_yyyy");

    ["cast_nome", "cast_email"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", function () {
                if (this.value.trim()) this.classList.remove("erro_input");
            });
        }
    });
    ["cast_dd", "cast_mm", "cast_yyyy"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("change", function () {
                if (this.value) this.classList.remove("erro_input");
            });
        }
    });

    document.getElementById("overlay_confirmar").addEventListener("click", function (e) {
        if (e.target === this) fechar_modal_confirmar();
    });
    document.getElementById("overlay_sucesso").addEventListener("click", function (e) {
        if (e.target === this) fechar_modal_sucesso();
    });

    document.getElementById("tela_info").classList.add("active");
});

function popular_datas_cast(id_dia, id_mes, id_ano) {
    const select_dia = document.getElementById(id_dia);
    const select_mes = document.getElementById(id_mes);
    const select_ano = document.getElementById(id_ano);
    if (!select_dia || !select_mes || !select_ano) return;

    for (let d = 1; d <= 31; d++) {
        const opt = document.createElement("option");
        opt.value = d < 10 ? "0" + d : d;
        opt.textContent = d < 10 ? "0" + d : d;
        select_dia.appendChild(opt);
    }
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement("option");
        opt.value = m < 10 ? "0" + m : m;
        opt.textContent = m < 10 ? "0" + m : m;
        select_mes.appendChild(opt);
    }
    const ano_atual = new Date().getFullYear();
    for (let a = ano_atual; a >= ano_atual - 100; a--) {
        const opt = document.createElement("option");
        opt.value = a;
        opt.textContent = a;
        select_ano.appendChild(opt);
    }
}

function drag_over(event, dropzone) {
    event.preventDefault();
    dropzone.classList.add("dragover");
}

function drag_leave(dropzone) {
    dropzone.classList.remove("dragover");
}

/**
 * Trata o drop de arquivo na dropzone.
 * @param {DragEvent} event      - Evento nativo de drop
 * @param {string}    input_id   - ID do <input type="file">
 * @param {string}    nome_id    - ID do <span> que exibe o nome do arquivo
 * @param {HTMLElement} dropzone - Elemento da dropzone
 */
function drag_drop(event, input_id, nome_id, dropzone) {
    event.preventDefault();
    dropzone.classList.remove("dragover");

    const arquivo = event.dataTransfer.files[0];
    if (!arquivo) return;

    const dt = new DataTransfer();
    dt.items.add(arquivo);
    document.getElementById(input_id).files = dt.files;

    exibir_nome_arquivo(nome_id, dropzone, arquivo.name);
}

/**
 * Chamado pelo evento "change" do input file.
 * @param {HTMLInputElement} input      - O input file
 * @param {string}           nome_id   - ID do <span> de nome
 * @param {string}           dropzone_id - ID da dropzone
 */
function arquivo_selecionado(input, nome_id, dropzone_id){
    if (!input.files[0]) return;
    const dropzone = document.getElementById(dropzone_id);
    exibir_nome_arquivo(nome_id, dropzone, input.files[0].name);
}

/**
 * Exibe o nome do arquivo na dropzone e aplica estado visual.
 * @param {string}      nome_id  - ID do <span> de nome
 * @param {HTMLElement} dropzone - Elemento da dropzone
 * @param {string}      nome     - Nome do arquivo
 */
function exibir_nome_arquivo(nome_id, dropzone, nome){
    const span_nome = document.getElementById(nome_id);
    if (!span_nome) return;

    span_nome.textContent = nome;
    span_nome.style.display = "block";
    dropzone.classList.add("tem_arquivo");

    dropzone.querySelectorAll(".upload_icone, .upload_texto, .upload_ou, .upload_procure")
        .forEach(el => el.style.display = "none");
}

function abrir_modal_confirmar() {
    document.getElementById("overlay_confirmar").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fechar_modal_confirmar() {
    document.getElementById("overlay_confirmar").classList.remove("ativo");
    document.body.style.overflow = "";
}

function confirmar_envio() {
    fechar_modal_confirmar();

    setTimeout(function () {
        document.getElementById("overlay_sucesso").classList.add("ativo");
        document.body.style.overflow = "hidden";
    }, 200);
}

function fechar_modal_sucesso() {
    document.getElementById("overlay_sucesso").classList.remove("ativo");
    document.body.style.overflow = "";

    fechar_formulario();
    limpar_formulario();
}

/** Reseta todos os campos e dropzones para o estado inicial. */
function limpar_formulario() {
    ["cast_nome", "cast_email"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.value = "";
            el.classList.remove("erro_input");
        }
    });

    ["cast_dd", "cast_mm", "cast_yyyy"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.selectedIndex = 0;
            el.classList.remove("erro_input");
        }
    });

    const uploads = [
        { file: "file_doc",       nome: "nome_doc",       dropzone: "dropzone_doc" },
        { file: "file_animal",    nome: "nome_animal",    dropzone: "dropzone_animal" },
        { file: "file_residencia",nome: "nome_residencia",dropzone: "dropzone_residencia" },
        { file: "file_renda",     nome: "nome_renda",     dropzone: "dropzone_renda" }
    ];

    uploads.forEach(u => {
        const input    = document.getElementById(u.file);
        const span     = document.getElementById(u.nome);
        const dropzone = document.getElementById(u.dropzone);

        if (input)    input.value = "";
        if (span)     { span.textContent = ""; span.style.display = "none"; }
        if (dropzone) {
            dropzone.classList.remove("tem_arquivo", "dragover");
            dropzone.querySelectorAll(".upload_icone, .upload_texto, .upload_ou, .upload_procure")
                .forEach(el => el.style.display = "");
        }
    });
}