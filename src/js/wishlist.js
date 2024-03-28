function showWish() {
  const sidebar = document.querySelector(".wish-list");
  sidebar.style.display = "block";
  // Create and append an overlay to the body
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  sidebar.offsetWidth;
  sidebar.style.transform = "translateX(0%)";
  overlay.addEventListener("click", closeWish);
}

function closeWish() {
  const sidebar = document.querySelector(".wish-list");

  // Remove the overlay from the body
  const overlay = document.querySelector(".overlay");
  overlay.remove();

  sidebar.style.transform = "translateX(100%)";
}

function itemShow() {
  const sidebar = document.querySelector(".item");
  sidebar.style.display = "block";
  // Create and append an overlay to the body
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  sidebar.offsetWidth;
  sidebar.style.transform = "translateX(0%)";
  overlay.addEventListener("click", itemClose);
}

function itemClose() {
  const sidebar = document.querySelector(".item");

  // Remove the overlay from the body
  const overlay = document.querySelector(".overlay");
  overlay.remove();

  sidebar.style.transform = "translateX(100%)";
}
