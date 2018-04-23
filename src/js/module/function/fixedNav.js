(() => {
	let $window = $(window);
	let limit = $('.header').height();
	let $nav = $('.nav');
	let $body = $('body');
	let $cart = $('.cart');

	function fixedNav(self) {
		if ($(self).scrollTop() >= limit && !$nav.hasClass('is--fixed')) {
			$nav.addClass('is--fixed');
			$body.addClass('is--fixed-nav');
		} else if ($(self).scrollTop() < limit && $nav.hasClass('is--fixed')) {
			$nav.removeClass('is--fixed');
			$body.removeClass('is--fixed-nav');
		}
	}
	function fixedCart(self) {
		if ($(self).scrollTop() >= limit && !$cart.hasClass('is--fixed')) {
			$cart.addClass('is--fixed');
		} else if ($(self).scrollTop() < limit && $cart.hasClass('is--fixed')) {
			$cart.removeClass('is--fixed');
		}
	}
	$window.on('scroll', (event) => {
		let self = event.currentTarget;

		if ($window.width() > 700) {
			return false;
		}

		fixedNav(self);
		fixedCart(self);

	});
})();
