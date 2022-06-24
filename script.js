'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header')
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scroll

btnScrollTo.addEventListener('click', function() {
  section1.scrollIntoView({behavior : 'smooth'})
}) 

// Page Navigation

// Without event delegation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault()
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'})
//   })
// })

// Event Delegation technique
// 1. Add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  console.log(e.target)
  e.preventDefault()

  // matching strategy (ngl this p burst my head o)
  if(e.target.classList.contains('nav__link')){
    console.log("LINK")
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior : 'smooth'})
  }
})





// learning test cases (was fun and eventful)
// const message = document.createElement('div')
// message.classList.add('cookie-message')
// // message.textContent = 'this is a toast message'
// message.innerHTML = 'this is a toast message <button class="btn btn--close--cookie">Got it<button>'
// // header.prepend(message)
// header.append(message)
// // header.before(message)
// // header.after(message)

// document.querySelector('.btn--close--cookie').addEventListener('click', function() {
//   // New method
//   message.remove()
//   // former method
//   // message.parentElement.removeChild(message)

// }) 
// message.style.backgroundColor = '#37383d'
// // message.style.width = '100%'

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)

// console.log(logo.className)
// logo.setAttribute('bank', 'minimalist bank of africa')

// console.log( logo.getAttribute('bank'))
// // to get the absolute url for images use this
// console.log(logo.src)
// // to get the relative url for images use this
// console.log(logo.getAttribute('src'))

// const link = document.querySelector('.nav__link')
// // to get the absolute url for links  use this

// console.log(link.href)
// // to get the relative url for links use this

// console.log(link.getAttribute('href'))

// console.log(logo.dataset.versionNumber)

// logo.classList.add('c')
// logo.classList.remove('c')
// logo.classList.toggle('c')
// logo.classList.contains('c') //Equivalent of includes for arrays and strings.



// const h1 = document.querySelector('h1')

// const alertH1 = function(e) {
//   alert('Great i am an H1 tag')

// }
// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// Event Bubbling, Capturing
// const randomInt = (min,max) => {
//  return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomColor = () => {
//  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
// }

// console.log(randomColor());
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log("nav", e.target)
//   this.style.backgroundColor = randomColor()
//   e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   console.log("Container", e.target, e.currentTarget)
//   this.style.backgroundColor = randomColor()

// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   console.log("Nav", e.target, e.currentTarget)
//   this.style.backgroundColor = randomColor()

// })

// Traversing the Dom 

const h1 = document.querySelector('h1');

// Going downwards selecting child elements
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes);
console.log(h1.children)
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'

// Going upwards selecting parents

console.log(h1.parentNode)
console.log(h1.parentElement)

h1.closest('.header').style.background = 'var(--gradient-secondary)'

// Going sideways selecting siblings

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) {
    el.style.transform = 'scale(0.5)'
  }
})