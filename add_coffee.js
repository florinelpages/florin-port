const button = document.getElementById('add-coffee');
const buttonContent = document.getElementById('button-content');
const coffeeIcon = document.getElementById('coffee-icon');
const thankYou = document.getElementById('thank-you');
const coffeeCount = document.getElementById('coffee-count');

let count = 0;

button.addEventListener('click', () => {
  count++;
  coffeeCount.textContent = count;

  // Aplică efectul jiggle imediat
  button.classList.add('jiggle');

  // Schimbă text cu iconița verde și fundal transparent
  setTimeout(() => {
    buttonContent.classList.add('opacity-0');
    coffeeIcon.classList.remove('opacity-0');
    button.classList.add('bg-transparent');
  }, 400);

  // Înlocuiește iconița cu "Thank you!"
  setTimeout(() => {
    coffeeIcon.classList.add('opacity-0');
    thankYou.classList.remove('opacity-0');
  }, 1400);

  // Reset complet după 3 secunde
  setTimeout(() => {
    thankYou.classList.add('opacity-0');
    button.classList.remove('bg-transparent', 'jiggle');
    buttonContent.classList.remove('opacity-0');
  }, 3400);
});
