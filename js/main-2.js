/*---------------------------------------------
/*
/* Common Scripts for App Landing Page Demo 2
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
		dots: true,
		autoplay: true,
		loop: false,
		mouseDrag: false,
		touchDrag: false,
		navText: ["<i class='icofont icofont-arrow-left circled-icon'></i>", "<i class='icofont icofont-arrow-right circled-icon'></i>"],
	});

	$(".home-slider").on("translate.owl.carousel", function(){
		$(".slider-item h1, .slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".slider-item .btn").removeClass("animated fadeInDown").css("opacity", "0");
		$(".banner-image").removeClass("animated zoomIn").css("opacity", "0");
	});

	$(".home-slider").on("translated.owl.carousel", function(){
		$(".slider-item h1, .slider-item p").addClass("animated fadeInUp").css("opacity", "1");
		$(".slider-item .btn").addClass("animated fadeInDown").css("opacity", "1");
		$(".banner-image").addClass("animated zoomIn").css("opacity", "1");
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