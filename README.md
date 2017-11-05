## menu-fixo 
> Eduardo Rocha	

* Adiciona na Div Pai do menu 
```
 data-container="menu"

```

* No arquivo .js
```
$(document).ready(function (){
	// variaveis locais
	var _containerMenu = $('[data-container="menu"]');

	$(window).scroll(function(){
		if ($(this).scrollTop()> 70){
			_containerMenu.addClass('menu-fixo');
		} else{
			_containerMenu.removeClass('menu-fixo');
		}
	});
});

```

* No arquivo .css
```
.menu-fixo{
	z-index: 10;
	position: fixed;
	width: 100%;
	top: 0;
}

```
