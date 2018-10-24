window.addEventListener('load', function () {

	var scrollBtn = document.querySelector('.btn-top'); // Наша кнопка "Вверх"
	var scrollSection = document.querySelector('.header'); // Элемент, высоту которого мы будем использовать
	var scrollSectionHeight = scrollSection.offsetHeight; //Высота элемента
	var scrollPosition = window.scrollY; // Количество пикселей при скролле по вертикали

	/**
	 * 1. Создаем событие скролла окна
	 * 2. Присваиваем переменной scrollPosition количество пикселей при скролле по вертикали
	 * 3. Если scrollPosition больше высоты первой секции scrollSectionHeight, добавляем класс , если нет то удаляем класс
	 */

	window.addEventListener('scroll', () => {
		scrollPosition = window.scrollY;
		if (scrollPosition > scrollSectionHeight) {
			scrollBtn.classList.add('btn-top_show');
		} else {
			scrollBtn.classList.remove('btn-top_show');
		}
	})

	/**
	 * 1. Создаем событие клика на кнопку "Вверх"
	 * 2. Сбрасываем дефолтное свойство 
	 * 3. Используем метод плагина и указываем скорость прокрутки
	 */

	scrollBtn.addEventListener('click', (e) => {
		e.preventDefault();
		smoothScroll.scrollTop(800);
	})



});