const btn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector(".main-menu");

btn.addEventListener("click", function() {
    mainMenu.classList.toggle("show"); 
})