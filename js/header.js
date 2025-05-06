const navShow = document.getElementById("shownav");
const nav=document.getElementById("navbar")

navShow.addEventListener("click", function () {
  nav.classList.toggle("show");
})


const nav_id = document.querySelector("#nav_id");
const ul_id = document.querySelector("#ul_id");

nav_id.addEventListener("click", function () {
  ul_id.classList.toggle("show");  
})