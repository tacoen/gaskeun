document.addEventListener('DOMContentLoaded', function () {


	var x = document.querySelectorAll("[data-height]");
	var i; for (i = 0; i < x.length; i++) {
		x[i].style.height = x[i].getAttribute('data-height');
	}
	

	var sections = document.querySelectorAll("[class*='section-']")
	var this_done = [];
	sections.forEach(function(s) {

		sc = s.classList.value;
		var re = /(.+)(section-(\w+\s?))(.+)?/gm;
		var shadow = sc.replace(re, '$2').trim();
		
		if (! this_done.includes(shadow)) {

			this_done.push(shadow);

			if (
				(shadow != 'section-main') &&
				(shadow != 'section-floats')
				){
				/* 
				 * section-main use :root 
				 * section-floats: basicaly is hidden sections
				 */
				
				construct_SectionPallete("."+shadow);
				gas('.'+shadow).addClass('hsl-pal');
			}
		}
		
	})
	
	
	construct_SectionPallete(".sandbox");


});

/* ------------------------------------------------------------------- */

var html = document.querySelector('html')
var body = document.querySelector('body')






function ga_topshadow(query, remove_element=false) {
	var ele = gas(query);

	if (ele) {
		
		var shadow = gas('.g-top-shadow');
		
		if (shadow) {
			
			if (remove_element) {
				shadow.hide();
				gas('html').removeClass('has-top-shadow');
			} else {
				shadow.show('block');
				gas('html').addClass('has-top-shadow');
			}
			
		} else {

			var page = document.querySelector("#g-page-surround");
			var shadow_div = document.createElement("div");
			page.prepend(shadow_div);
			if (! shadow_div.classList.contains('g-top-shadow')) {
				shadow_div.classList.add('g-top-shadow');
				shadow_div.style.height = ele.height()+'px';
			}
			
		}
	}
}



/* Gas un-ready ----------------------------------------------------- */


function ga_modular_slideshow(ele,sec=15) {

	var r = gas(ele); 

	if (r) {
		var sec = r.data('delay')
		window.value = 0
		console.log(sec);
		setInterval(function(){ 
			ga_modular_slideshow_func(r);
		}, sec*1000 );
	}
}

function ga_modular_slideshow_func(r) {
	var images = r.data('image').split(",");
	window.value = window.value + 1;
	if (window.value == images.length) { window.value = 0; }
	console.log(window.value,images[window.value])
	r.style('backgroundImage','url('+images[window.value]+')');
}

function ga_breakpoint_tagging() {

	if (window.innerWidth < gaskeun_media_breakpoint.tablet) { media='ga-mobile'; }
	if (window.innerWidth <= 520) { media='ga-small'; }
	if (window.innerWidth <= gaskeun_media_breakpoint.mobile) { media='ga-small'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.tablet) { media='ga-tablet'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.desktop) { media='ga-desktop'; }
	if (window.innerWidth >= gaskeun_media_breakpoint.wide) { media=false; }
	
	html.classList.remove('ga-small');
	html.classList.remove('ga-desktop');
	html.classList.remove('ga-tablet');
	html.classList.remove('ga-mobile');
	
	if (media) { html.classList.add(media); }
}

function ga_fixtop(query,shadow=false) {
	
	var f = document.querySelector(query);
	
	if (f){
		
		/* init */
		// f.style.width = f.offsetWidth+'px';
		
		var top = f.offsetTop;
		var ori_w = f.offsetWidth;

		var style={
			position: f.style.position,
			top: f.style.top,
			width: f.style.width
		};
		
		if (shadow) { ga_topshadow(query) }
		
		/* scroll event */
		window.addEventListener('scroll', (event) => {	
			var scroll = this.scrollY;
			if (scroll > top) {
				f.style.position = 'fixed';
				f.style.top = '0px';
				
				var p = f.parentNode.closest('section');

				f.style.width=ori_w+'px';
				f.classList.add('pinned')
				
				if (!shadow) { ga_topshadow(query) }
				
			} else {
				
				//console.log('unpin',f);
				f.classList.remove('pinned');
				f.style.position = style.position;
				f.style.top = style.top;
				f.style.width = style.width;

				if (f.classList.contains('dock-top')) {
					ga_topshadow(query,true);
				}
			}
		});

		return true;

		
	} else {
		
		return false;

	}
}	


function ga_attr(element,what,value=false) {
	var val = element.getAttribute('data-'+what);
	
	if (element.getAttribute('data-'+what)===null) {
		element.setAttribute('data-'+what,value);
	} 

	return element.getAttribute('data-'+what);
		
}

function gasearch_toggle(th) {
	
	event.preventDefault()
	var gas = document.querySelector('#ga-search-box');
	ga_attr(th,'html',th.innerHTML)
	
	if (! gas.classList.contains('active')) {
		gas.classList.add('active')
		th.innerHTML = '<i class="fa fa-chevron-right"></i>'
	} else {
		gas.classList.remove('active')
		th.innerHTML = ga_attr(th,'html')
	}
}

/* ---------------------------------------------------------------------------- */



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



document.addEventListener('DOMContentLoaded', function () {

	ga_breakpoint_tagging();

	var f = ga_fixtop('.fix-at-top',true);
	var ct = ga_fixtop('#g-container-top',true); 
	var dt = ga_fixtop('.dock-top',false); 

	ga_modular_slideshow('.modular-row.showcase');

});

window.addEventListener('resize', function() {

	ga_breakpoint_tagging();

	var f = ga_fixtop('.fix-at-top',true);
	var ct = ga_fixtop('#g-container-top',true); 
	var dt = ga_fixtop('.dock-top',false); 


});