setTimeout(() => {  
  // console.log('World!'); 

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slideItems.length;
console.log(totalSlides);
const slideWidth = slideItems[0].clientWidth;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function showNextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex = currentIndex + 3;
    goToSlide(currentIndex);
  }
}

function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 3;
    goToSlide(currentIndex);
  }
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

}, 1000);