const currentPage = document.body.dataset.page;

// TEXTOS GLOBAIS
const projeto_arca = 'Projeto Arca';
const programa_arca = 'Programa Arca';

// CARDS
const card_castrados = '+2100';
const card_adoção = '+144';
const card_atendimento = '+340';

// RODAPÉ
const local_prefeitura = 'https://maps.app.goo.gl/WcnqMqxQRmW5wk4r5';
const instagram_link = 'https://www.instagram.com/prefeituraserra/';
const footer_tel = 'tel:+552732912005';
const site_prefeitura = 'https://www.serra.es.gov.br';


// ======================================
// NAVBAR
// ======================================

const navbar = `
<nav class="arca-nav" id="arca-nav">

  <div class="arca-nav__container">

    <a class="arca-nav__logo" href="/index.html" id="navbar_arca">
      <img src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca" class="arca_logo">
    </a>

    <ul class="arca-nav__links">

      <li>
        <a class="arca-nav__link ${currentPage === 'home_page' ? 'arca-nav__link--ativo' : ''}"
           href="/index.html">
           Início
        </a>
      </li>

      <li>
        <a class="arca-nav__link ${currentPage === 'quem_somos' ? 'arca-nav__link--ativo' : ''}"
           href="/html/navbar/quem_somos.html">
           Quem somos
        </a>
      </li>

      <li class="arca-nav__dropdown-item">
        <button class="arca-nav__link arca-nav__dropdown-btn" data-dropdown="servicos">
          Serviços
          <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-servicos"></i>
        </button>

        <ul class="arca-nav__dropdown" id="dropdown-servicos">
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/sobre.html">Informações sobre</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/adocao.html">Adoção</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/castrar.html">Agendamento de castração</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/denuncias.html">Criar denúncias</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/ongs.html">ONG's de proteção animal</a></li>
        </ul>
      </li>

      <li>
        <a class="arca-nav__link ${currentPage === 'seja_parceiro' ? 'arca-nav__link--ativo' : ''}"
           href="/html/navbar/seja_parceiro.html">
           Seja nosso parceiro
        </a>
      </li>

      <li class="arca-nav__dropdown-item">
        <button class="arca-nav__link arca-nav__dropdown-btn" data-dropdown="suporte">
          Suporte
          <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-suporte"></i>
        </button>

        <ul class="arca-nav__dropdown" id="dropdown-suporte">
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/suporte/faleconosco.html">Fale conosco</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/suporte/perguntas_frequentes.html">Perguntas frequentes</a></li>
        </ul>
      </li>

    </ul>

    <div class="arca-nav__botoes arca-nav__botoes--desktop">
      <a class="arca-nav__btn arca-nav__btn--entrar" href="/html/account/login.html">
        Entrar
      </a>

      <a class="arca-nav__btn arca-nav__btn--cadastrar" href="/html/account/cadastro.html">
        Cadastrar
      </a>
    </div>

    <button class="arca-nav__hamburguer" id="arca-hamburguer">
      <span class="arca-nav__hamburguer-linha"></span>
      <span class="arca-nav__hamburguer-linha"></span>
      <span class="arca-nav__hamburguer-linha"></span>
    </button>

  </div>

  <div class="arca-nav__mobile" id="arca-mobile">

    <ul class="arca-nav__mobile-links">

      <li>
        <a class="arca-nav__mobile-link ${currentPage === 'home_page' ? 'arca-nav__mobile-link--ativo' : ''}"
           href="/index.html">
           Início
        </a>
      </li>

      <li>
        <a class="arca-nav__mobile-link ${currentPage === 'quem_somos' ? 'arca-nav__mobile-link--ativo' : ''}"
           href="/html/navbar/quem_somos.html">
           Quem somos
        </a>
      </li>

      <li>
        <button class="arca-nav__mobile-link arca-nav__mobile-dropdown-btn"
                data-mobile-dropdown="mob-servicos">
          Serviços
          <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-mob-servicos"></i>
        </button>

        <ul class="arca-nav__mobile-submenu" id="mob-servicos">
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/sobre.html">Informações sobre</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/adocao.html">Adoção</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/castrar.html">Agendamento de castração</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/denuncias.html">Criar denúncias</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/ongs.html">ONG's de proteção animal</a></li>
        </ul>
      </li>

      <li>
        <a class="arca-nav__mobile-link ${currentPage === 'seja_parceiro' ? 'arca-nav__mobile-link--ativo' : ''}"
           href="/html/navbar/seja_parceiro.html">
           Seja nosso parceiro
        </a>
      </li>

      <li>
        <button class="arca-nav__mobile-link arca-nav__mobile-dropdown-btn"
                data-mobile-dropdown="mob-suporte">
          Suporte
          <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-mob-suporte"></i>
        </button>

        <ul class="arca-nav__mobile-submenu" id="mob-suporte">
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/suporte/faleconosco.html">Fale conosco</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/suporte/perguntas_frequentes.html">Perguntas frequentes</a></li>
        </ul>
      </li>

    </ul>

    <div class="arca-nav__botoes arca-nav__botoes--mobile">
      <a class="arca-nav__btn arca-nav__btn--entrar" href="/html/account/login.html">Entrar</a>
      <a class="arca-nav__btn arca-nav__btn--cadastrar" href="/html/account/cadastro.html">Cadastrar</a>
    </div>

  </div>

</nav>
`;


