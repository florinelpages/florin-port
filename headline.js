const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");

setInterval(() => {
  // Aplicăm efectul de glitch
  word1.classList.add("glitch");
  word2.classList.add("glitch");

  setTimeout(() => {
    // Schimbăm textul între "OVER" și "TAKE" după ce animația glitch este completă
    if (word1.textContent === "OVER") {
      word1.textContent = "TAKE";
      word2.textContent = "OVER";
    } else {
      word1.textContent = "OVER";
      word2.textContent = "TAKE";
    }

    // Scoatem efectul de glitch după ce s-a schimbat textul
    setTimeout(() => {
      word1.classList.remove("glitch");
      word2.classList.remove("glitch");
    }, 100); // Glitch-ul durează doar 0.5 secunde pentru un efect rapid
  }, 100); // Așteptăm să lăsăm glitch-ul să fie vizibil 0.5s (dacă este 0.05ms, glitch-ul nu va fi vizibil)

}, 7000); // Schimbăm textul la fiecare 7 secunde
