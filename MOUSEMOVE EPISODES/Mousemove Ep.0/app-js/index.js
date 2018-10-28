window.addEventListener('load', function () {
	var image = document.querySelector('.child');
	// Событие движение мыши
	image.addEventListener('mousemove', (e) => {
		// Координаты движения мыши по осям X и Y
		var moveX = (e.pageX * -1 / 20) * 0.3;
		var moveY = (e.pageY * -1 / 20) * 0.3;
		// Изменение позиции фона на расстояние равное координатам движения мыши по оси X и Y
		image.style.backgroundPositionX = `${moveX}px`;
		image.style.backgroundPositionY = `${moveY}px`;
	})

})
