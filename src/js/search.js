function showSearchBar() {
  const search = document.querySelector(".res-input-main");
  search.style.display = "block";
  setTimeout(() => {
    search.style.transform = "translateY(0%)";
  }, 0);
}
function closeSearchBar() {
  const search = document.querySelector(".res-input-main");
  search.style.transform = "translateY(-100%)";
  setTimeout(() => {
    search.style.display = "none";
  }, 500);
}
