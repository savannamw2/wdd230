let hamburger = document.querySelector("#hamburger");
let closeMenu = document.querySelector("#close-button");

hamburger.addEventListener("click", function () {
    document.querySelector("#nav-page").classList.toggle("hamburgermenu");
    hamburger.classList.toggle("hide");
    closeMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", function () {
    document.querySelector("#nav-page").classList.toggle("hamburgermenu");
    hamburger.classList.toggle("hide");
    closeMenu.classList.toggle("show");
});