let mySwiper;

const initializeSwiper = (direction) => {
  if (mySwiper) {
    mySwiper.destroy(true, true);
  }

  let swiperConfig = {
    direction: direction,
    slidesPerView: 4,
    navigation: {
      nextEl: direction === "horizontal" ? ".res-icon1" : ".next-button",
      prevEl: direction === "horizontal" ? ".res-icon2" : ".prev-button",
    },
    on: {
      reachEnd: function () {
        document.querySelector(".next-button").classList.remove("show");
      },
      reachBeginning: function () {
        document.querySelector(".prev-button").classList.add("show");
      },
      slideChange: function () {
        if (!this.isBeginning) {
          document.querySelector(".prev-button").classList.add("show");
        } else {
          document.querySelector(".prev-button").classList.remove("show");
        }

        if (!this.isEnd) {
          document.querySelector(".next-button").classList.add("show");
        } else {
          document.querySelector(".next-button").classList.remove("show");
        }
      },
    },
  };

  mySwiper = new Swiper(".mySwiper", swiperConfig);
};

const updateSwiperDirection = () => {
  let direction = window.innerWidth <= 968 ? "horizontal" : "vertical";

  initializeSwiper(direction);
};

updateSwiperDirection();

window.addEventListener("resize", updateSwiperDirection);

document.querySelector(".next-button").addEventListener("click", () => {
  if (mySwiper) {
    mySwiper.slideNext();
  }
});

document.querySelector(".prev-button").addEventListener("click", () => {
  if (mySwiper) {
    mySwiper.slidePrev();
  }
});