// ======================================
// FOOTER
// ======================================

const footer = `
<div class="footer_arca">
  <div class="container">

    <div class="footer_img">
      <a href="#navbar_arca">
        <img class="footer_img-arca" src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca">
      </a>
    </div>

    <div class="footer_links">
      <h5>Navegação</h5>

      <div class="footer_nav">

        <ul>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/html/navbar/quem_somos.html">Quem somos</a></li>
          <li><a href="/html/navbar/servicos/adocao.html">Adoção</a></li>
          <li><a href="/html/navbar/servicos/castrar.html">Agendamento de castração</a></li>
          <li><a href="/html/navbar/servicos/ongs.html">ONG's de proteção animal</a></li>
        </ul>

        <ul>
          <li><a href="/html/navbar/servicos/denuncias.html">Criar denúncia</a></li>
          <li><a href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
          <li><a href="/html/navbar/seja_parceiro.html">Seja nosso parceiro</a></li>
          <li><a href="/html/navbar/suporte/faleconosco.html">Fale conosco</a></li>
          <li><a href="/html/navbar/servicos/ongs.html">ONG's de proteção animal</a></li>
          <li><a href="/html/navbar/suporte/perguntas_frequentes.html">Perguntas frequentes</a></li>
        </ul>

      </div>
    </div>

    <div class="footer_links">
      <div class="footer_contato">

        <h5>Contato</h5>

        <p><i class="fa-solid fa-location-dot"></i><a href="#" class="local_prefeitura">Rua Maestro Antônio Cícero, 111, Caçaroca, Prefeitura, Serra/ES</a></p>

        <p><i class="fa-solid fa-phone"></i><a href="#" class="footer_tel">(27) 3291-2005</a></p>

        <p><i class="fa-brands fa-instagram"></i><a href="#" class="instagram_link"><u>Prefeitura da Serra (@prefeituraserra)</u></a></p>

      </div>
    </div>

    <div class="footer_img">
      <a href="#" class="site_prefeitura">
        <img class="footer_img-serra" src="/img/logos/serra.png" alt="Logo da Prefeitura da Serra">
      </a>
    </div>

  </div>
</div>
`;

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;

// MENU MOBILE
const hamburguer = document.getElementById('arca-hamburguer');
const mobileMenu = document.getElementById('arca-mobile');

if (hamburguer) {
  hamburguer.addEventListener('click', () => {
    const aberto = hamburguer.classList.toggle('arca-nav__hamburguer--aberto');
    mobileMenu.classList.toggle('arca-nav__mobile--aberto', aberto);
  });
}

