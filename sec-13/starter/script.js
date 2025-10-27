'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);


// creating
const msg = document.createElement('div')
msg.innerHTML = `we use cookies to improve user experience <button class = "btn btn--close-cookie">Got it </button>`

// selecting
const header = document.getElementsByClassName('header')[0];

// inserting
header.prepend(msg)
msg.classList.add('cookie-message')

// removing
document.querySelector('.btn--close-cookie').addEventListener('click', () => msg.remove())

// styles
msg.style.backgroundColor = '#37383d';
msg.style.width = '104%';
msg.style.color = '#fff';
msg.style.padding = '16px';
msg.style.textAlign = 'center';

// setting styles, which is there already
msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 40 + 'px';

// changing the color of css style :root
document.documentElement.style.setProperty('--color-primary', 'orangered');


[btnCloseModal, overlay].forEach(btn => btn.addEventListener('click', closeModal));
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const sec1 = document.querySelector('#section--1')
document.querySelector('.btn--scroll-to').addEventListener('click', (e) => {
  sec1.scrollIntoView({ behavior: "smooth" })
})

const h1 = document.querySelector('h1');

const alertH1 = () => {
  alert('hovered.!!');
}
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000);