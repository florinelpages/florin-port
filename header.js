// Selectăm toate link-urile din meniu
const menuLinks = document.querySelectorAll('nav a');

// Funcția pentru a adăuga "bold" pe link-ul activ
function setActiveLink() {
  let currentSection = '';

  // Verificăm care secțiune este activă
  document.querySelectorAll('section').forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section.id;
    }
  });

  // Resetează stilul bold pentru toate link-urile
  menuLinks.forEach((link) => {
    link.classList.remove('font-bold-header');
  });

  // Adaugă "bold" pe link-ul corespunzător
  const activeLink = document.querySelector(`#${currentSection}-link`);
  if (activeLink) {
    activeLink.classList.add('font-bold-header');
  }
}

// Apelăm funcția la încărcare și la scroll
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

window.addEventListener("scroll", () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.remove('bg-opacity-0');
      header.classList.add('bg-opacity-90', 'backdrop-blur-sm', 'shadow-lg');
    } else {
      header.classList.add('bg-opacity-0');
      header.classList.remove('bg-opacity-90', 'backdrop-blur-sm', 'shadow-lg');
    }
  });
  