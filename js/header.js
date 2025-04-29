// header
const third = document.querySelector("header");
console.log(third);

window.addEventListener("scroll",function(){
    if(window.scrollY > 400){
      third.classList.add("scrolled")
    }else{
      third.classList.remove("scrolled")
    }
  })