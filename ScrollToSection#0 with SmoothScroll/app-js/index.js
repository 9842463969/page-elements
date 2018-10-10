window.addEventListener('load', function () {
	// start code
	// variables
	var navLinks = document.querySelectorAll('.nav-menu__link');
	var scrollToTop = document.querySelector('.top-btn');
	var sectionOne = document.querySelector('#one');
	var sectionOneHeight = sectionOne.offsetHeight; //Высота элемента
	var scrollPos = window.scrollY; // Количество пикселей при скролле по вертикали
	// events
	/**
	 * 1. Используя цикл проходимся по всем ссылкам внутри навигации
	 * 2. Сбрасываем дефолтное свойство 
	 * 3. Используем метод плагина и указываем скорость прокрутки
	 */
	navLinks.forEach(function (target) {
		target.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScroll.scrollTo(this.getAttribute('href'), 800);
		});
	});
	/**
	 * 1. Создаем событие клика на кнопку "Вверх"
	 * 2. Сбрасываем дефолтное свойство 
	 * 3. Используем метод плагина и указываем скорость прокрутки
	 */
	scrollToTop.addEventListener('click', function (e) {
		e.preventDefault();
		smoothScroll.scrollTop(800);
	})

	/**
	 * 1. Создаем событие скролла окна
	 * 2. Присваиваем переменной scrollPos количество пикселей при скролле по вертикали
	 * 3. Если scrollPos больше высоты первой секции sectionOneHeight, убираем прозрачность, если нет то оставляем прозрачность
	 */
	window.addEventListener('scroll', function () {
		scrollPos = window.scrollY;
		if (scrollPos > sectionOneHeight) {
			scrollToTop.style.opacity = '1';
		} else {
			scrollToTop.style.opacity = '0';
		}
	})
	// end code
})