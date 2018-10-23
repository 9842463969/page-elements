window.addEventListener('load', function () {
	// start code
	// variables
	let trigger = document.querySelector('.nav-trigger');
	let menu = document.querySelector('.nav-menu');
	// functions
	function openMenu() {
		this.classList.toggle('nav-trigger_opened');
		menu.classList.toggle('nav-menu_opened');
	}	
	// events
	trigger.addEventListener('click', openMenu);

	// end code
})