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
 	var alturacontent = $('html').height();

	$(window).scroll(function(){
		// if (($(this).scrollTop() > 186) && (alturacontent > 2116)) { **Exemplo caso tenha o bug

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

* Em alguns Monitores vai ter um bug, você verifica com quantos pixels está bulgando e realiza o ajuste
```
 var alturacontent = $('html').height();

```
