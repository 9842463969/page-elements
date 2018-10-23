window.addEventListener('load', () => {
	// variables
	let headerBar = document.querySelector('.header-bar');
	let hedaerNav = document.querySelector('.header-nav');
	let headerNavClose = document.querySelector('.header-close');
	// functions
	function openNav() {
		hedaerNav.classList.toggle('header-nav_open');
	}
	function closeNav() {
		hedaerNav.classList.remove('header-nav_open');
	}
	// events
	headerBar.addEventListener('click', openNav);
	headerNavClose.addEventListener('click', closeNav);

	// END SCRIPT
});