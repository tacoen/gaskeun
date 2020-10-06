var poko_style = document.createElement('style');
poko_style.innerHTML='';

var poko_pallete =
	"--bg: hsl(var(--bg-h), var(--bg-s), var(--bg-l));"+
	"--bg-light: hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 15%));"+
	"--bg-dark: hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) - 15%));"+
	"--bg-light-1: hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 15%/2));"+
	"--bg-dark-1: hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) - 15%/2));"+
	"--bg-a1: hsl( calc(var(--bg-h) + 15), var(--bg-s), var(--bg-l));"+
	"--bg-a2: hsl( calc(var(--bg-h) - 15), var(--bg-s), var(--bg-l));"+
	"--bg-t1: hsl( calc(var(--bg-h) + 120), var(--bg-s), var(--bg-l));"+
	"--bg-t2: hsl( calc(var(--bg-h) + 240), var(--bg-s), var(--bg-l));"+
	"--bg-co: hsl( calc(var(--bg-h) + 180), var(--bg-s), var(--bg-l));"+
	"--white: hsl(var(--bg-h), var(--bg-s), 5%));"+
	"--black: hsl(var(--bg-h), var(--bg-s), 95%));";

function percent(n) {
	return Math.round(n*100)+"%"
}

function inspect(sourceNode) {
	const computedStyle = window.getComputedStyle(sourceNode);
	Array.from(computedStyle).forEach(
		key => console.log(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key))
	)
}

function getrootval(query) {
	
	var e = document.querySelector(query);
	
	if (e) {
	
		var c = getComputedStyle(e)
		var cv = w3color(c.backgroundColor);
		var h = cv.hue
		var s = cv.sat
		var l = cv.lightness	

		//console.log(h,s,l);
	

		e.style.setProperty('--bg-h',h)	
		e.style.setProperty('--bg-s',percent(s))	
		e.style.setProperty('--bg-l',percent(l))	

		if (l < 0.5) {
			e.style.setProperty('--txt', 'hsl('+h+','+percent(s)+',95%)');
		} else {
			e.style.setProperty('--txt', 'hsl('+h+','+percent(s)+',5%)');
		}
		
	}
	
}

//poko_style.innerHTML=poko_style.innerHTML.concat(getrootval('header'));

/*
getrootval('footer');
getrootval('.section-header');
getrootval('.section-navigation');
getrootval('.section-offcanvas');
*/
//getrootval('.section-main');

//console.log(poko_style.innerHTML);


// Get the first script tag
var ref = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(poko_style, ref);


/*
var x = document.querySelectorAll("[data-height]");
var i; for (i = 0; i < x.length; i++) {
	x[i].style.height = x[i].getAttribute('data-height');
}
*/

//document.addEventListener('touchstart', onTouchStart, {passive: true});