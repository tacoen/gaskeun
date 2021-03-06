/*
 * base on : Dynamic Table of Contents script. by Matt Whitlock <http://www.whitsoftdev.com/>
 *
 */

var n = 0

function ga_smooth_scroll(ele) {

	event.preventDefault();

	var f = document.querySelector('#g-mainbar .dock-top');
	
	if (f) {
		var adjust = f.offsetHeight;
	} else {
		var adjust = 0;
	}
	
	var h = document.querySelector('html')
	
	if (!h.classList.contains('smooth')) {
		h.classList.add('smooth')
	}
	
	var al = document.querySelectorAll('.active')
	
	for(var i = 0; i < al.length; i++){
		al[i].classList.remove('active');
	}

	var l = ele.attributes.href.value.split('__');
	var q = "a[href='"+l[0]+"']"
	
	var t = document.querySelector(ele.attributes.href.value)
	var pad = 16 /* 1rem */
	window.scrollTo(0, t.offsetTop-pad)
		
	var c = document.querySelector(q).parentNode	
	c.classList.add('active')
	
}

function ga_usetree() {
	
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

function ga_treelink(href, innerHTML) {
	var a = document.createElement("a");
	a.setAttribute("href", href);
	a.setAttribute('onclick','javascript:ga_smooth_scroll(this);');
	a.innerHTML = innerHTML;
	return a;
}



function generateTOC(query) {

	var toc = document.querySelector(query);

	var i2 = 0, i3 = 0, i4 = 0;

	toc = toc.appendChild(document.createElement("ol"));
	
	var doc = document.querySelector('#g-main .g-content');
	
	for (var i = 0; i < doc.childNodes.length; ++i) {
		var node = doc.childNodes[i];
		var tagName = node.nodeName.toLowerCase();
		if (tagName == "h4") {
			++i4;
			if (i4 == 1) toc.lastChild.lastChild.lastChild.appendChild(document.createElement("ol"));
			var section = i2 + "__" + i3 + "__" + i4;
			node.id = "section" + section;
			toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(ga_treelink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h3") {
			++i3, i4 = 0;
			if (i3 == 1) toc.lastChild.appendChild(document.createElement("ol"));
			var section = i2 + "__" + i3;
			node.id = "section" + section;
			toc.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(ga_treelink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h2") {
			++i2, i3 = 0, i4 = 0;
			var section = i2;
			node.id = "section" + section;
			toc.appendChild(h2item = document.createElement("li")).appendChild(ga_treelink("#section" + section, node.innerHTML));
		}
	}
}

function ga_toc_init() {

	var tb = document.querySelector('.toggleable-button') 
	var tc = document.querySelector('.toggleable')
	var ts = document.querySelector('.toggleable-content')
	var tw = tc.getAttribute('data-position');
	var tl = tc.offsetWidth;
	var ta = document.querySelector('.fix-at-top')
	tb.setAttribute('active',0)

	var ori_w = ts.offsetWidth;
	tc.style.left = 0;

	if (ta) {
		tc.style.height = "calc(100% - "+ta.offsetHeight+"px)";
	}
	
	ts.style.marginLeft= tl+'px';
	ts.style.width = ori_w+'px';
	
	
	tb.onclick = function() {
		
		var a = tb.getAttribute('active')

		if (a==0) {
			tb.setAttribute('active',1)
			tb.innerHTML='<a class="toggle"><i class="fa fa-arrow-right"></i></a>';
			tc.style.left = -tl+'px';
			ts.style.marginLeft= 0;		
			ts.style.width = '100%';
			if (!ts.classList.contains('ff-width')) {
				ts.classList.add('ff-width');
			}
		} else {
			tb.setAttribute('active',0)
			tb.innerHTML='<a class="toggle"><i class="fa fa-arrow-left"></i></a>';
			tc.style.left = 0;
			ts.style.marginLeft= tl+'px'
			ts.style.width = ori_w+'px'
			if (ts.classList.contains('size-100')) {
				ts.classList.remove('size-100');
			}
		}
			
	};

	document.addEventListener('DOMContentLoaded', function () {
		generateTOC('#ga-toc');
	});

	window.addEventListener('resize', function() {

	var tb = document.querySelector('.toggleable-button') 
	var tc = document.querySelector('.toggleable')
	var ts = document.querySelector('.toggleable-content')
	var tw = tc.getAttribute('data-position');
	var tl = tc.offsetWidth;
	tb.setAttribute('active',0)

	var ori_w = ts.offsetWidth;
	tc.style.left = 0;
	ts.style.marginLeft= tl+'px';
	ts.style.width = ori_w+'px';

	});
	
}