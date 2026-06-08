/* =====================================================
   sobre.js — Página "Informações sobre" | Projeto ARCA
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------------------------
    // Marca o item "Informações sobre" como ativo no navbar
    // O global.js renderiza o navbar via #navbar;
    // aqui esperamos ele ser injetado e então aplicamos a classe.
    // --------------------------------------------------
    function marcarNavAtivo() {
        var links = document.querySelectorAll('#navbar .dropdown-menu a, #navbar .nav-link');
        links.forEach(function (link) {
            if (link.textContent.trim().toLowerCase().includes('informações sobre')) {
                link.classList.add('active');
            }
        });
    }

    // Tenta marcar imediatamente; se o navbar ainda não carregou,
    // usa MutationObserver para aguardar a renderização.
    if (document.querySelector('#navbar a')) {
        marcarNavAtivo();
    } else {
        var observer = new MutationObserver(function (mutations, obs) {
            if (document.querySelector('#navbar a')) {
                marcarNavAtivo();
                obs.disconnect();
            }
        });
        observer.observe(document.getElementById('navbar'), { childList: true, subtree: true });
    }

    // --------------------------------------------------
    // Animação de entrada nos cards ao rolar a página
    // --------------------------------------------------
    var cards = document.querySelectorAll('.sobre-card');

    if ('IntersectionObserver' in window) {
        var cardObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sobre-card--visible');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(function (card, index) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(24px)';
            card.style.transition = 'opacity 0.45s ease ' + (index * 0.1) + 's, transform 0.45s ease ' + (index * 0.1) + 's';
            cardObserver.observe(card);
        });
    }

    // Classe que dispara a animação
    document.head.insertAdjacentHTML('beforeend',
        '<style>' +
        '.sobre-card--visible { opacity: 1 !important; transform: translateY(0) !important; }' +
        '</style>'
    );

    // --------------------------------------------------
    // Fallback: se a imagem dos cachorros não carregar,
    // já tratado no onerror do HTML, mas reforçamos aqui.
    // --------------------------------------------------
    var dogsImg = document.querySelector('.sobre-dogs-img');
    if (dogsImg) {
        dogsImg.addEventListener('error', function () {
            this.style.display = 'none';
            var fallback = document.querySelector('.sobre-dogs-fallback');
            if (fallback) fallback.style.display = 'block';
        });
    }

});