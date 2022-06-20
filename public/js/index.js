const hamburger = document.querySelector('.hamburger');
const center_menu = document.querySelector('.center_menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle('active');
	center_menu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.menu-item');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
	hamburger.classList.remove('active');
	center_menu.classList.remove('active');
}
