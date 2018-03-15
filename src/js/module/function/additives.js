function additivesToggler(options) {
	let toggler = options.toggler;
	let closer = options.closer;
	let additives = options.additives;

	$(`${toggler}, ${closer}`).on('click', (event) => {
		let $self = $(event.currentTarget);

		$self.parents(additives).toggleClass('is--opened');
	});
}

let additivesProductOptions = {
	toggler: '.product__additives-toggler',
	closer: '.product__additives-close',
	additives: '.product__additives',
};

additivesToggler(additivesProductOptions);