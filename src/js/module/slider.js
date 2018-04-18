//
// Slider - on main page
// =================================================================
if ($('.js-slider').length) {
	$('.js-slider').slick({
		arrows: false,
		adaptiveHeight: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
}
//
// Products Slider on Cart Page
// =================================================================
if ($('.js-products-slider').length) {
	$('.js-products-slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 4000,
				settings: 'unslick',
			},
			{
				breakpoint: 640,
				settings: 'slick',
			},
		],
	});
}
