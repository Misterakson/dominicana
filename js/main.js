$(document).ready(function(){

// accotdion
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
// accotdion

// magnific popup
	$('.photo-preview-wrapper').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
    	delegate: 'a',
        type: 'image',
        removeDelay: 300,
		mainClass: 'mfp-fade',
        gallery: {
          enabled:true
        }
    });
});

	$('.photo-mix').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
    	delegate: 'a',
        type: 'image',
        removeDelay: 300,
		mainClass: 'mfp-fade',
        gallery: {
          enabled:true
        }
    });
});

// magnific popup

// mixitup
var mixer = mixitup('.photo-mix');
var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
	selectors:{
		target: '.blog-item'
	},
	 "animation": {
        "duration": 250,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade scale(0.01) translateZ(-100px)"
    }
})

// mixitup
});