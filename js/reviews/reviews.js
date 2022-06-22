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

    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,

  });