function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function deck_toper() {
	var tt = hasClass('deck-top');
	var h = document.getElementsByClassName('deck-top');
	if (tt) {
		document.body.style.marginTop = h[0].offsetHeight + 'px';
	}
}

function deck_scroll() {
	window.addEventListener('scroll', (event) => {
		var scroll = this.scrollY;
		var e = document.getElementsByClassName('deck-top');
		var h = e[0];
		if (scroll > h.offsetHeight) {
			h.className = 'deck-top beyond';
		} else {
			h.className = 'deck-top';
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	deck_toper();
	deck_scroll();
});

window.addEventListener('resize', deck_toper);
