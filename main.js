var menu = document.querySelector("#bars");
var navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("navbar-active");
}










var scrollTop = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 80);
})