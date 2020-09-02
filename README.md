# Gaskeun!

![gasken - speed racer](screenshot.jpg)

Gaskeun is Grav Gantry 5 Theme for your new website. Base on Hydrogen, the default Gantry 5 theme.
Gaskeun loaded with more options.

<div class='images'>
<img src='admin/images/default.png' height='160'>
<img src='admin/images/preset1.png' height='160'>
<img src='admin/images/preset2.png' height='160'>
<img src='admin/images/preset3.png' height='160'>
</div>

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

<style type="text/css"> 
.images { display: flex; }
.images > img { padding: .25rem; }
</style>
