/* Style Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

jQuery(document).ready(function(){ 
						   
var styleswitcherstr = ' \
	<div class="switcher-inner"> \
	<h2>Color Schemes <a href="#"></a></h2> \
    <div class="content"> \
    <div class="switcher-box"> \
	<ul class="color_schemes"> \
	<h3 class="skin_title"> Color Schemes</h3>\
	<li><a id="default" class="styleswitch color"> Default 	</a></li> \
	<li><a id="blue" class="styleswitch color"> blue		</a></li> \
	<li><a id="green" class="styleswitch color"> green	</a></li> \
	<li><a id="pink" class="styleswitch color"> pink		</a></li> \
	<h3 class="skin_title"> Versions </h3>\
	<li><a id="light" class="styleswitch color"> Light	</a></li> \
	<li><a id="dark" class="styleswitch color"> Dark		</a></li> \
    </ul> </div><!-- End switcher-box --> \
    </div><!-- End content --> \
	';
	
jQuery(".switcher").prepend( styleswitcherstr );

});

/* boxed & wide syle */
jQuery(document).ready(function(){ 

var cookieName = 'wide';

function changeLayout(layout) {
jQuery.cookie(cookieName, layout);
jQuery('head link[name=layout]').attr('href', 'css/layout/' + layout + '.css');
}

if( jQuery.cookie(cookieName)) {
changeLayout(jQuery.cookie(cookieName));
}

jQuery("#wide").click( function(){ jQuery
changeLayout('wide');
});

jQuery("#boxed").click( function(){ jQuery
changeLayout('boxed');
});

});


/* background images */
jQuery(document).ready(function(){ 
  
  var startClass = jQuery.cookie('mycookie');
  jQuery("body").addClass("default");

/* Default */
jQuery("#default").click( function(){ 
  jQuery("body").removeClass('pink');
  jQuery("body").removeClass('green');
  jQuery("body").removeClass('blue');
  jQuery("body").removeClass('light');
  jQuery.cookie('mycookie','default');
 
});

jQuery("#pink").click( function(){ 
  jQuery("body").removeClass('default');
  jQuery("body").removeClass('green');
  jQuery("body").removeClass('blue');
  jQuery("body").removeClass('light');
  jQuery.cookie('mycookie','pink');
 
});

jQuery("#green").click( function(){ 
  jQuery("body").removeClass('default');
  jQuery("body").removeClass('pink');
  jQuery("body").removeClass('blue');
  jQuery("body").removeClass('light');
  jQuery.cookie('mycookie','green');
 
});

jQuery("#blue").click( function(){ 
  jQuery("body").removeClass('default');
  jQuery("body").removeClass('pink');
  jQuery("body").removeClass('green');
  jQuery("body").removeClass('light');
  jQuery.cookie('mycookie','blue');
 
});
jQuery("#light").click( function(){ 
  jQuery("body").removeClass('default');
  jQuery("body").removeClass('pink');
  jQuery("body").removeClass('green');
  jQuery("body").removeClass('blue');
  jQuery.cookie('mycookie','light');
 
});

if (jQuery.cookie('mycookie')) {
  jQuery('body').addClass(jQuery.cookie('mycookie'));
}

});

/* Skins Style */
jQuery(document).ready(function(){ 

var cookieName = 'default';

function changeLayout(layout) {
jQuery.cookie(cookieName, layout);
jQuery('head link[name=skins]').attr('href', 'css/skins/' + layout + '.css');
}

if( jQuery.cookie(cookieName)) {
changeLayout(jQuery.cookie(cookieName));
}

jQuery("#default").click( function(){ jQuery
changeLayout('default');
});

jQuery("#pink").click( function(){ jQuery
changeLayout('pink');
});

jQuery("#green").click( function(){ jQuery
changeLayout('green');
});

jQuery("#blue").click( function(){ jQuery
changeLayout('blue');
});
jQuery("#light").click( function(){ jQuery
changeLayout('light');
});

});



/* Reset Switcher */
jQuery(document).ready(function(){ 

// Style Switcher	
jQuery('.switcher').animate({
right: '-175px'
});

jQuery('.switcher h2 a').click(function(e){
e.preventDefault();
var div = jQuery('.switcher');
// console.log(div.css('left'));
if (div.css('right') === '-175px') {
jQuery('.switcher').animate({
  right: '0px'
}); 
} else {
jQuery('.switcher').animate({
  right: '-175px'
});
}
})
 

		 
});						   

