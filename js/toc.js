/*
 * Dynamic Table of Contents script
 * by Matt Whitlock <http://www.whitsoftdev.com/>
 *
 * modified for gasken
 *
 */

var n = 0

function createLink(href, innerHTML) {
	var a = document.createElement("a");
	a.setAttribute("href", href);
	a.setAttribute('onclick','javascript:lick(this);');
	a.innerHTML = innerHTML;
	return a;
}

function lick(ele) {
	var al = document.querySelectorAll('.active')
	
	for(var i = 0; i < al.length; i++){
		al[i].classList.remove('active');
	}

	var l = ele.attributes.href.value.split('.');
	var q = "a[href='"+l[0]+"']"

	var c = document.querySelector(q).parentNode	
	c.classList.add('active')
	
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
			var section = i2 + "." + i3 + "." + i4;
			node.id = "section" + section;
			toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h3") {
			++i3, i4 = 0;
			if (i3 == 1) toc.lastChild.appendChild(document.createElement("ol"));
			var section = i2 + "." + i3;
			node.id = "section" + section;
			toc.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h2") {
			++i2, i3 = 0, i4 = 0;
			var section = i2;
			node.id = "section" + section;
			toc.appendChild(h2item = document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
	}
}