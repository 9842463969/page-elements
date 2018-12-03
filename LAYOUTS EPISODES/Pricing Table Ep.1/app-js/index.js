/**==============================
 * MOSCA CODE SNIPPETS
 ==============================*/
//  Переменные
var btnList = document.querySelectorAll('.tabs-control'),
	contentList = document.querySelectorAll('.tabs-content');
// Проходимся циклом по всем кнопкам
for (let i = 0; i < btnList.length; i++) {
	// Для i-ой кнопки создаем обраюотчик события - клика
	btnList[i].addEventListener('click', function () {
		// Очищаем все кнопки и контент таба от активного класса
		contentList.forEach(element => element.classList.remove('tabs-content_current'));
		btnList.forEach(element => element.classList.remove('tabs-control_current'));
		// Добавляем активный класс для нажатой i-ой кнопки и i-ого контента таба 
		contentList[i].classList.add('tabs-content_current')
		btnList[i].classList.add('tabs-control_current')
	})
}