loadMenu()
function someFunc() {
	var w = window.innerWidth;
	  return w < 480
	
  };
  
  const loadSlider = () => {
	if( document.querySelector('.worker-slider-wrapper') !== null){
		let position = 0;
		let slidesToShow = 4;
		if(window.innerWidth < 960)
			slidesToShow = 3
		if(window.innerWidth < 480)
			slidesToShow = 1


		const slidesToScroll = 1;
		const container = document.querySelector('.worker-slider-wrapper-container');
		const wrapper = document.querySelector('.worker-slider-wrapper');
		const track = document.querySelector('.worker-slider-wrapper-container-track');
		const btnPrev = document.querySelector('.worker-slider-wrapper-btn-prev');
		const btnNext = document.querySelector('.worker-slider-wrapper-btn-next');
		const items = document.querySelectorAll('.worker-slider-wrapper-container-track-item');
		const itemsCount = items.length;
		const itemWidth = wrapper.clientWidth / slidesToShow;


		const movePosition = slidesToScroll * itemWidth;

		items.forEach((item) => {
			item.style.minWidth = `${itemWidth}px`;
		});
		btnNext.addEventListener('click', () => {
			if(position <= -(itemsCount - slidesToShow) * itemWidth ){
				position = 0
			}else{
				const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
				position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
			}
			setPosition();
			checkBtns();
		}); 
		btnPrev.addEventListener('click', () => {
			

			const itemsLeft = Math.abs(position) / itemWidth;
			position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

			setPosition();
			checkBtns();
		});
		const setPosition = () => {
			track.style.transform = `translateX(${position}px)`;
		};
		const checkBtns = () => {

			btnPrev.disabled = position === 0;
		};

		checkBtns();
	}

	document.querySelectorAll('.reviews-content-boxclient-client-container-gradient').forEach((element, index) => {
			element.addEventListener('click', (e) => {
					let currentRew = e.target.getAttribute("data-id")	;
					console.log(e)	
					document.querySelectorAll('.review-text').forEach((element, index) => {
					if(currentRew == index){
						element.classList.remove('hide')
						document.querySelectorAll('.reviews-pagination-circle')[index].classList.add('reviews-pagination-circle-active')
					}	
					else {
						element.classList.add('hide')
						document.querySelectorAll('.reviews-pagination-circle')[index].classList.remove('reviews-pagination-circle-active')
					}
			
				});
		})
	})
	

}
// const getPage = page => {
//     window.scrollTo(0, 0);
//     const wrapp = document.getElementById('content');
//     const loading = document.getElementById('loading')
    
//     loading.classList.remove('hide');
//     wrapp.innerHTML = "";
//     const request = new XMLHttpRequest();
    
//     request.onreadystatechange = function() {
//         if(request.readyState === 4) {
        
//         if(request.status === 200) { 
//             wrapp.innerHTML = request.responseText;
//             loading.classList.add('hide');
//             loadSlider()
//             loadMenu()
//             loadModal()
//         } else {
//             //bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
//         } 
//         }
//     }
//     page == "" ? page = 'main' : page = page 
//     request.open('Get', `/pages/${page}.html`);
//     request.send();
// }
// if(window.location.hash)
//     getPage(window.location.hash.slice(1))
// else
//     if(someFunc())
//         window.location.hash = 'main-mob'
//     else
//     window.location.hash = 'main'  


// const myHashchangeHandler = function(){ 
//     getPage(window.location.hash.slice(1))
    
// } 

// if("addEventListener" in window) { 
//     window.addEventListener("hashchange", myHashchangeHandler, false); 
// } else if ("attachEvent" in window) { 
//     window.attachEvent( "onhashchange", myHashchangeHandler); 
// } 