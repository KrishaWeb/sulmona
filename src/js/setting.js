jQuery(window).on("load",function() {
	"use strict";
	jQuery(".pre-loader").fadeToggle("medium");
	var $container = $('.gallery-masonry');
	$container.isotope({
		itemSelector: 'li',
		percentPosition: true,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
});
jQuery(document).ready(function(){
	"use strict";
	var headerheight = jQuery('.header-wrap.fixed-header').height();
	var mainbanner = jQuery('.main-banner').height();
	// Background images
	jQuery(".bg_img").each( function ( i, elem ) {
		var img = jQuery( elem );
		jQuery(this).hide();
		jQuery(this).parent().css( {
			background: "url(" + img.attr( "src" ) + ") no-repeat center center",
		});
	});
	jQuery('.title-box-arrow').on('click',function (e) {
		e.preventDefault();
		var target = jQuery(this).data('id');
		jQuery('html, body').stop().animate({
			'scrollTop': jQuery("#"+target).offset().top - (headerheight + 15)
		}, 1000, 'swing', function () {
		});
	});

	// down arrow
	jQuery('.down-arrow a').on('click',function (e) {
		if(jQuery(window).width() < 768)
		{
			jQuery('html, body').stop().animate({
				'scrollTop': jQuery("#down-arrow").offset().top
			}, 1000, 'swing', function(){
			});
		}
		else
		{
			jQuery('html, body').stop().animate({
				'scrollTop': jQuery("#down-arrow").offset().top - headerheight
			}, 1000, 'swing', function(){
			});
		}
	});

	// jQuery(".gallery-photo").fancybox({
	// 	afterLoad: function() {
	// 		this.title = '<a href="gallery.php">view photo gallery</a> ' + this.title;
	// 	},
	// 	padding: 4,
	// 	wrapCSS:'gallery-photo-popup',
	// 	helpers : {
	// 		title: {
	// 			type: 'outside'
	// 		}
	// 	}
	// });
	$(".gallery-photo").colorbox({
		//rel:'group1',
		classname: "true",
		slideshow: !0,
		slideshowAuto: !0,
		scalePhotos: !0,
		maxWidth: 80 + "%",
		title: function(){
			var url = $(this).attr('href');
			return '<a href="gallery.php" class="view-photo-link">view photo gallery</a>';
		},
		onOpen:function(){
			$("#colorbox").addClass("gallery-photo-popup");
			$('body').css({ overflow-y: 'hidden !important' });
		},
		onClosed: function(){
			$('body').css({ overflow: '' });
		}
	});
	// jQuery("a[rel^=author]").fancybox({
	// 	// maxWidth : 1000,
	// 	// maxHeight : 700,
	// 	width  : '100%',
	// 	height  : '100%',
	// 	padding: 4,
	// 	nextEffect:'elastic',
	// 	prevEffect:'elastic',
	// 	helpers: {
	// 		title: {
	// 			type: 'over'
	// 		},
	// 		overlay: {
	// 			locked: false
	// 		},
	// 	},
	// });
	$(".gallery-masonry .bg-photo").colorbox({
		rel:'.gallery-masonry .bg-photo',
		classname:"true",
		transition:"fade",
		slideshow: !0,
		slideshowAuto: !0,
		scalePhotos: !0,
		maxWidth: 80 + "%",
		onOpen: function(){
			$("#colorbox").addClass("gallery-photo-popup");
		}
	});

	// jQuery(".popup-video").fancybox({
	// 	padding: 4,
	// 	wrapCSS:'gallery-photo-popup',
	// 	helpers : {
	// 		title: {
	// 			type: 'outside'
	// 		}
	// 	}
	// });
	if (jQuery(window).width() < 767) {
		jQuery(".popup-video").colorbox({
			iframe:true,
			classname:"true",
			innerWidth: 80 + "%",
			maxWidth: 640 + "px",
			innerHeight: 80 + "%",
			maxHeight: 390 + "px",
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
		});
	}
	else{
		$(".popup-video").colorbox({
			iframe:true,
			classname:"true",
			innerWidth:640,
			innerHeight:390,
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
			maxWidth: 640 + "px",
			onOpen: function(){
				$("#colorbox").addClass("gallery-photo-popup");
			}
		});
	}

	// left menu
	jQuery('.menu-icon, .leftmenu a.close').click(function(){
		jQuery('.leftmenu').toggleClass('open');
		//jQuery('.leftmenu').slideToggle("slow");
	});

	jQuery(document).bind('touchstart click', function(e){
		if(jQuery(e.target).parents('.leftmenu').length ==0 && !jQuery(e.target).is('.menu-icon')){
			jQuery('.leftmenu').removeClass('open');
			//jQuery('.leftmenu').slideUp("slow");
		}
	});

	var link = jQuery(".leftmenu li span");
	link.on('click', function(e) {
		e.preventDefault();
		var a = jQuery(this).data("id");
		jQuery("ul#"+a).slideToggle(400);
		jQuery("div#"+a).slideToggle(400);
		jQuery(this).toggleClass('open');
	});

});
jQuery(window).on('resize',function () {
	if (jQuery(window).width() < 767) {
		jQuery(".popup-video").colorbox.resize({
			innerWidth: 80 + "%",
			maxWidth: 640 + "px",
			innerHeight: 80 + "%",
			maxHeight: 390 + "px"
		});
	}
	else{
		$(".popup-video").colorbox.resize({
			iframe:true,
			classname:"true",
			innerWidth:640,
			innerHeight:390,
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
			maxWidth: 640 + "px",
			onOpen: function(){
				$("#colorbox").addClass("gallery-photo-popup");
			}
		});
	}
});
// header on scroll class add
jQuery(window).on('scroll', function () {
	if ( jQuery(this).scrollTop() > 500 ) {
		jQuery('.header-wrap.fixed-header' ).addClass( "sticky" );
	} else {
		jQuery('.header-wrap.fixed-header' ).removeClass( "sticky" );
	}
});