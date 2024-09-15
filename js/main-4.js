/*--------------------------------------------

/* Common Scripts for App Landing Page Demo 4
/*
------------------------------------------------
*/
(function ($) {
	"use strict";

	/*----------------------------------------------------*/
	/*  SECONDARY NAVIGATION
	/*----------------------------------------------------*/
	var primaryNav = $( '.nav' ).html();
	var secondaryNav = $( '.secondary-menu-area' );
	var openIcon = $( '#nav-trigger-2' );
	var closeIcon = $( 'i.close-icon' );

	if( ( $( '.secondary-menu' ).has('li').length === 0) ) {
		$( primaryNav ).appendTo( '.secondary-menu' );
	}
	$( openIcon ).on('click', function(){
		$( secondaryNav ).toggleClass( 'secondary-menu-open' );
		$( closeIcon ).toggleClass( 'animated zoomIn' );
		return false;
	});
	$( closeIcon ).on('click', function() {
		if( secondaryNav.hasClass( 'secondary-menu-open' ) ) {
			$( secondaryNav ).removeClass( 'secondary-menu-open' );
			$( closeIcon ).toggleClass( 'animated zoomIn' );
		}
	});
	$( '.secondary-menu li a' ).on('click', function() {
		setTimeout(
			function() {
				$( secondaryNav ).removeClass( 'secondary-menu-open' );
				$( closeIcon ).toggleClass( 'animated zoomIn' );
			},
		1000);
	});

	/*----------------------------------------------------*/
	/*  Change Active State on Scroll - adding it again for secondary menu */
	/*----------------------------------------------------*/
	$(window).on('scroll', function () {
		var y = $(this).scrollTop();
		$('.secondary-menu li a[href*=#]:not([href=#])').each(function (event) {
			if (y >= $($(this).attr('href')).offset().top - 100) {
				$('.secondary-menu li a').parent().not(this).removeClass('active');
				$(this).parent().addClass('active');
			}
		});
	});

	/*----------------------------------------------------*/
	/*  Owl Carousel - HOME */
	/*----------------------------------------------------*/
	$(".home-slider").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		loop: false,
		mouseDrag: false,
		touchDrag: false,
		navText: ["<i class='icofont icofont-arrow-left circled-icon'></i>", "<i class='icofont icofont-arrow-right circled-icon'></i>"],
	});

	$(".home-slider").on("translate.owl.carousel", function(){
		$(".slider-item h1, .slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".slider-item .btn").removeClass("animated fadeInDown").css("opacity", "0");
		$(".slider-item .optin-form").removeClass("animated zoomIn").css("opacity", "0");
	});

	$(".home-slider").on("translated.owl.carousel", function(){
		$(".slider-item h1, .slider-item p").addClass("animated fadeInUp").css("opacity", "1");
		$(".slider-item .btn").addClass("animated fadeInDown").css("opacity", "1");
		$(".slider-item .optin-form").addClass("animated zoomIn").css("opacity", "1");
	});

	/*----------------------------------------------------*/
	/*  Owl Carousel - CUSTOMER FEEDBACK */
	/*----------------------------------------------------*/
	var feedbackSlider = $('.feedback-slider');
	feedbackSlider.owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		responsive:{

			// breakpoint from 600 up
			700:{
				items:2,
				nav: false,
				dots: true
			},

			// breakpoint from 1000 up
			1000:{
				items:3,
				nav: true,
				dots: false
			}
		}
	});

	/*----------------------------------------------------*/
	/*  MAGNIFIC POPUP */
	/*----------------------------------------------------*/

	//for videos and maps
	$('.popup-youtube, popup-vimeo, popup-map').magnificPopup({type:'iframe'});

	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				},
				//vimeo videos
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: 'http://player.vimeo.com/video/%id%?autoplay=1'
				},
				//google maps
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		}
	});

}(jQuery));