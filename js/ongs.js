/* =============================================
   ARCA – ONG's de Proteção Animal
   ongs.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ong-card');
  if (!cards.length) return;

  // Estado inicial: invisível
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  });

  // Anima ao entrar na viewport com atraso escalonado por card
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 110);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => observer.observe(card));
});