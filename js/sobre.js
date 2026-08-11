document.addEventListener('DOMContentLoaded', function () {

    function marcarNavAtivo() {
        var links = document.querySelectorAll('#navbar .dropdown-menu a, #navbar .nav-link');
        links.forEach(function (link) {
            if (link.textContent.trim().toLowerCase().includes('informações sobre')) {
                link.classList.add('active');
            }
        });
    }

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

    document.head.insertAdjacentHTML('beforeend',
        '<style>' +
        '.sobre-card--visible { opacity: 1 !important; transform: translateY(0) !important; }' +
        '</style>'
    );

    var dogsImg = document.querySelector('.sobre-dogs-img');
    if (dogsImg) {
        dogsImg.addEventListener('error', function () {
            this.style.display = 'none';
            var fallback = document.querySelector('.sobre-dogs-fallback');
            if (fallback) fallback.style.display = 'block';
        });
    }

});