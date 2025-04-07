'use strict';

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 3500) {
    backToTop.classList.remove('active');
  } else {
    backToTop.classList.add('active');
  }
});
