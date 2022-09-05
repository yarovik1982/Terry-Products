 
//  import Swiper, { Navigation, Pagination } from 'swiper';
 
//  import 'swiper/css';
//  import 'swiper/css/navigation';
//  import 'swiper/css/pagination';

 
//  const swiper = new Swiper('.swiper', {
//    //  direction: 'vertical',
//    slidesPerView: 1,
//    spaceBetween: 30,
//     loop: true,

//    modules: [Navigation, Pagination],
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//  });

const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
   navigation: {
     nextEl: '.app-swiper-button-next',
     prevEl: '.app-swiper-button-prev',
     clicable: true,
   },
 });