// Prosty efekt animacji tytułu
const title = document.querySelector(".hero-text h2");
if (title) {
  title.style.opacity = 0;
  window.addEventListener("load", () => {
    let opacity = 0;
    const fade = setInterval(() => {
      opacity += 0.02;
      title.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fade);
    }, 30);
  });
}
