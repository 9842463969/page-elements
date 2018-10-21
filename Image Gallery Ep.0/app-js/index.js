window.addEventListener('load', function () {

	// 1.Переменная, хранящая текущую выбранную картинку
	var currentImg  = document.querySelector('#current');
	// 2.Коллекция (массив) картинок, лежащих внутри контейнера
	var imageList = document.querySelectorAll('.image-inner img');

	// 3.По дефолту выбранной картинке #current даем прозрачность
	imageList[0].style.opacity = 0.5;

	// functions
	function toggleImage(event) {
		// 6.Циклом проходимся по всем картинкам и выставляем прозрачность = 1
		imageList.forEach(image => image.style.opacity = 1);
		// 7.Записываем в атрибут переменной хранящей выбранную картинку, адрес нажатой картинки 
		currentImg.src = event.target.src;
		// 8.Для эффекта появления добавляем переменной класс .fade
		currentImg.classList.add('fade');
		// 9.Используя таймер удаляем данный класс после 500ms
		setTimeout(() => {
			currentImg.classList.remove('fade');
		}, 500);
		// 10.Нажатой картинке выставляем прозрачность
		event.target.style.opacity = 0.5;
	}
	
	// events
	// 5.Создаем обработчик события при клике на картинку с помощью цикла
	imageList.forEach(image => image.addEventListener('click', toggleImage))
})