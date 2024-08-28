let elements = document.querySelectorAll(".text");

elements.forEach((element)=>{
  let innertext = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");   

  for(let letter of innertext){
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element)=>{
  element.addEventListener("mouseover",()=>{
    element.classList.remove("play");
  });
});

// swiper js code

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});