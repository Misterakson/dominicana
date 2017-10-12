$(document).ready(function(){

    // owl-carousel main page

    $('.carousel_2').owlCarousel({
        loop: true,
        items: 1,
        dots: true
    })

    // owl-carousel main page

    // spincrement main page
    $(window).scroll(function () { // Когда страница прокручивается
        var scrTop = $(window).scrollTop();
        if(scrTop>$('#main-page-numbers').offset().top - $(window).height()  ) {
            $(".spincrement").spincrement({
                duration: 3500,
            });
            $('#main-page-numbers h3').removeClass('spincrement');

        }
   });
    
    // spincrement main page

// owl-carousel service page

    owl = $(".carousel_1");
    prev = $('#left');
    next = $('#right');
    $(".carousel_1").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        stagePadding: 250,
        // autoplay: true,
        // autoplayTimeout: 3500,
    });
    next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
// owl-carousel service page

//calculate
    sum = 0;
    orders = {};
    services = '';
$('.additional-services-form input[type=checkbox]').click(function(){
    var price = $(this).attr('data-price');
    var checked = $(this).prop('checked');
    var id = $(this).attr('id');
    if(checked == true){
        sum += parseFloat(price);
        orders[$(this).attr('id')] = $('#'+id).next().html();
    } else if(checked == false) {
        sum -= parseFloat(price);
        delete orders[$(this).attr('id')];
        
    }
        
        // for (var key in orders){
        //     alert(key + " : " + orders[key]);
        // }


});

$('.order-form-open').click(function(){
        
        for (var serviceId in orders){
            services += orders[serviceId] + ", ";
        }
        $('#result-price').html(sum);
        $('#result-services').html(services);
});

//calculate

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
    	   delegate: '.mix:visible',
            type: 'image',
            removeDelay: 300,
		  mainClass: 'mfp-fade',
            gallery: {
            enabled:true
            }
        });
    });

    $('.order-form-open').magnificPopup();

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
    });

// mixitup




    }); 