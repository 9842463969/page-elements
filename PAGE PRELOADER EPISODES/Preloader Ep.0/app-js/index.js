window.addEventListener('load', function () {
	// start code
	// variables
	let intro = document.querySelector('.intro')
	let introBtn = document.querySelector('.intro-btn')
	// functions
	setTimeout(() => {
		intro.classList.remove('intro_hidden');
	}, 2000);
	// fadeOut effects
	function fadeOut(el) {
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= 0.1) < 0) {
				el.style.display = "none";
			} else {
				requestAnimationFrame(fade)
			}
		})();
	}

	// add class to hide intro element
	function hideIntro() {
		intro.classList.add('intro_hidden');
		// add FadeOut effect after 3 seconds
		setTimeout(() => {
			fadeOut(intro)
		}, 3000);
	}
	// events
	introBtn.addEventListener("click", hideIntro)

	// end code
})