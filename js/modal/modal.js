  'use strict';

// модалка для кнопки меню
const modalAdd = document.querySelector('.modal__add'), //модалка
  addAd = document.querySelector('.add__ad');	//кнопка
  

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
});

modalAdd.addEventListener('click', (event) => {
  const target = event.target;

  if(target.classList.contains('modal__close') ||  target === modalAdd)
    modalAdd.classList.add('hide');
});

// модалка для видео
const modalVideoAdd = document.querySelector('.modal-video__add'), //модалка
  addVideoAd = document.querySelector('.video__ad');	//кнопка
  

addVideoAd.addEventListener('click', () => {
  modalVideoAdd.classList.remove('hide');
});

modalVideoAdd.addEventListener('click', (event) => {
  const target = event.target;

  if(target.classList.contains('modal__close') ||  target === modalVideoAdd)
    modalVideoAdd.classList.add('hide');
});
