let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__main");

burger.addEventListener("click", function(){
  burger.classList.toggle("burger_active");
  menu.classList.toggle("main_active")
})