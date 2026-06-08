/* =============================================
   SEJA_PARCEIRO.JS
   Animações e interações da página
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. ANIMAÇÃO DE ENTRADA DOS CARDS (Intersection Observer) ──
    const cards = document.querySelectorAll('.forma-card');

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const delay = parseInt(card.dataset.delay) || 0;

                setTimeout(() => {
                    card.classList.add('visivel');
                }, delay);

                observador.unobserve(card);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => observador.observe(card));


    // ── 2. EFEITO DE RIPPLE NO BOTÃO (sem bloquear a navegação) ──
    const btnDoar = document.getElementById('btn-doar');

    if (btnDoar) {
        btnDoar.addEventListener('click', (e) => {
            // NÃO chama e.preventDefault() — deixa o link navegar normalmente

            const ripple = document.createElement('span');

            const rect = btnDoar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.35);
                width: 10px;
                height: 10px;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple-animar 0.55s linear forwards;
                pointer-events: none;
            `;

            btnDoar.style.position = 'relative';
            btnDoar.style.overflow = 'hidden';
            btnDoar.appendChild(ripple);

            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }

    // Injeta o keyframe do ripple dinamicamente
    const estiloRipple = document.createElement('style');
    estiloRipple.textContent = `
        @keyframes ripple-animar {
            to {
                transform: translate(-50%, -50%) scale(30);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(estiloRipple);


    // ── 3. HOVER DOS ÍCONES ──
    cards.forEach(card => {
        const icone = card.querySelector('.icone-circulo i');

        card.addEventListener('mouseenter', () => {
            if (!icone) return;
            icone.style.transition = 'transform 0.3s ease';
            icone.style.transform = 'scale(1.25) rotate(-8deg)';
        });

        card.addEventListener('mouseleave', () => {
            if (!icone) return;
            icone.style.transform = 'scale(1) rotate(0deg)';
        });
    });

});