const currentPage = document.body.dataset.page;

const projeto_arca = 'Projeto Arca';
const programa_arca = 'Programa Arca';

// CARDS
const card_castrados = '+2100';
const card_adoção = '+144';
const card_atendimento = '+340';

// RODAPÉ
const local_prefeitura = 'https://maps.app.goo.gl/WcnqMqxQRmW5wk4r5';
const instagram_link   = 'https://www.instagram.com/prefeituraserra/';
const tel_prefeitura   = 'tel:+552732912005';
const site_prefeitura  = 'https://www.serra.es.gov.br';

// MENU DE NAVEGAÇÃO E RODAPÉ (GLOBAL)

const navbar = `
<nav class="arca-nav" id="arca-nav">
  <div class="arca-nav__container">

    <a class="arca-nav__logo" href="/index.html" id="navbar_arca">
      <img src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca" class="arca_logo">
    </a>

    <ul class="arca-nav__links" id="arca-nav-links">

      <li><a class="arca-nav__link ${currentPage === 'home_page' ? 'arca-nav__link--ativo' : ''}" href="/index.html">Início</a></li>

      <li><a class="arca-nav__link" href="/index.html#quem-somos">Quem somos</a></li>

      <li class="arca-nav__dropdown-item">
        <button class="arca-nav__link arca-nav__dropdown-btn" data-dropdown="servicos">
          Serviços <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-servicos"></i>
        </button>
        <ul class="arca-nav__dropdown" id="dropdown-servicos">
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/sobre.html">Informações sobre</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/adocao/adocao.html">Adoção</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/castracao/castrar.html">Agendamento de castração</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/servicos/denuncia/denuncia.html">Criar denúncias</a></li>
        </ul>
      </li>

      <li><a class="arca-nav__link ${currentPage === 'seja_parceiro' ? 'arca-nav__link--ativo' : ''}" href="/html/navbar/seja_parceiro.html">Seja nosso parceiro</a></li>

      <li class="arca-nav__dropdown-item">
        <button class="arca-nav__link arca-nav__dropdown-btn" data-dropdown="suporte">
          Suporte <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-suporte"></i>
        </button>
        <ul class="arca-nav__dropdown" id="dropdown-suporte">
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/suporte/suporte.html">Ajuda</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/suporte/suporte.html">Teste 2</a></li>
          <li><a class="arca-nav__dropdown-link" href="/html/navbar/suporte/suporte.html">Teste 3</a></li>
        </ul>
      </li>

    </ul>

    <div class="arca-nav__botoes arca-nav__botoes--desktop">
      <a class="arca-nav__btn arca-nav__btn--entrar" href="/html/account/login.html">Entrar</a>
      <a class="arca-nav__btn arca-nav__btn--cadastrar" href="/html/account/cadastro.html">Cadastrar</a>
    </div>

    <button class="arca-nav__hamburguer" id="arca-hamburguer" aria-label="Abrir menu">
      <span class="arca-nav__hamburguer-linha"></span>
      <span class="arca-nav__hamburguer-linha"></span>
      <span class="arca-nav__hamburguer-linha"></span>
    </button>

  </div>

  <div class="arca-nav__mobile" id="arca-mobile">
    <ul class="arca-nav__mobile-links">

      <li><a class="arca-nav__mobile-link ${currentPage === 'home_page' ? 'arca-nav__mobile-link--ativo' : ''}" href="/index.html">Início</a></li>

      <li><a class="arca-nav__mobile-link" href="/index.html#quem-somos">Quem somos</a></li>

      <li class="arca-nav__mobile-dropdown-item">
        <button class="arca-nav__mobile-link arca-nav__mobile-dropdown-btn" data-mobile-dropdown="mob-servicos">
          Serviços <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-mob-servicos"></i>
        </button>
        <ul class="arca-nav__mobile-submenu" id="mob-servicos">
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/sobre.html">Informações sobre</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/adocao/adocao.html">Adoção</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/castracao/castrar.html">Agendamento de castração</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/servicos/denuncia/denuncia.html">Criar denúncias</a></li>
        </ul>
      </li>

      <li><a class="arca-nav__mobile-link ${currentPage === 'seja_parceiro' ? 'arca-nav__mobile-link--ativo' : ''}" href="/html/navbar/seja_parceiro.html">Seja nosso parceiro</a></li>

      <li class="arca-nav__mobile-dropdown-item">
        <button class="arca-nav__mobile-link arca-nav__mobile-dropdown-btn" data-mobile-dropdown="mob-suporte">
          Suporte <i class="fa-solid fa-angle-down arca-nav__seta" id="seta-mob-suporte"></i>
        </button>
        <ul class="arca-nav__mobile-submenu" id="mob-suporte">
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/suporte/suporte.html">Ajuda</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/suporte/suporte.html">Teste 2</a></li>
          <li><a class="arca-nav__mobile-sublink" href="/html/navbar/suporte/suporte.html">Teste 3</a></li>
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

const footer = `
  <div class="footer_arca">
    <div class="container">
      <div class="footer_img">
        <a href="/index.html"><img class="footer_img-arca" src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca"></a>
      </div>

      <div class="footer_links">
        <h5>Navegação</h5>
        <div class="footer_nav">
          <ul>
            <li><a href="/index.html">Inicio</a></li>
            <li><a href="/html/navbar/quem_somos.html">Quem somos</a></li>
            <li><a href="/html/navbar/servicos/adocao.html">Adoção</a></li>
            <li><a href="/html/navbar/servicos/castrar.html">Agendamento de castração</a></li>
            <li><a href="#">ONG's de proteção animal</a></li>
          </ul>
          <ul>
            <li><a href="/html/navbar/servicos/denuncias.html">Criar denúncia</a></li>
            <li><a href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
            <li><a href="/html/navbar/seja_parceiro.html">Seja nosso parceiro</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
          </ul>
        </div>
      </div>

      <div class="footer_links">
        <div class="footer_contato">
          <h5>Contato</h5>
          <p><i class="fa-solid fa-location-dot"></i><a href="#" class="local_prefeitura">Rua Maestro Antônio Cícero, 111, Caçaroca, Prefeitura, Serra/ES, CEP 29176-110</a></p>
          <p><i class="fa-solid fa-phone"></i><a href="#" class="tel_prefeitura">(27) 3291-2005</a></p>
          <p><i class="fa-brands fa-instagram"></i><a href="#" class="instagram_link"><u>Prefeitura da Serra (@prefeituraserra)</u></a></p>
        </div>
      </div>

      <div class="footer_img">
        <a href="#" class="site_prefeitura" target="_blank"><img class="footer_img-serra" src="/img/logos/serra.png" alt="Logo da Prefeitura da Serra"></a>
      </div>
    </div>
  </div>
