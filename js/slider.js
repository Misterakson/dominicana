$(document).ready(function(){

	// Открытие слайдов
	$('.open-photo').click(function(enent){
		event.preventDefault();
		var id = $(this).attr('href').slice(1);
		$(this).next('.modalDialog').addClass('open-popup-image animated fadeIn');
		
		$('#'+id).children('.max-img-wrapper').addClass('animated zoomIn');

		var height = window.screen.availHeight;

		// $(this)
	});

	// закрытие окна
	$(document).click(function(event){

		var element = event.target;
		if($('.max-img-wrapper').is(event.target)){
			$('.modalDialog').removeClass('open-popup-image');
		}

	});


	// Перелистывание слайдов 
	$('.control-arrows').click(function(){


		var id = $(this).closest('.modalDialog').attr('id');

		var numberId = id.slice(9);
		
		if($(this).hasClass('right-arrow')){
			var resultNum = parseInt(numberId, "10") + 1;

		} else {
			var resultNum = parseInt(numberId, "10") - 1;
		}

		var newId = '#openModal' + resultNum;
		$('.modalDialog').removeClass('open-popup-image animated fadeIn');
		$('#'+id).children('.max-img-wrapper').removeClass('animated zoomIn');

		$(newId).addClass('open-popup-image');

	});



});