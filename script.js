const hamburger = document.querySelector(".burger");
const mobnav = document.querySelector(".nav-mobile");
const img = document.querySelector(".burger > img");


hamburger.addEventListener("click", e => {
  mobnav.classList.toggle("open");
  if(img.src.endsWith("/images/icon-hamburger.svg")) {
    img.src = img.src.replace("icon-hamburger.svg", "icon-close.svg");
  } 
  else {
    img.src = img.src.replace("icon-close.svg", "icon-hamburger.svg");
  }
  
});