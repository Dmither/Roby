let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector("body");
let logo = document.querySelector(".logo");

burger.addEventListener("click", function(){
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active")
  body.classList.toggle("freeze");
})

body.addEventListener('scroll', function(){
  if (body.scrollTop > 40){
    logo.classList.add('logo_scrolled');
  } else {
    logo.classList.remove('logo_scrolled');
  }
})