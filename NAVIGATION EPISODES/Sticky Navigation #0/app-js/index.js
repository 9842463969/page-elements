window.addEventListener('load', function () {
	//variables
	let headerNav = document.querySelector('.header');
	let scrollPosition = window.scrollY; // количество прокрученных вниз пикселей
	let headerNavHeight = headerNav.offsetHeight; // высота элемента с учетом вертикальных полей и границ в пикселях.
	//functions
	//events
	window.addEventListener('scroll', function () {
		scrollPosition = window.scrollY;
		if (scrollPosition > headerNavHeight) {
			headerNav.classList.add('header_scrolled');
		} else {
			headerNav.classList.remove('header_scrolled');
		}
		console.log(`SCROLLED : ${scrollPosition} px`);
		
	})

	/*--------------------------------------------*\
		Если количество прокрученных вниз пикселей
		будкт больше высоты навигации, то добавим ей
		класс, если меньше удаляем класс
	 /*------------------------------------------*/


	// END
})