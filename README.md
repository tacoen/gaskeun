# Gaskeun!

Gaskeun is Grav Gantry 5 Theme for your new website. Base on Hydrogen, the default Gantry 5 theme.
Gaskeun loaded with more options.

<div class='fit'>
<img src='thumbnail.jpg' alt='Gasken!'>
</div>

<div class='images'>
<img src='admin/preset/default.png' height='160'>
<img src='admin/preset/nocolor.png' height='160'>
<img src='admin/preset/slate.png' height='160'>
</div>

## Key Features

* Sass convert hexcolor to hsl
* Use css3 var(), dynamic theme var
* css3 var() provide color pallete, triadic, analogus, complement, and 8 level of shade.
* Each html sections is constructed styles
* Sass Skeleton 

## Gantry Particles 

* branding
* cards
* carousel
* and a dummy particles for theme developer

## Themes Options

### Color Tools 

#### Instant Preview
<img src='admin/bucket/preview.png'>

#### Color Alternated Tools
<img src='admin/bucket/opt.png'>

### CSS/SASS Modules
<img src='admin/bucket/opt2.png'>

### Varitions Bind
<img src='admin/bucket/opt3.png'>

### Floats

<img src='admin/bucket/floats.png'>

Floats('#g-floats') avaliable as sections, or when you use 'ga-floats' as CSS Classess.  
Floats section is basicly a zero width and height sections, so every block inside floats section should use `position: fixed` or `position: absolute`

### Owner information

<img src='admin/bucket/theme-options.png'>

To lock the *owner information*, open `blueprint.yaml` on your theme folder, set `readonly` to `true` under `owner` field

```
    owner:
        size: long
        type: textarea
        size: large
        label: Owner Information 
        default: owner information
        readonly: true
```


```
<meta name="owner" content="Niki cookies corner - It's a relieve">
```

## Grav Templates

* long document with toc
* gallery
* portfolio/staff list


## Tips

To copy this theme theme

Use devtools plugins:

```
	bin/plugin devtools newtheme
```

Choose a template type: **copy** Copy another theme
 
Then:
 
```
	$ find ./ -type f -exec sed -i 's/poko/newtheme/g' {} \;
	$ find ./ -type f -exec sed -i 's/poko/newtheme/g' {} \;
	$ find ./ -type f -exec sed -i 's/poko/NEWTHEME/g' {} \;
```

While several 'gaskeun' remain intact.
