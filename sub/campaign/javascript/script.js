
AOS.init();

var swiper = new Swiper(".section_2 .mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
//   loop: true,
//   autoplay: true,
//   autoplay: {
//     delay: 4000,

//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: { 반응형 width 

  //   1020: { 640 이상일 경우

  //   slidesPerView: 1,  }, 레이아웃 2 },

  //   768: { 
  //     slidesPerView: 3, 
  //   },

  //   },

  breakpoints: { 

    // 1020: { 640 이상일 경우

    // slidesPerView: 1,  }, 레이아웃 2 },

  

    1280: { 
      slidesPerView: 4, 
      slidesPerGroup: 4,
    },

    510: { 
      slidesPerView: 2, 
      slidesPerGroup: 2,
    },

    0: { 
      slidesPerView: 1, 
      slidesPerGroup: 1,
    },

    },

    


});

var swiper = new Swiper(".section_4 .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 2,
//   loop: true,
//   autoplay: true,
//   autoplay: {
//     delay: 4000,

//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: { 반응형 width 

  //   1020: { 640 이상일 경우

  //   slidesPerView: 1,  }, 레이아웃 2 },

  //   768: { 
  //     slidesPerView: 3, 
  //   },

  //   },

  breakpoints: { 

    // 1020: { 640 이상일 경우

    // slidesPerView: 1,  }, 레이아웃 2 },

  

    1280: { 
      slidesPerView: 2, 
      slidesPerGroup: 2,
    },

    790: { 
      slidesPerView: 2, 
      slidesPerGroup: 2,
    },

    0: { 
      slidesPerView: 1, 
      slidesPerGroup: 1,
    },

    },

    


});


