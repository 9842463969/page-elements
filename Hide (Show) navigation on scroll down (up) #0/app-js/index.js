window.addEventListener('load', function () {
	// start code
	// variables
	let nav = document.querySelector('.nav');
	let prevScrollpos = window.pageYOffset;
	// events
	window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			nav.style.top = "0";
		} else {
			nav.style.top = "-6.4rem";
		}
		prevScrollpos = currentScrollPos;
	}
	// end code
})