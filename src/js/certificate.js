const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const list = document.querySelector(".certificates");
const slide = document.querySelector(".slide");

const slideWidth = slide.offsetWidth + 32; // largura + margem (ajuste se necessário)

function getMaxScrollLeft() {
  return list.scrollWidth - list.clientWidth;
}

// Próximo slide com looping contínuo para frente
nextButton.addEventListener("click", () => {
  if (list.scrollLeft + slideWidth >= getMaxScrollLeft() - 5) {
    // Se chegou ao fim, volta pro início com transição
    list.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    list.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
});

// Slide anterior com looping contínuo para trás
prevButton.addEventListener("click", () => {
  if (list.scrollLeft <= 0) {
    // Se está no começo, vai pro final com transição
    list.scrollTo({ left: getMaxScrollLeft(), behavior: "smooth" });
  } else {
    list.scrollBy({ left: -slideWidth, behavior: "smooth" });
  }
});
