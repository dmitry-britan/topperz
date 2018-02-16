//
// Обработка элемента формы input[type=file]
// =================================================================
function showUploadThumb(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = (e) => {
			let $thumb = $(`img[data-upload="${$(input).attr('id')}"]`);

			$thumb.attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}
}
$('input[type=file]').not('.js-media-file').on('change', (event) => {
	let str = $(event.currentTarget).val();
	let $label = $(event.currentTarget).next();
	let labelText = $label.text();
	let i;

	if (str.lastIndexOf('\\')) {
		i = str.lastIndexOf('\\') + 1;
	} else {
		i = str.lastIndexOf('/') + 1;
	}

	let filename = str.slice(i);

	if (filename === '' || filename === undefined) {
		$label.text(labelText);
	} else {
		$label.text(filename);
	}

	showUploadThumb(event.currentTarget);
});
