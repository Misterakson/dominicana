$(document).ready(function(){

	$('.question_title').click(function(){

		$(this).siblings().slideToggle();

		if($(this).children('img').hasClass('close_accordion')){
			alert('dicl');
			$(this).children('img').addClass('basic_accordion');
		}
		else{

			$(this).children('img').addClass('close_accordion');

		}


	});

});