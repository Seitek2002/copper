const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,

  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    clickable: true,
    mousewheel: true,
  },
});