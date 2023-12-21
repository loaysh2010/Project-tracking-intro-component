const burger_button = document.querySelector("main header nav .burger");
const nav_list = document.querySelector("main header nav ul");

burger_button.onclick=function(){
    burger_button.classList.toggle("active");
    nav_list.classList.toggle("active");
}