// @ts-nocheck
function tagline() {

	const closeTaglineBtn = document.querySelector('.tagline__close');
	const tagline = document.querySelector('.tagline');

	closeTaglineBtn.onclick = function () {
		console.log(
			'click'
		);
		tagline.remove();
	};
}

export default tagline;