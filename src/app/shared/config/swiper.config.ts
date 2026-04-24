import {SwiperOptions} from 'swiper/types';

export const TREND_COLLECTION_SWIPER = {
  spaceBetween: 30,
  initialSlide: 1,
  centeredSlides: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      initialSlide: 0,
      centeredSlides: false,
    },
    600: {
      slidesPerView: "auto",
      initialSlide: 1,
      centeredSlides: true,
    }
  }
} as SwiperOptions