`;

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;

const hamburguer = document.getElementById('arca-hamburguer');
const mobileMenu = document.getElementById('arca-mobile');

hamburguer.addEventListener('click', () => {
    const aberto = hamburguer.classList.toggle('arca-nav__hamburguer--aberto');
    mobileMenu.classList.toggle('arca-nav__mobile--aberto', aberto);
});

document.querySelectorAll('.arca-nav__mobile-link:not(.arca-nav__mobile-dropdown-btn)').forEach(link => {
    link.addEventListener('click', () => {
        hamburguer.classList.remove('arca-nav__hamburguer--aberto');
        mobileMenu.classList.remove('arca-nav__mobile--aberto');
    });
});

document.querySelectorAll('.arca-nav__dropdown-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id       = btn.dataset.dropdown;
        const dropdown = document.getElementById('dropdown-' + id);
        const seta     = document.getElementById('seta-' + id);
        const aberto   = dropdown.classList.toggle('arca-nav__dropdown--aberto');
        seta.style.transform = aberto ? 'rotate(180deg)' : 'rotate(0deg)';

        document.querySelectorAll('.arca-nav__dropdown--aberto').forEach(d => {
            if (d.id !== 'dropdown-' + id) {
                d.classList.remove('arca-nav__dropdown--aberto');
                const outraId   = d.id.replace('dropdown-', '');
                const outraSeta = document.getElementById('seta-' + outraId);
                if (outraSeta) outraSeta.style.transform = 'rotate(0deg)';
            }
        });
    });
});

document.querySelectorAll('.arca-nav__mobile-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id      = btn.dataset.mobileDropdown;
        const sub     = document.getElementById(id);
        const setaId  = 'seta-' + id;
        const seta    = document.getElementById(setaId);
        const aberto  = sub.classList.toggle('arca-nav__mobile-submenu--aberto');
        seta.style.transform = aberto ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.arca-nav__dropdown--aberto').forEach(d => {
        d.classList.remove('arca-nav__dropdown--aberto');
        const id   = d.id.replace('dropdown-', '');
        const seta = document.getElementById('seta-' + id);
        if (seta) seta.style.transform = 'rotate(0deg)';
    });
});


document.querySelectorAll('.projeto_arca').forEach(element => {
    element.innerHTML = projeto_arca;
});

document.querySelectorAll('.programa_arca').forEach(element => {
  element.innerHTML = programa_arca;
});

// CARDS HOME 
document.querySelectorAll('.card_castrados').forEach(element => {
    element.innerHTML = card_castrados;
});

document.querySelectorAll('.card_adoção').forEach(element => {
  element.innerHTML = card_adoção;
});

document.querySelectorAll('.card_atendimento').forEach(element => {
  element.innerHTML = card_atendimento;
});

// LINKS
document.querySelectorAll('.local_prefeitura').forEach(element => {
    element.href = local_prefeitura;
});

document.querySelectorAll('.tel_prefeitura').forEach(element => {
    element.href = tel_prefeitura;
});

document.querySelectorAll('.instagram_link').forEach(element => {
    element.href = instagram_link;
});

document.querySelectorAll('.site_prefeitura').forEach(element => {
    element.href = site_prefeitura;
});