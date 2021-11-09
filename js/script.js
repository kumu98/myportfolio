const navToggle = document.querySelector(".navbartoggle");
const links = document.querySelector(".mainnav");

navToggle.addEventListener("click",function(){
    
    links.classList.toggle("shownav");
});