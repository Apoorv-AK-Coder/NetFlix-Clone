document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');
    const slides = slider.querySelector('.slides');
    const slideItems = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slideItems.length;
    console.log(totalSlides);

    const slideWidth = slideItems[0].clientWidth;

    slides.style.width = `${slideWidth * totalSlides}px`;

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
  });
});