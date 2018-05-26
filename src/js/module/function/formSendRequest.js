(() => {
	let $formSendRequest = $('.js-form-send-request');
	let $formSendRequestBody = $('.js-form-send-request-body');
	let $formSendRequestBtn = $('.js-form-send-request-btn');
	let $formSendRequestToggler = $('.js-form-send-request-toggler');

	$formSendRequestToggler.on('click', (event) => {
		event.preventDefault();
		$(event.currentTarget).fadeOut(0);
		$formSendRequestBtn.removeClass('is--hidden');
		$formSendRequestBody.removeClass('is--hidden');
	});
})();

