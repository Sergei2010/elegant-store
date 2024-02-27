// @ts-nocheck
function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	const nav = document.querySelector('.mobile-nav');

	function closeMobileNav() {
		console.log('close');
		nav?.classList.remove('mobile-nav--open');
		mobileNavFade?.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}

	function openMobileNav() {
		nav?.classList.add('mobile-nav--open');
		mobileNavFade?.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}
	// открытьь мобильную навигацию
	navBtnOpen.onclick = openMobileNav;

	// закрыть мобилььную навигацию по кнопке
	navBtnClose.onclick = closeMobileNav;

	// закрыть мобилььную навигацию по оверлею
	mobileNavFade.onclick = closeMobileNav;
}

export default mobileNav;