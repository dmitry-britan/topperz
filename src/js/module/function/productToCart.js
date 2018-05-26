(() => {
	let $productBtn = $('.product__action');
	let $window = $(window);

	$productBtn.on('click', (event) => {
		if ($window.width() > 700) {
			let $that = $(event.currentTarget);
			let $currentProduct = $that.parents('.product');
			let $cloneProduct = $currentProduct.clone();
			let width = $currentProduct.width();
			let startX = $currentProduct.offset().left;
			let startY = $currentProduct.offset().top;

			let $cart = $('.header__cart');
			let cartPosition = $cart.offset();

			$cloneProduct.addClass('is--cloned').css({
				position: 'absolute',
				left: startX,
				top: startY,
				width,
				height: width,
			});

			$('body').append($cloneProduct);
			$cloneProduct.find('.product__title').animate({opacity: 0}, 400);
			$cloneProduct.animate({
				left: cartPosition.left,
				top: cartPosition.top,
				opacity: 0,
				width: '60px',
				height: '60px',
			}, 400, 'linear', () => {$cloneProduct.remove()});
		}
	});
})();
