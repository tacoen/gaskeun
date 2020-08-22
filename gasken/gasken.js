function ahasClass(element, className) {
	elem = document.querySelector(element)
	console.log(elem)
	console.log(elem.classList.contains(className))
	return elem.classList.contains(className)
}


function hasClass(className) {
	var c = document.getElementsByClassName(className).length
    console.log(className,c)
	return (c > 0)
}

function deck_toper() {

	if (hasClass('deck-top')) {
		var element = document.getElementsByClassName('deck-top');
		document.body.style.marginTop = element[0].offsetHeight + 'px';
		document.body.className += 'has-decktop'
	}
	
	if (hasClass('ga-features')) {

	var div = document.getElementById('g-feature');
		if (! div.classList.contains('flush')) {
			div.className += ' flush '
		}
	}

	if (hasClass('ga-showcase')) {

	var div = document.getElementById('g-showcase');
		if (! div.classList.contains('flush')) {
			div.className += ' flush '
		}

	}
}
	

/*
	var ta = hasClass('div','ga-features');
	if (ta) {
		var h = document.getElementsByClassName('ga-features');
		var p = h[0].parentElement
		
		p.style.height = h[0].offsetHeight+'px'
		
		console.log(h)
		
		if (tt) {
			h[0].style.top = '-'+d[0].offsetHeight + 'px'
		} else {
			h[0].style.top = (p.offsetTop-24)+'px'
		}
	}
*/	

function deck_scroll() {
	window.addEventListener('scroll', (event) => {
		var scroll = this.scrollY;
		var e = document.getElementsByClassName('deck-top');
		var h = e[0];
		if (scroll > h.offsetHeight) {
			h.className = 'deck-top scrolled';
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
