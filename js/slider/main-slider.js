new Swiper('.v-slider_team',{
  //slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 4000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: false
  // },
  navigation: {
    prevEl: '.worker-slider-wrapper-btn-prev', 
    nextEl: '.worker-slider-wrapper-btn-next'
  },  
    breakpoints: {
    320: {
      slidesPerView: 1,
    },
    880: {
      slidesPerView: 2,
    },
    1188: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    }
  },
});
