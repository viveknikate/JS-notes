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

// page navigation
// document.querySelectorAll('.nav__link').forEach((e) => e.addEventListener('click', function(e) {
//   e.preventDefault();
//   const id = e.target.getAttribute('href');
//   // console.log(this.href);    // can't use this prints absolute path
//   // console.log(id)
//   document.querySelector(id).scrollIntoView({ behavior: "smooth" })

// }))

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log('clicked', e.target.getAttribute('href'));
  e.preventDefault();
  const id = e.target;
  // console.log(id);
  if (id.classList.contains('nav__link')) {
    document.querySelector(id.getAttribute('href')).scrollIntoView({ behavior: "smooth" })
  }
})

// tab component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// console.log(tabsContent);


// this makes application slow
// tabs.forEach(t => t.addEventListener('click', () => console.log('clicked')))

// use event delegation
tabsContainer.addEventListener('click', function (e) {
  const choosen = e.target.closest('.operations__tab')

  // guard clause
  if (!choosen) return;

  // choosen.parentElement.querySelector('.operations__tab--active').classList.remove('operations__tab--active')
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  choosen.classList.add('operations__tab--active');
  // console.log(choosen.dataset.tab);

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${choosen.dataset.tab}`).classList.add('operations__content--active')
})

// Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky nav
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${navHeight}px` });
headerObserver.observe(header);


const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
  })
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15,
});
allSections.forEach((sec) => {
  sectionObserver.observe(sec);

  // hiding sections
  sec.classList.add('section--hidden')
})

// lazy loading images
const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}

const imgTarget = document.querySelectorAll('img[data-src]')
const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  // rootMargin: '0px'
});

imgTarget.forEach(img => imageObserver.observe(img))

// slider
const Slider = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')

  const gotoSlide = function (indx) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - indx)}%)`;
    })
  }

  let curSlide = 0, maxSlides = slides.length;
  // btnRight.addEventListener('click', function () {
  //   curSlide = (curSlide + 1) % maxSlides;
  //   // slides.forEach((slide, i) => {
  //   //   slide.style.transform = `translateX(${(i-curSlide) * 100}%)`
  //   // })
  //   // going in right side
  //   gotoSlide(curSlide);
  // })

  // btnLeft.addEventListener('click', function () {
  //   curSlide = (curSlide - 1 + maxSlides) % maxSlides;
  //   // slides.forEach((slide, i) =>{
  //   //   slide.style.transform = `translateX(${100 * (i-curSlide)}%)`
  //   // })
  //   // going in left side
  //   gotoSlide(curSlide);
  // })

  // slides.forEach((slide, i) => {
  //   slide.style.transform = `translateX(${i * 100}%)`
  // })

  // for first time 0th slide 

  const nextSlide = function () {
    curSlide = (curSlide + 1) % maxSlides;
    gotoSlide(curSlide);
    activateDot(curSlide);
  }

  const prevSlide = function () {
    curSlide = (curSlide - 1 + maxSlides) % maxSlides;
    gotoSlide(curSlide);
    activateDot(curSlide);
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })

  // creating dots
  const createDots = function () {
    //we are not using first argument so we can use this throw away variable
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }

  const activateDot = function (currentSlide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${currentSlide}"]`).classList.add('dots__dot--active')
  }

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = Number(e.target.dataset.slide)

      // using destructuring
      const { slide } = e.target.dataset;
      gotoSlide(Number(slide));
      activateDot(Number(slide));
    }
  })

  const init = function(){
    createDots();
    activateDot(0);
    gotoSlide(0);
  }
  init();
}
Slider();