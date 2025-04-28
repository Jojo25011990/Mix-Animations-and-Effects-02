'use strict';
// *** Select Elements ***
const backToTop = document.querySelector('.back-to-top');
const svgTiktok = document.querySelector('.svg-tiktok path');
// *** End of Select Elements ***

// *** Event Listener Btn & Svg Tiktok ***
window.addEventListener('scroll', () => {
  if (window.scrollY >= 3500) {
    backToTop.classList.remove('active');
  } else {
    backToTop.classList.add('active');
  }

  if (window.scrollY >= 2500) {
    svgTiktok.classList.add('active');
  } else {
    svgTiktok.classList.remove('active');
  }
});
// *** End of Event Listener Btn & Svg Tiktok ***
