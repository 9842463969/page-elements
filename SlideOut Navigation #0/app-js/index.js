window.addEventListener('load', function () {
	// variables
	let nav = document.querySelector('.nav');
	let navBar = nav.querySelector('.nav-bar');
	// functions
	function openNav() {
		nav.classList.toggle('nav_opened');
	}

	// events
	navBar.addEventListener('click', openNav);

})