/*--------------------------------------------
/*
/* Common Scripts for App Landing Page Demo 5
/*
-----------------------------------------------
*/
(function ($) {
	"use strict";

	/*----------------------------------------------------*/
	/*  Owl Carousel - HOME */
	/*----------------------------------------------------*/	
	$(".home-slider").owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		loop: false,
		mouseDrag: true,
		touchDrag: false,
		navText: ["<i class='icofont icofont-arrow-left circled-icon'></i>", "<i class='icofont icofont-arrow-right circled-icon'></i>"],
	});

	/*----------------------------------------------------*/
	/*  Owl Carousel - SCREENSHOTS */
	/*----------------------------------------------------*/
	$(".screenshots-slider").owlCarousel({
		nav: false,
		dots: true,
		autoplay: true,
		loop: false,
		mouseDrag: true,
		margin: 15,
		touchDrag: true,
		navText: ["<i class='icofont icofont-arrow-left circled-icon'></i>", "<i class='icofont icofont-arrow-right circled-icon'></i>"],
		responsive:{

			// breakpoint from 0 up
			0:{
				items:1,
				padding: 30
			},

			// breakpoint from 480 up
			480:{
				items:2,
			},

			// breakpoint from 600 up
			600:{
				items:3,
			},

			// breakpoint from 1000 up
			1000:{
				items:4,
				dots: false,
				margin: 0
			}
		}
	});

	/*----------------------------------------------------*/
	/*  SCREENSHOT IMAGE POPUP */
	/*----------------------------------------------------*/
	$('.screenshot-overlay a').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
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