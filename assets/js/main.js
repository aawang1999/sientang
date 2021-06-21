const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav-link')

/* =============== SWIPER =============== */

let swiper1 = new Swiper('#top-slideshow', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
})

let swiper2 = new Swiper('#sermon-slideshow', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
})

let swiper3 = new Swiper('#testimonial-slideshow', {
  cssMode: true,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  mousewheel: true,
  keyboard: true,
})

/* =============== FUNCTIONS =============== */

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')
  navMenu.classList.remove('show')
}

/* =============== EVENT LISTENERS =============== */

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

navLink.forEach(n => n.addEventListener('click', linkAction))