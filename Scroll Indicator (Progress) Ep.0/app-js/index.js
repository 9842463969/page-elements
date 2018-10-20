window.addEventListener('load', function () {

	var scrollLine = document.querySelector(".scroll-indicator");


	function fillScroll() {
		// Высота (в пикселях) браузера окно просмотра
		const windowHeight = window.innerHeight;
		// Высота элемента в пикселах, включая пространство между содержимым элемента и его границей 
		const fullHeight = document.body.clientHeight;
		// Количество пикселей, которые в настоящий момент прокручивается в документе по вертикали
		const scrolled = window.scrollY;
		// Количество проскроленных пикселей
		const percentScrolled = (scrolled / (fullHeight - windowHeight) * 100);
		// Присваиваем данное значение для изменения высоты элемента scrollLine
		scrollLine.style.width = `${percentScrolled}%`;
	}


	// событие скролла окна
	window.addEventListener('scroll', debounced(fillScroll));


	// для более плавного скролла
	function debounced(func, wait = 15, immediate) {
		var timeout;
		return function () {
			var context = this, args = arguments;
			var later = () => {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args)
		}
	}



})