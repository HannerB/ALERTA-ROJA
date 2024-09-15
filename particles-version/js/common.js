/*-----------------------------------------------
/*
/* Common Scripts for Appraxx all Demo
/*
--------------------------------------------------
*/
(function ($) {
	"use strict";

	/*----------------------------------------------------*/
	/*  PRELAODER */
	/*----------------------------------------------------*/
	$(window).on('load', function(){

		// PRELOADER
		$(".preloader").fadeOut(500);

		/*----------------------------------------------------*/
		/*  Smooth Scrolling */
		/*----------------------------------------------------*/
		$('a[href*=#]:not([href=#])').on('click',function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: (target.offset().top - 10) // can be used navHeight
					}, 850);
					return false;
				}
			}
		});

	}); // end window load function


	/*----------------------------------------------------*/
	/*  Smooth Scrolling When Come from another Page */
	/*----------------------------------------------------*/
	if(window.location.href.indexOf("#") > -1) {
		$('html,body').animate({
			scrollTop: $(window.location.hash).offset().top
		}, 1000);
	}

	/*----------------------------------------------------*/
	/*  Scrollspy */
	/*----------------------------------------------------*/
	$('body').scrollspy({ target: '#navigation' });

    /*----------------------------------------------------*/
	/*  OFF CANVAS NAVIGATION FOR MOBILE */
	/*----------------------------------------------------*/
	var navTrigger = $( '#nav-trigger' );
	var mobileMenu = $( '.navbar-collapse' );
	var mainBody = $( 'body' );

	$( navTrigger ).on( 'click', function() {
		$( mobileMenu ).toggleClass( 'mobile-show' );
		$( mainBody ).toggleClass( 'mobile-body' );
		$(this).find('i').toggleClass('icofont icofont-justify-all icofont icofont-ui-close');
		return false;
	});

	// hide mobile menu when start scrolling on mobile
	$(window).on('scroll', function() {
		$( mobileMenu ).removeClass( 'mobile-show');
		$( mainBody ).removeClass( 'mobile-body' );
		$( '#nav-trigger' ).find('i').removeClass('icofont-ui-close').addClass('icofont-justify-all');
	});

	/*----------------------------------------------------*/
	/*  WoW JS activation */
	/*----------------------------------------------------*/
	new WOW().init();

	/*----------------------------------------------------*/
	/*  Back to Top */
	/*----------------------------------------------------*/
	$("#back-top").hide();
	$(function () {
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').on('click',function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	/*----------------------------------------------------*/
	/* Toggle CLASS TO BODY WHEN SCROLL DOWN & UP
	/*----------------------------------------------------*/
	$(function() {
	    var body = $("body");
	    $(window).on('scroll', function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 300) {
	            body.removeClass('body-check-class').addClass("body-extra-class");
	        } else {
	            body.removeClass("body-extra-class").addClass('body-check-class');
	        }
	    });
	});

	/*----------------------------------------------------*/
	/* FIXED SOCIAL ICON ON THE LEFT SIDE
	/*----------------------------------------------------*/
	var sTrigger = $('.social-trigger');
	var sIconBar = $('.fixed-social-bar');
	$(sTrigger).on('click', function() {
		$(this).toggleClass('icofont icofont-arrow-right icofont icofont-arrow-left');
		$(sIconBar).toggleClass('fixed-social-toggle');
	});


	/*----------------------------------------------------*/
	/*  BLOG */
	/*----------------------------------------------------*/
	var comenttrigger = $( '.comment-title' );
	var commentarrow = $( '.comment-title i' );
	var comment = $( '.comments-list' );
	var postcomment = $( '.post-my-comment' );
	$( comenttrigger ).on( 'click', function(){
		$( this ).toggleClass( 'comment-title-bg' );
		$( comment ).slideToggle();
		$( postcomment ).slideToggle();
		$(commentarrow).toggleClass('icofont icofont-caret-right icofont icofont-caret-down');
	});

	// when user comes from blog page by clicking 'comments'
	// so comments will be shown
	if(window.location.href.indexOf("#comments") > -1) {
		$( comenttrigger ).toggleClass( 'comment-title-bg' );
		$( commentarrow ).toggleClass( 'icofont icofont-caret-right icofont icofont-caret-down' );
		$( comment ).slideToggle();
		$( postcomment ).slideToggle();
	}

	/*----------------------------------------------------*/
	/*  SUBMENU */
	/*----------------------------------------------------*/

	// Adding Class in li if it has submenu
	$('.nav li:has(ul)').addClass('has-sub-menu');

	// adding caret for mobile / for desktop css:after used
	$( '<i class="icofont icofont-simple-down"></i>' ).insertAfter('.has-sub-menu > a');

	// measuring the height of the menu and add that as caret height
	var liHeight = $( '.nav > li > a' ).outerHeight();
	var mblCaret = $( 'li.has-sub-menu a + i' );
	$( mblCaret ).css({
		'height': liHeight+'px',
		'line-height': liHeight+'px'
	});

	var navbar = $( '.navbar' );
	$( mblCaret ).on( 'click', function( event ){
		event.preventDefault();
		$( navbar ).removeClass( 'transition' );
		$( this ).next('ul').slideToggle();
	});

	/*----------------------------------------------------*/
	// /*  PARTICLES JS */ MODIFIED for using by CLASS
	/*----------------------------------------------------*/
	$(".particles-js").each(function() {

		var $tmsac = $(this).attr('id');

		particlesJS($tmsac, {
			"particles": {
				"number": {
				  "value": 89,
				  "density": {
					"enable": true,
					"value_area": 800
				  }
				},
				"color": {
				  "value": "#ffffff"
				},
				"shape": {
				  "type": "polygon",
				  "stroke": {
					"width": 0,
					"color": "#000000"
				  },
				  "polygon": {
					"nb_sides": 4
				  },
				  "image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				  }
				},
				"opacity": {
				  "value": 0.5,
				  "random": true,
				  "anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				  }
				},
				"size": {
				  "value": 3,
				  "random": true,
				  "anim": {
					"enable": true,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				  }
				},
				"line_linked": {
				  "enable": true,
				  "distance": 150,
				  "color": "#ffffff",
				  "opacity": 0.4,
				  "width": 1
				},
				"move": {
				  "enable": true,
				  "speed": 6,
				  "direction": "none",
				  "random": true,
				  "straight": false,
				  "out_mode": "out",
				  "bounce": false,
				  "attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				  }
				}
				},
				"interactivity": {
				"detect_on": "canvas",
				"events": {
				  "onhover": {
					"enable": true,
					"mode": "repulse"
				  },
				  "onclick": {
					"enable": true,
					"mode": "push"
				  },
				  "resize": true
				},
				"modes": {
				  "grab": {
					"distance": 400,
					"line_linked": {
					  "opacity": 1
					}
				  },
				  "bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				  },
				  "repulse": {
					"distance": 200,
					"duration": 0.4
				  },
				  "push": {
					"particles_nb": 4
				  },
				  "remove": {
					"particles_nb": 2
				  }
				}
			},
			"retina_detect": true
		});

	});// end particles js

}(jQuery));