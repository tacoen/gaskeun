function construct_SectionPallete(q) {
	
	if (gas(q)) {
		
	var color = gas(q).cssvar('color')
	
	if (color) {

	var c = w3color( color );
	var h = c.hue
	var s = c.sat
	var l = c.lightness	
	

	cstyle = q +" {";
	cstyle += cssvar_input("h",h+"");	
	cstyle += cssvar_input("s",percent(s));	
	cstyle += cssvar_input("l",percent(l));

	/*
	cstyle += cssvar_input("w1", "hsl(var(--h),var(--s),95%)");
	cstyle += cssvar_input("w0", "hsl(var(--h),var(--s),90%)");
	cstyle += cssvar_input("l2", "hsl(var(--h),var(--s),calc(var(--l) + 15%))");
	cstyle += cssvar_input("l1", "hsl(var(--h),var(--s),calc(var(--l) + 10%))");
	cstyle += cssvar_input("l0", "hsl(var(--h),var(--s),calc(var(--l) + 5%))");
	cstyle += cssvar_input("bg", "hsl(var(--h),var(--s),var(--l))");
	cstyle += cssvar_input("d0", "hsl(var(--h),var(--s),calc(var(--l) - 5%))");
	cstyle += cssvar_input("d1", "hsl(var(--h),var(--s),calc(var(--l) - 10%))");
	cstyle += cssvar_input("d2", "hsl(var(--h),var(--s),calc(var(--l) - 15%))");
	cstyle += cssvar_input("b0", "hsl(var(--h),var(--s),10%)");
	cstyle += cssvar_input("b1", "hsl(var(--h),var(--s),5%)");
	cstyle += cssvar_input("co", "hsl(calc(var(--h) + 180),var(--s),var(--l))");
	cstyle += cssvar_input("co-w", "hsl(calc(var(--h) + 180),var(--s),90%)");
	cstyle += cssvar_input("co-b", "hsl(calc(var(--h) + 180),var(--s),15%)");
	*/

	if (l < 0.5) {
		cstyle += cssvar_input('txt', 'var(--w0)');
		cstyle += cssvar_input('hover', 'var(--w1)');
	} else {
		cstyle += cssvar_input('txt', 'var(--b0)');
		cstyle += cssvar_input('hover', 'var(--b1)');
	}
	
	cstyle += "}";
	
	gas(q).cssConstruct(cstyle)
	
	}
	}
	
}	