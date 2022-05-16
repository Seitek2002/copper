const swiper = new Swiper('.products__swiper', {
    // direction: 'vertical',
    slidesPerView: 5,
    // loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   mousewheel: true,
    // },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction: "vertical",
  });

//   export default {
//     data () {
//         return {
//             quantity: null
//         }
//     }
// }