// DROPDOWNS DESKTOP
document.querySelectorAll('.arca-nav__dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const id = btn.dataset.dropdown;
    const dropdown = document.getElementById('dropdown-' + id);
    const seta = document.getElementById('seta-' + id);

    const aberto = dropdown.classList.toggle('arca-nav__dropdown--aberto');

    seta.style.transform = aberto ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// DROPDOWNS MOBILE
document.querySelectorAll('.arca-nav__mobile-dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {

    const id = btn.dataset.mobileDropdown;
    const submenu = document.getElementById(id);
    const seta = document.getElementById('seta-' + id);

    const aberto = submenu.classList.toggle('arca-nav__mobile-submenu--aberto');

    seta.style.transform = aberto ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// FECHAR DROPDOWNS
document.addEventListener('click', () => {
  document.querySelectorAll('.arca-nav__dropdown--aberto').forEach(dropdown => {
    dropdown.classList.remove('arca-nav__dropdown--aberto');
  });
});

// TEXTOS
document.querySelectorAll('.projeto_arca').forEach(el => el.innerHTML = projeto_arca);
document.querySelectorAll('.programa_arca').forEach(el => el.innerHTML = programa_arca);

// CARDS
document.querySelectorAll('.card_castrados').forEach(el => el.innerHTML = card_castrados);
document.querySelectorAll('.card_adoção').forEach(el => el.innerHTML = card_adoção);
document.querySelectorAll('.card_atendimento').forEach(el => el.innerHTML = card_atendimento);

// LINKS
document.querySelectorAll('.local_prefeitura').forEach(el => el.href = local_prefeitura);
document.querySelectorAll('.footer_tel').forEach(el => el.href = footer_tel);
document.querySelectorAll('.instagram_link').forEach(el => el.href = instagram_link);
document.querySelectorAll('.site_prefeitura').forEach(el => el.href = site_prefeitura);


// ======================================
// ÍCONE DE AJUDA GLOBAL
// ======================================
 
const ajudaRespostas = {
    adotar: {
        titulo: 'Como adotar um pet?',
        conteudo: `
            <p>Para adotar um animal pelo Programa ARCA, siga os passos abaixo:</p>
            <ul>
                <li>Acesse a página de <a href="/html/navbar/servicos/adocao.html">Adoção</a> e veja os animais disponíveis.</li>
                <li>Escolha um pet e clique em "Quero adotar".</li>
                <li>Preencha o formulário de interesse — nossa equipe entrará em contato.</li>
                <li>Após análise, você será convidado para conhecer o animal pessoalmente.</li>
                <li>Assine o Termo de Adoção Responsável e leve seu novo amigo para casa!</li>
            </ul>
            <p><strong>Requisitos:</strong> ser maior de 18 anos, apresentar documento de identidade e comprovante de residência.</p>
            <p>Dúvidas? <a href="/html/navbar/suporte/faleconosco.html">Fale conosco</a>.</p>
        `
    },
    cadastrar: {
        titulo: 'Como se cadastrar?',
        conteudo: `
            <p>O cadastro no site do Programa ARCA é rápido e gratuito:</p>
            <ul>
                <li>Clique em <a href="/html/account/cadastro.html">Cadastrar</a> no menu superior.</li>
                <li>Preencha seu nome completo, e-mail e crie uma senha.</li>
                <li>Confirme seu e-mail pelo link enviado para a sua caixa de entrada.</li>
                <li>Pronto! Com o cadastro você pode acompanhar solicitações, favoritar pets e muito mais.</li>
            </ul>
            <p>Já tem conta? <a href="/html/account/login.html">Faça login aqui</a>.</p>
        `
    },
    suporte: {
        titulo: 'Falar com suporte',
        conteudo: `
            <p>Nossa equipe está pronta para te ajudar! Escolha o canal de atendimento:</p>
            <ul>
                <li><strong>Formulário online:</strong> <a href="/html/navbar/suporte/faleconosco.html">Fale conosco</a> — respondemos em até 2 dias úteis.</li>
                <li><strong>Telefone:</strong> <a href="tel:+552732912005">(27) 3291-2005</a> — seg. a sex., das 8h às 17h.</li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/prefeituraserra/" target="_blank">@prefeituraserra</a></li>
                <li><strong>Presencial:</strong> Rua Maestro Antônio Cícero, 111 — Caçaroca, Serra/ES.</li>
            </ul>
        `
    }
};
 
const ajudaHTML = `
<button class="ajuda-btn" id="ajudaBtn" aria-label="Ajuda">
    <i class="fa-solid fa-question"></i>
</button>
 
<div class="ajuda-modal ajuda-modal--oculto" id="ajudaModal">
    <div class="ajuda-modal__header">
        <i class="fa-regular fa-circle-question"></i>
        <span>Ajuda ARCA</span>
        <button class="ajuda-modal__fechar" id="ajudaFechar" aria-label="Fechar ajuda">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
 
    <!-- Tela de opções -->
    <div class="ajuda-modal__body" id="ajudaOpcoes">
        <p>Como posso te ajudar?</p>
        <button class="ajuda-modal__opcao" data-ajuda="adotar">Como adotar um pet?</button>
        <button class="ajuda-modal__opcao" data-ajuda="cadastrar">Como se cadastrar</button>
        <button class="ajuda-modal__opcao" data-ajuda="suporte">Falar com suporte</button>
    </div>
 
    <!-- Tela de resposta -->
    <div class="ajuda-modal__resposta" id="ajudaResposta">
        <h4 id="ajudaRespostaTitulo"></h4>
        <div id="ajudaRespostaConteudo"></div>
        <button class="ajuda-modal__voltar" id="ajudaVoltar">
            <i class="fa-solid fa-arrow-left"></i> Voltar
        </button>
    </div>
</div>
`;
 
// Injeta no body
document.body.insertAdjacentHTML('beforeend', ajudaHTML);
 
// Referências
const ajudaBtn    = document.getElementById('ajudaBtn');
const ajudaModal  = document.getElementById('ajudaModal');
const ajudaFechar = document.getElementById('ajudaFechar');
const ajudaOpcoes = document.getElementById('ajudaOpcoes');
const ajudaResp   = document.getElementById('ajudaResposta');
const ajudaRespTitulo   = document.getElementById('ajudaRespostaTitulo');
const ajudaRespConteudo = document.getElementById('ajudaRespostaConteudo');
const ajudaVoltar = document.getElementById('ajudaVoltar');
 
// Abrir/fechar modal
ajudaBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const oculto = ajudaModal.classList.toggle('ajuda-modal--oculto');
    if (!oculto) mostrarOpcoes();
});
 
ajudaFechar.addEventListener('click', () => {
    ajudaModal.classList.add('ajuda-modal--oculto');
});
 
// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!ajudaModal.contains(e.target) && e.target !== ajudaBtn) {
        ajudaModal.classList.add('ajuda-modal--oculto');
    }
});
 
// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ajudaModal.classList.add('ajuda-modal--oculto');
});
 
// Clique nas opções
ajudaOpcoes.querySelectorAll('.ajuda-modal__opcao').forEach(btn => {
    btn.addEventListener('click', () => {
        const chave = btn.dataset.ajuda;
        const dados = ajudaRespostas[chave];
        if (!dados) return;
        ajudaRespTitulo.textContent = dados.titulo;
        ajudaRespConteudo.innerHTML = dados.conteudo;
        ajudaOpcoes.style.display = 'none';
        ajudaResp.classList.add('ajuda-modal__resposta--ativo');
    });
});
 
// Voltar para opções
ajudaVoltar.addEventListener('click', mostrarOpcoes);
 
function mostrarOpcoes() {
    ajudaResp.classList.remove('ajuda-modal__resposta--ativo');
    ajudaOpcoes.style.display = '';
}