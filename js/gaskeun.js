var ghtml = document.getElementsByTagName('html')[0]
var ghtml_origclasslist = ghtml.classList;


function hasClass(className) {
	var c = document.getElementsByClassName(className).length
    /*
	console.log(className,c)
	*/
	return (c > 0)
}

function gaskeun_fix() {
	
	if (hasClass('ga-features')) {
		var div = document.getElementById('g-feature');
		if (! div.classList.contains('flush')) { div.className += ' flush ' }
	}

	if (hasClass('ga-showcase')) {
		var div = document.getElementById('g-showcase');
		if (! div.classList.contains('flush')) { div.className += ' flush ' }
	}
}

function gaskeun_breakpoint() {

	if (window.innerWidth < gaskeun_media_breakpoint.tablet) { media='gaskeun-mobile'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.tablet) { media='gaskeun-tablet'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.desktop) { media='gaskeun-desktop'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.wide) { media=false; }
	ghtml.classList= ghtml_origclasslist
	if (media) { ghtml.classList.add(media); }
}


function gaskeun_deck_top(id) {

	var e = document.getElementById(id);
	
	if (e) {

		var body = document.body;
		var aa = document.getElementsByClassName('g-top-shadow')
		var shadow = document.createElement("div");
		
		if(!aa[0]) {
			body.prepend(shadow);
		}
		
		if (! shadow.classList.contains('g-top-shadow')) {
			shadow.className += ' g-top-shadow';
			shadow.style.height = e.offsetHeight+'px';
		}
		
		window.addEventListener('scroll', (event) => {
			var scroll = this.scrollY;

			if (scroll > e.offsetHeight) {
				e.classList.add('scrolled');
			} else {
				e.classList.remove('scrolled');
			}
		});

	}
}

function deck_toper() {

	if (hasClass('deck-top')) {
		var element = document.getElementsByClassName('deck-top');
		document.body.style.marginTop = element[0].offsetHeight + 'px';
		if (! document.body.classList.contains('has-decktop')) {
			document.body.className += ' has-decktop'
		}
		
		deck_scroll();
		
		/*
		element[0].style.height = element[0].offsetHeight + 'px';
		*/
	}
}

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

	gaskeun_breakpoint();
	gaskeun_deck_top('g-top');
	gaskeun_fix();
	
});

window.addEventListener('resize', function() {

	gaskeun_breakpoint();
	gaskeun_deck_top('g-top');

});