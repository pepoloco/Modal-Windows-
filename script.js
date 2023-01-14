'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
const overplay = document.querySelector('.overplay');

const openModal = function () {
    modal.classList.remove('hidden');
    overplay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overplay.classList.add('hidden');
}

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeBtn);
overplay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {


    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
