"use strict";

class MenuItem {
	constructor(href, className, src, title){
		this.href = href;
		this.className = className;
		this.src = src;
		this.title = title;
	}
	render(){
		return `<a href="${this.href}" class="${this.className}"><img src="${this.src}" alt="">
		<p>${this.title}</p></a>`;
	}
}
new MenuItem('index.php', 'main-header-menu-wrp-link', '/img/icons/home.svg', 'Home');

class Menu {
	constructor(id, className, items) {
		this.className = className;
		this.id = id;
		this.items = items;
	}
		render(){
		let result = `<nav class="${this.className}" id="${this.id}">`;
			for (let i = 0; i < this.items.length; i++){
				//if (this.items[i] instanceof MenuItem){
					result += this.items[i].render();
				//}
			}
			result += `</nav>`;
			return result;
	}
}

class Btn {
	constructor(href, className, src, title){
		this.href = href;
		this.className = className;
		this.src = src;
		this.title = title;
	}
	render(){
		return `<a ${this.href == "" ? '': `href="this.href"` }class="${this.className}"><img src="${this.src}" alt=""><span>${this.title}</span></a>`;
	}
}

function someFunc() {
	var w = window.innerWidth;
	  return w < 769
  };

const loadMenu = () => {
  	let menu1 = document.getElementById('mainMenu2');
  	let arr = []

	if(someFunc())
  // 		arr.push(new MenuItem('main-mob.html', 'main-header-menu-wrp-link ripple light', '/img/icons/home.svg', 'Home')) 
	// else
		arr.push(new MenuItem('index.html', 'main-header-menu-wrp-link ripple light', 'img/icons/home.svg', 'Home')) 
  	arr.push(new MenuItem('index.html', 'main-header-menu-wrp-link ripple light', 'img/icons/star.svg', 'почему мы'))
  	arr.push(new MenuItem('services.html', 'main-header-menu-wrp-link ripple light', 'img/icons/handshake1.svg', 'услуги'))

  	if(someFunc())
  	arr.push(new Btn('', 'main-header-button ripple light', 'img/icons/phone-arrow.svg', 'заказать звонок'))
	
	arr.push(new MenuItem('questions.html', 'main-header-menu-wrp-link ripple light', 'img/icons/question.svg', 'вопросы'))
	arr.push(new MenuItem('contacts.html', 'main-header-menu-wrp-link ripple light', 'img/icons/map-small.svg', 'контакты'))
	/* arr.push(new MenuItem('/pages-mob/contacts-mob.html', 'main-header-menu-wrp-link', '/img/icons/map-small.svg', 'мобилка')) */

	if(!someFunc()){
		arr.push(new Btn('', 'main-header-button ripple light add__zv add__ad', 'img/icons/phone-arrow.svg', 'заказать звонок'))
	
	}
	let menu = new Menu('main-header-wrp', 'main-header-menu-wrp', arr);
	if(window.location.hash == '#main-mob')
		menu1.classList.add('hide')
	else
		menu1.classList.remove('hide')
	menu1.innerHTML = menu.render();
};
loadMenu()

