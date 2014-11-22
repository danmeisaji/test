/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.0
 * Updated 12/109/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */

(function($) {
	$.fn.equalHeights = function(minHeight, maxHeight) {
		tallest = (minHeight) ? minHeight : 0;
		this.each(function() {
			if($(this).height() > tallest) {
				tallest = $(this).height();
			}
		});
		if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
		return this.each(function() {
			$(this).height(tallest).css();
		});
			
	}
})(jQuery);


/* Start BX slider*/
jQuery(document).ready(function($){	   
/* BX slider 1*/
   if ($('.slider1').length){
		$('.slider1').bxSlider({ slideWidth: 2200,  minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500, auto: true });
    }
  if ($('.slider2').length){
		$('.slider2').bxSlider({  mode: 'fade', slideWidth: 740, minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500, auto: true });
    }
	if ($('.slider3').length){
		$('.slider3').bxSlider({ slideWidth: 740, mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic',  speed: 2000 });
    }
	if ($('.slider4').length){
		$('.slider4').bxSlider({ slideWidth: 370, minSlides: 1, maxSlides: 1, slideMargin: 0,  speed: 1000  });
    }
	if ($('.slider5').length){
		$('.slider5').bxSlider({ slideWidth: 572,  mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic', minSlides: 1, maxSlides: 1, slideMargin: 0,  speed: 2000 });
    }
	if ($('.slider6').length){
		$('.slider6').bxSlider({ mode: 'fade',  slideWidth: 246, minSlides: 1, maxSlides: 1, slideMargin: 0,  speed: 1000, auto: true, pager: false });
    }
	if ($('.slider7').length){
		$('.slider7').bxSlider({ slideWidth: 740,  minSlides: 3, maxSlides: 9, slideMargin: 30,  speed: 2000, auto: true, pager: false });
    }
	if ($('.slider8').length){
		$('.slider8').bxSlider({ slideWidth: 570,  mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic', minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500, pager: false });
    }
	if ($('.slider9').length){
		$('.slider9').bxSlider({ slideWidth: 770,  mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic', minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500 });
    }
	if ($('.slider10').length){
		$('.slider10').bxSlider({ slideWidth: 1170,  mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic', minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500 });
    }
	if ($('.slider11').length){
		$('.slider11').bxSlider({ slideWidth: 311,  mode: 'horizontal',  useCSS: false, easing: 'easeOutElastic', minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 1500 });
    }
	if ($('.slider12').length){
		$('.slider12').bxSlider({ mode: 'horizontal', slideWidth: 700,  minSlides: 1, maxSlides: 8, slideMargin: 0,  speed: 2500, auto: true, pager: false });
    }
/* BX slider 1*/

	/* Bootstrap Tooltip */
	 $("[rel='tooltip']").tooltip();
	 /* Bootstrap Tooltip */
	
    /* Start of Counter */
    var austDay = new Date();
    austDay = new Date(2013, 8 - 1, 5, 11, 00);
    $('#new_counter').countdown({ until: austDay });
    $('#year').text(austDay.getFullYear());	    
	/* End of Counter */

		$('.show_share').hide();
		$('.show_search').hide();

		
	$('#show_share').click(function(event){
		event.preventDefault();
		$('.show_search').hide(0);
		$('.show_share').show(1500);

	});
	
	$('#show_search').click(function(event){
		event.preventDefault();
		$('.show_share').hide(0);
		$('.show_search').show(1500);
	});
	/* Equal Heights
	$(".eq-col").equalHeights();
	 Equal Heights */
	
});
/* End BX slider*/
 