window.addEventListener('load', function () {
	/**========================= 
	 MOSCA CODE SNIPPETS 
	 =========================== */
	// 1 - Ищем наш элемент-гамбургер
	var bar = document.querySelector('.menu');
	// 2 - Создаем обработчик события при клике на элемент
	bar.addEventListener('click', function () {
		// 2.1 - Если элемент содержит класс 'active' и не содержит класс 'backside', то добавляем класс 'backside' к элементу
		if (this.classList.contains('active') && !this.classList.contains('backside')) {
			this.classList.add('backside');
			// 2.2 - Если элемент содержит класс 'backside', то удаляем его у элемента
		} else if (this.classList.contains('backside')) {
			this.classList.remove('backside');
			// 2.3 - Добавляем класс 'active';
		} else {
			this.classList.add('active');
		}
	})
	// ========================= 
})