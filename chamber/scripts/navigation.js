const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");

menu.addEventListener("click", function() {
    navBar.classList.toggle("open");
    menu.classList.toggle("open");
});
