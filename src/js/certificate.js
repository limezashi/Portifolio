document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".certificates");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  const slideWidth = slides[0].offsetWidth + 32; // largura + margem
  const visibleSlides = 1; // slides totalmente visíveis por vez

  let currentIndex = visibleSlides;

  // Posição inicial
  list.scrollLeft = currentIndex * slideWidth;

  function goToIndex(index) {
    list.scrollTo({
      left: index * slideWidth,
      behavior: "smooth"
    });
    currentIndex = index;
  }

  nextButton.addEventListener("click", () => {
    currentIndex++;
    goToIndex(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    goToIndex(currentIndex);
  });
});
