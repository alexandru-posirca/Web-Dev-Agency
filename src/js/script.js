const menuIcon = document.getElementById("menu-icon");
const navBottom = document.querySelector(".nav-bottom");

menuIcon.addEventListener("click", () => {
  navBottom.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navBottom.contains(e.target)) {
    navBottom.classList.remove("active");
    menuIcon.classList.remove("active");
  }
});
