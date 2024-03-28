function showSidebar() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  sidebar.offsetWidth;
  sidebar.style.transform = "translateX(0%)";

  overlay.addEventListener("click", closeSidebar);
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(-100%)";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 500);
  const overlay = document.querySelector(".overlay");
  overlay.remove();
}

function showSidebars() {
  const sidebar = document.querySelector(".sidebars");
  sidebar.style.display = "flex";
  sidebar.offsetWidth;
  sidebar.style.transform = "translateX(0%)";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSidebars() {
  const sidebar = document.querySelector(".sidebars");
  sidebar.style.transform = "translateX(-100%)";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 500);
  document.body.style.backgroundColor = "white";
}

var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiper4", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev-btn",
    prevEl: ".next-btn",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper7", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev-btn-1",
    prevEl: ".next-btn-1",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper8", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev-btn-2",
    prevEl: ".next-btn-2",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper9", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev-btn-3",
    prevEl: ".next-btn-3",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
