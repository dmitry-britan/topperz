(() => {
	let toggler = '.product__additives-toggler';
	let closer = '.product__additives-close';
	let additives = '.product__additives';

	if (!$(toggler).length) {
		return false;
	}

	$(`${toggler}, ${closer}`).on('click', (event) => {
		let $self = $(event.currentTarget);

		$self.parents(additives).toggleClass('is--opened');
	});
})();
