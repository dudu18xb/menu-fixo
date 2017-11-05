
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