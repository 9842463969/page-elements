window.addEventListener('load', function () {
	// start code
	// variables
	let btnList = document.querySelectorAll('.tabs-button');
	let tabsItems = document.querySelectorAll('.tabs-item');
	// events
	for (let i = 0; i < btnList.length; i++) {
		/**
		 * 1. Используя цикл проходимся по всем элементам массива кнопок
		 * 2. При клике на кнопку создаем событие клика
		 */
		btnList[i].addEventListener('click', (event) => {
			//3. Используя цикл удаляем класс у кнопки
			for (const btnItem of btnList)
				btnItem.className = btnItem.className.replace(" tabs-button_current", "")
			//4. Используя цикл удаляем свойство display у контента вкладки 
			for (const itemContent of tabsItems)
				itemContent.style.display = itemContent.style.replace = ("block", "none");
			//5. Определяем элемент, в котором в данный момент обрабатывается событие и добавляем класс
			event.currentTarget.className += " tabs-button_current";
			//6. Для контента вклдаки добавляем свойство display и отображаем на экране
			tabsItems[i].style.display = "block";

		})

	}
	//по умолчанию выбираем кнопку с идентификатором defaultTab
	document.getElementById("defaultTab").click();
	// end code
})