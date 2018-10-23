window.addEventListener('load', () => {
	// variables
	let toggleLists = document.querySelectorAll('.toggle-menu');
	let subMenus = document.querySelectorAll('.nav-submenu');
	let switcher = document.querySelector('.switch');
	let mainMenu = document.querySelector('.nav-menu');
	// functions
	function openMenu() {
		mainMenu.classList.toggle('nav-menu_open');
	}
	// events
	// show menu when toggle element is clicked
	switcher.addEventListener('click', openMenu)
	
 //  show submenu when li(toggle element) is clicked
	toggleLists.forEach(item => item.addEventListener('click', () =>{
		subMenus.forEach(sub => {
			if(sub.parentNode == item) {
				sub.classList.toggle('nav-submenu_open');
				return;
			} 
			sub.classList.remove('nav-submenu_open');
		})
	}))

	// delete class menu when window resize
	if (matchMedia) {
		const mq = window.matchMedia("(max-width: 600px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	// media settings
	if (matchMedia) {
		const mq = window.matchMedia("(max-width: 600px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	// media setting
	function WidthChange(mq) {
		mainMenu.classList.remove('nav-menu_open');
		subMenus.forEach( sub => sub.classList.remove('nav-submenu_open'));
		
	}
	// END SCRIPT
});