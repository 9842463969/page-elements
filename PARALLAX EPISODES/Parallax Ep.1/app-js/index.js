window.addEventListener('load', function () {
/**=======================================
 * MOSCA CODE SNIPPETS
 ======================================*/
	function parallax() {
		window.addEventListener('scroll', function () {
			// Количество пикселей, которые в настоящий момент прокручивается по вертикальной оси Y
			var topPosition = this.pageYOffset; 
			// Коллекция (массив) элементов с классом "prlx__item" записываем в переменную
			var prlxLayers = document.querySelectorAll('.prlx__item');
			var layer, scrollSpeed, positionY;
			// Используя цикл обходим все элементы с классом "prlx__item"
			for(var i = 0; i < prlxLayers.length; i++) {
				// Присваиваем переменной элемент "prlx__item" который сейчас обходится циклом
				layer = prlxLayers[i];
				// Присваиваем переменной значение записанное в аттрибуте элемента "prlx__item"
				scrollSpeed = layer.getAttribute('data-speed');
				// Вычилсяем значение, на которое мы будем передвигать элемент при прокрутке вниз
				var positionY = -(topPosition * scrollSpeed / 100);
				// С помощью метода style присваиваем наше значение css свойству translate3d по оси Y
				layer.style.transform = `translate3d(0px, ${positionY}px, 0px)`;
			}
		})
	}
	// После загрузки <body> применяем нашу функцию
	document.body.onload = parallax();
 //======================================
})
