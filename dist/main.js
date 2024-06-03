const burgerMenu = document.querySelector("#burgerMenu");
const navbarMenu = document.querySelector("#navbarMenu");

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("burger-active")
    navbarMenu.classList.toggle("hidden");
}) 