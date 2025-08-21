const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpen = document.querySelector("#menu-open-button")
const menuClose  = document.querySelector("#menu-close-button")

menuOpen.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
})
menuClose.addEventListener("click",()=> menuOpen.click())
navLinks.forEach(link => {
  link.addEventListener("click",()=>{
    menuOpen.click();
  })
})

const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    },
  }
});


const InputName  =document.getElementById('inputName');
const InputEmail  =document.getElementById('inputEmail');
const textArea  =document.getElementById('textArea1');
const btn  =document.getElementById('btn')
const data = []
btn.addEventListener("click",function(){
  let input = {
    InputName:inputName.value,
    inputEmail:inputEmail.value,
    textArea:textArea1.value,
  }

  data.push(input);
  console.log(input);

  localStorage.setItem('input',JSON.stringify(data));
  
})





