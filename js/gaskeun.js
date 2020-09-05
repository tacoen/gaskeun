function fixtop(query) {
	var f = document.querySelector(query);
	
	/* init */
	
	f.style.width = f.offsetWidth+'px';

	var top = f.offsetTop;
	var sec = f.parentElement.closest('section')
	
	console.log(sec)

	window.addEventListener('scroll', (event) => {	
		var scroll = this.scrollY;
		if (scroll >= top) {
			f.style.position = 'fixed';
			f.style.top = '0px';
			f.classList.add('pinned')
		} else {
			f.style.position = 'relative'
			f.classList.remove('pinned')
		}
	
	});
	
	return f.offsetWidth

}	


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


function gasearch_toggle(th) {
	
	event.preventDefault()
	
	var ga = document.getElementById('ga-searchbox');
	if (! ga.classList.contains('active')) {
		ga.classList.add('active')
		th.innerHTML = '<i class="fa fa-chevron-right"></i>'
	} else {
		ga.classList.remove('active')
		th.innerHTML = '<i class="fa fa-search"></i>'
	}
}

var ghtml = document.getElementsByTagName('html')[0]
var ghtml_origclasslist = ghtml.classList;

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

function gaskeun_container_top(id) {

	var c = document.querySelector(id);
	
	if (c) {

		if(!document.querySelector('.g-top-shadow')) {
			var shadow = document.createElement("div");
			document.body.prepend(shadow);
			if (! shadow.classList.contains('g-top-shadow')) {
				shadow.classList.add('g-top-shadow');
				shadow.style.height = c.offsetHeight+'px';
			}
		}
		
		window.addEventListener('scroll', (event) => {
			var scroll = this.scrollY;
			if (scroll > c.offsetHeight) {
				c.classList.add('scrolled');
			} else {
				c.classList.remove('scrolled');
			}
		});

	}
}


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



/* ----------------------------------------------------------- */


function hasClass(className) {
	if (document.querySelector('coba')) { 
		return true
	} else {
		return false
	}
}

function gaskeun_fix() {
	
	var gb = document.querySelector('#g-container-bottom');
	
	if (gb) {
		gb.onclick = function() {
			gb.style.opacity=0;
			setTimeout( function() {
				gb.parentNode.removeChild(gb)
			},2000);
		};
	}
	
	if (document.querySelector('ga-features')) {
		var div = document.getElementById('g-feature');
		if (! div.classList.contains('flush')) { div.classList.add('flush') }
	}

	if (hasClass('ga-showcase')) {
		var div = document.getElementById('g-showcase');
		if (! div.classList.contains('flush')) { div.classList.add('flush') }
	}
}

var mx = false;

function gaskeun_decktop() {

	var h = document.querySelector('.dock-top');

	if (h) {
		

		dctop = h.offsetTop;

		if (! document.body.classList.contains('has-docktop')) {
			document.body.classList.add('has-docktop')
		}
		
		console.log(dctop);

		window.addEventListener('scroll', (event) => {


			if (!mx) {
				var mx = h.offsetLeft;
				var mw = h.offsetWidth;
			}
			
			var scroll = this.scrollY;

			if (scroll > dctop) {
				h.classList.add('pinned')
				h.style.top = 0;
				h.style.left=mx+'px'
				h.style.width=mw+'px'				
			}

			if (scroll < dctop) {
				h.classList.remove('pinned')
				h.style.top = dctop;
				h.style.left= 0
			}
		});
		
	}
}

document.addEventListener('DOMContentLoaded', function () {


	var fw = fixtop('.fix-to-top')

	gaskeun_breakpoint();
	gaskeun_container_top('#g-container-top');
	gaskeun_fix();
	gaskeun_decktop();
	
});

window.addEventListener('resize', function() {

	gaskeun_breakpoint();
	gaskeun_container_top('#g-container-top');
	gaskeun_decktop();

});