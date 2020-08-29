function gasken_usetree() {
	
	var tree = document.querySelectorAll('ol.ga-tree a:not(:last-child)');
	for(var i = 0; i < tree.length; i++){
		tree[i].addEventListener('click', function(e) {
			var parent = e.target.parentElement;
			var classList = parent.classList;
			if(classList.contains("open")) {
				classList.remove('open');
				var opensubs = parent.querySelectorAll(':scope .open');
				for(var i = 0; i < opensubs.length; i++){
					opensubs[i].classList.remove('open');
				}
			} else {
				classList.add('open');
			}
		});
	}
}

var ghtml = document.getElementsByTagName('html')[0]
var ghtml_origclasslist = ghtml.classList;


document.querySelectorAll('.g-offcanvas-toggle')[0].innerHTML="<i class='"+gaskeun_toogle_icon+"'></i>";

function combineArray(array1, array2) {
  return [...array1, ...array2];
}

function add_class(query,classname) {
	var e = document.querySelectorAll(query)
	for (i=0; i < e.length; ++i) { 
		if (! e[i].classList.contains(classname)) {  e[i].classList.add(classname); }
	}
}

function remove_class(query,classname) {
	var e = document.querySelectorAll(query)
	for (i=0; i < e.length; ++i) { 
		if (e[i].classList.contains(classname)) {  e[i].classList.remove(classname); }
	}
}


/* ==================================================== */

function page_lightbox(img,title='',text='') {

	var modal = document.getElementById('page-gallery-modal');
	
	if (!img) {
		modal.children[0].innerHTML = ''
		modal.classList.remove('show'); 
	} else {
	
		if (! modal.classList.contains('show')) { 
			var content = "<figure><img src='"+img+"'>";
			if (title) {
				content += "<div class='caption'><h5>"+title+"</h5>"+"<p>"+title+"</p></div>"
			}
			content += "</figure>"
			modal.children[0].innerHTML=content
			modal.classList.add('show'); 
		} else {
			modal.children[0].innerHTML = ''
			modal.classList.remove('show'); 
		}
	}
	
}	

function hasClass(className) {
	var c = document.getElementsByClassName(className).length
	return (c > 0)
}

function gaskeun_fix() {
	
	if (hasClass('ga-features')) {
		var div = document.getElementById('g-feature');
		if (! div.classList.contains('flush')) { div.classList.add('flush') }
	}

	if (hasClass('ga-showcase')) {
		var div = document.getElementById('g-showcase');
		if (! div.classList.contains('flush')) { div.classList.add('flush') }
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
		var aa = document.querySelectorAll('.g-top-shadow');
		var shadow = document.createElement("div");
		
		if(!aa[0]) {
			body.prepend(shadow);
		}
		
		if (! shadow.classList.contains('g-top-shadow')) {
			shadow.classList.add('g-top-shadow');
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
			document.body.classList.add('has-decktop')
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