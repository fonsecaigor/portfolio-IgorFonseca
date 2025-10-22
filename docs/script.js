// Atualiza o ano automaticamente
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelector("footer p").innerHTML =
    `&copy; ${year} Igor Vinicius Santos Fonseca. Todos os direitos reservados.`;
});

// Animações de aparição ao rolar (scroll reveal)
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
