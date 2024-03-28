let isLoading = false;
let totalCards = 0;

const cardsData = [
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-11.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-12.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-1.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-2.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-5.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-6.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-7.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
  {
    imgSrc: "/assets/t-shirtImages/tshirt-img-8.jpeg",
    altText: "Loading...",
    title: "Premium Casual Printed Shirt For Men | MS...",
    price: "Tk.1190",
    originalPrice: "Tk.1490",
  },
];
function generateCard(cardData) {
  return `
    <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-4">
        <div class="card">
            <img
                src="${cardData.imgSrc}"
                alt="${cardData.altText}"
                class="category-img img-fluid"
            />
            <p class="sm-box">
                  <span>0.0</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke=""
                    fill="#FCB400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    ></path>
                  </svg>
                  <span>| 00</span>
                </p>
            <div class="card-content">
                <p class="card-titles">
                    <span class="title1">${cardData.title.substr(
                      0,
                      20
                    )}...</span>
                </p>
                <p class="money-text lg-m-2">
                    ${cardData.price} <sub class="through">${
    cardData.originalPrice
  }</sub>
                </p>
                <button type="button" class="card-btn">Add to cart</button>
            </div>
        </div>
    </div>`;
}

function appendCard(cardData) {
  const cardContainer = document.querySelector(".card-box");
  const cardHtml = generateCard(cardData);
  cardContainer.innerHTML += cardHtml;
  totalCards++;
}

function removeLastCard() {
  const cardContainer = document.querySelector(".card-box");
  const lastCard = cardContainer.lastElementChild;
  if (lastCard) {
    cardContainer.removeChild(lastCard);
    totalCards--;
  }
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const moreCards = [
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-18.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-14.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-11.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-12.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-13.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-14.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
        {
          imgSrc: "/assets/t-shirtImages/tshirt-img-15.jpeg.jpeg",
          altText: "Loading...",
          title: "Exclusive T Shirt For Men। MF-404",
          price: "Tk.350",
          originalPrice: "Tk.550",
        },
      ];

      resolve(moreCards);
    }, 1000);
  });
}

window.addEventListener("scroll", async () => {
  if (isLoading || totalCards >= 35) return;

  const scrollTop = window.scrollX;

  if (scrollTop <= 100) {
    isLoading = true;

    document.getElementById("loading").style.display = "block";

    removeLastCard();

    const moreCards = await fetchData();

    if (totalCards + moreCards.length > 35) {
      const cardsToAdd = 35 - totalCards;
      for (let i = 0; i < cardsToAdd; i++) {
        appendCard(moreCards[i]);
      }
    } else {
      for (const cardData of moreCards) {
        appendCard(cardData);
      }
    }

    document.getElementById("loading").style.display = "none";

    isLoading = false;
  }
});

cardsData.slice(0, 9).forEach((card) => {
  appendCard(card);
});
