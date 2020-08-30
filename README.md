# Gaskeun!

![gasken - speed racer](screenshot.jpg)

Gaskeun is Grav Gantry 5 Theme for your new website. Base on Hydrogen, the default Gantry 5 theme.
Gaskeun loaded with more options.

![gaskeun - preset1](admin/images/default.png| width=100)
![gaskeun - preset2](admin/images/preset1.png| width=100)
![gaskeun - preset3](admin/images/preset2.png| width=100)
![gaskeun - preset4](admin/images/preset3.png| width=100)


### Tips

To copy this theme theme

Use devtools plugins:

```
	bin/plugin devtools newtheme
```

Choose a template type: **copy** Copy another theme
 
Then:
 
```
	$ find ./ -type f -exec sed -i 's/gasken/newtheme/g' {} \;
	$ find ./ -type f -exec sed -i 's/Gasken/newtheme/g' {} \;
	$ find ./ -type f -exec sed -i 's/GASKEN/NEWTHEME/g' {} \;
```

While several 'gaskeun' remain intact.
