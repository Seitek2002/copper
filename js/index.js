const burger = document.querySelector(".burger");
const burger__menu = document.querySelector(".burger__menu");

burger.addEventListener("click", () =>{
    burger__menu.classList.toggle("active")
})