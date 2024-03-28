const cardsData = [
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303864199-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303787106-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303686875-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303565057-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303158350-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707303045574-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },

  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707302529067-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707302425191-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707300272110-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707299379339-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707299434211-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707299324777-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707299163342-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707298970306-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707298460300-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707299114122-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707296180533-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707296180533-manfare_bd-id-13.jpeg",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc:
      "https://cdn.bitcommerz.com/manfare-bd/media/1707297561746-manfare_bd-id-13.jpegs",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
  },
  {
    imgSrc: "",
    altText: "Loading...",
    title: "Premium Leather Wallet for Me...",
    price: "Tk.1950",
    originalPrice: "Tk.1990",
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
  try {
    const cardContainer = document.querySelector(".fashions");
    const cardHtml = generateCard(cardData);
    cardContainer.innerHTML += cardHtml;
  } catch (error) {
    console.error("Error appending card:", error);
  }
}

cardsData.map((card) => {
  appendCard(card);
});
