var ghtml = document.getElementsByTagName('html')[0]
var ghtml_origclasslist = ghtml.classList;


function page_lightbox(img) {

	var modal = document.getElementById('page-gallery-modal');
	
	if (!img) {
		modal.children[0].innerHTML = ''
		modal.classList.remove('show'); 
	} else {
	
		if (! modal.classList.contains('show')) { 
			modal.children[0].innerHTML="<img src='"+img+"'>"
			modal.classList.add('show'); 
		} else {
			modal.children[0].innerHTML = ''
			modal.classList.remove('show'); 
		}
	}
	
}	

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

function gasearch_toggle() {
	
	event.preventDefault()
	
	var ga = document.getElementById('ga-searchbox');
	if (! ga.classList.contains('active')) {
		ga.classList.add('active')
	} else {
		ga.classList.remove('active')
	}
}

function gaskeun_breakpoint() {
	if (window.innerWidth < gaskeun_media_breakpoint.tablet) { media='gaskeun-mobile'; }
	if (window.innerWidth <= 520) { media='gaskeun-small'; }
	if (window.innerWidth <= gaskeun_media_breakpoint.mobile) { media='gaskeun-small'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.tablet) { media='gaskeun-tablet'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.desktop) { media='gaskeun-desktop'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.wide) { media=false; }
	
	ghtml.classList.remove('gaskeun-small');
	ghtml.classList.remove('gaskeun-desktop');
	ghtml.classList.remove('gaskeun-tablet');
	ghtml.classList.remove('gaskeun-mobile');
	
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

var dctop = 0

function deck_toper() {

	if (hasClass('deck-top')) {
		

		var e = document.getElementsByClassName('deck-top');
		var h = e[0];

		/*
		var element = document.getElementsByClassName('deck-top');
		document.body.style.marginTop = element[0].offsetHeight + 'px';
		*/

		if (! document.body.classList.contains('has-decktop')) {
			document.body.className += ' has-decktop'
		}
		
		if (!dctop) { dctop = h.offsetTop; }

		window.addEventListener('scroll', (event) => {

			var scroll = this.scrollY;

			if (scroll > dctop) {
				h.classList.add('pinned')
				h.style.top = 0;
			}

			if (scroll < dctop) {
				h.classList.remove('pinned')
				h.style.top = dctop;
			}
		});
		
		/*
		element[0].style.height = element[0].offsetHeight + 'px';
		*/
	}
}

document.addEventListener('DOMContentLoaded', function () {

	gaskeun_breakpoint();
	gaskeun_deck_top('g-top');
	gaskeun_fix();
	deck_toper();
	
});

window.addEventListener('resize', function() {

	gaskeun_breakpoint();
	gaskeun_deck_top('g-top');
	deck_toper();

});