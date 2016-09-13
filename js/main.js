$(".hidden-button").on("click", function() {
		
		$("nav ul").slideToggle();
	});	// Кнопка появления скрытого меню

// ОТКРЫТИЕ СКРЫТОГО БЛОКА ОБЪЕКТОВ

$(".showMore").on("click", function() {
	$(this).css( {'display':'none'} );
	$('.hidden-block').css( {'display':'flex'} );
	$('.hide').css( {'display':'block'} );
});

$(".hide").on("click", function() {
	$(this).css( {'display':'none'} );
	$('.hidden-block').css( {'display':'none'} );
	$('.showMore').css( {'display':'block'} );
});

// 

