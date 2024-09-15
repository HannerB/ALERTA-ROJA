/*---------------------------------------------
/*
/* Common Scripts for App Landing Page Demo 1
/*
-----------------------------------------------
*/
(function ($) {
	"use strict";

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
	/*  PIE CHART */
	/*----------------------------------------------------*/
	$('.chart').easyPieChart({
		animate: 2000,
		scaleColor: false,
		lineWidth: 10,
		barColor: '#ec3851',
		trackColor: '#e0e0e0',
		size: 180
	});

}(jQuery));