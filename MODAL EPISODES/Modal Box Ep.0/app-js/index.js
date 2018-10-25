window.addEventListener('load', function () {
	//======== CODE =========

	// 1. Объявляем переменные

	var overlay = document.querySelector('.overlay');
	var modalClose = document.querySelector('.modal-close');
	var modalOpen = document.querySelector('.call-modal');

	// 2. Создаем обработчики событий
	// 2.1 - Событие клика на кнопку и появление модального окна
	modalOpen.addEventListener('click', function () {
		overlay.style.display = 'flex';
	})
	// 2.2 - Событие клика на кнопку "закрыть" у модального окна и скрытие модального окна
	modalClose.addEventListener('click', function () {
		overlay.style.display = 'none';
	})
	// 2.2 - Событие клика на область за границы модального окна, т.е. любая область экрана кроме модального окна и скрытие модального окна
	window.addEventListener('click', function (event) {
		if (event.target == overlay) overlay.style.display = 'none';
	})
	// 2.1 - Событие клика на клавишу "Escape" и скрытие модального окна
	window.addEventListener('keydown', function (event) {
		if (event.key === "Escape") overlay.style.display = 'none';
	})


	//======== CODE END =========
})