'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const overLay = document.querySelector('.overlay');
const model = document.querySelector('.modal');

const openModel = () => {
     model.classList.remove('hidden');
     overLay.classList.remove('hidden');
}
const closeModal = () => {
     model.classList.add('hidden');
     overLay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
     btnsOpenModal[i].addEventListener('click', openModel)

document.querySelector('.close-modal').addEventListener('click', closeModal)
overLay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (event) {
     if (event.key === 'Escape' && !model.classList.contains('hidden')) closeModal()
})
