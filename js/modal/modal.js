  'use strict';
const loadModal = () => {
	if(document.querySelector('.add__ad')){
	const modalAdd = document.querySelector('.modal__add'), //модальное окно
	addAd = document.querySelector('.add__ad');	//кнопка
	const modalClose = document.querySelector('.modal__close')
	addAd.addEventListener('click', () => {
		modalAdd.classList.remove('hide');
	});

	modalClose.addEventListener('click', (event) =>{
	
		modalAdd.classList.add('hide');
	});
	}

	const modalzvAdd = document.querySelector('.modal__zv'), //модальное окно
	addzvAd = document.querySelector('.add__zv');	//кнопка
	const modalzvClose = document.querySelector('#modal__zv__close')
	addzvAd.addEventListener('click', () => {
		modalzvAdd.classList.remove('hide');
	});

	modalzvClose.addEventListener('click', (event) =>{
	
		modalzvAdd.classList.add('hide');
	});
}
