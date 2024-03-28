const shirtCards = [
  {
    imgSrc: "/assets/shirtImage/shirt-img-1.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-2.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-3.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-4.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-5.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-6.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-7.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-8.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-10.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-9.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-1.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
  {
    imgSrc: "/assets/shirtImage/shirt-img-4.jpeg",
    altText: "Loading...",
    title: "Premiun Urban Shirt For Winter | Ms-44",
    price: "Tk.999",
    originalPrice: "Tk.1390",
  },
];

window.onload = () => {
  cards();
};

function cards() {
  const cardContainer = document.querySelector(".card-box");
  let html = "";

  shirtCards.forEach((card) => {
    html += `
        
    <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-4">
              <div class="card">
                  <img
                      src="${card.imgSrc}"
                      alt="${card.altText}"
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
                          <span class="title1">${card.title.substr(
                            0,
                            20
                          )}...</span>
                      </p>
                      <p class="money-text lg-m-2">
                      ${card.price} <sub class="through">${
      card.originalPrice
    }</sub>
                  </p>
                      <button type="button" class="card-btn">Add to cart</button>
                  </div>
              </div>
          </div>`;
  });

  cardContainer.innerHTML = html;
}
