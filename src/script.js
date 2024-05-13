'use strict';

const vidSlides = document.querySelectorAll('.video');
const sliderBtns = document.querySelectorAll('.slider__btn');
const contents = document.querySelectorAll('.content');
const menuOpen = document.querySelector('.menu--open');
const menuClose = document.querySelector('.menu--close');
const navMobile = document.querySelector('.nav--mobile');

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

menuOpen.addEventListener('click', () => (navMobile.style.transform = 'translateX(0)'));
menuClose.addEventListener('click', () => (navMobile.style.transform = 'translateX(100%)'));
