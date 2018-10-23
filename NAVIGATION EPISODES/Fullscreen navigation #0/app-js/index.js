window.addEventListener('load', function () {
	// variables
	let bar = document.querySelector('.bar');
	let menu = document.querySelector('.wrap');
	// functions
	function openBar() {
		this.classList.toggle('bar_open');
		menu.classList.toggle('menu_open');
	}
	// events
	bar.addEventListener('click', openBar)

})