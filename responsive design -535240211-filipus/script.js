  const options = ["ROLES", "DIFFICULTY", "MATCHES"];
  let index = 0;

  const heroText = document.getElementById("hero-text");

  function showNext() {
    index++;
    if (index < options.length) {
      // Fade out
      heroText.style.opacity = 0;

      setTimeout(() => {
        // Change text
        heroText.textContent = `SELECT BY ${options[index]}`;
        // Fade in
        heroText.style.opacity = 1;
      }, 1000); // 1 second fade out/in delay

      // Schedule next change in 10 seconds
      setTimeout(showNext, 10000);
    }
  }

  // Start after 10 seconds
  setTimeout(showNext, 3000);