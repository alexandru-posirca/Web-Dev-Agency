const menuIcon = document.getElementById("menu-icon");
const navBottom = document.querySelector(".nav-bottom");
const windowPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-list ul li a");

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

  navLinks.forEach((link) => {
   const navLinkPath = new URL(link.href).pathname;
   if((windowPath === navLinkPath) || (windowPath.startsWith(navLinkPath) && navLinkPath !== "/" )) {
    link.classList.add('active');
   }
  });