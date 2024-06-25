const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

let elemC = document.querySelector('.elem-container');
let fixedImg = document.querySelector('.fixed-img');
elemC.addEventListener('mouseenter',function(){
  fixedImg.style.display = 'block';
})
elemC.addEventListener('mouseleave',function(){
  fixedImg.style.display = 'none';
})

let elems = document.querySelectorAll('.elem');
elems.forEach(function(elem){
  elem.addEventListener('mouseenter',function(){
    const image = elem.getAttribute('data-img');
  fixedImg.style.backgroundImage = `url(${image})`;
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  spaceBetween: 10,
});

let menu = document.querySelector('nav h3');
let fullScr = document.querySelector('.full-scr');
let logo = document.querySelector('nav img');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');

let flag = 0;
  menu.addEventListener('click',function(){
    if(flag == 0){
      fullScr.style.top = 0;
      logo.style.opacity = 0;
      line1.style.rotate = '60deg';
      line2.style.rotate = '-60deg';
      flag = 1;
    }else{
      fullScr.style.top = '-100%';
      flag = 0;
      logo.style.opacity = 1;
      line1.style.rotate = '0deg';
      line2.style.rotate = '0deg';
    }
  })

  let loader = document.querySelector('.loader');
  setTimeout(function(){
    loader.style.top = '-100%';
  },4200);