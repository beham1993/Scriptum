//Quotation slider
(function($) {
	$(document).ready(function() {
		$('.owl-carousel').owlCarousel({
			autoplay:true,
			autoplayTimeout: 5000,
		    loop:true,
		    dots:true,
		    margin:10,
		    items:1,
		})
	});
})(jQuery);


//Resize in development block
$(window).load(windowSize);
$(window).resize(windowSize);

function windowSize(){
    if ($(window).width() > '1200'){
		if ($(window).width() > '1200'){
			$('div.development__picture').height(function(i,val){
				return $('div.development__icons').height();
	    	});
		}
    }
}



//Works
$(function() {
	var GammaSettings = {
			viewport : [ {
				width : 1200,
				columns : 3
			}, {
				width : 900,
				columns : 3
			}, {
				width : 500,
				columns : 2
			} , {
				width : 300,
				columns : 2
			} , {
				width : 0,
				columns : 2
			} ]
	};

	Gamma.init( GammaSettings );


});