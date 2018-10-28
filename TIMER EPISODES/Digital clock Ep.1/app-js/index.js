window.addEventListener('load', function () {
	//=============CODE START=================
	var clock = document.querySelector('.clock');
	// 1 - Использя интервал обновляем время каждую секунду
	setInterval(function () {
		var now = moment();
		// 2 - Внутри скобок записываем формат, который будет показываться на экране
		var visibleTime = now.format('HH:mm:ss'); 
		// console.log(visibleTime);

		// 3 - Записываем внутрь нашего элемента полученное значение времени, которое обновляется каждую секунду
		clock.textContent = visibleTime;
	},1000)
	










	//=============CODE END=================
})