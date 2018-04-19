function additivesToggler(options) {
	let toggler = options.toggler;
	let closer = options.closer;
	let additives = options.additives;

	$(`${toggler}, ${closer}`).on('click', (event) => {
		let $self = $(event.currentTarget);

		if ($self.parents(additives).hasClass('is--opened')) {
			$(additives).removeClass('is--opened');
		} else {
			$(additives).removeClass('is--opened');
			$self.parents(additives).toggleClass('is--opened');
		}
	});
}

let additivesProductOptions = {
	toggler: '.product__additives-toggler',
	closer: '.product__additives-close',
	additives: '.product__additives',
};

additivesToggler(additivesProductOptions);