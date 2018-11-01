window.addEventListener('load', function () {
	/**========================= 
	 MOSCA CODE SNIPPETS 
	 =========================== */
	// 1 - Ищем наш элемент-гамбургер
	 var bar = document.querySelector('.bar');
	// 2 - Создаем обработчик события при клике на элемент и добавляем класс "bar_open" если есть, если нет то убираем 
	 bar.addEventListener('click', function () {
		 this.classList.toggle('bar_open');
	 })
	// ========================= 
})