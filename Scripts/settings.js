/*================================================================================================================

	Custom Settings

================================================================================================================*/



jQuery.noConflict();

var $body = jQuery("body");
var $header = jQuery("#header");
var screenWidth = $body.width();
var items = [];
var $container = jQuery('.isotope-projects');



/* After DOM is Initialized */

jQuery(document).ready( function() {

	$body.addClass("shorti-themes");
		
	// Scroll Bar
	
		jQuery("html").niceScroll({
			scrollspeed: 60,
			mousescrollstep: 30,
			cursorwidth: 16,
			cursorborder: 0,
			cursorcolor: '#777',
			cursorborderradius: 0,
			autohidemode: false,
			horizrailenabled: false
		});

	// Load Home
		
		if (!$body.hasClass('home')) {
		
			jQuery(".nav a").click(function() {
			
				window.location.href = base + this.hash;
			
			});
			
		}
	
	// Remove Empty <p></p> tags
	
		jQuery('p').each( function() {
		    var $this = jQuery(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
		        $this.remove();
		});
		
	// Mobile Nav
	
		jQuery(".mobile-nav .trigger").click(function(e){
		
			e.preventDefault();
		
			jQuery(this).parent().find("> ul, .regular").slideToggle();
			
		});
		
		jQuery(".mobile-nav ul li a").click(function(){
		
			jQuery(".mobile-nav > .regular").slideUp();
			
		});
		
	// Menu Links
	
		jQuery(".nav ul li").hover(
		    function()
		    {
		        jQuery(this).find("a").stop(true,true).animate({opacity: 1}, 200, 'easeInOutCirc');
		    },
		    function()
		    {
		        jQuery(this).find("a").stop(true,true).animate({opacity: .35}, 200, 'easeInOutCirc');
		    }
		);
		
	// Portfolio Search
	
		jQuery(".portfolio-search input").focus( function() {
			
			jQuery(this).parent().parent().stop(true,true).animate({width: "60%"}, 300);
	        jQuery(this).parent().find(".icon-search").stop(true,true).animate({color: "#495152"}, 300);
	        
	    });
	    
	    jQuery(".portfolio-search input").blur( function() {
	    
	    	jQuery(this).parent().parent().stop(true,true).animate({width: "40%"}, 300);
	        jQuery(this).parent().find(".icon-search").stop(true,true).animate({color: "#cacaca"}, 300);
	        
	    });

    // Portfolio Project Action
    
    	jQuery(".projects .project").hover(
			function()
			{
				jQuery(this).find(".project-action").stop(true,true).animate({height: "40px", opacity: 1}, 500, 'easeInOutCirc');
			},
			function() {
				jQuery(this).find(".project-action").stop(true,true).animate({height: "0px", opacity: 0, padding: "0"}, 700, 'easeInOutCirc');
			}
		);

	// Portfolio Slider Nav
    
    	jQuery(".type-folio .flexslider").hover(
			function()
			{
				jQuery(this).find(".flex-direction-nav").stop(true,true).fadeIn(500, 'easeInOutCirc');
			},
			function() {
				jQuery(this).find(".flex-direction-nav").stop(true,true).fadeOut(700, 'easeInOutCirc');
			}
		);

	// Smoothscroll
	
		jQuery('a[href^="#"]').not(".filter a, .tabs a, .jp-audio a").bind('click.smoothscroll',function (e) {
		
		    e.preventDefault();
		 
		    var target = this.hash,
		    $target = jQuery(target);
		    offsetscroll = ($target.offset().top) + -0;
		 
		    jQuery('html, body').stop().animate({
		    
		        'scrollTop': offsetscroll
		        
		    }, 1200, 'easeInOutCirc', function () {
		    
		        window.location.hash = target;
		        
		    });
		    
		});
		
	// Fixed Menu Active Class
		
		var topMenu = jQuery("#menu-fixed .nav > ul"),
		    topMenuHeight = topMenu.outerHeight() + 60,
		    menuItems = topMenu.find("a[href^='#']");
		   
			scrollItems = menuItems.map(function () {
		        var item = jQuery(jQuery(this).attr("href"));
		        if (item.length) return item
		    });
			
			jQuery(window).scroll(function () {
			    var fromTop = jQuery(this).scrollTop() + topMenuHeight;
			    var cur = scrollItems.map(function () {
			        if (jQuery(this).offset().top < fromTop) return this
			    });
			    cur = cur[cur.length - 1];
			    var id = cur && cur.length ? cur[0].id : "";
			    menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
			});
			
	// Sub Menus
	
		jQuery('#header .nav .nav-inner > ul, #header .nav .nav-inner > div > ul, #menu-fixed .nav > ul, #menu-fixed .nav > div > ul').supersubs({
			minWidth:    10,
			maxWidth:    18,
			extraWidth:  1,
			cssArrows:   false
		}).superfish({
			delay: 100,
			animation: {opacity:'show'}, // {height:'show'}
			cssArrows: false
		});
			
	// Fade in menu
	
		if (screenWidth > 568) {
		
		    var headerHeight = 160;
			jQuery(window).scroll(function(){
			
		           var pagetop = jQuery(this).scrollTop();
		           if (pagetop >= headerHeight) {
		                     jQuery("#menu-fixed").fadeIn();
		           }
		           if (pagetop <= headerHeight) {
		                     jQuery("#menu-fixed").fadeOut();
		           }
		
			});
			
		}

	// Form Label Hide
	
		/* Focus & Blur */
			
			jQuery("#contact_form input, #contact_form textarea, #commentform input, #commentform textarea").focus(function() {
			    jQuery(this).parent().find("> label").fadeOut(200);
			    jQuery(this).animate({borderColor: "#878787"}, 200);
			});
			
			jQuery("#contact_form input, #contact_form textarea, #commentform input, #commentform textarea").blur(function() {
			    jQuery(this).parent().find("> label").fadeIn(200).css({color: "#a7abad"});
			    jQuery(this).animate({borderColor: "#e7e7e7"}, 200);
			});
		
		/* Empty & Full */
		
			var input = jQuery("#contact_form input, #contact_form textarea, #commentform input, #commentform textarea");
			
			input.blur(function() {
			
				if ( jQuery(this).val() != '') {
				    jQuery(this).parent().find("> label").hide();
				
				} else {
				    jQuery(this).parent().find("> label").show();
				}
			
			});
	
	// PrettyPhoto
	
		jQuery(".pretty").prettyPhoto({
		
			animation_speed: "fast",
			autoplay_slideshow: true,
			slideshow: 7000
			
		});
		
	// Flexslider
	
		jQuery('.format-gallery .flexslider').flexslider({
			
			animation: "slide",
			directionNav: false,
			useCSS: false
			
		});
		
		jQuery('.single-project .flexslider').flexslider({
			
			animation:   "slide",
		    controlNav:  "thumbnails",
		    prevText:    "<i class='icon-arrow-left'></i>",
		    nextText:    "<i class='icon-arrow-right'></i>"
			
		});
		
	// Accordion
	
		jQuery(".accordion").accordion({ 
			animated: "slide",
			speed: "fast",
			autoHeight: false, 
			collapsible: true, 
			event: "click"
		});
		
		jQuery('.accordion h3').click(function(){
			
			if( jQuery(this).hasClass('ui-state-active') ){
				jQuery(this).find('i').attr('class','icon-minus-sign-alt');
			} else {
				jQuery(this).find('i').attr('class','icon-plus-sign-alt');
			}
			
			jQuery('.accordion h3').not('.ui-state-active').find('i').attr('class','icon-plus-sign-alt');
			
			return false;
		});
	
	// jQuery Tabs
	
		jQuery(".tabs").tabs({ selected: 0 });
	
});