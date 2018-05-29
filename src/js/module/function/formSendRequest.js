(() => {
	let $formSendRequestBody = $('.js-form-send-request-body');
	let $formSendRequestBtn = $('.js-form-send-request-btn');
	let $formSendRequestTogglers = $('.js-form-send-request-toggler, .js-form-send-request-toggler-link');
	let $formSendRequestToggler = $('.js-form-send-request-toggler');

	$formSendRequestTogglers.on('click', (event) => {
		event.preventDefault();
		$formSendRequestToggler.fadeToggle(0);
		$formSendRequestBtn.toggleClass('is--hidden');
		$formSendRequestBody.toggleClass('is--hidden');
	});
})();

