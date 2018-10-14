window.addEventListener('load', function () {
	// variables
	// 1. Дата от которой начинается отсчет
	var startDate = new Date("Dec 31 2018 00:00:00").getTime();
	
	// 2. Переменные в которые мы будем записывать числа
	var timerDays = document.querySelector('.timer-days');
	var timerHourse = document.querySelector('.timer-hourse');
	var timerMinutes = document.querySelector('.timer-minutes');
	var timerSeconds = document.querySelector('.timer-seconds');



	// functions

	// 3. Функция которая будет обновлять наш таймер каждую секунду
	var timer = setInterval(()=>{

	// 4. Берем сегодняшнюю дату и время
		var todayDate = new Date().getTime();
	// 5. Вычисляем разницу между датой отсчета и сегодняшней датой
		var distance = startDate - todayDate;
	// 6. Вычисляем количество дней, часов, минут, секунд
		var days = Math.floor(distance / (1000 * 60 * 60 *24));
		var hourse = Math.floor((distance % (1000 * 60 *60 *24))/(1000 * 60 *60));
		var minutes = Math.floor((distance % (1000 * 60 *60 )) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// 7. Добавляем символ "0" если значение переменной меньше 10
		days = (days < 10) ? "0" + days : days;
		hourse = (hourse < 10) ? "0" + hourse : hourse;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

	// 8. Записываем внутрь переменных резульататы вычислении (дни, часы, минуты, секунды)
		timerDays.innerHTML = days;
		timerHourse.innerHTML = hourse;
		timerMinutes.innerHTML = minutes;
		timerSeconds.innerHTML = seconds;

	// 9. При окончании работы таймера обнуляем таймер
		if(distance < 0) clearInterval(timer);
}, 1000);






})