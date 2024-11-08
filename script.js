const menuDiv = document.querySelector("#mobileMenu");
const HamburgerDiv = document.querySelector("#hamburgerMenu");
HamburgerDiv.addEventListener("click", (e) => {
  menuDiv.classList.toggle("right-[-100%]");
  menuDiv.classList.toggle("right-[50%]");
  document.body.classList.toggle("overflow-y-hidden");
});

document.body.addEventListener("click", (e) => {
  const isClickOutsideMenu = e.target.closest(
    "#click, #hamburgerMenu, #ul, .li, #button"
  );
  if (menuDiv.classList.contains("right-[50%]") && !isClickOutsideMenu) {
    menuDiv.classList.toggle("right-[-100%]");
    menuDiv.classList.toggle("right-[50%]");
    document.body.classList.toggle("overflow-y-hidden");
  }
});
