'use strict';

const vidSlides = document.querySelectorAll('.video');
const sliderBtns = document.querySelectorAll('.slider__btn');
const contents = document.querySelectorAll('.content');

sliderBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    vidSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    vidSlides[i].classList.add('active');
    contents.forEach(content => {
      content.classList.remove('active');
    });
    contents[i].classList.add('active');
  });
});
