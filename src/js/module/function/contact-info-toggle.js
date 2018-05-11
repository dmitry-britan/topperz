(() => {
	let $el = $('.contact-info__icon');
	let limit = 992;

	if ($el.length) {
		let $html = $('html');
		let $body = $('body');

		$body.on('click touchend', (event) => {
			if ($(window).width() < limit) {
				let targetClassName = event.target.className.toString();

				if (targetClassName.indexOf('contact-info-active') !== -1) {
					$el.trigger('click');
				}
			}
		});
		$el.on('click touchend', (event) => {
			event.preventDefault();
			if ($(window).width() < limit) {
				$(event.currentTarget).parent().toggleClass('is--active');
				$html.toggleClass('contact-info-active');
				$body.toggleClass('contact-info-active');
			}
		});
	}
})();
