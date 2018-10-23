window.addEventListener('load', function () {
	// start code
	// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.querySelector('.nav').style.padding = "1rem 1.4rem";
			document.querySelector('.nav-logo').style.fontSize = "2rem";
		} else {
			document.querySelector('.nav').style.padding = "3rem 1.4rem";
			document.querySelector('.nav-logo').style.fontSize = "3rem";
		}
	}



	// end code
})