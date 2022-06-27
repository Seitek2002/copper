new Swiper('.reviews__swiper', {

  loop: true,

  pagination: {
    el: '.reviews__swiper-swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  }


});