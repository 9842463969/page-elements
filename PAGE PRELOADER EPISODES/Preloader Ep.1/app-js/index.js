function animateCounter(el, start, end, duration, colorEl) {
	/* переменные:
	- 1. Элемент который мы будем увеличивать
	- 2. Элемент, у которого будет увеличиваться ширина
	- 3. range - разница между начальной и конечной позицией
	- 4. minTimer - минимальное значение длительности анимации
	- 5. stepTime - вычесление одного шага
	- 6. startTime - начальное значение времени
	- 7. endTime - конечное значение времени
	- 8. timer - переменная которое в качестве выражения будет присвоена функция run();
	- 9. функция run() - внутри которой происходит вычисления значения переменной - value. После вычисления значения value записываем ее внутрь переменной (1) - element.innerHTML = value, а также присваиваем ее переменной (2) вместо ширины - colorElement.style.width.
	- 10. Если value станет равным параметру функции end, то очищаем таймер
	*/

	var element = document.querySelector(el);
	var colorElement = document.querySelector(colorEl);
	var range = end - start;
	var minTimer = 50;
	var stepTime = Math.abs(Math.floor(duration / range));
	stepTime = Math.max(stepTime, minTimer);

	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		element.innerHTML = value;
		colorElement.style.width = value + "%";
		if (value == end) {
			clearInterval(timer);
		}
	}
	// - 11. Присваиваем переменной таймер с параметрами
	timer = setInterval(run, stepTime);
	run();
}

/* - 12. Вызываем функцию, которую мы описали выше и записываем в нее необходимые аргументы:
- элемент который будет увеличиваться
- начальное значение
- конечное значение
- длительность анимации
- элемент у которого будет увеличиваться ширина
*/
animateCounter(".preloader-counter", 0, 100, 6000, ".preloader");

