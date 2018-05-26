(() => {
	let $productBtn = $('.product-single__action a');
	let $window = $(window);

	$productBtn.on('click', (event) => {
		if ($window.width() > 700) {
			let $that = $(event.currentTarget);
			let $currentProductPhoto = $that.parents('.product-single').find('.product-single__photo-link');
			let $cloneProductPhoto = $currentProductPhoto.clone();
			let dW = $currentProductPhoto.width() - 480;
			let dH = $currentProductPhoto.height() - 480;
			let startX = $currentProductPhoto.offset().left + dW / 2;
			let startY = $currentProductPhoto.offset().top + dH / 2;

			let $cart = $('.header__cart');
			let cartPosition = $cart.offset();

			$cloneProductPhoto.addClass('is--cloned').css({
				position: 'absolute',
				left: startX,
				top: startY,
			});

			$('body').append($cloneProductPhoto);
			$cloneProductPhoto.animate({
				left: cartPosition.left,
				top: cartPosition.top,
				opacity: 0,
				width: '60px',
				height: '60px',
			}, 400, 'linear', () => {$cloneProductPhoto.remove()});
		}
	});
})();
