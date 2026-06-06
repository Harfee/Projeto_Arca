const currentPage = document.body.dataset.page;

const projeto_arca = 'Projeto Arca';
const programa_arca = 'Programa Arca';

// CARDS 

const card_castrados = '+2100';
const card_adoção = '+144';
const card_atendimento = '+340';


// RODAPÉ
const local_prefeitura =  'https://maps.app.goo.gl/WcnqMqxQRmW5wk4r5';
const instagram_link = 'https://www.instagram.com/prefeituraserra/';
const footer_tel = 'tel:+552732912005';
const site_prefeitura = 'https://www.serra.es.gov.br';

// MENU DE NAVEGAÇÃO E RODAPÉ (GLOBAL)

const navbar = `
  <nav class="navbar navbar-expand-lg navbar-cor">
    <div class="container">
      <a id="navbar_arca" class="navbar-brand" href="/index.html"><img class="arca_logo" src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
      </button>

    <div class="collapse navbar-collapse align-items-center" id="navbarNavDropdown">
      <ul class="navbar-nav gap-5 ms-lg-5">
        <li class="nav-item"><a class="nav-link ${currentPage === 'home_page' ? 'active fw-bold' : ''}"href="/index.html">Início</a></li>
        <li class="nav-item"><a class="nav-link ${currentPage === 'quem_somos' ? 'active fw-bold' : ''}"href="/html/navbar/quem_somos.html">Quem somos</a></li>
        <li class="nav-item dropdown"><a class="nav-link ${currentPage === 'serviços' ? 'active fw-bold' : ''} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Serviços</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/html/navbar/servicos/sobre.html">Informações sobre</a></li>
            <li><a class="dropdown-item" href="/html/navbar/servicos/adocao.html">Adoção</a></li>
            <li><a class="dropdown-item" href="/html/navbar/servicos/castrar.html">Agendamento de castração</a></li>
            <li><a class="dropdown-item" href="/html/navbar/servicos/resgate.html">Solicitar resgate</a></li>
            <li><a class="dropdown-item" href="/html/navbar/servicos/denuncias.html">Criar denúncias</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link ${currentPage === 'seja_parceiro' ? 'active fw-bold' : ''}" href="/html/navbar/seja_parceiro.html">Seja nosso parceiro</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link ${currentPage === 'suporte' ? 'active fw-bold' : ''} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Suporte</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/html/navbar/suporte/suporte.html">Ajuda</a></li>
            <li><a class="dropdown-item" href="/html/navbar/suporte/suporte.html">Teste 2</a></li>
            <li><a class="dropdown-item" href="/html/navbar/suporte/suporte.html">Teste 3</a></li>
          </ul>
        </li>
      </ul>

        <div class="d-flex align-items-center gap-3 ms-auto mt-3 mt-lg-0">
          <a class="button_navbar ${currentPage === 'cadastro' ? 'active fw-bold' : ''}" href="/html/account/cadastro.html">Cadastro</a>
          <a class="button_navbar ${currentPage === 'login' ? 'active fw-bold' : ''}" href="/html/account/login.html">Login</a>
        </div>

    </div>
    </div>
  </nav>
`;

const footer = `
  <div class="footer_arca">
    <div class="container">
      <div class="footer_img">
        <a href="#navbar_arca"><img class="footer_img-arca" src="/img/logos/painel-arca.png" alt="Logo do Projeto Arca"></a>
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
          <p><i class="fa-solid fa-phone"></i><a href="#" class="footer_tel">(27) 3291-2005</a></p>
          <p><i class="fa-brands fa-instagram"></i><a href="#" class="instagram_link"><u>Prefeitura da Serra (@prefeituraserra)</u></a></p>
      </div>
    </div>
      <div class="footer_img">
        <a href="#" class="site_prefeitura"><img class="footer_img-serra" src="/img/logos/serra.png" alt="Logo da Prefeitura da Serra"></a>
      </div>
    </div>
  </div>
`;

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;


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

document.querySelectorAll('.footer_tel').forEach(element => {
    element.href = footer_tel;
});

document.querySelectorAll('.instagram_link').forEach(element => {
    element.href = instagram_link;
});

document.querySelectorAll('.site_prefeitura').forEach(element => {
    element.href = site_prefeitura;
});