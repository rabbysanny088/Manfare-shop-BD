// let isLoading = false;

// function generateCard(cardData) {
//   return `
//     <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-4">
//         <div class="card">
//             <img
//                 src="${cardData.imgSrc}"
//                 alt="${cardData.altText}"
//                 class="category-img img-fluid"
//             />
//             <div class="card-content">
//                 <p class="card-titles">
//                     <span class="title1">${cardData.title.substr(
//                       0,
//                       20
//                     )}...</span>
//                 </p>
//                 <p class="money-text lg-m-2">
//                     ${cardData.price} <sub class="through">${
//     cardData.originalPrice
//   }</sub>
//                 </p>
//                 <button type="button" class="card-btn">Add to cart</button>
//             </div>
//         </div>
//     </div>`;
// }

// function appendCard(cardData) {
//   const cardContainer = document.querySelector(".card-box");
//   const cardHtml = generateCard(cardData);
//   cardContainer.innerHTML += cardHtml;
// }

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const moreCards = [
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-2.jpeg",
//           altText: "Loading...",
//           title: "New Premium T Shirt For Men। MF-403",
//           price: "Tk.3290",
//           originalPrice: "Tk.3800",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-3.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.25000",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-4.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-5.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.1500",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-6.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.1000",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-7.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.500",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-8.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.4000",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-9.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2890",
//           originalPrice: "Tk.3000",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/panjabi-img-10.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.2000",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/img-11.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.1400",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/img-12.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.4500",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/img-13.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.5000",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/img-14.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.1000",
//           originalPrice: "Tk.3100",
//         },
//         {
//           imgSrc: "../assets/panjabiImages/img-15.jpeg",
//           altText: "Loading...",
//           title: "Exclusive T Shirt For Men। MF-404",
//           price: "Tk.500",
//           originalPrice: "Tk.3100",
//         },
//       ];
//       resolve(moreCards);
//     }, 1000);
//   });
// }

// window.addEventListener("scroll", async () => {
//   if (isLoading) return;

//   const scrollTop = window.scrollX;

//   if (scrollTop <= 100) {
//     isLoading = true;

//     document.getElementById("loading").style.display = "block";

//     const moreCardWs = await fetchData();

//     for (const cardData of moreCardWs) {
//       appendCard(cardData);
//       await new Promise((resolve) => setTimeout(resolve, 300));
//     }
//     document.getElementById("loading").style.display = "none";

//     isLoading = false;
//   }
// });

// // appendCard(cardsData);

// limited card

let isLoading = false;
let totalCards = 0;

const cardsData = [
  {
    imgSrc: "../assets/panjabiImages/img-15.jpeg",
    altText: "Loading...",
    title: "ELETE Quality Embroidered",
    price: "Tk.3290",
    originalPrice: "Tk.3800",
  },
  {
    imgSrc: "../assets/panjabiImages/img-16.jpeg",
    altText: "Loading...",
    title: "ELETE Quality Embroidered",
    price: "Tk.2000",
    originalPrice: "Tk.3800",
  },
  {
    imgSrc: "../assets/panjabiImages/img-17.jpeg",
    altText: "Loading...",
    title: "ELETE Quality Embroidered",
    price: "Tk.1000",
    originalPrice: "Tk.3800",
  },
  {
    imgSrc: "../assets/panjabiImages/img-18.jpeg",
    altText: "Loading...",
    title: "ELETE Quality Embroidered",
    price: "Tk.5000",
    originalPrice: "Tk.1000",
  },
  {
    imgSrc: "../assets/panjabiImages/img-19.jpeg",
    altText: "Loading...",
    title: "ELETE Quality Embroidered",
    price: "Tk.3290",
    originalPrice: "Tk.3800",
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
          imgSrc: "../assets/panjabiImages/panjabi-img-2.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.3290",
          originalPrice: "Tk.3800",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-3.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.25000",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-4.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-5.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.1500",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-6.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.1000",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-7.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.500",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-8.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.4000",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-9.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2890",
          originalPrice: "Tk.3000",
        },
        {
          imgSrc: "../assets/panjabiImages/panjabi-img-10.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.2000",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/img-11.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.1400",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/img-12.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.4500",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/img-13.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.5000",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/img-14.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.1000",
          originalPrice: "Tk.3100",
        },
        {
          imgSrc: "../assets/panjabiImages/img-15.jpeg",
          altText: "Loading...",
          title: "ELETE Quality Embroidered",
          price: "Tk.500",
          originalPrice: "Tk.3100",
        },
      ];
      resolve(moreCards);
    }, 1000);
  });
}

window.addEventListener("scroll", async () => {
  if (isLoading || totalCards >= 100) return;

  const scrollTop = window.scrollX;

  if (scrollTop <= 100) {
    isLoading = true;

    document.getElementById("loading").style.display = "block";

    removeLastCard();

    const moreCards = await fetchData();

    if (totalCards + moreCards.length > 100) {
      const cardsToAdd = 100 - totalCards;
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

cardsData.slice(0, 5).forEach((card) => {
  appendCard(card);
});
