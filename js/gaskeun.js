/*
 * Gaskeun.js -- for Gakeun grav theme
 *
 */
 
// Global references



function coba() {
	console.log('he')
	var is = document.querySelectorAll('.coba .fa')
	for (i=0; i < is.length; ++i) { 
		ic = is[i]
		
		var ico = escape ( window.getComputedStyle(ic,':before').getPropertyValue('content')).replace('%u','\\').replaceAll('%22','').toLowerCase()
		
		var ain = ic.classList.value;
		
		console.log(ico)
		
		ic.innerText=ain + '=' +ico
		
	}
}


var html = document.querySelector('html')
var body = document.querySelector('body')

function ga_breakpoint_tagging() {

	if (window.innerWidth < gaskeun_media_breakpoint.tablet) { media='gaskeun-mobile'; }
	if (window.innerWidth <= 520) { media='gaskeun-small'; }
	if (window.innerWidth <= gaskeun_media_breakpoint.mobile) { media='gaskeun-small'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.tablet) { media='gaskeun-tablet'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.desktop) { media='gaskeun-desktop'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.wide) { media=false; }
	
	html.classList.remove('gaskeun-small');
	html.classList.remove('gaskeun-desktop');
	html.classList.remove('gaskeun-tablet');
	html.classList.remove('gaskeun-mobile');
	
	if (media) { html.classList.add(media); }
}

function ga_fixtop(query,shadow=false) {
	
	var f = document.querySelector(query);
	
	if (f){
		
		/* init */
		// f.style.width = f.offsetWidth+'px';
		
		var top = f.offsetTop;
		var ori_w = f.style.width
		
		if (shadow) { ga_topshadow(query) }
		
		//console.log(sec)
		
		/* scroll event */
		window.addEventListener('scroll', (event) => {	
			var scroll = this.scrollY;
			if (scroll > top) {
				f.style.position = 'fixed';
				f.style.top = '0px';
				f.style.width='100%';
				f.classList.add('pinned')
			} else {
				//console.log('unpin',f);
				f.style.width='auto';
				f.style.position = 'relative';
				f.classList.remove('pinned');
				if (shadow) {
					ga_topshadow(query,true);
				}
			}
		});

		return true;

		
	} else {
		
		return false;

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

/* ---------------------------------------------------------------------------- */


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


function ga_bottom(query) {
	
	var gb = document.querySelector(query);
	
	if (gb) {
		gb.onclick = function() {
			gb.style.opacity=0;
			gb.style.bottom='-50%'
			setTimeout( function() {
				gb.parentNode.removeChild(gb)
			},2000);
		};
	}

}	

function ga_topshadow(query, remove_element=false) {

	var ele = document.querySelector(query);
	
	if (ele) {

		var gs = document.querySelector('.g-top-shadow')
	
		if(gs) {
			
			if (remove_element) {
				gs.style.display='none';
			} else {
				gs.style.display='block';
			}
		
		} else {
			
			var shadow = document.createElement("div");
			document.body.prepend(shadow);
			if (! shadow.classList.contains('g-top-shadow')) {
				shadow.classList.add('g-top-shadow');
				shadow.style.height = ele.offsetHeight+'px';
			}
			
		}
	
	}
}

document.addEventListener('DOMContentLoaded', function () {

	ga_breakpoint_tagging();

	var f = ga_fixtop('.fix-at-top',true);
	var ct = ga_fixtop('#g-container-top',true); 
	var dt = ga_fixtop('.dock-top',false); 

	ga_bottom('#g-container-bottom');	
	
});

window.addEventListener('resize', function() {

	ga_breakpoint_tagging();

	var f = ga_fixtop('.fix-at-top',true);
	var ct = ga_fixtop('#g-container-top',true); 
	var dt = ga_fixtop('.dock-top',false); 


});