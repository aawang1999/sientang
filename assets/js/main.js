const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav-link')

/* =============== SWIPER =============== */

const swipers = []

$('.swiper-fold').each(function (index, element) {
  $(this).addClass('sf' + index)
  let swiper = new Swiper('.sf' + index, {
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
  swipers.push(swiper)
})

$('.swiper-card').each(function (index, element) {
  $(this).addClass('sc' + index)
  let swiper = new Swiper('.sc' + index, {
    cssMode: true,
    spaceBetween: 8,
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
  swipers.push(swiper)
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
