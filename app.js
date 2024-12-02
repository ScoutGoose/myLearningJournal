document
  .querySelector(".mobile-link-btn")
  .addEventListener("click", showMobileNavigation);
function showMobileNavigation() {
  const mobileNav = document.querySelector(`.mobile-links`);
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
}
