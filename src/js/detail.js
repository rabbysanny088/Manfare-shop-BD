const zoom = document.querySelector("#img-container");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector("#quantity");
const availableProduct = document.querySelector(".available");

const MSize = document.querySelector(".M");
const lSize = document.querySelector(".L");
const XlSize = document.querySelector(".Xl");
const XxlSize = document.querySelector(".Xxl");

var options = {
  width: 630,
  zoomWidth: 500,
  offset: { vertical: 0, horizontal: 10 },
};

function chnagePanjabiImage() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/panjabiImages/panjabi-img-3.jpeg";
  new ImageZoom(zoom, options);
}
function changePanjabiImage() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/panjabiImages/panjabi-img-3.jpeg";
  new ImageZoom(zoom, options);
}

function onChangeSrc() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/detailImages/img-1.jpeg";
  new ImageZoom(zoom, options);
}

function onChangeShortPan() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/detailImages/img-2.jpeg";
  new ImageZoom(zoom, options);
}

function onDesign() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/detailImages/img-3.jpeg";
  new ImageZoom(zoom, options);
}

function onBoxOpen() {
  let imgSrc = document.getElementById("imgSrc");
  imgSrc.src = "/assets/detailImages/img-4.jpeg";
  new ImageZoom(zoom, options);
}

plus.addEventListener("click", () => {
  let currentValue = parseInt(quantity.value);
  quantity.value = currentValue + 1;
});

minus.addEventListener("click", () => {
  let currentValue = parseInt(quantity.value);
  if (currentValue > 1) {
    quantity.value = currentValue - 1;
  }
});

const mainSizes = [
  {
    size: "M",
    availability: "12 available",
  },
  {
    size: "L",
    availability: "20 available",
  },
  {
    size: "Xl",
    availability: "4 available",
  },
  {
    size: "Xxl",
    availability: "50 available",
  },
];

setSelectedSize("M");

function setSelectedSize(size) {
  MSize.classList.remove("selected");
  lSize.classList.remove("selected");
  XlSize.classList.remove("selected");
  XxlSize.classList.remove("selected");

  availableProduct.textContent = mainSizes.find(
    (s) => s.size === size
  ).availability;

  switch (size) {
    case "M":
      MSize.classList.add("selected");
      break;
    case "L":
      lSize.classList.add("selected");
      break;
    case "Xl":
      XlSize.classList.add("selected");
      break;
    case "Xxl":
      XxlSize.classList.add("selected");
      break;
    default:
      break;
  }
}

MSize.addEventListener("click", () => setSelectedSize("M"));
lSize.addEventListener("click", () => setSelectedSize("L"));
XlSize.addEventListener("click", () => setSelectedSize("Xl"));
XxlSize.addEventListener("click", () => setSelectedSize("Xxl"));
