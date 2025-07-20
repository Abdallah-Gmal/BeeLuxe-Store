const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 9000, // ← 2000 ملي ثانية = 2 ثانية
    disableOnInteraction: false, // ← يفضل تحطها علشان ميوقفش بعد ما المستخدم يتفاعل
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 5,

  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// --------  [ Swiper 2 ] --------
const swipe_2 = new Swiper(".swiper_2", {
  loop: true,

  autoplay: {
    delay: 6000, // ← 2000 ملي ثانية = 2 ثانية
    disableOnInteraction: false, // ← يفضل تحطها علشان ميوقفش بعد ما المستخدم يتفاعل
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 5,

  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// --------swiper 3 ---------
const swiper_1_img = new Swiper(".swiper_1_img", {
  loop: true,

  autoplay: {
    delay: 4000, // ← 2000 ملي ثانية = 2 ثانية
    disableOnInteraction: false, // ← يفضل تحطها علشان ميوقفش بعد ما المستخدم يتفاعل
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 5,

  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
// --------[ click nav bar ] ---------
let click_nav = document.querySelector(".list_icone");
click_nav.onclick = function () {
  document.querySelector(".header_links").classList.toggle("hidden");
  console.log("its work");
};
