const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slideItems.length;
const slideWidth = slideItems[0].clientWidth;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function showNextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    goToSlide(currentIndex);
  }
}

function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    goToSlide(currentIndex);
  }
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);