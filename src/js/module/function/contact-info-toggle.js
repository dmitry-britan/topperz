(() => {
	let $el = $('.contact-info__icon');

	if ($el.length) {
		let $body = $('body');

		$body.on('click', (event) => {
			let targetClassName = event.target.className.toString();

			if (targetClassName.indexOf('contact-info-active') !== -1) {
				$el.trigger('click');
			}
		});
		$el.on('click', (event) => {
			event.preventDefault();
			$(event.currentTarget).parent().toggleClass('is--active');
			$body.toggleClass('contact-info-active');
		});
	}
})();
