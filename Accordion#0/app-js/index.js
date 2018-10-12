window.addEventListener('load', function () {
	// start code
	// variables
	var accordionParent = document.querySelector('.accordion');
	var accordionChild = accordionParent.querySelectorAll('.accordion-list__item');
	var accordionChildHead = accordionParent.querySelectorAll('.accordion-head')


	// functions
	function toggleAccordion() {
		//  Объявляем переменную и присваиваем ей родительский узел шапки
		var accordionItem = this.parentNode;
		// С помощью цикла проходимся по всем элементам списка
		accordionChild.forEach(child=> {
			// 2. Если родительский узел шапки равен элементу списка, то добавляем ему новый класс
			if (accordionItem == child) {
				accordionItem.classList.toggle('accordion-list__item_open');
				return;
			}
			// 1. Сначало удаляем класс открытого состояния
			child.classList.remove('accordion-list__item_open')
		})
	}
	// events
	/**
	 * 1. С помощью цикла проходимся по всем элементам(шапка) у элементов списка
	 * 2. При  клике на шапку выполняется функция
	 */
	accordionChildHead.forEach(item => item.addEventListener('click', toggleAccordion))
	// end code
})